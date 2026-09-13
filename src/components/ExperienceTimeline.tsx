"use client";

import { Briefcase } from "lucide-react";
import { RevealOnScroll } from "./RevealOnScroll";

const milestones = [
  {
    period: "Hoy",
    role: "Consultor empresarial independiente",
    org: "Fran Sequeiro",
    description:
      "Acompaño a fundadores y equipos directivos en estrategia, desarrollo organizacional y crecimiento, con proyectos propios enfocados en negocios con propósito.",
  },
  {
    period: "Trayectoria",
    role: "Roles de dirección y consultoría",
    org: "Sector empresarial",
    description:
      "Más de una década en posiciones de liderazgo y consultoría, combinando gestión de negocio, desarrollo de equipos y proyectos de transformación.",
  },
  {
    period: "Formación",
    role: "Desarrollo continuo",
    org: "Consultoría, liderazgo y desarrollo personal",
    description:
      "Formación constante en estrategia empresarial, coaching y desarrollo organizacional, aplicada directamente a cada proyecto con clientes.",
  },
];

export function ExperienceTimeline() {
  return (
    <section id="trayectoria" className="mx-auto max-w-3xl px-6 py-28 sm:py-36">
      <RevealOnScroll className="mb-14 text-center">
        <span className="text-xs tracking-[0.2em] text-[var(--accent)] uppercase">
          Trayectoria
        </span>
        <h2 className="mt-4 text-balance font-[family-name:var(--font-display)] text-3xl font-light sm:text-4xl">
          Un recorrido construido paso a paso
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-sm text-[var(--muted)]">
          Resumen de mi trayectoria profesional. Para el detalle completo de
          cargos y fechas, la mejor fuente es mi perfil de LinkedIn.
        </p>
      </RevealOnScroll>

      <div className="relative border-l border-[var(--border)] pl-8">
        {milestones.map((m, i) => (
          <RevealOnScroll key={m.role} delay={i * 0.1} className="relative mb-12 last:mb-0">
            <span className="absolute top-1 -left-[41px] flex h-6 w-6 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--surface)]">
              <Briefcase size={12} className="text-[var(--accent)]" />
            </span>
            <span className="text-xs tracking-wide text-[var(--accent-2)] uppercase">
              {m.period}
            </span>
            <h3 className="mt-1 text-lg font-medium">{m.role}</h3>
            <p className="text-sm text-[var(--muted)]">{m.org}</p>
            <p className="mt-2 text-sm text-[var(--muted)]">{m.description}</p>
          </RevealOnScroll>
        ))}
      </div>

      <RevealOnScroll className="mt-4 text-center">
        <a
          href="https://www.linkedin.com/in/fransequeiro/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm font-medium text-[var(--accent)] underline underline-offset-4 hover:opacity-80"
        >
          Ver perfil completo en LinkedIn →
        </a>
      </RevealOnScroll>
    </section>
  );
}
