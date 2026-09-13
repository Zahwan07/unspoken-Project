import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";
import Marquee from "@/components/Marquee";
import { Reveal, MaskedLines, SectionTag } from "@/components/motion";
import { HERO_SLIDES } from "@/data/heroSlides";

const FEATURED = [
  ...HERO_SLIDES.map((s) => ({
    src: s.image,
    alt: s.alt,
    label: s.caption,
    to: `/portfolio?p=${s.photographerSlug}`,
  })),
];

export default function Home() {
  return (
    <div data-testid="home-page">
      <HeroCarousel />

      {/* Intro / philosophy */}
      <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-36" data-testid="home-intro">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-3">
            <Reveal>
              <SectionTag>The Studio</SectionTag>
            </Reveal>
          </div>
          <div className="md:col-span-9">
            <h2 className="font-display text-4xl font-normal leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
              <MaskedLines
                lines={[
                  "The loudest moments",
                  "are the ones never",
                  "said aloud.",
                ]}
              />
            </h2>
            <Reveal delay={0.25} className="mt-8 max-w-xl">
              <p className="text-base leading-relaxed text-smoke md:text-lg">
                The Unspoken Project is a photography crew built on a simple
                belief — a glance, a held breath, a hand reaching for another
                says more than any caption ever could. We chase those frames,
                quietly.
              </p>
              <Link
                to="/about"
                data-testid="home-intro-link"
                className="group mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-ink transition-colors duration-300 hover:text-brand"
              >
                More about us
                <ArrowRight size={14} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      <Marquee
        items={["Stories told without words", "grads, gigs & golden hours", "The Unspoken Project", "smoke, flags & feelings"]}
      />

      {/* Featured work strip */}
      <section className="mx-auto max-w-[1440px] px-6 py-24 md:px-10 md:py-32" data-testid="home-featured">
        <div className="mb-12 flex items-end justify-between">
          <div>
            <Reveal>
              <SectionTag>Selected Work</SectionTag>
            </Reveal>
            <div className="mt-4 flex items-center gap-4">
              <h2 className="font-display text-4xl font-normal tracking-tight text-ink sm:text-5xl">
                <MaskedLines lines={["Recent frames"]} />
              </h2>
              <Reveal delay={0.2}>
                <span className="hidden -rotate-6 font-hand text-2xl text-brand sm:inline-block md:text-3xl" data-testid="home-featured-sticker">
                  fresh from the field
                </span>
              </Reveal>
            </div>
          </div>
          <Reveal delay={0.15}>
            <Link
              to="/portfolio"
              data-testid="home-featured-viewall"
              className="group hidden items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-ink transition-colors duration-300 hover:text-brand sm:inline-flex"
            >
              View all
              <ArrowRight size={14} strokeWidth={1.5} className="transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 md:gap-6">
          {FEATURED.map((f, i) => (
            <Reveal key={i} delay={0.06 * i} className={i % 3 === 1 ? "md:mt-12" : ""}>
              <Link
                to={f.to}
                data-testid={`home-featured-item-${i}`}
                className="group block overflow-hidden"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={f.src}
                    alt={f.alt}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 ease-cinematic group-hover:scale-105"
                  />
                </div>
                <p className="mt-3 font-mono text-xs uppercase tracking-[0.25em] text-smoke transition-colors duration-300 group-hover:text-brand">
                  {f.label}
                </p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA band */}
      <section className="border-t border-black/10" data-testid="home-cta">
        <div className="mx-auto max-w-[1440px] px-6 py-24 text-center md:px-10 md:py-32">
          <Reveal>
            <SectionTag center>Begin</SectionTag>
          </Reveal>
          <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-normal leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            <MaskedLines lines={["Have a story", "worth keeping?"]} />
          </h2>
          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/contact"
                data-testid="home-cta-book"
                className="bg-brand px-8 py-4 text-xs font-medium uppercase tracking-[0.25em] text-white transition-colors duration-300 hover:bg-ink"
              >
                Book a Session
              </Link>
              <Link
                to="/portfolio"
                data-testid="home-cta-work"
                className="border border-ink/20 px-8 py-4 text-xs font-medium uppercase tracking-[0.25em] text-ink transition-colors duration-300 hover:border-brand hover:text-brand"
              >
                View Our Work
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
