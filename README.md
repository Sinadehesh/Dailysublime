# Daily Sublime — Website Update (styling + SEO)

These files are an update for the **Sinadehesh/Dailysublime** repository.
They live here temporarily because this Claude session only has write
access to `pipedrive_data_entry_tool` — the Dailysublime repo is not yet
connected to the Claude GitHub App with write permission.

## What changed

- **`index.html`** (replaces the existing one)
  - Hero text no longer hides under the fixed header (desktop, mobile, landscape)
  - Mobile hero typography resized so the whole hero fits the screen
  - "Attention is a luxury" side images now fully fill their gold frames
  - The mislabeled right-side image (it was actually Matisse's *The Dance*)
    is replaced with the real *Wanderer Above the Sea of Fog* by Caspar
    David Friedrich — portrait orientation, matches the 3:4 frame
  - Massive SEO upgrade: keyword-rich title/description, canonical URL,
    robots meta, full Open Graph + Twitter cards, JSON-LD structured data
    (Organization, WebSite, WebPage, Product with all 3 pricing offers),
    favicons, font preconnects, fixed image preloads
- **New files** (add to the repo root, keeping the same paths):
  - `og-image.jpg` — 1200×630 social sharing image (Botticelli's Venus)
  - `favicon-16x16.png`, `favicon-32x32.png`, `apple-touch-icon.png`
  - `robots.txt`, `sitemap.xml`
  - `images/wanderer-sea-of-fog.webp`, `images/wanderer-sea-of-fog-mobile.webp`

## How to apply

Option A (GitHub web UI): open the Dailysublime repo → "Add file" →
"Upload files" → drag everything in this folder in (keep the `images/`
subfolder) → commit to `main`.

Option B (git):

```bash
git clone https://github.com/Sinadehesh/Dailysublime
cp -r dailysublime-website-update/* Dailysublime/
cd Dailysublime && git add -A && git commit -m "Styling fixes + SEO overhaul" && git push
```

Nothing is deleted — all workflow JSONs, backend scripts, and existing
images are untouched.
