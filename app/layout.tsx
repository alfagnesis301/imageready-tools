import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { LanguageProvider } from "@/components/LanguageProvider";
import { SITE_NAME, SITE_TAGLINE, SITE_URL } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} - Free Image Publishing Tools`,
    template: `%s | ${SITE_NAME}`
  },
  description:
    "Free privacy-first image readiness tools for websites, SEO, social media, YouTube thumbnails, e-commerce, email headers and more.",
  icons: {
    icon: "/favicon.svg"
  },
  applicationName: SITE_NAME
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#F8FAFC" },
    { media: "(prefers-color-scheme: dark)", color: "#020617" }
  ]
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const adsenseClient = process.env.NEXT_PUBLIC_ADSENSE_CLIENT;

  return (
    // `lang` arranca en "en" y LanguageProvider lo ajusta a "es" en /es al
    // hidratar. El layout raíz no puede leer la ruta (es un Server Component
    // sin params), y leerla de cabeceras volvía dinámico todo el sitio.
    // El hreflang de <head> y el sitemap siguen declarando el idioma correcto.
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen font-sans antialiased">
        {adsenseClient ? (
          // `afterInteractive` hacía que Next emitiera un <link rel="preload">
          // de alta prioridad para adsbygoogle.js, compitiendo con el render
          // inicial. `lazyOnload` lo difiere hasta que la página está ociosa.
          <Script
            id="adsense-script"
            async
            strategy="lazyOnload"
            src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${adsenseClient}`}
            crossOrigin="anonymous"
          />
        ) : null}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('irt-theme');if(t==='dark'||(!t&&matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark')}}catch(e){}"
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "PublishPixel",
              url: "https://publishpixel.net",
              logo: "https://publishpixel.net/favicon.svg",
              email: "hello@publishpixel.net",
              foundingDate: "2026"
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: "PublishPixel",
              url: "https://publishpixel.net",
              inLanguage: ["en", "es"],
              publisher: { "@type": "Organization", name: "PublishPixel" }
            })
          }}
        />
        <LanguageProvider>
          <Header />
          <main>{children}</main>
          <Footer />
          <CookieConsent />
        </LanguageProvider>
      </body>
    </html>
  );
}
