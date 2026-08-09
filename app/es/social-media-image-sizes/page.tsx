import SocialMediaImageSizesContent from "@/app/social-media-image-sizes/SocialMediaImageSizesContent";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Guía de tamaños de imagen para redes sociales 2026",
  description:
    "Consulta tamaños recomendados para Instagram, Facebook, X, LinkedIn, YouTube, TikTok y Pinterest, con una guía práctica para publicaciones, historias, miniaturas y banners.",
  path: "/es/social-media-image-sizes",
  ogVariant: "social-sizes.png",
  locale: "es",
  openGraphType: "article"
});

export default function SpanishSocialMediaImageSizesPage() {
  return <SocialMediaImageSizesContent />;
}
