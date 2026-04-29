# PublishPixel

PublishPixel is a Next.js 14 App Router web application for preparing images before publishing. The main feature is **Smart Image Publish Check**, a privacy-first browser tool that checks dimensions, aspect ratio, file size, format, estimated compression opportunity and publishing readiness for websites, SEO, social media, YouTube thumbnails, e-commerce, email headers and more.

The app is designed to run mostly in the browser. User images are not uploaded to a server, not saved by the app and not sent to external image analysis APIs.

## Stack

- Next.js 14+ with App Router
- TypeScript
- Tailwind CSS
- File API, Canvas API and `createImageBitmap`
- No required backend
- `localStorage` only for preferences such as theme, selected preset and consent

## Install

```bash
npm install
npm run dev
```

Then open `http://localhost:3000`.

On Windows PowerShell, if `npm.ps1` is blocked by execution policy, use `npm.cmd install` and `npm.cmd run dev`.

## Scripts

```bash
npm run dev        # start local development
npm run build      # production build
npm run start      # run production server after build
npm run typecheck  # TypeScript check
npm run lint       # Next.js lint
```

## Project Structure

```text
app/
  page.tsx
  smart-image-publish-check/page.tsx
  compress-image/page.tsx
  resize-image/page.tsx
  convert-image/page.tsx
  social-media-image-sizes/page.tsx
  youtube-thumbnail-checker/page.tsx
  instagram-image-checker/page.tsx
  website-image-optimizer/page.tsx
  about/page.tsx
  contact/page.tsx
  privacy-policy/page.tsx
  terms/page.tsx
  cookie-policy/page.tsx
  disclaimer/page.tsx
components/
  SmartPublishCheck.tsx
  ImageUploader.tsx
  ImagePreview.tsx
  PublishScoreCard.tsx
  ImageMetrics.tsx
  CompressionEstimator.tsx
  ResizeSuggestions.tsx
  CookieConsent.tsx
lib/
  imageAnalysis.ts
  publishRules.ts
  imageUtils.ts
  seo.ts
  constants.ts
public/
  favicon.svg
  ads.txt
```

## Branding

Brand values live mainly in:

- `lib/constants.ts`
- `components/Logo.tsx`
- `public/favicon.svg`
- `app/layout.tsx`

Update `SITE_NAME`, `SITE_TAGLINE`, contact email, colors and logo shapes there if the brand changes.

## AdSense Setup After Approval

The project is AdSense-ready but does not show fake ads.

- `components/AdSlot.tsx` contains clean, labeled ad containers.
- The visible label is exactly `Advertisement`.
- Ad slots are not placed next to upload, download, compress, resize, convert or copy buttons.
- There are no sticky aggressive ads, popups, interstitials or click incentives.

After Google AdSense approval:

1. Replace `pub-XXXXXXXXXXXXXXXX` in `public/ads.txt` with your real Google AdSense publisher ID.
2. Add approved AdSense script code only after verifying consent requirements for your target regions.
3. Insert ad unit code inside `components/AdSlot.tsx` where the comment says:

```tsx
{/* Insert Google AdSense code here only after account approval. */}
```

4. If serving UK, EU or EEA users, wire ad script loading to the preferences stored by `components/CookieConsent.tsx`.

## Optional Analytics

Analytics are not installed by default. If analytics are added later:

- Do not load non-essential analytics scripts before consent where required.
- Keep image analysis local.
- Do not send filenames or image contents as analytics events.
- Document the provider in `app/privacy-policy/page.tsx` and `app/cookie-policy/page.tsx`.

## Contact Form

The contact page uses Netlify Forms with the form name `contact`. After deploying on Netlify, go to **Forms** and add an email notification so submissions are forwarded to `hello@publishpixel.net` or your preferred inbox.

## Deploying to Vercel

1. Push the project to a Git repository.
2. Import it in Vercel.
3. Set `NEXT_PUBLIC_SITE_URL` to the production URL.
4. Run the default Next.js build command: `npm run build`.
5. Verify `/robots.txt`, `/sitemap.xml`, `/ads.txt`, legal pages and contact page after deployment.

## AdSense Application Checklist

- Original brand and content
- Useful main tool above the fold
- Contact page with visible email
- Privacy Policy, Terms, Cookie Policy and Disclaimer
- No fake ads or click incentives
- Ad slots labeled `Advertisement`
- Clear navigation and footer
- Responsive layout
- No copied text, code, assets or visual structure from other tools
- `ads.txt` placeholder replaced only after approval
- Cookie consent structure ready before loading ads or analytics

## Privacy Notes

- Images are analyzed locally in the browser.
- Images are not uploaded by this app.
- Images are not stored in localStorage.
- Exported compressed or resized files are generated locally through Canvas.
- SVG files receive basic dimension parsing and are not injected into the DOM as user HTML.

## Technical Limitations

- Scores are estimates based on common publishing guidelines.
- Platform requirements can change.
- Browser support for WebP, Canvas export and image decoding may vary.
- Canvas re-export normally removes EXIF metadata, but perfect metadata removal is not guaranteed for every browser and file.
- Animated GIF quality and frame behavior are not deeply analyzed.
- SVG analysis is intentionally basic for safety.
