import GuideArticle from "@/components/GuideArticle";
import { getGuide } from "@/lib/guides";
import { createPageMetadata } from "@/lib/seo";

const guide = getGuide("photo-privacy-before-publishing")!;

export const metadata = createPageMetadata({
  title: guide.title,
  description: guide.description,
  path: "/guides/photo-privacy-before-publishing"
});

export default function Page() {
  return <GuideArticle guide={guide} />;
}
