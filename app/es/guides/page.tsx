import GuidesContent from "@/app/guides/GuidesContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Guías para publicar imágenes online",
  description:
    "Guías prácticas para preparar imágenes antes de publicarlas, con consejos sobre rendimiento, accesibilidad, privacidad, SEO, compresión y formatos.",
  path: "/es/guides",
  locale: "es"
});

export default function SpanishGuidesPage() {
  return <GuidesContent />;
}
