import Link from "next/link";
import AltTextDraftChecker from "@/components/AltTextDraftChecker";
import FAQ from "@/components/FAQ";
import { createPageMetadata, faqJsonLd } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Revisor de texto alternativo para imágenes",
  description:
    "Revisa la estructura de un borrador de texto alternativo para detectar longitud, claridad y problemas comunes antes de publicar.",
  path: "/es/image-alt-text-checker",
  locale: "es"
});

const faqs = [
  {
    question: "¿Esta herramienta inspecciona el contenido de la imagen?",
    answer:
      "No. Revisa la estructura del texto que escribes y no inventa descripciones visuales."
  },
  {
    question: "¿Qué longitud debería tener el texto alternativo?",
    answer:
      "Debe ser lo bastante claro para explicar el contexto útil de la imagen, pero lo bastante breve para seguir siendo legible."
  },
  {
    question: "¿Las imágenes decorativas necesitan texto alternativo?",
    answer:
      "Las imágenes decorativas normalmente necesitan alt vacío en el HTML final, no una descripción forzada."
  },
  {
    question: "¿El texto alternativo ayuda al SEO?",
    answer:
      "Un texto alternativo claro puede ayudar a entender la imagen, pero debe escribirse primero para usuarios y accesibilidad."
  }
];

export default function SpanishImageAltTextCheckerPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd(faqs)) }} />
      <main className="shell py-12">
        <div className="max-w-4xl">
          <p className="label">Herramienta de accesibilidad</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-normal text-slate-950 sm:text-5xl dark:text-white">
            Revisor de texto alternativo para imágenes
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
            Revisa la estructura de un borrador de texto alternativo antes de publicar. Esta
            herramienta no inspecciona el contenido de la imagen ni inventa descripciones. Ayuda a
            comprobar longitud, claridad y problemas comunes para que puedas escribir una descripción
            más útil y humana.
          </p>
        </div>

        <AltTextDraftChecker />

        <section className="mt-12 grid gap-6 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <h2 className="text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">
              Cómo usar el texto alternativo de forma responsable
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              El texto alternativo debe explicar la información visual útil dentro del contexto de la
              página. Una imagen de producto, un gráfico, un retrato, una captura de pantalla y un
              fondo decorativo necesitan tratamientos distintos. Evita rellenar palabras clave,
              frases vagas y detalles inventados.
            </p>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              Un buen flujo consiste en redactar el alt text mientras preparas la imagen. Así puedes
              revisar nombre de archivo, dimensiones, formato y plan de accesibilidad antes de que la
              imagen llegue al CMS.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-xl font-extrabold text-slate-950 dark:text-white">
              Checklist de texto alternativo
            </h2>
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
              <li>Describe el sujeto visible que aporta información.</li>
              <li>Incluye el contexto de la página cuando sea importante.</li>
              <li>Evita aperturas genéricas como “imagen de”.</li>
              <li>No inventes detalles que no puedas verificar.</li>
              <li>Usa alt vacío para imágenes decorativas en el HTML final.</li>
            </ul>
          </div>
        </section>

        <section className="mt-12">
          <FAQ items={faqs} />
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/es/guides/image-alt-text" className="button-primary">
              Leer la guía de alt text
            </Link>
            <Link href="/es/smart-image-publish-check" className="button-secondary">
              Ejecutar revisión completa
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
