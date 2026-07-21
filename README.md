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

### Just the Next.js app (no R2 access needed)

For everyday UI work where you don't need real images:

```bash
npm run dev
```

Open http://localhost:3000. Any `/api/...` image request will 404 in plain `next dev`, since Pages Functions don't run under the Next.js dev server — that's expected. Use the method below when you need working images.

### Full local testing with a working `/api/...` route (recommended before every deploy)

This project uses [Wrangler](https://developers.cloudflare.com/workers/wrangler/) to run the actual Pages Function + R2 binding locally, via `wrangler.toml` (already set up in this repo).

```bash
npx next build          # produces the static export in ./out
npm run pages:dev        # same as: wrangler pages dev
# or, in one step:
npm run pages:build-and-dev
```

Then open the URL Wrangler prints (e.g. http://127.0.0.1:8788) and click around — images/videos under `/api/...` will now actually resolve.

**Important:** by default this talks to a **local, on-disk emulation** of the R2 bucket (state kept in `.wrangler/state`, already git-ignored), *not* the real production bucket. That's intentional — you can test freely without risk. The emulated bucket starts out empty, so you need to seed it with a few files to see anything:

```bash
# Upload one file into the LOCAL emulated bucket at the same key layout R2 uses (public/<path>):
npx wrangler r2 object put finchhive/public/imgs/abt.jpg --file /path/to/local/abt.jpg --local

# Then it will be served at:
curl -I http://127.0.0.1:8788/api/imgs/abt.jpg
```

Repeat for whichever assets you need to test with. You can also point local dev at the **real** bucket for debugging a production-only issue:

1. Run `npx wrangler login` once (opens a browser to authorize your Cloudflare account).
2. In `wrangler.toml`, uncomment `experimental_remote = true` under `[[r2_buckets]]`.
3. Run `npm run pages:dev` again — now `env["finchhive-public"]` is proxied to the real `finchhive` bucket. Be careful: this can incur real R2 read operations and will show real production data.
4. Re-comment that line when you're done so you don't accidentally leave it enabled.

> `wrangler.toml` only affects **local** `wrangler pages dev`. It has no effect on the deployed site — the deployed Pages project's bindings/build settings are controlled entirely by the **Cloudflare dashboard** (Workers & Pages → `finchhive-frontend` → Settings → Functions/Bindings). If you ever need to add another binding (KV, another bucket, etc.), add it in *both* places: the dashboard (for production/preview) and `wrangler.toml` (for local dev).

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

### Option C — Bulk sync with `rclone` (recommended once you're regularly refreshing many files, e.g. the quarterly content refresh)

Wrangler has no native "sync a folder" command — for bulk uploads/updates, use `rclone` against R2's **S3-compatible API**. This only transfers files that actually changed, which matters once the bucket is a few GB and you're doing quarterly batch updates (keeps Class A operations — and time — down).

**One-time setup:**

1. In the Cloudflare dashboard: **R2 → Manage API tokens** → create an API token scoped to *just* the `finchhive` bucket, with Object Read & Write permissions. Save the Access Key ID + Secret Access Key it gives you (shown once).
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
3. **Use `rclone sync` (see §3, Option C) for the quarterly refresh**, not a full re-upload of everything — it only transfers changed files, saving time and R2 Class A operations.
4. **Watch Class A/B operations and storage in R2 → Metrics** as traffic grows. At the time of writing, usage is effectively free-tier (R2's free tier is 10GB storage + 1M Class A + 10M Class B ops/month), but it's worth a quick monthly glance once real traffic starts.
5. **Consider a Cloudflare Cache Rule for `/api/*`** (Rules → Cache Rules in the dashboard) once traffic is real: match `Hostname equals finchhive-frontend.pages.dev` (and any custom domain) `AND` `URI Path starts with /api/`, set "Eligible for Cache" with an Edge TTL (e.g. 1 day). This caches responses at Cloudflare's edge, cutting down repeat R2 reads (and Class B ops) dramatically for a media-heavy site. If you add this, remember to **Purge Cache** (or bump filenames) after your quarterly asset refresh so visitors don't see stale images for up to a day.
6. **Object Lifecycle Rules**: the current "abort incomplete multipart uploads after 7 days" default is fine as-is — no action needed unless you start doing manual multipart uploads for very large files.
7. **Naming convention for the quarterly refresh:** if you're replacing an existing file (say, `serve6.png`) with new content but the *same key*, browsers/edge caches may hold onto the old version until their cache expires (currently up to 1 hour via the Function's `Cache-Control`, longer if you add the Cache Rule above). If a refresh needs to be visible immediately, either purge cache after upload, or give the new file a new name/suffix and update the reference in code.

---

## 5. Known follow-ups (not fixed as part of this cleanup — flagging for visibility)

- **`serve6.png` is 70.76MB.** That's almost certainly not intentional for a web image — worth re-exporting as compressed WebP/AVIF (should easily get under 1-2MB) and re-uploading under the same key.
- **A few images referenced in code don't currently exist in the bucket listing**, so they'll 404 in production until uploaded:
  - `src/components/TeamSection.tsx` references `/api/imgs/team1.png`, `/api/imgs/team2.png`, `/api/imgs/team3.png`
  - `src/components/PhysicsPills.tsx` references `/api/imgs/bluebg.jpg`
- **The R2 bucket has `font/` and `lottie/` folders that appear unused.** The app actually serves fonts and Lottie JSON from the local `public/font/` and `public/lottie/` folders (bundled into the static export, not proxied through R2) — see `src/app/globals.css` and `src/components/StickyCardsSection.tsx`. If `public/font/` and `public/lottie/` inside the R2 bucket are leftover duplicates from an earlier "upload everything" attempt, they can safely be deleted from R2 to reduce clutter.
- **Preview deployments are public by default.** If that becomes a concern, add a Cloudflare Access policy scoped to `*.finchhive-frontend.pages.dev` previews (Zero Trust → Access → Applications).

---

## 6. Other scripts in this repo

- `scripts/generate-sitemap.js` — regenerates `public/sitemap.xml` and `public/robots.txt` from `NEXT_PUBLIC_SITE_URL` + the page list at the top of the file. Runs automatically as part of `npm run build`. Update the `pages` array there whenever a new route is added.
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
