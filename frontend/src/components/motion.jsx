import { useRef } from "react";
import { motion, useInView } from "framer-motion";

export const EASE = [0.76, 0, 0.24, 1];

export const Reveal = ({ children, delay = 0, y = 32, className = "" }) => (
  <motion.div
    className={className}
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration: 0.9, ease: EASE, delay }}
  >
    {children}
  </motion.div>
);

export const MaskedLines = ({
  lines,
  className = "",
  lineClassName = "",
  delay = 0,
  inView = true,
  stagger = 0.12,
}) => {
  const ref = useRef(null);
  const seen = useInView(ref, { once: true, margin: "-40px" });
  const active = inView ? seen : true;
  return (
    <span ref={ref} className={`block ${className}`}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden pb-[0.08em]">
          <motion.span
            className={`block ${lineClassName}`}
            initial={{ y: "112%" }}
            animate={active ? { y: "0%" } : {}}
            transition={{ duration: 1.05, ease: EASE, delay: delay + i * stagger }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </span>
  );
};

export const SectionTag = ({ children, center = false }) => (
  <div
    className={`flex items-center gap-3 ${center ? "justify-center" : ""}`}
    data-testid="section-tag"
  >
    <span className="h-1.5 w-1.5 rounded-full bg-brand" />
    <span className="font-mono text-xs uppercase tracking-[0.3em] text-smoke">
      {children}
    </span>
  </div>
);
