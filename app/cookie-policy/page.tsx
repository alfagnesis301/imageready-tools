import { CONTACT_EMAIL } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Cookie Policy",
  description: "Cookie and localStorage policy for ImageReady Tools."
});

export default function CookiePolicyPage() {
  return (
    <section className="shell py-12">
      <article className="legal-doc">
        <p className="label">Legal</p>
        <h1>Cookie Policy</h1>
        <p>Last updated: April 28, 2026</p>
        <h2>Essential storage</h2>
        <p>
          ImageReady Tools may use localStorage for essential preferences such as theme, consent state
          and the last selected preset. This keeps the tool convenient without saving images.
        </p>
        <h2>Advertising cookies</h2>
        <p>
          Advertising cookies are not required for the tool to work. If Google AdSense is activated in
          the future, advertising cookies or similar technologies may be used according to Google
          policies and applicable consent requirements.
        </p>
        <h2>Analytics cookies</h2>
        <p>
          Analytics are optional. If analytics are added, the site should respect consent choices before
          loading non-essential analytics scripts where required.
        </p>
        <h2>Managing consent</h2>
        <p>
          The cookie banner lets you accept all, reject non-essential storage or manage preferences.
          You can also clear cookies and localStorage through your browser settings.
        </p>
        <h2>Contact</h2>
        <p>
          Cookie questions can be sent to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </article>
    </section>
  );
}
