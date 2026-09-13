"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send } from "lucide-react";
import { LinkedinIcon } from "./icons/LinkedinIcon";
import { RevealOnScroll } from "./RevealOnScroll";

type Status = "idle" | "sending" | "sent" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(data)),
      });
      if (!res.ok) throw new Error("request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  }

  return (
    <section id="contacto" className="mx-auto max-w-3xl px-6 py-28 sm:py-36">
      <RevealOnScroll className="mb-12 text-center">
        <span className="text-xs tracking-[0.2em] text-[var(--accent)] uppercase">
          Contacto
        </span>
        <h2 className="mt-4 text-balance font-[family-name:var(--font-display)] text-3xl font-light sm:text-4xl">
          Hablemos de tu próximo proyecto
        </h2>
        <p className="mx-auto mt-4 max-w-md text-sm text-[var(--muted)]">
          Cuéntame en qué estás pensando y te respondo personalmente en menos
          de 48 horas.
        </p>
      </RevealOnScroll>

      <RevealOnScroll delay={0.1}>
        <form
          onSubmit={handleSubmit}
          className="rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-6 sm:p-8"
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label htmlFor="name" className="mb-1.5 block text-xs text-[var(--muted)]">
                Nombre
              </label>
              <input
                id="name"
                name="name"
                required
                className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface-2)] px-4 py-2.5 text-sm outline-none transition-colors focus:border-[var(--accent)]"
                placeholder="Tu nombre"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1.5 block text-xs text-[var(--muted)]">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full rounded-lg border border-[var(--border)] bg-[var(--surface-2)] px-4 py-2.5 text-sm outline-none transition-colors focus:border-[var(--accent)]"
                placeholder="tu@email.com"
              />
            </div>
          </div>

          <div className="mt-5">
            <label htmlFor="message" className="mb-1.5 block text-xs text-[var(--muted)]">
              Mensaje
            </label>
            <textarea
              id="message"
              name="message"
              required
              rows={4}
              className="w-full resize-none rounded-lg border border-[var(--border)] bg-[var(--surface-2)] px-4 py-2.5 text-sm outline-none transition-colors focus:border-[var(--accent)]"
              placeholder="Cuéntame sobre tu proyecto..."
            />
          </div>

          <div className="mt-6 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <div className="flex items-center gap-4">
              <a
                href="mailto:hola@fransequeiro.com"
                className="flex items-center gap-2 text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              >
                <Mail size={15} />
                hola@fransequeiro.com
              </a>
              <a
                href="https://www.linkedin.com/in/fransequeiro/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
              >
                <LinkedinIcon size={15} />
                LinkedIn
              </a>
            </div>

            <motion.button
              whileTap={{ scale: 0.96 }}
              type="submit"
              disabled={status === "sending"}
              className="flex items-center gap-2 rounded-full bg-[var(--foreground)] px-6 py-2.5 text-sm font-medium text-[var(--background)] transition-opacity disabled:opacity-60"
            >
              <Send size={14} />
              {status === "sending" ? "Enviando..." : "Enviar mensaje"}
            </motion.button>
          </div>

          {status === "sent" && (
            <p className="mt-4 text-center text-sm text-[var(--accent)]">
              Gracias, tu mensaje ha sido enviado. Te responderé pronto.
            </p>
          )}
          {status === "error" && (
            <p className="mt-4 text-center text-sm text-red-500">
              Algo ha ido mal. Prueba de nuevo o escríbeme directamente por
              email.
            </p>
          )}
        </form>
      </RevealOnScroll>
    </section>
  );
}
