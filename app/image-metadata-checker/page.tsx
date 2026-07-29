import Link from "next/link";
import FAQ from "@/components/FAQ";
import SmartPublishCheck from "@/components/SmartPublishCheck";
import { createPageMetadata } from "@/lib/seo";

const pageUrl = "https://publishpixel.net/image-metadata-checker";

// Title y description orientados a las consultas que ya generan impresiones
// en esta URL: "meta data checker" (349 imp), "image metadata" (68),
// "metadata checker" (63). Sin sufijo de marca: 726 impresiones en posición
// 83 no pueden permitirse gastar 15 caracteres en branding.
export const metadata = createPageMetadata({
  title: "Image Metadata Checker: View EXIF Data Before You Publish",
  description:
    "Free image metadata checker: see the EXIF, GPS and camera data hidden in your photo before you publish it, and learn how to remove it. Runs in your browser.",
  path: "/image-metadata-checker",
  absoluteTitle: true
});

const faqs = [
  {
    question: "Can a browser check every metadata field?",
    answer:
      "No. Browser checks are useful for basic signals, but sensitive files should be verified with a dedicated metadata tool."
  },
  {
    question: "Does Canvas export remove metadata?",
    answer:
      "Canvas export usually does not preserve EXIF metadata, but this should not be treated as a perfect guarantee."
  },
  {
    question: "Should I publish original photos?",
    answer:
      "For public use, it is usually safer to publish an exported copy and keep the original private."
  },
  {
    question: "What else should I review?",
    answer:
      "Check visible details such as addresses, documents, screens, badges, faces and reflections."
  }
];

export default function ImageMetadataCheckerPage() {
  // Mismo grafo que /website-image-optimizer: es el mismo tipo de página
  // (herramienta con contenido editorial de apoyo). Antes solo emitía FAQPage;
  // faltaban BreadcrumbList y la entidad de la propia herramienta.
  const graphJsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "@id": `${pageUrl}#webapplication`,
        name: "Image Metadata Checker",
        url: pageUrl,
        applicationCategory: "MultimediaApplication",
        operatingSystem: "Web",
        description:
          "Check the EXIF, GPS and camera metadata embedded in an image before publishing it online. Runs locally in the browser.",
        offers: {
          "@type": "Offer",
          price: "0",
          priceCurrency: "USD"
        },
        publisher: {
          "@type": "Organization",
          name: "PublishPixel",
          url: "https://publishpixel.net"
        }
      },
      {
        "@type": "FAQPage",
        "@id": `${pageUrl}#faq`,
        mainEntity: faqs.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer
          }
        }))
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${pageUrl}#breadcrumb`,
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://publishpixel.net/"
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Image Metadata Checker",
            item: pageUrl
          }
        ]
      }
    ]
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(graphJsonLd) }}
      />
      <section className="shell py-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="label">Privacy tool</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-normal text-slate-950 sm:text-5xl dark:text-white">
            Image Metadata Checker
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-slate-600 dark:text-slate-300">
            Review basic image privacy and publishing signals before sharing a photo online. Learn
            why metadata, visible details and exported copies matter for safer publishing.
          </p>
        </div>
        <div className="mt-8">
          <SmartPublishCheck
            initialPreset="website-blog"
            heading="Image Metadata Checker"
            description="Upload an image to review browser-readable metadata signals, file size, format and publishing readiness."
          />
        </div>
      </section>

      <section className="shell py-12">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">
            Why metadata matters before publishing
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
            Some image files can contain metadata such as camera model, timestamps, editing
            software or location-related information. Browser-based export may remove some embedded
            metadata, but it should not be treated as a perfect privacy guarantee across every
            browser, file type or workflow.
          </p>
          <div className="mt-10">
            <h2 className="text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">
              Metadata and visible privacy risks are different
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
              Removing metadata is only one part of safe publishing. A photo can have no readable
              EXIF data and still reveal private information through visible details such as
              addresses, documents, screens, badges, reflections or location clues in the background.
            </p>
            <div className="mt-8 overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
              <table className="w-full text-left text-sm">
                <thead className="bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white">
                  <tr>
                    <th className="p-4 font-extrabold">Risk type</th>
                    <th className="p-4 font-extrabold">Example</th>
                    <th className="p-4 font-extrabold">Action before publishing</th>
                  </tr>
                </thead>
                <tbody className="text-slate-700 dark:text-slate-300">
                  <tr className="border-t border-slate-200 dark:border-slate-800">
                    <td className="p-4 font-semibold">Embedded metadata</td>
                    <td className="p-4">Camera data, timestamps, GPS-related fields</td>
                    <td className="p-4">Export a clean copy and verify with a dedicated tool.</td>
                  </tr>
                  <tr className="border-t border-slate-200 dark:border-slate-800">
                    <td className="p-4 font-semibold">Visible personal details</td>
                    <td className="p-4">Names, documents, screens, IDs or addresses</td>
                    <td className="p-4">Crop, blur or choose a safer image.</td>
                  </tr>
                  <tr className="border-t border-slate-200 dark:border-slate-800">
                    <td className="p-4 font-semibold">Location clues</td>
                    <td className="p-4">Street signs, reflections, landmarks or house numbers</td>
                    <td className="p-4">Review the full image, including background details.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-8 rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h3 className="text-xl font-extrabold text-slate-950 dark:text-white">
              Photo privacy checklist
            </h3>
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
              <li>Check whether the image includes sensitive visible details.</li>
              <li>Remove unnecessary metadata before public publishing.</li>
              <li>Keep the original private and publish an exported copy.</li>
              <li>Be careful with photos of documents, addresses or children.</li>
              <li>Verify privacy-sensitive images with dedicated metadata tools.</li>
            </ul>
          </div>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/guides/remove-image-metadata" className="button-primary">Metadata guide</Link>
            <Link href="/guides/photo-privacy-before-publishing" className="button-secondary">Photo privacy guide</Link>
          </div>
          <div className="mt-10">
            <FAQ items={faqs} />
          </div>
        </div>
      </section>
    </>
  );
}
