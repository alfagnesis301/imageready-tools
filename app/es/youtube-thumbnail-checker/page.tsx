import SpanishToolPage from "@/components/SpanishToolPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Revisor de miniaturas de YouTube",
  description:
    "Revisa si una miniatura de YouTube tiene proporción 16:9, dimensiones prácticas, peso adecuado y composición legible.",
  path: "/es/youtube-thumbnail-checker",
  locale: "es"
});

export default function SpanishYouTubeThumbnailCheckerPage() {
  return (
    <SpanishToolPage
      eyebrow="Herramienta para miniaturas"
      title="Revisor de miniaturas de YouTube"
      description="Comprueba una miniatura antes de subirla: tamaño, proporción, peso, formato y señales prácticas de legibilidad."
      path="/es/youtube-thumbnail-checker"
      preset="youtube-thumbnail"
      toolDescription="Sube una miniatura y revisa si encaja con un objetivo práctico de 1280 x 720 px y proporción 16:9."
      sections={[
        {
          title: "Proporción 16:9",
          body: "La miniatura suele funcionar mejor en un marco ancho 16:9, especialmente para feeds y resultados."
        },
        {
          title: "Texto legible",
          body: "Si usas texto, mantenlo grande, breve y con contraste suficiente para pantallas móviles."
        },
        {
          title: "Zona segura",
          body: "Evita colocar rostros, texto o productos clave en los bordes, donde las superposiciones pueden cubrirlos."
        }
      ]}
    />
  );
}
