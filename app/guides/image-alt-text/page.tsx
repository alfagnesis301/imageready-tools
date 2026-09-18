import GuideArticle from "@/components/GuideArticle";
import { getGuide, guideMetaDescription } from "@/lib/guides";
import { createPageMetadata } from "@/lib/seo";

const guide = getGuide("image-alt-text")!;

export const metadata = createPageMetadata({
  title: guide.title,
  description: guideMetaDescription(guide),
  path: "/guides/image-alt-text",
  absoluteTitle: true
});

export default function Page() {
  return <GuideArticle guide={guide} />;
}
