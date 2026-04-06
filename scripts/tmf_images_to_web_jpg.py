#!/usr/bin/env python3
"""Convert PNGs in 1TMF/2TMF/3TMF to JPEG, remove PNGs, then resize/compress all JPEGs for web."""

from __future__ import annotations

import sys
from pathlib import Path

from PIL import Image


MAX_LONG_EDGE = 1920
JPEG_QUALITY = 82
ROOTS = [
    Path(__file__).resolve().parent.parent / "public" / "images" / "1TMF",
    Path(__file__).resolve().parent.parent / "public" / "images" / "2TMF",
    Path(__file__).resolve().parent.parent / "public" / "images" / "3TMF",
]


def to_rgb(im: Image.Image) -> Image.Image:
    if im.mode in ("RGBA", "RGBa"):
        bg = Image.new("RGB", im.size, (255, 255, 255))
        bg.paste(im, mask=im.split()[-1])
        return bg
    if im.mode == "LA":
        bg = Image.new("RGB", im.size, (255, 255, 255))
        bg.paste(im.convert("RGBA"), mask=im.split()[-1])
        return bg
    if im.mode == "P" and "transparency" in im.info:
        im = im.convert("RGBA")
        return to_rgb(im)
    return im.convert("RGB")


def fit_long_edge(im: Image.Image, max_long: int) -> Image.Image:
    w, h = im.size
    long_edge = max(w, h)
    if long_edge <= max_long:
        return im
    scale = max_long / long_edge
    nw = max(1, int(round(w * scale)))
    nh = max(1, int(round(h * scale)))
    return im.resize((nw, nh), Image.Resampling.LANCZOS)


def save_web_jpg(im: Image.Image, path: Path) -> None:
    im = fit_long_edge(im, MAX_LONG_EDGE)
    im.save(
        path,
        "JPEG",
        quality=JPEG_QUALITY,
        optimize=True,
        progressive=True,
        subsampling=1,
    )


def process_folder(root: Path) -> tuple[int, int]:
    """Returns (png_removed, jpg_written)."""
    if not root.is_dir():
        print(f"Skip missing dir: {root}", file=sys.stderr)
        return 0, 0

    png_by_stem = {p.stem: p for p in root.glob("*.png")}
    jpg_by_stem = {p.stem: p for p in root.glob("*.jpg")}
    stems = sorted(set(png_by_stem) | set(jpg_by_stem))

    png_removed = 0
    jpg_written = 0

    for stem in stems:
        png_path = png_by_stem.get(stem)
        jpg_path = (png_path or jpg_by_stem[stem]).with_suffix(".jpg")

        if png_path is not None:
            print(f"{png_path.name} → {jpg_path.name}", flush=True)
            with Image.open(png_path) as im:
                im = im.copy()
            png_path.unlink()
            png_removed += 1
        else:
            print(f"Optimize {jpg_path.name}", flush=True)
            with Image.open(jpg_path) as im:
                im = im.copy()

        rgb = to_rgb(im)
        save_web_jpg(rgb, jpg_path)
        jpg_written += 1

    return png_removed, jpg_written


def main() -> int:
    total_png = 0
    total_jpg = 0
    for root in ROOTS:
        print(f"\n=== {root.name} ===", flush=True)
        n_png, n_jpg = process_folder(root)
        total_png += n_png
        total_jpg += n_jpg

    print(
        f"\nDone. Removed {total_png} PNG(s), wrote/updated {total_jpg} JPEG pass(es).",
        flush=True,
    )
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
