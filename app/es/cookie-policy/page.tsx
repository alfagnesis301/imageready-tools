import { CONTACT_EMAIL } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Política de cookies",
  description:
    "Política de cookies de PublishPixel, incluyendo cookies publicitarias de Google AdSense.",
  path: "/es/cookie-policy",
  locale: "es"
});

export default function SpanishCookiePolicyPage() {
  return (
    <section className="shell py-12">
      <article className="legal-doc">
        <p className="label">Legal</p>
        <h1>Política de cookies</h1>
        <p>Última actualización: 3 de mayo de 2026</p>

        <h2>Almacenamiento esencial</h2>
        <p>
          PublishPixel usa localStorage para preferencias esenciales como tema, estado de
          consentimiento y último ajuste predefinido seleccionado. Esto hace la herramienta más
          cómoda sin guardar imágenes.
        </p>

        <h2>Cookies publicitarias</h2>
        <p>
          Este sitio usa Google AdSense para mostrar publicidad. Si aceptas las cookies
          publicitarias en nuestro banner de consentimiento, pueden establecerse las siguientes
          cookies e identificadores:
        </p>
        <table>
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Proveedor</th>
              <th>Finalidad</th>
              <th>Duración</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>__gads</td>
              <td>Google</td>
              <td>Usada por AdSense para mostrar y medir anuncios.</td>
              <td>Hasta 13 meses</td>
            </tr>
            <tr>
              <td>__gpi</td>
              <td>Google</td>
              <td>Usada por AdSense para personalización y control de frecuencia de anuncios.</td>
              <td>Hasta 13 meses</td>
            </tr>
            <tr>
              <td>IDE / NID</td>
              <td>Google (DoubleClick)</td>
              <td>Medición de anuncios y personalización básica.</td>
              <td>Hasta 13 meses</td>
            </tr>
          </tbody>
        </table>
        <p>
          Puedes gestionar o desactivar las cookies publicitarias desde la configuración de tu
          navegador, nuestro banner de cookies o{" "}
          <a
            href="https://www.google.com/settings/ads"
            target="_blank"
            rel="noopener noreferrer"
          >
            Configuración de anuncios de Google
          </a>
          .
        </p>

        <h2>Consentimiento publicitario</h2>
        <p>
          Para usuarios del EEE, el Reino Unido y Suiza, las cookies publicitarias solo se
          establecen tras obtener tu consentimiento a través de nuestro banner de cookies.
          Aspiramos a usar una plataforma de gestión de consentimiento certificada por Google
          integrada con el IAB Transparency and Consent Framework donde sea obligatorio.
        </p>

        <h2>Cookies de analítica</h2>
        <p>
          La analítica es opcional. Si se añade, el sitio respetará las opciones de consentimiento
          antes de cargar scripts de analítica no esenciales donde sea obligatorio.
        </p>

        <h2>Gestionar consentimiento</h2>
        <p>
          El banner de cookies permite aceptar todo, rechazar cookies no esenciales o gestionar
          preferencias individualmente. También puedes borrar cookies y localStorage desde la
          configuración de tu navegador en cualquier momento.
        </p>

        <h2>Contacto</h2>
        <p>
          Las preguntas sobre cookies pueden enviarse a{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </article>
    </section>
  );
}
