export const SITE_NAME = "ImageReady Tools";
export const SITE_TAGLINE = "Make every image ready to publish.";
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://imagereadytools.example";
export const CONTACT_EMAIL = "hello@imagereadytools.example";
export const ADSENSE_PLACEHOLDER_ID = "pub-XXXXXXXXXXXXXXXX";

export const MAX_RECOMMENDED_FILE_SIZE = 15 * 1024 * 1024;

export const SUPPORTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/gif",
  "image/svg+xml"
];

export const NAV_LINKS = [
  { href: "/smart-image-publish-check", label: "Smart Check" },
  { href: "/compress-image", label: "Compress" },
  { href: "/resize-image", label: "Resize" },
  { href: "/convert-image", label: "Convert" },
  { href: "/social-media-image-sizes", label: "Sizes" }
];

export const LEGAL_LINKS = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" },
  { href: "/cookie-policy", label: "Cookie Policy" },
  { href: "/disclaimer", label: "Disclaimer" }
];

export const TRUST_BADGES = [
  "Browser-based analysis",
  "No signup required",
  "Free image utility",
  "Privacy-first workflow"
];

export const SOCIAL_SIZE_ROWS = [
  {
    platform: "Open Graph",
    use: "Article or website preview",
    size: "1200 x 630 px",
    ratio: "1.91:1",
    note: "Keep important content centered and use JPG or PNG when sharing compatibility matters."
  },
  {
    platform: "Google Discover",
    use: "Large article image",
    size: "1200 px wide or larger",
    ratio: "16:9 commonly used",
    note: "Use high-quality imagery and compress carefully to balance quality and speed."
  },
  {
    platform: "YouTube",
    use: "Video thumbnail",
    size: "1280 x 720 px",
    ratio: "16:9",
    note: "Leave safe space around text and faces because overlays may cover edges."
  },
  {
    platform: "Instagram",
    use: "Square post",
    size: "1080 x 1080 px",
    ratio: "1:1",
    note: "Works well for grid consistency and product-focused images."
  },
  {
    platform: "Instagram",
    use: "Portrait post",
    size: "1080 x 1350 px",
    ratio: "4:5",
    note: "Often gives more vertical space in the feed."
  },
  {
    platform: "Instagram",
    use: "Story or vertical creative",
    size: "1080 x 1920 px",
    ratio: "9:16",
    note: "Keep key content away from top and bottom UI areas."
  },
  {
    platform: "LinkedIn",
    use: "Feed image",
    size: "1200 x 627 px",
    ratio: "1.91:1",
    note: "Use a clear focal area and avoid tiny text."
  },
  {
    platform: "Pinterest",
    use: "Standard pin",
    size: "1000 x 1500 px",
    ratio: "2:3",
    note: "Tall images usually provide more room for detail."
  },
  {
    platform: "E-commerce",
    use: "Product image",
    size: "1000 x 1000 px or larger",
    ratio: "1:1",
    note: "A clean background is usually helpful, but this tool does not detect background quality."
  },
  {
    platform: "Email",
    use: "Header image",
    size: "600-1200 px wide",
    ratio: "Flexible",
    note: "Keep files lightweight for faster email loading."
  }
];
