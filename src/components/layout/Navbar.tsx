/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import { useTranslations } from "next-intl";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import {
  ChevronDown,
  Video,
  Megaphone,
  Laptop,
  Sparkles,
  Globe,
  AppWindow,
  ArrowRight,
} from "lucide-react";

const Navbar = () => {
  const t = useTranslations("Navbar");
  const servicesT = useTranslations("Services");
  const infoT = useTranslations("ContactInfo");

  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const whatsappUrl = buildWhatsAppLink(
    infoT("phone"),
    "Halo Nakha Solution, saya ingin menjadwalkan konsultasi.",
  );

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        setIsDropdownOpen(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("keydown", closeOnEscape);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleWhatsAppClick = () => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead", {
        content_name: "WhatsApp Inquiry from Navbar",
        content_category: "Navigation",
      });
    }
  };

  const servicesList = [
    {
      key: "cctv",
      href: "/services/cctv",
      icon: Video,
      title: servicesT("items.cctv.title"),
      summary: servicesT("items.cctv.summary"),
    },
    {
      key: "digital-marketing",
      href: "/services/digital-marketing",
      icon: Megaphone,
      title: servicesT("items.digital-marketing.title"),
      summary: servicesT("items.digital-marketing.summary"),
    },
    {
      key: "device-bundling",
      href: "/services/device-bundling",
      icon: Laptop,
      title: servicesT("items.device-bundling.title"),
      summary: servicesT("items.device-bundling.summary"),
    },
    {
      key: "campaign-activation",
      href: "/services/campaign-activation",
      icon: Sparkles,
      title: servicesT("items.campaign-activation.title"),
      summary: servicesT("items.campaign-activation.summary"),
    },
    {
      key: "web-development",
      href: "/services/web-development",
      icon: Globe,
      title: servicesT("items.web-development.title"),
      summary: servicesT("items.web-development.summary"),
    },
    {
      key: "business-application",
      href: "/services/business-application",
      icon: AppWindow,
      title: servicesT("items.business-application.title"),
      summary: servicesT("items.business-application.summary"),
    },
  ];

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 150);
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-2.5 pt-2.5 sm:px-4 sm:pt-3">
      <nav
        className="pointer-events-auto relative mx-auto flex h-[66px] max-w-[1460px] items-center justify-between rounded-[14px] border border-slate-200 bg-white px-3 shadow-[0_8px_30px_rgba(30,64,175,0.08)] sm:px-5"
        aria-label="Primary navigation"
      >
        <a
          href="/"
          className="flex min-h-11 items-center gap-2.5 rounded-md px-1 text-slate-950 no-underline"
        >
          <Image
            src="/assets/logoblack.png"
            alt="Nakha Solution Logo"
            width={52}
            height={32}
            className="h-[28px] w-auto object-contain"
            priority
          />
          <span className="hidden text-[13px] font-semibold tracking-[-0.02em] sm:inline">
            NAKHA SOLUTION
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          <a
            href="/#home"
            className="flex min-h-11 items-center rounded-md px-3.5 text-[13px] font-medium text-slate-700 no-underline transition-colors hover:bg-blue-50 hover:text-blue-700"
          >
            {t("home")}
          </a>

          {/* Services Dropdown Trigger */}
          <div
            ref={dropdownRef}
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button
              type="button"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
              aria-expanded={isDropdownOpen}
              aria-haspopup="true"
              className={`flex min-h-11 items-center gap-1.5 rounded-md px-3.5 text-[13px] font-medium transition-colors ${
                isDropdownOpen
                  ? "bg-blue-50 text-blue-700"
                  : "text-slate-700 hover:bg-blue-50 hover:text-blue-700"
              }`}
            >
              <span>{t("services")}</span>
              <ChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  isDropdownOpen ? "rotate-180 text-blue-700" : "text-slate-400"
                }`}
              />
            </button>

            {/* Desktop Services Mega Dropdown */}
            {isDropdownOpen && (
              <div
                className="absolute left-1/2 top-full z-50 mt-2 w-[640px] -translate-x-1/2 rounded-2xl border border-slate-200/90 bg-white p-3.5 shadow-[0_20px_50px_rgba(30,64,175,0.14)]"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div className="grid grid-cols-2 gap-2">
                  {servicesList.map((service) => {
                    const Icon = service.icon;
                    return (
                      <a
                        key={service.key}
                        href={service.href}
                        onClick={() => setIsDropdownOpen(false)}
                        className="group flex items-start gap-3 rounded-xl p-3 text-left no-underline transition-all hover:bg-slate-50"
                      >
                        <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-slate-50 text-blue-700 group-hover:border-blue-200 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                          <Icon className="h-4 w-4" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-1 text-[13px] font-semibold text-slate-900 group-hover:text-blue-700">
                            <span>{service.title}</span>
                          </div>
                          <p className="mt-0.5 line-clamp-2 text-[11px] leading-relaxed text-slate-500">
                            {service.summary}
                          </p>
                        </div>
                      </a>
                    );
                  })}
                </div>

                <div className="mt-2.5 flex items-center justify-between border-t border-slate-100 px-3 pt-2.5">
                  <span className="text-[11px] text-slate-400 font-medium">
                    Solusi digital terintegrasi untuk bisnis Anda
                  </span>
                  <a
                    href="/#services"
                    onClick={() => setIsDropdownOpen(false)}
                    className="flex items-center gap-1.5 text-[12px] font-semibold text-blue-700 no-underline hover:text-blue-800 hover:underline"
                  >
                    <span>Indeks Layanan</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            )}
          </div>

          <a
            href="/#portfolio"
            className="flex min-h-11 items-center rounded-md px-3.5 text-[13px] font-medium text-slate-700 no-underline transition-colors hover:bg-blue-50 hover:text-blue-700"
          >
            {t("portfolio")}
          </a>
          <a
            href="/#about"
            className="flex min-h-11 items-center rounded-md px-3.5 text-[13px] font-medium text-slate-700 no-underline transition-colors hover:bg-blue-50 hover:text-blue-700"
          >
            {t("about")}
          </a>
          <a
            href="/#contact"
            className="flex min-h-11 items-center rounded-md px-3.5 text-[13px] font-medium text-slate-700 no-underline transition-colors hover:bg-blue-50 hover:text-blue-700"
          >
            {t("contact")}
          </a>
        </div>

        {/* CTA & Language Switcher */}
        <div className="hidden items-center gap-2.5 lg:flex">
          <LanguageSwitcher />
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="button-dark min-h-11 px-4 text-[13px]"
          >
            <WhatsAppIcon size={16} />
            {t("talk")}
          </a>
        </div>

        {/* Mobile Hamburger Toggle Button */}
        <button
          type="button"
          className="min-h-11 min-w-[72px] rounded-md border border-slate-300 bg-slate-50 px-3 font-mono text-[11px] font-medium uppercase text-slate-950 lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? t("close") : t("menu")}
        </button>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div
            id="mobile-navigation"
            className="absolute left-0 right-0 top-[calc(100%+8px)] max-h-[85vh] overflow-y-auto rounded-[14px] border border-slate-200 bg-white p-3 shadow-[0_18px_45px_rgba(30,64,175,0.14)] lg:hidden"
          >
            <div className="grid divide-y divide-slate-100">
              <a
                href="/#home"
                onClick={() => setIsOpen(false)}
                className="flex min-h-12 items-center justify-between px-2 text-[15px] font-medium text-slate-950 no-underline"
              >
                <span>{t("home")}</span>
                <span className="font-mono text-[10px] text-slate-400">01</span>
              </a>

              {/* Mobile Services Accordion */}
              <div className="py-1">
                <button
                  type="button"
                  onClick={() => setIsMobileServicesOpen((prev) => !prev)}
                  aria-expanded={isMobileServicesOpen}
                  className="flex w-full min-h-12 items-center justify-between px-2 text-[15px] font-medium text-slate-950 no-underline"
                >
                  <span className="flex items-center gap-2">
                    {t("services")}
                  </span>
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[10px] text-slate-400">02</span>
                    <ChevronDown
                      className={`h-4 w-4 text-slate-500 transition-transform duration-200 ${
                        isMobileServicesOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                {isMobileServicesOpen && (
                  <div className="my-1.5 ml-2 mr-1 grid gap-1 rounded-xl bg-slate-50 p-2 border border-slate-100">
                    {servicesList.map((service) => {
                      const Icon = service.icon;
                      return (
                        <a
                          key={service.key}
                          href={service.href}
                          onClick={() => {
                            setIsOpen(false);
                            setIsMobileServicesOpen(false);
                          }}
                          className="flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[13px] font-medium text-slate-700 no-underline hover:bg-white hover:text-blue-700"
                        >
                          <div className="flex h-7 w-7 items-center justify-center rounded-md bg-white text-blue-600 border border-slate-200/80">
                            <Icon className="h-3.5 w-3.5" />
                          </div>
                          <span>{service.title}</span>
                        </a>
                      );
                    })}
                    <a
                      href="/#services"
                      onClick={() => {
                        setIsOpen(false);
                        setIsMobileServicesOpen(false);
                      }}
                      className="mt-1 flex items-center justify-between rounded-lg bg-blue-50 px-2.5 py-2 text-[12px] font-semibold text-blue-700 no-underline"
                    >
                      <span>Lihat Indeks Layanan</span>
                      <ArrowRight className="h-3.5 w-3.5" />
                    </a>
                  </div>
                )}
              </div>

              <a
                href="/#portfolio"
                onClick={() => setIsOpen(false)}
                className="flex min-h-12 items-center justify-between px-2 text-[15px] font-medium text-slate-950 no-underline"
              >
                <span>{t("portfolio")}</span>
                <span className="font-mono text-[10px] text-slate-400">03</span>
              </a>
              <a
                href="/#about"
                onClick={() => setIsOpen(false)}
                className="flex min-h-12 items-center justify-between px-2 text-[15px] font-medium text-slate-950 no-underline"
              >
                <span>{t("about")}</span>
                <span className="font-mono text-[10px] text-slate-400">04</span>
              </a>
              <a
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="flex min-h-12 items-center justify-between px-2 text-[15px] font-medium text-slate-950 no-underline"
              >
                <span>{t("contact")}</span>
                <span className="font-mono text-[10px] text-slate-400">05</span>
              </a>
            </div>

            <div className="mt-3 flex items-center justify-between gap-3 border-t border-slate-200 pt-3">
              <LanguageSwitcher />
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {
                  handleWhatsAppClick();
                  setIsOpen(false);
                }}
                className="button-dark min-h-11 flex-1 px-3 text-[13px]"
              >
                <WhatsAppIcon size={16} />
                {t("talk")}
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

