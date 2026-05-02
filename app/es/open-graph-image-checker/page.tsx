import SpanishToolPage from "@/components/SpanishToolPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Revisor de imágenes Open Graph",
  description:
    "Comprueba si una imagen Open Graph tiene dimensiones, proporción, peso y formato adecuados para previews y tarjetas sociales.",
  path: "/es/open-graph-image-checker",
  locale: "es"
});

export default function SpanishOpenGraphCheckerPage() {
  return (
    <SpanishToolPage
      eyebrow="Herramienta Open Graph"
      title="Revisor de imágenes Open Graph"
      description="Revisa si tu imagen encaja con previews de enlaces, tarjetas sociales y páginas de contenido compartido."
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
    />
  );
}
