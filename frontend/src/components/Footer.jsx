import { Link } from "react-router-dom";
import { Instagram, Facebook, Youtube } from "lucide-react";
import { NAV_LINKS, SOCIALS, BRAND, TAGLINE } from "@/data/site";
import { PHOTOGRAPHERS } from "@/data/photographers";

const ICONS = { Instagram, Facebook, YouTube: Youtube };

export default function Footer() {
  return (
    <footer className="border-t border-black/10 bg-white" data-testid="footer">
      <div className="mx-auto max-w-[1440px] px-6 py-16 md:px-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="font-display text-2xl tracking-tight text-ink">
              The Unspoken <span className="italic text-brand">Project</span>
            </p>
            <p className="mt-3 max-w-xs text-base leading-relaxed text-smoke">
              {TAGLINE}. A photography crew for graduations, portraits, street,
              and the everyday in-between.
            </p>
            <p className="mt-4 -rotate-1 font-hand text-2xl text-brand">
              shot on campus & beyond
            </p>
          </div>

          <div className="md:col-span-3">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-smoke">Explore</p>
            <ul className="mt-4 space-y-2">
              {NAV_LINKS.map((l) => (
                <li key={l.to}>
                  <Link
                    to={l.to}
                    data-testid={`footer-link-${l.label}`}
                    className="text-base text-ink transition-colors duration-300 hover:text-brand"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-smoke">The Crew</p>
            <ul className="mt-4 space-y-2">
              {PHOTOGRAPHERS.map((p) => (
                <li key={p.slug}>
                  <Link
                    to={`/portfolio?p=${p.slug}`}
                    data-testid={`footer-artist-${p.slug}`}
                    className="text-base text-ink transition-colors duration-300 hover:text-brand"
                  >
                    {p.name} — {p.specialty}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-smoke">Follow</p>
            <div className="mt-4 flex gap-3">
              {SOCIALS.map((s) => {
                const Icon = ICONS[s.label];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={s.label}
                    data-testid={`footer-social-${s.label.toLowerCase()}`}
                    className="flex h-9 w-9 items-center justify-center border border-ink/15 text-ink transition-colors duration-300 hover:border-brand hover:text-brand"
                  >
                    {Icon && <Icon size={15} strokeWidth={1.5} />}
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-3 border-t border-black/10 pt-6 sm:flex-row sm:items-center">
          <p className="font-mono text-xs uppercase tracking-[0.25em] text-smoke">
            © 2026 {BRAND}. All stories reserved.
          </p>
          <p className="flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-smoke">
            Jakarta <span className="h-1 w-1 rounded-full bg-brand" /> Studio
          </p>
        </div>
      </div>
    </footer>
  );
}
