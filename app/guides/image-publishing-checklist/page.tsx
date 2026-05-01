import GuideArticle from "@/components/GuideArticle";
import { getGuide } from "@/lib/guides";
import { createPageMetadata } from "@/lib/seo";

const guide = getGuide("image-publishing-checklist")!;

export const metadata = createPageMetadata({
  title: guide.title,
  description: guide.description,
  path: "/guides/image-publishing-checklist"
});

export default function Page() {
  return <GuideArticle guide={guide} />;
}
