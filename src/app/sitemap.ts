import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://nakhasolution.com'; // Change to your actual domain
  const locales = ['en', 'id'];
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
  ];

  const routes = ['', '/#about', '/#services', '/#portfolio', '/#contact'];

  const sitemapEntries: MetadataRoute.Sitemap = [];

  // Static Routes
  routes.forEach((route) => {
    sitemapEntries.push({
      url: `${baseUrl}${route}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: route === '' ? 1 : 0.8,
    });
  });

  // Service Routes
  services.forEach((slug) => {
    sitemapEntries.push({
      url: `${baseUrl}/services/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    });
  });

  // Portfolio Routes
  portfolios.forEach((slug) => {
    sitemapEntries.push({
      url: `${baseUrl}/portfolio/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.6,
    });
  });

  return sitemapEntries;
}
