"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const Navbar = () => {
  const t = useTranslations("Navbar");
  const infoT = useTranslations("ContactInfo");
  const whatsappUrl = buildWhatsAppLink(infoT("phone"), "Halo Nakha Solution, saya ingin berkonsultasi.");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const handleWhatsAppClick = () => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead", { 
        content_name: "WhatsApp Inquiry from Navbar",
        content_category: "Navigation"
      });
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("home") || "Beranda", href: "/" },
    {
      name: t("services") || "Layanan",
      href: "/#services",
      dropdown: [
        { name: "CCTV", href: "/services/cctv" },
        { name: "Digital Marketing Tools", href: "/services/digital-marketing" },
        { name: "Device Bundling", href: "/services/device-bundling" },
        { name: "Campaign Activation", href: "/services/campaign-activation" },
        { name: "Web Development", href: "/services/web-development" },
        { name: "Business Application", href: "/services/business-application" },
      ],
    },
    { name: t("portfolio") || "Portofolio", href: "/#portfolio" },
    { name: t("about") || "Tentang Kami", href: "/#about" },
    { name: t("contact") || "Kontak", href: whatsappUrl },
  ];

  return (
    <div className="fixed top-0 w-full z-50 px-3 sm:px-6 py-4 pointer-events-none font-sans">
      <nav
        className={cn(
          "max-w-7xl mx-auto w-full transition-all duration-300 ease-out rounded-2xl pointer-events-auto",
          scrolled
            ? "glass-panel shadow-[0_10px_35px_rgba(0,0,0,0.12)] border border-slate-200/80 dark:border-slate-800/80 py-2.5 px-4"
            : "bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg border border-slate-100 dark:border-slate-800/60 py-3.5 px-6",
        )}
      >
        <div className="flex justify-between items-center h-12">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="relative w-10 h-10 group-hover:scale-105 transition-transform duration-300">
                <Image
                  src="/assets/logo.png"
                  alt="Nakha Solution Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="text-base font-black text-slate-900 dark:text-white tracking-tight">
                NAKHA<span className="text-blue-600 dark:text-blue-500">SOLUTION</span>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative group px-1"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={link.href}
                  className="flex items-center text-[14px] font-bold text-slate-700 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50/80 dark:hover:bg-blue-900/30 px-4 py-2 rounded-xl transition-all duration-200"
                >
                  {link.name}
                  {link.dropdown && (
                    <ChevronDown
                      size={14}
                      className={cn(
                        "ml-1.5 transition-transform duration-200 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400",
                        activeDropdown === link.name ? "rotate-180" : "",
                      )}
                    />
                  )}
                </Link>

                {/* Dropdown Menu */}
                {link.dropdown && activeDropdown === link.name && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-max min-w-[380px] bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_60px_rgba(0,0,0,0.6)] border border-slate-200/80 dark:border-slate-800 mt-3 p-3 rounded-2xl animate-in fade-in slide-in-from-top-3 before:absolute before:-top-3 before:left-0 before:w-full before:h-3">
                    <div className="grid grid-cols-2 gap-1.5 relative z-10">
                      {link.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="flex items-center px-3.5 py-2.5 text-[13px] font-semibold text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-xl transition-all duration-200 group"
                        >
                          <span className="w-2 h-2 rounded-full bg-blue-500/20 group-hover:bg-blue-500 mr-2.5 transition-all"></span>
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right side CTA & Controls */}
          <div className="hidden md:flex items-center space-x-3">
            <LanguageSwitcher />
            <ThemeToggle />
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-5 py-2.5 rounded-xl text-[14px] font-bold shadow-lg shadow-blue-500/25 dark:shadow-none hover:shadow-blue-500/40 hover:scale-[1.02] active:scale-95 transition-all whitespace-nowrap"
            >
              <Sparkles size={16} />
              <span>{t("talk") || "Hubungi Kami"}</span>
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl mt-3 rounded-2xl shadow-2xl border border-slate-200/80 dark:border-slate-800 overflow-hidden animate-in fade-in slide-in-from-top-2">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    className="block px-4 py-3 text-base font-bold text-slate-900 dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-xl transition-colors"
                    onClick={() => {
                      if (link.href.startsWith("https://wa.me")) {
                        handleWhatsAppClick();
                      }
                      if (!link.dropdown) setIsOpen(false);
                    }}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="bg-slate-50 dark:bg-slate-800/50 rounded-xl mx-2 my-1 px-3 py-2 space-y-1">
                      {link.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block py-2 px-3 text-sm font-semibold text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 rounded-lg"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex items-center justify-between pt-4 px-4 pb-2 border-t border-slate-100 dark:border-slate-800">
                <span className="text-sm font-bold text-slate-700 dark:text-slate-300">
                  Bahasa / Language
                </span>
                <LanguageSwitcher />
              </div>
              <div className="pt-2 px-2 pb-2">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full text-center bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3.5 rounded-xl font-bold shadow-lg shadow-blue-500/20"
                  onClick={() => {
                    handleWhatsAppClick();
                    setIsOpen(false);
                  }}
                >
                  <Sparkles size={18} />
                  <span>{t("talk") || "Hubungi Kami"}</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
