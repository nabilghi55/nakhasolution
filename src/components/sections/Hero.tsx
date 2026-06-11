"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ArrowRight } from "lucide-react";
import { TypewriterEffect } from "@/components/ui/TypewriterEffect";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

declare global {
  interface Window {
    fbq: any;
  }
}

const Hero = () => {
  const t = useTranslations("Hero");

  const handleWhatsAppClick = () => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead", { 
        content_name: "WhatsApp Inquiry from Hero",
        content_category: "Hero Section"
      });
    }
  };

  return (
    <section className="relative pt-28 pb-16 lg:pt-48 lg:pb-32 overflow-hidden bg-white dark:bg-[#020617] transition-colors duration-300">
      {/* Premium Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-400/10 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-indigo-400/10 blur-[100px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mt-8 lg:mt-0 text-center lg:text-left"
          >
            <div className="inline-flex items-center space-x-2 bg-blue-50 dark:bg-blue-900/20 border border-blue-100 dark:border-blue-800/50 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-xs sm:text-sm font-bold mb-6 sm:mb-8 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
              </span>
              <span>{t("badge")}</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-[1.2] mb-4 sm:mb-6 tracking-tight flex flex-col items-center lg:items-start">
              <span className="mb-2">{t("titlePrefix")}</span>
              <span className="text-blue-600 dark:text-blue-500 w-full block text-center lg:text-left text-balance">
                <TypewriterEffect />
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-400 mb-8 sm:mb-10 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0 text-justify">
              {t("subtitle")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="https://wa.me/6281166016611?text=Halo%20Nakha%20Solution,%20saya%20ingin%20berkonsultasi."
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="inline-flex items-center justify-center bg-blue-600 text-white px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-black text-base sm:text-lg hover:bg-blue-700 shadow-xl shadow-blue-200 dark:shadow-none transition-all group active:scale-95 w-full sm:w-auto"
              >
                {t("ctaPrimary")}
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="#services"
                className="inline-flex items-center justify-center bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 px-8 sm:px-10 py-4 sm:py-5 rounded-2xl font-bold text-base sm:text-lg hover:bg-slate-50 dark:hover:bg-slate-800 transition-all active:scale-95 w-full sm:w-auto"
              >
                {t("ctaSecondary")}
              </Link>
            </div>

            <div className="mt-12 sm:mt-16 flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 justify-center lg:justify-start">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 sm:border-4 border-white dark:border-slate-950 overflow-hidden bg-slate-200"
                  >
                    <Image
                      src={`https://i.pravatar.cc/150?u=${i + 10}`}
                      alt="User"
                      width={48}
                      height={48}
                    />
                  </div>
                ))}
              </div>
              <div>
                <p className="text-slate-900 dark:text-white font-black text-base sm:text-lg">
                  {t("clients")}
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative mt-8 lg:mt-0"
          >
            <div className="relative z-10 rounded-3xl sm:rounded-[40px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] dark:shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-4 sm:border-8 border-white dark:border-slate-900">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
                alt="Modern Digital Solutions"
                width={800}
                height={600}
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
                priority
              />
            </div>

            {/* Floating Card Design Element */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-2 sm:-bottom-10 sm:-right-10 z-20 bg-white dark:bg-slate-900 p-4 sm:p-6 rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-100 dark:border-slate-800 hidden sm:flex items-center space-x-3 sm:space-x-4"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-100 dark:bg-green-900/30 rounded-xl sm:rounded-2xl flex items-center justify-center text-green-600">
                <span className="font-bold text-lg sm:text-xl">↑</span>
              </div>
              <div>
                <p className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white">
                  124%
                </p>
                <p className="text-[10px] sm:text-xs font-bold text-slate-500 uppercase tracking-widest">
                  {t("growth")}
                </p>
              </div>
            </motion.div>

            {/* Decorative circles */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-600/5 rounded-full blur-3xl hidden sm:block"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
