import { CONTACT_EMAIL } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Privacy Policy",
  description:
    "Privacy Policy for PublishPixel, including local image analysis, localStorage preferences, analytics and AdSense preparation.",
  path: "/privacy-policy"
});

export default function PrivacyPolicyPage() {
  return (
    <section className="shell py-12">
      <article className="legal-doc">
        <p className="label">Legal</p>
        <h1>Privacy Policy</h1>
        <p>Last updated: April 30, 2026</p>
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
          should be loaded only according to the consent choices presented to users where required.
        </p>
        <h2>Google AdSense</h2>
        <p>
          The site is prepared for future Google AdSense integration. If advertising is enabled,
          Google and its partners may use cookies, web beacons, IP address information and related
          technologies to provide, measure and personalize ads according to their policies and user
          consent requirements.
        </p>
        <p>
          Third-party vendors, including Google, may use cookies to serve ads based on a user&apos;s
          previous visits to this website or other websites. Google&apos;s use of advertising cookies
          enables Google and its partners to serve ads based on visits to this site and/or other
          sites on the Internet. Users may opt out of personalized advertising through Google Ads
          Settings or other applicable industry opt-out tools.
        </p>
        <h2>Your choices and rights</h2>
        <p>
          You can clear localStorage and cookies through your browser settings. Depending on your
          location, you may have rights to access, correct, delete or object to certain processing of
          personal data. Contact us with privacy requests.
        </p>
        <h2>Contact</h2>
        <p>
          Privacy questions can be sent to <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
        </p>
      </article>
    </section>
  );
}
