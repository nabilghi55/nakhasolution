import type { Metadata } from "next";
import { routing } from "@/i18n/routing";
import { absoluteUrl, siteConfig } from "@/config/site";

export type Locale = (typeof routing.locales)[number];

const ogLocale: Record<Locale, string> = { id: "id_ID", en: "en_US" };

/** Public URL path for a locale: Indonesian has no prefix, English lives under /en. */
export function localizedPath(path: string, locale: Locale) {
  const clean = path === "/" ? "" : path;
  if (locale === routing.defaultLocale) return clean || "/";
  return `/${locale}${clean}`;
}

export function isLocale(value: string): value is Locale {
  return (routing.locales as readonly string[]).includes(value);
}

interface PageMetadataInput {
  locale: Locale;
  /** Path without locale prefix, e.g. "/jasa-aplikasi-kasir-padang". */
  path: string;
  title: string;
  description: string;
  /** Locales that really have this page. Indonesian-only pages pass ["id"]. */
  locales?: readonly Locale[];
  /** Use the title as-is instead of appending "| Nakha Solution". */
  absoluteTitle?: boolean;
  type?: "website" | "article";
  image?: { url: string; width: number; height: number; alt: string };
}

/**
 * Per-page canonical, hreflang, Open Graph, and Twitter metadata.
 * Next.js merges metadata shallowly, so every page sets its full openGraph object here.
 */
export function buildPageMetadata({
  locale,
  path,
  title,
  description,
  locales = routing.locales,
  absoluteTitle = false,
  type = "website",
  image,
}: PageMetadataInput): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${siteConfig.name}`;
  const canonical = localizedPath(path, locale);
  const languages: Record<string, string> = {};
  for (const alt of locales) languages[alt] = localizedPath(path, alt);
  if (locales.includes(routing.defaultLocale)) {
    languages["x-default"] = localizedPath(path, routing.defaultLocale);
  }
  const ogImage = image ?? {
    url: siteConfig.ogImage,
    width: 1200,
    height: 630,
    alt: `${siteConfig.name}, Padang`,
  };

  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical, languages },
    openGraph: {
      type,
      url: canonical,
      siteName: siteConfig.name,
      title: fullTitle,
      description,
      locale: ogLocale[locale],
      alternateLocale: locales.filter((l) => l !== locale).map((l) => ogLocale[l]),
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage.url],
    },
  };
}

export { absoluteUrl };
