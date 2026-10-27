import type { ReactNode } from "react";
import type { Metadata } from "next";
import { buildPageMetadata, isLocale } from "@/lib/seo";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "id";
  return buildPageMetadata({
    locale,
    path: "/services/campaign-activation/tebak-skor",
    ...(locale === "id"
      ? { title: "Demo Tebak Skor untuk Campaign", description: "Coba alur tebak skor: formulir prediksi, data peserta, dan perhitungan poin untuk campaign brand." }
      : { title: "Score Prediction Campaign Demo", description: "Try the score prediction flow: prediction form, participant details, and points calculation for a brand campaign." }),
  });
}

export default function TebakSkorLayout({ children }: { children: ReactNode }) {
  return children;
}
