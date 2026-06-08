"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const Navbar = () => {
  const t = useTranslations("Navbar");
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: t("home") || "Home", href: "/" },
    {
      name: t("services"),
      href: "/#services",
      dropdown: [
        { name: "CCTV", href: "/services/cctv" },
        {
          name: "Digital Marketing Tools",
          href: "/services/digital-marketing",
        },
        { name: "Device Bundling", href: "/services/device-bundling" },
        { name: "Campaign Activation", href: "/services/campaign-activation" },
        { name: "Web Development", href: "/services/web-development" },
        {
          name: "Business Application",
          href: "/services/business-application",
        },
      ],
    },
    { name: t("portfolio"), href: "/#portfolio" },
    { name: t("about"), href: "/#about" },
    { name: t("contact"), href: "https://wa.me/6281166016611?text=Halo%20Nakha%20Solution,%20saya%20ingin%20berkonsultasi." },
  ];

  return (
    <div className="fixed top-0 w-full z-50 px-4 py-6 pointer-events-none font-sans">
      <nav
        className={cn(
          "max-w-6xl mx-auto w-full transition-all duration-500 ease-in-out rounded-2xl pointer-events-auto",
          scrolled
            ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20 dark:border-slate-800/50 py-2"
            : "bg-white dark:bg-slate-900 shadow-[0_4px_20px_rgb(0,0,0,0.08)] py-3",
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-12">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <Link href="/" className="flex items-center space-x-3 group">
                <div className="relative w-10 h-10 group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/assets/logo.png"
                    alt="Nakha Solution Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <span className="text-sm font-black text-[#172B4D] dark:text-white tracking-tight">
                  NAKHA<span className="text-[#0052CC]">SOLUTION</span>
                </span>
              </Link>{" "}
            </div>

            {/* Desktop Navigation - Center Aligned */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative group px-1"
                  onMouseEnter={() =>
                    link.dropdown && setActiveDropdown(link.name)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <Link
                    href={link.href}
                    className="flex items-center text-[14px] font-semibold text-[#172B4D] dark:text-slate-300 hover:text-[#0052CC] dark:hover:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 px-4 py-2 rounded-xl transition-all duration-200"
                  >
                    {link.name}
                    {link.dropdown && (
                      <ChevronDown
                        size={14}
                        className={cn(
                          "ml-1 transition-transform duration-200 opacity-50",
                          activeDropdown === link.name ? "rotate-180" : "",
                        )}
                      />
                    )}
                  </Link>

                  {/* Dropdown Menu */}
                  {link.dropdown && activeDropdown === link.name && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-max min-w-[400px] bg-white dark:bg-slate-900 shadow-[0_20px_50px_rgba(0,0,0,0.15)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-gray-100 dark:border-slate-800 mt-4 p-4 rounded-3xl animate-in fade-in slide-in-from-top-4 before:absolute before:-top-4 before:left-0 before:w-full before:h-4">
                      {/* Triangle indicator */}
                      <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white dark:bg-slate-900 border-t border-l border-gray-100 dark:border-slate-800 rotate-45 rounded-tl-sm"></div>
                      
                      <div className="grid grid-cols-2 gap-2 relative z-10">
                        {link.dropdown.map((subItem) => (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="flex items-center px-4 py-3 text-[13px] font-semibold text-[#42526E] dark:text-slate-300 hover:text-[#0052CC] dark:hover:text-blue-400 hover:bg-blue-50/80 dark:hover:bg-blue-900/30 rounded-xl transition-all duration-200 group"
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500/0 group-hover:bg-blue-500 mr-2 transition-all"></span>
                            {subItem.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right side CTA & Theme Toggle */}
            <div className="hidden md:flex items-center space-x-3">
              <LanguageSwitcher />
              <ThemeToggle />
              <a
                href="https://wa.me/6281166016611?text=Halo%20Nakha%20Solution,%20saya%20ingin%20berkonsultasi."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#0052CC] text-white px-6 py-2 rounded-xl text-[14px] font-bold hover:bg-[#0747A6] hover:shadow-lg hover:shadow-blue-200 transition-all active:scale-95 whitespace-nowrap"
              >
                {t("talk") || "Let's Talk"}
              </a>
            </div>

            {/* Mobile menu button & Theme Toggle */}
            <div className="md:hidden flex items-center space-x-2">
              <ThemeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-[#172B4D] dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden bg-white dark:bg-slate-900 mt-2 rounded-2xl shadow-2xl border border-gray-50 dark:border-slate-800 overflow-hidden mx-2 animate-in fade-in slide-in-from-top-2">
            <div className="px-4 py-4 space-y-1">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link
                    href={link.href}
                    className="block px-4 py-4 text-base font-bold text-[#172B4D] dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl transition-colors"
                    onClick={() => !link.dropdown && setIsOpen(false)}
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="bg-gray-50/50 dark:bg-slate-800/50 rounded-xl mx-2 mb-2 px-4 py-2">
                      {link.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block py-3 text-sm font-medium text-[#42526E] dark:text-slate-400"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="flex items-center justify-between pt-4 px-4 pb-2">
                <span className="text-sm font-semibold text-[#172B4D] dark:text-slate-300">
                  Language
                </span>
                <LanguageSwitcher />
              </div>
              <div className="pt-2 px-2 pb-4">
                <a
                  href="https://wa.me/6281166016611?text=Halo%20Nakha%20Solution,%20saya%20ingin%20berkonsultasi."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full text-center bg-[#0052CC] text-white py-4 rounded-xl font-bold shadow-lg"
                  onClick={() => setIsOpen(false)}
                >
                  {t("talk") || "Let's Talk"}
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
