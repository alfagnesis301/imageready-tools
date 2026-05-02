import { notFound } from "next/navigation";
import SpanishGuideArticle from "@/components/SpanishGuideArticle";
import { GUIDES_ES, getGuideEs } from "@/lib/guidesEs";
import { createPageMetadata } from "@/lib/seo";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return GUIDES_ES.map((guide) => ({ slug: guide.slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuideEs(slug);

  if (!guide) {
    return createPageMetadata({
      title: "Guía no encontrada",
      description: "Esta guía de PublishPixel no está disponible.",
      path: `/es/guides/${slug}`,
      locale: "es",
      noIndex: true
    });
  }

  return createPageMetadata({
    title: guide.title,
    description: guide.description,
    path: `/es/guides/${guide.slug}`,
    locale: "es"
  });
}

export default async function SpanishGuidePage({ params }: PageProps) {
  const { slug } = await params;
  const guide = getGuideEs(slug);

  if (!guide) {
    notFound();
  }

  return <SpanishGuideArticle guide={guide} />;
}
