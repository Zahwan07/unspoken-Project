# PRD — The Unspoken Project (Photography Studio Website)

## Original Problem Statement
Build a minimalist, modern, editorial website for "The Unspoken Project," a photography startup. 6 pages: Home, About, Pricing (dynamic carousel), Portfolio (4 photographers), Testimonials (mixed media), Contact (WhatsApp only). White (#FFFFFF) + red (#E10600) accent discipline, near-black text (#111111), muted gray (#6B6B6B). Full-bleed photography, generous whitespace, thin red line accents, subtle scroll animations, sticky minimal nav, mobile-first responsive. Pricing + testimonials must be data-driven/expandable. Contact = single wa.me deep link.

## User Choices (confirmed)
- Stock photography placeholders (verified live Unsplash/Pexels URLs), swappable later
- Placeholder WhatsApp number `6281200000000` in single config (`src/data/site.js`)
- Photographer names/specialties: placeholders (Dinda/Arka/Sela/Bimo) — user to provide real ones; all editable in `src/data/photographers.js`
- Data storage: frontend JSON/JS data files (`src/data/*.js`) — no backend/CMS
- Hero carousel follows the brief exactly (autoplay, pause on hover/interaction, arrows, swipe/drag, dot/line markers, red thread progress, keyboard arrows, counter, captions)
- Design direction: Awwwards-level editorial; Cormorant Garamond display + Outfit body + JetBrains Mono; framer-motion + lenis; masked line-by-line reveals; slow editorial marquee

## User Personas
- Prospective client (couple/brand/event organizer) browsing work → pricing → WhatsApp inquiry
- Returning client reading testimonials
- Studio manager receiving WhatsApp inquiries

## Architecture
- React 19 SPA (react-router-dom 7), Tailwind 3 + shadcn tokens, framer-motion 11, lenis smooth scroll, embla-carousel-react (pricing)
- Frontend-only; FastAPI backend untouched (no API needs)
- Data layer: `src/data/site.js` (brand, WhatsApp, nav, socials), `heroSlides.js`, `photographers.js`, `pricing.js`, `testimonials.js`
- Components: Navbar (sticky, blur, red underline hovers, mobile fullscreen menu), Footer, HeroCarousel (custom framer-motion: autoplay/drag/keyboard/red thread/parallax), Lightbox (keyboard + lenis scroll lock), Marquee (CSS), motion.jsx (Reveal, MaskedLines via useInView, SectionTag)

## Implemented (2026-08-24, rev 2)
- All 6 pages, fully responsive, sticky nav + mobile hamburger overlay
- Home: full-screen kinetic hero carousel (5 data-driven slides incl. real client photos, autoplay 5.2s, pause/resume, drag/swipe, arrows, line markers, vertical red thread position indicator, counter, rotated caption chips, masked brand reveal, handwritten accent notes, scroll parallax), intro manifesto, playful alternating-font marquee, featured work strip, CTA band
- About: story header, B&W studio photo, 3 numbered manifesto chapters, REAL CREW: Creative Direction (Ath — Manager & Owner, Ty — Color & Narrative Lead, Bill — Photograph Director & Operations Lead) + Production (Fadhlan — Portrait, Zod — Street, Zach — Close-ups & Video, Saber — Nature & Video), all 7 with portrait photo cards (3:4 crop, grayscale → color on hover) and their real one-liners in handwritten type, red stats (07 people one crew / 480+ sessions / 320+ stories). Portraits are placeholder stock in `photographers.js` `portrait` field (separate from portfolio `cover`) — swap individually as real crew photos arrive
- Pricing: embla looping carousel (5 packages, center-focus scale/border/shadow, arrows, line dots, drag/swipe), Inquire buttons → wa.me with prefilled package text, terms strip + Add-Ons mini-catalogue below (Extra Hour of Coverage, Additional Video, Additional Edited Photos per 5; data-driven ADD_ONS in pricing.js; available add-ons link to WhatsApp with prefilled text). Video add-ons carry a construction-zone treatment (yellow/black hazard stripes top strip, rotated "UNDER CONSTRUCTION" badge, dashed "Currently unavailable" state) controlled by the VIDEO_UNDER_CONSTRUCTION toggle in pricing.js — flip to false when Zach & Saber's video services go live. Packages can also be taped off individually: PACKAGES_UNDER_CONSTRUCTION = ["fullday"] puts a full hazard-tape X over the whole card (dimmed content, badge, no Inquire button) — remove the id or empty the list to re-enable
- Portfolio: landing with 4 tiles (Fadhlan/Zod/Zach/Saber), sticky sub-nav tabs (?p=slug), masonry galleries mixing real + stock photos, lightbox with prev/next/Esc
- Gallery (RENAMED from Testimonials per user): "Proof that we were there." — rotating best-of featured slider (5 real client shots, autoplay 4s, arrows, dots, counter, drag/swipe, rotated caption chips) + tilted polaroid-style masonry feed mixing photos AND video reels (4 placeholder Pexels clips tagged Reel — Zach / Reel — Saber, autoplay muted in feed, play with controls in lightbox, red REEL badge) + lightbox (supports video). Old /testimonials route redirects to /gallery
- Contact: centered masked-reveal headline, handwritten note, single large red WhatsApp CTA → Ath (Manager & Owner)
- Client's 5 real graduation photos processed (EXIF fix + manual rotation for 2 sideways shots, 1800px, q85) and served locally from /public/uploads/a2,a4,a5,a8,a10.jpg
- Typography de-blanded per feedback: font weights light→normal, small text [10px]/[11px]→text-xs, body text-sm→text-base, Caveat handwritten accent font added for personality
- Verified: hero renders client photo slide 1 with chip + hand note; gallery slider next/caption/counter; gallery grid tilts + lightbox; about crew cards; nav Gallery link

## Known Limitations / Not Verified
- Mobile hamburger menu not screenshot-verified (screenshot tool pins 1920px viewport); code path standard and shares desktop NavLink logic
- Photographer names, manager name, prices, testimonials, WhatsApp number are PLACEHOLDERS awaiting real content
- Social links point to placeholder handles

## Backlog
- P0: Replace placeholder WhatsApp number, photographer names/photos, prices, testimonials with real content
- P1: Real logo asset; favicon; OG/social share image
- P1: Image optimization pipeline (local WebP assets instead of hotlinked stock)
- P2: "Best of" testimonials top carousel; per-gallery category filters; CMS/admin editing if content updates become frequent
- P2: Analytics events on WhatsApp clicks; SEO per-route meta tags
