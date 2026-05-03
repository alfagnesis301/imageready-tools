import { CONTACT_EMAIL } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "Privacy Policy for PublishPixel — local image analysis, localStorage, Google AdSense, GDPR and CCPA rights.",
  path: "/privacy-policy"
});

export default function PrivacyPolicyPage() {
  return (
    <section className="shell py-12">
      <article className="legal-doc">
        <p className="label">Legal</p>
        <h1>Privacy Policy</h1>
        <p>Last updated: May 3, 2026</p>

        <h2>What PublishPixel processes</h2>
        <p>
          PublishPixel processes image files you choose locally in your browser to calculate
          dimensions, aspect ratio, file size, format, estimated compression and publishing
          recommendations.
        </p>

        <h2>Images are analyzed locally</h2>
        <p>
          The app does not upload your images to a server for analysis. It does not store your images,
          does not keep copies of exported images and does not send image contents to external image
          analysis services.
        </p>

        <h2>LocalStorage</h2>
        <p>
          The app may use localStorage for preferences such as theme, cookie consent choices and the
          last selected publishing preset. localStorage is not used to save images.
        </p>

        <h2>Analytics</h2>
        <p>
          Analytics are not required for the tool to work. If analytics are added in the future, they
          will be loaded only according to the consent choices presented to users where required.
        </p>

        <h2>Advertising and Google AdSense</h2>
        <p>
          This site uses Google AdSense to display advertisements. When AdSense is active, Google
          and its partners may use cookies and similar technologies to:
        </p>
        <ul>
          <li>Serve ads based on your prior visits to this site or other sites.</li>
          <li>Measure the performance of ads and detect invalid traffic.</li>
          <li>Enable basic personalisation where allowed by your consent settings.</li>
        </ul>
        <p>
          You can opt out of personalised advertising at any time by visiting{" "}
          <a
            href="https://www.google.com/settings/ads"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Ads Settings
          </a>
          {" "}or, for participating networks,{" "}
          <a
            href="https://www.aboutads.info/choices/"
            target="_blank"
            rel="noopener noreferrer"
          >
            aboutads.info/choices
          </a>
          {" "}and{" "}
          <a
            href="https://www.youronlinechoices.eu/"
            target="_blank"
            rel="noopener noreferrer"
          >
            youronlinechoices.eu
          </a>
          .
        </p>
        <p>
          Google&apos;s use of advertising cookies is described in{" "}
          <a
            href="https://policies.google.com/technologies/ads"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google&apos;s Advertising Privacy &amp; Terms
          </a>
          . Where required by law, advertising cookies are only set after you provide consent
          through our cookie banner.
        </p>

        <h2>Third parties</h2>
        <ul>
          <li>
            <strong>Netlify</strong> — hosting and form delivery.
          </li>
          <li>
            <strong>Google AdSense</strong> — advertising (active on this site).
          </li>
          <li>
            <strong>Analytics</strong> — anonymous traffic measurement (only if enabled, only
            after consent where required).
          </li>
        </ul>

        <h2>Your rights (GDPR / CCPA)</h2>
        <p>
          If you are in the European Economic Area, the United Kingdom, Switzerland or California,
          you have the right to access, correct, delete or restrict the processing of your personal
          data, and to object to processing or withdraw consent at any time. You can also clear
          localStorage and cookies through your browser settings. Send any data request to{" "}
          <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>

        <h2>Contact</h2>
        <p>
          Privacy questions can be sent to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </article>
    </section>
  );
}
