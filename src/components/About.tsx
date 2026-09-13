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
          Creo que los negocios más sólidos nacen de historias personales
          honestas, no de plantillas de consultoría.
        </h2>
      </RevealOnScroll>

      <RevealOnScroll delay={0.2} className="mt-8 space-y-5 text-[var(--muted)]">
        <p>
          Llevo años acompañando a fundadores, equipos directivos y
          organizaciones que quieren crecer sin perder aquello que los hace
          únicos. Mi trabajo combina el rigor de la consultoría estratégica
          con una mirada muy humana: entender primero a las personas, para
          después diseñar el negocio a su medida.
        </p>
        <p>
          Me defino como <em>dreams engineer</em>: alguien que toma la
          intuición, el propósito y las ganas de un equipo, y las convierte en
          estructura, procesos y decisiones concretas. Y como{" "}
          <em>smile hunter</em>: porque para mí el éxito de un proyecto se mide
          también en cuántas sonrisas honestas deja por el camino, en el
          equipo y en los clientes.
        </p>
        <p>
          Cada proyecto empieza con la misma pregunta: ¿qué historia queremos
          construir juntos? A partir de ahí, diseño, mido y ajusto, siempre
          con los pies en la realidad del negocio.
        </p>
      </RevealOnScroll>
    </section>
  );
}
