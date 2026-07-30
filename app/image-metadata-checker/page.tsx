import Link from "next/link";
import FAQ from "@/components/FAQ";
import SmartPublishCheck from "@/components/SmartPublishCheck";
import { createPageMetadata } from "@/lib/seo";

const pageUrl = "https://publishpixel.net/image-metadata-checker";

// Title y description orientados a las consultas que ya generan impresiones
// en esta URL: "meta data checker" (353 imp), "image metadata" (68),
// "metadata checker" (63). Sin sufijo de marca: 734 impresiones en posición
// 83 no pueden permitirse gastar 15 caracteres en branding.
export const metadata = createPageMetadata({
  title: "Image Metadata Checker: View EXIF Data Before You Publish",
  description:
    "Free image metadata checker: see the EXIF, GPS and camera data hidden in your photo before you publish it, and learn how to remove it. Runs in your browser.",
  path: "/image-metadata-checker",
  absoluteTitle: true
});

// Las preguntas salen de las consultas reales que ya reciben impresiones en
// esta URL y en el cluster de metadatos del sitio: "how to remove metadata"
// (17 imp), "remove metadata from jpg" (13), "does instagram remove metadata",
// "image metadata seo" (23), "check image metadata" (15), "erase metadata" (16).
const faqs = [
  {
    question: "What is image metadata?",
    answer:
      "Image metadata is information stored inside the image file that is not part of the picture itself. It can describe the camera and lens, exposure settings, the date and time the shot was taken, the software used to edit it, copyright details and, on many phones, the GPS coordinates of where the photo was taken."
  },
  {
    question: "How do I check the metadata of an image?",
    answer:
      "Upload the image to the checker above and it will read the metadata your browser can access, along with dimensions, format and file size. Nothing is uploaded to a server. On Windows you can also right-click the file, open Properties and look at the Details tab; on macOS, open the image in Preview and choose Tools then Show Inspector."
  },
  {
    question: "How do I remove metadata from an image?",
    answer:
      "The quickest reliable method is to re-export the image rather than edit the original. On Windows, right-click the file, open Properties, go to Details and choose Remove Properties and Personal Information. On macOS, export from Photos with Location Information unchecked. On iOS, use the share sheet, tap Options and turn off Location. For anything sensitive, verify the result with a dedicated metadata tool such as ExifTool."
  },
  {
    question: "Does removing metadata change how the image looks?",
    answer:
      "Removing metadata does not change the pixels, so the picture looks identical. It only strips the descriptive fields stored alongside the image. Re-encoding the file during export can affect quality, which is a separate issue: export at a high quality setting if you want the visual result to stay the same."
  },
  {
    question: "Do social platforms remove metadata when I upload?",
    answer:
      "Most large platforms strip most metadata when they re-encode uploads, but behaviour differs between platforms and changes over time, and some services keep more than others. Treat platform stripping as a side effect you cannot rely on, not as a privacy step. If the data must not leave your device, remove it before uploading."
  },
  {
    question: "Does a screenshot contain metadata?",
    answer:
      "A screenshot has no camera or GPS data because no camera was involved, but it can still record the device, the operating system and the moment it was captured. The bigger risk with screenshots is visible content: notifications, file paths, account names, email addresses and open tabs are all readable in the picture itself."
  },
  {
    question: "Which image formats store metadata?",
    answer:
      "JPEG, TIFF and HEIC carry EXIF natively and are the formats most likely to hold GPS data. PNG and WebP can carry EXIF and XMP in optional chunks. GIF has no EXIF block but supports comment extensions, and SVG is XML, so it can contain metadata elements and even editor history as plain text."
  },
  {
    question: "Does image metadata affect SEO?",
    answer:
      "Not in the way filenames and alt text do. Google has said it does not use most EXIF fields for ranking, so stuffing keywords into metadata does not help. The exception worth using is IPTC photo metadata for licensing, which Google Images can surface as licence details next to an image. What genuinely affects image SEO is the filename, the alt text, the dimensions and the file weight."
  },
  {
    question: "Can a browser check every metadata field?",
    answer:
      "No. A browser reads what the image decoding APIs expose, which covers the common fields but not every proprietary or maker-specific block. For privacy-sensitive files, treat the browser check as a first pass and confirm with a dedicated metadata tool before publishing."
  },
  {
    question: "Does exporting through Canvas remove metadata?",
    answer:
      "Re-encoding an image through the browser Canvas API normally drops EXIF metadata, because the export writes a new file from the decoded pixels. It should not be treated as a guarantee: behaviour varies by browser and output format, so verify the result if the file is sensitive."
  },
  {
    question: "Should I publish the original photo or a copy?",
    answer:
      "Publish an exported copy and keep the original private. The original is your archive: it holds the full quality and the full metadata. An export lets you control the dimensions, the file weight and which fields travel with the image."
  },
  {
    question: "Is removing metadata enough to make a photo safe to publish?",
    answer:
      "No, and this is the mistake worth avoiding. A file with no readable EXIF can still expose a home address on an envelope, a name badge, a screen, a reflection or a recognisable street corner in the background. Check the visible content of the image as carefully as you check its metadata."
  }
];

