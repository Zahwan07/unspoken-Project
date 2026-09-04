import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/data/site";
import { startScroll, stopScroll } from "@/lib/smooth";
import { EASE } from "@/components/motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (open) stopScroll();
    else startScroll();
  }, [open]);

  return (
    <>
      <header
        className="fixed inset-x-0 top-0 z-40 border-b border-black/5 bg-white/80 backdrop-blur-xl"
        data-testid="main-nav"
      >
        <div className="mx-auto flex h-16 max-w-[1440px] items-center justify-between px-6 md:px-10">
          <Link
            to="/"
            data-testid="nav-logo"
            className="font-display text-2xl leading-none tracking-tight text-ink"
          >
            The Unspoken <span className="italic text-brand">Project</span>
          </Link>

          <nav className="hidden items-center gap-7 md:flex" data-testid="nav-links">
            {NAV_LINKS.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                data-testid={`nav-link-${l.label}`}
                className={({ isActive }) =>
                  `group relative text-xs font-medium uppercase tracking-[0.25em] transition-colors duration-300 ${
                    isActive ? "text-brand" : "text-ink hover:text-brand"
                  }`
                }
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-brand transition-transform duration-300 ease-cinematic group-hover:scale-x-100" />
              </NavLink>
            ))}
            <Link
              to="/contact"
              data-testid="nav-book-cta"
              className="border border-ink/20 px-5 py-2 text-xs font-medium uppercase tracking-[0.25em] text-ink transition-colors duration-300 hover:border-brand hover:text-brand"
            >
              Book
            </Link>
          </nav>

          <button
            className="text-ink md:hidden"
            data-testid="nav-menu-toggle"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-30 flex flex-col justify-center bg-white px-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: EASE }}
            data-testid="mobile-menu"
          >
            <nav className="flex flex-col gap-2">
              {NAV_LINKS.map((l, i) => (
                <motion.div
                  key={l.to}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: EASE, delay: 0.08 + i * 0.07 }}
                >
                  <NavLink
                    to={l.to}
                    end={l.to === "/"}
                    data-testid={`mobile-nav-link-${l.label}`}
                    className={({ isActive }) =>
                      `flex items-baseline gap-4 font-display text-4xl font-normal tracking-tight ${
                        isActive ? "text-brand" : "text-ink"
                      }`
                    }
                  >
                    <span className="font-mono text-xs text-smoke">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {l.label}
                  </NavLink>
                </motion.div>
              ))}
            </nav>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-12 font-hand text-2xl text-brand"
            >
              stories told without words
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
