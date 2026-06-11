"use client";

import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  Search, 
  Filter, 
  RefreshCw, 
  Trophy, 
  CheckCircle2, 
  Users, 
  ChevronRight,
  Loader2,
  Camera
} from "lucide-react";

const InstagramIcon = ({ size = 24 }: { size?: number }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

declare global {
  interface Window {
    fbq: any;
  }
}

const CampaignDemo = () => {
  const t = useTranslations("Services.campaignDemo");
  const [step, setStep] = useState(0); // 0: Start, 1: Fetching, 2: Filtered, 3: Drawing, 4: Winner
  const [fetchCount, setFetchCount] = useState(0);

  // Function to track Meta Pixel events
  const trackEvent = (eventName: string, params?: object) => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", eventName, params);
    }
  };

  const handleStartDemo = () => {
    setStep(1);
    trackEvent("ViewContent", { 
      content_name: "Instagram Picker Demo",
      content_category: "Demo Interaction" 
    });
  };

  const handleWhatsAppClick = () => {
    trackEvent("Lead", { 
      content_name: "WhatsApp Inquiry from Demo",
      content_category: "Campaign Activation"
    });
    // Track generic Contact event for Meta Ads
    trackEvent("Contact");
  };

  // Simulated fetching animation
  useEffect(() => {
    if (step === 1) {
      const interval = setInterval(() => {
        setFetchCount(prev => {
          if (prev >= 5420) {
            clearInterval(interval);
            setTimeout(() => setStep(2), 1000);
            return 5420;
          }
          return prev + 85;
        });
      }, 30);
      return () => clearInterval(interval);
    }
  }, [step]);

  const resetDemo = () => {
    setStep(0);
    setFetchCount(0);
  };

  const users = [
    "@ahmad_jaya", "@sari_putri", "@budi_santoso", "@kevin_wijaya", "@dina_linda",
    "@rizky_m", "@putra_s", "@maya_k", "@fajar_r", "@nina_w"
  ];

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-100 dark:bg-pink-900/30 text-pink-600 dark:text-pink-400 font-black text-sm uppercase tracking-widest mb-6"
          >
            <InstagramIcon size={16} />
            Instagram Automation
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight"
          >
            {t("title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            {t("subtitle")}
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-slate-800 rounded-[32px] md:rounded-[40px] shadow-2xl border border-slate-100 dark:border-slate-700 overflow-hidden">
            {/* Demo Header */}
            <div className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700 px-5 md:px-8 py-4 md:py-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="flex gap-1.5 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <span className="ml-1 md:ml-4 text-[10px] md:text-sm font-bold text-slate-400 font-mono truncate max-w-[120px] xs:max-w-[150px] md:max-w-none">nakha-picker-v2.0.exe</span>
              </div>
              <div className="flex items-center gap-2 md:gap-4 text-[10px] md:text-sm font-black text-slate-600 dark:text-slate-300">
                <span className="px-2 md:px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-lg whitespace-normal text-center leading-tight max-w-[140px] md:max-w-none">
                  {t("steps.match")}
                </span>
              </div>
            </div>

            <div className="p-6 md:p-12 min-h-[400px] md:min-h-[450px] flex flex-col items-center justify-center text-center">
              <AnimatePresence mode="wait">
                {step === 0 && (
                  <motion.div
                    key="step0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-6 md:space-y-8 w-full max-w-sm"
                  >
                    <div className="w-20 h-20 md:w-24 md:h-24 bg-pink-100 dark:bg-pink-900/30 rounded-[24px] md:rounded-[32px] flex items-center justify-center mx-auto text-pink-600">
                      <Search className="w-10 h-10 md:w-12 md:h-12" />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white mb-2">Connect Your Content</h3>
                      <p className="text-sm md:text-base text-slate-500 dark:text-slate-400">Ready to fetch data from your latest score guessing post.</p>
                    </div>
                    <button
                      onClick={() => setStep(1)}
                      className="group flex items-center justify-center gap-3 w-full md:w-auto px-8 md:px-10 py-4 md:py-5 bg-pink-600 hover:bg-pink-700 text-white rounded-2xl font-black text-base md:text-lg shadow-xl shadow-pink-500/20 transition-all mx-auto"
                    >
                      <span className="whitespace-nowrap">{t("steps.fetch")}</span>
                      <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform shrink-0" />
                    </button>
                  </motion.div>
                )}

                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    className="w-full max-w-xs md:max-w-md space-y-6 md:space-y-8"
                  >
                    <div className="relative w-24 h-24 md:w-32 md:h-32 mx-auto">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 border-4 border-pink-200 dark:border-pink-900/30 border-t-pink-600 rounded-full"
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-pink-600">
                        <InstagramIcon size={32} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-2">
                        {fetchCount.toLocaleString()}
                      </h3>
                      <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 font-bold leading-tight break-words">{t("steps.fetching")}</p>
                    </div>
                    <div className="h-2 w-full bg-slate-100 dark:bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        className="h-full bg-pink-600"
                        initial={{ width: 0 }}
                        animate={{ width: `${(fetchCount / 5420) * 100}%` }}
                      />
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    className="w-full space-y-6 md:space-y-8"
                  >
                    <div className="flex items-center justify-center gap-3 md:gap-4 text-green-500 font-black text-lg md:text-xl px-4">
                      <Filter size={20} className="md:w-6 md:h-6 shrink-0" />
                      <span className="leading-tight">{t("steps.filtered")}</span>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 md:gap-4 px-2">
                      {users.map((user, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.05 }}
                          className="px-2 md:px-4 py-2 bg-slate-100 dark:bg-slate-700/50 rounded-xl text-[10px] md:text-xs font-bold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600 truncate"
                        >
                          {user}
                        </motion.div>
                      ))}
                    </div>
                    <button
                      onClick={() => setStep(3)}
                      className="group flex items-center justify-center gap-3 w-full md:w-auto px-8 md:px-10 py-4 md:py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-base md:text-lg shadow-xl shadow-blue-500/20 transition-all mx-auto"
                    >
                      <Trophy size={20} className="shrink-0" />
                      <span className="whitespace-nowrap">{t("steps.draw")}</span>
                    </button>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    onUpdate={() => {
                      setTimeout(() => setStep(4), 3000);
                    }}
                    className="space-y-8 md:space-y-10 w-full"
                  >
                    <div className="relative w-36 h-36 md:w-48 md:h-48 mx-auto">
                      <motion.div
                        animate={{ rotate: 360 * 5 }}
                        transition={{ duration: 3, ease: "circOut" }}
                        className="absolute inset-0 rounded-full border-[8px] md:border-[12px] border-slate-100 dark:border-slate-700 border-t-blue-600 relative overflow-hidden flex items-center justify-center"
                      >
                         <div className="absolute inset-0 bg-[conic-gradient(from_0deg,#3b82f6_0%,#3b82f6_10%,transparent_10%,transparent_100%)] opacity-20" />
                      </motion.div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Loader2 className="w-10 h-10 md:w-12 md:h-12 text-blue-600 animate-spin" />
                      </div>
                    </div>
                    <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white animate-pulse px-4 leading-tight">
                      Picking a random winner...
                    </h3>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="space-y-6 md:space-y-8 w-full px-4"
                  >
                    <div className="relative">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1.2, 1] }}
                        className="w-24 h-24 md:w-32 md:h-32 bg-yellow-400 rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-yellow-500/50 text-slate-900"
                      >
                        <Trophy className="w-12 h-12 md:w-16 md:h-16" />
                      </motion.div>
                      <div className="absolute -top-2 -left-2 md:-top-4 md:-left-4 w-6 h-6 md:w-8 md:h-8 bg-blue-500 rounded-full animate-ping" />
                      <div className="absolute -bottom-2 -right-2 md:-bottom-4 md:-right-4 w-8 h-8 md:w-12 md:h-12 bg-pink-500 rounded-full animate-bounce" />
                    </div>
                    
                    <div className="w-full">
                      <span className="text-green-500 font-black uppercase tracking-widest text-[10px] md:text-sm mb-1 md:mb-2 block leading-tight">
                        {t("steps.winner")}
                      </span>
                      <h3 className="text-3xl md:text-5xl font-black text-slate-900 dark:text-white truncate max-w-full">@rizky_m</h3>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3 md:gap-4">
                      <button
                        onClick={resetDemo}
                        className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 md:px-8 py-3.5 md:py-4 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-2xl font-bold hover:bg-slate-200 transition-all"
                      >
                        <RefreshCw size={18} className="shrink-0" />
                        <span className="whitespace-nowrap">{t("steps.reset")}</span>
                      </button>
                      <a 
                        href="https://wa.me/6281166016611?text=Halo%20Nakha%20Solution,%20saya%20tertarik%20dengan%20Instagram%20Picker%20Platform."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 md:px-8 py-3.5 md:py-4 bg-blue-600 text-white rounded-2xl font-black shadow-lg shadow-blue-500/20 hover:scale-105 transition-all"
                      >
                        <CheckCircle2 size={18} className="shrink-0" />
                        <span className="whitespace-nowrap">{t("cta")}</span>
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Demo Footer / Stats */}
            <div className="bg-slate-50/50 dark:bg-slate-900/50 px-4 md:px-8 py-4 md:py-6 border-t border-slate-100 dark:border-slate-700 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              <div className="space-y-1">
                <p className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</p>
                <div className="flex items-center gap-1.5 md:gap-2">
                  <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-green-500 animate-pulse shrink-0" />
                  <span className="text-[9px] md:text-xs font-bold text-slate-600 dark:text-slate-300 leading-tight">Live API Connection</span>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest">Speed</p>
                <p className="text-[9px] md:text-xs font-bold text-slate-600 dark:text-slate-300 leading-tight">~2,500 comments/sec</p>
              </div>
              <div className="space-y-1">
                <p className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest">Security</p>
                <p className="text-[9px] md:text-xs font-bold text-slate-600 dark:text-slate-300 leading-tight">256-bit AES Encryption</p>
              </div>
              <div className="space-y-1">
                <p className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest">Engine</p>
                <p className="text-[9px] md:text-xs font-bold text-slate-600 dark:text-slate-300 truncate">AI-Based Filtering v4</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 md:mt-20 p-6 md:p-12 bg-gradient-to-r from-pink-600 to-rose-600 rounded-[32px] md:rounded-[40px] text-white flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 shadow-2xl shadow-pink-500/20"
        >
          <div className="flex flex-col md:flex-row items-center text-center md:text-left gap-4 md:gap-6">
            <div className="w-14 h-14 md:w-16 md:h-16 bg-white/20 rounded-2xl md:rounded-3xl flex items-center justify-center backdrop-blur-md shrink-0">
              <Users size={28} className="md:w-8 md:h-8" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl lg:text-3xl font-black mb-1 leading-tight">Scale Your Engagement</h3>
              <p className="text-pink-100 text-sm md:text-lg opacity-80 leading-relaxed">Used by 500+ brands and agencies globally.</p>
            </div>
          </div>
          <a
            href="https://wa.me/6281166016611?text=Halo%20Nakha%20Solution,%20saya%20tertarik%20dengan%20Instagram%20Picker%20Platform."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full md:w-auto px-8 md:px-10 py-4 md:py-5 bg-white text-pink-600 rounded-2xl font-black text-base md:text-lg hover:scale-105 transition-transform shadow-xl text-center"
          >
            <span className="whitespace-nowrap">{t("cta")}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CampaignDemo;
