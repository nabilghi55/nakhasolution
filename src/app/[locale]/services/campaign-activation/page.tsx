"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DetailHero from "@/components/detail/DetailHero";
import { buildWhatsAppLink } from "@/lib/whatsapp";

export default function CampaignActivationLanding() {
  const locale = useLocale();
  const t = useTranslations("Services");
  const infoT = useTranslations("ContactInfo");
  const service = t.raw("items.campaign-activation") as {
    title: string;
    desc: string;
    image: string;
    features: string[];
  };
  const isEnglish = locale === "en";
  const copy = isEnglish
    ? {
        eyebrow: "Campaign system",
        productsTitle: "Choose the interaction your campaign needs.",
        productsDesc: "Two focused demos show how the system can support a campaign brief without pretending to be live production data.",
        useTitle: "Built around the campaign brief.",
        useDesc: "The same structure can be adapted for a giveaway, a score prediction, or an audience interaction flow.",
        useCases: ["Giveaway and comment selection", "Score prediction and points", "Audience registration", "Campaign result summary"],
        demo: "Open demo",
        talk: "Discuss this system",
      }
    : {
        eyebrow: "Sistem campaign",
        productsTitle: "Pilih interaksi yang dibutuhkan campaign Anda.",
        productsDesc: "Dua demo terarah memperlihatkan alur sistem tanpa menyamar sebagai data produksi yang sedang berjalan.",
        useTitle: "Dibangun dari brief campaign.",
        useDesc: "Struktur yang sama dapat disesuaikan untuk giveaway, tebak skor, atau alur interaksi audiens.",
        useCases: ["Giveaway dan pemilihan komentar", "Tebak skor dan akumulasi poin", "Registrasi audiens", "Ringkasan hasil campaign"],
        demo: "Buka demo",
        talk: "Diskusikan sistem ini",
      };
  const whatsapp = buildWhatsAppLink(infoT("phone"), isEnglish
    ? "Hello Nakha Solution, I want to discuss a campaign activation system."
    : "Halo Nakha Solution, saya ingin membahas sistem campaign activation.");

  const products = isEnglish
    ? [
        { title: "Instagram Comment Picker", description: "A guided flow for importing a sample comment set, applying a campaign rule, and selecting a winner.", features: ["Comment filtering", "Draw flow", "Result handoff"], href: "/services/campaign-activation/instagram-picker" },
        { title: "Score Prediction", description: "A score-entry flow that shows how participant predictions can be collected and calculated for a campaign.", features: ["Prediction form", "Participant details", "Points calculation"], href: "/services/campaign-activation/tebak-skor" },
      ]
    : [
        { title: "Instagram Comment Picker", description: "Alur untuk memuat contoh komentar, menerapkan aturan campaign, lalu memilih pemenang.", features: ["Filter komentar", "Alur undian", "Handoff hasil"], href: "/services/campaign-activation/instagram-picker" },
        { title: "Tebak Skor", description: "Alur input skor yang menunjukkan cara prediksi peserta dapat dikumpulkan dan dihitung.", features: ["Form prediksi", "Data peserta", "Perhitungan poin"], href: "/services/campaign-activation/tebak-skor" },
      ];

  return (
    <div className="detail-page">
      <Navbar />
      <main className="detail-main">
        <DetailHero
          index="SERVICE / 04"
          eyebrow={copy.eyebrow}
          title={service.title}
          description={service.desc}
          image={service.image}
          imageAlt={service.title}
          mediaLabel="Campaign activation / system preview"
          backHref="/#services"
          backLabel={t("backToHome")}
        />

        <section className="detail-section">
          <div className="detail-shell">
            <div className="detail-section-head">
              <p className="detail-kicker">01 / PRODUCTS</p>
              <div>
                <h2>{copy.productsTitle}</h2>
                <p>{copy.productsDesc}</p>
              </div>
            </div>
            <div className="campaign-product-list">
              {products.map((product, index) => (
                <article className="campaign-product" key={product.title}>
                  <span className="campaign-product-index">{String(index + 1).padStart(2, "0")}</span>
                  <h3>{product.title}</h3>
                  <div className="campaign-product-copy">
                    <p>{product.description}</p>
                    <div className="detail-index-list">
                      {product.features.map((feature, featureIndex) => (
                        <div className="detail-index-row" key={feature}>
                          <span>{String(featureIndex + 1).padStart(2, "0")}</span>
                          <p>{feature}</p>
                        </div>
                      ))}
                    </div>
                    <div className="campaign-product-actions">
                      <Link className="detail-secondary-link" href={product.href}>{copy.demo}</Link>
                      <a className="detail-cta-link" href={whatsapp} target="_blank" rel="noopener noreferrer">{copy.talk}</a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="detail-section">
          <div className="detail-shell">
            <div className="detail-section-head">
              <p className="detail-kicker">02 / SYSTEM NOTES</p>
              <div>
                <h2>{copy.useTitle}</h2>
                <p>{copy.useDesc}</p>
              </div>
            </div>
            <div className="detail-index-list">
              {service.features.map((feature, index) => (
                <div className="detail-index-row" key={feature}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <p>{feature}</p>
                </div>
              ))}
            </div>
            <div className="detail-notes">
              <div><h3>{copy.useTitle}</h3></div>
              <ol className="detail-notes-list">
                {copy.useCases.map((item, index) => (
                  <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="detail-cta-band">
          <div className="detail-shell detail-cta-layout">
            <div><p className="detail-kicker">03 / NEXT CONVERSATION</p><h2>{copy.talk}</h2></div>
            <a className="detail-cta-link" href={whatsapp} target="_blank" rel="noopener noreferrer">{t("cta")}</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
