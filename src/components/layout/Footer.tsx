"use client";

import Image from "next/image";
import NextLink from "next/link";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { displayPhone, e164Phone } from "@/lib/whatsapp";
import { posRouteList } from "@/content/pos-routes";

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
                <li><Link href="/#about">{navT("about")}</Link></li>
                <li><Link href="/#services">{navT("services")}</Link></li>
                <li><Link href="/#portfolio">{navT("portfolio")}</Link></li>
                <li><Link href="/#contact">{navT("contact")}</Link></li>
                <li><a href="https://instagram.com/nakha.solution" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li><a href="https://tiktok.com/@nakha.solution" target="_blank" rel="noopener noreferrer">TikTok</a></li>
              </ul>
            </div>
            <div>
              <h3>{navT("posGroup")}</h3>
              <ul>
                {posRouteList.map((route) => (
                  <li key={route.key}>
                    <NextLink href={route.path}>{route.navLabel}</NextLink>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3>{t("contactUs")}</h3>
              <ul>
                <li><a href={`mailto:${infoT("email")}`}>{infoT("email")}</a></li>
                <li><a href={`tel:${e164Phone()}`}>{displayPhone()}</a></li>
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
