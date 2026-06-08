"use client";

import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useTranslations } from "next-intl";
import {
  Mail,
  Phone,
  MapPin
} from "lucide-react";

const Footer = () => {
  const t = useTranslations("Footer");
  const navT = useTranslations("Navbar");
  const infoT = useTranslations("ContactInfo");
  const servicesT = useTranslations("Services.items");

  return (
    <footer className="bg-slate-900 dark:bg-black text-white pt-16 pb-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Info */}
          <div>
            <Link href="/" className="flex items-center space-x-3 mb-6 group">
              <div className="relative w-10 h-10">
                <Image
                  src="/assets/logo.png"
                  alt="Nakha Solution Logo"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>
              <span className="text-2xl font-black tracking-tight">
                NAKHA<span className="text-blue-500">SOLUTION</span>
              </span>
            </Link>
            <p className="text-slate-400 mb-8 leading-relaxed">
              {t("desc")}
            </p>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/nakha.solution"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 text-slate-400 hover:bg-pink-600 hover:text-white transition-all duration-300 shadow-sm"
                aria-label="Instagram"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
              <a
                href="https://tiktok.com/@nakha.solution"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-slate-800 text-slate-400 hover:bg-[#00f2fe] hover:text-white transition-all duration-300 shadow-sm"
                aria-label="TikTok"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-6">{t("quickLinks")}</h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-slate-400 hover:text-blue-400 transition-colors flex items-center"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mr-2 opacity-0 -ml-3 transition-all group-hover:opacity-100 group-hover:ml-0"></span>
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
            <h3 className="text-lg font-bold text-white mb-6">{t("ourServices")}</h3>
            <ul className="space-y-4">
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
            <h3 className="text-lg font-bold text-white mb-6">{t("contactUs")}</h3>
            <ul className="space-y-5">
              <li className="flex items-start space-x-3 text-slate-400">
                <MapPin size={20} className="text-blue-500 shrink-0 mt-1" />
                <span className="leading-relaxed">{infoT("address")}</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-400">
                <Phone size={20} className="text-blue-500 shrink-0" />
                <span>{infoT("phone")}</span>
              </li>
              <li className="flex items-center space-x-3 text-slate-400">
                <Mail size={20} className="text-blue-500 shrink-0" />
                <span>{infoT("email")}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <p>
            © {new Date().getFullYear()} Nakha Solution. {t("rights")}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="hover:text-blue-400 transition-colors">
              {t("privacy")}
            </Link>
            <Link href="#" className="hover:text-blue-400 transition-colors">
              {t("terms")}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
