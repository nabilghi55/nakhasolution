"use client";

import { useLocale } from "next-intl";
import { Link } from "@/i18n/routing";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DetailSignalRail from "@/components/detail/DetailSignalRail";
import TebakSkorDemo from "@/components/sections/TebakSkorDemo";

export default function TebakSkorDemoPage() {
  const isEnglish = useLocale() === "en";
  return (
    <div className="demo-page">
      <Navbar />
      <main className="demo-main">
        <div className="detail-standalone-signal">
          <DetailSignalRail start="LOCAL" end="DEMO" labels={["INPUT", "RULE", "RESULT"]} />
        </div>
        <div className="detail-shell">
          <div className="demo-breadcrumb">
            <Link href="/services/campaign-activation" className="detail-back-link">
              <span aria-hidden="true">←</span>
              {isEnglish ? "Back to campaign system" : "Kembali ke sistem campaign"}
            </Link>
          </div>
          <div className="demo-heading">
            <div>
              <p className="detail-eyebrow">CAMPAIGN TOOL / 02</p>
              <h1>{isEnglish ? "Score Prediction" : "Tebak Skor"}</h1>
            </div>
            <p>{isEnglish ? "A local simulation of a score prediction flow. Sample matches stay in the browser and are never submitted." : "Simulasi lokal alur tebak skor. Pertandingan contoh hanya tersimpan di browser dan tidak dikirim."}</p>
          </div>
          <TebakSkorDemo />
        </div>
      </main>
      <Footer />
    </div>
  );
}
