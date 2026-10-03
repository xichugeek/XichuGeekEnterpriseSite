"""Check generated routes, SEO basics and local links after `npm run build`."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlparse, unquote
import xml.etree.ElementTree as ET

ROOT = Path(__file__).resolve().parents[1] / "dist"
ROUTES = ["/", "/services/", "/projects/", "/about/", "/contact/"]


class PageParser(HTMLParser):
    def __init__(self):
        super().__init__()
        self.title = False
        self.titles = []
        self.meta = {}
        self.links = []

    def handle_starttag(self, tag, attrs):
        data = dict(attrs)
        if tag == "title":
            self.title = True
        if tag == "meta":
            self.meta[data.get("name") or data.get("property")] = data.get("content")
        if tag == "link" and data.get("rel") == "canonical":
            self.meta["canonical"] = data.get("href")
        for key in ("href", "src"):
            if data.get(key, "").startswith("/"):
                self.links.append(data[key])

    def handle_endtag(self, tag):
        if tag == "title":
            self.title = False

    def handle_data(self, data):
        if self.title:
            self.titles.append(data)


issues = []
for route in ROUTES:
    html_path = ROOT / route.lstrip("/") / "index.html"
    if not html_path.exists():
        issues.append(f"missing route: {route}")
        continue
    parser = PageParser()
    parser.feed(html_path.read_text(encoding="utf-8"))
    for key in ("description", "canonical", "og:title", "og:description", "og:url", "og:image"):
        if not parser.meta.get(key):
            issues.append(f"{route}: missing {key}")
    if not "".join(parser.titles).strip():
        issues.append(f"{route}: missing title")
    for link in parser.links:
        path = unquote(urlparse(link).path)
        target = ROOT / path.lstrip("/")
        if not (target.is_file() or (target / "index.html").is_file()):
            issues.append(f"{route}: broken local link {link}")

for asset in ("404.html", "favicon.svg", "og-cover.png", "robots.txt", "sitemap.xml"):
    if not (ROOT / asset).is_file():
        issues.append(f"missing asset: {asset}")

if (ROOT / "sitemap.xml").exists():
    sitemap = ET.parse(ROOT / "sitemap.xml")
    urls = [e.text for e in sitemap.findall(".//{*}loc")]
    if len(urls) != len(ROUTES):
        issues.append(f"sitemap has {len(urls)} URLs, expected {len(ROUTES)}")

if issues:
    raise SystemExit("\n".join(issues))
print(f"Verified {len(ROUTES)} routes, SEO metadata, local links and static assets.")
