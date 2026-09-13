// Data-driven pricing — add, remove, or reorder entries and the carousel adapts.
export const PACKAGES = [
  {
    id: "Regular",
    name: "Regular",
    price: "Rp.120,000",
    unit: "hourly",
    featured: true,
    inclusions: [
      "1 hour photo session",
      "On-site locations",
      "10 edited photos",
      "Online gallery",
      "1 Photographer",
    ],
    waText: "Hello! I'm interested in the Regular package. Could we discuss a date?",
  },
  {
    id: "Family",
    name: "Family",
    price: "IRp.150,000",
    unit: "hourly",
    featured: true,
    inclusions: [
      "1 hour photo session",
      "On-site locations",
      "10 edited photos",
      "Online gallery",
      "1 Photographer",
    ],
    waText: "Hello! I'm interested in the Family package (IDR 150,000). Could we discuss a date?",
  },
  {
    id: "Family & Friends",
    name: "Family & Friends",
    price: "IDR 6 JT",
    unit: "hourly",
    featured: false,
    inclusions: [
      "1 hour photo session",
      "On-site locations",
      "10 edited photos",
      "Online gallery",
      "1 Photographer",
    ],
    waText: "Hello! I'm interested in the Family & Friends package. Could we discuss the date?",
  },
  {
    id: "Video Only",
    name: "Video Only",
    price: "Rp.150,000",
    unit: "hourly",
    featured: false,
    inclusions: [
      "1 hour photo session",
      "On-site locations",
      "10 edited photos",
      "Online gallery",
      "1 Photographer",
    ],
    waText: "Hello! I'm interested in the Full Day package (IDR 9.5 JT). Could we discuss a date?",
  },
  {
    id: "custom",
    name: "Custom",
    price: "Let's Talk",
    unit: "",
    featured: false,
    inclusions: [
      "Multi-day or destination shoots",
      "Video highlight add-on",
      "Album & print design",
      "Brand / campaign retainers",
      "Tailored to your story",
    ],
    waText: "Hello! I'd like to discuss a custom photography package with The Unspoken Project.",
  },
];

// ── Add-Ons mini-catalogue ───────────────────────────────────────────────
// TOGGLE: flip to false when Zach & Saber's video services go live — every
// video-related add-on instantly switches from "under construction" to bookable.
export const VIDEO_UNDER_CONSTRUCTION = true;

export const ADD_ONS = [
  {
    id: "extra-hour",
    name: "Extra Hour of Coverage",
    price: "IDR 50K",
    unit: "/ hour",
    video: false,
    waText: "Hello! I'd like to add an extra hour of coverage to my package.",
  },
  {
    id: "extra-video",
    name: "Additional Video",
    price: "IDR 100 K",
    unit: "/ highlight reel",
    video: true,
    waText: "Hello! I'd like to add a video highlight to my package.",
  },
  {
    id: "extra-photos",
    name: "Additional Edited Photos",
    price: "IDR 25 K",
    unit: "/ 5 photos",
    video: false,
    waText: "Hello! I'd like to add extra edited photos (per 5) to my package.",
  },
];

// ── Package construction zones ───────────────────────────────────────────
// TOGGLE: package ids listed here get the construction-tape X and become
// unbookable. Remove "fullday" (or empty the list) to re-enable.
export const PACKAGES_UNDER_CONSTRUCTION = ["fullday"];
