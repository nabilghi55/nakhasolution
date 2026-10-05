/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const Footer = () => {
  const t = useTranslations("Footer");
  const navT = useTranslations("Navbar");
  const infoT = useTranslations("ContactInfo");

  return (
    <footer className="site-footer">
      <div className="section-shell">
        <div className="footer-main">
          <div className="footer-brand">
            <Link href="/" className="footer-brand-logo" aria-label="Nakha Solution home">
              <Image src="/assets/logoblack.png" alt="Nakha Solution" fill sizes="72px" className="object-contain" />
            </Link>
            <div>
              <strong>NAKHA SOLUTION</strong>
              <p>{t("desc")}</p>
            </div>
          </div>

          <div className="footer-links">
            <div>
              <h3>{t("quickLinks")}</h3>
              <ul>
                <li><a href="/#about">{navT("about")}</a></li>
                <li><a href="/#services">{navT("services")}</a></li>
                <li><a href="/#portfolio">{navT("portfolio")}</a></li>
                <li><a href="/#contact">{navT("contact")}</a></li>
                <li><a href="https://instagram.com/nakha.solution" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="https://tiktok.com/@nakha.solution" target="_blank" rel="noopener noreferrer">TikTok</a></li>
              </ul>
            </div>
            <div>
              <h3>{t("contactUs")}</h3>
              <ul>
                <li><a href={`mailto:${infoT("email")}`}>{infoT("email")}</a></li>
                <li><a href={`tel:${infoT("phone")}`}>{infoT("phone")}</a></li>
                <li><span>{infoT("address")}</span></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Nakha Solution. {t("rights")}</p>
          <div className="footer-legal">
            <Link href="/privacy-policy">{t("privacy")}</Link>
            <Link href="/terms-of-service">{t("terms")}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
