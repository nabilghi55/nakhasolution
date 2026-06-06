"use client";

import Link from "next/image";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import NextLink from "next/link";

const Navbar = () => {
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
    { name: "Home", href: "#" },
    {
      name: "Services",
      href: "#services",
      dropdown: [
        { name: "Mobile App Development", href: "#" },
        { name: "Web Application", href: "#" },
        { name: "UI/UX Design", href: "#" },
        { name: "Maintenance & Support", href: "#" },
      ],
    },
    { name: "Portfolio", href: "#portfolio" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <div className="fixed top-0 w-full z-50 px-4 py-6 pointer-events-none font-sans">
      <nav
        className={cn(
          "max-w-5xl mx-auto w-full transition-all duration-500 ease-in-out rounded-2xl pointer-events-auto",
          scrolled
            ? "bg-white/80 dark:bg-slate-900/80 backdrop-blur-md shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/20 dark:border-slate-800/50 py-2"
            : "bg-white dark:bg-slate-900 shadow-[0_4px_20px_rgb(0,0,0,0.08)] py-3",
        )}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex justify-between items-center h-12">
            {/* Logo */}
            <div className="flex-shrink-0 flex items-center">
              <NextLink href="/" className="flex items-center space-x-3 group">
                <div className="relative w-10 h-10 group-hover:scale-110 transition-transform duration-300">
                  <Image
                    src="/assets/logo.png"
                    alt="Nakha Solution Logo"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
                <span className="text-xl font-black text-[#172B4D] dark:text-white tracking-tight">
                  NAKHA<span className="text-[#0052CC]">SOLUTION</span>
                </span>
              </NextLink>{" "}
            </div>

            {/* Desktop Navigation - Center Aligned */}
            <div className="hidden md:flex items-center space-x-1">
              {navLinks.map((link) => (
                <div
                  key={link.name}
                  className="relative group px-1"
                  onMouseEnter={() =>
                    link.dropdown && setActiveDropdown(link.name)
                  }
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  <NextLink
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
                  </NextLink>

                  {/* Dropdown Menu */}
                  {link.dropdown && activeDropdown === link.name && (
                    <div className="absolute top-full left-0 w-56 bg-white dark:bg-slate-900 shadow-2xl border border-gray-50 dark:border-slate-800 mt-2 py-3 rounded-2xl animate-in fade-in slide-in-from-top-2">
                      {link.dropdown.map((subItem) => (
                        <NextLink
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-6 py-3 text-[13px] font-medium text-[#42526E] dark:text-slate-400 hover:text-[#0052CC] dark:hover:text-blue-400 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-colors"
                        >
                          {subItem.name}
                        </NextLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Right side CTA & Theme Toggle */}
            <div className="hidden md:flex items-center space-x-4">
              <ThemeToggle />
              <NextLink
                href="#contact"
                className="bg-[#0052CC] text-white px-6 py-2 rounded-xl text-[14px] font-bold hover:bg-[#0747A6] hover:shadow-lg hover:shadow-blue-200 transition-all active:scale-95"
              >
                Let's Talk
              </NextLink>
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
                  <NextLink
                    href={link.href}
                    className="block px-4 py-4 text-base font-bold text-[#172B4D] dark:text-slate-200 hover:bg-blue-50 dark:hover:bg-blue-900/20 rounded-xl transition-colors"
                    onClick={() => !link.dropdown && setIsOpen(false)}
                  >
                    {link.name}
                  </NextLink>
                  {link.dropdown && (
                    <div className="bg-gray-50/50 dark:bg-slate-800/50 rounded-xl mx-2 mb-2 px-4 py-2">
                      {link.dropdown.map((subItem) => (
                        <NextLink
                          key={subItem.name}
                          href={subItem.href}
                          className="block py-3 text-sm font-medium text-[#42526E] dark:text-slate-400"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </NextLink>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 px-2">
                <NextLink
                  href="#contact"
                  className="block w-full text-center bg-[#0052CC] text-white py-4 rounded-xl font-bold shadow-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Let's Talk
                </NextLink>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
