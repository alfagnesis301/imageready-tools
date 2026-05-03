import ContactForm from "@/components/ContactForm";
import { CONTACT_EMAIL } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contacto",
  description:
    "Contacta con PublishPixel — comparte comentarios, informa un error o pregunta sobre privacidad.",
  path: "/es/contact",
  locale: "es"
});

export default function SpanishContactPage() {
  return (
    <section className="shell py-12">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <article className="legal-doc">
          <p className="label">Contacto</p>
          <h1>Contactar con PublishPixel</h1>
          <p>
            Leemos todos los mensajes. Ya sea para informar un error, solicitar una función,
            hacer una pregunta de privacidad o compartir comentarios editoriales sobre una de
            nuestras guías, esta es la página correcta.
          </p>

          <h2>Email</h2>
          <p>
            La forma más rápida de contactarnos es por email en{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. Intentamos responder en
            un plazo de 3 días hábiles. Para problemas urgentes de privacidad o seguridad,
            añade <strong>[Privacidad]</strong> o <strong>[Seguridad]</strong> en el asunto.
          </p>

          <h2>Lo que puedes escribirnos</h2>
          <ul>
            <li>
              <strong>Errores</strong> — si algo no funciona como se describe en la herramienta
              o una guía.
            </li>
            <li>
              <strong>Solicitudes de funciones</strong> — nuevos ajustes, nuevos formatos de
              exportación, nuevas guías.
            </li>
            <li>
              <strong>Comentarios editoriales</strong> — correcciones, aclaraciones o
              actualizaciones para cualquier guía publicada.
            </li>
            <li>
              <strong>Preguntas de privacidad y datos</strong> — cómo se gestionan los datos,
              solicitudes bajo GDPR o CCPA.
            </li>
            <li>
              <strong>Prensa, colaboraciones y publicidad</strong> — propuestas de colaboración
              o consultas de medios.
            </li>
          </ul>

          <h2>Lo que no podemos ayudarte</h2>
          <ul>
            <li>
              Revisar o aprobar imágenes para plataformas específicas — solo la propia plataforma
              puede hacerlo.
            </li>
            <li>
              Recuperar imágenes o archivos perdidos. PublishPixel nunca almacena tus imágenes en
              un servidor.
            </li>
            <li>
              Consultoría SEO ni garantías de posicionamiento. Nuestras guías son educativas, no
              asesoramiento personalizado.
            </li>
          </ul>

          <h2>Operador</h2>
          <address>
            Ricardo Diaz
            <br />
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            <br />
            Reino Unido
          </address>
        </article>

        <div>
          <p className="label mb-4">Enviar un mensaje</p>
          <p className="mb-5 text-sm leading-7 text-slate-600 dark:text-slate-400">
            Los mensajes enviados a través del formulario se gestionan mediante Netlify Forms y
            se reenvían a nuestra bandeja de entrada. Por favor, no envíes imágenes confidenciales
            ni archivos privados a través de este formulario.
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
