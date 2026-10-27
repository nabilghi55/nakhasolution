import type { ReactNode } from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getTranslations } from "next-intl/server";
import TrackView from "@/components/analytics/TrackView";
import { buildPageMetadata, isLocale, type Locale } from "@/lib/seo";

type Params = Promise<{ locale: string; slug: string }>;
type ProjectItem = { title: string; slug: string; desc: string };

async function findProject(rawLocale: string, slug: string) {
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "id";
  const t = await getTranslations({ locale, namespace: "Portfolio" });
  const projects = t.raw("projects") as Record<string, ProjectItem>;
  return { locale, project: Object.values(projects).find((item) => item.slug === slug) };
}

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { locale: raw, slug } = await params;
  const { locale, project } = await findProject(raw, slug);
  if (!project) return {};
  return buildPageMetadata({
    locale,
    path: `/portfolio/${slug}`,
    title: `${project.title} | ${locale === "id" ? "Portofolio" : "Portfolio"}`,
    description: project.desc,
  });
}

export default async function PortfolioLayout({ children, params }: { children: ReactNode; params: Params }) {
  const { locale: raw, slug } = await params;
  const { project } = await findProject(raw, slug);
  if (!project) notFound();

  return (
    <>
      <TrackView event="view_portfolio" params={{ portfolio: slug }} />
      {children}
    </>
  );
}
