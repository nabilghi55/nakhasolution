// Single source for brand, domain, and contact data used by metadata, JSON-LD, and CTAs.
// Values marked TODO need confirmation from the owner before they can be published.

const DEFAULT_WHATSAPP = "081166016611";

export const siteConfig = {
  name: "Nakha Solution",
  // TODO(owner): add the registered legal entity name (e.g. "PT ...") once confirmed.
  legalName: undefined as string | undefined,
  // Matches the primary domain in Vercel (apex redirects to www there).
  url: "https://www.nakhasolution.id",
  email: "nakhasolution@gmail.com",
  // Override per environment with NEXT_PUBLIC_WHATSAPP_NUMBER (local format 08... or 62...).
  whatsappNumber: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || DEFAULT_WHATSAPP,
  locality: "Padang",
  region: "Sumatera Barat",
  country: "ID",
  // Profiles already linked from the footer. TODO(owner): confirm both are active and add LinkedIn/Google Business Profile.
  socialProfiles: [
    "https://instagram.com/nakha.solution",
    "https://tiktok.com/@nakha.solution",
  ],
  logo: "/icon-512.png",
  ogImage: "/og/nakha-default.png",
  themeColor: "#0f172a",
} as const;

/**
 * Only the production deployment may be indexed. Vercel preview/development builds
 * and any build with SITE_NOINDEX=1 get `noindex` and a blocking robots.txt.
 */
export const isIndexable =
  process.env.SITE_NOINDEX !== "1" &&
  (process.env.VERCEL_ENV
    ? process.env.VERCEL_ENV === "production"
    : process.env.NODE_ENV === "production");

export function absoluteUrl(path = "/") {
  return new URL(path, siteConfig.url).toString();
}
