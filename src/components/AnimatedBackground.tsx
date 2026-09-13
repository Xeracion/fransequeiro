"use client";

import { motion } from "framer-motion";

export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute -top-1/3 -left-1/4 h-[60vw] w-[60vw] rounded-full opacity-[0.15] blur-[120px]"
        style={{ background: "var(--accent)" }}
        animate={{
          x: [0, 60, -20, 0],
          y: [0, 40, 80, 0],
        }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-1/3 -right-1/4 h-[55vw] w-[55vw] rounded-full opacity-[0.12] blur-[120px]"
        style={{ background: "var(--accent-2)" }}
        animate={{
          x: [0, -50, 20, 0],
          y: [0, -30, -70, 0],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        className="grain-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='120' height='120'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />
    </div>
  );
}
