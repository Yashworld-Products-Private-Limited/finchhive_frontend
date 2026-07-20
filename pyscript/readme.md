# video-thumbnail-maker

Recursively generate a `.jpg` thumbnail for every video file in a folder tree, saved beside the original video with the same base filename.

```
/Videos
  /movies
    film1.mp4      ->  film1.jpg
    film2.mkv      ->  film2.jpg
  /clips
    reel.mov        ->  reel.jpg
```

No Python dependencies — it just shells out to the `ffmpeg` / `ffprobe` binaries on your system.

## Requirements

- Python 3.9+
- `ffmpeg` and `ffprobe` on your `PATH`

Install ffmpeg (Ubuntu/Debian):

```bash
sudo apt update
sudo apt install ffmpeg
```

Verify:

```bash
ffmpeg -version
ffprobe -version
```

## Installation

```bash
git clone <your-repo-url> video-thumbnail-maker
cd video-thumbnail-maker
```

No `uv add` / `pip install` needed — the script uses only the Python standard library.

## Usage

```bash
uv run python thumbnailer.py /path/to/videos
```

(or plain `python thumbnailer.py /path/to/videos` if you're not using `uv`)

### Options

| Flag | Default | Description |
|---|---|---|
| `root` (positional) | — | Folder to scan recursively |
| `-s`, `--seconds SEC` | auto | Fixed timestamp to capture a frame from. If omitted, the script picks a safe point based on each video's duration (so short clips don't fail). |
| `-y`, `--overwrite` | off | Regenerate thumbnails that already exist |
| `-w`, `--workers N` | `4` | Number of videos processed in parallel |
| `-q`, `--quiet` | off | Only print warnings/errors, suppress per-file logs |

### Examples

Scan a folder with default settings:

```bash
uv run python thumbnailer.py ~/Videos
```

Always grab the frame at 10 seconds, overwrite existing thumbnails, use 8 parallel workers:

```bash
uv run python thumbnailer.py ~/Videos --seconds 10 --overwrite --workers 8
```

Quiet mode (only errors/warnings shown), useful in cron jobs or CI:

```bash
uv run python thumbnailer.py ~/Videos --quiet
```

## How it works

1. Walks `root` recursively (`Path.rglob`) looking for files with extensions: `.mp4 .mkv .avi .mov .webm .flv .wmv .m4v`.
2. For each video, unless a matching `.jpg` already exists (and `--overwrite` isn't set):
   - Probes duration with `ffprobe`.
   - Picks a capture timestamp (fixed via `--seconds`, or auto: 20% into short clips, 10s into longer ones).
   - Runs `ffmpeg -ss <t> -i <video> -vframes 1 -q:v 2 <video>.jpg`.
3. Processes videos concurrently (`ThreadPoolExecutor`) and prints a summary at the end:

   ```
   Done. created=42 skipped=3 failed=1
   ```

4. Exits with a non-zero status code if every file failed, so it plays nicely with scripts/CI.

## Notes

- Thumbnails are named by replacing the video's extension (`Path.with_suffix(".jpg")`), so `my.video.mp4` → `my.video.jpg`.
- Failed extractions are logged at `ERROR` level; run without `--quiet` and check the message if a specific file fails (corrupt file, unsupported codec, etc.).
- To add support for another video extension, edit the `VIDEO_EXTENSIONS` set at the top of `thumbnailer.py`.

## License

MIT (or your preference — update this section as needed).