"use client";

import { useLocale, useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DetailHero from "@/components/detail/DetailHero";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

export default function CampaignActivationLanding() {
  const locale = useLocale();
  const t = useTranslations("Services");
  const infoT = useTranslations("ContactInfo");
  const service = t.raw("items.campaign-activation") as {
    title: string;
    desc: string;
    image: string;
    features: string[];
    detail: {
      benefitTitle: string;
      benefitIntro: string;
      typesTitle: string;
      typesIntro: string;
      types: string[];
      faqTitle: string;
      faqIntro: string;
      faq: Array<{
        question: string;
        answer: string;
      }>;
      ctaTitle: string;
      ctaText: string;
    };
  };
  const isEnglish = locale === "en";
  const copy = isEnglish
    ? {
        eyebrow: "Campaign system",
        productsTitle: "Try the campaign flow before launch",
        productsDesc: "These two demos show how comments, predictions, participant details, and campaign rules move through the system.",
        demo: "Open demo",
      }
    : {
        eyebrow: "Sistem campaign",
        productsTitle: "Coba alur campaign sebelum digunakan",
        productsDesc: "Dua demo ini menunjukkan cara komentar, prediksi, data peserta, dan aturan campaign diproses dalam sistem.",
        demo: "Buka demo",
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
                      <a className="detail-cta-link" href={whatsapp} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={17} />{service.detail.ctaText}</a>
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
                <h2>{service.detail.benefitTitle}</h2>
                <p>{service.detail.benefitIntro}</p>
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
              <div>
                <h3>{service.detail.typesTitle}</h3>
                <p className="detail-meta">{service.detail.typesIntro}</p>
              </div>
              <ol className="detail-notes-list">
                {service.detail.types.map((item, index) => (
                  <li key={item}><span>{String(index + 1).padStart(2, "0")}</span><p>{item}</p></li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="detail-section detail-faq-section">
          <div className="detail-shell detail-faq-layout">
            <div className="detail-faq-intro">
              <p className="detail-kicker">03 / FAQ</p>
              <h2>{service.detail.faqTitle}</h2>
              <p>{service.detail.faqIntro}</p>
            </div>
            <div className="detail-faq-list">
              {service.detail.faq.map((item, index) => (
                <details className="detail-faq-item" key={item.question}>
                  <summary>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <strong>{item.question}</strong>
                  </summary>
                  <p>{item.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="detail-cta-band">
          <div className="detail-shell detail-cta-layout">
            <div><p className="detail-kicker">04 / NEXT CONVERSATION</p><h2>{service.detail.ctaTitle}</h2></div>
            <a className="detail-cta-link" href={whatsapp} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={17} />{service.detail.ctaText}</a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
