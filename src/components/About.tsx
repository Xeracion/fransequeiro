import { RevealOnScroll } from "./RevealOnScroll";

export function About() {
  return (
    <section id="sobre-mi" className="mx-auto max-w-4xl px-6 py-28 sm:py-36">
      <RevealOnScroll>
        <span className="text-xs tracking-[0.2em] text-[var(--accent)] uppercase">
          Sobre mí
        </span>
      </RevealOnScroll>

      <RevealOnScroll delay={0.1} className="mt-6">
        <h2 className="text-balance font-[family-name:var(--font-display)] text-2xl leading-snug font-light sm:text-3xl md:text-4xl">
          Llevo diez años juntando a gente de países distintos. Para que
          hagan cosas que de verdad importan.
        </h2>
      </RevealOnScroll>

      <RevealOnScroll delay={0.2} className="mt-8 space-y-5 text-[var(--muted)]">
        <p>
          A esto se le llama gestión de proyectos europeos. Yo lo llamo
          diseñar experiencias que cambian la forma de ver el mundo. Más de
          15 proyectos internacionales. Medio ambiente, liderazgo
          comunitario, oratoria, storytelling, migración, activismo juvenil.
        </p>
        <p>
          Trabajo desde Ferrol, en el borde atlántico de Galicia. Sin oficina
          en ninguna capital dirijo{" "}
          <strong className="text-[var(--foreground)]">Xeración</strong>, y
          cada proyecto demuestra lo mismo: Europa también se mueve desde
          aquí. Educación no formal, comunicación intercultural y mucha
          logística creativa. Así de simple.
        </p>
        <p>
          Me llamo a mí mismo <em>dreams engineer</em>: cojo la intuición, el
          propósito y las ganas de un equipo, y las convierto en proyectos
          reales. Y <em>smile hunter</em>, porque un proyecto solo funciona
          si deja sonrisas de verdad por el camino. ¿Crees que lo local y lo
          internacional pueden ir de la mano? Hablemos.
        </p>
      </RevealOnScroll>
    </section>
  );
}
