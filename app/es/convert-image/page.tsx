import ConvertImageContent from "@/app/convert-image/ConvertImageContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Convertidor de imágenes gratis",
  description:
    "Convierte imágenes a formatos adecuados para publicar, como WebP, JPG o PNG, sin subir el archivo a un servidor.",
  path: "/es/convert-image",
  locale: "es"
});

export default function SpanishConvertImagePage() {
  return <ConvertImageContent />;
}
