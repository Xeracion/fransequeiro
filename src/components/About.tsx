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
          Llevo más de una década inventando excusas para juntar a gente de
          distintos países y ponerla a hacer cosas que importan.
        </h2>
      </RevealOnScroll>

      <RevealOnScroll delay={0.2} className="mt-8 space-y-5 text-[var(--muted)]">
        <p>
          En realidad se llama gestión de proyectos europeos, pero lo que
          hago es diseñar experiencias que cambian perspectivas: más de 15
          proyectos internacionales sobre medio ambiente, liderazgo
          comunitario, oratoria, storytelling, migración y activismo juvenil.
        </p>
        <p>
          Trabajo desde Ferrol, en el borde atlántico de Galicia, dirigiendo{" "}
          <strong className="text-[var(--foreground)]">Xeración</strong>, una
          organización que demuestra que no hace falta estar en una capital
          para mover Europa. Educación no formal, comunicación intercultural
          y mucha logística creativa: eso es lo mío.
        </p>
        <p>
          Me defino como <em>dreams engineer</em>: alguien que toma la
          intuición, el propósito y las ganas de un equipo, y las convierte en
          proyectos, alianzas y resultados concretos. Y como{" "}
          <em>smile hunter</em>: porque para mí el éxito de un proyecto se
          mide también en cuántas sonrisas honestas deja por el camino. Si
          crees que lo local y lo internacional pueden ir de la mano,
          hablemos.
        </p>
      </RevealOnScroll>
    </section>
  );
}
