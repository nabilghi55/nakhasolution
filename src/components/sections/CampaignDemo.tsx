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

const CampaignDemo = () => {
  const t = useTranslations("Services.campaignDemo");
  const [step, setStep] = useState(0); // 0: Start, 1: Fetching, 2: Filtered, 3: Drawing, 4: Winner
  const [fetchCount, setFetchCount] = useState(0);

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
            className="text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6"
          >
            {t("title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto"
          >
            {t("subtitle")}
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-slate-800 rounded-[40px] shadow-2xl border border-slate-100 dark:border-slate-700 overflow-hidden">
            {/* Demo Header */}
            <div className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700 px-8 py-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />
                <span className="ml-4 text-sm font-bold text-slate-400 font-mono">nakha-picker-v2.0.exe</span>
              </div>
              <div className="flex items-center gap-4 text-sm font-black text-slate-600 dark:text-slate-300">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/40 text-blue-600 dark:text-blue-400 rounded-lg">
                  {t("steps.match")}
                </span>
              </div>
            </div>

            <div className="p-8 lg:p-12 min-h-[450px] flex flex-col items-center justify-center text-center">
              <AnimatePresence mode="wait">
                {step === 0 && (
                  <motion.div
                    key="step0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-8"
                  >
                    <div className="w-24 h-24 bg-pink-100 dark:bg-pink-900/30 rounded-[32px] flex items-center justify-center mx-auto text-pink-600">
                      <Search size={48} />
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-slate-900 dark:text-white mb-2">Connect Your Content</h3>
                      <p className="text-slate-500 dark:text-slate-400">Ready to fetch data from your latest score guessing post.</p>
                    </div>
                    <button
                      onClick={() => setStep(1)}
                      className="group flex items-center gap-3 px-10 py-5 bg-pink-600 hover:bg-pink-700 text-white rounded-2xl font-black text-lg shadow-xl shadow-pink-500/20 transition-all"
                    >
                      {t("steps.fetch")}
                      <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </motion.div>
                )}

                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.1 }}
                    className="w-full max-w-md space-y-8"
                  >
                    <div className="relative w-32 h-32 mx-auto">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 border-4 border-pink-200 dark:border-pink-900/30 border-t-pink-600 rounded-full"
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-pink-600">
                        <InstagramIcon size={40} />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-3xl font-black text-slate-900 dark:text-white mb-2">
                        {fetchCount.toLocaleString()}
                      </h3>
                      <p className="text-slate-500 dark:text-slate-400 font-bold">{t("steps.fetching")}</p>
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
                    className="w-full space-y-8"
                  >
                    <div className="flex items-center justify-center gap-4 text-green-500 font-black text-xl">
                      <Filter size={24} />
                      {t("steps.filtered")}
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                      {users.map((user, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.05 }}
                          className="px-4 py-2 bg-slate-100 dark:bg-slate-700/50 rounded-xl text-xs font-bold text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-600"
                        >
                          {user}
                        </motion.div>
                      ))}
                    </div>
                    <button
                      onClick={() => setStep(3)}
                      className="group flex items-center gap-3 px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-lg shadow-xl shadow-blue-500/20 transition-all mx-auto"
                    >
                      <Trophy size={20} />
                      {t("steps.draw")}
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
                    className="space-y-10"
                  >
                    <div className="relative w-48 h-48 mx-auto">
                      <motion.div
                        animate={{ rotate: 360 * 5 }}
                        transition={{ duration: 3, ease: "circOut" }}
                        className="absolute inset-0 rounded-full border-[12px] border-slate-100 dark:border-slate-700 border-t-blue-600 relative overflow-hidden flex items-center justify-center"
                      >
                         <div className="absolute inset-0 bg-[conic-gradient(from_0deg,#3b82f6_0%,#3b82f6_10%,transparent_10%,transparent_100%)] opacity-20" />
                      </motion.div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Loader2 size={48} className="text-blue-600 animate-spin" />
                      </div>
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 dark:text-white animate-pulse">
                      Picking a random winner...
                    </h3>
                  </motion.div>
                )}

                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ scale: 0.5, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="space-y-8"
                  >
                    <div className="relative">
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1.2, 1] }}
                        className="w-32 h-32 bg-yellow-400 rounded-full flex items-center justify-center mx-auto shadow-2xl shadow-yellow-500/50 text-slate-900"
                      >
                        <Trophy size={64} />
                      </motion.div>
                      <div className="absolute -top-4 -left-4 w-8 h-8 bg-blue-500 rounded-full animate-ping" />
                      <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-pink-500 rounded-full animate-bounce" />
                    </div>
                    
                    <div>
                      <span className="text-green-500 font-black uppercase tracking-widest text-sm mb-2 block">
                        {t("steps.winner")}
                      </span>
                      <h3 className="text-5xl font-black text-slate-900 dark:text-white">@rizky_m</h3>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                      <button
                        onClick={resetDemo}
                        className="flex items-center gap-2 px-8 py-4 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-2xl font-bold hover:bg-slate-200 transition-all"
                      >
                        <RefreshCw size={18} />
                        {t("steps.reset")}
                      </button>
                      <a 
                        href="https://wa.me/6281166016611?text=Halo%20Nakha%20Solution,%20saya%20tertarik%20dengan%20Instagram%20Picker%20Platform."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-8 py-4 bg-blue-600 text-white rounded-2xl font-black shadow-lg shadow-blue-500/20 hover:scale-105 transition-all"
                      >
                        <CheckCircle2 size={18} />
                        {t("cta")}
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Demo Footer / Stats */}
            <div className="bg-slate-50/50 dark:bg-slate-900/50 px-8 py-6 border-t border-slate-100 dark:border-slate-700 grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="space-y-1">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</p>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-xs font-bold text-slate-600 dark:text-slate-300">Live API Connection</span>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Speed</p>
                <p className="text-xs font-bold text-slate-600 dark:text-slate-300">~2,500 comments/sec</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Security</p>
                <p className="text-xs font-bold text-slate-600 dark:text-slate-300">256-bit AES Encryption</p>
              </div>
              <div className="space-y-1">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Engine</p>
                <p className="text-xs font-bold text-slate-600 dark:text-slate-300">AI-Based Filtering v4</p>
              </div>
            </div>
          </div>
        </div>

        {/* Action Bar */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 lg:p-12 bg-gradient-to-r from-pink-600 to-rose-600 rounded-[40px] text-white flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-pink-500/20"
        >
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-md">
              <Users size={32} />
            </div>
            <div>
              <h3 className="text-2xl lg:text-3xl font-black mb-1">Scale Your Engagement</h3>
              <p className="text-pink-100 text-lg opacity-80">Used by 500+ brands and agencies globally.</p>
            </div>
          </div>
          <a
            href="https://wa.me/6281166016611?text=Halo%20Nakha%20Solution,%20saya%20tertarik%20dengan%20Instagram%20Picker%20Platform."
            target="_blank"
            rel="noopener noreferrer"
            className="px-10 py-5 bg-white text-pink-600 rounded-2xl font-black text-lg hover:scale-105 transition-transform shadow-xl"
          >
            {t("cta")}
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CampaignDemo;
