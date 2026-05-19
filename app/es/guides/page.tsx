import GuidesContent from "@/app/guides/GuidesContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Guías de imágenes web para SEO, redes sociales y publicación",
  description:
    "Guías prácticas para preparar imágenes más ligeras, accesibles y listas para publicar en sitios web, redes sociales, previews compartibles y flujos SEO.",
  path: "/es/guides",
  locale: "es"
});

export default function SpanishGuidesPage() {
  return <GuidesContent />;
}
