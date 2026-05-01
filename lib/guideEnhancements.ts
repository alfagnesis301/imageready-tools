export type GuideTable = {
  columns: [string, string, string];
  rows: [string, string, string][];
};

export type GuideItem = {
  title: string;
  body: string;
};

export type GuideFaq = {
  question: string;
  answer: string;
};

export type GuideRelatedLink = {
  href: string;
  label: string;
  description: string;
};

export type GuideEnhancement = {
  updatedAt: string;
  author: string;
  overview: string[];
  tableTitle: string;
  tableIntro: string;
  table: GuideTable;
  checklistTitle: string;
  checklist: GuideItem[];
  mistakesTitle: string;
  mistakes: GuideItem[];
  howPublishPixelHelps: string[];
  faqs: GuideFaq[];
  relatedLinks: GuideRelatedLink[];
  disclaimer?: string;
};

const standardRelatedLinks: GuideRelatedLink[] = [
  {
    href: "/smart-image-publish-check",
    label: "Smart Image Publish Check",
    description: "Run the full readiness check for size, ratio, format and publishing fit."
  },
  {
    href: "/compress-image",
    label: "Free Image Compressor",
    description: "Create a lighter browser-based export for website and content workflows."
  },
  {
    href: "/resize-image",
    label: "Free Image Resizer",
    description: "Resize images to practical web, social and preview dimensions."
  },
  {
    href: "/convert-image",
    label: "Free Image Converter",
    description: "Convert compatible raster images to JPG, PNG or WebP in your browser."
  },
  {
    href: "/guides",
    label: "Image Publishing Guides",
    description: "Read more practical guides about image SEO, privacy and performance."
  }
];

