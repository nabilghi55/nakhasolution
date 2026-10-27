import type { ReactNode } from "react";
import type { Metadata } from "next";
import { permanentRedirect } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import TrackView from "@/components/analytics/TrackView";
import MobileCtaBar from "@/components/pos/MobileCtaBar";
import { PosHero } from "@/components/pos/PosSections";
import type { PosPageContent } from "@/content/pos-pages";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

/** These pages target Indonesian searches in Padang and exist only in Indonesian. */
export function posPageMetadata(page: PosPageContent): Metadata {
  return buildPageMetadata({
    locale: "id",
    path: page.path,
    title: page.seo.title,
    description: page.seo.description,
    locales: ["id"],
  });
}

/** /en/<slug> has no English version, so it points permanently to the Indonesian page. */
export function ensureIndonesian(locale: string, page: PosPageContent) {
  if (locale !== "id") permanentRedirect(page.path);
}

export default function PosPageShell({ page, children }: { page: PosPageContent; children: ReactNode }) {
  return (
    <div className="detail-page pos-page">
      <JsonLd
        data={[
          serviceSchema({
            name: page.schema.name,
            serviceType: page.schema.serviceType,
            description: page.seo.description,
            path: page.path,
            audience: page.schema.audience,
          }),
          faqSchema(page.faq),
          breadcrumbSchema([
            { name: "Beranda", path: "/" },
            { name: "Layanan", path: "/#services" },
            { name: page.navLabel, path: page.path },
          ]),
        ]}
      />
      <TrackView event="view_service" params={{ service: page.key, source_page: page.path }} />
      <Navbar />
      <main className="detail-main pos-main">
        <PosHero page={page} />
        {children}
      </main>
      <Footer />
      <MobileCtaBar message={page.whatsappMessage} source={page.path} hideWhenVisible={["pos-title", "konsultasi"]} />
    </div>
  );
}
