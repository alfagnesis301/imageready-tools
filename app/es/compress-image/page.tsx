import CompressImageContent from "@/app/compress-image/CompressImageContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Compresor de imágenes gratis",
  description:
    "Reduce el peso de imágenes para sitios web, blogs, vistas previas y campañas con un compresor que funciona en tu navegador sin subir tus archivos.",
  path: "/es/compress-image",
  locale: "es"
});

export default function SpanishCompressImagePage() {
  return <CompressImageContent />;
}
