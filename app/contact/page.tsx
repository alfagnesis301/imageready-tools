import ContactForm from "@/components/ContactForm";
import { CONTACT_EMAIL } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact",
  description:
    "Contact PublishPixel — share feedback, report a bug, ask a privacy or editorial question.",
  path: "/contact"
});

export default function ContactPage() {
  return (
    <section className="shell py-12">
      <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr]">
        <article className="legal-doc">
          <p className="label">Contact</p>
          <h1>Contact PublishPixel</h1>
          <p>
            We read every message. Whether you want to report a bug, request a
            feature, ask a privacy question or share editorial feedback on one of
            our guides, this page is the right place to start.
          </p>

          <h2>Email</h2>
          <p>
            The fastest way to reach us is by email at{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>. We aim to
            reply within 3 business days. For urgent privacy or security issues,
            please add <strong>[Privacy]</strong> or{" "}
            <strong>[Security]</strong> to the subject line.
          </p>

          <h2>What you can write to us about</h2>
          <ul>
            <li>
              <strong>Bug reports</strong> — if something does not behave as
              documented in the tool or a guide.
            </li>
            <li>
              <strong>Feature requests</strong> — new presets, new export
              formats, new guides.
            </li>
            <li>
              <strong>Editorial feedback</strong> — corrections, clarifications
              or factual updates for any published guide.
            </li>
            <li>
              <strong>Privacy and data questions</strong> — how data is handled,
              requests under GDPR or CCPA.
            </li>
            <li>
              <strong>Press, partnerships and advertising</strong> —
              collaboration proposals or media inquiries.
            </li>
          </ul>

          <h2>What we cannot help with</h2>
          <ul>
            <li>
              Reviewing or approving images for specific platforms — only the
              platform itself can do that.
            </li>
            <li>
              Recovering lost images or files. PublishPixel never stores your
              images on a server.
            </li>
            <li>
              SEO consulting or ranking guarantees. Our guides are educational,
              not personalised advice.
            </li>
          </ul>

          <h2>Operator</h2>
          <address>
            Ricardo Diaz
            <br />
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            <br />
            United Kingdom
          </address>
        </article>

        <div>
          <p className="label mb-4">Send a message</p>
          <p className="mb-5 text-sm leading-7 text-slate-600 dark:text-slate-400">
            Messages submitted through the form below are handled by Netlify
            Forms and forwarded to our inbox. Please do not send sensitive
            images or confidential files through this form.
          </p>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
