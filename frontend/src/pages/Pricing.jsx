import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight, Construction } from "lucide-react";
import { Reveal, MaskedLines, SectionTag } from "@/components/motion";
import { PACKAGES, ADD_ONS, VIDEO_UNDER_CONSTRUCTION, PACKAGES_UNDER_CONSTRUCTION } from "@/data/pricing";
import { waLink } from "@/data/site";

const TERMS = [
  { title: "Booking", text: "A 30% deposit secures your date. The remainder is due on the session day." },
  { title: "Reschedule", text: "Life happens. One free reschedule up to 72 hours before the session." },
  { title: "Delivery", text: "Edited galleries arrive within 7–14 days, depending on the package." },
];

export default function Pricing() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ align: "center", loop: true });
  const [selected, setSelected] = useState(0);

  const onSelect = useCallback(() => {
    if (emblaApi) setSelected(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div data-testid="pricing-page">
      <section className="mx-auto max-w-[1440px] px-6 pb-8 pt-32 text-center md:px-10 md:pt-44">
        <Reveal>
          <SectionTag center>Pricing</SectionTag>
        </Reveal>
        <h1 className="mx-auto mt-6 max-w-3xl font-display text-5xl font-normal leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-7xl" data-testid="pricing-title">
          <MaskedLines lines={["Choose how the", "story gets told."]} />
        </h1>
        <Reveal delay={0.3}>
          <p className="mx-auto mt-6 max-w-md text-base leading-relaxed text-smoke md:text-lg">
            Every package includes a pre-session consultation and a private
            online gallery. Swipe or drag to explore.
          </p>
        </Reveal>
      </section>

      {/* Data-driven carousel — add entries to data/pricing.js to grow */}
      <section className="pb-16 pt-6" data-testid="pricing-carousel">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex items-stretch py-6">
            {PACKAGES.map((p, i) => {
              const active = i === selected;
              const under = PACKAGES_UNDER_CONSTRUCTION.includes(p.id);
              return (
                <div
                  key={p.id}
                  className="flex flex-[0_0_84%] px-3 sm:flex-[0_0_52%] lg:flex-[0_0_30%]"
                  data-testid={`pricing-slide-${p.id}`}
                >
                  <div
                    className={`relative flex w-full flex-col overflow-hidden border bg-white p-8 transition-[transform,opacity,border-color,box-shadow] duration-500 ease-cinematic ${
                      active
                        ? "scale-100 border-brand/50 opacity-100 shadow-[0_28px_60px_-28px_rgba(17,17,17,0.3)]"
                        : "scale-[0.94] border-black/10 opacity-50"
                    }`}
                  >
                    {/* Construction tape X */}
                    {under && (
                      <>
                        <div
                          className="hazard-stripes pointer-events-none absolute left-1/2 top-1/2 z-10 h-9 w-[170%] -translate-x-1/2 -translate-y-1/2 rotate-[55deg] opacity-95 shadow-md"
                          data-testid={`package-tape-a-${p.id}`}
                        />
                        <div
                          className="hazard-stripes pointer-events-none absolute left-1/2 top-1/2 z-10 h-9 w-[170%] -translate-x-1/2 -translate-y-1/2 -rotate-[55deg] opacity-95 shadow-md"
                          data-testid={`package-tape-b-${p.id}`}
                        />
                        <span
                          className="absolute right-4 top-4 z-20 rotate-3 bg-[#FFC500] px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-ink shadow-md"
                          data-testid={`package-construction-${p.id}`}
                        >
                          Under construction
                        </span>
                      </>
                    )}

                    <div className={`flex h-full flex-col ${under ? "opacity-40" : ""}`}>
                      <div className="flex items-baseline justify-between">
                        <span className="font-mono text-xs tracking-[0.2em] text-smoke">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        {p.featured && !under && (
                          <span className="font-mono text-xs uppercase tracking-[0.25em] text-brand">
                            Most loved
                          </span>
                        )}
                      </div>
                      <h3 className="mt-6 font-display text-3xl font-normal tracking-tight text-ink">
                        {p.name}
                      </h3>
                      <div className="mt-3 flex items-baseline gap-2">
                        <span className="font-display text-4xl font-normal tracking-tight text-ink">
                          {p.price}
                        </span>
                        {p.unit && (
                          <span className="font-mono text-xs uppercase tracking-[0.2em] text-smoke">
                            {p.unit}
                          </span>
                        )}
                      </div>
                      <div className="my-6 h-px w-full bg-black/10" />
                      <ul className="flex-1 space-y-3">
                        {p.inclusions.map((inc) => (
                          <li key={inc} className="flex gap-3 text-base leading-relaxed text-ink/80">
                            <span className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-brand" />
                            {inc}
                          </li>
                        ))}
                      </ul>
                      {under ? (
                        <span
                          className="mt-8 flex cursor-not-allowed items-center justify-center gap-2 border-2 border-dashed border-[#FFC500] px-6 py-3.5 text-xs font-medium uppercase tracking-[0.25em] text-smoke"
                          data-testid={`package-unavailable-${p.id}`}
                        >
                          <Construction size={14} strokeWidth={2} className="text-[#B8860B]" />
                          Currently unavailable
                        </span>
                      ) : (
                        <a
                          href={waLink(p.waText)}
                          target="_blank"
                          rel="noreferrer"
                          data-testid={`pricing-inquire-${p.id}`}
                          className={`mt-8 block px-6 py-3.5 text-center text-xs font-medium uppercase tracking-[0.25em] transition-colors duration-300 ${
                            active
                              ? "bg-brand text-white hover:bg-ink"
                              : "border border-ink/20 text-ink hover:border-brand hover:text-brand"
                          }`}
                        >
                          Inquire
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mx-auto mt-4 flex max-w-[1440px] items-center justify-center gap-8 px-6">
          <button
            onClick={() => emblaApi && emblaApi.scrollPrev()}
            aria-label="Previous package"
            data-testid="pricing-prev"
            className="flex h-11 w-11 items-center justify-center border border-ink/15 text-ink transition-colors duration-300 hover:border-brand hover:text-brand"
          >
            <ArrowLeft size={16} strokeWidth={1.5} />
          </button>
          <div className="flex items-center gap-2" data-testid="pricing-dots">
            {PACKAGES.map((p, i) => (
              <button
                key={p.id}
                aria-label={`Go to ${p.name}`}
                data-testid={`pricing-dot-${p.id}`}
                onClick={() => emblaApi && emblaApi.scrollTo(i)}
                className="py-2"
              >
                <span
                  className={`block h-px transition-all duration-500 ease-cinematic ${
                    i === selected ? "w-10 bg-brand" : "w-5 bg-ink/20 hover:bg-ink/50"
                  }`}
                />
              </button>
            ))}
          </div>
          <button
            onClick={() => emblaApi && emblaApi.scrollNext()}
            aria-label="Next package"
            data-testid="pricing-next"
            className="flex h-11 w-11 items-center justify-center border border-ink/15 text-ink transition-colors duration-300 hover:border-brand hover:text-brand"
          >
            <ArrowRight size={16} strokeWidth={1.5} />
          </button>
        </div>
      </section>

      {/* Add-Ons mini-catalogue — edit entries in data/pricing.js */}
      <section className="mx-auto max-w-[1440px] px-6 pb-24 md:px-10" data-testid="addons-section">
        <Reveal>
          <SectionTag>Add-Ons</SectionTag>
        </Reveal>
        <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-4xl font-normal tracking-tight text-ink sm:text-5xl" data-testid="addons-title">
            <MaskedLines lines={["Enhance any package"]} />
          </h2>
          <Reveal delay={0.15}>
            <p className="-rotate-1 font-hand text-2xl text-brand" data-testid="addons-note">
              little extras, big difference
            </p>
          </Reveal>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-3 md:gap-6">
          {ADD_ONS.map((a, i) => {
            const under = a.video && VIDEO_UNDER_CONSTRUCTION;
            return (
              <Reveal key={a.id} delay={0.08 * i} className="h-full">
                <div
                  data-testid={`addon-card-${a.id}`}
                  className={`relative flex h-full flex-col overflow-hidden border bg-white p-7 pt-9 ${
                    under ? "border-black/20" : "border-black/10"
                  }`}
                >
                  {under && (
                    <div
                      className="hazard-stripes absolute inset-x-0 top-0 h-2.5"
                      data-testid={`addon-hazard-${a.id}`}
                    />
                  )}
                  {under && (
                    <span
                      className="absolute right-4 top-6 rotate-3 bg-[#FFC500] px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-ink shadow-md"
                      data-testid={`addon-construction-${a.id}`}
                    >
                      Under construction
                    </span>
                  )}

                  <span className="font-mono text-xs tracking-[0.2em] text-smoke">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3
                    className={`mt-5 font-display text-2xl font-normal tracking-tight ${
                      under ? "text-smoke" : "text-ink"
                    }`}
                  >
                    {a.name}
                  </h3>
                  <div className="mt-2 flex items-baseline gap-2">
                    <span
                      className={`font-display text-3xl font-normal ${
                        under ? "text-smoke" : "text-ink"
                      }`}
                    >
                      {a.price}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-[0.2em] text-smoke">
                      {a.unit}
                    </span>
                  </div>

                  <div className="mt-auto pt-7">
                    {under ? (
                      <span
                        className="flex cursor-not-allowed items-center justify-center gap-2 border-2 border-dashed border-[#FFC500] px-5 py-3 text-xs font-medium uppercase tracking-[0.2em] text-smoke"
                        data-testid={`addon-unavailable-${a.id}`}
                      >
                        <Construction size={14} strokeWidth={2} className="text-[#B8860B]" />
                        Currently unavailable
                      </span>
                    ) : (
                      <a
                        href={waLink(a.waText)}
                        target="_blank"
                        rel="noreferrer"
                        data-testid={`addon-inquire-${a.id}`}
                        className="block border border-ink/20 px-5 py-3 text-center text-xs font-medium uppercase tracking-[0.2em] text-ink transition-colors duration-300 hover:border-brand hover:text-brand"
                      >
                        Add to Inquiry
                      </a>
                    )}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>

        {VIDEO_UNDER_CONSTRUCTION && (
          <Reveal delay={0.2}>
            <p
              className="mt-6 font-mono text-xs uppercase tracking-[0.25em] text-smoke"
              data-testid="addons-construction-note"
            >
              Video services by Zach & Saber are currently under construction — back soon.
            </p>
          </Reveal>
        )}
      </section>

      {/* Terms */}
      <section className="border-t border-black/10 bg-[#FAFAFA]" data-testid="pricing-terms">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-16 sm:grid-cols-3 md:px-10 md:py-20">
          {TERMS.map((t, i) => (
            <Reveal key={t.title} delay={0.08 * i}>
              <div data-testid={`pricing-term-${i}`}>
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-brand">
                  {t.title}
                </p>
                <p className="mt-3 text-base leading-relaxed text-smoke">{t.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