const metadataStandards = [
  {
    name: "EXIF",
    stands: "Exchangeable Image File Format",
    holds: "Camera make and model, lens, shutter speed, aperture, ISO, orientation, capture date and time, and GPS coordinates on most phones.",
    risk: "Highest. This is where location data lives."
  },
  {
    name: "IPTC",
    stands: "International Press Telecommunications Council",
    holds: "Creator, credit line, copyright notice, caption, keywords and licensing details. Added by photographers and picture desks rather than by the camera.",
    risk: "Low. Usually the metadata you want to keep."
  },
  {
    name: "XMP",
    stands: "Extensible Metadata Platform",
    holds: "An XML container Adobe tools use for edit history, ratings, labels and copyright, often duplicating IPTC fields.",
    risk: "Low to medium. Can reveal software and editing history."
  }
];

const formatSupport = [
  ["JPEG / JPG", "EXIF, IPTC, XMP", "Yes, on most phones", "The default camera format and the most common source of leaked GPS data."],
  ["HEIC / HEIF", "EXIF, XMP", "Yes, on most phones", "The modern iPhone default. Carries the same location fields as JPEG."],
  ["TIFF", "EXIF, IPTC, XMP", "Yes", "Common in archives and print workflows, where metadata is deliberately rich."],
  ["PNG", "EXIF and XMP in optional chunks", "Possible but uncommon", "Screenshots and exports rarely carry GPS, but editors can write chunks."],
  ["WebP", "EXIF and XMP in optional chunks", "Possible but uncommon", "Whether data survives depends on the tool that produced the file."],
  ["GIF", "No EXIF block; comment extensions only", "No", "Little metadata risk, but comments can still carry text."],
  ["SVG", "Arbitrary XML metadata elements", "No", "Plain text: editor names, layer names and comments are directly readable."]
];

const removalSteps = [
  {
    platform: "Windows 10 and 11",
    steps: "Right-click the file, choose Properties, open the Details tab and select Remove Properties and Personal Information. Choose to create a copy so the original keeps its data.",
    caveat: "Clears the fields Explorer knows about. Some maker-specific blocks can survive, so verify sensitive files."
  },
  {
    platform: "macOS",
    steps: "In Photos, use File then Export and untick Location Information. Preview shows metadata under Tools then Show Inspector but does not reliably strip every field.",
    caveat: "Exporting is more dependable than editing in place."
  },
  {
    platform: "iOS and iPadOS",
    steps: "In Photos, tap Share, tap Options at the top of the sheet and turn Location off before sending or saving.",
    caveat: "The setting applies to that share action only, not permanently."
  },
  {
    platform: "Android",
    steps: "Open the photo details in Google Photos or your gallery app and remove the location where the option is offered.",
    caveat: "Availability varies by manufacturer and app version. Check the result rather than assuming."
  },
  {
    platform: "Any browser",
    steps: "Re-export the image through a browser-based tool. Writing a new file from the decoded pixels normally leaves the metadata behind.",
    caveat: "Depends on browser and output format. Not a guarantee for sensitive files."
  },
  {
    platform: "ExifTool (command line)",
    steps: "The reference tool for reading and writing metadata across formats, and the one to reach for when you need certainty.",
    caveat: "Requires installation and a terminal, but it is the most thorough option."
  }
];

