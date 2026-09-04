import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Play } from "lucide-react";
import Lightbox from "@/components/Lightbox";
import { Reveal, MaskedLines, SectionTag, EASE } from "@/components/motion";
import { FEATURED, GRID } from "@/data/gallery";

const TILTS = ["-rotate-1", "rotate-1", "-rotate-2", "rotate-2"];

function FeaturedSlider() {
  const count = FEATURED.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const resumeRef = useRef(null);
  const dragStart = useRef(null);

  const goTo = useCallback((i) => setIndex(((i % count) + count) % count), [count]);

  const pauseBriefly = useCallback(() => {
    setPaused(true);
    clearTimeout(resumeRef.current);
    resumeRef.current = setTimeout(() => setPaused(false), 5000);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % count), 4000);
    return () => clearInterval(t);
  }, [paused, count, index]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") { goTo(index + 1); pauseBriefly(); }
      if (e.key === "ArrowLeft") { goTo(index - 1); pauseBriefly(); }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, goTo, pauseBriefly]);

  const onPointerDown = (e) => { dragStart.current = e.clientX; };
  const onPointerUp = (e) => {
    if (dragStart.current == null) return;
    const dx = e.clientX - dragStart.current;
    dragStart.current = null;
    if (Math.abs(dx) > 60) { goTo(dx < 0 ? index + 1 : index - 1); pauseBriefly(); }
  };

  const f = FEATURED[index];

  return (
    <section
      className="mx-auto max-w-[1440px] cursor-grab select-none px-6 pb-16 active:cursor-grabbing md:px-10"
      data-testid="featured-slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
    >
      <div className="relative overflow-hidden bg-ink">
        <div className="relative aspect-[4/3] sm:aspect-[16/9] md:aspect-[16/8]">
          <AnimatePresence initial={false}>
            <motion.img
              key={index}
              src={f.src}
              alt={`${f.tag} — ${f.note}`}
              draggable={false}
              data-testid="featured-image"
              className="absolute inset-0 h-full w-full object-cover"
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                opacity: { duration: 0.7, ease: "easeOut" },
                scale: { duration: 4.5, ease: "linear" },
              }}
            />
          </AnimatePresence>
        </div>

        <div className="absolute right-5 top-5 bg-ink/60 px-3 py-1.5 font-mono text-xs tracking-[0.25em] text-white backdrop-blur-sm" data-testid="featured-counter">
          {String(index + 1).padStart(2, "0")} — {String(count).padStart(2, "0")}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 12, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            exit={{ opacity: 0, y: -8, rotate: -2 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="absolute bottom-5 left-5 max-w-[70%] bg-white px-4 py-3 shadow-[0_14px_34px_-12px_rgba(0,0,0,0.45)]"
            data-testid="featured-caption"
          >
            <p className="font-hand text-2xl leading-none text-brand md:text-3xl">{f.note}</p>
            <p className="mt-1.5 font-mono text-xs uppercase tracking-[0.25em] text-smoke">{f.tag}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-center gap-8">
        <button
          onClick={() => { goTo(index - 1); pauseBriefly(); }}
          aria-label="Previous featured"
          data-testid="featured-prev"
          className="flex h-11 w-11 items-center justify-center border border-ink/15 text-ink transition-colors duration-300 hover:border-brand hover:text-brand"
        >
          <ArrowLeft size={16} strokeWidth={1.5} />
        </button>
        <div className="flex items-center gap-2" data-testid="featured-dots">
          {FEATURED.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to featured ${i + 1}`}
              data-testid={`featured-dot-${i}`}
              onClick={() => { goTo(i); pauseBriefly(); }}
              className="py-2"
            >
              <span
                className={`block h-px transition-all duration-500 ease-cinematic ${
                  i === index ? "w-10 bg-brand" : "w-5 bg-ink/20 hover:bg-ink/50"
                }`}
              />
            </button>
          ))}
        </div>
        <button
          onClick={() => { goTo(index + 1); pauseBriefly(); }}
          aria-label="Next featured"
          data-testid="featured-next"
          className="flex h-11 w-11 items-center justify-center border border-ink/15 text-ink transition-colors duration-300 hover:border-brand hover:text-brand"
        >
          <ArrowRight size={16} strokeWidth={1.5} />
        </button>
      </div>
    </section>
  );
}

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null);
  const lightboxImages = GRID.map((g) => ({
    src: g.src,
    alt: `${g.tag} — ${g.note}`,
    type: g.type,
    poster: g.poster,
  }));

  return (
    <div data-testid="gallery-page">
      <section className="mx-auto max-w-[1440px] px-6 pb-14 pt-32 md:px-10 md:pt-44">
        <Reveal>
          <SectionTag>Gallery</SectionTag>
        </Reveal>
        <h1 className="mt-6 max-w-5xl font-display text-5xl font-normal leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-7xl" data-testid="gallery-title">
          <MaskedLines lines={["Proof that", "we were there."]} />
        </h1>
        <Reveal delay={0.3}>
          <p className="mt-4 -rotate-1 font-hand text-2xl text-brand md:text-3xl">
            no client quotes. the pictures say it better.
          </p>
          <p className="mt-4 max-w-md text-base leading-relaxed text-smoke md:text-lg">
            Our best shots first, then the full feed — photos and reels. Click
            anything to zoom in.
          </p>
        </Reveal>
      </section>

      <FeaturedSlider />

      <section className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-20" data-testid="gallery-feed">
        <Reveal>
          <SectionTag>The Full Feed</SectionTag>
        </Reveal>
        <h2 className="mb-12 mt-4 font-display text-4xl font-normal tracking-tight text-ink sm:text-5xl">
          <MaskedLines lines={["Every frame we can't delete."]} />
        </h2>

        <div className="columns-2 gap-6 md:columns-3 md:gap-8">
          {GRID.map((g, i) => (
            <Reveal key={g.src + i} delay={0.03 * i} className="mb-6 break-inside-avoid md:mb-8">
              <button
                onClick={() => setLightbox(i)}
                data-testid={`gallery-grid-item-${i}`}
                className={`group block w-full border border-black/10 bg-white p-3 pb-4 text-left shadow-[0_10px_30px_-15px_rgba(17,17,17,0.25)] transition-[transform] duration-500 ease-cinematic hover:rotate-0 hover:scale-[1.02] ${TILTS[i % 4]}`}
              >
                {g.type === "video" ? (
                  <div className="relative">
                    <video
                      src={g.src}
                      poster={g.poster}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full object-cover"
                      data-testid={`gallery-reel-${i}`}
                    />
                    <span
                      className="absolute right-2 top-2 flex items-center gap-1.5 bg-brand px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white"
                      data-testid={`gallery-reel-badge-${i}`}
                    >
                      <Play size={10} strokeWidth={2} /> Reel
                    </span>
                  </div>
                ) : (
                  <img
                    src={g.src}
                    alt={`${g.tag} — ${g.note}`}
                    loading="lazy"
                    className="w-full object-cover"
                  />
                )}
                <div className="mt-3 flex items-baseline justify-between gap-2 px-1">
                  <p className="font-mono text-xs uppercase tracking-[0.2em] text-smoke">{g.tag}</p>
                  <p className="font-hand text-xl leading-none text-brand">{g.note}</p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        <Lightbox
          images={lightboxImages}
          index={lightbox}
          onClose={() => setLightbox(null)}
          onNav={(d) => setLightbox((i) => (i + d + GRID.length) % GRID.length)}
        />
      </section>

      <section className="border-t border-black/10" data-testid="gallery-cta">
        <div className="mx-auto max-w-[1440px] px-6 py-20 text-center md:px-10 md:py-28">
          <h2 className="mx-auto max-w-2xl font-display text-4xl font-normal leading-[1.05] tracking-tight text-ink sm:text-5xl">
            <MaskedLines lines={["Your story could", "be next."]} />
          </h2>
          <Reveal delay={0.25}>
            <Link
              to="/contact"
              data-testid="gallery-cta-button"
              className="mt-10 inline-block bg-brand px-8 py-4 text-xs font-medium uppercase tracking-[0.25em] text-white transition-colors duration-300 hover:bg-ink"
            >
              Start the Conversation
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
