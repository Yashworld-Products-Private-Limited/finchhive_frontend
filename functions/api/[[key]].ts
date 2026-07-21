// Cloudflare Pages Function — serves private R2 objects over the same
// origin as the site, at /api/<path>.
//
// Example: a browser request to /api/imgs/brands/trustbrands1.png reads the
// object stored at `public/imgs/brands/trustbrands1.png` in the
// `finchhive-public` R2 binding (bound to the `finchhive` bucket) and streams
// it back. The bucket itself stays private — nothing is exposed via a public
// R2 URL or custom domain.
//
// This is the ONLY image/asset route for the app. Do not add sibling
// `[key].ts`/`.js` files here — a single-segment route can't match nested
// keys like `imgs/brands/trustbrands1.png`, which is why the catch-all
// (double brackets) form is required.
import type { R2Bucket } from "@cloudflare/workers-types";

interface Env {
  "finchhive-public": R2Bucket;
}

interface Params {
  key?: string | string[];
}



// This project's tsconfig combines `"lib": ["dom", ...]` with
// `"types": ["@cloudflare/workers-types"]`, which makes the ambient global
// `Headers` type ambiguous between the two. At runtime, inside a Pages
// Function, there is only ever one `Headers` implementation (the Workers
// one), so these casts just resolve a compile-time-only conflict.
type WorkersHeaders = import("@cloudflare/workers-types").Headers;

const OBJECT_PREFIX = "public/";

// R2 dashboard uploads don't always set a correct Content-Type. Fall back to
// a guess based on the file extension so images/video still render/play.
const EXTENSION_CONTENT_TYPES: Record<string, string> = {
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

function toObjectKey(key: string | string[] | undefined): string {
  return Array.isArray(key) ? key.join("/") : (key ?? "");
}

function guessContentType(key: string): string {
  const dot = key.lastIndexOf(".");
  if (dot === -1) return "application/octet-stream";
  return EXTENSION_CONTENT_TYPES[key.slice(dot).toLowerCase()] ?? "application/octet-stream";
}

// Parses a `Range: bytes=<start>-<end>` / `bytes=<start>-` / `bytes=-<n>`
// request header into concrete start/end offsets for a `size`-byte object.
// We compute this ourselves (rather than trusting R2's echoed-back
// `object.range`, whose offset can come back unreliable in some R2
// environments) so <video> seeking / partial downloads always get a
// correct `Content-Range` header.
function parseRange(
  header: string,
  size: number,
): { start: number; end: number } | null {
  const match = /^bytes=(\d*)-(\d*)$/.exec(header.trim());
  if (!match) return null;

  const [, startStr, endStr] = match;
  if (startStr === "" && endStr === "") return null;

  if (startStr === "") {
    // Suffix range: last N bytes of the object.
    const suffixLength = Number(endStr);
    if (!Number.isFinite(suffixLength) || suffixLength <= 0) return null;
    return { start: Math.max(size - suffixLength, 0), end: size - 1 };
  }

  const start = Number(startStr);
  if (!Number.isFinite(start) || start < 0 || start >= size) return null;

  const end = endStr === "" ? size - 1 : Math.min(Number(endStr), size - 1);
  if (!Number.isFinite(end) || end < start) return null;

  return { start, end };
}

function notFound(): Response {
  return new Response("Not found", {
    status: 404,
    headers: { "cache-control": "no-store" },
  });
}

export async function onRequestGet(context: {
  request: Request;
  params: Params;
  env: Env;
}): Promise<Response> {
  const { request, params, env } = context;
  const key = toObjectKey(params.key);

  if (!key) return notFound();

  const bucket = env["finchhive-public"];
  if (!bucket) {
    return new Response("R2 binding missing", {
      status: 500,
      headers: { "cache-control": "no-store" },
    });
  }

  // Only ask R2 for a byte range when the client actually requested one —
  // some R2 environments hand back a (meaningless) empty range descriptor
  // otherwise, which would produce a bogus Content-Range header below.
  const rangeHeader = request.headers.get("range");

  const object = await bucket.get(`${OBJECT_PREFIX}${key}`, {
    range: rangeHeader ? (request.headers as unknown as WorkersHeaders) : undefined,
    onlyIf: request.headers as unknown as WorkersHeaders,
  });

  if (!object) return notFound();

  const headers = new Headers();
  object.writeHttpMetadata(headers as unknown as WorkersHeaders);
  if (!headers.get("content-type")) {
    headers.set("content-type", guessContentType(key));
  }
  headers.set("etag", object.httpEtag);
  headers.set("accept-ranges", "bytes");
  if (!headers.get("cache-control")) {
    headers.set("cache-control", "public, max-age=3600");
  }

  const range = rangeHeader ? parseRange(rangeHeader, object.size) : null;
  if (range) {
    headers.set("content-range", `bytes ${range.start}-${range.end}/${object.size}`);
  }

  const hasBody = "body" in object && object.body !== undefined;
  // No body means a conditional request matched (If-None-Match / etc.) and
  // R2 skipped sending the object back down — reply 304 to save bandwidth.
  const status = !hasBody ? 304 : range ? 206 : 200;

  return new Response(hasBody ? (object as unknown as { body: ReadableStream }).body : null, {
    status,
    headers,
  });
}

export async function onRequestHead(context: {
  params: Params;
  env: Env;
}): Promise<Response> {
  const { params, env } = context;
  const key = toObjectKey(params.key);

  if (!key) return notFound();

  const bucket = env["finchhive-public"];
  if (!bucket) {
    return new Response(null, { status: 500 });
  }

  const object = await bucket.head(`${OBJECT_PREFIX}${key}`);
  if (!object) return notFound();

  const headers = new Headers();
  object.writeHttpMetadata(headers as unknown as WorkersHeaders);
  if (!headers.get("content-type")) {
    headers.set("content-type", guessContentType(key));
  }
  headers.set("etag", object.httpEtag);
  headers.set("accept-ranges", "bytes");
  headers.set("content-length", String(object.size));

  return new Response(null, { headers });
}
