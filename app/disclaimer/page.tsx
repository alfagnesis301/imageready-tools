import { CONTACT_EMAIL } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Disclaimer",
  description:
    "Disclaimer for PublishPixel recommendations, platform requirements, SEO results and technical estimates.",
  path: "/disclaimer"
});

export default function DisclaimerPage() {
  return (
    <section className="shell py-12">
      <article className="legal-doc">
        <p className="label">Legal</p>
        <h1>Disclaimer</h1>
        <p>Last updated: April 30, 2026</p>
        <h2>Estimated recommendations</h2>
        <p>
          PublishPixel provides estimated recommendations based on browser-readable image
          information and commonly used publishing guidelines. It does not perform a full creative,
          legal or platform-specific review.
        </p>
        <h2>Platform requirements may change</h2>
        <p>
          Social networks, search engines, video platforms, marketplaces and email clients may change
          their requirements or rendering behavior. Verify official requirements when the result is
          important for a campaign, upload or business workflow.
        </p>
        <h2>No guaranteed outcomes</h2>
        <p>
          The tool does not guarantee approval, SEO ranking, speed improvements, social card rendering,
          ad eligibility, image quality or business performance.
        </p>
        <h2>Contact</h2>
        <p>
          Questions can be sent to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </article>
    </section>
  );
}
