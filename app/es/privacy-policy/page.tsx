import { CONTACT_EMAIL } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Política de privacidad",
  description:
    "Política de privacidad de PublishPixel — análisis local de imágenes, Google AdSense, derechos GDPR y CCPA.",
  path: "/es/privacy-policy",
  locale: "es",
  noIndex: true
});

export default function SpanishPrivacyPolicyPage() {
  return (
    <section className="shell py-12">
      <article className="legal-doc">
        <p className="label">Legal</p>
        <h1>Política de privacidad</h1>
        <p>Última actualización: 3 de mayo de 2026</p>

        <h2>Qué procesa PublishPixel</h2>
        <p>
          PublishPixel procesa localmente en tu navegador los archivos de imagen que eliges para
          calcular dimensiones, proporción, tamaño del archivo, formato, compresión estimada y
          recomendaciones de publicación.
        </p>

        <h2>Las imágenes se analizan localmente</h2>
        <p>
          La aplicación no sube tus imágenes a un servidor para analizarlas. No almacena tus
          imágenes, no conserva copias de imágenes exportadas y no envía el contenido de la imagen
          a servicios externos de análisis visual.
        </p>

        <h2>LocalStorage</h2>
        <p>
          La aplicación puede usar localStorage para preferencias como tema, opciones de
          consentimiento y último ajuste predefinido seleccionado. localStorage no se usa para
          guardar imágenes.
        </p>

        <h2>Analítica</h2>
        <p>
          La analítica no es necesaria para que la herramienta funcione. Si se añade en el futuro,
          se cargará únicamente según las opciones de consentimiento presentadas a los usuarios
          donde sea obligatorio.
        </p>

        <h2>Publicidad y Google AdSense</h2>
        <p>
          Este sitio utiliza Google AdSense para mostrar publicidad. Cuando AdSense está activo,
          Google y sus socios pueden usar cookies y tecnologías similares para:
        </p>
        <ul>
          <li>Mostrar anuncios basados en tus visitas anteriores a este sitio u otros sitios.</li>
          <li>Medir el rendimiento de los anuncios y detectar tráfico no válido.</li>
          <li>Habilitar personalización básica según tu configuración de consentimiento.</li>
        </ul>
        <p>
          Puedes excluirte de la publicidad personalizada en cualquier momento visitando{" "}
          <a
            href="https://www.google.com/settings/ads"
            target="_blank"
            rel="noopener noreferrer"
          >
            Configuración de anuncios de Google
          </a>
          {" "}o, para redes participantes,{" "}
          <a
            href="https://www.aboutads.info/choices/"
            target="_blank"
            rel="noopener noreferrer"
          >
            aboutads.info/choices
          </a>
          {" "}y{" "}
          <a
            href="https://www.youronlinechoices.eu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            youronlinechoices.eu
          </a>
          .
        </p>
        <p>
          El uso de cookies publicitarias por parte de Google se describe en{" "}
          <a
            href="https://policies.google.com/technologies/ads"
            target="_blank"
            rel="noopener noreferrer"
          >
            la Política de privacidad y términos publicitarios de Google
          </a>
          . Cuando lo exija la ley, las cookies publicitarias solo se establecen tras obtener tu
          consentimiento a través de nuestro banner de cookies.
        </p>

        <h2>Terceros</h2>
        <ul>
          <li><strong>Netlify</strong> — alojamiento y gestión de formularios.</li>
          <li><strong>Google AdSense</strong> — publicidad (activo en este sitio).</li>
          <li>
            <strong>Analítica</strong> — medición anónima del tráfico (solo si está activada y
            solo tras consentimiento donde sea obligatorio).
          </li>
        </ul>

        <h2>Tus derechos (GDPR / CCPA)</h2>
        <p>
          Si te encuentras en el Espacio Económico Europeo, el Reino Unido, Suiza o California,
          tienes derecho a acceder, corregir, eliminar o restringir el tratamiento de tus datos
          personales, y a oponerte al tratamiento o retirar el consentimiento en cualquier momento.
          También puedes borrar localStorage y cookies desde la configuración de tu navegador.
          Envía cualquier solicitud de datos a{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>

        <h2>Contacto</h2>
        <p>
          Las preguntas de privacidad pueden enviarse a{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </article>
    </section>
  );
}
