export const BRAND = "The Unspoken Project";
export const TAGLINE = "Stories told without words";

export const WHATSAPP_NUMBER = "6285156924712";

export const waLink = (
  message = "Hello The Unspoken Project! I'd like to inquire about a photography session."
) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

export const MANAGER = {
  name: "Athian",
  role: "Manager & Owner",
};

export const NAV_LINKS = [
  { to: "/", label: "home" },
  { to: "/about", label: "about" },
  { to: "/pricing", label: "pricing" },
  { to: "/portfolio", label: "portfolio" },
  { to: "/gallery", label: "gallery" },
  { to: "/contact", label: "contact" },
];

export const SOCIALS = [
  { label: "Instagram", href: "https://www.instagram.com/the_unspokenproject/" },
  { label: "Facebook", href: "https://facebook.com/theunspokenproject" },
  { label: "YouTube", href: "https://youtube.com/@theunspokenproject" },
];

// ── Hibernation mode ──────────────────────────────────────────────────────
// TOGGLE: set SITE_HIBERNATING to true when the studio pauses (holidays,
// breaks) — every visitor then sees a "we'll be back soon" page instead of
// the website. Set back to false to reopen.
export const SITE_HIBERNATING = false;
export const HIBERNATION_RETURN_DATE = "Will be back after November!";
