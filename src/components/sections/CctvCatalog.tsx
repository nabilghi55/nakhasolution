"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import {
  Camera, 
  Monitor, 
  HardDrive, 
  Zap, 
  Info, 
  MessageCircle, 
  ShieldCheck, 
  Layers, 
  Wrench,
  CheckCircle2
} from "lucide-react";

interface PackageItem {
  name: string;
  price: string;
  items: string[];
}

interface CatalogData {
  title: string;
  subtitle: string;
  notes: string[];
  packageTitle: string;
  packageSubtitle: string;
  includedLabel: string;
  ctaText: string;
  packages: PackageItem[];
}

interface CctvCatalogProps {
  catalog: CatalogData;
}

export default function CctvCatalog({ catalog }: CctvCatalogProps) {
  const infoT = useTranslations("ContactInfo");

  if (!catalog) return null;

  const getItemIcon = (text: string) => {
    const lower = text.toLowerCase();
    if (lower.includes("kamera") || lower.includes("camera")) {
      return <Camera className="text-blue-600 dark:text-blue-400 shrink-0" size={18} />;
    }
    if (lower.includes("dvr")) {
      return <Monitor className="text-blue-600 dark:text-blue-400 shrink-0" size={18} />;
    }
    if (lower.includes("hdd") || lower.includes("harddisk") || lower.includes("hard disk")) {
      return <HardDrive className="text-blue-600 dark:text-blue-400 shrink-0" size={18} />;
    }
    if (lower.includes("psu") || lower.includes("power supply") || lower.includes("adaptor")) {
      return <Zap className="text-blue-600 dark:text-blue-400 shrink-0" size={18} />;
    }
    if (lower.includes("kabel") || lower.includes("cable")) {
      return <Layers className="text-blue-600 dark:text-blue-400 shrink-0" size={18} />;
    }
    return <Wrench className="text-blue-600 dark:text-blue-400 shrink-0" size={18} />;
  };

  return (
    <section className="py-20 md:py-28 bg-slate-50/70 dark:bg-slate-900/40 border-t border-slate-200/80 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="px-4 py-1.5 rounded-full text-xs font-black tracking-wider uppercase bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
              PRICING & BUNDLES
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mt-6 mb-4 tracking-tight"
          >
            {catalog.packageTitle}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-base md:text-lg text-slate-600 dark:text-slate-400"
          >
            {catalog.packageSubtitle}
          </motion.p>
        </div>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-8 mb-16 md:mb-24 items-stretch">
          {catalog.packages.map((pkg, idx) => {
            const waMessage = `Halo Nakha Solution, saya tertarik untuk berkonsultasi / memesan paket CCTV:\n\n*${pkg.name}*\nHarga: *${pkg.price}*\n\nMohon info selengkapnya.`;
            const waUrl = buildWhatsAppLink(infoT("phone"), waMessage);
            const isFeatured = idx === 1;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className={`relative flex flex-col justify-between rounded-[32px] p-8 lg:p-9 transition-all duration-300 ${
                  isFeatured 
                    ? "bg-slate-900 text-white dark:bg-slate-900 border-2 border-blue-500 shadow-2xl shadow-blue-500/20 md:-translate-y-2 z-10" 
                    : "glass-card text-slate-950 dark:text-white border border-slate-200/80 dark:border-slate-800"
                }`}
              >
                {isFeatured && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full text-xs font-black bg-gradient-to-r from-blue-600 to-indigo-600 text-white uppercase tracking-wider shadow-lg">
                    Rekomendasi Terbaik
                  </div>
                )}

                <div>
                  <h3 className="text-xl md:text-2xl font-black mb-2 tracking-tight">{pkg.name}</h3>
                  <div className="my-5">
                    <span className="text-3xl lg:text-4xl font-black tracking-tight text-blue-600 dark:text-blue-400">
                      {pkg.price}
                    </span>
                  </div>

                  <div className={`h-px w-full my-6 ${isFeatured ? "bg-slate-800" : "bg-slate-100 dark:bg-slate-800/80"}`} />

                  <p className={`text-xs font-bold uppercase tracking-wider mb-4 ${isFeatured ? "text-slate-400" : "text-slate-500"}`}>
                    {catalog.includedLabel}
                  </p>

                  <ul className="space-y-3.5 mb-8">
                    {pkg.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-center gap-3">
                        {getItemIcon(item)}
                        <span className={`text-sm font-semibold ${isFeatured ? "text-slate-300" : "text-slate-700 dark:text-slate-300"}`}>
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 rounded-2xl font-black text-center text-sm transition-all duration-300 flex items-center justify-center gap-2 ${
                    isFeatured
                      ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-xl shadow-blue-500/30 active:scale-95"
                      : "bg-slate-900 text-white dark:bg-slate-800 hover:bg-blue-600 dark:hover:bg-blue-600 text-white active:scale-95"
                  }`}
                >
                  <MessageCircle size={18} />
                  <span>{catalog.ctaText}</span>
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Notes & Terms Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-panel border border-slate-200/80 dark:border-slate-800/80 rounded-[32px] p-8 md:p-10 relative overflow-hidden shadow-sm"
        >
          <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
            <div className="md:w-1/3 shrink-0">
              <div className="flex items-center gap-3 text-blue-600 dark:text-blue-400 mb-3">
                <ShieldCheck size={28} />
                <h4 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-wider">
                  Info & Garansi
                </h4>
              </div>
              <p className="text-sm text-slate-600 dark:text-slate-400 font-medium leading-relaxed">
                Detail ketentuan garansi, paket pemasangan, serta estimasi biaya tambahan di luar paket standar.
              </p>
            </div>

            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              {catalog.notes.map((note, idx) => {
                const isImportant = note.toUpperCase().includes("TIDAK") || note.toLowerCase().includes("tidak termasuk");
                
                return (
                  <div 
                    key={idx} 
                    className={`flex items-start gap-3 p-4 rounded-2xl border ${
                      isImportant
                        ? "bg-amber-500/10 border-amber-500/20 text-slate-900 dark:text-amber-200"
                        : "bg-slate-50 dark:bg-slate-900/40 border-slate-100 dark:border-slate-800/80 text-slate-700 dark:text-slate-300"
                    }`}
                  >
                    <Info 
                      size={18} 
                      className={`shrink-0 mt-0.5 ${
                        isImportant ? "text-amber-600 dark:text-amber-400" : "text-blue-600 dark:text-blue-400"
                      }`} 
                    />
                    <p className="text-xs leading-relaxed font-semibold">
                      {note}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
