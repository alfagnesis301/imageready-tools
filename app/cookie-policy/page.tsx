import { CONTACT_EMAIL } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Cookie Policy",
  description: "Cookie and localStorage policy for PublishPixel, including Google AdSense advertising cookies.",
  path: "/cookie-policy",
  noIndex: true
});

export default function CookiePolicyPage() {
  return (
    <section className="shell py-12">
      <article className="legal-doc">
        <p className="label">Legal</p>
        <h1>Cookie Policy</h1>
        <p>Last updated: May 3, 2026</p>

        <h2>Essential storage</h2>
        <p>
          PublishPixel uses localStorage for essential preferences such as theme, consent state
          and the last selected preset. This keeps the tool convenient without saving images.
        </p>

        <h2>Advertising cookies</h2>
        <p>
          This site uses Google AdSense to display advertisements. If you accept advertising
          cookies in our consent banner, the following cookies and identifiers may be set:
        </p>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Provider</th>
              <th>Purpose</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>__gads</td>
              <td>Google</td>
              <td>Used by AdSense to deliver and measure ads.</td>
              <td>Up to 13 months</td>
            </tr>
            <tr>
              <td>__gpi</td>
              <td>Google</td>
              <td>Used by AdSense for ad personalisation and frequency capping.</td>
              <td>Up to 13 months</td>
            </tr>
            <tr>
              <td>IDE / NID</td>
              <td>Google (DoubleClick)</td>
              <td>Ad measurement and basic personalisation.</td>
              <td>Up to 13 months</td>
            </tr>
          </tbody>
        </table>
        <p>
          You can manage or disable advertising cookies via your browser settings, our cookie
          banner or{" "}
          <a
            href="https://www.google.com/settings/ads"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Ads Settings
          </a>
          .
        </p>

        <h2>Advertising consent</h2>
        <p>
          For users in the EEA, the UK and Switzerland, advertising cookies are only set after
          you provide consent through our cookie banner. We aim to use a Google-certified Consent
          Management Platform integrated with the IAB Transparency and Consent Framework where
          required.
        </p>

        <h2>Analytics cookies</h2>
        <p>
          Analytics are optional. If analytics are added, the site will respect consent choices
          before loading non-essential analytics scripts where required.
        </p>

        <h2>Managing consent</h2>
        <p>
          The cookie banner lets you accept all, reject non-essential cookies or manage
          preferences individually. You can also clear cookies and localStorage through your
          browser settings at any time.
        </p>

        <h2>Contact</h2>
        <p>
          Cookie questions can be sent to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </article>
    </section>
  );
}