export const GUIDE_ENHANCEMENTS: Record<string, GuideEnhancement> = {
  "image-size-for-web": {
    updatedAt: "April 30, 2026",
    author: "PublishPixel Editorial Team",
    overview: [
      "A good web image starts with the final layout, not with the original camera file. Modern phones and design tools often create images that are far larger than a blog column, product card or social preview needs. Publishing the original can make a page slower without giving the reader a better visual result.",
      "The practical approach is to pick a sensible maximum width, keep enough detail for high-density screens and avoid sending pixels that will never be displayed. After that, compression and format choice can reduce the file further. This workflow is especially important for new sites that want fast pages, clean user experience and crawlable content."
    ],
    tableTitle: "Practical web image size table",
    tableIntro:
      "These ranges are starting points for common publishing situations. The best value depends on your layout, source quality and responsive image setup.",
    table: {
      columns: ["Use case", "Practical dimensions", "Main publishing risk"],
      rows: [
        ["Blog image", "1200 to 1600 px wide", "Large files inside article pages"],
        ["Hero banner", "1600 to 2400 px wide", "Slow loading on mobile"],
        ["Product image", "1000 to 2000 px, often square", "Inconsistent crops across grids"],
        ["Open Graph preview", "1200 x 630 px", "Awkward social sharing crops"],
        ["Thumbnail", "300 to 800 px wide", "Blurry upscaling if the source is small"]
      ]
    },
    checklistTitle: "Image size checklist before publishing",
    checklist: [
      {
        title: "Confirm the largest display size",
        body: "Check the desktop and mobile layout before exporting. If the image appears in a 760 pixel article column, the source does not need to be 5000 pixels wide for that placement."
      },
      {
        title: "Keep a clean master file",
        body: "Save the original separately and export a publishing copy. This lets you create smaller variants without damaging the source image or losing flexibility for future crops."
      },
      {
        title: "Resize before aggressive compression",
        body: "Oversized dimensions are often the biggest reason an image is heavy. Resize first, then adjust quality so the final file remains clear enough for the reader."
      },
      {
        title: "Check the crop at mobile width",
        body: "A wide desktop banner can lose important details on a phone. Preview the image in the final layout and keep the subject away from extreme edges when possible."
      }
    ],
    mistakesTitle: "Common image size mistakes",
    mistakes: [
      {
        title: "Uploading camera originals directly",
        body: "Large originals can be useful for editing, but they are rarely ideal for a live web page. They increase bandwidth and may slow the first meaningful view of the page."
      },
      {
        title: "Using one crop for every destination",
        body: "A square product crop, a wide hero banner and a social preview have different needs. One file can be adapted, but important content usually deserves a dedicated export."
      },
      {
        title: "Upscaling a weak source image",
        body: "Increasing dimensions cannot recreate missing detail. If the image already looks soft, export targets may be met numerically while the visual result still feels poor."
      },
      {
        title: "Ignoring file size after resizing",
        body: "A correctly sized image can still be heavy if saved with inefficient settings. Always check both dimensions and weight before publishing."
      }
    ],
    howPublishPixelHelps: [
      "PublishPixel reads the file locally and reports width, height, aspect ratio, orientation, megapixels and estimated compression opportunity. This helps you see whether the image is practical before it enters a CMS or campaign workflow.",
      "The preset system compares the same image against common destinations such as Website / Blog Image, Open Graph Image, YouTube Thumbnail and Hero Banner. The score is not official platform validation, but it gives a useful publishing signal.",
      "Use the resize and compression panels to create a publishing copy in the browser. The app does not upload images to a server, which keeps the preparation workflow simple and privacy-first."
    ],
    faqs: [
      {
        question: "What is the best image width for a blog post?",
        answer: "A practical starting point is often 1200 to 1600 pixels wide, but the best width depends on the content column, responsive image setup and source quality."
      },
      {
        question: "Should I upload very large images for better quality?",
        answer: "Not usually. Very large files can slow pages. Use dimensions that are large enough for the layout and compress the export carefully."
      },
      {
        question: "Can resizing make an image sharper?",
        answer: "No. Resizing can fit a target size, but upscaling does not restore detail that was not in the original."
      },
      {
        question: "Do social previews need a separate image?",
        answer: "Important pages often benefit from a dedicated preview image, especially when the social crop differs from the article or hero image."
      },
      {
        question: "Should image size rules replace official platform requirements?",
        answer: "No. Use these recommendations as practical guidance and verify official requirements when a campaign or upload is critical."
      }
    ],
    relatedLinks: standardRelatedLinks
  },
  "remove-image-metadata": {
    updatedAt: "April 30, 2026",
    author: "PublishPixel Editorial Team",
    overview: [
      "Image metadata is easy to forget because it is not visible in the picture. A photo can look harmless while still carrying device details, dates, editing history or location data depending on how it was captured and exported.",
      "For everyday publishing, metadata may only add unnecessary weight. For personal, workplace, classroom, travel or sensitive photos, metadata review becomes a privacy step. The safest habit is to export a publishing copy and verify it before public release."
    ],
    tableTitle: "Metadata review table",
    tableIntro:
      "Different metadata fields create different levels of concern. Treat this as a practical review guide, not a complete forensic report.",
    table: {
      columns: ["Metadata type", "What it may reveal", "Publishing action"],
      rows: [
        ["Camera details", "Device model, lens or exposure settings", "Usually optional for public web use"],
        ["Date and time", "When the image was captured or edited", "Remove when timing is sensitive"],
        ["GPS location", "Approximate or precise capture location", "Remove before publishing personal photos"],
        ["Software history", "Editing application or workflow clues", "Usually safe but rarely needed"],
        ["Copyright fields", "Creator or rights information", "Keep only if intentional and accurate"]
      ]
    },
    checklistTitle: "Metadata removal checklist",
    checklist: [
      {
        title: "Check whether metadata exists",
        body: "Look for EXIF or file metadata before publishing, especially when the image comes from a phone, camera, messaging app or shared drive."
      },
      {
        title: "Export a clean publishing copy",
        body: "Do not overwrite the original. Create a new file for the website, article, listing or social post so the source remains available if you need it later."
      },
      {
        title: "Verify high-risk images twice",
        body: "For private locations, children, workplaces or legal matters, use a dedicated metadata tool and verify the final file after export."
      },
      {
        title: "Review visible details too",
        body: "Metadata is only one privacy layer. Addresses, screens, badges, documents and reflections can reveal information even if the file metadata is clean."
      }
    ],
    mistakesTitle: "Common metadata mistakes",
    mistakes: [
      {
        title: "Assuming every platform removes metadata",
        body: "Some platforms strip metadata, some preserve parts of it and behavior can change. Prepare the file before upload instead of relying on the destination."
      },
      {
        title: "Treating Canvas export as a perfect guarantee",
        body: "Browser re-export usually drops EXIF metadata, but formats and browser behavior vary. Use stronger checks when privacy risk is high."
      },
      {
        title: "Forgetting shared team files",
        body: "Images passed through chat, cloud drives or design tools may carry unexpected metadata. Review the final file, not only the original."
      },
      {
        title: "Removing rights information accidentally",
        body: "Some creators intentionally keep copyright fields. Decide what should remain instead of stripping metadata without considering ownership needs."
      }
    ],
    howPublishPixelHelps: [
      "PublishPixel provides a browser-side metadata signal for common raster images and reminds users that metadata review is part of publishing readiness. It does not upload the image to inspect it.",
      "When you re-export a supported raster image through the browser tools, the resulting Canvas export normally does not preserve EXIF metadata. The app phrases this carefully because it should not be treated as a perfect removal guarantee.",
      "Use the privacy guidance together with the Smart Image Publish Check so file size, dimensions, format and metadata awareness are reviewed in the same workflow."
    ],
    faqs: [
      {
        question: "Does every image contain metadata?",
        answer: "No. Some images contain rich metadata, some contain only basic file information and some have already been stripped by an app or export process."
      },
      {
        question: "Is EXIF metadata always dangerous?",
        answer: "Not always. It can be useful for photography workflows, but it may be unnecessary or risky on public pages."
      },
      {
        question: "Can PublishPixel guarantee metadata removal?",
        answer: "No. Browser export usually drops EXIF metadata, but you should verify sensitive files with a dedicated metadata tool."
      },
      {
        question: "Should product images keep metadata?",
        answer: "Most product pages do not need camera metadata. Keep only intentional rights or attribution information when it supports your workflow."
      },
      {
        question: "What should I check besides metadata?",
        answer: "Review visible private details, permissions, file size, format and whether the image is appropriate for the destination."
      }
    ],
    relatedLinks: standardRelatedLinks,
    disclaimer:
      "Metadata behavior can vary by browser, file format and publishing platform. For sensitive situations, verify with a dedicated privacy workflow."
  },
  "image-alt-text": {
    updatedAt: "April 30, 2026",
    author: "PublishPixel Editorial Team",
    overview: [
      "Useful alt text is written for people first. It gives meaningful context when an image cannot be seen, fails to load or is consumed through assistive technology. The best alt text depends on why the image appears on the page.",
      "A product photo, chart, portrait, decorative background and social preview all need different treatment. The goal is not to stuff keywords into an attribute; it is to explain the relevant information honestly and briefly."
    ],
    tableTitle: "Alt text decision table",
    tableIntro:
      "Use the image purpose to decide how much detail the final alt text needs.",
    table: {
      columns: ["Image role", "Alt text approach", "Example direction"],
      rows: [
        ["Product photo", "Describe the visible product and useful detail", "Color, model, angle or key feature"],
        ["Chart or diagram", "Summarize the main message or provide nearby text", "Trend, comparison or conclusion"],
        ["Decorative image", "Use empty alt in the final HTML", "No added information for the reader"],
        ["Article hero", "Describe the scene in relation to the topic", "Relevant subject and setting"],
        ["Button or icon", "Describe the action, not the shape", "Search, download or open menu"]
      ]
    },
    checklistTitle: "Alt text writing checklist",
    checklist: [
      {
        title: "Start with the page context",
        body: "Ask why the image is there. The same photo may need different alt text on a product page, biography page or news article."
      },
      {
        title: "Describe what matters visually",
        body: "Include the subject and important visible details. Skip decorative flourishes that do not help the reader understand the page."
      },
      {
        title: "Avoid invented details",
        body: "Do not guess a person's identity, location, emotion or product specification unless the page provides that information."
      },
      {
        title: "Keep it readable",
        body: "Alt text is usually best as a natural phrase or sentence. Avoid long keyword lists, file names or repeated phrases from nearby headings."
      }
    ],
    mistakesTitle: "Common alt text mistakes",
    mistakes: [
      {
        title: "Writing keyword strings",
        body: "Alt text should not read like a search query. Keyword stuffing can harm user experience and makes the page feel less trustworthy."
      },
      {
        title: "Repeating the caption exactly",
        body: "If a caption already explains the image, the alt text can be shorter or focus on the visual information that the caption does not cover."
      },
      {
        title: "Overdescribing decorative images",
        body: "Decorative graphics can create noise for screen reader users. Use an empty alt attribute in the final HTML when the image adds no information."
      },
      {
        title: "Leaving functional icons vague",
        body: "For icons used as controls, describe the action. A user needs to know what the control does, not that it is an outline arrow or small shape."
      }
    ],
    howPublishPixelHelps: [
      "PublishPixel includes an optional alt text field so you can review image readiness and accessibility planning together. The tool does not invent descriptions because only you know the page context.",
      "The Smart Check suggests an alt text structure and flags weak or missing drafts. It treats this as a publishing workflow signal, not a guarantee of accessibility compliance.",
      "Use the checker before uploading to a CMS so filename, dimensions, format, weight and alt text draft are reviewed while the image is still easy to change."
    ],
    faqs: [
      {
        question: "How long should alt text be?",
        answer: "Use enough detail to communicate the image's purpose. Many images work well with one concise sentence, but complex charts may need nearby explanatory text."
      },
      {
        question: "Should every image have descriptive alt text?",
        answer: "No. Decorative images should usually have empty alt text in the final HTML so they do not add noise."
      },
      {
        question: "Can alt text help SEO?",
        answer: "Clear alt text can help search systems understand image context, but it should be written for accessibility and relevance first."
      },
      {
        question: "Should I include the words image or photo?",
        answer: "Usually no, because assistive technology already identifies images. Include those words only when the medium itself matters."
      },
      {
        question: "Can PublishPixel write alt text for me?",
        answer: "No. It provides structure guidance and a place to draft your text, but it does not claim to know the visual content of your image."
      }
    ],
    relatedLinks: standardRelatedLinks
  },
  "webp-vs-jpeg-vs-png": {
    updatedAt: "April 30, 2026",
    author: "PublishPixel Editorial Team",
    overview: [
      "Image format choice affects file size, transparency, compatibility and quality. WebP, JPEG and PNG are all useful, but they solve different problems. A good publishing workflow chooses the format based on the image content and destination.",
      "For many modern websites, WebP is a strong default. For broad photo compatibility, JPEG remains practical. For transparency, screenshots, interface graphics and crisp edges, PNG can still be appropriate even when it is heavier."
    ],
    tableTitle: "Format comparison table",
    tableIntro:
      "Use this table as a practical publishing guide before converting a file.",
    table: {
      columns: ["Format", "Best for", "Watch out for"],
      rows: [
        ["WebP", "Modern website photos and graphics", "Some older workflows may not accept it"],
        ["JPEG", "Photos without transparency", "Can show compression artifacts at low quality"],
        ["PNG", "Transparency, screenshots and crisp graphics", "Often too heavy for large photos"],
        ["SVG", "Logos and simple vector artwork", "Do not embed untrusted SVG directly in the DOM"],
        ["GIF", "Simple animation or legacy use", "Large files and limited color quality"]
      ]
    },
    checklistTitle: "Format selection checklist",
    checklist: [
      {
        title: "Check whether transparency matters",
        body: "If the image needs transparent areas, do not export to JPEG. Use PNG or WebP when the destination supports it."
      },
      {
        title: "Match the format to image content",
        body: "Photos usually compress well as WebP or JPEG. Screenshots, logos and flat graphics may need PNG or SVG depending on the artwork."
      },
      {
        title: "Confirm upload compatibility",
        body: "Some CMS, email and social workflows have stricter format rules than a website. Test the final destination when the image is important."
      },
      {
        title: "Compare size and quality",
        body: "Do not choose a format by name alone. Export a sample, inspect text and edges, then compare file size against the original."
      }
    ],
    mistakesTitle: "Common format mistakes",
    mistakes: [
      {
        title: "Saving photos as PNG",
        body: "PNG can make large photographs much heavier than needed. WebP or JPEG is usually more efficient for photographic content."
      },
      {
        title: "Flattening transparent graphics accidentally",
        body: "JPEG does not support transparency. If you convert a transparent logo to JPEG, the background will be filled."
      },
      {
        title: "Assuming WebP is always accepted",
        body: "WebP is excellent for many websites, but some upload pipelines, email tools or marketplaces may prefer JPEG or PNG."
      },
      {
        title: "Ignoring dimensions after conversion",
        body: "Format conversion does not solve oversized dimensions. A WebP file can still be too large if the pixel count is unnecessary."
      }
    ],
    howPublishPixelHelps: [
      "PublishPixel recommends formats based on detected transparency, current format and selected publishing preset. The recommendation is phrased as guidance because the final upload destination still matters.",
      "The browser export panel lets you test JPG, PNG and WebP outputs where supported. You can compare estimated savings before downloading a publishing copy.",
      "For SVG, the app performs basic analysis without inserting user-provided markup into the page. This keeps the workflow safer while still giving useful dimension and file information."
    ],
    faqs: [
      {
        question: "Is WebP better than JPEG?",
        answer: "WebP often creates smaller web images at similar visual quality, but JPEG remains useful for compatibility and some workflows."
      },
      {
        question: "When should I use PNG?",
        answer: "Use PNG for transparency, crisp interface graphics, screenshots or images where lossless detail matters more than file size."
      },
      {
        question: "Does converting always reduce file size?",
        answer: "No. The result depends on content, dimensions, quality settings and browser support."
      },
      {
        question: "Can SVG be used for logos?",
        answer: "Yes, SVG can be excellent for simple vector logos, but untrusted SVG should be handled carefully for security."
      },
      {
        question: "Which format is best for Open Graph images?",
        answer: "JPEG or PNG are commonly used. WebP can be useful for websites, but always verify the platform or sharing workflow."
      }
    ],
    relatedLinks: standardRelatedLinks
  },
  "image-seo-checklist": {
    updatedAt: "April 30, 2026",
    author: "PublishPixel Editorial Team",
    overview: [
      "Image SEO is not a single field to fill in at the end. It is a combination of clear filenames, useful alt text, sensible dimensions, fast loading, relevant page context and predictable preview behavior.",
      "The strongest image workflow starts before upload. When the file is still local, you can rename it, resize it, compress it, convert it and create a dedicated preview image without fighting your CMS or social platform."
    ],
    tableTitle: "Image SEO checklist table",
    tableIntro:
      "These checks help prepare an image so it is easier to understand, load and share.",
    table: {
      columns: ["SEO element", "Practical target", "Why it matters"],
      rows: [
        ["Filename", "Short, descriptive, hyphen-separated", "Gives basic context before upload"],
        ["Alt text", "Useful visual description in context", "Supports accessibility and meaning"],
        ["Dimensions", "Large enough, not oversized", "Improves layout and speed"],
        ["File size", "Compressed for the placement", "Reduces performance friction"],
        ["Preview crop", "Dedicated social or article image", "Improves sharing presentation"]
      ]
    },
    checklistTitle: "Pre-publish image SEO checklist",
    checklist: [
      {
        title: "Rename the file intentionally",
        body: "Use simple lowercase words separated by hyphens. Avoid camera exports, random strings and keyword-heavy names that do not match the image."
      },
      {
        title: "Draft alt text before upload",
        body: "Write the alt text while looking at the image and the page context. This reduces the chance of leaving it blank in the CMS."
      },
      {
        title: "Prepare the social preview",
        body: "Important articles, landing pages and products should have a preview image that matches the target ratio instead of relying on automatic cropping."
      },
      {
        title: "Compress without hiding detail",
        body: "Speed matters, but an image should still support the page. Check faces, product edges, text and gradients after compression."
      }
    ],
    mistakesTitle: "Common image SEO mistakes",
    mistakes: [
      {
        title: "Treating alt text as a keyword field",
        body: "Alt text should explain the image for users. Stuffed keywords can make a page feel low quality and less accessible."
      },
      {
        title: "Forgetting the preview image",
        body: "A page can have a good inline image and still share badly if the Open Graph image is missing or mismatched."
      },
      {
        title: "Publishing oversized files",
        body: "Large images may slow page rendering and make a site feel less polished. Size and compression should be reviewed before upload."
      },
      {
        title: "Using vague file names",
        body: "Names like IMG_8421.jpg or final-final-export.png do not help editors, users or publishing systems understand the asset."
      }
    ],
    howPublishPixelHelps: [
      "PublishPixel combines image SEO signals with technical readiness. It reports dimensions, file size, format, estimated compression opportunity and filename suggestions in one report.",
      "The alt text field lets you test whether the publishing workflow includes a human-written description. The tool does not generate claims about the image content.",
      "Use the Open Graph and SEO Featured Image presets to check common preview ratios before sharing a page publicly."
    ],
    faqs: [
      {
        question: "Can image optimization guarantee SEO rankings?",
        answer: "No. Optimized images may support page quality and performance, but no image tool can guarantee rankings."
      },
      {
        question: "Do filenames still matter?",
        answer: "Descriptive filenames are a useful publishing habit. They provide context for teams and can support image understanding."
      },
      {
        question: "Should every page have an Open Graph image?",
        answer: "Important pages usually should. A dedicated preview can make sharing more predictable across apps."
      },
      {
        question: "Is smaller always better?",
        answer: "Not if quality becomes poor. Aim for the smallest file that still looks clear in the final placement."
      },
      {
        question: "Should I use the same image for SEO and social sharing?",
        answer: "Sometimes, but important pages often benefit from a dedicated social crop with the right ratio and safe focal area."
      }
    ],
    relatedLinks: standardRelatedLinks
  },
  "social-media-image-sizes": {
    updatedAt: "April 30, 2026",
    author: "PublishPixel Editorial Team",
    overview: [
      "Social image sizing is mostly about avoiding surprise crops. A single image can appear as a link preview, feed post, story, pin, thumbnail or product card, and each placement has its own visual pressure.",
      "The safest workflow is to create a high-quality source image and then export destination-specific crops. Keep important faces, product details, text and logos away from the edges because interface overlays and preview crops can vary."
    ],
    tableTitle: "Common social image planning table",
    tableIntro:
      "These sizes are practical starting points. Platform behavior can change, so verify official requirements for critical campaigns.",
    table: {
      columns: ["Destination", "Common size", "Planning note"],
      rows: [
        ["Open Graph", "1200 x 630 px", "Leave safe space near edges"],
        ["YouTube thumbnail", "1280 x 720 px", "Use a clear central focal area"],
        ["Instagram square", "1080 x 1080 px", "Strong for balanced feed crops"],
        ["Instagram story", "1080 x 1920 px", "Avoid top and bottom interface areas"],
        ["Pinterest pin", "1000 x 1500 px", "Tall 2:3 images often work well"]
      ]
    },
    checklistTitle: "Social image checklist",
    checklist: [
      {
        title: "Choose the destination first",
        body: "Do not export a social image until you know whether it will be a link preview, story, feed post, thumbnail, pin or product card."
      },
      {
        title: "Protect the focal area",
        body: "Keep important content near the center and away from interface zones. This matters for thumbnails, stories and preview cards."
      },
      {
        title: "Avoid small text at the edges",
        body: "Tiny edge text can become unreadable after compression or cropping. Use larger type and safe margins for critical words."
      },
      {
        title: "Export separate crops for important channels",
        body: "A campaign image often needs more than one version. Create a square, vertical and wide crop when the channel mix requires it."
      }
    ],
    mistakesTitle: "Common social image mistakes",
    mistakes: [
      {
        title: "Relying on automatic crops",
        body: "Automatic crops may remove faces, products or text. Preview the target shape before publishing."
      },
      {
        title: "Using a low-resolution source",
        body: "Small source files can look blurry in thumbnails or high-density screens even if the final dimensions seem acceptable."
      },
      {
        title: "Forgetting file size limits",
        body: "Some platforms and tools have upload size limits. Compress the image while keeping key details readable."
      },
      {
        title: "Assuming one format fits every platform",
        body: "WebP can be excellent for websites, while some social upload workflows still prefer JPG or PNG."
      }
    ],
    howPublishPixelHelps: [
      "PublishPixel includes presets for Open Graph, YouTube Thumbnail, Instagram Post, Instagram Story, Facebook Post, LinkedIn Post and Pinterest Pin.",
      "The score compares your uploaded image with common dimensions, aspect ratios and file size targets. It also explains when a mismatch is mostly about ratio, weight or format.",
      "Use the resize panel to export a dedicated social crop, then check the result again before uploading it to the final platform."
    ],
    faqs: [
      {
        question: "Can one social image work everywhere?",
        answer: "Sometimes, but important campaigns usually need separate wide, square and vertical crops."
      },
      {
        question: "Are social image sizes official requirements?",
        answer: "This guide uses common practical sizes. Always verify official requirements for critical uploads."
      },
      {
        question: "Why does safe area matter?",
        answer: "Apps can add overlays, controls or crops. Safe areas reduce the risk that important content is hidden."
      },
      {
        question: "Should social images be JPG or PNG?",
        answer: "JPG is common for photos, PNG is useful for graphics or transparency and WebP may be useful for website previews."
      },
      {
        question: "Does PublishPixel post images to social platforms?",
        answer: "No. It prepares and checks image files locally in your browser; it does not publish them for you."
      }
    ],
    relatedLinks: standardRelatedLinks
  },
  "compress-images-without-losing-quality": {
    updatedAt: "April 30, 2026",
    author: "PublishPixel Editorial Team",
    overview: [
      "Good compression is not about making the smallest possible file at any cost. It is about reducing unnecessary weight while keeping the image clear enough for its job. A product photo, hero image, screenshot and thumbnail all have different quality thresholds.",
      "The best compression workflow starts with dimensions, then format, then quality. If the image is too large in pixels, quality settings alone will not solve the real problem."
    ],
    tableTitle: "Compression planning table",
    tableIntro:
      "Use these signals to decide how aggressive your compression should be.",
    table: {
      columns: ["Image type", "Compression approach", "Quality area to inspect"],
      rows: [
        ["Product photo", "Moderate compression", "Edges, texture and color accuracy"],
        ["Blog image", "Balanced compression", "Faces, text and focal subject"],
        ["Hero image", "Resize first, then compress", "Gradients and large smooth areas"],
        ["Screenshot", "Prefer crisp text", "Small UI labels and edges"],
        ["Thumbnail", "Compress but keep focal clarity", "Subject outline and contrast"]
      ]
    },
    checklistTitle: "Compression checklist",
    checklist: [
      {
        title: "Resize before compression",
        body: "If the image is much larger than the layout, resize it first. This often saves more than lowering quality alone."
      },
      {
        title: "Choose a suitable format",
        body: "Try WebP or JPEG for photos and PNG or WebP for graphics with transparency. Compare the result visually."
      },
      {
        title: "Inspect problem areas",
        body: "Compression issues often appear around text, faces, edges, gradients and product details. Zoom in before publishing."
      },
      {
        title: "Keep a reversible workflow",
        body: "Export a compressed copy and keep the original. If quality is too low, return to the source and adjust settings."
      }
    ],
    mistakesTitle: "Common compression mistakes",
    mistakes: [
      {
        title: "Compressing a huge file without resizing",
        body: "A 5000 pixel wide image can remain heavy even after compression. Dimensions and quality settings should work together."
      },
      {
        title: "Using one quality value for every image",
        body: "Some images tolerate stronger compression than others. Screenshots and images with text often need more careful settings."
      },
      {
        title: "Judging only by file size",
        body: "A tiny file is not useful if it makes a product look poor or a thumbnail unreadable. Check visual quality in context."
      },
      {
        title: "Overwriting the original",
        body: "If you save over the source image, it can be difficult to recover quality. Keep a master file and export publishing copies."
      }
    ],
    howPublishPixelHelps: [
      "PublishPixel estimates compression opportunity from file size, dimensions and format. This helps you decide whether compression is worth doing before upload.",
      "The compression panel lets you adjust quality and export JPG, PNG or WebP where supported by the browser. The app shows estimated savings so you can compare outcomes.",
      "Because the workflow is browser-based, your image is not uploaded by the app. This is useful for quick preparation of blog images, product images, thumbnails and email graphics."
    ],
    faqs: [
      {
        question: "What quality setting should I use?",
        answer: "There is no universal value. Start with a balanced setting, inspect the result and adjust based on the image content and destination."
      },
      {
        question: "Can compression be lossless?",
        answer: "Some formats and tools support lossless compression, but many web workflows use controlled lossy compression to reduce weight."
      },
      {
        question: "Should I compress every image?",
        answer: "Most web images benefit from review, but tiny icons or already optimized files may not need another export."
      },
      {
        question: "Does WebP always make smaller files?",
        answer: "Often, but not always. Compare outputs because image content and browser encoder behavior affect the result."
      },
      {
        question: "Will compression remove metadata?",
        answer: "Browser Canvas exports usually do not preserve EXIF metadata, but this should not be treated as a perfect privacy guarantee."
      }
    ],
    relatedLinks: standardRelatedLinks
  },
  "photo-privacy-before-publishing": {
    updatedAt: "April 30, 2026",
    author: "PublishPixel Editorial Team",
    overview: [
      "Photo privacy is about both visible content and hidden file information. A picture can reveal a home address, workplace screen, school badge, travel pattern, document, license plate or location metadata.",
      "Before publishing, slow down and review the image as if a stranger could zoom in, download it and share it. That simple mindset catches many problems before they become public."
    ],
    tableTitle: "Photo privacy review table",
    tableIntro:
      "Use this table to decide what to review before publishing a photo online.",
    table: {
      columns: ["Risk area", "What to inspect", "Practical action"],
      rows: [
        ["Visible location", "Addresses, landmarks and windows", "Crop, blur or choose another image"],
        ["People", "Faces, minors or private events", "Confirm permission where appropriate"],
        ["Documents", "Screens, notes, badges and IDs", "Remove or obscure before upload"],
        ["Metadata", "GPS, dates and device details", "Export and verify a clean copy"],
        ["Rights", "Copyrighted content or brand assets", "Use only images you are allowed to publish"]
      ]
    },
    checklistTitle: "Photo privacy checklist",
    checklist: [
      {
        title: "Zoom in before publishing",
        body: "Small details can become visible when a public image is opened full size. Inspect corners, reflections, screens and background objects."
      },
      {
        title: "Check metadata",
        body: "Review whether the file includes EXIF metadata, especially GPS information or timestamps that reveal sensitive context."
      },
      {
        title: "Confirm permission and rights",
        body: "Make sure you can publish the image and that people, products, artwork or private spaces are handled responsibly."
      },
      {
        title: "Create a publishing copy",
        body: "Use an edited export for public posting. Keep the original private and avoid uploading the master file when a smaller clean copy is enough."
      }
    ],
    mistakesTitle: "Common photo privacy mistakes",
    mistakes: [
      {
        title: "Only checking the subject",
        body: "The background can reveal more than the main subject. Review the entire frame, including reflections and small text."
      },
      {
        title: "Publishing location-sensitive images immediately",
        body: "Real-time location context can create safety concerns. Consider delaying or choosing a less specific image."
      },
      {
        title: "Assuming social platforms remove everything",
        body: "Platform behavior varies and can change. Prepare the image before uploading instead of relying on automatic processing."
      },
      {
        title: "Ignoring rights and consent",
        body: "Privacy and copyright are different, but both matter. Make sure you have the right to publish the image."
      }
    ],
    howPublishPixelHelps: [
      "PublishPixel keeps the image analysis in the browser, which supports a privacy-first workflow for basic readiness checks. The app does not upload or store the image.",
      "The metadata panel provides a basic signal and explains that Canvas re-export normally removes EXIF metadata, while avoiding a false guarantee for sensitive files.",
      "Use the tool to create a smaller publishing copy and review dimensions, file size, format and metadata awareness before the image reaches a public website or social workflow."
    ],
    faqs: [
      {
        question: "Can a photo reveal location?",
        answer: "Yes. Location can be visible in the image itself or stored in metadata, depending on the device and settings."
      },
      {
        question: "Should I blur private details?",
        answer: "Blurring or cropping can help, but use a careful tool and verify the final export. For high-risk details, choose another image when possible."
      },
      {
        question: "Does PublishPixel provide legal advice?",
        answer: "No. It provides practical publishing guidance. For legal, copyright or safety concerns, seek appropriate professional advice."
      },
      {
        question: "Is a smaller image more private?",
        answer: "A smaller image can reduce visible detail, but it does not automatically remove metadata or rights concerns."
      },
      {
        question: "Should I keep original photos offline?",
        answer: "For sensitive photos, keep originals private and publish only edited copies that have been reviewed."
      }
    ],
    relatedLinks: standardRelatedLinks,
    disclaimer:
      "This guide is informational and does not replace legal, security or privacy advice for high-risk publishing situations."
  },
  "image-publishing-checklist": {
    updatedAt: "May 1, 2026",
    author: "PublishPixel Editorial Team",
    overview: [
      "A practical image publishing checklist prevents the most common problems before an image reaches a public page. The goal is to catch issues while the file is still easy to change: oversized dimensions, heavy file weight, weak filenames, missing alt text, privacy concerns and social preview crops.",
      "This workflow is useful for solo creators and teams because it creates a repeatable review step. Instead of asking whether an image looks good in isolation, ask whether it is ready for the exact place it will appear."
    ],
    tableTitle: "Pre-publish image checklist table",
    tableIntro:
      "Use this table as a quick editorial and technical review before uploading an image.",
    table: {
      columns: ["Check", "What to review", "Why it matters"],
      rows: [
        ["Destination", "Blog, product, preview, email or social post", "Sets the correct size and ratio"],
        ["Dimensions", "Width, height and aspect ratio", "Prevents blurry or oversized exports"],
        ["File weight", "Compressed size for the placement", "Supports faster loading"],
        ["Filename", "Readable hyphen-separated words", "Improves asset organization"],
        ["Privacy", "Visible details and metadata signals", "Reduces accidental exposure"]
      ]
    },
    checklistTitle: "Complete image publishing checklist",
    checklist: [
      {
        title: "Choose the destination",
        body: "Start with the final placement. A hero banner, Open Graph image and product grid image should not be exported with the same assumptions."
      },
      {
        title: "Create a publishing copy",
        body: "Keep the original file untouched and export a separate version for the website, CMS, store or campaign."
      },
      {
        title: "Check filename and alt text",
        body: "Use a readable filename and draft alt text when the image communicates useful information."
      },
      {
        title: "Review metadata and visible details",
        body: "Look for private information in both the file and the image itself before publishing."
      }
    ],
    mistakesTitle: "Common publishing checklist mistakes",
    mistakes: [
      {
        title: "Checking only compression",
        body: "A light file can still be the wrong crop, wrong format or too small for the intended placement."
      },
      {
        title: "Using generic filenames",
        body: "Camera and screenshot names make assets harder to manage and less clear inside publishing workflows."
      },
      {
        title: "Leaving preview crops to chance",
        body: "Important pages deserve dedicated social and Open Graph images so previews look intentional."
      },
      {
        title: "Publishing original photos",
        body: "Original files may contain unnecessary dimensions or metadata. A reviewed export is usually safer."
      }
    ],
    howPublishPixelHelps: [
      "PublishPixel combines size, ratio, format, filename, alt text and metadata awareness in one browser-based workflow.",
      "The PublishReady Report gives a copyable summary that can be used as a lightweight handoff for editorial or content teams.",
      "The tool does not upload the image, so it is practical for checking files before they enter a public publishing system."
    ],
    faqs: [
      {
        question: "Is this checklist only for SEO?",
        answer: "No. It covers SEO, accessibility, privacy, performance and social preview readiness."
      },
      {
        question: "Should every image be compressed?",
        answer: "Most images should be reviewed, but very small or already optimized assets may not need another export."
      },
      {
        question: "Can one image be ready for every platform?",
        answer: "Sometimes, but important campaigns usually need dedicated crops for different destinations."
      },
      {
        question: "Does PublishPixel replace platform requirements?",
        answer: "No. It gives practical estimates and reminders. Verify official requirements for critical uploads."
      }
    ],
    relatedLinks: standardRelatedLinks
  },
  "open-graph-image-best-practices": {
    updatedAt: "May 1, 2026",
    author: "PublishPixel Editorial Team",
    overview: [
      "Open Graph images act like visual invitations for your pages. They can appear in link previews across social platforms, chat apps and publishing tools, so a weak crop can make a strong page look unfinished.",
      "The best Open Graph workflow uses a dedicated wide image, centered focal content, readable text and a file size that does not slow down the page. It should support the page title rather than compete with it."
    ],
    tableTitle: "Open Graph planning table",
    tableIntro:
      "These practical targets help reduce preview problems before a page is shared.",
    table: {
      columns: ["Signal", "Practical target", "Risk if ignored"],
      rows: [
        ["Dimensions", "1200 x 630 px", "Low-quality or inconsistent previews"],
        ["Aspect ratio", "About 1.91:1", "Unexpected cropping"],
        ["Safe area", "Centered subject and text", "Important content cut off"],
        ["Format", "JPG or PNG for broad sharing", "Compatibility issues"],
        ["Weight", "Compressed but clear", "Slower page delivery"]
      ]
    },
    checklistTitle: "Open Graph pre-publish checklist",
    checklist: [
      {
        title: "Use a dedicated preview image",
        body: "Do not rely on the first image in an article when the page matters for sharing."
      },
      {
        title: "Keep the focal point centered",
        body: "Preview surfaces can crop differently, so important details should not sit on the edge."
      },
      {
        title: "Make text readable",
        body: "Use fewer words and larger type. Mobile previews make small text hard to read."
      },
      {
        title: "Test the final URL",
        body: "After publishing, inspect the preview using the platforms or tools that matter for your audience."
      }
    ],
    mistakesTitle: "Common Open Graph mistakes",
    mistakes: [
      {
        title: "Using the hero crop unchanged",
        body: "A page hero may be too wide, too tall or too text-heavy for preview cards."
      },
      {
        title: "Putting logos and text at the edges",
        body: "Edges are the first place crops and overlays create problems."
      },
      {
        title: "Exporting huge preview files",
        body: "A preview image should be clear, but it does not need to be a large original."
      },
      {
        title: "Forgetting page metadata",
        body: "The preview image works best with a matching title and description."
      }
    ],
    howPublishPixelHelps: [
      "The Open Graph preset checks the common 1200 x 630 target, ratio, file weight and format guidance.",
      "The preview simulator shows a wide crop so you can see whether the image has a useful focal area.",
      "The report gives a copyable summary for editors or developers before the page goes live."
    ],
    faqs: [
      {
        question: "Is 1200 x 630 required everywhere?",
        answer: "No, but it is a common practical target for wide preview cards."
      },
      {
        question: "Can Open Graph previews crop differently?",
        answer: "Yes. Apps and platforms can render previews differently, so use safe margins."
      },
      {
        question: "Should preview images include text?",
        answer: "They can, but keep text short, large and centered."
      },
      {
        question: "Should I use WebP for Open Graph?",
        answer: "WebP can be useful on websites, but JPG and PNG remain common for broad sharing compatibility."
      }
    ],
    relatedLinks: standardRelatedLinks
  },
  "youtube-thumbnail-image-guide": {
    updatedAt: "May 1, 2026",
    author: "PublishPixel Editorial Team",
    overview: [
      "A YouTube thumbnail has to work at small sizes, in busy feeds and on mobile screens. Technical dimensions matter, but visual clarity matters just as much.",
      "A good thumbnail export uses a 16:9 frame, a clear focal point, readable contrast and a dedicated file rather than an accidental screenshot."
    ],
    tableTitle: "Thumbnail readiness table",
    tableIntro:
      "Use these checks to prepare a thumbnail image before upload.",
    table: {
      columns: ["Check", "Practical target", "Why it matters"],
      rows: [
        ["Dimensions", "1280 x 720 px", "Common 16:9 thumbnail size"],
        ["Focal point", "Large and obvious", "Works in small feeds"],
        ["Text", "Short and high contrast", "Improves mobile readability"],
        ["Edges", "Safe margins", "Reduces overlay and crop problems"],
        ["File", "Compressed JPG or PNG", "Supports smoother upload"]
      ]
    },
    checklistTitle: "YouTube thumbnail checklist",
    checklist: [
      {
        title: "Use a 16:9 canvas",
        body: "Start with a wide 16:9 frame so the thumbnail fits common video surfaces."
      },
      {
        title: "Prioritize one clear idea",
        body: "A thumbnail with one obvious subject usually reads better than a busy collage."
      },
      {
        title: "Check text at small sizes",
        body: "Zoom out and make sure any text remains readable on mobile."
      },
      {
        title: "Export a dedicated thumbnail",
        body: "A designed thumbnail usually communicates better than a random video frame."
      }
    ],
    mistakesTitle: "Common thumbnail mistakes",
    mistakes: [
      {
        title: "Using tiny text",
        body: "Small text often disappears in mobile feeds and search results."
      },
      {
        title: "Crowding the edges",
        body: "Interface overlays and crops can cover edge content."
      },
      {
        title: "Over-compressing faces",
        body: "Faces and product details can look poor when compression is too aggressive."
      },
      {
        title: "Ignoring the source quality",
        body: "A small or blurry source image cannot become sharp just by resizing."
      }
    ],
    howPublishPixelHelps: [
      "The YouTube preset checks 1280 x 720 dimensions, 16:9 ratio, file weight and format guidance.",
      "PublishPixel flags small source files and gives a clear resize recommendation before upload.",
      "The report helps creators document the recommended next step for a thumbnail asset."
    ],
    faqs: [
      {
        question: "What size is practical for a YouTube thumbnail?",
        answer: "A common practical target is 1280 x 720 pixels with a 16:9 ratio."
      },
      {
        question: "Does PublishPixel judge thumbnail design quality?",
        answer: "No. It checks technical readiness and gives general composition reminders."
      },
      {
        question: "Can I resize a small image into a thumbnail?",
        answer: "You can resize it, but upscaling does not restore missing detail."
      },
      {
        question: "Should I compress thumbnails?",
        answer: "Yes, but keep faces, text and focal details clear enough for small previews."
      }
    ],
    relatedLinks: standardRelatedLinks
  },
  "website-image-performance-checklist": {
    updatedAt: "May 1, 2026",
    author: "PublishPixel Editorial Team",
    overview: [
      "Website image performance begins before upload. Oversized originals, inefficient formats and uncompressed exports can make pages slower before code-level optimizations even start.",
      "A useful performance checklist connects the asset workflow with the production page: dimensions, compression, format, responsive delivery, caching and loading behavior."
    ],
    tableTitle: "Website image performance table",
    tableIntro:
      "Use these checks to reduce avoidable image weight before publishing.",
    table: {
      columns: ["Area", "Practical action", "Performance benefit"],
      rows: [
        ["Dimensions", "Resize to the layout maximum", "Avoids unused pixels"],
        ["Format", "Use WebP/JPG/PNG based on content", "Improves compression fit"],
        ["Quality", "Compress carefully", "Reduces file weight"],
        ["Responsive delivery", "Serve appropriate sizes", "Improves mobile loading"],
        ["Metadata", "Remove unnecessary data", "Can reduce file size and privacy risk"]
      ]
    },
    checklistTitle: "Website image performance checklist",
    checklist: [
      {
        title: "Resize before upload",
        body: "Prepare an image close to the largest size it will actually need."
      },
      {
        title: "Use a suitable format",
        body: "Choose WebP, JPEG, PNG or SVG based on image content and transparency needs."
      },
      {
        title: "Compress and inspect",
        body: "Reduce file size while checking visual details that reveal quality loss."
      },
      {
        title: "Plan production delivery",
        body: "Use responsive image markup, caching and appropriate lazy loading where possible."
      }
    ],
    mistakesTitle: "Common performance mistakes",
    mistakes: [
      {
        title: "Uploading originals",
        body: "Camera originals are usually too large for direct website use."
      },
      {
        title: "Compressing without resizing",
        body: "An oversized image can remain heavy even after compression."
      },
      {
        title: "Using PNG for large photos",
        body: "PNG is often inefficient for photos without transparency."
      },
      {
        title: "Ignoring mobile users",
        body: "Large desktop assets can punish mobile performance if responsive delivery is not planned."
      }
    ],
    howPublishPixelHelps: [
      "PublishPixel checks image weight, dimensions, format and estimated compression opportunity before upload.",
      "The Website / Blog and Hero Banner presets help identify oversized or undersized assets for common page placements.",
      "The export tools create a publishing copy that can then be used inside a production responsive image workflow."
    ],
    faqs: [
      {
        question: "Can image optimization alone guarantee fast pages?",
        answer: "No. It helps, but hosting, caching, JavaScript, CSS and responsive markup also matter."
      },
      {
        question: "Is WebP always the best format?",
        answer: "No. It is often useful, but PNG, JPEG or SVG can be better depending on the image."
      },
      {
        question: "Should every image be lazy loaded?",
        answer: "Not always. Above-the-fold hero images may need different loading treatment than below-the-fold content."
      },
      {
        question: "What is the first image performance step?",
        answer: "Resize the asset to a practical maximum for its final layout, then compress it."
      }
    ],
    relatedLinks: standardRelatedLinks
  }
};
