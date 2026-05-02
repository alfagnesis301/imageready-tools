import ContactForm from "@/components/ContactForm";
import { CONTACT_EMAIL } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contacto",
  description:
    "Contacta con PublishPixel para informar errores, sugerir mejoras o hacer preguntas de privacidad.",
  path: "/es/contact",
  locale: "es"
});

export default function SpanishContactPage() {
  return (
    <section className="shell grid gap-8 py-12 lg:grid-cols-[0.8fr_1.2fr]">
      <div>
        <p className="label">Contacto</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-normal text-slate-950 dark:text-white">
          Contactar con PublishPixel
        </h1>
        <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-400">
          Comparte comentarios, informa de un error o haz una pregunta sobre privacidad. Los
          mensajes se gestionan mediante Netlify Forms y pueden reenviarse al buzón del sitio.
        </p>
        <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
          No envíes archivos confidenciales ni imágenes privadas a través del formulario. Para
          consultas de privacidad, escribe a hello@publishpixel.net.
        </p>
        <p className="mt-4 text-sm font-semibold text-slate-700 dark:text-slate-300">
          Email:{" "}
          <a className="text-blue-700 hover:underline dark:text-blue-300" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
        </p>
      </div>
      <ContactForm />
    </section>
  );
}
