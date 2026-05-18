import SpanishToolPage from "@/components/SpanishToolPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Revisor de metadatos de imágenes",
  description:
    "Revisa señales básicas de metadatos, privacidad y preparación antes de publicar fotos o imágenes online.",
  path: "/es/image-metadata-checker",
  locale: "es"
});

export default function SpanishImageMetadataCheckerPage() {
  return (
    <SpanishToolPage
      eyebrow="Herramienta de privacidad"
      title="Revisor de metadatos de imágenes"
      description="Revisa señales básicas de privacidad y metadatos antes de compartir una imagen online."
      path="/es/image-metadata-checker"
      preset="website-blog"
      toolDescription="Sube una imagen para revisar peso, formato, preparación de publicación y señales básicas de metadatos legibles por el navegador."
      sections={[
        {
          title: "Metadatos visibles para el navegador",
          body: "Algunos archivos pueden incluir EXIF con datos de cámara, fechas o señales de ubicación. El soporte depende del formato."
        },
        {
          title: "Riesgo visual",
          body: "Aunque no haya EXIF, una foto puede revelar documentos, direcciones, pantallas, reflejos o detalles privados."
        },
        {
          title: "Copia limpia",
          body: "Exporta una copia para publicar y conserva el original privado. Verifica archivos sensibles con herramientas dedicadas."
        }
      ]}
    />
  );
}
