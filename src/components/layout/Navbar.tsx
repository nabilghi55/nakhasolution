/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { useTranslations } from "next-intl";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const Navbar = () => {
  const t = useTranslations("Navbar");
  const infoT = useTranslations("ContactInfo");
  const [isOpen, setIsOpen] = useState(false);

  const whatsappUrl = buildWhatsAppLink(
    infoT("phone"),
    "Halo Nakha Solution, saya ingin menjadwalkan konsultasi.",
  );

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    return () => document.removeEventListener("keydown", closeOnEscape);
  }, []);

  const handleWhatsAppClick = () => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead", {
        content_name: "WhatsApp Inquiry from Navbar",
        content_category: "Navigation",
      });
    }
  };

  const navLinks = [
    { name: t("home"), href: "/#home" },
    { name: t("services"), href: "/#services" },
    { name: t("portfolio"), href: "/#portfolio" },
    { name: t("about"), href: "/#about" },
    { name: t("contact"), href: "/#contact" },
  ];

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50 px-2.5 pt-2.5 sm:px-4 sm:pt-3">
      <nav className="pointer-events-auto relative mx-auto flex h-[66px] max-w-[1460px] items-center justify-between rounded-[14px] border border-black/10 bg-[#faf9f6] px-3 shadow-[0_8px_30px_rgba(20,18,14,0.08)] sm:px-5" aria-label="Primary navigation">
        <a href="/" className="flex min-h-11 items-center gap-2.5 rounded-md px-1 text-[#11110f] no-underline">
          <Image
            src="/assets/logo.png"
            alt=""
            width={42}
            height={26}
            className="h-[26px] w-[42px] brightness-0"
            priority
          />
          <span className="hidden text-[13px] font-semibold tracking-[-0.02em] sm:inline">NAKHA SOLUTION</span>
        </a>

        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="flex min-h-11 items-center rounded-md px-4 text-[13px] font-medium text-[#353430] no-underline transition-colors hover:bg-[#eceae5] hover:text-black"
            >
              {link.name}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2.5 lg:flex">
          <LanguageSwitcher />
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleWhatsAppClick}
            className="button-dark min-h-11 px-4 text-[13px]"
          >
            {t("talk")}
          </a>
        </div>

        <button
          type="button"
          className="min-h-11 min-w-[72px] rounded-md border border-[#c9c6bf] bg-[#f1f0ed] px-3 font-mono text-[11px] font-medium uppercase text-[#11110f] lg:hidden"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? t("close") : t("menu")}
        </button>

        {isOpen && (
          <div
            id="mobile-navigation"
            className="absolute left-0 right-0 top-[calc(100%+8px)] overflow-hidden rounded-[14px] border border-black/10 bg-[#faf9f6] p-3 shadow-[0_18px_45px_rgba(20,18,14,0.14)] lg:hidden"
          >
            <div className="grid">
              {navLinks.map((link, index) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`flex min-h-12 items-center justify-between border-[#d4d1ca] px-2 text-[15px] font-medium text-[#11110f] no-underline ${index < navLinks.length - 1 ? "border-b" : ""}`}
                >
                  <span>{link.name}</span>
                  <span className="font-mono text-[10px] text-[#77746e]">0{index + 1}</span>
                </a>
              ))}
            </div>
            <div className="mt-3 flex items-center justify-between gap-3 border-t border-[#d4d1ca] pt-3">
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
