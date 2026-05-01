import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import CookieConsent from "@/components/CookieConsent";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
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
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen font-sans antialiased">
        {adsenseClient ? (
          <Script
            id="adsense-script"
            async
            strategy="afterInteractive"
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
        <Header />
        <main>{children}</main>
        <Footer />
        <CookieConsent />
      </body>
    </html>
  );
}
