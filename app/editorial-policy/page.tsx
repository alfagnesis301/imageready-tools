import { CONTACT_EMAIL } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Editorial Policy",
  description:
    "PublishPixel editorial policy for original image publishing guidance, accuracy, updates and corrections.",
  path: "/editorial-policy",
  noIndex: true
});

export default function EditorialPolicyPage() {
  return (
    <section className="shell py-12">
      <article className="legal-doc">
        <p className="label">Trust</p>
        <h1>Editorial Policy</h1>
        <p>Last updated: April 30, 2026</p>

        <p>
          PublishPixel publishes practical, original guidance about image preparation, web
          performance, accessibility, privacy and publishing workflows. The goal is to help users
          make better decisions before images go live.
        </p>

        <h2>How we create content</h2>
        <p>
          Our guides are written to solve real publishing problems. We focus on clear explanations,
          practical examples and responsible recommendations rather than exaggerated claims.
        </p>

        <h2>Accuracy and updates</h2>
        <p>
          We review content periodically and update pages when tools, standards or publishing
          practices change. Platform requirements can change, so critical uploads should still be
          checked against official platform documentation.
        </p>

        <h2>Use of AI assistance</h2>
        <p>
          We may use AI tools to support research, drafting, formatting or editing. Final content
          should be reviewed for accuracy, usefulness and originality before publication.
        </p>

        <h2>Corrections</h2>
        <p>
          If you notice outdated or incorrect information, contact us at{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </article>
    </section>
  );
}
