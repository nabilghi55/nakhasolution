# SEO setup: nakhasolution.id

## Domain canonical

- Production domain: `https://www.nakhasolution.id` (HTTPS, www). Set in `src/config/site.ts` (`siteConfig.url`).
- The apex `nakhasolution.id` redirects to `www` through Vercel > Settings > Domains (www is the primary domain). Do not add a host redirect in `next.config.ts`: the opposite direction would create a redirect loop. If the primary domain is ever switched to the apex, change `siteConfig.url` in the same deploy.
- Every page sets its own canonical, hreflang, Open Graph, and Twitter tags through `buildPageMetadata` in `src/lib/seo.ts`. The root layout deliberately sets no canonical, so no page inherits the homepage canonical.

## Languages and URLs

- Indonesian is the default and lives at `/` (e.g. `/services/cctv`). English lives under `/en` (e.g. `/en/services/cctv`). Configured in `src/i18n/routing.ts` (`localePrefix: 'as-needed'`, `localeDetection: false`).
- Pages that exist in both languages emit `hreflang="id"`, `hreflang="en"`, and `x-default` (Indonesian).
- Indonesian-only pages (the three POS/stock pages and articles) emit only `id` + `x-default`. Their `/en/...` URL redirects (308) to the Indonesian URL.
- `/id/...` URLs redirect to the unprefixed URL. Internal links never point at `/id/...`.

## Crawl files

| URL | Source |
| --- | --- |
| https://www.nakhasolution.id/robots.txt | `src/app/robots.ts` |
| https://www.nakhasolution.id/sitemap.xml | `src/app/sitemap.ts` |
| https://www.nakhasolution.id/manifest.webmanifest | `src/app/manifest.ts` (the web app manifest; linked automatically) |

- The sitemap lists every public page once per language, with hreflang alternates for bilingual pages. New service slugs, portfolio slugs, or published articles must be added to the lists in `src/app/sitemap.ts` (POS pages and articles are picked up from `src/content/`).
- Non-production builds are not indexable: on Vercel only `VERCEL_ENV=production` gets `index, follow`; preview/development deployments get `noindex, nofollow` and a `Disallow: /` robots.txt. On other hosts set `SITE_NOINDEX=1` for staging.

## Structured data (JSON-LD)

Rendered with `src/components/seo/JsonLd.tsx`, which escapes `<`, `>`, `&`, U+2028 and U+2029 so string content cannot break out of the script tag. Builders are in `src/lib/schema.ts`.

| Page | Types |
| --- | --- |
| Homepage (`/`, `/en`) | `Organization`, `ProfessionalService` (city-level address, `areaServed` Padang + Sumatera Barat), `WebSite` |
| `/jasa-aplikasi-kasir-padang`, `/aplikasi-pos-konter-hp-padang`, `/sistem-manajemen-stok-padang` | `Service`, `FAQPage` (same questions as the visible FAQ), `BreadcrumbList` |
| `/services/<slug>` | `Service` |
| `/artikel/<slug>` (published only) | `Article` |

Not used on purpose: `AggregateRating`, `Review`, street address, employee counts, project counts. Add them only with verified data.

Validate after deploy: https://search.google.com/test/rich-results and https://validator.schema.org/

## Favicon and icons

All in `public/`, registered in `metadata.icons` in `src/app/[locale]/layout.tsx`:

| File | Size | Use |
| --- | --- | --- |
| `favicon.ico` | 16, 32, 48 | Browser tab, legacy |
| `icon.svg` | vector | Modern browsers |
| `icon-32.png` | 32x32 | Tab fallback |
| `icon-192.png`, `icon-512.png` | 192, 512 | Manifest, Google |
| `icon-maskable-512.png` | 512 | Android maskable |
| `apple-touch-icon.png` | 180x180 | iOS home screen |
| `og/nakha-default.png` | 1200x630 | Fallback Open Graph / Twitter image |
| `assets/nakha-mark.svg` | vector | Navy cloud/NNS mark (traced from `assets/logoblack.png`) |

The icons use the cloud/NNS symbol traced from `public/assets/logoblack.png`, in white with thickened strokes on a solid Nakha blue (`#2563eb`) tile, so it stays legible on light and dark tab strips. If the owner supplies an official vector logo, regenerate the icons from it.

## Environment variables

See `.env.example`.

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_WHATSAPP_NUMBER` | WhatsApp number for every CTA and for structured data. Falls back to the number in `src/config/site.ts`. |
| `GOOGLE_SITE_VERIFICATION` | Content of the Google Search Console HTML-tag verification. |
| `BING_SITE_VERIFICATION` | Content of the Bing `msvalidate.01` tag. |
| `SITE_NOINDEX` | `1` forces noindex on non-Vercel staging hosts. |

## Analytics events

`src/lib/analytics.ts` sends events to the GA4 tag and Meta Pixel already loaded in the layout:

- `view_service`: service pages (POS pages and `/services/*`), with `service`
- `click_whatsapp`: every WhatsApp CTA, with `source_page` and `placement`
- `submit_consultation`: contact form submit
- `view_portfolio`: portfolio detail pages

In GA4, mark `click_whatsapp` and `submit_consultation` as key events, and register `source_page`, `placement`, and `service` as custom dimensions.

## Manual steps after deploy

### Google Search Console

1. Add a **Domain** property for `nakhasolution.id` (DNS TXT verification covers http/https and www), or a URL-prefix property for `https://www.nakhasolution.id/` using the HTML tag (put the content value in `GOOGLE_SITE_VERIFICATION` and redeploy).
2. Sitemaps > submit `https://www.nakhasolution.id/sitemap.xml`.
3. URL Inspection > request indexing for `/`, `/jasa-aplikasi-kasir-padang`, `/aplikasi-pos-konter-hp-padang`, `/sistem-manajemen-stok-padang`.
4. Check Pages > "Why pages aren't indexed" weekly for the first month. The old `nakhasolution.com` property, if any, should point visitors to the new domain with 301 redirects.

### Bing Webmaster Tools

1. Sign in at https://www.bing.com/webmasters and use **Import from Google Search Console**, or add the site and verify with the `msvalidate.01` meta tag (`BING_SITE_VERIFICATION`) or DNS.
2. Sitemaps > submit `https://www.nakhasolution.id/sitemap.xml`.
3. Optional: enable IndexNow later if content is published frequently.

### Outside the website

- Complete and verify the Google Business Profile with the same name, phone, URL, and service area.
- Keep name, number, URL, and service area identical on Instagram, TikTok, LinkedIn, and directories.
