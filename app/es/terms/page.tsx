import { CONTACT_EMAIL } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Términos",
  description: "Términos de uso de PublishPixel.",
  path: "/es/terms",
  locale: "es",
  noIndex: true
});

export default function SpanishTermsPage() {
  return (
    <section className="shell py-12">
      <article className="legal-doc">
        <p className="label">Legal</p>
        <h1>Términos de uso</h1>
        <p>Última actualización: 30 de abril de 2026</p>
        <h2>Herramienta gratuita e informativa</h2>
        <p>
          PublishPixel se ofrece como una utilidad gratuita e informativa. Las recomendaciones son
          estimaciones y pueden no ser perfectamente precisas para todos los navegadores, formatos,
          plataformas o flujos de publicación.
        </p>
        <h2>Responsabilidad del usuario</h2>
        <p>
          Eres responsable de las imágenes que decides procesar, publicar o descargar. No uses el
          servicio con contenido ilegal o con contenido que no tienes derecho a utilizar.
        </p>
        <h2>Propiedad de las imágenes</h2>
        <p>
          Conservas cualquier derecho que ya tengas sobre tus imágenes. PublishPixel no reclama
          propiedad sobre imágenes que analizas o exportas localmente.
        </p>
        <h2>Sin garantía</h2>
        <p>
          El servicio se proporciona sin garantías. No garantiza aprobación de plataformas,
          posicionamiento SEO, aprobación publicitaria, renderizado de vistas sociales ni resultados
          de rendimiento.
        </p>
        <h2>Contacto</h2>
        <p>
          Las preguntas sobre estos términos pueden enviarse a{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </article>
    </section>
  );
}
