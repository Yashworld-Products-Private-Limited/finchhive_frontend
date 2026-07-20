#!/usr/bin/env python3
"""
thumbnailer.py — recursively generate a .jpg thumbnail next to every video
file under a given root directory, using the system `ffmpeg` / `ffprobe`
binaries (no extra Python deps required).

Usage:
    uv run python thumbnailer.py /path/to/videos
    uv run python thumbnailer.py /path/to/videos --seconds 10 --overwrite
    uv run python thumbnailer.py /path/to/videos --workers 8 --quiet

Requires ffmpeg + ffprobe to be installed and on PATH:
    sudo apt install ffmpeg
"""

from __future__ import annotations

import argparse
import json
import logging
import shutil
import subprocess
import sys
from concurrent.futures import ThreadPoolExecutor, as_completed
from dataclasses import dataclass
from pathlib import Path
from typing import Optional

VIDEO_EXTENSIONS = {".mp4", ".mkv", ".avi", ".mov", ".webm", ".flv", ".wmv", ".m4v"}

log = logging.getLogger("thumbnailer")


@dataclass(frozen=True)
class Config:
    root: Path
    seconds: Optional[float]   # None -> auto-pick based on duration
    overwrite: bool
    workers: int


def check_dependencies() -> None:
    """Fail fast with a clear message if ffmpeg/ffprobe aren't available."""
    missing = [b for b in ("ffmpeg", "ffprobe") if shutil.which(b) is None]
    if missing:
        log.error("Missing required binaries on PATH: %s", ", ".join(missing))
        log.error("Install with: sudo apt install ffmpeg")
        sys.exit(1)


def get_duration(video_path: Path) -> Optional[float]:
    """Return video duration in seconds, or None if it can't be determined."""
    cmd = [
        "ffprobe", "-v", "error",
        "-show_entries", "format=duration",
        "-of", "json", str(video_path),
    ]
    try:
        result = subprocess.run(cmd, capture_output=True, text=True, check=True, timeout=30)
        return float(json.loads(result.stdout)["format"]["duration"])
    except Exception as exc:  # noqa: BLE001 - ffprobe can fail in many ways
        log.debug("ffprobe failed for %s: %s", video_path, exc)
        return None


def pick_timestamp(duration: Optional[float]) -> float:
    """Choose a sane capture point so short clips never fail with -ss past EOF."""
    if duration is None:
        return 1.0
    if duration <= 5:
        return duration * 0.2
    if duration <= 30:
        return max(1.0, duration * 0.2)
    return 10.0


def generate_thumbnail(video_path: Path, cfg: Config) -> tuple[str, Path]:
    """
    Create a .jpg thumbnail beside `video_path`.
    Returns (status, output_path) where status is 'created' | 'skipped' | 'failed'.
    """
    output_path = video_path.with_suffix(".jpg")

    if output_path.exists() and not cfg.overwrite:
        return "skipped", output_path

    ts = cfg.seconds if cfg.seconds is not None else pick_timestamp(get_duration(video_path))

    cmd = [
        "ffmpeg", "-y" if cfg.overwrite else "-n",
        "-ss", str(ts),
        "-i", str(video_path),
        "-vframes", "1",
        "-q:v", "2",
        str(output_path),
    ]

    try:
        subprocess.run(cmd, check=True, capture_output=True, timeout=60)
        return "created", output_path
    except subprocess.CalledProcessError as exc:
        log.debug("ffmpeg stderr for %s: %s", video_path, exc.stderr.decode(errors="ignore"))
        return "failed", output_path
    except subprocess.TimeoutExpired:
        return "failed", output_path


def find_videos(root: Path):
    for path in root.rglob("*"):
        if path.is_file() and path.suffix.lower() in VIDEO_EXTENSIONS:
            yield path


def run(cfg: Config) -> int:
    videos = list(find_videos(cfg.root))
    if not videos:
        log.warning("No video files found under %s", cfg.root)
        return 0

    log.info("Found %d video file(s). Processing with %d worker(s)...", len(videos), cfg.workers)

    counts = {"created": 0, "skipped": 0, "failed": 0}
    with ThreadPoolExecutor(max_workers=cfg.workers) as pool:
        futures = {pool.submit(generate_thumbnail, v, cfg): v for v in videos}
        for future in as_completed(futures):
            video = futures[future]
            status, output_path = future.result()
            counts[status] += 1
            level = logging.INFO if status != "failed" else logging.ERROR
            log.log(level, "%-8s %s -> %s", status.upper(), video.name, output_path.name)

    log.info(
        "Done. created=%d skipped=%d failed=%d",
        counts["created"], counts["skipped"], counts["failed"],
    )
    return 1 if counts["failed"] and not counts["created"] and not counts["skipped"] else 0


def parse_args(argv: list[str]) -> Config:
    parser = argparse.ArgumentParser(description="Generate thumbnails for all videos under a folder tree.")
    parser.add_argument("root", type=str, help="Root directory to scan recursively")
    parser.add_argument("-s", "--seconds", type=float, default=None,
                         help="Fixed timestamp (sec) to capture. Default: auto-pick based on duration.")
    parser.add_argument("-y", "--overwrite", action="store_true", help="Overwrite existing thumbnails")
    parser.add_argument("-w", "--workers", type=int, default=4, help="Parallel ffmpeg workers (default: 4)")
    parser.add_argument("-q", "--quiet", action="store_true", help="Only show warnings/errors")
    args = parser.parse_args(argv)

    root = Path(args.root).expanduser().resolve()
    if not root.exists():
        parser.error(f"Path not found: {root}")

    logging.basicConfig(
        level=logging.WARNING if args.quiet else logging.INFO,
        format="%(message)s",
    )

    return Config(root=root, seconds=args.seconds, overwrite=args.overwrite, workers=args.workers)


def main() -> None:
    cfg = parse_args(sys.argv[1:])
    check_dependencies()
    sys.exit(run(cfg))


if __name__ == "__main__":
    main()