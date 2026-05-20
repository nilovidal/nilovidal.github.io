"""Optimize portfolio images into public/media (served as static files)."""
from pathlib import Path

from PIL import Image

SRC = Path(__file__).resolve().parent.parent / "src" / "assets"
OUT = Path(__file__).resolve().parent.parent / "public" / "media"

CONFIG = {
    "nilo_business.JPG": {"out": "nilo_business.jpg", "max_width": 1400, "quality": 82},
    "nilo_playing.jpg": {"out": "nilo_playing.jpg", "max_width": 1000, "quality": 85},
    "nilo_squash.jpeg": {"out": "nilo_squash.jpg", "max_width": 1200, "quality": 82},
}


def optimize(src: Path, dst: Path, max_width: int, quality: int) -> None:
    before = src.stat().st_size if src.exists() else 0
    img = Image.open(src).convert("RGB")
    if img.width > max_width:
        ratio = max_width / img.width
        img = img.resize((max_width, int(img.height * ratio)), Image.Resampling.LANCZOS)
    OUT.mkdir(parents=True, exist_ok=True)
    img.save(
        dst,
        format="JPEG",
        quality=quality,
        optimize=True,
        progressive=False,
    )
    after = dst.stat().st_size
    if before:
        pct = (1 - after / before) * 100
        print(f"{dst.name}: {before // 1024} KB -> {after // 1024} KB ({pct:.0f}% smaller)")
    else:
        print(f"{dst.name}: {after // 1024} KB")


def main() -> None:
    for src_name, cfg in CONFIG.items():
        src = SRC / src_name
        dst = OUT / cfg["out"]
        if not src.exists():
            print(f"SKIP (missing): {src_name}")
            continue
        optimize(src, dst, cfg["max_width"], cfg["quality"])


if __name__ == "__main__":
    main()
