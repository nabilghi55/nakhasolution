import { absoluteUrl, siteConfig } from "@/config/site";
import { e164Phone } from "@/lib/whatsapp";

// Structured data builders. Only facts that already appear on the site are used:
// no ratings, reviews, street address, employee counts, or project numbers.

const ORG_ID = absoluteUrl("/#organization");
const BUSINESS_ID = absoluteUrl("/#business");
const WEBSITE_ID = absoluteUrl("/#website");

const areaServed = [
  { "@type": "City", name: siteConfig.locality },
  { "@type": "AdministrativeArea", name: siteConfig.region },
];

export function organizationGraph(description: string) {
  const logo = { "@type": "ImageObject", url: absoluteUrl(siteConfig.logo), width: 512, height: 512 };

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": ORG_ID,
        name: siteConfig.name,
        ...(siteConfig.legalName ? { legalName: siteConfig.legalName } : {}),
        url: siteConfig.url,
        logo,
        email: siteConfig.email,
        sameAs: [...siteConfig.socialProfiles],
        contactPoint: {
          "@type": "ContactPoint",
          contactType: "customer service",
          telephone: e164Phone(),
          email: siteConfig.email,
          areaServed: siteConfig.country,
          availableLanguage: ["id", "en"],
        },
      },
      {
        "@type": "ProfessionalService",
        "@id": BUSINESS_ID,
        name: siteConfig.name,
        url: siteConfig.url,
        description,
        image: absoluteUrl(siteConfig.ogImage),
        logo,
        telephone: e164Phone(),
        email: siteConfig.email,
        parentOrganization: { "@id": ORG_ID },
        // City-level only: the site does not publish a street address yet.
        address: {
          "@type": "PostalAddress",
          addressLocality: siteConfig.locality,
          addressRegion: siteConfig.region,
          addressCountry: siteConfig.country,
        },
        areaServed,
        sameAs: [...siteConfig.socialProfiles],
      },
      {
        "@type": "WebSite",
        "@id": WEBSITE_ID,
        url: siteConfig.url,
        name: siteConfig.name,
        inLanguage: ["id-ID", "en-US"],
        publisher: { "@id": ORG_ID },
      },
    ],
  };
}

interface ServiceSchemaInput {
  name: string;
  serviceType: string;
  description: string;
  path: string;
  audience?: string[];
}

export function serviceSchema({ name, serviceType, description, path, audience }: ServiceSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${absoluteUrl(path)}#service`,
    name,
    serviceType,
    description,
    url: absoluteUrl(path),
    provider: { "@id": ORG_ID, "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    areaServed,
    ...(audience?.length
      ? { audience: audience.map((audienceType) => ({ "@type": "BusinessAudience", audienceType })) }
      : {}),
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: absoluteUrl(path),
      servicePhone: { "@type": "ContactPoint", telephone: e164Phone(), contactType: "sales" },
    },
  };
}

/** Use only with questions and answers that are rendered visibly on the same page. */
export function faqSchema(items: ReadonlyArray<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}

export function breadcrumbSchema(items: ReadonlyArray<{ name: string; path: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

interface ArticleSchemaInput {
  title: string;
  description: string;
  path: string;
  datePublished: string;
  dateModified: string;
  authorName: string;
}

export function articleSchema(input: ArticleSchemaInput) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: input.title,
    description: input.description,
    mainEntityOfPage: absoluteUrl(input.path),
    datePublished: input.datePublished,
    dateModified: input.dateModified,
    inLanguage: "id-ID",
    image: absoluteUrl(siteConfig.ogImage),
    author: { "@type": "Organization", name: input.authorName, url: siteConfig.url },
    publisher: { "@id": ORG_ID, "@type": "Organization", name: siteConfig.name, logo: absoluteUrl(siteConfig.logo) },
  };
}
