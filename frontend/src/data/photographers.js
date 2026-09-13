// Creative Direction trio — shown on About page.
// `portrait` = face / cover card photo.
export const TEAM_DIRECTION = [
  {
    name: "Athian",
    role: "Manager & Owner",
    quote: "Managing every project from start to finish.",
    portrait: "/uploads/Athian_main.jpeg",
  },
  {
    name: "Tya",
    role: "Color & Narrative Lead",
    quote: "Giving the best color grading and the most touching moments of the project.",
    portrait: "/uploads/tya-0.jpg",
  },
  {
    name: "Nabila",
    role: "Photograph Director & Operations Lead",
    quote: "Responsible for the smooth running of operations and the creative direction of photography.",
    portrait: "/uploads/nabila-0.jpg",
  },
];

// Production photographers — shown on Portfolio page.
// `cover`   = tile image on the portfolio grid.
// `gallery` = masonry gallery when the photographer is selected.
export const PHOTOGRAPHERS = [
  {
    slug: "fadhlan",
    name: "Fadhlan",
    specialty: "Portrait",
    tagline: "Specializing in capturing the beauty and emotion of individual and group portraits.",
    portrait: "/uploads/fadhlan-0.jpg",
    cover: "/uploads/fadhlan-0.jpg",
    gallery: [
      { src: "/uploads/fadhlan-1.jpg", alt: "Portrait — natural light" },
      { src: "/uploads/fadhlan-2.jpg", alt: "Portrait — window light" },
      { src: "/uploads/fadhlan-3.jpg", alt: "Portrait — soft light study" },
      { src: "/uploads/fadhlan-4.jpg", alt: "Portrait — close-up" },
    ],
  },
  {
    slug: "zaki",
    name: "Zaki",
    specialty: "Street",
    tagline: "Finding beauty in everyday moments and urban landscapes.",
    portrait: "/uploads/zaki-0.jpg",
    cover: "/uploads/zaki-0.jpg",
    gallery: [
      { src: "/uploads/zaki-1.jpg", alt: "Street — motion" },
      { src: "/uploads/zaki-2.jpg", alt: "Street — silhouette" },
      { src: "/uploads/zaki-3.jpg", alt: "Street — urban frames" },
      { src: "/uploads/zaki-4.jpg", alt: "Street — city skyline" },
      { src: "/uploads/zaki-5.jpg", alt: "Street — city at dusk" },
      { src: "/uploads/zaki-6.jpg", alt: "Street — night lights" },
      { src: "/uploads/zaki-7.jpg", alt: "Street — candid" },
      { src: "/uploads/zaki-8.jpg", alt: "Street — details" },
    ],
  },
  {
    slug: "zahwan",
    name: "Zahwan",
    specialty: "Close-ups & Video",
    tagline: "Give him a Pokémon pack and he will capture the best moments.",
    portrait: "/uploads/Zahwan-1.jpg",
    cover: "/uploads/Zahwan-1.jpg",
    gallery: [
      { src: "/uploads/Zahwan-1.jpg", alt: "Close-up — celebration" },
      { src: "/uploads/Zahwan-2.jpg", alt: "Close-up — candid" },
      { src: "/uploads/Zahwan-3.jpg", alt: "Close-up — portrait" },
      { src: "/uploads/Zahwan-4.jpg", alt: "Close-up — detail" },
      { src: "/uploads/Zahwan-5.jpg", alt: "Close-up — expression" },
      { src: "/uploads/Zahwan-6.jpg", alt: "Close-up — moment" },
      { src: "/uploads/Zahwan-7.jpg", alt: "Close-up — studio" },
      { src: "/uploads/Zahwan-8.jpg", alt: "Close-up — event" },
      { src: "/uploads/Zahwan-9.jpg", alt: "Close-up — energy" },
      { src: "/uploads/Zahwan-10.jpg", alt: "Close-up — still" },
    ],
    videos: [
      {
        type: "youtube",
        src: "https://www.youtube.com/embed/2ces_B4NsiM?start=22&autoplay=1",
        poster: "/uploads/Thumbnail1.png",
        title: "YouTube Reel 1 — Zahwan",
      },
      {
        type: "youtube",
        src: "https://www.youtube.com/embed/2ces_B4NsiM?start=22&autoplay=1",
        poster: "/uploads/Thumbnail2.png",
        title: "YouTube Reel 2 — Zahwan",
      },
    ],
  },
  {
    slug: "sabila",
    name: "Sabila",
    specialty: "Nature & Video",
    tagline: "Loves to capture the beauty of nature and the best moments of life.",
    portrait: "/uploads/sabila-0.jpg",
    cover: "/uploads/sabila-0.jpg",
    gallery: [
      { src: "/uploads/Sabila-1.jpg", alt: "Nature — forest" },
      { src: "/uploads/Sabila-2.jpg", alt: "Nature — landscape" },
      { src: "/uploads/Sabila-3.jpg", alt: "Nature — valley" },
      { src: "/uploads/Sabila-4.jpg", alt: "Nature — light through trees" },
      { src: "/uploads/Sabila-5.jpg", alt: "Nature — waterfall" },
      { src: "/uploads/Sabila-6.jpg", alt: "Nature — still lake" },
      { src: "/uploads/Sabila-7.jpg", alt: "Nature — open field" },
      { src: "/uploads/Sabila-8.jpg", alt: "Nature — dusk" },
      { src: "/uploads/Sabila-9.jpg", alt: "Nature — golden hour" },
    ],
    videos: [
      {
        src: "/uploads/Sabila.mp4",
        poster: "/uploads/Sabila-7.jpg",
        title: "Nature Reel — Sabila",
      },
      {
        src: "/uploads/Sabila2.mp4",
        poster: "/uploads/Sabila-1.jpg",
        title: "Extended Reel — Sabila",
      },
    ],
  },
];
