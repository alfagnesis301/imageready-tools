import GuideArticle from "@/components/GuideArticle";
import { getGuide } from "@/lib/guides";
import { createPageMetadata } from "@/lib/seo";

const guide = getGuide("remove-image-metadata")!;

export const metadata = createPageMetadata({
  title: guide.title,
  description: guide.description,
  path: "/guides/remove-image-metadata"
});

export default function Page() {
  return <GuideArticle guide={guide} />;
}
