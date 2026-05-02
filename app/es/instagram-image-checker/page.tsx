import SpanishToolPage from "@/components/SpanishToolPage";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Revisor de imágenes para Instagram",
  description:
    "Comprueba tamaños y proporciones para posts, stories y formatos comunes de Instagram antes de publicar.",
  path: "/es/instagram-image-checker",
  locale: "es"
});

export default function SpanishInstagramImageCheckerPage() {
  return (
    <SpanishToolPage
      eyebrow="Herramienta para Instagram"
      title="Revisor de imágenes para Instagram"
      description="Revisa si una imagen encaja con formatos comunes de Instagram como post cuadrado, vertical, horizontal o Story."
      preset="instagram-post"
      toolDescription="Sube una imagen y elige el preset de Instagram para revisar proporción, tamaño, peso y formato."
      sections={[
        {
          title: "Feed cuadrado o vertical",
          body: "Los posts cuadrados y 4:5 funcionan bien para composiciones centradas y visuales de producto."
        },
        {
          title: "Stories",
          body: "Las historias usan un marco vertical 9:16; deja espacio seguro para elementos de interfaz arriba y abajo."
        },
        {
          title: "Exportaciones separadas",
          body: "Para campañas importantes, crea copias distintas para feed, story, portada y otros canales."
        }
      ]}
    />
  );
}
