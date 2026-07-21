# FinchHive Frontend

Marketing site for FinchHive, built with [Next.js](https://nextjs.org) (static export) and deployed on **Cloudflare Pages**. All page images/videos are stored in a **private Cloudflare R2 bucket** and served through a Cloudflare Pages Function proxy, so the bucket itself is never exposed to the public internet.

- **Production:** https://finchhive-frontend.pages.dev
- **Hosting:** Cloudflare Pages (Git-connected to `main`, auto-deploys on push)
- **Media storage:** Cloudflare R2 bucket `finchhive` (private)

---

## 1. Architecture — how images/videos are served

```
Browser  ──GET /api/imgs/brands/trustbrands1.png──▶  Pages Function
                                                       (functions/api/[[key]].ts)
                                                              │
                                                              ▼
                                              env["finchhive-public"]  (R2 binding)
                                                              │
                                                              ▼
                                          R2 bucket "finchhive", key:
                                          public/imgs/brands/trustbrands1.png
```

- The site never links directly to R2. Every image/video in the codebase uses a **same-origin** path like `/api/imgs/abt.jpg` or `/api/finchhivlogo.png`.
- `functions/api/[[key]].ts` is a Cloudflare Pages Function. The `[[key]]` (double brackets) makes it a **catch-all** route, so it matches nested paths too (`/api/imgs/brands/trustbrands1.png` → key = `imgs/brands/trustbrands1.png`).
- The function reads `public/<key>` from the R2 bucket via the `finchhive-public` binding (configured in the Cloudflare Pages dashboard, not in code) and streams the bytes back with the right `Content-Type`, `ETag`, and cache headers.
- Because access always goes through your own Worker/Function code with a **binding** (not a public URL), the R2 bucket can — and should — stay fully private:
  - ✅ Public Access: **Disabled**
  - ✅ Public Development URL: **Disabled**
  - ✅ Custom Domain on the bucket: **None**
  - ✅ CORS Policy: **Not needed** — CORS only matters for cross-origin browser→R2 requests. Since assets are fetched same-origin through `/api/...`, no CORS policy is required. Don't enable a public URL/custom domain "to fix" an image not loading; the fix is always in the Function or the R2 object key.

This is already the correct, secure setup for "I don't want the bucket public." Nothing needs to change on the R2 side for privacy — the cleanup in this repo was about consolidating **duplicate/broken code paths** that existed around this proxy (see below).

### What was cleaned up

The repo previously had **four different, half-finished versions** of the same proxy route (`functions/api/[key].js`, `functions/api/[key].ts`, `functions/api/[[key]].js`, `functions/api/[[key]].ts`), plus a stray copy accidentally placed at `public/[key].tsx` (which does nothing there — `public/` is for static files copied as-is, not Pages Functions), an empty `functions/api/image/` folder, and a leftover `functions/hello.js` test endpoint. All of these were removed. **`functions/api/[[key]].ts` is now the single, canonical route** — do not add sibling `[key].ts`/`.js` files next to it; a single-segment route (`[key]`) cannot match nested keys like `imgs/brands/trustbrands1.png`, only the catch-all form can.

The surviving function was also hardened:
- Falls back to guessing `Content-Type` from the file extension (R2 dashboard uploads don't always set it correctly).
- Supports **HTTP Range requests** (`onRequestHead` + range handling in `onRequestGet`), which is required for smooth seeking on `<video>` elements (`main-vid.mp4`, reel clips).
- Supports conditional requests (`ETag`/`If-None-Match`) → returns `304 Not Modified` to save bandwidth on repeat visits.
- Returns a real `404` for missing keys, and a `500` with a clear message if the R2 binding itself is missing (e.g., you forgot to set it up on a new environment).

---

## 2. Local development

### Quick answer: what do I run, for what task?

| You're doing this... | Run this | Why |
|---|---|---|
| Editing copy/layout/styling, no real images needed | `npm run dev` | Fastest HMR loop. `/api/...` images will 404 — fine for pure UI work. |
| Adding/changing a component that shows real images or video | `npm run pages:dev` (in one terminal) + `npx next build` (re-run in a second terminal after each change) | Only this runs the actual R2-backed `/api/...` proxy. See "Live-reload behavior" below — no restarts needed either way. |
| Changing `functions/api/[[key]].ts` itself | `npm run pages:dev`, then just edit — it hot-recompiles on save | Fastest loop for Function-only changes; no `next build` needed. |
| Adding a brand-new asset to a page | 1) upload it to R2 (§3) 2) reference it in code as `/api/<path>` 3) test via `pages:dev` (seed local bucket first, or use `--remote` CLI checks) | The asset has to exist in R2 before the route can serve it, locally or in prod. |
| About to open a PR / merge to `main` | Push a branch, review the Cloudflare Pages **preview deployment** | Closest thing to production — real dashboard-configured bindings, no local setup needed. |

