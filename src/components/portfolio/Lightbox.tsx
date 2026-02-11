import { useEffect, useCallback } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

type MediaItem = {
  type: "image" | "video";
  src: string;
  thumbnail?: string;
};

interface LightboxProps {
  items: MediaItem[];
  currentIndex: number;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const Lightbox = ({ items, currentIndex, onClose, onNavigate }: LightboxProps) => {
  const goNext = useCallback(() => {
    onNavigate((currentIndex + 1) % items.length);
  }, [currentIndex, items.length, onNavigate]);

  const goPrev = useCallback(() => {
    onNavigate((currentIndex - 1 + items.length) % items.length);
  }, [currentIndex, items.length, onNavigate]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, goNext, goPrev]);

  const currentItem = items[currentIndex];

  return (
    <div className="fixed inset-0 z-50 bg-foreground/90 flex items-center justify-center animate-fade-in">
      <button
        onClick={onClose}
        className="absolute top-6 right-6 text-background/80 hover:text-background transition-colors z-10"
      >
        <X size={28} />
      </button>

      <button
        onClick={goPrev}
        className="absolute left-4 md:left-8 text-background/60 hover:text-background transition-colors z-10"
      >
        <ChevronLeft size={36} />
      </button>

      {currentItem.type === "video" ? (
        <video
          key={currentIndex}
          src={currentItem.src}
          controls
          autoPlay
          className="max-h-[85vh] max-w-[90vw] object-contain animate-scale-in"
        />
      ) : (
        <img
          key={currentIndex}
          src={currentItem.src}
          alt={`Gallery image ${currentIndex + 1}`}
          className="max-h-[85vh] max-w-[90vw] object-contain animate-scale-in"
        />
      )}

      <button
        onClick={goNext}
        className="absolute right-4 md:right-8 text-background/60 hover:text-background transition-colors z-10"
      >
        <ChevronRight size={36} />
      </button>

      <p className="absolute bottom-6 text-background/60 text-sm font-body">
        {currentIndex + 1} / {items.length}
      </p>
    </div>
  );
};

export default Lightbox;