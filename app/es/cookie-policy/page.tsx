import { CONTACT_EMAIL } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Política de cookies",
  description: "Política de cookies y localStorage de PublishPixel.",
  path: "/es/cookie-policy",
  locale: "es"
});

export default function SpanishCookiePolicyPage() {
  return (
    <section className="shell py-12">
      <article className="legal-doc">
        <p className="label">Legal</p>
        <h1>Política de cookies</h1>
        <p>Última actualización: 30 de abril de 2026</p>
        <h2>Almacenamiento esencial</h2>
        <p>
          PublishPixel puede usar localStorage para preferencias esenciales como tema, estado de
          consentimiento y último ajuste predefinido seleccionado. Esto hace que la herramienta sea más cómoda
          sin guardar imágenes.
        </p>
        <h2>Cookies publicitarias</h2>
        <p>
          Las cookies publicitarias no son necesarias para que la herramienta funcione. Si Google
          AdSense se activa en el futuro, se pueden usar cookies publicitarias o tecnologías
          similares de acuerdo con las políticas de Google y los requisitos de consentimiento
          aplicables.
        </p>
        <p>
          Terceros, incluido Google, pueden usar cookies para mostrar anuncios basados en visitas
          anteriores a este sitio web u otros sitios. Cuando sea necesario, PublishPixel debería usar
          una plataforma de gestión de consentimiento certificada por Google antes de cargar
          publicidad personalizada para usuarios del Reino Unido, EEE o Suiza.
        </p>
        <h2>Consentimiento publicitario</h2>
        <p>
          Si PublishPixel muestra anuncios de Google, los usuarios de regiones donde el
          consentimiento es obligatorio pueden ver un mensaje antes de usar cookies publicitarias o
          funciones de publicidad personalizada. Para usuarios del EEE, Reino Unido y Suiza,
          aspiramos a usar una CMP certificada por Google integrada con IAB Transparency and Consent
          Framework cuando sea necesario.
        </p>
        <h2>Cookies de analítica</h2>
        <p>
          La analítica es opcional. Si se añade, el sitio debería respetar las opciones de
          consentimiento antes de cargar scripts de analítica no esenciales cuando sea obligatorio.
        </p>
        <h2>Gestionar consentimiento</h2>
        <p>
          El banner de cookies permite aceptar todo, rechazar almacenamiento no esencial o gestionar
          preferencias. También puedes borrar cookies y localStorage desde la configuración de tu
          navegador.
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
