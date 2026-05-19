import SocialMediaImageSizesContent from "@/app/social-media-image-sizes/SocialMediaImageSizesContent";
import { createPageMetadata } from "@/lib/seo";
import { SOCIAL_MEDIA_IMAGE_OG } from "@/lib/socialImageSizes";

export const metadata = createPageMetadata({
  title: "Guía de tamaños de imagen para redes sociales 2026",
  description:
    "Consulta tamaños recomendados para Instagram, Facebook, X, LinkedIn, YouTube, TikTok y Pinterest, con una guía práctica para publicaciones, historias, miniaturas y banners.",
  path: "/es/social-media-image-sizes",
  image: SOCIAL_MEDIA_IMAGE_OG,
  locale: "es",
  openGraphType: "article"
});

export default function SpanishSocialMediaImageSizesPage() {
  return <SocialMediaImageSizesContent />;
}
