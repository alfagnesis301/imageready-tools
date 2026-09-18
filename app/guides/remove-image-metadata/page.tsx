import GuideArticle from "@/components/GuideArticle";
import { getGuide, guideMetaDescription } from "@/lib/guides";
import { createPageMetadata } from "@/lib/seo";

const guide = getGuide("remove-image-metadata")!;

export const metadata = createPageMetadata({
  title: guide.title,
  description: guideMetaDescription(guide),
  path: "/guides/remove-image-metadata",
  absoluteTitle: true
});

export default function Page() {
  return <GuideArticle guide={guide} />;
}
