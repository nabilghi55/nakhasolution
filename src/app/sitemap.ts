import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/config/site';
import { localizedPath, type Locale } from '@/lib/seo';
import { routing } from '@/i18n/routing';
import { posPageList } from '@/content/pos-pages';
import { publishedArticles } from '@/content/articles';

type Entry = {
  path: string;
  locales: readonly Locale[];
  priority: number;
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]['changeFrequency']>;
  lastModified?: string;
};

const services = [
  'cctv',
  'digital-marketing',
  'device-bundling',
  'campaign-activation',
  'web-development',
  'business-application',
];
const portfolios = [
  'raya-law-firm',
  'putra-wijaya-mandiri',
  'alfajr-umroh',
  'justitia-law-firm',
];

const bothLocales = routing.locales;

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: Entry[] = [
    { path: '/', locales: bothLocales, priority: 1, changeFrequency: 'weekly' },
    // Indonesian-only service pages for the Padang market.
    ...posPageList.map((page) => ({
      path: page.path,
      locales: ['id'] as const,
      priority: 0.9,
      changeFrequency: 'monthly' as const,
      lastModified: page.updatedAt,
    })),
    ...services.map((slug) => ({
      path: `/services/${slug}`,
      locales: bothLocales,
      priority: 0.7,
      changeFrequency: 'monthly' as const,
    })),
    { path: '/services/campaign-activation/instagram-picker', locales: bothLocales, priority: 0.4, changeFrequency: 'yearly' },
    { path: '/services/campaign-activation/tebak-skor', locales: bothLocales, priority: 0.4, changeFrequency: 'yearly' },
    ...portfolios.map((slug) => ({
      path: `/portfolio/${slug}`,
      locales: bothLocales,
      priority: 0.6,
      changeFrequency: 'monthly' as const,
    })),
    ...publishedArticles().map((article) => ({
      path: `/artikel/${article.slug}`,
      locales: ['id'] as const,
      priority: 0.6,
      changeFrequency: 'monthly' as const,
      lastModified: article.updatedAt,
    })),
    { path: '/privacy-policy', locales: bothLocales, priority: 0.2, changeFrequency: 'yearly' },
    { path: '/terms-of-service', locales: bothLocales, priority: 0.2, changeFrequency: 'yearly' },
  ];

  // One <url> per language version, each listing all its alternates (required for valid hreflang).
  return entries.flatMap((entry) => {
    const languages =
      entry.locales.length > 1
        ? Object.fromEntries(entry.locales.map((locale) => [locale, absoluteUrl(localizedPath(entry.path, locale))]))
        : undefined;

    return entry.locales.map((locale) => ({
      url: absoluteUrl(localizedPath(entry.path, locale)),
      ...(entry.lastModified ? { lastModified: entry.lastModified } : {}),
      changeFrequency: entry.changeFrequency,
      priority: entry.priority,
      ...(languages ? { alternates: { languages } } : {}),
    }));
  });
}
