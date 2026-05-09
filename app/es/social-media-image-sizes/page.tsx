import SocialMediaImageSizesContent from "@/app/social-media-image-sizes/SocialMediaImageSizesContent";
import { createPageMetadata } from "@/lib/seo";
import { SOCIAL_MEDIA_IMAGE_OG } from "@/lib/socialImageSizes";

export const metadata = createPageMetadata({
  title: "Guia de tamanos de imagen para redes sociales 2026",
  description:
    "Consulta tamanos recomendados para Instagram, Facebook, X, LinkedIn, YouTube, TikTok y Pinterest, con una guia practica para publicaciones, stories, miniaturas y banners.",
  path: "/es/social-media-image-sizes",
  image: SOCIAL_MEDIA_IMAGE_OG,
  locale: "es",
  openGraphType: "article"
});

export default function SpanishSocialMediaImageSizesPage() {
  return <SocialMediaImageSizesContent />;
}
