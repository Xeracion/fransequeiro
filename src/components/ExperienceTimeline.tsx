"use client";

import { Briefcase } from "lucide-react";
import { RevealOnScroll } from "./RevealOnScroll";

const milestones = [
  {
    period: "Sept. 2013 — Presente",
    role: "CEO",
    org: "Xeración · Ferrol",
    description:
      "Detectar una idea con potencial de mejorar el entorno, validarla con el equipo, adaptarla a la realidad local, tejer las alianzas y recursos necesarios, y ponerla en práctica. Más de 15 proyectos europeos sobre medio ambiente, liderazgo comunitario, oratoria, storytelling, migración y activismo juvenil.",
  },
  {
    period: "Mar. 2015 — Jun. 2015",
    role: "Project Assistant",
    org: "EprojectConsult · Barcellona Pozzo di Gotto (Italia)",
    description: "Gestión y coordinación de proyectos europeos.",
  },
  {
    period: "Sept. 2012 — Ago. 2013",
    role: "Asistente de proyecto",
    org: "FERSO Foundation",
    description:
      "Gestor de proyectos juveniles internacionales, community manager y formador.",
  },
  {
    period: "Nov. 2010 — Sept. 2012",
    role: "Project Manager",
    org: "AEGEE",
    description:
      "Relaciones con socios extranjeros, gestión conjunta de proyectos juveniles, selección de participantes y organización logística.",
  },
  {
    period: "Sept. 2010 — Ene. 2011",
    role: "Webmaster",
    org: "Universidade da Coruña · Oficina de Relaciones Internacionales",
    description:
      "Actualización de contenidos, migración de sistemas, informes estadísticos y programación en Dreamweaver.",
  },
  {
    period: "Mar. 2007 — Jun. 2007",
    role: "Comercial",
    org: "Caixa Galicia · Delegación de Xuvia",
    description:
      "Trato con clientes, venta de productos financieros y contabilidad bancaria.",
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
          <RevealOnScroll key={`${m.role}-${m.period}`} delay={i * 0.06} className="relative mb-12 last:mb-0">
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
