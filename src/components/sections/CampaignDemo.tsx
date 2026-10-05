"use client";

import { useLocale, useTranslations } from "next-intl";
import { useEffect, useState } from "react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

const sampleComments = ["@peserta_01", "@peserta_02", "@peserta_03", "@peserta_04", "@peserta_05", "@peserta_06", "@peserta_07", "@peserta_08"];

export default function CampaignDemo() {
  const locale = useLocale();
  const isEnglish = locale === "en";
  const t = useTranslations("ContactInfo");
  const [step, setStep] = useState<"idle" | "loading" | "filtered" | "winner">("idle");
  const [winner, setWinner] = useState(sampleComments[2]);

  useEffect(() => {
    if (step !== "loading") return;
    const timer = window.setTimeout(() => setStep("filtered"), 850);
    return () => window.clearTimeout(timer);
  }, [step]);

  const reset = () => setStep("idle");
  const drawWinner = () => {
    setWinner(sampleComments[Math.floor(Math.random() * sampleComments.length)]);
    setStep("winner");
  };
  const whatsapp = buildWhatsAppLink(
    t("phone"),
    isEnglish ? "Hello Nakha Solution, I want to discuss a comment picker system." : "Halo Nakha Solution, saya ingin membahas sistem comment picker.",
  );

  return (
    <section className="demo-frame" aria-labelledby="picker-demo-title">
      <div className="demo-frame-header">
        <span>{isEnglish ? "LOCAL SIMULATION / SAMPLE DATA" : "SIMULASI LOKAL / DATA CONTOH"}</span>
        <strong>{step === "loading" ? (isEnglish ? "Processing" : "Memproses") : (isEnglish ? "Ready" : "Siap")}</strong>
      </div>
      <div className="demo-stage">
        {step === "idle" && (
          <div className="demo-panel">
            <h2 id="picker-demo-title">{isEnglish ? "Start with sample comments." : "Mulai dari komentar contoh."}</h2>
            <p>{isEnglish ? "This flow stays in your browser. It demonstrates filtering and drawing without connecting to Instagram." : "Alur ini berjalan di browser Anda. Kita memperlihatkan filter dan undian tanpa terhubung ke Instagram."}</p>
            <div className="demo-control-row">
              <button className="demo-button" type="button" onClick={() => setStep("loading")}>
                {isEnglish ? "Load sample comments" : "Muat komentar contoh"}
              </button>
            </div>
          </div>
        )}

        {step === "loading" && (
          <div className="demo-panel" aria-live="polite">
            <h2>{isEnglish ? "Preparing the sample set." : "Menyiapkan data contoh."}</h2>
            <p>{isEnglish ? "The loading state is part of the demonstration." : "State loading ini memang bagian dari demo."}</p>
            <div className="demo-progress" aria-label={isEnglish ? "Loading sample data" : "Memuat data contoh"}><span /></div>
          </div>
        )}

        {step === "filtered" && (
          <div className="demo-panel">
            <h2>{isEnglish ? "Sample comments are ready." : "Komentar contoh sudah siap."}</h2>
            <p>{isEnglish ? "Eight placeholder handles are shown so the selection step is easy to inspect." : "Delapan username placeholder ditampilkan agar langkah pemilihan mudah diperiksa."}</p>
            <div className="demo-data-grid" aria-label={isEnglish ? "Sample comments" : "Komentar contoh"}>
              {sampleComments.map((comment) => <div className="demo-data-cell" key={comment}>{comment}</div>)}
            </div>
            <div className="demo-control-row">
              <button className="demo-button" type="button" onClick={drawWinner}>
                {isEnglish ? "Draw a sample winner" : "Undi pemenang contoh"}
              </button>
              <button className="demo-button secondary" type="button" onClick={reset}>
                {isEnglish ? "Reset" : "Ulangi"}
              </button>
            </div>
          </div>
        )}

        {step === "winner" && (
          <div className="demo-panel" aria-live="polite">
            <h2>{isEnglish ? "The sample draw is complete." : "Undian contoh selesai."}</h2>
            <p>{isEnglish ? "This result is generated locally from the placeholder set above." : "Hasil ini dibuat secara lokal dari data placeholder di atas."}</p>
            <div className="demo-result"><span className="demo-result-label">{isEnglish ? "Sample winner" : "Pemenang contoh"}</span><strong>{winner}</strong></div>
            <div className="demo-control-row">
              <button className="demo-button secondary" type="button" onClick={reset}>{isEnglish ? "Run again" : "Undi lagi"}</button>
              <a className="demo-button" href={whatsapp} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={16} />{isEnglish ? "Discuss a real setup" : "Bahas kebutuhan nyata"}</a>
            </div>
          </div>
        )}
      </div>
      <p className="demo-note">{isEnglish ? "No Instagram account, comment, participant data, or result is sent from this demo." : "Tidak ada akun Instagram, komentar, data peserta, atau hasil yang dikirim dari demo ini."}</p>
    </section>
  );
}
