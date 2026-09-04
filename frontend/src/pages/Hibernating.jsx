import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { MaskedLines } from "@/components/motion";
import { waLink, HIBERNATION_RETURN_DATE } from "@/data/site";

export default function Hibernating() {
  return (
    <div
      className="flex min-h-[100svh] flex-col items-center justify-center bg-white px-6 text-center"
      data-testid="hibernation-page"
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="flex items-center gap-3"
      >
        <motion.span
          className="h-2.5 w-2.5 rounded-full bg-brand"
          animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          data-testid="hibernation-pulse"
        />
        <span className="font-mono text-xs uppercase tracking-[0.35em] text-smoke">
          The Unspoken Project
        </span>
      </motion.div>

      <h1
        className="mt-10 max-w-4xl font-display text-5xl font-normal leading-[1.05] tracking-tight text-ink sm:text-6xl md:text-7xl"
        data-testid="hibernation-title"
      >
        <MaskedLines
          inView={false}
          delay={0.3}
          lines={["The Unspoken Project", "will come back soon."]}
        />
      </h1>

      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        className="mt-6 -rotate-1 font-hand text-2xl text-brand md:text-3xl"
        data-testid="hibernation-note"
      >
        Every member is currently graduating!
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="mt-6 font-mono text-xs uppercase tracking-[0.3em] text-smoke"
        data-testid="hibernation-return-date"
      >
        {HIBERNATION_RETURN_DATE}
      </motion.p>

      <motion.a
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
        href={waLink("Hello! I see you're on a break — please ping me when The Unspoken Project is back!")}
        target="_blank"
        rel="noreferrer"
        data-testid="hibernation-whatsapp"
        className="group mt-12 inline-flex items-center gap-3 border border-ink/20 px-7 py-3.5 text-xs font-medium uppercase tracking-[0.25em] text-ink transition-colors duration-300 hover:border-brand hover:text-brand"
      >
        <MessageCircle size={15} strokeWidth={1.5} className="transition-transform duration-300 group-hover:-rotate-12" />
        Leave us a message anyway
      </motion.a>
    </div>
  );
}
