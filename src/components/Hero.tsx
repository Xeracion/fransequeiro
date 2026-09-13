"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";
import { LinkedinIcon } from "./icons/LinkedinIcon";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center"
    >
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="flex max-w-3xl flex-col items-center"
      >
        <motion.div
          variants={item}
          className="mb-6 flex items-center gap-2 rounded-full border border-[var(--border)] bg-[var(--surface)]/60 px-4 py-1.5 text-xs text-[var(--muted)] backdrop-blur-sm"
        >
          <Sparkles size={13} className="text-[var(--accent-2)]" />
          Dreams engineer · smile hunter
        </motion.div>

        <motion.h1
          variants={item}
          className="text-balance font-[family-name:var(--font-display)] text-4xl leading-[1.08] font-light tracking-tight sm:text-6xl md:text-7xl"
        >
          Consultor empresarial
          <br />
          <span className="italic text-[var(--accent)]">e ingeniero de sueños</span>
        </motion.h1>

        <motion.p
          variants={item}
          className="mt-6 max-w-xl text-balance text-base text-[var(--muted)] sm:text-lg"
        >
          Ayudo a personas y organizaciones a diseñar negocios con propósito,
          donde la estrategia, las personas y los resultados crecen en la
          misma dirección.
        </motion.p>

        <motion.div
          variants={item}
          className="mt-10 flex flex-col items-center gap-4 sm:flex-row"
        >
          <a
            href="#contacto"
            className="rounded-full bg-[var(--foreground)] px-7 py-3 text-sm font-medium text-[var(--background)] transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            Empecemos una conversación
          </a>
          <a
            href="https://www.linkedin.com/in/fransequeiro/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium transition-colors hover:bg-[var(--surface-2)]"
          >
            <LinkedinIcon size={16} />
            Ver LinkedIn
          </a>
        </motion.div>
      </motion.div>

      <motion.a
        href="#sobre-mi"
        aria-label="Bajar"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-xs text-[var(--muted)]"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}
