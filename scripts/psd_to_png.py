#!/usr/bin/env python3
"""Flatten each .psd to .png next to it, then remove the .psd (used for one-off batch)."""

from __future__ import annotations

import sys
from pathlib import Path


def convert_one(psd_path: Path) -> None:
    from psd_tools import PSDImage

    png_path = psd_path.with_suffix(".png")
    print(f"Opening {psd_path} …", flush=True)
    psd = PSDImage.open(psd_path)
    img = psd.composite()
    print(f"Saving {png_path} …", flush=True)
    img.save(png_path, "PNG", optimize=True)
    print(f"Removing {psd_path} …", flush=True)
    psd_path.unlink()


def main() -> int:
    roots = [
        Path(__file__).resolve().parent.parent / "public" / "images" / "1TMF",
        Path(__file__).resolve().parent.parent / "public" / "images" / "2TMF",
        Path(__file__).resolve().parent.parent / "public" / "images" / "3TMF",
    ]
    psds: list[Path] = []
    for root in roots:
        if not root.is_dir():
            print(f"Skip missing dir: {root}", file=sys.stderr)
            continue
        psds.extend(sorted(root.glob("*.psd")))

    if not psds:
        print("No .psd files found.", file=sys.stderr)
        return 1

    for p in psds:
        try:
            convert_one(p)
        except Exception as e:
            print(f"FAILED {p}: {e}", file=sys.stderr)
            return 1

    print(f"Done. Converted and removed {len(psds)} PSD file(s).")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
