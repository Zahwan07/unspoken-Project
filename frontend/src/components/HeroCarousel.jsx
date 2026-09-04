import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { HERO_SLIDES } from "@/data/heroSlides";
import { EASE, MaskedLines } from "@/components/motion";

const AUTOPLAY = 5200;

export default function HeroCarousel() {
  const count = HERO_SLIDES.length;
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const resumeRef = useRef(null);
  const dragStart = useRef(null);
  const sectionRef = useRef(null);

  const goTo = useCallback(
    (i) => setIndex(((i % count) + count) % count),
    [count]
  );

  const pauseBriefly = useCallback(() => {
    setPaused(true);
    clearTimeout(resumeRef.current);
    resumeRef.current = setTimeout(() => setPaused(false), 6000);
  }, []);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setIndex((i) => (i + 1) % count), AUTOPLAY);
    return () => clearInterval(t);
  }, [paused, count, index]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "ArrowRight") {
        goTo(index + 1);
        pauseBriefly();
      }
      if (e.key === "ArrowLeft") {
        goTo(index - 1);
        pauseBriefly();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [index, goTo, pauseBriefly]);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);

  const onPointerDown = (e) => {
    dragStart.current = e.clientX;
  };
  const onPointerUp = (e) => {
    if (dragStart.current == null) return;
    const dx = e.clientX - dragStart.current;
    dragStart.current = null;
    if (Math.abs(dx) > 60) {
      goTo(dx < 0 ? index + 1 : index - 1);
      pauseBriefly();
    }
  };

  const slide = HERO_SLIDES[index];

  return (
    <section
      ref={sectionRef}
      className="relative h-[100svh] w-full cursor-grab select-none overflow-hidden bg-ink active:cursor-grabbing"
      data-testid="hero-carousel"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onPointerDown={onPointerDown}
      onPointerUp={onPointerUp}
    >
      <motion.div style={{ y }} className="absolute inset-0">
        <AnimatePresence initial={false}>
          <motion.img
            key={index}
            src={slide.image}
            alt={slide.alt}
            draggable={false}
            data-testid="hero-slide-image"
            className="absolute inset-0 h-full w-full object-cover"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{
              opacity: { duration: 0.9, ease: "easeOut" },
              scale: { duration: 6.5, ease: "linear" },
            }}
          />
        </AnimatePresence>
      </motion.div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20" />

      {/* Brand block */}
      <div className="absolute bottom-28 left-6 z-10 max-w-4xl md:bottom-32 md:left-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-5 flex items-center gap-3"
        >
          <span className="h-2 w-2 rounded-full bg-brand" />
          <span className="font-mono text-xs uppercase tracking-[0.35em] text-white/80">
            Photography Studio — Jakarta
          </span>
        </motion.div>
        <h1
          className="font-display text-5xl font-normal leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-[6vw]"
          data-testid="hero-title"
        >
          <MaskedLines inView={false} lines={["The Unspoken", "Project"]} delay={0.35} />
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8, ease: EASE }}
          className="mt-5 text-base tracking-wide text-white/85 md:text-lg"
          data-testid="hero-tagline"
        >
          Stories told without words.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.15, duration: 0.8 }}
          className="mt-2 inline-block -rotate-2 font-hand text-2xl text-[#FF4D43] md:text-3xl"
          data-testid="hero-hand-note"
        >
          grads, gigs & golden hours
        </motion.p>
      </div>

      {/* Caption chip */}
      <div className="absolute bottom-10 left-6 z-10 md:left-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 12, rotate: -2 }}
            animate={{ opacity: 1, y: 0, rotate: -2 }}
            exit={{ opacity: 0, y: -8, rotate: -2 }}
            transition={{ duration: 0.5, ease: EASE }}
            className="bg-white px-4 py-2 shadow-[0_14px_34px_-12px_rgba(0,0,0,0.45)]"
            data-testid="hero-caption"
          >
            <p className="font-mono text-xs uppercase tracking-[0.25em] text-ink">
              {slide.caption}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Controls: markers + arrows */}
      <div className="absolute bottom-8 right-6 z-10 flex items-center gap-6 md:right-12">
        <div className="hidden items-center gap-2 sm:flex" data-testid="hero-markers">
          {HERO_SLIDES.map((_, i) => (
            <button
              key={i}
              data-testid={`hero-marker-${i}`}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => {
                goTo(i);
                pauseBriefly();
              }}
              className="group py-2"
            >
              <span
                className={`block h-px transition-all duration-500 ease-cinematic ${
                  i === index ? "w-10 bg-brand" : "w-5 bg-white/40 group-hover:bg-white/80"
                }`}
              />
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <button
            data-testid="hero-prev"
            aria-label="Previous slide"
            onClick={() => {
              goTo(index - 1);
              pauseBriefly();
            }}
            className="flex h-11 w-11 items-center justify-center border border-white/30 text-white transition-colors duration-300 hover:border-brand hover:bg-brand"
          >
            <ArrowLeft size={16} strokeWidth={1.5} />
          </button>
          <button
            data-testid="hero-next"
            aria-label="Next slide"
            onClick={() => {
              goTo(index + 1);
              pauseBriefly();
            }}
            className="flex h-11 w-11 items-center justify-center border border-white/30 text-white transition-colors duration-300 hover:border-brand hover:bg-brand"
          >
            <ArrowRight size={16} strokeWidth={1.5} />
          </button>
        </div>
      </div>

      {/* Red thread position indicator */}
      <div className="absolute right-5 top-1/2 z-10 hidden -translate-y-1/2 flex-col items-center gap-5 md:flex">
        <span className="font-mono text-xs tracking-[0.3em] text-white/70 [writing-mode:vertical-rl]" data-testid="hero-counter">
          {String(index + 1).padStart(2, "0")} — {String(count).padStart(2, "0")}
        </span>
        <div className="relative h-44 w-px bg-white/25">
          <motion.span
            className="absolute left-0 w-px bg-brand"
            style={{ height: `${100 / count}%` }}
            animate={{ top: `${(index / count) * 100}%` }}
            transition={{ duration: 0.8, ease: EASE }}
            data-testid="hero-thread"
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 z-10 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex"
        data-testid="hero-scroll-indicator"
      >
        <span className="font-mono text-xs uppercase tracking-[0.35em] text-white/60">Scroll</span>
        <motion.span
          className="block h-8 w-px origin-top bg-white/60"
          animate={{ scaleY: [0, 1, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
}
