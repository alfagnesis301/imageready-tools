import { CONTACT_EMAIL } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Política de privacidad",
  description:
    "Política de privacidad de PublishPixel, incluyendo análisis local de imágenes, localStorage, consentimiento y preparación para AdSense.",
  path: "/es/privacy-policy",
  locale: "es"
});

export default function SpanishPrivacyPolicyPage() {
  return (
    <section className="shell py-12">
      <article className="legal-doc">
        <p className="label">Legal</p>
        <h1>Política de privacidad</h1>
        <p>Última actualización: 30 de abril de 2026</p>
        <h2>Qué procesa PublishPixel</h2>
        <p>
          PublishPixel procesa localmente en tu navegador los archivos de imagen que eliges para
          calcular dimensiones, proporción, tamaño del archivo, formato, compresión estimada y
          recomendaciones de publicación.
        </p>
        <h2>Las imágenes se analizan localmente</h2>
        <p>
          La aplicación no sube tus imágenes a un servidor para analizarlas. No almacena tus
          imágenes, no conserva copias de imágenes exportadas y no envía el contenido de la imagen a
          servicios externos de análisis visual.
        </p>
        <h2>LocalStorage</h2>
        <p>
          La aplicación puede usar localStorage para preferencias como tema, opciones de
          consentimiento y último preset de publicación seleccionado. localStorage no se usa para
          guardar imágenes.
        </p>
        <h2>Analítica</h2>
        <p>
          La analítica no es necesaria para que la herramienta funcione. Si se añade analítica en el
          futuro, debería cargarse según las opciones de consentimiento presentadas a los usuarios
          cuando sea obligatorio.
        </p>
        <h2>Google AdSense</h2>
        <p>
          El sitio está preparado para una futura integración con Google AdSense. Si se activa la
          publicidad, Google y sus socios pueden usar cookies, web beacons, información de dirección
          IP y tecnologías relacionadas para ofrecer, medir y personalizar anuncios de acuerdo con
          sus políticas y requisitos de consentimiento.
        </p>
        <p>
          Terceros, incluido Google, pueden usar cookies para mostrar anuncios basados en visitas
          anteriores de un usuario a este sitio web u otros sitios. El uso de cookies publicitarias
          por parte de Google permite a Google y sus socios mostrar anuncios basados en visitas a
          este sitio y/o a otros sitios de Internet. Los usuarios pueden excluirse de anuncios
          personalizados mediante la configuración de anuncios de Google u otras herramientas de
          exclusión aplicables.
        </p>
        <h2>Tus opciones y derechos</h2>
        <p>
          Puedes borrar localStorage y cookies desde la configuración de tu navegador. Según tu
          ubicación, puedes tener derechos para acceder, corregir, eliminar u oponerte a ciertos
          tratamientos de datos personales. Contáctanos para solicitudes de privacidad.
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
