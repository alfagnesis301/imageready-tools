export type Guide = {
  slug: string;
  title: string;
  description: string;
  intro: string;
  sections: {
    heading: string;
    body: string[];
  }[];
  takeaway: string;
};

export const GUIDES: Guide[] = [
  {
    slug: "image-size-for-web",
    title: "Image Size for Web: Practical Dimensions Before Publishing",
    description:
      "Learn how to choose web image dimensions that look sharp without slowing down your pages.",
    intro:
      "Choosing image size for the web is a balancing act. A file can be technically valid and still be too large for the page, too small for modern screens, or the wrong shape for the layout. The goal is to publish an image that fits the final placement, loads quickly, and still looks clear.",
    sections: [
      {
        heading: "Start with the final placement",
        body: [
          "A hero image, product thumbnail, article image and author portrait do not need the same dimensions. Before exporting, decide where the image will appear and how much space it will occupy on desktop and mobile.",
          "For many article and landing page images, a width between 1200 and 1600 pixels is a practical starting point. Hero banners may need 1600 to 2400 pixels wide, while small cards and thumbnails can often be much smaller."
        ]
      },
      {
        heading: "Avoid oversized originals",
        body: [
          "Uploading a 5000 pixel wide image for a 700 pixel content column wastes bandwidth and can hurt page speed. Resize the image to a realistic maximum and let your website serve responsive variants when possible.",
          "Large source files also make CMS workflows slower. A lighter asset is easier to preview, upload, cache and deliver."
        ]
      },
      {
        heading: "Watch for blurry upscaling",
        body: [
          "If an image is too small, making it larger does not restore detail. Upscaling may fit the dimensions, but it can make edges and text look soft.",
          "For important content such as product photos or thumbnails, start from a source image that is already larger than the target size."
        ]
      },
      {
        heading: "Use dimensions and compression together",
        body: [
          "Dimensions control how many pixels the image contains. Compression controls how efficiently those pixels are stored. A good workflow checks both.",
          "PublishPixel helps flag images that are too heavy, too small or mismatched for common publishing targets."
        ]
      }
    ],
    takeaway:
      "Use the smallest dimensions that still look sharp in the final layout, then compress carefully before publishing."
  },
  {
    slug: "remove-image-metadata",
    title: "How to Remove Image Metadata Before Publishing",
    description:
      "Understand EXIF metadata, privacy risks and safer ways to publish images online.",
    intro:
      "Image files can contain metadata that is not visible in the picture itself. Depending on the device and workflow, metadata may include camera details, timestamps, editing software and sometimes location information. Reviewing metadata is a simple privacy step before publishing.",
    sections: [
      {
        heading: "What metadata can include",
        body: [
          "Common image metadata can describe the camera model, lens, exposure settings, creation date or software used to edit the file.",
          "Some photos may also contain GPS coordinates if location services were enabled when the image was captured."
        ]
      },
      {
        heading: "Why metadata matters",
        body: [
          "Metadata can be useful in a photography workflow, but it may be unnecessary or risky when publishing to a public website.",
          "For personal, sensitive or location-specific images, removing unnecessary metadata can reduce privacy exposure."
        ]
      },
      {
        heading: "Canvas exports and metadata",
        body: [
          "When a browser re-exports an image through Canvas, EXIF metadata is usually not preserved. This can be helpful, but browser behavior and file formats vary.",
          "Do not rely on a single tool for high-risk privacy situations. Use a dedicated metadata remover when the image is sensitive."
        ]
      },
      {
        heading: "A safer publishing workflow",
        body: [
          "Check whether metadata exists, export a clean copy, then verify the final file if privacy is important.",
          "PublishPixel provides a basic browser-side metadata signal and a reminder to avoid sharing sensitive images without review."
        ]
      }
    ],
    takeaway:
      "Treat metadata as part of image readiness, especially for personal photos, private locations and sensitive publishing contexts."
  },
  {
    slug: "image-alt-text",
    title: "How to Write Useful Image Alt Text",
    description:
      "Write clearer alt text for accessibility, context and better image publishing workflows.",
    intro:
      "Alt text helps people understand an image when they cannot see it or when the image does not load. It should describe the relevant visual content in the context of the page, not act as a keyword container.",
    sections: [
      {
        heading: "Describe the useful information",
        body: [
          "Good alt text focuses on what the reader needs to know. A product image, chart, portrait and decorative background all need different treatment.",
          "If the image is purely decorative and adds no information, an empty alt attribute may be more appropriate in the final HTML."
        ]
      },
      {
        heading: "Keep it specific and natural",
        body: [
          "Avoid vague text such as image, photo or graphic unless that context is meaningful. Also avoid stuffing keywords that do not help the user.",
          "A practical structure is: visible subject, important detail and page context."
        ]
      },
      {
        heading: "Examples of better alt text",
        body: [
          "Instead of 'backpack image', write 'Black travel backpack with front zipper pocket on a white background' when that detail matters.",
          "For an article header, describe the scene and the topic connection without inventing details that are not visible."
        ]
      },
      {
        heading: "When not to overdescribe",
        body: [
          "If the surrounding text already explains the image, alt text can be concise. If the image contains essential information, provide enough detail or include a nearby text alternative.",
          "PublishPixel gives a structure prompt instead of inventing visual descriptions for your image."
        ]
      }
    ],
    takeaway:
      "Write alt text for the user first: clear, relevant and honest about what the image actually shows."
  },
  {
    slug: "webp-vs-jpeg-vs-png",
    title: "WebP vs JPEG vs PNG: Which Image Format Should You Use?",
    description:
      "Compare common image formats and choose a practical publishing format for web pages and social previews.",
    intro:
      "The best image format depends on the content of the image and where it will be published. WebP, JPEG and PNG can all be correct choices in different contexts.",
    sections: [
      {
        heading: "When WebP is useful",
        body: [
          "WebP often creates smaller files than JPEG or PNG while keeping good visual quality. It is a strong default for many modern website images.",
          "WebP can also support transparency, which makes it useful for some graphics where PNG would be heavier."
        ]
      },
      {
        heading: "When JPEG is useful",
        body: [
          "JPEG is widely supported and works well for photographs without transparency. It is still a practical choice for many publishing workflows.",
          "JPEG does not support transparency, so transparent backgrounds will be flattened."
        ]
      },
      {
        heading: "When PNG is useful",
        body: [
          "PNG is useful for crisp graphics, screenshots, logos and images that need transparency.",
          "For large photos, PNG files can become much heavier than necessary."
        ]
      },
      {
        heading: "Format choice is not everything",
        body: [
          "A good format can still be slow if the image is oversized. Always check dimensions, compression and how the image will be displayed.",
          "PublishPixel recommends formats based on the selected publishing preset and whether transparency is detected."
        ]
      }
    ],
    takeaway:
      "Use WebP for many modern web images, JPEG for broad photo compatibility and PNG when transparency or crisp graphics matter."
  },
  {
    slug: "image-seo-checklist",
    title: "Image SEO Checklist Before Publishing",
    description:
      "A practical checklist for filenames, alt text, dimensions, file size and social previews.",
    intro:
      "Image SEO is not a single trick. It is a set of publishing habits that make images easier to load, understand and reuse across search and sharing surfaces.",
    sections: [
      {
        heading: "Use meaningful filenames",
        body: [
          "A filename should give a basic clue about the image. Use simple words separated by hyphens and avoid long random export names.",
          "A useful filename does not need to repeat every keyword on the page."
        ]
      },
      {
        heading: "Add relevant alt text",
        body: [
          "Alt text should explain the image in context. It supports accessibility and can help clarify the purpose of the image.",
          "Do not invent visual details or use alt text as a list of search terms."
        ]
      },
      {
        heading: "Prepare preview images",
        body: [
          "Open Graph and article preview images often use wide ratios such as 1200 x 630. A mismatched image may crop poorly when shared.",
          "Prepare a dedicated preview image for important articles, products and campaign pages."
        ]
      },
      {
        heading: "Keep images fast",
        body: [
          "Large image files can slow pages and make content feel less polished. Compress images and serve responsive sizes when possible.",
          "PublishPixel highlights heavy files and suggests practical export targets."
        ]
      }
    ],
    takeaway:
      "Good image SEO combines clear context, accessible descriptions, appropriate dimensions and fast loading."
  },
  {
    slug: "social-media-image-sizes",
    title: "Social Media Image Sizes: A Practical Publishing Guide",
    description:
      "Prepare image crops for Open Graph, YouTube thumbnails, Instagram, LinkedIn, Pinterest and product feeds.",
    intro:
      "Social platforms display images in different shapes. A single source image can work in several places, but important campaigns usually benefit from dedicated crops.",
    sections: [
      {
        heading: "Open Graph and link previews",
        body: [
          "A common Open Graph size is 1200 x 630 pixels, which is close to a 1.91:1 ratio.",
          "Keep important content away from the very edges because previews can vary across apps."
        ]
      },
      {
        heading: "YouTube thumbnails",
        body: [
          "A common YouTube thumbnail size is 1280 x 720 pixels with a 16:9 ratio.",
          "Use a clear focal area and leave space for interface overlays and timestamps."
        ]
      },
      {
        heading: "Instagram and vertical formats",
        body: [
          "Instagram feed images commonly use square, portrait and landscape ratios. Stories use a vertical 9:16 frame.",
          "Do not rely on automatic cropping for important text or faces."
        ]
      },
      {
        heading: "Pins and product images",
        body: [
          "Pinterest pins often use a tall 2:3 ratio, while product images commonly work well as square images.",
          "PublishPixel lets you compare your image against platform-oriented presets."
        ]
      }
    ],
    takeaway:
      "Choose the crop for the destination, then check dimensions, ratio and file size before publishing."
  },
  {
    slug: "compress-images-without-losing-quality",
    title: "How to Compress Images Without Losing Too Much Quality",
    description:
      "Reduce image weight while keeping photos and graphics clear enough for publishing.",
    intro:
      "Compression is about finding the smallest file that still looks good in context. The right setting depends on the image content, format and where the image appears.",
    sections: [
      {
        heading: "Resize before compressing",
        body: [
          "If an image is much larger than the final layout, resize it first. Compression alone cannot fix unnecessary dimensions.",
          "A smaller pixel size often creates a larger saving than changing quality by a few percentage points."
        ]
      },
      {
        heading: "Use the right format",
        body: [
          "For many website photos, WebP or compressed JPEG can be much lighter than PNG.",
          "For transparent graphics, WebP or PNG may be appropriate depending on your compatibility needs."
        ]
      },
      {
        heading: "Check visual details",
        body: [
          "Look at faces, text, edges and gradients after compression. These areas often reveal quality loss first.",
          "Do not judge only by file size; check whether the result still works for the reader."
        ]
      },
      {
        heading: "Create a repeatable target",
        body: [
          "For blog images, a few hundred KB is often a practical target. For large hero images, the target may be higher but should still be intentional.",
          "PublishPixel estimates compression opportunity and offers browser-based exports for common formats."
        ]
      }
    ],
    takeaway:
      "Resize to the right dimensions, choose a practical format and compress until the image remains clear enough for its purpose."
  },
  {
    slug: "photo-privacy-before-publishing",
    title: "Photo Privacy Checklist Before Publishing Online",
    description:
      "Review metadata, visible details, permissions and sensitive context before publishing photos.",
    intro:
      "A photo can reveal more than intended. Before publishing, review both visible content and hidden file information so you do not share private details by accident.",
    sections: [
      {
        heading: "Check visible information",
        body: [
          "Look for addresses, documents, screens, badges, license plates, faces and private surroundings.",
          "Cropping or blurring may be needed when a photo contains information that should not be public."
        ]
      },
      {
        heading: "Review metadata",
        body: [
          "Some photos contain EXIF metadata with timestamps, camera details or location information.",
          "Remove unnecessary metadata before publishing personal or sensitive images."
        ]
      },
      {
        heading: "Confirm rights and consent",
        body: [
          "Make sure you have permission to publish the image, especially when it includes people, private property, products or copyrighted material.",
          "PublishPixel does not replace legal advice, but it can remind you to review publishing risk."
        ]
      },
      {
        heading: "Keep safer copies",
        body: [
          "Export a separate publishing copy instead of uploading your original file. This helps protect metadata and keeps your source image unchanged.",
          "Use the final exported file for the website, social post or marketplace listing."
        ]
      }
    ],
    takeaway:
      "Before publishing a photo, review visible details, hidden metadata and whether you have the right to share it."
  },
  {
    slug: "image-publishing-checklist",
    title: "Image Publishing Checklist Before Uploading Online",
    description:
      "A practical pre-publish checklist for image size, format, alt text, filename, metadata and preview readiness.",
    intro:
      "Publishing an image is not just an upload step. A strong workflow checks whether the image is clear, lightweight, private, accessible and prepared for the place where it will appear.",
    sections: [
      {
        heading: "Review the destination first",
        body: [
          "A blog image, social preview, product image and email header all need different dimensions and formats. Start with the destination instead of exporting one universal file.",
          "When the destination is clear, it becomes easier to choose a crop, maximum width, target file size and format."
        ]
      },
      {
        heading: "Prepare a publishing copy",
        body: [
          "Keep the original source file private and export a dedicated copy for the website, CMS, social campaign or store.",
          "A publishing copy can be resized, compressed, renamed and checked without damaging the master image."
        ]
      },
      {
        heading: "Check accessibility and context",
        body: [
          "Useful images should have an alt text plan when they communicate information. Decorative images should be handled differently in final HTML.",
          "A clear filename and relevant surrounding page content also make the asset easier to manage."
        ]
      },
      {
        heading: "Verify privacy and metadata",
        body: [
          "Review visible details and browser-readable metadata before publishing personal or sensitive photos.",
          "For high-risk situations, use dedicated privacy tools and verify the final exported file."
        ]
      }
    ],
    takeaway:
      "A complete image publishing workflow checks destination, dimensions, weight, format, filename, alt text and privacy before upload."
  },
  {
    slug: "open-graph-image-best-practices",
    title: "Open Graph Image Best Practices for Better Link Previews",
    description:
      "Prepare Open Graph images with practical dimensions, safe crop areas, readable text and lightweight exports.",
    intro:
      "Open Graph images shape how a page looks when it is shared. A poor crop, heavy file or unreadable text can make a useful page look unfinished in previews.",
    sections: [
      {
        heading: "Use a dedicated preview image",
        body: [
          "Important pages usually deserve a dedicated Open Graph image instead of relying on a random inline image.",
          "A dedicated preview gives you more control over crop, focal point, text size and brand consistency."
        ]
      },
      {
        heading: "Keep the crop safe",
        body: [
          "A common target is 1200 x 630 pixels, but preview surfaces can still vary across apps.",
          "Keep faces, products, logos and text away from the extreme edges so important content is not hidden."
        ]
      },
      {
        heading: "Balance size and quality",
        body: [
          "A preview image should be clear, but it does not need to be an oversized camera original.",
          "Compress the file and inspect small text, gradients and edges before publishing."
        ]
      },
      {
        heading: "Match page metadata",
        body: [
          "The image works best when the page title, description and visual message all point in the same direction.",
          "After publishing, test the final URL in the platforms or tools that matter for the campaign."
        ]
      }
    ],
    takeaway:
      "A strong Open Graph image is a dedicated, lightweight, wide preview with centered important content and matching page metadata."
  },
  {
    slug: "youtube-thumbnail-image-guide",
    title: "YouTube Thumbnail Image Guide for Clearer Video Previews",
    description:
      "Prepare YouTube thumbnail images with practical dimensions, readable text, safe areas and focused visual composition.",
    intro:
      "A thumbnail has to communicate quickly at small sizes. The best technical export will still underperform visually if the focal point, contrast or text is unclear.",
    sections: [
      {
        heading: "Start with the 16:9 frame",
        body: [
          "A common practical thumbnail target is 1280 x 720 pixels. This gives a wide frame that works across many video surfaces.",
          "Use a source image with enough detail so the export remains sharp after resizing and compression."
        ]
      },
      {
        heading: "Make the focal point obvious",
        body: [
          "Faces, products, outcomes or key visual subjects should be recognizable even when the thumbnail is small.",
          "Avoid cluttered backgrounds and tiny details that disappear in mobile feeds."
        ]
      },
      {
        heading: "Use text carefully",
        body: [
          "If you include text, keep it short, large and high contrast. More words usually make the design weaker at thumbnail size.",
          "Leave breathing room around text and avoid putting key words at the extreme edges."
        ]
      },
      {
        heading: "Export a dedicated file",
        body: [
          "A random video frame can work, but important videos usually benefit from a designed thumbnail image.",
          "Check dimensions, file size and format before uploading the final asset."
        ]
      }
    ],
    takeaway:
      "A useful YouTube thumbnail combines a 16:9 export, clear focal point, readable text and a file that is light enough to upload smoothly."
  },
  {
    slug: "website-image-performance-checklist",
    title: "Website Image Performance Checklist",
    description:
      "Improve page speed by reviewing image dimensions, file size, format, responsive delivery and publishing workflow.",
    intro:
      "Images often carry the biggest avoidable weight on a page. A practical performance workflow starts before upload and continues through responsive delivery.",
    sections: [
      {
        heading: "Resize to the layout",
        body: [
          "Do not upload a huge original when the final layout needs a much smaller image. Resize the publishing copy to a realistic maximum.",
          "Hero images may need more width than article thumbnails, but every placement should have a reason for its dimensions."
        ]
      },
      {
        heading: "Choose the right format",
        body: [
          "WebP is often useful for modern sites, JPEG remains practical for photos and PNG is useful for transparency or crisp graphics.",
          "The right format depends on content, transparency needs and compatibility requirements."
        ]
      },
      {
        heading: "Compress carefully",
        body: [
          "Compression should reduce weight without destroying important visual information.",
          "Inspect text, product details, faces and gradients after export because those areas reveal quality loss quickly."
        ]
      },
      {
        heading: "Plan responsive delivery",
        body: [
          "The file you prepare is only part of the performance story. Production sites should still use responsive image markup, caching and appropriate loading behavior.",
          "A clean source asset makes those downstream optimizations easier."
        ]
      }
    ],
    takeaway:
      "Website image performance improves when dimensions, format, compression and responsive delivery are planned together."
  }
];

export function getGuide(slug: string): Guide | undefined {
  return GUIDES.find((guide) => guide.slug === slug);
}
