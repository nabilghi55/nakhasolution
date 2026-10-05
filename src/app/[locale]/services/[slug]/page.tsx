/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DetailHero from "@/components/detail/DetailHero";
import CctvCatalog, { type CatalogData } from "@/components/sections/CctvCatalog";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

interface ServiceItem {
  title: string;
  desc: string;
  slug: string;
  image: string;
  features: string[];
  detail?: {
    benefitTitle: string;
    benefitIntro: string;
    typesLabel: string;
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
  catalog?: CatalogData;
}

export default function ServiceDetailPage() {
  const t = useTranslations("Services");
  const infoT = useTranslations("ContactInfo");
  const params = useParams();
  const slug = params.slug as string;
  const services = t.raw("items") as Record<string, ServiceItem>;
  const serviceEntries = Object.entries(services);
  const serviceEntry = serviceEntries.find(([, item]) => item.slug === slug);
  const service = serviceEntry?.[1];

  if (!service) {
    return (
      <div className="detail-not-found">
        <div>
          <p className="detail-eyebrow">NAKHA SOLUTION / 404</p>
          <h1>Service not found.</h1>
          <a href="/#services" className="detail-secondary-link">
            {t("backToHome")}
          </a>
        </div>
      </div>
    );
  }

  const whatsappUrl = buildWhatsAppLink(
    infoT("phone"),
    `Halo Nakha Solution, saya ingin membahas layanan ${service.title}.`,
  );
  const faqIndex = service.catalog ? "04" : "03";
  const ctaIndex = service.catalog ? "05" : service.detail ? "04" : "02";

  const handleWhatsAppClick = () => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead", {
        content_name: `WhatsApp Inquiry for ${service.title}`,
        content_category: "Service Detail Page",
      });
    }
  };

  return (
    <div className="detail-page">
      <Navbar />
      <main className="detail-main">
        <DetailHero
          index={`SERVICE / ${String((serviceEntry && serviceEntries.indexOf(serviceEntry) + 1) || 1).padStart(2, "0")}`}
          eyebrow={t("badge")}
          title={service.title}
          description={service.desc}
          image={service.image}
          imageAlt={service.title}
          mediaLabel={`${service.title} / service system`}
          backHref="/#services"
          backLabel={t("backToHome")}
        />

        <section className="detail-section">
          <div className="detail-shell">
            <div className="detail-section-head">
              <p className="detail-kicker">01 / SCOPE</p>
              <div>
                <h2>{service.detail?.benefitTitle ?? t("whyChoose")}</h2>
                <p>{service.detail?.benefitIntro ?? service.desc}</p>
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
          </div>
        </section>

        {service.detail ? (
          <section className="detail-section detail-product-section">
            <div className="detail-shell">
              <div className="detail-section-head">
                <p className="detail-kicker">02 / {service.detail.typesLabel}</p>
                <div>
                  <h2>{service.detail.typesTitle}</h2>
                  <p>{service.detail.typesIntro}</p>
                </div>
              </div>

              <div className="detail-type-list">
                {service.detail.types.map((type, index) => (
                  <div className="detail-type-row" key={type}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <h3>{type}</h3>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        {service.catalog ? <CctvCatalog catalog={service.catalog} /> : null}

        {service.detail ? (
          <section className="detail-section detail-faq-section">
            <div className="detail-shell detail-faq-layout">
              <div className="detail-faq-intro">
                <p className="detail-kicker">{faqIndex} / FAQ</p>
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
        ) : null}

        <section className="detail-cta-band">
          <div className="detail-shell detail-cta-layout">
            <div>
              <p className="detail-kicker">
                {ctaIndex} / NEXT CONVERSATION
              </p>
              <h2>{service.detail?.ctaTitle ?? t("consultTitle")}</h2>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="detail-cta-link"
            >
              <WhatsAppIcon size={17} />
              {service.detail?.ctaText ?? t("cta")}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
