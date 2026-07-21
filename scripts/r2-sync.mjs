#!/usr/bin/env node
// One small tool, two directions, for the private "finchhive" R2 bucket.
// Both take the SAME kind of argument — an optional path under public/ —
// so they're as symmetric and simple as possible:
//
//   npm run pull [prefix]     (node scripts/r2-sync.mjs pull [prefix])
//     Downloads public/<prefix> (default: everything) from the REAL bucket
//     into the LOCAL emulated bucket used by `wrangler pages dev`, so
//     /api/... requests resolve to real images locally. Skips anything
//     already up to date, so repeat runs are fast. This is what `npm start`
//     runs automatically before starting dev.
//
//   npm run push [prefix]     (node scripts/r2-sync.mjs push [prefix])
//     Uploads everything under ./r2-assets/<prefix> (default: everything in
//     ./r2-assets) up to public/<prefix> in the REAL bucket, mirroring the
//     same relative paths. Skips files already identical remotely. Never
//     deletes anything remotely — only adds/updates. Requires an R2 API
//     token with Object Read & Write permission.
//
//     To add new images: drop them into ./r2-assets following the same
//     folder layout as the bucket (see r2-assets/README.md), then run
//     `npm run push`.
//
// Both need R2_ACCESS_KEY_ID / R2_SECRET_ACCESS_KEY — see .env.example.
//   npm run pull                  # everything
//   npm run pull -- imgs/brands   # just one subfolder
//   npm run push                  # everything currently in ./r2-assets
//   npm run push -- imgs/brands   # just ./r2-assets/imgs/brands
// (the `--` is only needed when passing an argument through npm)

import {
  S3Client,
  ListObjectsV2Command,
  GetObjectCommand,
  PutObjectCommand,
  HeadObjectCommand,
} from "@aws-sdk/client-s3";
import { getPlatformProxy } from "wrangler";
import { mkdir, writeFile, readFile, readdir } from "node:fs/promises";
import path from "node:path";
import crypto from "node:crypto";

const ACCOUNT_ID = "3b858374d9a5c95a61d0ac0a5c4ca244";
const BUCKET = "finchhive";
const MANIFEST_PATH = path.join(".wrangler", "r2-pull-manifest.json");
const LOCAL_ASSETS_DIR = "r2-assets";

// Same fallback table as functions/api/[[key]].ts, kept in sync manually —
// used when uploading via `push` so new files get a sane Content-Type.
const EXTENSION_CONTENT_TYPES = {
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".avif": "image/avif",
  ".mp4": "video/mp4",
  ".webm": "video/webm",
  ".mov": "video/quicktime",
  ".ttf": "font/ttf",
  ".otf": "font/otf",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".json": "application/json",
  ".txt": "text/plain; charset=UTF-8",
  ".xml": "application/xml",
};

function guessContentType(key) {
  const dot = key.lastIndexOf(".");
  if (dot === -1) return "application/octet-stream";
  return EXTENSION_CONTENT_TYPES[key.slice(dot).toLowerCase()] ?? "application/octet-stream";
}

function requireCredentials() {
  const accessKeyId = process.env.R2_ACCESS_KEY_ID;
  const secretAccessKey = process.env.R2_SECRET_ACCESS_KEY;
  if (!accessKeyId || !secretAccessKey) {
    console.error(
      "Missing R2_ACCESS_KEY_ID / R2_SECRET_ACCESS_KEY.\n" +
        "See .env.example for exactly how to create an R2 API token and set these\n" +
        "(cp .env.example .env, fill in the two R2_* values, then re-run).",
    );
    process.exit(1);
  }
  return { accessKeyId, secretAccessKey };
}

function makeClient() {
  const { accessKeyId, secretAccessKey } = requireCredentials();
  return new S3Client({
    region: "auto",
    endpoint: `https://${ACCOUNT_ID}.r2.cloudflarestorage.com`,
    credentials: { accessKeyId, secretAccessKey },
  });
}

async function* listAllObjects(client, prefix) {
  let continuationToken;
  do {
    const page = await client.send(
      new ListObjectsV2Command({ Bucket: BUCKET, Prefix: prefix, ContinuationToken: continuationToken }),
    );
    for (const obj of page.Contents ?? []) {
      // Skip R2 dashboard "folder" placeholder objects (zero-byte keys
      // ending in "/", created when you click "new folder" in the UI) —
      // they're never requested by the app and aren't real files.
      if (obj.Key && !obj.Key.endsWith("/")) yield obj;
    }
    continuationToken = page.IsTruncated ? page.NextContinuationToken : undefined;
  } while (continuationToken);
}

// Runs `tasks` with at most `concurrency` running at once. This is what
// makes seeding 163+ objects take a few seconds instead of a few minutes.
// (An earlier version of this script shelled out to a separate `wrangler`
// CLI process per file instead of using getPlatformProxy — that both had
// ~1s of process-startup overhead per file AND, run concurrently, caused
// multiple Wrangler processes to corrupt/deadlock on the same local state
// file. getPlatformProxy avoids both problems: one process, one shared
// binding, safe to call concurrently — confirmed with a 20-way concurrent
// write test.)
async function runWithConcurrency(items, concurrency, worker) {
  let cursor = 0;
  async function runNext() {
    const index = cursor++;
    if (index >= items.length) return;
    await worker(items[index], index);
    await runNext();
  }
  await Promise.all(Array.from({ length: Math.min(concurrency, items.length) }, runNext));
}

async function loadManifest() {
  try {
    return JSON.parse(await readFile(MANIFEST_PATH, "utf8"));
  } catch {
    return {};
  }
}

