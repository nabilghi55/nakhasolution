import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, IBM_Plex_Sans } from "next/font/google";
import "../globals.css";
import "../detail.css";
import "../pos.css";
import Script from "next/script";
import { isIndexable, siteConfig } from "@/config/site";

import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const plexSans = IBM_Plex_Sans({
  variable: "--font-plex-sans",
  subsets: ["latin"],
  weight: "variable",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

// Site-wide defaults. Canonical, hreflang, and Open Graph URLs are set per page
// (see buildPageMetadata) so no page inherits the homepage canonical by accident.
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  applicationName: siteConfig.name,
  title: "Nakha Solution | Software House & Solusi Digital di Padang",
  description:
    "Nakha Solution membantu bisnis di Padang dan Sumatera Barat membangun aplikasi kasir, POS, manajemen stok, website, dan sistem operasional custom.",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/icon-32.png", type: "image/png", sizes: "32x32" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    siteName: siteConfig.name,
    type: "website",
    locale: "id_ID",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "Nakha Solution, Padang" }],
  },
  twitter: { card: "summary_large_image", images: [siteConfig.ogImage] },
  robots: isIndexable
    ? { index: true, follow: true }
    : { index: false, follow: false, googleBot: { index: false, follow: false } },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || undefined,
    other: process.env.BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.BING_SITE_VERIFICATION }
      : undefined,
  },
  formatDetection: { telephone: false },
};

export const viewport: Viewport = {
  themeColor: siteConfig.themeColor,
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
  setRequestLocale(locale);
 
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      className={`${plexSans.variable} ${plexMono.variable} h-full antialiased`}
      data-scroll-behavior="smooth"
    >
      <head>
        {/* Google tag (gtag.js) */}
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-TTC32H0WWN"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-TTC32H0WWN');
          `}
        </Script>
        {/* Meta Pixel Code */}
        <Script id="meta-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '993394493396680');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body className="min-h-full flex flex-col font-sans">
        {/* Meta Pixel NoScript */}
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img 
            height="1" 
            width="1" 
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=993394493396680&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        <NextIntlClientProvider messages={messages}>
          {children}
          <WhatsAppButton />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
