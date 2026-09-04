import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Lightbox from "@/components/Lightbox";
import { Reveal, MaskedLines, SectionTag } from "@/components/motion";
import { PHOTOGRAPHERS } from "@/data/photographers";

export default function Portfolio() {
  const [params, setParams] = useSearchParams();
  const [lightbox, setLightbox] = useState(null);
  const [mediaType, setMediaType] = useState("photos");
  const active = PHOTOGRAPHERS.find((p) => p.slug === params.get("p")) || null;

  const select = (slug) => {
    setParams(slug ? { p: slug } : {});
    setLightbox(null);
    setMediaType("photos");
  };

  return (
    <div data-testid="portfolio-page">
      <section className="mx-auto max-w-[1440px] px-6 pb-10 pt-32 md:px-10 md:pt-44">
        <Reveal>
          <SectionTag>Portfolio</SectionTag>
        </Reveal>
        <h1 className="mt-6 max-w-4xl font-display text-5xl font-normal leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-7xl" data-testid="portfolio-title">
          <MaskedLines lines={["Four eyes,", "four ways of seeing."]} />
        </h1>
      </section>

      {/* Sub-nav */}
      <div className="sticky top-16 z-20 border-y border-black/10 bg-white/85 backdrop-blur-xl" data-testid="portfolio-subnav">
        <div className="no-scrollbar mx-auto flex max-w-[1440px] gap-8 overflow-x-auto px-6 md:px-10">
          <button
            onClick={() => select(null)}
            data-testid="portfolio-tab-all"
            className={`relative shrink-0 py-4 text-xs font-medium uppercase tracking-[0.25em] transition-colors duration-300 ${
              !active ? "text-brand" : "text-ink hover:text-brand"
            }`}
          >
            All
            {!active && <span className="absolute inset-x-0 bottom-0 h-px bg-brand" />}
          </button>
          {PHOTOGRAPHERS.map((p) => (
            <button
              key={p.slug}
              onClick={() => select(p.slug)}
              data-testid={`portfolio-tab-${p.slug}`}
              className={`relative shrink-0 py-4 text-xs font-medium uppercase tracking-[0.25em] transition-colors duration-300 ${
                active?.slug === p.slug ? "text-brand" : "text-ink hover:text-brand"
              }`}
            >
              {p.name} — {p.specialty}
              {active?.slug === p.slug && (
                <span className="absolute inset-x-0 bottom-0 h-px bg-brand" />
              )}
            </button>
          ))}
        </div>
      </div>

      {!active ? (
        /* Landing: 4 photographer tiles */
        <section className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-20" data-testid="portfolio-tiles">
          <div className="grid gap-4 md:grid-cols-2 md:gap-6">
            {PHOTOGRAPHERS.map((p, i) => (
              <Reveal key={p.slug} delay={0.06 * i}>
                <button
                  onClick={() => select(p.slug)}
                  data-testid={`portfolio-tile-${p.slug}`}
                  className="group relative block w-full overflow-hidden text-left"
                >
                  <div className="aspect-[4/3] overflow-hidden md:aspect-[16/10]">
                    <img
                      src={p.cover}
                      alt={`${p.name} — ${p.specialty}`}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 ease-cinematic group-hover:scale-105"
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 flex w-full items-end justify-between p-6 md:p-8">
                    <div>
                      <p className="font-mono text-xs uppercase tracking-[0.3em] text-white/70">
                        {p.specialty}
                      </p>
                      <p className="mt-1 font-display text-3xl font-normal tracking-tight text-white md:text-4xl">
                        {p.name}
                      </p>
                    </div>
                    <span className="flex h-10 w-10 items-center justify-center border border-white/40 text-white transition-colors duration-300 group-hover:border-brand group-hover:bg-brand">
                      <ArrowUpRight size={16} strokeWidth={1.5} />
                    </span>
                  </div>
                </button>
              </Reveal>
            ))}
          </div>
        </section>
      ) : (
        /* Individual gallery */
        <section className="mx-auto max-w-[1440px] px-6 py-16 md:px-10 md:py-20" data-testid="portfolio-gallery">
          <Reveal>
            <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
              <div>
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-brand">
                  {active.specialty}
                </p>
                <h2 className="mt-2 font-display text-4xl font-normal tracking-tight text-ink sm:text-5xl">
                  {active.name}
                </h2>
                <p className="mt-2 max-w-md font-hand text-2xl leading-snug text-ink/70">
                  {active.tagline}
                </p>
              </div>
              <div className="flex flex-col items-end gap-4">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-smoke" data-testid="portfolio-gallery-count">
                  {mediaType === "photos"
                    ? `${String(active.gallery.length).padStart(2, "0")} frames`
                    : `${String(active.videos?.length || 0).padStart(2, "0")} reels`}
                </p>
                {active.videos && active.videos.length > 0 && (
                  <div className="flex gap-4 font-mono text-xs uppercase tracking-[0.2em]">
                    <button
                      onClick={() => setMediaType("photos")}
                      className={`transition-colors duration-300 ${mediaType === "photos" ? "text-brand border-b border-brand pb-1" : "text-smoke hover:text-ink pb-1"}`}
                    >
                      Photos
                    </button>
                    <button
                      onClick={() => setMediaType("videos")}
                      className={`transition-colors duration-300 ${mediaType === "videos" ? "text-brand border-b border-brand pb-1" : "text-smoke hover:text-ink pb-1"}`}
                    >
                      Videos
                    </button>
                  </div>
                )}
              </div>
            </div>
          </Reveal>

          <div className="columns-2 gap-4 md:columns-3 md:gap-5">
            {mediaType === "photos"
              ? active.gallery.map((img, i) => (
                  <Reveal key={img.src} delay={0.03 * i} className="mb-4 break-inside-avoid md:mb-5">
                    <button
                      onClick={() => setLightbox(i)}
                      data-testid={`gallery-item-${i}`}
                      className="group block w-full overflow-hidden"
                    >
                      <img
                        src={img.src}
                        alt={img.alt}
                        loading="lazy"
                        className="w-full object-cover transition-transform duration-700 ease-cinematic group-hover:scale-[1.04]"
                      />
                    </button>
                  </Reveal>
                ))
              : active.videos.map((vid, i) => (
                  <Reveal key={vid.src} delay={0.03 * i} className="mb-4 break-inside-avoid md:mb-5">
                    <button
                      onClick={() => setLightbox(i)}
                      data-testid={`gallery-video-${i}`}
                      className="group relative block w-full overflow-hidden"
                    >
                      <img
                        src={vid.poster}
                        alt={vid.title}
                        loading="lazy"
                        className="w-full object-cover transition-transform duration-700 ease-cinematic group-hover:scale-[1.04]"
                      />
                      <div className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors duration-300 group-hover:bg-black/10">
                        <span className="bg-brand px-3 py-1 text-[10px] uppercase tracking-widest text-white">
                          Play
                        </span>
                      </div>
                    </button>
                  </Reveal>
                ))}
          </div>

          <Lightbox
            images={mediaType === "photos" ? active.gallery : (active.videos?.map(v => ({ ...v, type: v.type || 'video', alt: v.title })) || [])}
            index={lightbox}
            onClose={() => setLightbox(null)}
            onNav={(d) => {
              const arr = mediaType === "photos" ? active.gallery : active.videos;
              setLightbox((i) => (i + d + arr.length) % arr.length);
            }}
          />
        </section>
      )}
    </div>
  );
}
