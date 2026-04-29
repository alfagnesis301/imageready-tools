import { CONTACT_EMAIL } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Terms",
  description: "Terms of use for PublishPixel."
});

export default function TermsPage() {
  return (
    <section className="shell py-12">
      <article className="legal-doc">
        <p className="label">Legal</p>
        <h1>Terms of Use</h1>
        <p>Last updated: April 28, 2026</p>
        <h2>Free informational tool</h2>
        <p>
          PublishPixel is provided as a free informational utility. The recommendations are
          estimates and may not be perfectly accurate for every browser, image format, platform or
          publishing workflow.
        </p>
        <h2>User responsibility</h2>
        <p>
          You are responsible for the images you choose to process, publish or download. Do not use
          the service with illegal content or content you do not have the right to use.
        </p>
        <h2>Image ownership</h2>
        <p>
          You retain any rights you already have in your images. PublishPixel does not claim
          ownership of images you analyze or export locally.
        </p>
        <h2>No guarantee</h2>
        <p>
          The service is provided without warranties. It does not guarantee platform approval, SEO
          ranking, advertising approval, social preview rendering or performance results.
        </p>
        <h2>Contact</h2>
        <p>
          Questions about these terms can be sent to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </article>
    </section>
  );
}
