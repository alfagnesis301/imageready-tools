import SpanishToolPage from "@/components/SpanishToolPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Revisor de imágenes Open Graph",
  description:
    "Comprueba si una imagen Open Graph tiene dimensiones, proporción, peso y formato adecuados para vistas previas y tarjetas sociales.",
  path: "/es/open-graph-image-checker",
  locale: "es"
});

export default function SpanishOpenGraphCheckerPage() {
  return (
    <SpanishToolPage
      eyebrow="Herramienta Open Graph"
      title="Revisor de imágenes Open Graph"
      description="Revisa si tu imagen encaja con vistas previas de enlaces, tarjetas sociales y páginas de contenido compartido."
      path="/es/open-graph-image-checker"
      preset="open-graph"
      toolDescription="Sube una imagen y compárala con un objetivo práctico Open Graph antes de publicar."
      sections={[
        {
          title: "Objetivo común",
          body: "Un tamaño práctico habitual es 1200 x 630 px, con una proporción cercana a 1.91:1."
        },
        {
          title: "Área segura",
          body: "Mantén rostros, productos, logos y texto lejos de los bordes para evitar recortes inesperados."
        },
        {
          title: "Peso y formato",
          body: "Usa JPG, PNG o WebP según el contenido, y comprime sin perder legibilidad en detalles importantes."
        }
      ]}
      checklist={[
        "Prepara una imagen horizontal con foco claro en el centro.",
        "Comprueba que el texto importante siga siendo legible en una vista previa pequeña.",
        "Mantén el archivo comprimido sin degradar bordes, caras o producto.",
        "Verifica el recorte en la página donde se compartirá el enlace."
      ]}
      commonMistakes={[
        "Usar una imagen vertical que obliga a recortes impredecibles en tarjetas de enlace.",
        "Colocar logos o texto justo en los bordes.",
        "Reutilizar una captura pesada sin exportar una versión optimizada.",
        "Confiar solo en la imagen sin revisar título y descripción de la página."
      ]}
      relatedLinks={[
        {
          href: "/es/guides/open-graph-image-best-practices",
          label: "Buenas prácticas para imágenes Open Graph",
          description: "Aprende cómo preparar una imagen de vista previa más clara para enlaces compartidos."
        },
        {
          href: "/es/guides/image-size-for-web",
          label: "Tamaño de imagen para web",
          description: "Elige dimensiones prácticas para que las imágenes se vean nítidas sin cargar de más."
        },
        {
          href: "/es/guides/website-image-performance-checklist",
          label: "Checklist de rendimiento de imágenes web",
          description: "Revisa peso, formato y entrega antes de publicar páginas con imágenes."
        }
      ]}
      faqs={[
        {
          question: "¿Qué tamaño debería usar para una imagen Open Graph?",
          answer: "Un punto de partida común es 1200 x 630 px con proporción cercana a 1.91:1, aunque conviene revisar el resultado en el contexto real de la página."
        },
        {
          question: "¿Puedo usar una imagen cuadrada como Open Graph?",
          answer: "Puede funcionar en algunos servicios, pero una imagen horizontal suele dar una vista previa más predecible en tarjetas de enlace."
        },
        {
          question: "¿La herramienta valida requisitos oficiales?",
          answer: "No. Es una revisión práctica en el navegador. Para campañas críticas, contrasta siempre con la documentación de la plataforma."
        },
        {
          question: "¿Debo comprimir la imagen Open Graph?",
          answer: "Sí, siempre que la compresión mantenga legibles texto, producto y detalles principales."
        }
      ]}
    />
  );
}
