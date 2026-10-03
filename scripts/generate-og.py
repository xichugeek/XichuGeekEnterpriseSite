"""Regenerate the optional social preview PNG. Requires Pillow: pip install Pillow."""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path(__file__).resolve().parents[1]
OUT = ROOT / "public" / "og-cover.png"
FONT_CANDIDATES = [
    Path("C:/Windows/Fonts/simhei.ttf"),
    Path("/usr/share/fonts/opentype/noto/NotoSansCJK-Regular.ttc"),
    Path("/usr/share/fonts/truetype/wqy/wqy-zenhei.ttc"),
    Path("/System/Library/Fonts/PingFang.ttc"),
]
FONT = next((candidate for candidate in FONT_CANDIDATES if candidate.exists()), None)
if FONT is None:
    raise SystemExit("Install a Chinese font and update FONT_CANDIDATES before generating the cover.")

image = Image.new("RGB", (1200, 630), "#101b20")
draw = ImageDraw.Draw(image)
for x in range(0, 1200, 72):
    draw.line((x, 0, x, 630), fill="#20302f", width=1)
for y in range(0, 630, 72):
    draw.line((0, y, 1200, y), fill="#20302f", width=1)
draw.rectangle((72, 72, 91, 91), fill="#c8e783")
draw.rectangle((98, 72, 117, 91), fill="#f6f5ef")
draw.rectangle((72, 98, 91, 117), fill="#6f957f")
draw.rectangle((98, 98, 117, 117), fill="#c8e783")
draw.text((145, 75), "CLARITY SYSTEMS / DEMO CONTENT", fill="#c8e783", font=ImageFont.truetype(str(FONT), 24))
draw.text((72, 215), "复杂问题，", fill="#f6f5ef", font=ImageFont.truetype(str(FONT), 92))
draw.text((72, 335), "清晰解法。", fill="#c8e783", font=ImageFont.truetype(str(FONT), 92))
draw.text((75, 550), "AI ENTERPRISE WEBSITE STARTER", fill="#adbbb2", font=ImageFont.truetype(str(FONT), 25))
OUT.parent.mkdir(parents=True, exist_ok=True)
image.save(OUT, optimize=True)
print(OUT)
