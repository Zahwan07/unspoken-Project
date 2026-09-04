import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, X } from "lucide-react";
import { startScroll, stopScroll } from "@/lib/smooth";

export default function Lightbox({ images, index, onClose, onNav }) {
  const open = index != null;

  useEffect(() => {
    if (open) stopScroll();
    else startScroll();
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNav(1);
      if (e.key === "ArrowLeft") onNav(-1);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose, onNav]);

  const current = open ? images[index] : null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-white/95 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.35 }}
          data-testid="lightbox"
        >
          <button
            onClick={onClose}
            aria-label="Close"
            data-testid="lightbox-close"
            className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center border border-ink/15 text-ink transition-colors duration-300 hover:border-brand hover:text-brand"
          >
            <X size={18} strokeWidth={1.5} />
          </button>

          <button
            onClick={() => onNav(-1)}
            aria-label="Previous image"
            data-testid="lightbox-prev"
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-ink/15 text-ink transition-colors duration-300 hover:border-brand hover:text-brand md:left-8"
          >
            <ArrowLeft size={16} strokeWidth={1.5} />
          </button>
          <button
            onClick={() => onNav(1)}
            aria-label="Next image"
            data-testid="lightbox-next"
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center border border-ink/15 text-ink transition-colors duration-300 hover:border-brand hover:text-brand md:right-8"
          >
            <ArrowRight size={16} strokeWidth={1.5} />
          </button>

          <motion.figure
            key={index}
            initial={{ opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
            className="flex flex-col items-center gap-4 px-14"
          >
            {current.type === "video" ? (
              <video
                src={current.src}
                poster={current.poster}
                controls
                autoPlay
                className="max-h-[76vh] max-w-[86vw]"
                data-testid="lightbox-video"
              />
            ) : current.type === "youtube" ? (
              <iframe
                src={current.src}
                title={current.alt}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="h-[76vh] w-[86vw] max-w-5xl"
                data-testid="lightbox-youtube"
              />
            ) : (
              <img
                src={current.src}
                alt={current.alt}
                className="max-h-[76vh] max-w-[86vw] object-contain"
                data-testid="lightbox-image"
              />
            )}
            <figcaption className="font-mono text-xs uppercase tracking-[0.3em] text-smoke" data-testid="lightbox-counter">
              {String(index + 1).padStart(2, "0")} — {String(images.length).padStart(2, "0")}
              <span className="mx-3 text-brand">·</span>
              {current.alt}
            </figcaption>
          </motion.figure>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
