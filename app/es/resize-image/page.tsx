import ResizeImageContent from "@/app/resize-image/ResizeImageContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Redimensionador de imágenes gratis",
  description:
    "Cambia el tamaño de imágenes para sitios web, Open Graph, miniaturas de YouTube, Instagram, historias, Pinterest y encabezados de email.",
  path: "/es/resize-image",
  locale: "es"
});

export default function SpanishResizeImagePage() {
  return <ResizeImageContent />;
}
