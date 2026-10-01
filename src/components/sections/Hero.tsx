"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ArrowRight, Sparkles, TrendingUp, ShieldCheck, Zap } from "lucide-react";
import { TypewriterEffect } from "@/components/ui/TypewriterEffect";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const Hero = () => {
  const t = useTranslations("Hero");
  const infoT = useTranslations("ContactInfo");

  const handleWhatsAppClick = () => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead", {
        content_name: "WhatsApp Inquiry from Hero",
        content_category: "Hero Section"
      });
    }
  };

  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-36 overflow-hidden bg-slate-50/50 dark:bg-[#020617] transition-colors duration-300">
      {/* Background Radial Lights & Mesh */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] bg-blue-600/15 dark:bg-blue-600/20 blur-[130px] rounded-full"></div>
        <div className="absolute top-[20%] right-[-5%] w-[450px] h-[450px] bg-indigo-600/15 dark:bg-indigo-600/20 blur-[140px] rounded-full"></div>
        <div className="absolute bottom-[5%] left-[30%] w-[350px] h-[350px] bg-cyan-500/10 dark:bg-cyan-500/15 blur-[110px] rounded-full"></div>
        {/* Subtle Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f015_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f015_1px,transparent_1px)] bg-[size:4rem_4rem] dark:bg-[linear-gradient(to_right,#1e293b20_1px,transparent_1px),linear-gradient(to_bottom,#1e293b20_1px,transparent_1px)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="lg:col-span-7 max-w-2xl text-center lg:text-left mx-auto lg:mx-0"
          >
            {/* Pill Badge */}
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 dark:bg-blue-500/15 border border-blue-500/25 text-blue-700 dark:text-blue-300 px-4 py-2 rounded-full text-xs sm:text-sm font-bold mb-6 backdrop-blur-md shadow-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-600"></span>
              </span>
              <Sparkles size={14} className="text-blue-600 dark:text-blue-400" />
              <span>{t("badge")}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-slate-900 dark:text-white leading-[1.15] mb-6 tracking-tight flex flex-col items-center lg:items-start">
              <span className="mb-1.5">{t("titlePrefix")}</span>
              <span className="gradient-text w-full block text-center lg:text-left pb-1">
                <TypewriterEffect />
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-9 leading-relaxed font-medium max-w-xl mx-auto lg:mx-0 text-justify">
              {t("subtitle")}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href={buildWhatsAppLink(infoT("phone"), "Halo Nakha Solution, saya ingin berkonsultasi.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleWhatsAppClick}
                className="inline-flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 text-white px-8 sm:px-9 py-4 sm:py-4.5 rounded-2xl font-black text-base sm:text-lg shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-[1.02] transition-all group active:scale-95 w-full sm:w-auto"
              >
                <span>{t("ctaPrimary")}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <Link
                href="#services"
                className="inline-flex items-center justify-center bg-white dark:bg-slate-900 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 px-8 sm:px-9 py-4 sm:py-4.5 rounded-2xl font-bold text-base sm:text-lg hover:bg-slate-100/80 dark:hover:bg-slate-800/80 transition-all active:scale-95 w-full sm:w-auto shadow-sm"
              >
                {t("ctaSecondary")}
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="mt-12 pt-8 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-wrap items-center justify-center lg:justify-start gap-6 sm:gap-8">
              <div className="flex items-center space-x-3">
                <div className="flex -space-x-2.5">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full border-2 border-white dark:border-slate-900 overflow-hidden bg-slate-200 shadow-md relative"
                    >
                      <Image
                        src={`https://i.pravatar.cc/150?u=${i + 15}`}
                        alt="Klien Nakha Solution"
                        fill
                        className="object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-slate-900 dark:text-white font-black text-base sm:text-lg leading-none">
                    100+ Klien
                  </p>
                  <p className="text-xs text-slate-500 font-medium">Terpercaya di Sumatera & Indonesia</p>
                </div>
              </div>

              <div className="flex items-center space-x-2 text-xs font-bold text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-800/80 px-3.5 py-2 rounded-xl border border-slate-200/50 dark:border-slate-700/50">
                <ShieldCheck className="w-4 h-4 text-emerald-500" />
                <span>Garansi Support On-Site</span>
              </div>
            </div>
          </motion.div>

          {/* Hero Visual Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-5 relative mt-6 lg:mt-0 w-full"
          >
            <div className="relative z-10 rounded-3xl sm:rounded-[36px] overflow-hidden shadow-2xl shadow-blue-950/20 border-4 sm:border-8 border-white dark:border-slate-900 group">
              <Image
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200"
                alt="Digital Transformation Nakha Solution"
                width={800}
                height={600}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent opacity-60"></div>
              
              <div className="absolute bottom-4 left-4 right-4 p-4 text-white glass-panel rounded-2xl border-white/20">
                <div className="flex items-center space-x-3">
                  <div className="p-2.5 bg-blue-600 rounded-xl">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold">Solusi Terintegrasi</h4>
                    <p className="text-xs text-slate-200">Hardware, Software, & Marketing Engine</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Glass Stats Badge */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-6 -right-2 sm:-bottom-8 sm:-right-8 z-20 glass-panel p-4 sm:p-5 rounded-2xl sm:rounded-3xl shadow-2xl border border-white/40 dark:border-slate-700/60 hidden sm:flex items-center space-x-4"
            >
              <div className="w-11 h-11 bg-emerald-500/15 dark:bg-emerald-500/20 rounded-2xl flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                <TrendingUp className="w-6 h-6" />
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
