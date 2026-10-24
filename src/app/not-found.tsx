import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { AnimatedBackground } from "@/components/AnimatedBackground";

export const metadata: Metadata = {
  title: "Página no encontrada — Fran Sequeiro",
};

export default function NotFound() {
  return (
    <>
      <AnimatedBackground />
      <Navbar />
      <main>
        <section className="relative flex min-h-screen flex-col items-center justify-center px-6 pt-24 text-center">
          <span className="mb-6 rounded-full border border-[var(--border)] bg-[var(--surface)]/60 px-4 py-1.5 text-xs text-[var(--muted)] backdrop-blur-sm">
            Error 404
          </span>

          <h1 className="text-balance font-[family-name:var(--font-display)] text-4xl leading-[1.08] font-light tracking-tight sm:text-6xl md:text-7xl">
            Esta página
            <br />
            <span className="italic text-[var(--accent)]">no llegó a aprobarse</span>
          </h1>

          <p className="mt-6 max-w-xl text-balance text-base text-[var(--muted)] sm:text-lg">
            El enlace que has seguido no lleva a ningún sitio. Ha podido
            cambiar de dirección o directamente ya no existe. Nada grave,
            volvamos al proyecto principal.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
            <Link
              href="/"
              className="rounded-full bg-[var(--foreground)] px-7 py-3 text-sm font-medium text-[var(--background)] transition-transform hover:scale-[1.03] active:scale-[0.98]"
            >
              Volver al inicio
            </Link>
            <Link
              href="/#contacto"
              className="flex items-center gap-2 rounded-full border border-[var(--border)] px-6 py-3 text-sm font-medium transition-colors hover:bg-[var(--surface-2)]"
            >
              Escríbeme
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
