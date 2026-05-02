import SocialMediaImageSizesContent from "@/app/social-media-image-sizes/SocialMediaImageSizesContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Guía de tamaños de imagen para redes sociales",
  description:
    "Usa esta guía práctica para preparar imágenes de redes sociales, vistas previas, miniaturas, productos y gráficos para email.",
  path: "/es/social-media-image-sizes",
  locale: "es"
});

export default function SpanishSocialMediaImageSizesPage() {
  return <SocialMediaImageSizesContent />;
}
