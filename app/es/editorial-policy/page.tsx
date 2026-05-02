import { CONTACT_EMAIL } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Política editorial",
  description:
    "Política editorial de PublishPixel sobre guías originales, precisión, actualizaciones y correcciones.",
  path: "/es/editorial-policy",
  locale: "es"
});

export default function SpanishEditorialPolicyPage() {
  return (
    <section className="shell py-12">
      <article className="legal-doc">
        <p className="label">Confianza</p>
        <h1>Política editorial</h1>
        <p>Última actualización: 30 de abril de 2026</p>
        <p>
          PublishPixel publica orientación práctica y original sobre preparación de imágenes,
          rendimiento web, accesibilidad, privacidad y flujos de publicación. El objetivo es ayudar
          a los usuarios a tomar mejores decisiones antes de publicar imágenes.
        </p>
        <h2>Cómo creamos contenido</h2>
        <p>
          Nuestras guías están escritas para resolver problemas reales de publicación. Nos centramos
          en explicaciones claras, ejemplos prácticos y recomendaciones responsables, no en promesas
          exageradas.
        </p>
        <h2>Precisión y actualizaciones</h2>
        <p>
          Revisamos el contenido periódicamente y actualizamos las páginas cuando cambian
          herramientas, estándares o prácticas de publicación. Los requisitos de las plataformas
          pueden cambiar, por lo que las publicaciones críticas deberían verificarse también con la
          documentación oficial de cada plataforma.
        </p>
        <h2>Uso de asistencia con IA</h2>
        <p>
          Podemos usar herramientas de IA para apoyar investigación, borradores, formato o edición.
          El contenido final debe revisarse para asegurar precisión, utilidad y originalidad antes
          de publicarse.
        </p>
        <h2>Correcciones</h2>
        <p>
          Si detectas información desactualizada o incorrecta, contáctanos en{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </article>
    </section>
  );
}