async function saveManifest(manifest) {
  await mkdir(path.dirname(MANIFEST_PATH), { recursive: true });
  await writeFile(MANIFEST_PATH, JSON.stringify(manifest, null, 2));
}

async function downloadObjectBuffer(client, key) {
  const { Body } = await client.send(new GetObjectCommand({ Bucket: BUCKET, Key: key }));
  const chunks = [];
  for await (const chunk of Body) chunks.push(chunk);
  return Buffer.concat(chunks);
}

async function pull(prefixArg) {
  const client = makeClient();
  const prefix = `public/${prefixArg ?? ""}`.replace(/\/+$/, "");

  console.log(`Checking "${prefix}" against the real bucket...`);
  const manifest = await loadManifest();
  const remoteObjects = [];
  for await (const obj of listAllObjects(client, prefix)) remoteObjects.push(obj);

  if (remoteObjects.length === 0) {
    console.log("No objects found under that prefix — nothing to pull.");
    return;
  }

  const toDownload = remoteObjects.filter((o) => manifest[o.Key] !== o.ETag);
  const upToDate = remoteObjects.length - toDownload.length;
  console.log(
    `${remoteObjects.length} object(s) total — ${upToDate} already up to date locally, ${toDownload.length} to fetch.`,
  );

  if (toDownload.length === 0) {
    console.log("Local emulated bucket is already up to date. Nothing to do.");
    return;
  }

  // Talks to the SAME local emulated bucket `wrangler pages dev` uses
  // (both read wrangler.toml's [[r2_buckets]] config and the default
  // .wrangler/state persistence directory), but in-process — no need to
  // spawn a separate `wrangler` CLI invocation per file.
  const proxy = await getPlatformProxy({ configPath: "wrangler.toml" });
  const localBucket = proxy.env["finchhive-public"];
  let done = 0;
  try {
    await runWithConcurrency(toDownload, 8, async (obj) => {
      const buffer = await downloadObjectBuffer(client, obj.Key);
      await localBucket.put(obj.Key, buffer);
      manifest[obj.Key] = obj.ETag;
      done += 1;
      console.log(`  [${done}/${toDownload.length}] ${obj.Key}`);
    });
  } finally {
    await proxy.dispose();
  }

  await saveManifest(manifest);
  console.log(`Done. Local emulated bucket now mirrors "${prefix}" from production.`);
}

async function* walkLocalFiles(dir) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) yield* walkLocalFiles(full);
    else if (entry.isFile()) yield full;
  }
}

function md5Hex(buffer) {
  return crypto.createHash("md5").update(buffer).digest("hex");
}

async function remoteEtagOf(client, key) {
  try {
    const head = await client.send(new HeadObjectCommand({ Bucket: BUCKET, Key: key }));
    return head.ETag?.replaceAll('"', "");
  } catch {
    return undefined; // doesn't exist remotely yet
  }
}

async function push(prefixArg) {
  const localDir = path.join(LOCAL_ASSETS_DIR, prefixArg ?? "");
  const remotePrefix = `public/${prefixArg ?? ""}`.replace(/\/+$/, "");

  const client = makeClient();

  let localFiles = [];
  try {
    // Skip README.md — that's this folder's own usage docs, not an asset
    // to upload (confirmed the hard way: an early version of this script
    // uploaded r2-assets/README.md itself to the bucket).
    for await (const f of walkLocalFiles(localDir)) {
      if (path.basename(f).toLowerCase() !== "readme.md") localFiles.push(f);
    }
  } catch (err) {
    if (err.code === "ENOENT") {
      console.log(
        `${localDir}/ doesn't exist — nothing to push.\n` +
          `To upload new assets: drop files into ./${LOCAL_ASSETS_DIR}/ (following the same\n` +
          `folder layout as the bucket — see ${LOCAL_ASSETS_DIR}/README.md), then run \`npm run push\` again.`,
      );
      return;
    }
    throw err;
  }

  if (localFiles.length === 0) {
    console.log(`No files found under ./${localDir} — nothing to push.`);
    return;
  }

  console.log(`Checking ${localFiles.length} local file(s) against "${remotePrefix}"...`);
  let uploaded = 0;
  let skipped = 0;
  for (const filePath of localFiles) {
    const rel = path.relative(localDir, filePath).split(path.sep).join("/");
    const key = `${remotePrefix}/${rel}`;
    const buffer = await readFile(filePath);
    const localHash = md5Hex(buffer);
    const remoteEtag = await remoteEtagOf(client, key);

    // R2/S3's ETag for a normal (non-multipart) upload is the content's MD5
    // hex digest — true for every file size in this project (even the
    // largest asset, ~70MB, uploads as a single PUT well under R2's 5GB
    // single-part limit), so this is a reliable "already identical?" check.
    if (remoteEtag === localHash) {
      skipped += 1;
      console.log(`  [unchanged, skipped] ${key}`);
      continue;
    }

    await client.send(
      new PutObjectCommand({ Bucket: BUCKET, Key: key, Body: buffer, ContentType: guessContentType(key) }),
    );
    uploaded += 1;
    console.log(`  [uploaded] ${key}`);
  }

  console.log(`Done. Uploaded ${uploaded}, skipped ${skipped} unchanged (${localFiles.length} total).`);
  console.log('Nothing was deleted remotely — "push" only adds/updates, on purpose.');
}

const [, , command, prefixArg] = process.argv;

if (command === "pull") {
  await pull(prefixArg);
} else if (command === "push") {
  await push(prefixArg);
} else {
  console.error(
    "Usage:\n" +
      "  node scripts/r2-sync.mjs pull [prefix]\n" +
      "  node scripts/r2-sync.mjs push [prefix]\n" +
      "See the comment block at the top of this file, or README.md §2/§3, for details.",
  );
  process.exit(1);
}
