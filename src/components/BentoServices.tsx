"use client";

import { motion } from "framer-motion";
import {
  Compass,
  Users,
  TrendingUp,
  Puzzle,
  Target,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { RevealOnScroll } from "./RevealOnScroll";

const services = [
  {
    icon: Compass,
    title: "Estrategia con propósito",
    description:
      "Diagnóstico y diseño de la hoja de ruta del negocio, alineando visión, modelo de negocio y objetivos financieros.",
    className: "md:col-span-2",
  },
  {
    icon: Users,
    title: "Desarrollo de equipos",
    description:
      "Acompañamiento a líderes y equipos para tomar decisiones mejor y trabajar con más confianza.",
    className: "",
  },
  {
    icon: TrendingUp,
    title: "Crecimiento y escalado",
    description:
      "Procesos y estructura para escalar sin perder la esencia que hizo funcionar el negocio desde el inicio.",
    className: "",
  },
  {
    icon: Puzzle,
    title: "Diseño organizacional",
    description:
      "Roles, procesos y cultura pensados para que las personas y el negocio crezcan en la misma dirección.",
    className: "md:col-span-2",
  },
  {
    icon: Target,
    title: "Mentoring ejecutivo",
    description:
      "Sesiones 1:1 para fundadores y directivos que necesitan una mirada externa y honesta.",
    className: "",
  },
  {
    icon: Sparkles,
    title: "Innovación y nuevos negocios",
    description:
      "Validación de ideas y modelos de negocio antes de invertir tiempo y recursos en ellos.",
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
          Soluciones a la medida de cada negocio
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
