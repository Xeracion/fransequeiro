"use client";

import { motion } from "framer-motion";
import {
  Globe2,
  Users,
  Leaf,
  Mic,
  Compass,
  HeartHandshake,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { RevealOnScroll } from "./RevealOnScroll";

const services = [
  {
    icon: Globe2,
    title: "Gestión de proyectos europeos",
    description:
      "Diseño, financiación y coordinación de proyectos internacionales, de la idea a la ejecución sobre el terreno.",
    className: "md:col-span-2",
  },
  {
    icon: Users,
    title: "Movilidad e intercambio juvenil",
    description:
      "Programas que conectan a jóvenes de distintos países para aprender, colaborar y crecer juntos.",
    className: "",
  },
  {
    icon: Leaf,
    title: "Regeneración rural",
    description:
      "Iniciativas que demuestran que lo local también puede mover Europa, sin necesidad de estar en una capital.",
    className: "",
  },
  {
    icon: Compass,
    title: "Liderazgo comunitario",
    description:
      "Acompañamiento a equipos y colectivos para detectar ideas con potencial y llevarlas a la práctica.",
    className: "md:col-span-2",
  },
  {
    icon: Mic,
    title: "Oratoria y storytelling",
    description:
      "Formación en comunicación y narrativa para que las ideas lleguen con fuerza a quien las necesita escuchar.",
    className: "",
  },
  {
    icon: HeartHandshake,
    title: "Educación no formal e interculturalidad",
    description:
      "Metodologías de aprendizaje vivencial para migración, activismo juvenil y comunicación entre culturas.",
    className: "md:col-span-3",
  },
];

export function BentoServices() {
  return (
    <section id="servicios" className="mx-auto max-w-5xl px-6 py-28 sm:py-36">
      <RevealOnScroll className="mb-14 text-center">
        <span className="text-xs tracking-[0.2em] text-[var(--accent)] uppercase">
          Servicios
        </span>
        <h2 className="mt-4 text-balance font-[family-name:var(--font-display)] text-3xl font-light sm:text-4xl">
          Proyectos que conectan lo local con lo europeo
        </h2>
      </RevealOnScroll>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        {services.map((service, i) => (
          <RevealOnScroll
            key={service.title}
            delay={(i % 3) * 0.08}
            className={cn(service.className)}
          >
            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.25, ease: "easeOut" }}
              className="group relative h-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7"
            >
              <div
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(400px circle at var(--x, 50%) var(--y, 50%), color-mix(in srgb, var(--accent) 12%, transparent), transparent 70%)",
                }}
                onMouseMove={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  e.currentTarget.style.setProperty(
                    "--x",
                    `${e.clientX - rect.left}px`
                  );
                  e.currentTarget.style.setProperty(
                    "--y",
                    `${e.clientY - rect.top}px`
                  );
                }}
              />
              <service.icon
                size={22}
                className="relative mb-5 text-[var(--accent)]"
              />
              <h3 className="relative mb-2 text-lg font-medium">
                {service.title}
              </h3>
              <p className="relative text-sm text-[var(--muted)]">
                {service.description}
              </p>
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-transparent transition-all duration-300 group-hover:ring-[var(--accent)]/30" />
            </motion.div>
          </RevealOnScroll>
        ))}
      </div>
    </section>
  );
}
