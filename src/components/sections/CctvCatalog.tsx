"use client";

import { motion } from "framer-motion";
import { 
  Camera, 
  Monitor, 
  HardDrive, 
  Zap, 
  Info, 
  MessageCircle, 
  ShieldCheck, 
  Layers, 
  Wrench 
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
  if (!catalog) return null;

  // Helper to map package item text to a visual icon
  const getItemIcon = (text: string) => {
    const lower = text.toLowerCase();
    if (lower.includes("kamera") || lower.includes("camera")) {
      return <Camera className="text-blue-500 shrink-0" size={18} />;
    }
    if (lower.includes("dvr")) {
      return <Monitor className="text-blue-500 shrink-0" size={18} />;
    }
    if (lower.includes("hdd") || lower.includes("harddisk") || lower.includes("hard disk")) {
      return <HardDrive className="text-blue-500 shrink-0" size={18} />;
    }
    if (lower.includes("psu") || lower.includes("power supply") || lower.includes("adaptor")) {
      return <Zap className="text-blue-500 shrink-0" size={18} />;
    }
    if (lower.includes("kabel") || lower.includes("cable")) {
      return <Layers className="text-blue-500 shrink-0" size={18} />;
    }
    return <Wrench className="text-blue-500 shrink-0" size={18} />;
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  } as const;

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } },
  } as const;

  return (
    <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/40 border-t border-slate-100 dark:border-slate-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="px-4 py-1.5 rounded-full text-xs font-black tracking-wider uppercase bg-blue-100 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400">
              PRICING & BUNDLES
            </span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white mt-6 mb-6 leading-tight"
          >
            {catalog.packageTitle}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-slate-600 dark:text-slate-400"
          >
            {catalog.packageSubtitle}
          </motion.p>
        </div>

        {/* Packages Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 mb-16 md:mb-24"
        >
          {catalog.packages.map((pkg, idx) => {
            // Build custom WhatsApp text for this package
            const waMessage = encodeURIComponent(
              `Halo Nakha Solution, saya tertarik untuk berkonsultasi / memesan paket CCTV:\n\n*${pkg.name}*\nHarga: *${pkg.price}*\n\nMohon info selengkapnya.`
            );
            const waUrl = `https://wa.me/6281166016611?text=${waMessage}`;

            // Highlight the middle package (8 cameras) as "Most Popular" or "Best Value"
            const isFeatured = idx === 1;

            return (
              <motion.div
                key={idx}
                variants={cardVariants}
                className={`relative flex flex-col justify-between rounded-[32px] p-8 lg:p-10 transition-all duration-300 ${
                  isFeatured 
                    ? "bg-slate-900 dark:bg-blue-950/20 text-white border-2 border-blue-500 shadow-xl shadow-blue-500/10 scale-105 md:-translate-y-2 z-10" 
                    : "bg-white dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800/80 text-slate-950 dark:text-white shadow-sm hover:shadow-lg hover:-translate-y-1"
                }`}
              >
                {isFeatured && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-black bg-blue-500 text-white uppercase tracking-wider shadow-md">
                    Best Value
                  </span>
                )}

                <div>
                  <h3 className="text-xl md:text-2xl font-black mb-3">{pkg.name}</h3>
                  <div className="flex items-baseline gap-1 my-6">
                    <span className="text-3xl lg:text-4xl font-black tracking-tight text-blue-600 dark:text-blue-400">
                      {pkg.price}
                    </span>
                  </div>

                  <div className={`h-px w-full my-6 ${isFeatured ? "bg-slate-800" : "bg-slate-100 dark:bg-slate-900"}`} />

                  <p className={`text-xs font-bold uppercase tracking-wider mb-4 ${isFeatured ? "text-slate-400" : "text-slate-500"}`}>
                    {catalog.includedLabel}
                  </p>

                  <ul className="space-y-4 mb-8">
                    {pkg.items.map((item, itemIdx) => (
                      <li key={itemIdx} className="flex items-start gap-3">
                        <div className="mt-0.5 shrink-0">
                          {getItemIcon(item)}
                        </div>
                        <span className={`text-sm font-medium ${isFeatured ? "text-slate-300" : "text-slate-600 dark:text-slate-300"}`}>
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
                      ? "bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/20 active:scale-[0.98]"
                      : "bg-slate-100 hover:bg-slate-200 dark:bg-slate-900 dark:hover:bg-slate-800/80 text-slate-900 dark:text-white border border-transparent dark:border-slate-800 active:scale-[0.98]"
                  }`}
                >
                  <MessageCircle size={18} />
                  {catalog.ctaText}
                </a>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Notes & Terms Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-slate-950/80 border border-slate-200/80 dark:border-slate-800/80 rounded-[32px] p-8 md:p-12 relative overflow-hidden backdrop-blur-md shadow-sm"
        >
          {/* Subtle Decorative element */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full -mr-16 -mt-16 blur-2xl"></div>

          <div className="flex flex-col md:flex-row gap-8 items-start relative z-10">
            {/* Header info */}
            <div className="md:w-1/3 shrink-0">
              <div className="flex items-center gap-3 text-blue-500 mb-4">
                <ShieldCheck size={28} />
                <h4 className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-wider">
                  Info & Garansi
                </h4>
              </div>
              <p className="text-sm text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                Detail ketentuan garansi, paket pemasangan, serta estimasi biaya tambahan di luar paket standar.
              </p>
            </div>

            {/* Content info */}
            <div className="md:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {catalog.notes.map((note, idx) => {
                const isImportant = note.toUpperCase().includes("TIDAK") || note.toLowerCase().includes("tidak termasuk");
                
                return (
                  <div 
                    key={idx} 
                    className={`flex items-start gap-4 p-5 rounded-2xl border ${
                      isImportant
                        ? "bg-blue-50/50 dark:bg-blue-950/10 border-blue-100/80 dark:border-blue-900/30"
                        : "bg-slate-50/50 dark:bg-slate-900/40 border-slate-100 dark:border-slate-800/60"
                    }`}
                  >
                    <Info 
                      size={20} 
                      className={`shrink-0 mt-0.5 ${
                        isImportant ? "text-blue-500" : "text-slate-400 dark:text-slate-500"
                      }`} 
                    />
                    <p className={`text-sm leading-relaxed font-semibold ${
                      isImportant
                        ? "text-slate-900 dark:text-blue-200"
                        : "text-slate-700 dark:text-slate-300"
                    }`}>
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