const mistakes = [
  {
    title: "Assuming the upload will clean the file",
    body: "Platform stripping is a side effect of re-encoding, not a privacy feature. It varies between services and changes without notice. If the data must not leave your device, remove it first."
  },
  {
    title: "Editing the original instead of exporting a copy",
    body: "Stripping metadata from your only copy destroys information you may want later: capture dates, camera settings and your own copyright line. Keep the original and publish an export."
  },
  {
    title: "Removing the copyright along with everything else",
    body: "A blanket strip also deletes the IPTC creator and rights fields. If you want attribution or licence details to travel with the image, remove the EXIF location and keep IPTC."
  },
  {
    title: "Checking metadata but not the picture",
    body: "The most common real-world leak is visible, not embedded: a delivery label, a school uniform, a screen full of email, a street sign behind the subject."
  },
  {
    title: "Trusting one tool for a sensitive file",
    body: "Different tools read and write different blocks. When the stakes are real, check the output with a second tool before publishing."
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
            See the EXIF, camera and location data hidden inside an image before you publish it.
            The file is read in your browser and never uploaded to a server.
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
          {/* Respuesta corta al principio: es la que puede ganar el fragmento
              destacado para "what is image metadata" y "check image metadata". */}
          <div className="rounded-lg border border-blue-200 bg-blue-50 p-5 dark:border-blue-900 dark:bg-blue-950/40">
            <h2 className="text-xl font-extrabold text-slate-950 dark:text-white">
              The short answer
            </h2>
            <p className="mt-3 text-sm leading-7 text-slate-700 dark:text-slate-300">
              Image metadata is data stored inside a file but not visible in the picture: camera and
              lens, exposure settings, capture date, editing software, copyright and, on most phones,
              the GPS coordinates of where the photo was taken. To check it, open the file in a
              metadata reader like the tool above. To remove it, export a new copy rather than
              editing the original, then verify the export before publishing.
            </p>
          </div>

          <h2 className="mt-12 text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">
            The three metadata standards inside your images
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
            &ldquo;Metadata&rdquo; is not one block of data. Most photographs carry up to three
            separate standards, written by different tools at different moments, and they do not
            carry the same risk. Knowing which is which is what lets you strip the sensitive fields
            without losing the useful ones.
          </p>
          <div className="mt-8 overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white">
                <tr>
                  <th className="p-4 font-extrabold">Standard</th>
                  <th className="p-4 font-extrabold">What it holds</th>
                  <th className="p-4 font-extrabold">Privacy risk</th>
                </tr>
              </thead>
              <tbody className="text-slate-700 dark:text-slate-300">
                {metadataStandards.map((row) => (
                  <tr key={row.name} className="border-t border-slate-200 dark:border-slate-800">
                    <td className="p-4">
                      <span className="font-semibold">{row.name}</span>
                      <span className="mt-1 block text-xs text-slate-500 dark:text-slate-400">
                        {row.stands}
                      </span>
                    </td>
                    <td className="p-4">{row.holds}</td>
                    <td className="p-4">{row.risk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="mt-12 text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">
            Which formats actually store metadata
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
            The format decides what can be stored, and therefore what you need to check. If you only
            remember one row from this table, make it the first: JPEG from a phone camera is the file
            most likely to be carrying the coordinates of your home.
          </p>
          <div className="mt-8 overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white">
                <tr>
                  <th className="p-4 font-extrabold">Format</th>
                  <th className="p-4 font-extrabold">Metadata support</th>
                  <th className="p-4 font-extrabold">GPS likely?</th>
                  <th className="p-4 font-extrabold">What to watch for</th>
                </tr>
              </thead>
              <tbody className="text-slate-700 dark:text-slate-300">
                {formatSupport.map(([format, support, gps, note]) => (
                  <tr key={format} className="border-t border-slate-200 dark:border-slate-800">
                    <td className="p-4 font-semibold">{format}</td>
                    <td className="p-4">{support}</td>
                    <td className="p-4">{gps}</td>
                    <td className="p-4">{note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h2 className="mt-12 text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">
            How to remove image metadata
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
            There is one principle behind every method below: export a new file instead of editing
            the original. Writing a fresh file from the decoded pixels leaves the metadata behind by
            default, while editing in place relies on the tool finding and clearing every block. Keep
            the original as your archive and publish the export.
          </p>
          <div className="mt-8 overflow-x-auto rounded-lg border border-slate-200 bg-white shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <table className="w-full text-left text-sm">
              <thead className="bg-slate-50 text-slate-950 dark:bg-slate-950 dark:text-white">
                <tr>
                  <th className="p-4 font-extrabold">Platform</th>
                  <th className="p-4 font-extrabold">Steps</th>
                  <th className="p-4 font-extrabold">Worth knowing</th>
                </tr>
              </thead>
              <tbody className="text-slate-700 dark:text-slate-300">
                {removalSteps.map((row) => (
                  <tr key={row.platform} className="border-t border-slate-200 dark:border-slate-800">
                    <td className="p-4 font-semibold">{row.platform}</td>
                    <td className="p-4">{row.steps}</td>
                    <td className="p-4">{row.caveat}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm leading-7 text-slate-600 dark:text-slate-400">
            Whichever route you take, check the result. Re-open the exported file in a metadata
            reader and confirm the fields you wanted gone are actually gone. That verification step
            takes seconds and is the difference between assuming a file is clean and knowing it. The{" "}
            <Link href="/guides/remove-image-metadata" className="font-semibold text-blue-700 hover:underline dark:text-blue-300">
              full guide to removing image metadata
            </Link>{" "}
            walks through the process file type by file type.
          </p>

          <h2 className="mt-12 text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">
            Does metadata matter for image SEO?
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
            Less than most checklists suggest. Google has been explicit that it does not use most
            EXIF fields as ranking signals, so writing keywords into the camera comment field is
            wasted effort. The one metadata standard with a documented search benefit is IPTC photo
            metadata for licensing: Google Images can read the licensor and rights fields and show
            licence information alongside an image, which matters if you sell or license photography.
          </p>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
            What does move the needle for images is more mundane: a descriptive filename, alt text
            that describes the picture rather than repeating a keyword, dimensions that match the
            layout, and a file weight that does not slow the page down. If you came here looking for
            an SEO win, those four are where it is. The{" "}
            <Link href="/image-seo-meta-checker" className="font-semibold text-blue-700 hover:underline dark:text-blue-300">
              image SEO checker
            </Link>{" "}
            tests all four in one pass, and the{" "}
            <Link href="/guides/image-seo-checklist" className="font-semibold text-blue-700 hover:underline dark:text-blue-300">
              image SEO checklist
            </Link>{" "}
            covers the full pre-publish routine.
          </p>

          <h2 className="mt-12 text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">
            Metadata and visible privacy risks are different
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-400">
            Removing metadata is only one part of safe publishing. A photo can have no readable EXIF
            data and still reveal private information through visible details such as addresses,
            documents, screens, badges, reflections or location clues in the background.
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
          <p className="mt-6 text-sm leading-7 text-slate-600 dark:text-slate-400">
            The{" "}
            <Link href="/guides/photo-privacy-before-publishing" className="font-semibold text-blue-700 hover:underline dark:text-blue-300">
              photo privacy guide
            </Link>{" "}
            goes further into what an image can give away beyond its metadata.
          </p>

          <h2 className="mt-12 text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">
            Common mistakes
          </h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {mistakes.map((item) => (
              <div
                key={item.title}
                className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900"
              >
                <h3 className="text-base font-extrabold text-slate-950 dark:text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600 dark:text-slate-400">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 rounded-lg border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-xl font-extrabold text-slate-950 dark:text-white">
              Pre-publish metadata checklist
            </h2>
            <ul className="mt-4 grid gap-3 text-sm leading-6 text-slate-700 dark:text-slate-300">
              <li>Read the file&rsquo;s metadata before you touch anything, so you know what is there.</li>
              <li>Check specifically for GPS coordinates if the photo came from a phone.</li>
              <li>Decide what should stay: copyright and credit are usually worth keeping.</li>
              <li>Export a copy rather than stripping the original.</li>
              <li>Re-check the export and confirm the sensitive fields are gone.</li>
              <li>Scan the visible picture for addresses, documents, screens and reflections.</li>
              <li>Be extra careful with photos of documents, homes, workplaces or children.</li>
              <li>For anything genuinely sensitive, verify with a second, dedicated tool.</li>
            </ul>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/guides/remove-image-metadata" className="button-primary">
              How to remove image metadata
            </Link>
            <Link href="/guides/photo-privacy-before-publishing" className="button-secondary">
              Photo privacy guide
            </Link>
            <Link href="/smart-image-publish-check" className="button-secondary">
              Full publish check
            </Link>
          </div>

          <div className="mt-12">
            <h2 className="text-3xl font-extrabold tracking-normal text-slate-950 dark:text-white">
              Frequently asked questions
            </h2>
            <div className="mt-6">
              <FAQ items={faqs} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
