import GuideArticle from "@/components/GuideArticle";
import { getGuide } from "@/lib/guides";
import { createPageMetadata } from "@/lib/seo";

const guide = getGuide("open-graph-image-best-practices")!;

export const metadata = createPageMetadata({
  title: guide.title,
  description: guide.description,
  path: "/guides/open-graph-image-best-practices"
});

export default function Page() {
  return <GuideArticle guide={guide} />;
}
