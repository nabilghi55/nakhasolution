"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const Hero = () => {
  const t = useTranslations("Hero");
  const portfolioT = useTranslations("Portfolio");
  const infoT = useTranslations("ContactInfo");

  const handleWhatsAppClick = () => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead", {
        content_name: "WhatsApp Inquiry from Hero",
        content_category: "Hero Section",
      });
    }
  };

  return (
    <section id="home" className="hero-section" aria-labelledby="hero-title">
      <div className="hero-grid" aria-hidden="true" />

      <div className="section-shell">
        <div className="hero-rail technical-label" aria-hidden="true">
          <span>Padang / Sumatra</span>
          <span className="rail-track" />
          <span>System partner / 2026</span>
        </div>

        <div className="hero-system-stage">
          <svg
            className="hero-connectors"
            viewBox="0 0 1200 430"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <path d="M0 95 H330 C400 95 405 165 480 188" fill="none" stroke="#aaa69d" strokeWidth="1" />
            <path d="M1200 95 H870 C800 95 795 165 720 188" fill="none" stroke="#aaa69d" strokeWidth="1" />
            <path d="M0 342 H330 C400 342 405 272 480 242" fill="none" stroke="#aaa69d" strokeWidth="1" />
            <path d="M1200 342 H870 C800 342 795 272 720 242" fill="none" stroke="#aaa69d" strokeWidth="1" />
            <path d="M365 95 C418 95 423 162 480 188" fill="none" stroke="#cf4b32" strokeWidth="2" />
            <path d="M835 95 C782 95 777 162 720 188" fill="none" stroke="#cf4b32" strokeWidth="2" />
            <path d="M365 342 C418 342 423 276 480 242" fill="none" stroke="#cf4b32" strokeWidth="2" />
            <path d="M835 342 C782 342 777 276 720 242" fill="none" stroke="#cf4b32" strokeWidth="2" />
            <circle cx="330" cy="95" r="4" fill="#11110f" />
            <circle cx="870" cy="95" r="4" fill="#11110f" />
            <circle cx="330" cy="342" r="4" fill="#11110f" />
            <circle cx="870" cy="342" r="4" fill="#11110f" />
          </svg>

          <span className="system-chip system-chip-one">CCTV</span>
          <span className="system-chip system-chip-two">WEB</span>
          <span className="system-chip system-chip-three">CAMPAIGN</span>
          <span className="system-chip system-chip-four">BUSINESS APP</span>

          <div className="hero-word dot-display" aria-hidden="true">CONNECT.</div>
          <div className="hero-hub" aria-label="Nakha Solution system hub">
            <div className="hero-hub-core">
              <Image
                src="/assets/logo.png"
                alt="Nakha Solution"
                width={126}
                height={78}
                className="hero-hub-logo"
                priority
              />
            </div>
            <span className="hub-index">NS / 01</span>
          </div>
          <div className="hero-word dot-display" aria-hidden="true">BUILD.</div>
        </div>

        <div className="hero-copy">
          <p className="technical-label">{t("badge")}</p>
          <h1 id="hero-title">{t("titlePrefix")}</h1>
          <p>{t("subtitle")}</p>
          <div className="hero-actions">
            <a
              href={buildWhatsAppLink(infoT("phone"), "Halo Nakha Solution, saya ingin menjadwalkan konsultasi.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="button-dark"
            >
              <span className="button-signal" aria-hidden="true" />
              {t("ctaPrimary")}
            </a>
            <a href="#services" className="button-line">
              {t("ctaSecondary")}
            </a>
          </div>
        </div>

        <div className="evidence-rail" aria-label="Selected client work">
          <div className="evidence-cell">
            <div className="evidence-logo-wrap">
              <Image src="/assets/logoportofolio/logorayalawfirm.webp" alt="Raya Law Firm" fill sizes="125px" />
            </div>
            <p>Raya Law Firm / Website</p>
          </div>
          <div className="evidence-cell">
            <div className="evidence-logo-wrap">
              <Image src="/assets/logoportofolio/logo-pwm.webp" alt="Putra Wijaya Mandiri" fill sizes="125px" />
            </div>
            <p>Putra Wijaya Mandiri / Corporate</p>
          </div>
          <div className="evidence-cell">
            <div className="evidence-logo-wrap">
              <Image src="/assets/logoportofolio/logoalfajr.png" alt="Alfajr Umroh" fill sizes="125px" />
            </div>
            <p>Alfajr Umroh / Travel</p>
          </div>
          <div className="evidence-cell evidence-cta">
            <strong>{portfolioT("description")}</strong>
            <a href="#portfolio" className="text-link">
              {portfolioT("viewMore")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
