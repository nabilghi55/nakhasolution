import type { ReactNode } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import JsonLd from "@/components/seo/JsonLd";
import TrackView from "@/components/analytics/TrackView";
import { buildPageMetadata, isLocale, type Locale } from "@/lib/seo";
import { serviceSchema } from "@/lib/schema";

type Params = Promise<{ locale: string; slug: string }>;
type ServiceItem = { title: string; desc: string; slug: string; summary: string };

async function findService(rawLocale: string, slug: string) {
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "id";
  const t = await getTranslations({ locale, namespace: "Services" });
  const items = t.raw("items") as Record<string, ServiceItem>;
  const service = Object.values(items).find((item) => item.slug === slug);
  return { locale, service };
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  const { locale, service } = await findService(raw, slug);
  if (!service) return {};
  const suffix = locale === "id" ? "di Padang" : "in Padang";
  return buildPageMetadata({
    locale,
    path: `/services/${slug}`,
    title: `${service.title} ${suffix}`,
    description: service.desc,
  });
}

// Server wrapper for the client detail page: real 404 status for unknown slugs,
// plus Service structured data and the view_service event.
export default async function ServiceLayout({ children, params }: { children: ReactNode; params: Params }) {
  const { locale: raw, slug } = await params;
  const { service } = await findService(raw, slug);
  if (!service) notFound();

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: service.title,
          serviceType: service.summary,
          description: service.desc,
          path: `/services/${slug}`,
        })}
      />
      <TrackView event="view_service" params={{ service: slug }} />
      {children}
    </>
  );
}
