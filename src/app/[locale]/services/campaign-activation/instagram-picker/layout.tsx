import type { ReactNode } from "react";
import type { Metadata } from "next";
import { buildPageMetadata, isLocale } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "id";
  return buildPageMetadata({
    locale,
    path: "/services/campaign-activation/instagram-picker",
    ...(locale === "id"
      ? { title: "Demo Instagram Comment Picker", description: "Coba alur memuat contoh komentar Instagram, menerapkan aturan giveaway, dan memilih pemenang." }
      : { title: "Instagram Comment Picker Demo", description: "Try the flow for loading sample Instagram comments, applying giveaway rules, and selecting a winner." }),
  });
}

export default function InstagramPickerLayout({ children }: { children: ReactNode }) {
  return children;
}
