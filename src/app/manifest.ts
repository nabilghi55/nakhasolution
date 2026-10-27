import type { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';

// Served at /manifest.webmanifest and linked automatically by Next.js.
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: 'Nakha',
    description:
      'Aplikasi kasir, POS, manajemen stok, website, dan sistem operasional custom untuk bisnis di Padang dan Sumatera Barat.',
    start_url: '/',
    scope: '/',
    display: 'browser',
    lang: 'id',
    background_color: '#f8fafc',
    theme_color: siteConfig.themeColor,
    icons: [
      { src: '/icon-192.png', sizes: '192x192', type: 'image/png', purpose: 'any' },
      { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any' },
      { src: '/icon-maskable-512.png', sizes: '512x512', type: 'image/png', purpose: 'maskable' },
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' },
    ],
  };
}
