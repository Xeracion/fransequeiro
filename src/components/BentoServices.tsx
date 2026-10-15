"use client";

import { motion } from "framer-motion";
import {
  Lightbulb,
  ClipboardCheck,
  Users,
  Receipt,
  Plane,
  Megaphone,
  LineChart,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { RevealOnScroll } from "./RevealOnScroll";

const preAward = {
  icon: Lightbulb,
  title: "¿Quieres solicitar financiación europea y no sabes cómo empezar?",
  description:
    "Yo te ayudo. Busco la convocatoria adecuada para tu idea (Erasmus+, Interreg, Creative Europe, LIFE), diseño la propuesta y preparo la solicitud para que llegue con todas las de ganar.",
};

const services = [
  {
    icon: ClipboardCheck,
    title: "Gestión integral del proyecto",
    description:
      "Desde el kick-off hasta el informe final. Plazos, entregables, work packages. Todo en su sitio, siempre.",
    className: "md:col-span-2",
  },
  {
    icon: Users,
    title: "Coordinación de socios",
    description:
      "Varios países, un solo ritmo. Me encargo de que todos remen a la vez.",
    className: "",
  },
  {
    icon: Receipt,
    title: "Justificación económica",
    description:
      "Informes a la agencia nacional o ejecutiva, en su formato exacto. Sin sustos en la auditoría.",
    className: "",
  },
  {
    icon: Plane,
    title: "Movilidad y logística",
    description:
      "Intercambios, formaciones, encuentros transnacionales. La parte que falla si nadie la gestiona de verdad.",
    className: "md:col-span-2",
  },
  {
    icon: Megaphone,
    title: "Comunicación y visibilidad",
    description:
      "Lo que pide la convocatoria sobre difusión, cumplido sin dolores de cabeza.",
    className: "",
  },
  {
    icon: LineChart,
    title: "Indicadores e impacto",
    description:
      "Mido lo que el proyecto promete desde el principio, para poder demostrarlo al final.",
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
          Antes y después de la aprobación
        </h2>
      </RevealOnScroll>

      <RevealOnScroll className="mb-6">
        <p className="text-sm font-medium text-[var(--muted)]">
          Aún no tienes financiación:
        </p>
      </RevealOnScroll>

      <RevealOnScroll className="mb-4">
        <motion.div
          whileHover={{ y: -4 }}
          transition={{ duration: 0.25, ease: "easeOut" }}
          className="group relative overflow-hidden rounded-2xl border border-[var(--accent)]/30 bg-[var(--surface)] p-7"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              background:
                "radial-gradient(400px circle at var(--x, 50%) var(--y, 50%), color-mix(in srgb, var(--accent) 12%, transparent), transparent 70%)",
            }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
              e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
            }}
          />
          <preAward.icon size={22} className="relative mb-5 text-[var(--accent)]" />
          <h3 className="relative mb-2 text-lg font-medium">{preAward.title}</h3>
          <p className="relative text-sm text-[var(--muted)]">{preAward.description}</p>
        </motion.div>
      </RevealOnScroll>

      <RevealOnScroll className="mb-6 mt-10">
        <p className="text-sm font-medium text-[var(--muted)]">
          Ya tienes el proyecto aprobado:
        </p>
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
