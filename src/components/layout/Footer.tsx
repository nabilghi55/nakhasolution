"use client";

import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  Mail,
  Phone,
  MapPin,
  Sparkles
} from "lucide-react";

const Footer = () => {
  const t = useTranslations("Footer");
  const navT = useTranslations("Navbar");
  const infoT = useTranslations("ContactInfo");
  const servicesT = useTranslations("Services.items");

  return (
    <footer className="bg-slate-950 dark:bg-black text-white pt-20 pb-10 transition-colors duration-300 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="relative w-10 h-10 group-hover:scale-105 transition-transform">
                <Image
                  src="/assets/logo.png"
                  alt="Nakha Solution Logo"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>
              <span className="text-xl font-black tracking-tight">
                NAKHA<span className="text-blue-500">SOLUTION</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm mb-8 leading-relaxed">
              {t("desc")}
            </p>
            <div className="flex space-x-3">
              <a
                href="https://instagram.com/nakha.solution"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:bg-gradient-to-r hover:from-purple-600 hover:to-pink-600 hover:text-white hover:border-transparent transition-all duration-300 shadow-sm"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://tiktok.com/@nakha.solution"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:bg-cyan-600 hover:text-white hover:border-transparent transition-all duration-300 shadow-sm"
                aria-label="TikTok"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">{t("quickLinks")}</h3>
            <ul className="space-y-3.5 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-slate-400 hover:text-blue-400 transition-colors flex items-center"
                >
                  {navT("home")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#about"
                  className="text-slate-400 hover:text-blue-400 transition-colors flex items-center"
                >
                  {navT("about")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#services"
                  className="text-slate-400 hover:text-blue-400 transition-colors flex items-center"
                >
                  {navT("services")}
                </Link>
              </li>
              <li>
                <Link
                  href="/#portfolio"
                  className="text-slate-400 hover:text-blue-400 transition-colors flex items-center"
                >
                  {navT("portfolio")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">{t("ourServices")}</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link
                  href="/services/cctv"
                  className="text-slate-400 hover:text-blue-400 transition-colors line-clamp-1"
                >
                  {servicesT("cctv.title")}
                </Link>
              </li>
              <li>
                <Link
                  href="/services/digital-marketing"
                  className="text-slate-400 hover:text-blue-400 transition-colors line-clamp-1"
                >
                  {servicesT("digital-marketing.title")}
                </Link>
              </li>
              <li>
                <Link
                  href="/services/device-bundling"
                  className="text-slate-400 hover:text-blue-400 transition-colors line-clamp-1"
                >
                  {servicesT("device-bundling.title")}
                </Link>
              </li>
              <li>
                <Link
                  href="/services/campaign-activation"
                  className="text-slate-400 hover:text-blue-400 transition-colors line-clamp-1"
                >
                  {servicesT("campaign-activation.title")}
                </Link>
              </li>
              <li>
                <Link
                  href="/services/web-development"
                  className="text-slate-400 hover:text-blue-400 transition-colors line-clamp-1"
                >
                  {servicesT("web-development.title")}
                </Link>
              </li>
              <li>
                <Link
                  href="/services/business-application"
                  className="text-slate-400 hover:text-blue-400 transition-colors line-clamp-1"
                >
                  {servicesT("business-application.title")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-wider mb-6">{t("contactUs")}</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3 text-slate-400">
                <MapPin size={18} className="text-blue-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{infoT("address")}</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-400">
                <Phone size={18} className="text-blue-500 shrink-0" />
                <span>{infoT("phone")}</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-400">
                <Mail size={18} className="text-blue-500 shrink-0" />
                <span>{infoT("email")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs gap-4">
          <p>
            © {new Date().getFullYear()} Nakha Solution. {t("rights")}
          </p>
          <div className="flex space-x-6">
            <Link href="/privacy-policy" className="hover:text-blue-400 transition-colors">
              {t("privacy")}
            </Link>
            <Link href="/terms-of-service" className="hover:text-blue-400 transition-colors">
              {t("terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
