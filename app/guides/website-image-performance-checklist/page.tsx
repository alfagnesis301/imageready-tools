import GuideArticle from "@/components/GuideArticle";
import { getGuide } from "@/lib/guides";
import { createPageMetadata } from "@/lib/seo";

const guide = getGuide("website-image-performance-checklist")!;

export const metadata = createPageMetadata({
  title: guide.title,
  description: guide.description,
  path: "/guides/website-image-performance-checklist"
});

export default function Page() {
  return <GuideArticle guide={guide} />;
}
