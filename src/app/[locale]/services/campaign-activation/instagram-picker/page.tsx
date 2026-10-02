"use client";

import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import CampaignDemo from "@/components/sections/CampaignDemo";

export default function InstagramPickerDemoPage() {
  const isEnglish = useLocale() === "en";
  return (
    <div className="demo-page">
      <Navbar />
      <main className="demo-main">
        <div className="detail-shell">
          <div className="demo-breadcrumb">
            <Link href="/services/campaign-activation" className="detail-back-link">
              <span aria-hidden="true">←</span>
              {isEnglish ? "Back to campaign system" : "Kembali ke sistem campaign"}
            </Link>
          </div>
          <div className="demo-heading">
            <h1>{isEnglish ? "Instagram Comment Picker" : "Instagram Comment Picker"}</h1>
            <p>{isEnglish ? "A local simulation that demonstrates the selection flow with sample data. No Instagram request is sent." : "Simulasi lokal untuk memperlihatkan alur pemilihan dengan data contoh. Tidak ada request Instagram yang dikirim."}</p>
          </div>
          <CampaignDemo />
        </div>
      </main>
      <Footer />
    </div>
  );
}
