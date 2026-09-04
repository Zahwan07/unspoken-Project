import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Reveal, MaskedLines, SectionTag } from "@/components/motion";
import { PHOTOGRAPHERS, TEAM_DIRECTION } from "@/data/photographers";

const CHAPTERS = [
  {
    n: "01",
    title: "Authenticity",
    text: "Nothing staged twice. We wait for the real moment rather than manufacturing one — the images that last are the ones that actually happened.",
  },
  {
    n: "02",
    title: "Emotion",
    text: "Technique serves feeling, never the other way around. If a frame doesn't make you feel something years from now, it doesn't leave the studio.",
  },
  {
    n: "03",
    title: "Detail",
    text: "The tremble of a hand, light through a veil, a glance across the room. The smallest things carry the loudest meaning.",
  },
];

const STATS = [
  { value: "07", label: "People, one crew" },
  { value: "480+", label: "Sessions completed" },
  { value: "320+", label: "Stories told" },
];

export default function About() {
  return (
    <div data-testid="about-page">
      {/* Header */}
      <section className="mx-auto max-w-[1440px] px-6 pb-20 pt-32 md:px-10 md:pt-44">
        <Reveal>
          <SectionTag>About the Studio</SectionTag>
        </Reveal>
        <h1 className="mt-6 max-w-5xl font-display text-5xl font-normal leading-[1.02] tracking-tight text-ink sm:text-6xl lg:text-7xl" data-testid="about-title">
          <MaskedLines lines={["We photograph what", "words cannot carry."]} />
        </h1>
        <Reveal delay={0.3} className="mt-8 max-w-xl">
          <p className="text-base leading-relaxed text-smoke md:text-lg">
            Founded in a borrowed studio with one camera and a stubborn idea —
            that photography should listen more than it speaks. Today we are
            seven people, one philosophy, and hundreds of quiet stories.
          </p>
        </Reveal>
      </section>

      {/* Founder */}
      <section className="border-y border-black/10 bg-[#FAFAFA]" data-testid="about-founder">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-6 py-20 md:grid-cols-12 md:px-10 md:py-28">
          <div className="md:col-span-5">
            <Reveal>
              <div className="overflow-hidden">
                <img
                  src="/uploads/a8.jpg"
                  alt="A quiet moment before the ceremony — The Unspoken Project"
                  loading="lazy"
                  className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-cinematic hover:scale-[1.02]"
                  data-testid="about-founder-photo"
                />
              </div>
            </Reveal>
          </div>
          <div className="flex flex-col justify-center md:col-span-6 md:col-start-7">
            <Reveal>
              <SectionTag>The Beginning</SectionTag>
            </Reveal>
            <h2 className="mt-5 font-display text-3xl font-normal leading-[1.1] tracking-tight text-ink sm:text-4xl">
              <MaskedLines lines={["It started with a", "grandmother's album."]} />
            </h2>
            <Reveal delay={0.2}>
              <p className="mt-6 text-base leading-relaxed text-smoke md:text-lg">
                Pages of fading prints — no poses, no performances, just people
                being people. That album taught us what a photograph is really
                for: not to impress strangers, but to remind the people you
                love who they were, exactly as they were.
              </p>
              <p className="mt-4 text-base leading-relaxed text-smoke md:text-lg">
                Every session we shoot is measured against that album. Would
                this frame deserve a page? If not, we keep waiting.
              </p>
              <p className="mt-8 font-hand text-3xl text-brand">
                — Ath, on why we started
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Manifesto chapters */}
      <section className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28" data-testid="about-manifesto">
        <Reveal>
          <SectionTag>Our Approach</SectionTag>
        </Reveal>
        <div className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
          {CHAPTERS.map((c, i) => (
            <Reveal key={c.n} delay={0.1 * i}>
              <div className="border-t border-black/15 pt-6" data-testid={`about-chapter-${c.n}`}>
                <span className="font-mono text-xs tracking-[0.3em] text-brand">{c.n}</span>
                <h3 className="mt-3 font-display text-2xl font-normal tracking-tight text-ink sm:text-3xl">
                  {c.title}
                </h3>
                <p className="mt-4 text-base leading-relaxed text-smoke">{c.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* The crew */}
      <section className="border-t border-black/10" data-testid="about-team">
        <div className="mx-auto max-w-[1440px] px-6 py-20 md:px-10 md:py-28">
          <Reveal>
            <SectionTag>The Crew</SectionTag>
          </Reveal>
          <h2 className="mt-4 font-display text-4xl font-normal tracking-tight text-ink sm:text-5xl">
            <MaskedLines lines={["The people behind the frames"]} />
          </h2>

          {/* Creative Direction */}
          <Reveal delay={0.1}>
            <p className="mt-14 font-mono text-xs uppercase tracking-[0.3em] text-smoke">
              Creative Direction
            </p>
          </Reveal>
          <div className="mt-6 grid gap-px border border-black/10 bg-black/10 md:grid-cols-3">
            {TEAM_DIRECTION.map((m, i) => (
              <Reveal key={m.name} delay={0.08 * i} className="h-full">
                <div
                  className="group flex h-full flex-col bg-white transition-colors duration-300 hover:bg-[#FAFAFA]"
                  data-testid={`about-direction-${m.name.toLowerCase()}`}
                >
                  <div className="overflow-hidden">
                    <img
                      src={m.portrait}
                      alt={`${m.name} — ${m.role}`}
                      loading="lazy"
                      className="aspect-[3/4] w-full object-cover duration-700 ease-cinematic group-hover:scale-[1.03] group-hover:grayscale-0"
                      data-testid={`about-direction-photo-${m.name.toLowerCase()}`}
                    />
                  </div>
                  <div className="flex flex-1 flex-col p-8">
                    <p className="mt-5 font-display text-3xl font-normal tracking-tight text-ink">
                      {m.name}
                    </p>
                    <p className="mt-1 font-mono text-xs uppercase tracking-[0.25em] text-smoke">
                      {m.role}
                    </p>
                    <p className="mt-6 font-hand text-2xl leading-snug text-ink/75">
                      "{m.quote}"
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Production */}
          <Reveal delay={0.1}>
            <p className="mt-16 font-mono text-xs uppercase tracking-[0.3em] text-smoke">
              Production
            </p>
          </Reveal>
          <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {PHOTOGRAPHERS.map((p, i) => (
              <Reveal key={p.slug} delay={0.07 * i} className={i % 2 === 1 ? "md:mt-10" : ""}>
                <Link
                  to={`/portfolio?p=${p.slug}`}
                  data-testid={`about-photographer-${p.slug}`}
                  className="group block"
                >
                  <div className="overflow-hidden">
                    <img
                      src={p.portrait}
                      alt={`${p.name} — ${p.specialty}`}
                      loading="lazy"
                      className="aspect-[3/4] w-full object-cover duration-700 ease-cinematic group-hover:scale-105 group-hover:grayscale-0"
                      data-testid={`about-photographer-photo-${p.slug}`}
                    />
                  </div>
                  <div className="mt-4 flex items-baseline justify-between">
                    <p className="font-display text-2xl tracking-tight text-ink transition-colors duration-300 group-hover:text-brand">
                      {p.name}
                    </p>
                    <ArrowRight size={14} strokeWidth={1.5} className="text-smoke transition-all duration-300 group-hover:translate-x-1 group-hover:text-brand" />
                  </div>
                  <p className="mt-1 font-mono text-xs uppercase tracking-[0.25em] text-brand">
                    {p.specialty}
                  </p>
                  <p className="mt-2 font-hand text-xl leading-snug text-ink/70">{p.tagline}</p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-t border-black/10 bg-[#FAFAFA]" data-testid="about-stats">
        <div className="mx-auto grid max-w-[1440px] gap-10 px-6 py-16 sm:grid-cols-3 md:px-10 md:py-20">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={0.1 * i}>
              <div className="flex items-baseline gap-4" data-testid={`about-stat-${i}`}>
                <span className="font-display text-5xl font-normal tracking-tight text-brand md:text-6xl">
                  {s.value}
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-smoke">
                  {s.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </div>
  );
}
