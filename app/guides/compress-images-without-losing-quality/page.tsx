import GuideArticle from "@/components/GuideArticle";
import { getGuide, guideMetaDescription } from "@/lib/guides";
import { createPageMetadata } from "@/lib/seo";

const guide = getGuide("compress-images-without-losing-quality")!;

export const metadata = createPageMetadata({
  title: guide.title,
  description: guideMetaDescription(guide),
  path: "/guides/compress-images-without-losing-quality",
  absoluteTitle: true
});

export default function Page() {
  return <GuideArticle guide={guide} />;
}
