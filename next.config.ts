import path from "path";
import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  turbopack: {
    root: path.resolve(__dirname),
  },
  // Production must answer only on the custom domain. Without this, *.vercel.app serves
  // a full indexable copy that search engines (and AI answers) treat as the official site.
  // Preview deployments keep their vercel.app URLs; they are noindex anyway.
  async redirects() {
    if (process.env.VERCEL_ENV !== "production") return [];
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "(?<sub>.+)\\.vercel\\.app" }],
        destination: "https://www.nakhasolution.id/:path*",
        permanent: true,
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        protocol: "https",
        hostname: "rayalawfirm.vercel.app",
      },
      {
        protocol: "https",
        hostname: "putrawijayamandiri.id",
      },
      {
        protocol: "https",
        hostname: "alfajrumroh.co.id",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