### Just the Next.js app (no R2 access needed)

For everyday UI work where you don't need real images:

```bash
npm run dev
```

Open http://localhost:3000. Any `/api/...` image request will 404 in plain `next dev`, since Pages Functions don't run under the Next.js dev server — that's expected. Use the method below when you need working images.

### Full local testing with a working `/api/...` route (recommended before every deploy)

This project uses [Wrangler](https://developers.cloudflare.com/workers/wrangler/) to run the actual Pages Function + R2 binding locally, via `wrangler.toml` (already set up in this repo).

**The simplest way — one command, does everything:**

```bash
npm start
```

This runs `npm run pull` (fetches any new/changed real images from the bucket into local emulation — see below) and then builds + starts `wrangler pages dev`, in that order. This is deliberately what `npm start` means in this repo: get a fully working local environment, with real images, in one command. (The original create-next-app `"start": "next start"` script didn't actually work anyway once `output: "export"` was set — confirmed it errors with "Could not find a production build" — so nothing was lost by repurposing it.)

Then open the URL Wrangler prints (e.g. http://127.0.0.1:8788) and click around.

**One-time setup before your very first `npm start` on a given machine:**

```bash
npx wrangler login          # authorize Wrangler against your Cloudflare account
cp .env.example .env        # then fill in R2_ACCESS_KEY_ID / R2_SECRET_ACCESS_KEY
```

`.env.example` has a full, step-by-step walkthrough (exact dashboard clicks, which permission to pick, what each value on the "token created" screen means) right above each variable — open it and follow along. `.env` is git-ignored and never gets committed; `.env.example` has no real secrets and is meant to be read by every developer on the project. Don't want a `.env` file? `export R2_ACCESS_KEY_ID=...` / `export R2_SECRET_ACCESS_KEY=...` in your shell works too (see "Using `.env` for these credentials" below for how the two interact).

**Why this is needed at all:** `wrangler pages dev` always talks to a LOCAL, on-disk emulation of the bucket (state lives in `.wrangler/state`, git-ignored) — confirmed against Wrangler 4.112.0, the `experimental_remote` remote-bindings feature currently only works with plain `wrangler dev`, not `wrangler pages dev`. That emulated bucket starts out **completely empty** on a fresh clone, so every `/api/...` request 404s until something seeds it — that's what `pull` is for, and why `npm start` runs it first automatically.

#### `pull` / `push` — `scripts/r2-sync.mjs`

One small tool, two directions, both as simple and symmetric as possible — each takes at most one optional argument, and both use the credentials from `.env`:

```bash
# Pull: real bucket -> local emulated bucket (what `npm start` runs automatically)
npm run pull                       # everything (~161 objects / ~500MB)
npm run pull -- imgs/brands         # just one subfolder, much faster

# Push: ./public/api/ -> the real bucket (needs a token with Object Read & Write)
npm run push                        # uploads everything currently sitting in ./public/api
npm run push -- imgs/brands          # just ./public/api/imgs/brands
```

To add a new image/video: place it in `./public/api/` using the **same folder layout as the bucket** (e.g. a new logo goes at `public/api/imgs/brands/newlogo.png` to land at `public/imgs/brands/newlogo.png`), run `npm run push`, then reference it in code as `/api/imgs/brands/newlogo.png`.

Both directions **skip files that are already identical** (`pull` tracks this via `.wrangler/r2-pull-manifest.json`, itself git-ignored; `push` compares each local file's MD5 against the remote object's ETag), so repeat runs of either command are fast and don't waste R2 operations. `push` only ever adds/updates — it never deletes a remote file just because it's missing locally, so it can't accidentally wipe out other assets in the bucket.

Under the hood, `pull` lists real bucket contents via R2's S3-compatible API (the `wrangler r2 object` CLI can only get/put one known key at a time, it can't list — that's why plain Wrangler alone can't do a full mirror), then writes each object into the local emulated bucket via Wrangler's `getPlatformProxy()` — an in-process binding, not a separate CLI call per file. That matters: an earlier version of this script shelled out to `wrangler r2 object put ... --local` once per file, which was both slow (~1s of process-startup overhead each) *and*, when parallelized, caused multiple Wrangler processes to deadlock fighting over the same local state file (confirmed: reproducible "Network connection lost" errors and runaway CPU). `getPlatformProxy()` avoids both problems.

#### Using `.env` for these credentials

Yes, this works, and it's the recommended way — no extra dependency needed. `npm run pull` / `npm run push` already run `node --env-file-if-exists=.env scripts/r2-sync.mjs ...`, which uses Node's **built-in** `--env-file-if-exists` flag (Node ≥20.12 / this repo uses Node 24). A few things worth knowing:

- `--env-file-if-exists` (note the `-if-exists`) means nothing breaks if you *don't* have a `.env` file — it just skips loading and you fall back to whatever's already exported in your shell.
- **Verified precedence:** if a variable is set both in your shell (via `export`) and in `.env`, the shell value wins. So you can safely keep a `.env` with your everyday values and temporarily `export` a different one without editing the file.
- If you're running the script directly instead of via the npm scripts, remember to add the flag yourself: `node --env-file-if-exists=.env scripts/r2-sync.mjs pull`. Plain `node scripts/r2-sync.mjs pull` will **not** pick up `.env` on its own.
- This project intentionally does **not** depend on the third-party `dotenv` npm package for this — Node's native flag does the same job with zero extra dependency. (`dotenv` is still declared as a devDependency because `scripts/generate-sitemap.js` uses it directly via `require("dotenv")`; that's unrelated to `r2-sync.mjs`.)

#### Why do R2_ACCESS_KEY_ID / NEXT_PUBLIC_SITE_URL show up in Wrangler's bindings table?

When `wrangler pages dev` starts, it prints a table of everything the Function can access, and you'll see your `.env` variables listed there too (values hidden). That's just Wrangler auto-loading `.env` as a convenience for local dev, the same way `getPlatformProxy()` does above — `functions/api/[[key]].ts` never reads `R2_ACCESS_KEY_ID` or `NEXT_PUBLIC_SITE_URL`, and none of this applies in production (the deployed site never sees your local `.env` at all; production bindings/vars come entirely from the Cloudflare dashboard). Nothing to worry about, just don't be surprised to see them there.

#### Multiple Cloudflare accounts on your login?

If `npx wrangler login` is authorized against more than one Cloudflare account (common once a few people share access), any `wrangler ... --remote` command — and `npm run r2:info` — will fail with "More than one account available but unable to select one in non-interactive mode" (confirmed). Already handled: `wrangler.toml` pins `account_id` to this project's account, so this shouldn't happen for anyone using this repo's `wrangler.toml` as-is. If you ever see that error anyway, double check `wrangler.toml` still has the `account_id` line, or set `CLOUDFLARE_ACCOUNT_ID=3b858374d9a5c95a61d0ac0a5c4ca244` yourself.

If you need to check something against the **real** bucket directly (bypassing local emulation entirely) for a single file, the CLI still works fine for that:

```bash
npx wrangler r2 object get finchhive/public/imgs/abt.jpg --file ./downloaded.jpg --remote
```

> `wrangler.toml` only affects **local** `wrangler pages dev`. It has no effect on the deployed site — the deployed Pages project's bindings/build settings are controlled entirely by the **Cloudflare dashboard** (Workers & Pages → `finchhive-frontend` → Settings → Functions/Bindings). If you ever need to add another binding (KV, another bucket, etc.), add it in *both* places: the dashboard (for production/preview) and `wrangler.toml` (for local dev).

### Live-reload behavior (verified — read this once)

- `wrangler pages dev` **automatically picks up a fresh `out/` directory without restarting.** Keep it running in one terminal; in a second terminal, re-run `npx next build` after each page/component change, then just refresh the browser. No need to stop/restart Wrangler.
- Editing `functions/api/[[key]].ts` is picked up **even faster** — Wrangler watches Function source files directly and hot-recompiles them (you'll see `⎔ Reloading local server...` in its logs), no `next build` needed for Function-only changes.
- Neither of these gives you Next.js's instant HMR — there's always at least a manual rebuild step for page/component changes with a static export. For pure UI/styling work where you don't need real `/api/...` images, plain `npm run dev` (§ above) is faster to iterate with.

Practically: keep **one terminal** running `npm run pages:dev` for the whole session, and in a **second terminal** re-run `npx next build` whenever you want a `src/` change reflected — no restart of the first terminal needed either way.

### A quick manual test checklist

Run through this after any change to `functions/api/[[key]].ts`, or before merging to `main`:

- [ ] A normal image loads: `curl -I http://127.0.0.1:8788/api/finchhivlogo.png` → `200`, sensible `Content-Type`.
- [ ] A nested path loads: `curl -I http://127.0.0.1:8788/api/imgs/brands/trustbrands1.png` → `200`.
- [ ] A missing key 404s cleanly: `curl -I http://127.0.0.1:8788/api/imgs/does-not-exist.png` → `404`.
- [ ] Range requests work (needed for video seeking): `curl -I -H "Range: bytes=0-999" http://127.0.0.1:8788/api/imgs/main-vid.mp4` → `206` with a correct `Content-Range: bytes 0-999/<total-size>`.
- [ ] Repeat requests are cheap: request twice, grab the `ETag` from the first response, then `curl -I -H "If-None-Match: <etag>" ...` → `304`.
- [ ] `npx eslint functions/api/[[key]].ts` and `npx tsc --noEmit` (or check the editor's Problems panel) are clean.

### Testing a real preview deployment (closest to production)

The most reliable end-to-end test is a **Cloudflare Pages preview deployment**, since it automatically uses the exact same binding configuration as production (assuming the R2 binding is enabled for the Preview environment too — check Settings → Functions in the dashboard):

1. Push your branch / open a PR against `main`.
2. Cloudflare Pages will build it and post a preview URL (`https://<hash>.finchhive-frontend.pages.dev`).
3. Note: **preview URLs are public by default** (no Cloudflare Access lock). Don't rely on them for testing anything sensitive, and consider adding a Cloudflare Access policy for previews if that becomes a concern.

---

## 3. Managing assets in the R2 bucket

The bucket (`finchhive`, private, APAC region) mirrors this layout — everything the app serves lives under a `public/` prefix:

```
finchhive/
└── public/
    ├── finchhivlogo.png, llms.txt, robots.txt, sitemap.xml
    └── imgs/
        ├── abt.jpg, exp1-6.png, main-vid.mp4, ...   (page-level media)
        ├── brands/   trustbrands1-13.png             (logo strip)
        ├── images/   oscii1-10.webp, serve1-18.png   (gallery)
        └── reels/    reelNN.jpg + reelNN.mp4 pairs   (thumbnail + clip)
```

The Function always reads `public/<key>` for a request to `/api/<key>` — so any file you upload must live under the `public/` prefix in the bucket to be reachable by the site.

### Option A — Cloudflare Dashboard (simplest, fine for occasional single files)

R2 → `finchhive` bucket → **Objects** → Upload. Make sure to upload into the `public/` folder. Good for one-off swaps (e.g. replacing a single hero image).

### Option B — Wrangler CLI (good for a handful of files, or scripting)

```bash
# Upload a single file (add --content-type if R2 might not guess it correctly, e.g. for .mp4/.svg):
npx wrangler r2 object put finchhive/public/imgs/abt.jpg --file ./abt.jpg --remote --content-type image/jpeg

# Download/inspect a file:
npx wrangler r2 object get finchhive/public/imgs/abt.jpg --file ./downloaded.jpg --remote

# Delete a file that's no longer used:
npx wrangler r2 object delete finchhive/public/imgs/old-banner.jpg --remote

# Sanity-check auth / bucket metadata:
npm run r2:info
```

`--remote` is required for all of the above — without it, Wrangler talks to the local emulated bucket instead (useful only for the local dev flow in §2).

### Option C — `npm run push` (simplest — recommended default for adding/updating a batch of files)

The same tool used for local dev seeding (§2) pushes the other direction, using the same `.env` credentials — no separate setup needed if you've already done the one-time steps in §2:

```bash
# 1. place your new/updated files in ./public/api/, mirroring the bucket's own layout,
#    e.g. public/api/imgs/brands/newlogo.png
# 2. then:
npm run push
```

This uploads everything currently sitting in `./public/api/` to the matching path in the real bucket, preserving nested subfolders, guessing a sensible `Content-Type` per file extension, and **skipping any file that's already identical remotely** (compares content MD5 against the remote ETag) so re-running it after adding just a couple of new files doesn't re-upload everything. It only ever adds/updates — it will never delete a remote file just because it's missing locally, so it's safe to run without worrying about accidentally wiping out unrelated assets. Needs a token with **Object Read & Write** permission (see `.env.example`).

### Option D — Bulk sync with `rclone` (for very large one-off migrations, or if you want true bidirectional sync with deletion)

For most day-to-day updates, `npm run push` (Option C above) is simpler and already set up — reach for `rclone` specifically when you want true two-way sync (including deleting remote files that no longer exist locally) or you're migrating a very large batch and want a battle-tested, resumable tool. `rclone` talks to R2's **S3-compatible API** and only transfers files that actually changed, which matters once the bucket is a few GB and you're doing quarterly batch updates (keeps Class A operations — and time — down).

**One-time setup:**

1. In the Cloudflare dashboard: **R2 → Manage API tokens** → create an API token scoped to *just* the `finchhive` bucket, with Object Read & Write permissions. Save the Access Key ID + Secret Access Key it gives you (shown once). This is the **same token** you can reuse as `R2_ACCESS_KEY_ID` / `R2_SECRET_ACCESS_KEY` in `.env` for `pull`/`push` in §2 — no need to keep multiple tokens around.
2. Configure an `rclone` remote (run `rclone config` and choose `s3` → provider `Cloudflare`), or drop this into `~/.config/rclone/rclone.conf`:

   ```ini
   [finchhive-r2]
   type = s3
   provider = Cloudflare
   access_key_id = <YOUR_ACCESS_KEY_ID>
   secret_access_key = <YOUR_SECRET_ACCESS_KEY>
   endpoint = https://3b858374d9a5c95a61d0ac0a5c4ca244.r2.cloudflarestorage.com
   acl = private
   ```

**Everyday use:**

```bash
# See what WOULD change, without touching anything:
rclone sync ./assets/imgs finchhive-r2:finchhive/public/imgs --dry-run -v

# Actually sync a local folder of new/updated assets up to R2:
rclone sync ./assets/imgs finchhive-r2:finchhive/public/imgs -v

# List what's currently in the bucket:
rclone ls finchhive-r2:finchhive/public

# Pull everything down locally (e.g. for backup, or auditing before a big refresh):
rclone copy finchhive-r2:finchhive/public ./r2-backup -v
```

`rclone sync` is destructive in the *destination* direction you point it — i.e. `rclone sync LOCAL REMOTE` will delete remote files that no longer exist locally. Use `rclone copy` instead of `sync` if you only ever want to add/update files and never want stale files auto-deleted, or always run with `--dry-run` first to review.

### Content-Type when uploading

Give video/SVG files an explicit content type on upload (`--content-type video/mp4`, `--content-type image/svg+xml`, etc.) — the dashboard/CLI don't always infer it correctly, especially for `.mp4`. If you forget, the Function has a fallback that guesses from the file extension, but it's better to have it set correctly at the source.

---

## 4. Scaling to ~5GB with quarterly content refreshes

A few concrete things worth setting up now, before the bucket grows:

1. **Keep Storage Class = Standard.** Don't switch to Infrequent Access — these are website assets read constantly by every visitor; IA pricing adds a per-GB retrieval fee that would work against you here.
2. **Compress/convert before uploading, not after.** `next.config.ts` has `images.unoptimized: true` (required for static export), meaning **Next.js does zero image optimization** — whatever you upload is exactly what every visitor downloads. Convert large PNGs/JPEGs to WebP/AVIF and keep individual images well under ~1-2MB where possible. See the flag on `serve6.png` below — that one file alone is bigger than most entire websites.
3. **Use `npm run push` or `rclone sync` (see §3, Options C/D) for the quarterly refresh**, not a full re-upload of everything — both only transfer changed files, saving time and R2 Class A operations.
4. **Watch Class A/B operations and storage in R2 → Metrics** as traffic grows. At the time of writing, usage is effectively free-tier (R2's free tier is 10GB storage + 1M Class A + 10M Class B ops/month), but it's worth a quick monthly glance once real traffic starts.
5. **Consider a Cloudflare Cache Rule for `/api/*`** (Rules → Cache Rules in the dashboard) once traffic is real: match `Hostname equals finchhive-frontend.pages.dev` (and any custom domain) `AND` `URI Path starts with /api/`, set "Eligible for Cache" with an Edge TTL (e.g. 1 day). This caches responses at Cloudflare's edge, cutting down repeat R2 reads (and Class B ops) dramatically for a media-heavy site. If you add this, remember to **Purge Cache** (or bump filenames) after your quarterly asset refresh so visitors don't see stale images for up to a day.
6. **Object Lifecycle Rules**: the current "abort incomplete multipart uploads after 7 days" default is fine as-is — no action needed unless you start doing manual multipart uploads for very large files.
7. **Naming convention for the quarterly refresh:** if you're replacing an existing file (say, `serve6.png`) with new content but the *same key*, browsers/edge caches may hold onto the old version until their cache expires (currently up to 1 hour via the Function's `Cache-Control`, longer if you add the Cache Rule above). If a refresh needs to be visible immediately, either purge cache after upload, or give the new file a new name/suffix and update the reference in code.

---

## 5. Known follow-ups (not fixed as part of this cleanup — flagging for visibility)

- **`serve6.png` is still 70.76MB.** That's almost certainly not intentional for a web image — worth re-exporting as compressed WebP/AVIF (should easily get under 1-2MB) and placing it in `public/api/imgs/images/serve6.png` + `npm run push` to replace it.
- **`src/components/PhysicsPills.tsx` references `/api/imgs/bluebg.jpg`, which still doesn't exist in the bucket** (confirmed via `npm run pull` — it's genuinely absent, not just a stale listing) — will 404 in production until uploaded.
- Update, since the earlier version of this doc: `team1.png` / `team2.png` / `team3.png` (referenced by `src/components/TeamSection.tsx`) **have since been uploaded** and are confirmed present now — no longer an issue.
- **The R2 bucket has `font/` and `lottie/` folders that appear unused.** The app actually serves fonts and Lottie JSON from the local `public/font/` and `public/lottie/` folders (bundled into the static export, not proxied through R2) — see `src/app/globals.css` and `src/components/StickyCardsSection.tsx`. If `public/font/` and `public/lottie/` inside the R2 bucket are leftover duplicates from an earlier "upload everything" attempt, they can safely be deleted from R2 to reduce clutter.
- **Preview deployments are public by default.** If that becomes a concern, add a Cloudflare Access policy scoped to `*.finchhive-frontend.pages.dev` previews (Zero Trust → Access → Applications).

---

## 6. Other scripts in this repo

- `scripts/generate-sitemap.js` — regenerates `public/sitemap.xml` and `public/robots.txt` from `NEXT_PUBLIC_SITE_URL` + the page list at the top of the file. Runs automatically as part of `npm run build`. Update the `pages` array there whenever a new route is added.
- `scripts/r2-sync.mjs` — pulls real assets from R2 into the local emulated bucket used by `wrangler pages dev` (`npm run pull`, and automatically as part of `npm start`), and pushes files from `public/api/` up to the real bucket (`npm run push`). See §2 and §3 (Option C).
- `pyscript/` — a standalone Python CLI (`thumbnailer.py`) for batch-generating `.jpg` thumbnails next to video files using `ffmpeg`/`ffprobe`. Handy for producing the `reelNN.jpg` thumbnails that pair with `reelNN.mp4` clips before uploading a new batch of reels to R2. See `pyscript/readme.md` for usage.

---

## 7. Deploying

Production deploys are fully automatic: push to `main` → Cloudflare Pages builds (`npx next build`) and deploys the `out/` directory. No manual deploy step is required. If you ever need a one-off direct-upload deploy (bypassing Git), `wrangler.toml` already has `pages_build_output_dir` set, so:

```bash
npx next build
npx wrangler pages deploy
```

## Learn more

- [Next.js Documentation](https://nextjs.org/docs)
- [Cloudflare Pages Functions](https://developers.cloudflare.com/pages/functions/)
- [R2 Workers API reference](https://developers.cloudflare.com/r2/api/workers/workers-api-reference/)
- [rclone S3 (Cloudflare R2) docs](https://rclone.org/s3/#cloudflare-r2)
