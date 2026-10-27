import type { ReactNode } from "react";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import TrackView from "@/components/analytics/TrackView";
import { buildPageMetadata, isLocale } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "id";
  const t = await getTranslations({ locale, namespace: "Services" });
  return buildPageMetadata({
    locale,
    path: "/services/campaign-activation",
    title: t("items.campaign-activation.title"),
    description: t("items.campaign-activation.desc"),
  });
}

export default function CampaignActivationLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <TrackView event="view_service" params={{ service: "campaign-activation" }} />
      {children}
    </>
  );
}
