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
          Más de 15 proyectos europeos gestionados de principio a fin. Y
          ninguno se quedó en un cajón.
        </h2>
      </RevealOnScroll>

      <RevealOnScroll delay={0.2} className="mt-8 space-y-5 text-[var(--muted)]">
        <p>
          Ganar la financiación es solo el principio. Después vienen los
          socios en tres países distintos, las movilidades que hay que
          cuadrar, los informes que la agencia espera en su formato exacto y
          la justificación económica que no admite errores. Ahí es donde
          entro yo.
        </p>
        <p>
          Trabajo desde Ferrol, en el borde atlántico de Galicia, dirigiendo{" "}
          <strong className="text-[var(--foreground)]">Xeración</strong>.
          Erasmus+, Interreg, Creative Europe, LIFE: distintos programas,
          misma lógica de gestión. Socios, plazos, indicadores,
          comunicación, cierre. Lo he hecho una y otra vez, y sé dónde se
          atascan los proyectos antes de que se atasquen.
        </p>
        <p>
          Me llamo a mí mismo <em>dreams engineer</em>: cojo un proyecto
          aprobado sobre el papel y lo convierto en algo que pasa de verdad,
          con cada socio remando en la misma dirección. ¿Tienes un proyecto
          europeo aprobado y necesitas quien lo lleve? Hablemos.
        </p>
      </RevealOnScroll>
    </section>
  );
}
