import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig: NextConfig = {
  turbopack: {
    root: ".",
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
