import HomePage from "@/app/page";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Smart Image Publish Check en español",
  description:
    "Revisa dimensiones, peso, formato, proporción, nombre de archivo, texto alternativo y preparación de publicación con una herramienta privada en tu navegador.",
  path: "/es/smart-image-publish-check",
  locale: "es"
});

export default function SpanishSmartImagePublishCheckPage() {
  return <HomePage />;
}
