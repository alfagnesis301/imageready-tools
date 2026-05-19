import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Acerca de",
  description:
    "Acerca de PublishPixel: quién está detrás, proceso editorial y cómo ayudamos a preparar imágenes para publicar.",
  path: "/es/about",
  locale: "es"
});

export default function SpanishAboutPage() {
  return (
    <section className="shell py-12">
      <article className="legal-doc">
        <p className="label">Acerca de</p>
        <h1>Acerca de PublishPixel</h1>
        <p>
          PublishPixel es una herramienta gratuita basada en navegador para personas que publican
          imágenes en sitios web, blogs, redes sociales, YouTube, páginas de e-commerce, emails y
          contenido enfocado en SEO. Nuestro objetivo es que la preparación de imágenes sea
          práctica, rápida y privada, sin obligar a los creadores a subir sus archivos a servidores
          desconocidos.
        </p>

        <h2>Nuestra misión</h2>
        <p>
          La mayoría de herramientas de imagen en línea se centran en una sola acción: comprimir,
          redimensionar o convertir. PublishPixel se creó para cubrir el hueco entre esas
          herramientas de acción única y el flujo de publicación real. Antes de que una imagen
          aparezca en un blog, una ficha de e-commerce, una tarjeta Open Graph o una miniatura de
          YouTube, hay que tomar muchas decisiones sobre dimensiones, peso, formato, texto
          alternativo y metadatos. Nuestra revisión inteligente de publicación de imágenes reúne todas esas decisiones en
          un solo lugar.
        </p>

        <h2>Quién está detrás de PublishPixel</h2>
        <p>
          PublishPixel está creado y mantenido por Ricardo Diaz, un desarrollador web independiente
          con experiencia en SEO técnico y publicación de contenidos. Esa experiencia práctica da
          forma a cada recomendación que ofrece la herramienta.
        </p>
        <p>
          Puedes contactar con Ricardo en{" "}
          <a href="mailto:hello@publishpixel.net">hello@publishpixel.net</a> para preguntas
          editoriales, solicitudes de colaboración o comentarios sobre la herramienta.
        </p>

        <h2>Proceso editorial y metodología</h2>
        <p>Nuestras guías y recomendaciones se basan en:</p>
        <ul>
          <li>
            Documentación pública de las principales plataformas (Google Search Central, Meta
            Business Help Center, YouTube Help, LinkedIn, Pinterest e Instagram).
          </li>
          <li>
            Estándares web y directrices de accesibilidad del W3C, WHATWG y WAI.
          </li>
          <li>Pruebas prácticas con las herramientas y formatos descritos en cada artículo.</li>
          <li>
            Heurísticas de publicación validadas en flujos reales de CMS, e-commerce y redes
            sociales.
          </li>
        </ul>
        <p>
          Cada guía se revisa antes de publicarse y se actualiza cuando cambian los requisitos de
          las plataformas. No hacemos promesas sobre posicionamiento SEO, aprobación publicitaria ni
          resultados específicos de plataforma que la herramienta no puede influir. Consulta nuestra{" "}
          <a href="/es/editorial-policy">Política editorial</a> para más detalles.
        </p>

        <h2>Privacidad desde el diseño</h2>
        <p>
          El análisis principal de la imagen ocurre completamente en tu navegador usando la File
          API, la Canvas API y la decodificación nativa de imágenes. PublishPixel no sube tus
          imágenes a un servidor, no almacena imágenes de usuarios y no rastrea quién eres. Los
          únicos datos guardados en tu navegador son tu tema, idioma, último ajuste predefinido y
          estado de consentimiento, todo almacenado localmente mediante localStorage y eliminado al
          limpiar los datos del navegador. Consulta nuestra{" "}
          <a href="/es/privacy-policy">Política de privacidad</a> para más detalles.
        </p>

        <h2>Para quién es</h2>
        <p>
          La herramienta está diseñada para bloggers, profesionales SEO, creadores de contenido,
          diseñadores, estudiantes, equipos de producto, vendedores de e-commerce y pequeñas
          empresas que necesitan una revisión rápida antes de publicar una imagen.
        </p>

        <h2>Cómo mantenemos recomendaciones responsables</h2>
        <p>
          PublishPixel no pretende que una revisión automática en navegador pueda juzgar por
          completo la calidad visual, los derechos de autor, el potencial de posicionamiento SEO o
          la aprobación final de una plataforma. La herramienta se centra en señales verificables
          desde el propio archivo y el contexto de publicación elegido: dimensiones, proporción,
          peso, formato, estructura del nombre de archivo, planificación del texto alternativo y
          opciones de exportación.
        </p>
        <p>
          Cuando importe el lanzamiento en una plataforma, una campaña de cliente, un requisito de
          accesibilidad o un contexto legal, conviene verificar siempre los requisitos oficiales
          actuales antes de publicar.
        </p>

        <h2>Qué no hace PublishPixel</h2>
        <ul>
          <li>No garantiza posicionamiento SEO ni resultados de tráfico orgánico.</li>
          <li>No verifica propiedad de derechos de autor ni licencias de imagen.</li>
          <li>No promete aprobación en plataformas sociales, buscadores o sistemas publicitarios.</li>
          <li>No reemplaza la revisión humana de contenido visual, calidad de marca o riesgo legal.</li>
          <li>No almacena, comparte ni vende tus imágenes ni tus datos.</li>
        </ul>

        <h2>Cómo se financia PublishPixel</h2>
        <p>
          PublishPixel es gratuito. Para mantenerlo gratis y seguir desarrollando nuevas
          funcionalidades, el sitio puede mostrar publicidad a través de Google AdSense y puede
          publicar enlaces de afiliado claramente etiquetados dentro de las guías. No aceptamos
          pagos para alterar recomendaciones editoriales, y las reseñas y listas de verificación se
          escriben de forma independiente a cualquier anunciante.
        </p>
      </article>
    </section>
  );
}
