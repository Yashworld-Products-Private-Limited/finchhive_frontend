# r2-assets/

A **staging folder** for uploading new images/videos to the real `finchhive`
R2 bucket. Nothing in here (other than this README) is ever committed to
git — the bucket itself is the single source of truth for media, not this
repo (see the main `README.md` §1 for why).

## How to use it

1. Drop your new/updated files in here, using the **exact same folder
   layout** the bucket uses (see main `README.md` §3 for the current
   layout) — e.g. a new brand logo goes at `r2-assets/imgs/brands/newlogo.png`
   to end up at `public/imgs/brands/newlogo.png` in the bucket.
2. Run:
   ```bash
   npm run push
   ```
   This uploads everything under here to the matching path in the real
   bucket, skipping anything that's already identical. It only ever
   adds/updates — it will never delete something from the bucket just
   because it's missing here.
3. Reference the new file in code as `/api/<same relative path>`, e.g.
   `/api/imgs/brands/newlogo.png`.
4. Once uploaded, feel free to delete the file from here again — it's just
   a staging area, not a backup.

Want to upload just one subfolder instead of everything in here?
```bash
npm run push -- imgs/brands
```

See the main `README.md` §2/§3 for the full picture (including `npm run
pull` for the other direction — getting real assets into local dev).
