import ContactForm from "@/components/ContactForm";
import { CONTACT_EMAIL } from "@/lib/constants";
import { createPageMetadata } from "@/lib/seo";

export const metadata = createPageMetadata({
  title: "Contact",
  description: "Contact ImageReady Tools for feedback, privacy questions and product suggestions."
});

export default function ContactPage() {
  return (
    <section className="shell grid gap-8 py-12 lg:grid-cols-[0.8fr_1.2fr]">
      <div>
        <p className="label">Contact</p>
        <h1 className="mt-3 text-4xl font-extrabold tracking-normal text-slate-950 dark:text-white">
          Contact ImageReady Tools
        </h1>
        <p className="mt-5 text-sm leading-7 text-slate-600 dark:text-slate-400">
          Share feedback, report a bug or ask a privacy question. This form creates an email in your
          mail app and does not submit data to a backend.
        </p>
        <p className="mt-4 text-sm font-semibold text-slate-700 dark:text-slate-300">
          Email:{" "}
          <a className="text-blue-700 hover:underline dark:text-blue-300" href={`mailto:${CONTACT_EMAIL}`}>
            {CONTACT_EMAIL}
          </a>
        </p>
      </div>
      <ContactForm />
    </section>
  );
}
