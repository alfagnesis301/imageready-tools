import { createOgImage } from "@/lib/ogImage";
import { DEFAULT_OG_SLUG, OG_VARIANTS, type OgVariantSlug } from "@/lib/ogVariants";

// Se prerenderizan en el build, como el resto del sitio: nada de esto necesita
// ejecutarse por petición.
export const dynamic = "force-static";
export const dynamicParams = false;

export function generateStaticParams() {
  return Object.keys(OG_VARIANTS).map((slug) => ({ slug }));
}

export async function GET(
  _request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const variant = OG_VARIANTS[slug as OgVariantSlug] ?? OG_VARIANTS[DEFAULT_OG_SLUG];

  return createOgImage(variant);
}
