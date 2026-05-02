import SpanishToolPage from "@/components/SpanishToolPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Revisor de imágenes para Instagram",
  description:
    "Comprueba tamaños y proporciones para publicaciones, historias y formatos comunes de Instagram antes de publicar.",
  path: "/es/instagram-image-checker",
  locale: "es"
});

export default function SpanishInstagramImageCheckerPage() {
  return (
    <SpanishToolPage
      eyebrow="Herramienta para Instagram"
      title="Revisor de imágenes para Instagram"
      description="Revisa si una imagen encaja con formatos comunes de Instagram como publicación cuadrada, vertical, horizontal o historia."
      preset="instagram-post"
      toolDescription="Sube una imagen y elige el ajuste predefinido de Instagram para revisar proporción, tamaño, peso y formato."
      sections={[
        {
          title: "Feed cuadrado o vertical",
          body: "Las publicaciones cuadradas y 4:5 funcionan bien para composiciones centradas y visuales de producto."
        },
        {
          title: "Historias",
          body: "Las historias usan un marco vertical 9:16; deja espacio seguro para elementos de interfaz arriba y abajo."
        },
        {
          title: "Exportaciones separadas",
          body: "Para campañas importantes, crea copias distintas para feed, historia, portada y otros canales."
        }
      ]}
    />
  );
}
