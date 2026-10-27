import type { MetadataRoute } from 'next';
import { absoluteUrl, isIndexable } from '@/config/site';

export default function robots(): MetadataRoute.Robots {
  // Preview and staging builds must never be crawled as if they were production.
  if (!isIndexable) {
    return { rules: { userAgent: '*', disallow: '/' } };
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: absoluteUrl('/sitemap.xml'),
  };
}
