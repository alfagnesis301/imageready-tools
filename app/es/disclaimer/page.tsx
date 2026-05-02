import { CONTACT_EMAIL } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Aviso legal",
  description:
    "Aviso legal sobre recomendaciones, requisitos de plataformas, SEO y estimaciones técnicas de PublishPixel.",
  path: "/es/disclaimer",
  locale: "es"
});

export default function SpanishDisclaimerPage() {
  return (
    <section className="shell py-12">
      <article className="legal-doc">
        <p className="label">Legal</p>
        <h1>Aviso legal</h1>
        <p>Última actualización: 30 de abril de 2026</p>
        <h2>Recomendaciones estimadas</h2>
        <p>
          PublishPixel ofrece recomendaciones estimadas basadas en información de imagen que el
          navegador puede leer y guías de publicación comúnmente utilizadas. No realiza una revisión
          creativa, legal o específica de cada plataforma.
        </p>
        <h2>Los requisitos de plataformas pueden cambiar</h2>
        <p>
          Redes sociales, buscadores, plataformas de vídeo, marketplaces y clientes de email pueden
          cambiar sus requisitos o comportamiento de renderizado. Verifica los requisitos oficiales
          cuando el resultado sea importante para una campaña, subida o flujo de negocio.
        </p>
        <h2>Sin resultados garantizados</h2>
        <p>
          La herramienta no garantiza aprobación, posicionamiento SEO, mejoras de velocidad,
          renderizado de tarjetas sociales, elegibilidad publicitaria, calidad visual ni rendimiento
          comercial.
        </p>
        <h2>Contacto</h2>
        <p>
          Las preguntas pueden enviarse a{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </article>
    </section>
  );
}
