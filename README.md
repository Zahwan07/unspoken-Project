# The Unspoken Project — Photography Studio Website

A minimalist, editorial marketing website for **The Unspoken Project**, a photography crew.
White + red (`#E10600`) identity, full-bleed photography, masked headline reveals, smooth momentum scrolling, and WhatsApp-only contact.

**Live pages:** Home · About · Pricing · Portfolio · Gallery · Contact

---

## Tech Stack

| Layer | Technology |
|---|---|
| **Frontend** | React 19, react-router-dom 7, Tailwind CSS 3, framer-motion 11 |
| **Scroll** | Lenis (smooth momentum scroll) |
| **Carousel** | embla-carousel-react |
| **Icons** | lucide-react |
| **Fonts** | Cormorant Garamond (display), Outfit (body), JetBrains Mono (labels), Caveat (handwritten accents) |
| **Backend** | FastAPI + MongoDB via Motor (present, currently unused — site is fully static) |
| **Build tool** | Create React App + CRACO |
| **Package manager** | **Yarn** (do **not** use npm) |

---

## Project Structure

```
unspoken-stories/
├── frontend/                  # React app
│   ├── public/
│   │   └── uploads/           # ← ALL real crew photos & videos live here
│   ├── src/
│   │   ├── assets/            # Source copies of crew photos (original files)
│   │   ├── components/        # Navbar, Footer, HeroCarousel, Lightbox, Marquee, motion wrappers
│   │   ├── data/              # ← Edit content here (no code changes needed)
│   │   │   ├── site.js        # Brand, WhatsApp number, nav links, socials, hibernation toggle
│   │   │   ├── heroSlides.js  # Homepage hero carousel slides
│   │   │   ├── photographers.js  # Team bios + portfolio galleries
│   │   │   ├── pricing.js     # Packages, add-ons, construction toggles
│   │   │   └── gallery.js     # Gallery page featured slider + full feed
│   │   ├── pages/             # Home, About, Pricing, Portfolio, Gallery, Contact, Hibernating
│   │   ├── hooks/
│   │   ├── lib/               # smooth.js (Lenis init), utils
│   │   └── App.js
│   ├── package.json
│   ├── tailwind.config.js
│   └── craco.config.js
└── backend/                   # FastAPI (future API work)
    ├── server.py
    └── requirements.txt
```

---

## Getting Started

### Prerequisites
- **Node.js** ≥ 18
- **Yarn** 1.22+
- Python 3.11+ (backend only, optional)

### Frontend

```bash
cd frontend
yarn install      # installs node_modules from yarn.lock
yarn start        # dev server at http://localhost:3000
```

### Backend *(optional — not required for the site to run)*

```bash
cd backend
pip install -r requirements.txt
uvicorn server:app --reload
```

> In the hosted environment both are supervisor-managed:
> `sudo supervisorctl restart frontend|backend`

---

## Editing Content *(no code changes needed)*

All site content lives in plain JS files under `frontend/src/data/`:

| File | What it controls |
|---|---|
| `site.js` | Brand name, **WhatsApp number** (`WHATSAPP_NUMBER`), manager name, nav links, social links, **hibernation toggle** (`SITE_HIBERNATING` — set to `true` during breaks to show a "back soon" page sitewide) |
| `heroSlides.js` | Homepage hero carousel: image path, caption, linked photographer slug |
| `photographers.js` | `TEAM_DIRECTION` (About page trio) + `PHOTOGRAPHERS` (portfolio crew) — portraits, cover shots, gallery arrays, optional video reels |
| `pricing.js` | Packages + Add-Ons. Flip `VIDEO_UNDER_CONSTRUCTION = false` to make video add-ons bookable. Add package IDs to `PACKAGES_UNDER_CONSTRUCTION` to grey them out |
| `gallery.js` | `FEATURED` (best-of slider) + `GRID` (full masonry feed) — photos and video entries |

---

## Adding / Replacing Photos

1. Drop the file into **`frontend/public/uploads/`**
2. Reference it as **`/uploads/filename.jpg`** in the relevant `data/` file
3. That's it — no imports, no rebuilds needed in dev

> Originals are also kept in `frontend/src/assets/` as a backup source.

### Current photo mapping

| Folder prefix | Photographer |
|---|---|
| `adl-*.jpg` | Adl (Portrait) |
| `zod-*.jpg` | Zod (Street) |
| `zach-*.jpg` | Zach (Close-ups & Video) |
| `saber-*.jpg` / `saber*.mp4` | Saber (Nature & Video) |
| `ath-*.jpg` / `ath-*.png` | Ath (Manager & Owner) |
| `tya-*.jpg` | Ty (Color & Narrative Lead) |
| `showcase*.jpg` | Homepage hero / generic showcase |
| `hero-1.jpg` | Hero banner |

---

## Important Notes

- ⚠️ **WhatsApp number** is a placeholder (`6281200000000`) — replace it in `site.js` **before going live**
- Prices in `pricing.js` are placeholder IDR amounts — update to match actual rates
- `/testimonials` redirects to `/gallery` (page was renamed)
- The `SITE_HIBERNATING` flag in `site.js` is a one-line on/off switch for holiday/break mode
- Warnings during `yarn install` about peer dependencies are safe to ignore — the app runs correctly
