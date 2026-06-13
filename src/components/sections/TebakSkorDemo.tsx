"use client";

import { useTranslations } from "next-intl";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { 
  Trophy, 
  CheckCircle2, 
  Users, 
  ChevronRight,
  Loader2,
  RefreshCw,
  Award,
  Sparkles,
  Calendar,
  Settings,
  Lock,
  ArrowRight,
  TrendingUp,
  Info
} from "lucide-react";

declare global {
  interface Window {
    fbq: any;
  }
}

interface Match {
  id: number;
  homeTeam: string;
  homeFlag: string;
  awayTeam: string;
  awayFlag: string;
  date: string;
}

interface Prediction {
  homeScore: string;
  awayScore: string;
}

interface LeaderboardUser {
  rank: number;
  username: string;
  points: number;
  exactCount: number;
  isUser?: boolean;
}

const TebakSkorDemo = () => {
  const t = useTranslations("Services.tebakSkorDemo");
  const [step, setStep] = useState(0); // 0: Enter Predictions, 1: Registration, 2: Simulator & Results, 3: Calculating, 4: Standings
  const [predictions, setPredictions] = useState<Record<number, Prediction>>({
    1: { homeScore: "", awayScore: "" },
    2: { homeScore: "", awayScore: "" },
    3: { homeScore: "", awayScore: "" }
  });
  
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [formErrors, setFormErrors] = useState<Record<string, string>>({});
  
  // Real match results simulator (controlled by the user playing the admin role)
  const [realResults, setRealResults] = useState<Record<number, Prediction>>({
    1: { homeScore: "2", awayScore: "1" },
    2: { homeScore: "1", awayScore: "1" },
    3: { homeScore: "0", awayScore: "2" }
  });

  const [calculatedPoints, setCalculatedPoints] = useState(0);
  const [userRank, setUserRank] = useState(3);
  const [leaderboard, setLeaderboard] = useState<LeaderboardUser[]>([]);

  const matches: Match[] = [
    { id: 1, homeTeam: "Amerika Serikat", homeFlag: "🇺🇸", awayTeam: "Maroko", awayFlag: "🇲🇦", date: "Sabtu, 13 Juni 2026 - 18:00 WIB" },
    { id: 2, homeTeam: "Spanyol", homeFlag: "🇪🇸", awayTeam: "Jerman", awayFlag: "🇩🇪", date: "Minggu, 14 Juni 2026 - 20:00 WIB" },
    { id: 3, homeTeam: "Argentina", homeFlag: "🇦🇷", awayTeam: "Kroasia", awayFlag: "🇭🇷", date: "Senin, 15 Juni 2026 - 02:00 WIB" }
  ];

  // Track Meta Pixel events
  const trackEvent = (eventName: string, params?: object) => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", eventName, params);
    }
  };

  const handleScoreChange = (matchId: number, side: "home" | "away", value: string) => {
    // Only allow digits
    const cleaned = value.replace(/[^0-9]/g, "");
    setPredictions(prev => ({
      ...prev,
      [matchId]: {
        ...prev[matchId],
        [`${side}Score`]: cleaned
      }
    }));
  };

  const handleRealScoreChange = (matchId: number, side: "home" | "away", value: string) => {
    const cleaned = value.replace(/[^0-9]/g, "");
    setRealResults(prev => ({
      ...prev,
      [matchId]: {
        ...prev[matchId],
        [`${side}Score`]: cleaned
      }
    }));
  };

  const handlePredictSubmit = () => {
    // Check if all predictions are filled
    const allFilled = Object.values(predictions).every(
      pred => pred.homeScore !== "" && pred.awayScore !== ""
    );

    if (!allFilled) {
      alert("Mohon isi semua prediksi skor pertandingan!");
      return;
    }

    setStep(1);
    trackEvent("ViewContent", { 
      content_name: "Tebak Skor Prediction Input",
      content_category: "Demo Interaction" 
    });
  };

  const handleRegisterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const errors: Record<string, string> = {};
    
    if (!username.trim()) {
      errors.username = "Username Instagram wajib diisi";
    } else if (!username.startsWith("@")) {
      errors.username = "Username harus diawali dengan @ (contoh: @nakha_solution)";
    }
    
    if (!phone.trim()) {
      errors.phone = "Nomor WhatsApp wajib diisi";
    } else if (phone.length < 9) {
      errors.phone = "Masukkan nomor WhatsApp yang valid";
    }

    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setFormErrors({});
    setStep(2);
    trackEvent("Lead", {
      content_name: "Tebak Skor Lead Captured",
      content_category: "Campaign Activation"
    });
  };

  const calculateUserPoints = () => {
    let totalPoints = 0;
    let exactPredictions = 0;

    matches.forEach(match => {
      const pred = predictions[match.id];
      const real = realResults[match.id];

      const pHome = parseInt(pred.homeScore);
      const pAway = parseInt(pred.awayScore);
      const rHome = parseInt(real.homeScore);
      const rAway = parseInt(real.awayScore);

      if (pHome === rHome && pAway === rAway) {
        // Exact Score
        totalPoints += 3;
        exactPredictions += 1;
      } else if (Math.sign(pHome - pAway) === Math.sign(rHome - rAway)) {
        // Correct Outcome
        totalPoints += 1;
      }
    });

    return { totalPoints, exactPredictions };
  };

  const handleCalculateStandings = () => {
    setStep(3);
    
    const { totalPoints, exactPredictions } = calculateUserPoints();
    setCalculatedPoints(totalPoints);

    // Dynamic leaderboard setup
    setTimeout(() => {
      const mockUsers: { username: string; points: number; exactCount: number; isUser?: boolean }[] = [
        { username: "@ahmad_jaya", points: 7, exactCount: 2 },
        { username: "@sari_putri", points: 5, exactCount: 1 },
        { username: "@budi_santoso", points: 4, exactCount: 1 },
        { username: "@kevin_wijaya", points: 3, exactCount: 1 },
        { username: "@dina_linda", points: 1, exactCount: 0 }
      ];

      // Insert user
      const userObj = { username, points: totalPoints, exactCount: exactPredictions, isUser: true };
      const allParticipants = [...mockUsers, userObj];
      
      // Sort: points desc, then exactCount desc, then alphabetical
      allParticipants.sort((a, b) => {
        if (b.points !== a.points) return b.points - a.points;
        return b.exactCount - a.exactCount;
      });

      // Map ranks
      const mappedLeaderboard = allParticipants.map((p, idx) => ({
        rank: idx + 1,
        ...p
      }));

      // Find user rank
      const uRank = mappedLeaderboard.findIndex(p => p.isUser) + 1;
      setUserRank(uRank);
      setLeaderboard(mappedLeaderboard);
      setStep(4);
    }, 2500);
  };

  const handleWhatsAppClick = () => {
    trackEvent("Lead", { 
      content_name: "WhatsApp Inquiry from Tebak Skor Demo",
      content_category: "Campaign Activation"
    });
    trackEvent("Contact");
  };

  const resetDemo = () => {
    setStep(0);
    setPredictions({
      1: { homeScore: "", awayScore: "" },
      2: { homeScore: "", awayScore: "" },
      3: { homeScore: "", awayScore: "" }
    });
    setUsername("");
    setPhone("");
    setFormErrors({});
    setCalculatedPoints(0);
  };

  return (
    <section className="py-24 bg-slate-50 dark:bg-slate-900/50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 font-black text-sm uppercase tracking-widest mb-6"
          >
            <Trophy size={16} />
            Predict & Engage Platform
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

        {/* Strategic Ideas Showcase */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 p-6 md:p-12 bg-gradient-to-r from-blue-600 to-indigo-700 rounded-[32px] md:rounded-[40px] text-white shadow-2xl shadow-blue-500/20"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <span className="px-3 py-1 bg-white/20 rounded-full font-black text-xs uppercase tracking-widest inline-block mb-4">
                Fitur Utama Tebak Skor
              </span>
              <h3 className="text-2xl md:text-4xl font-black mb-4 leading-tight">
                Integrasi Sponsor & Monetisasi Platform
              </h3>
              <p className="text-blue-100 text-sm md:text-lg opacity-90 leading-relaxed mb-6">
                Campaign Tebak Skor dirancang untuk memberikan dampak komersial nyata. Integrasikan banner sponsor, kode promo eksklusif, serta pengumpulan kontak WhatsApp (leads database) 100% legal untuk strategi pemasaran bisnis Anda.
              </p>
              <ul className="space-y-2 text-sm text-blue-50">
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-300 shrink-0" />
                  <span>Kustomisasi penuh warna, logo, dan nama sponsor turnamen</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-300 shrink-0" />
                  <span>Sistem proteksi fraud (verifikasi nomor WhatsApp via OTP)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-green-300 shrink-0" />
                  <span>Export database peserta ke Excel secara real-time untuk tim sales</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 space-y-4">
              <h4 className="font-extrabold text-lg text-yellow-300 flex items-center gap-2">
                <Sparkles size={18} /> Ide Kampanye Tebak Skor
              </h4>
              <div className="space-y-3 text-sm">
                <div className="bg-white/5 p-3 rounded-lg">
                  <p className="font-bold">1. Tebak Skor Piala Dunia / Euro</p>
                  <p className="text-xs text-blue-200 mt-1">Sangat cocok untuk media online lokal dan brand F&B/Cafe untuk mengumpulkan data pengunjung saat nobar.</p>
                </div>
                <div className="bg-white/5 p-3 rounded-lg">
                  <p className="font-bold">2. Voucher Belanja Instan</p>
                  <p className="text-xs text-blue-200 mt-1">Peserta yang menebak benar otomatis dikirimi kode voucher diskon via WhatsApp untuk dibelanjakan di toko retail Anda.</p>
                </div>
                <div className="bg-white/5 p-3 rounded-lg">
                  <p className="font-bold">3. Leaderboard Seri Klasemen Liga</p>
                  <p className="text-xs text-blue-200 mt-1">Poin terus diakumulasikan sepanjang musim liga. Peringkat tertinggi di akhir musim memenangkan hadiah utama dari sponsor.</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Transitional Hook / Demo Prompt */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center my-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400 font-extrabold text-xs uppercase tracking-wider mb-4 animate-pulse">
            <Sparkles size={14} /> Coba Live Simulator Di Bawah Ini
          </div>
          <h3 className="text-xl md:text-3xl font-black text-slate-900 dark:text-white leading-tight">
            Rasakan Alur Pengalaman Pengguna (UX) Tebak Skor
          </h3>
          <p className="text-slate-500 dark:text-slate-400 text-sm md:text-base max-w-xl mx-auto mt-2 leading-relaxed">
            Mulai dengan memprediksi skor pertandingan Piala Dunia di bawah, lakukan pengisian data peserta kuis, lalu simulasikan hasil akhir pertandingan sesungguhnya!
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="bg-white dark:bg-slate-800 rounded-[32px] md:rounded-[40px] shadow-2xl border border-slate-100 dark:border-slate-700 overflow-hidden">
            {/* Demo Header */}
            <div className="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700 px-5 md:px-8 py-4 md:py-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-2 md:gap-3">
                <div className="flex gap-1.5 shrink-0">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                </div>
                <span className="ml-1 md:ml-4 text-[10px] md:text-sm font-bold text-slate-400 font-mono truncate">nakha-predict-arcade.js</span>
              </div>
              <div className="flex items-center gap-2 text-[10px] md:text-sm font-black text-slate-600 dark:text-slate-300">
                <span className="px-2.5 py-1 bg-green-100 dark:bg-green-900/40 text-green-600 dark:text-green-400 rounded-lg flex items-center gap-1.5">
                  <Calendar size={14} />
                  Match Day 5
                </span>
              </div>
            </div>

            {/* Main Interactive Container */}
            <div className="p-6 md:p-12 min-h-[450px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                
                {/* STEP 0: Prediction Inputs */}
                {step === 0 && (
                  <motion.div
                    key="step0"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-8"
                  >
                    <div className="text-center">
                      <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white mb-2">
                        {t("steps.inputTitle")}
                      </h3>
                      <p className="text-sm md:text-base text-slate-500 dark:text-slate-400">
                        {t("steps.inputDesc")}
                      </p>
                    </div>

                    <div className="space-y-4">
                      {matches.map((match) => (
                        <div 
                          key={match.id}
                          className="flex flex-col sm:flex-row items-center justify-between p-4 md:p-6 bg-slate-50 dark:bg-slate-900/60 border border-slate-100 dark:border-slate-700/80 rounded-2xl gap-4"
                        >
                          <div className="text-center sm:text-left w-full sm:w-2/5">
                            <span className="text-[10px] font-bold text-slate-400 uppercase block mb-1">
                              {match.date}
                            </span>
                            <div className="flex items-center justify-center sm:justify-start gap-2 text-slate-800 dark:text-slate-100 font-extrabold text-base md:text-lg">
                              <span>{match.homeFlag} {match.homeTeam}</span>
                              <span className="text-slate-400 font-medium">vs</span>
                              <span>{match.awayTeam} {match.awayFlag}</span>
                            </div>
                          </div>

                          {/* Scores inputs */}
                          <div className="flex items-center gap-3">
                            <input
                              type="text"
                              maxLength={1}
                              pattern="[0-9]*"
                              inputMode="numeric"
                              placeholder="0"
                              value={predictions[match.id].homeScore}
                              onChange={(e) => handleScoreChange(match.id, "home", e.target.value)}
                              className="w-12 h-12 md:w-14 md:h-14 bg-white dark:bg-slate-800 text-center font-black text-xl md:text-2xl rounded-xl border-2 border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-500 outline-none text-slate-800 dark:text-slate-100 transition-colors shadow-inner"
                            />
                            <span className="font-extrabold text-lg text-slate-400">:</span>
                            <input
                              type="text"
                              maxLength={1}
                              pattern="[0-9]*"
                              inputMode="numeric"
                              placeholder="0"
                              value={predictions[match.id].awayScore}
                              onChange={(e) => handleScoreChange(match.id, "away", e.target.value)}
                              className="w-12 h-12 md:w-14 md:h-14 bg-white dark:bg-slate-800 text-center font-black text-xl md:text-2xl rounded-xl border-2 border-slate-200 dark:border-slate-700 focus:border-blue-500 dark:focus:border-blue-500 outline-none text-slate-800 dark:text-slate-100 transition-colors shadow-inner"
                            />
                          </div>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={handlePredictSubmit}
                      className="group flex items-center justify-center gap-3 w-full md:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-2xl font-black text-base md:text-lg shadow-xl shadow-blue-500/20 transition-all mx-auto"
                    >
                      <span>{t("steps.submitPred")}</span>
                      <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                  </motion.div>
                )}

                {/* STEP 1: Lead capture registration */}
                {step === 1 && (
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    className="space-y-6 max-w-md mx-auto w-full"
                  >
                    <div className="text-center">
                      <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white mb-2">
                        {t("steps.regTitle")}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        {t("steps.regDesc")}
                      </p>
                    </div>

                    <form onSubmit={handleRegisterSubmit} className="space-y-4">
                      <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase mb-1">
                          {t("steps.igLabel")}
                        </label>
                        <input
                          type="text"
                          placeholder="@instagram_kamu"
                          value={username}
                          onChange={(e) => setUsername(e.target.value)}
                          className={`w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border-2 rounded-xl focus:outline-none focus:border-blue-500 font-bold transition-all ${
                            formErrors.username ? "border-red-500 dark:border-red-900" : "border-slate-200 dark:border-slate-700"
                          }`}
                        />
                        {formErrors.username && (
                          <span className="text-xs text-red-500 font-semibold mt-1 block">
                            {formErrors.username}
                          </span>
                        )}
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-400 uppercase mb-1">
                          {t("steps.waLabel")}
                        </label>
                        <input
                          type="tel"
                          placeholder="081234567890"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className={`w-full px-4 py-3 bg-slate-50 dark:bg-slate-900 border-2 rounded-xl focus:outline-none focus:border-blue-500 font-bold transition-all ${
                            formErrors.phone ? "border-red-500 dark:border-red-900" : "border-slate-200 dark:border-slate-700"
                          }`}
                        />
                        {formErrors.phone && (
                          <span className="text-xs text-red-500 font-semibold mt-1 block">
                            {formErrors.phone}
                          </span>
                        )}
                      </div>

                      <div className="flex gap-3 pt-2">
                        <button
                          type="button"
                          onClick={() => setStep(0)}
                          className="flex-1 py-4 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-200 rounded-xl font-bold hover:bg-slate-200 transition-all text-center"
                        >
                          {t("steps.back")}
                        </button>
                        <button
                          type="submit"
                          className="flex-1 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-black shadow-lg shadow-blue-500/20 transition-all text-center"
                        >
                          {t("steps.send")}
                        </button>
                      </div>
                    </form>
                  </motion.div>
                )}

                {/* STEP 2: Submission success & Admin Simulator */}
                {step === 2 && (
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="space-y-8"
                  >
                    <div className="text-center">
                      <div className="w-14 h-14 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mx-auto text-green-500 mb-4 animate-bounce">
                        <CheckCircle2 size={28} />
                      </div>
                      <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white mb-2">
                        {t("steps.successTitle")}
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-slate-400">
                        Prediksi atas nama <span className="font-extrabold text-blue-600">{username}</span> telah masuk ke sistem.
                      </p>
                    </div>

                    {/* Show User Predictions Summary */}
                    <div className="bg-slate-50 dark:bg-slate-900/50 rounded-2xl p-4 md:p-6 border border-slate-100 dark:border-slate-700">
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-3 block text-center">
                        Prediksi Skor Anda
                      </span>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                        {matches.map(match => (
                          <div key={match.id} className="text-center p-2 bg-white dark:bg-slate-800 rounded-xl shadow-sm">
                            <span className="text-xs font-bold text-slate-400">{match.homeFlag} vs {match.awayFlag}</span>
                            <p className="font-black text-lg text-slate-800 dark:text-white mt-1">
                              {predictions[match.id].homeScore} - {predictions[match.id].awayScore}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Info Rules Panel */}
                    <div className="bg-blue-50 dark:bg-blue-900/10 border border-blue-100 dark:border-blue-800/50 rounded-2xl p-4 md:p-6 flex items-start gap-3">
                      <Info className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                      <div className="text-xs md:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        <p className="font-black text-blue-800 dark:text-blue-400 mb-1">Aturan Perhitungan Poin:</p>
                        <ul className="list-disc list-inside space-y-0.5">
                          <li><strong>3 Poin</strong>: Skor tepat (Contoh: Tebak 2-1, Hasil 2-1)</li>
                          <li><strong>1 Poin</strong>: Hasil akhir tepat tetapi skor beda (Contoh: Tebak 2-1, Hasil 1-0)</li>
                          <li><strong>0 Poin</strong>: Hasil salah</li>
                        </ul>
                      </div>
                    </div>

                    {/* Admin Simulator Section */}
                    <div className="border-2 border-dashed border-amber-300 dark:border-amber-900/60 bg-amber-500/5 dark:bg-amber-500/2 rounded-[24px] p-5 md:p-8 relative">
                      <div className="absolute -top-3 left-6 px-3 py-1 bg-amber-500 text-white font-black text-[10px] uppercase rounded-full tracking-widest flex items-center gap-1.5 shadow-md shadow-amber-500/10">
                        <Settings size={12} className="animate-spin" />
                        Admin Match Simulator
                      </div>

                      <div className="space-y-4">
                        <div className="text-center md:text-left">
                          <h4 className="text-sm font-black text-slate-800 dark:text-white">Input Hasil Akhir Asli</h4>
                          <p className="text-xs text-slate-500">Silakan ubah hasil skor asli di bawah ini untuk mensimulasikan sistem perhitungan poin kami.</p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          {matches.map(match => (
                            <div key={match.id} className="flex items-center justify-between md:flex-col bg-white dark:bg-slate-800/80 p-3 rounded-xl shadow-sm border border-slate-200/50 dark:border-slate-700/50">
                              <span className="text-[10px] font-bold text-slate-400">{match.homeFlag} vs {match.awayFlag}</span>
                              <div className="flex items-center gap-2 mt-1">
                                <input
                                  type="text"
                                  maxLength={1}
                                  value={realResults[match.id].homeScore}
                                  onChange={(e) => handleRealScoreChange(match.id, "home", e.target.value)}
                                  className="w-8 h-8 bg-slate-50 dark:bg-slate-900 text-center font-bold text-sm rounded border border-slate-200 dark:border-slate-700 focus:border-amber-500 outline-none text-slate-800 dark:text-slate-100"
                                />
                                <span className="font-bold text-slate-400">:</span>
                                <input
                                  type="text"
                                  maxLength={1}
                                  value={realResults[match.id].awayScore}
                                  onChange={(e) => handleRealScoreChange(match.id, "away", e.target.value)}
                                  className="w-8 h-8 bg-slate-50 dark:bg-slate-900 text-center font-bold text-sm rounded border border-slate-200 dark:border-slate-700 focus:border-amber-500 outline-none text-slate-800 dark:text-slate-100"
                                />
                              </div>
                            </div>
                          ))}
                        </div>

                        <button
                          onClick={handleCalculateStandings}
                          className="group flex items-center justify-center gap-2 w-full py-4 bg-amber-500 hover:bg-amber-600 text-slate-950 font-black rounded-xl text-sm md:text-base shadow-xl shadow-amber-500/10 hover:shadow-amber-500/20 transition-all mt-4"
                        >
                          <TrendingUp size={18} />
                          <span>Proses Hasil & Hitung Peringkat</span>
                        </button>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* STEP 3: Calculating Loading Screen */}
                {step === 3 && (
                  <motion.div
                    key="step3"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6 md:space-y-8 text-center py-12"
                  >
                    <div className="relative w-24 h-24 md:w-28 md:h-28 mx-auto">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
                        className="absolute inset-0 border-4 border-amber-200 dark:border-amber-900/30 border-t-amber-500 rounded-full"
                      />
                      <div className="absolute inset-0 flex items-center justify-center text-amber-500">
                        <Award size={36} className="animate-pulse" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-black text-slate-900 dark:text-white mb-2">
                        Memproses Data Kampanye...
                      </h3>
                      <p className="text-sm md:text-base text-slate-500 dark:text-slate-400 animate-pulse font-bold">
                        Menghitung skor dari 15,230 partisipan tebak skor
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* STEP 4: Standings / Leaderboard */}
                {step === 4 && (
                  <motion.div
                    key="step4"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="space-y-6 md:space-y-8 w-full"
                  >
                    {/* Winner / Congratulations Announcement */}
                    <div className="text-center space-y-4">
                      <div className="relative inline-block">
                        <div className="w-20 h-20 bg-yellow-400 rounded-2xl flex items-center justify-center mx-auto shadow-2xl shadow-yellow-500/40 text-slate-950">
                          <Trophy size={36} />
                        </div>
                        <span className="absolute -top-1 -right-1 flex h-4 w-4">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                          <span className="relative inline-flex rounded-full h-4 w-4 bg-blue-500"></span>
                        </span>
                      </div>
                      
                      <div>
                        <span className="text-green-500 font-black uppercase tracking-widest text-xs md:text-sm block mb-1">
                          Kalkulasi Selesai!
                        </span>
                        <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white">
                          Poin Anda: <span className="text-blue-600">{calculatedPoints} Poin</span>
                        </h3>
                        <p className="text-sm text-slate-500 mt-2 max-w-sm mx-auto">
                          Anda berada di peringkat <span className="font-extrabold text-slate-800 dark:text-slate-200">#{userRank}</span> dari 15,231 pemain.
                        </p>
                      </div>
                    </div>

                    {/* Point Threshold Progress Milestone */}
                    <div className="bg-slate-50 dark:bg-slate-900/60 rounded-2xl p-5 border border-slate-100 dark:border-slate-700/80 space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Milestone Hadiah Poin Kampanye</span>
                        <span className="text-xs font-black text-blue-600 dark:text-blue-400">{calculatedPoints} / 9 Poin Tercapai</span>
                      </div>
                      
                      {/* Progress Bar */}
                      <div className="h-3 w-full bg-slate-200 dark:bg-slate-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-1000"
                          style={{ width: `${Math.min((calculatedPoints / 9) * 100, 100)}%` }}
                        />
                      </div>

                      {/* Milestones list */}
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                        <div className={`p-3.5 rounded-xl border text-center transition-all ${
                          calculatedPoints >= 3 
                            ? "bg-green-500/10 border-green-500/30 text-green-700 dark:text-green-400" 
                            : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-400"
                        }`}>
                          <span className="text-xs font-bold block">Target: 3 Poin</span>
                          <span className="font-extrabold text-sm block mt-1">Voucher Rp 20k</span>
                          <span className="text-[10px] font-black uppercase tracking-widest block mt-2 text-green-600 dark:text-green-400">
                            {calculatedPoints >= 3 ? "✓ Klaim Voucher" : "Belum Dicapai"}
                          </span>
                        </div>

                        <div className={`p-3.5 rounded-xl border text-center transition-all ${
                          calculatedPoints >= 6 
                            ? "bg-green-500/10 border-green-500/30 text-green-700 dark:text-green-400" 
                            : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-400"
                        }`}>
                          <span className="text-xs font-bold block">Target: 6 Poin</span>
                          <span className="font-extrabold text-sm block mt-1">Voucher Rp 100k</span>
                          <span className="text-[10px] font-black uppercase tracking-widest block mt-2 text-green-600 dark:text-green-400">
                            {calculatedPoints >= 6 ? "✓ Klaim Voucher" : "Belum Dicapai"}
                          </span>
                        </div>

                        <div className={`p-3.5 rounded-xl border text-center transition-all ${
                          calculatedPoints >= 9 
                            ? "bg-green-500/10 border-green-500/30 text-green-700 dark:text-green-400" 
                            : "bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 text-slate-400"
                        }`}>
                          <span className="text-xs font-bold block">Target: 9 Poin</span>
                          <span className="font-extrabold text-sm block mt-1">Jersey Original 👕</span>
                          <span className="text-[10px] font-black uppercase tracking-widest block mt-2 text-green-600 dark:text-green-400">
                            {calculatedPoints >= 9 ? "✓ Klaim Jersey" : "Belum Dicapai"}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Leaderboard Table */}
                    <div className="bg-slate-50 dark:bg-slate-900/40 rounded-2xl border border-slate-100 dark:border-slate-700/80 overflow-hidden shadow-sm">
                      <div className="px-5 py-3 border-b border-slate-100 dark:border-slate-700/60 bg-slate-100/50 dark:bg-slate-800/30 flex items-center justify-between">
                        <span className="text-xs font-bold text-slate-500 uppercase">Peringkat Klasemen</span>
                        <span className="text-xs font-bold text-slate-500 uppercase">Poin</span>
                      </div>
                      
                      <div className="divide-y divide-slate-100 dark:divide-slate-700/40">
                        {leaderboard.map((item) => (
                          <div 
                            key={item.rank}
                            className={`px-5 py-3.5 flex items-center justify-between transition-colors ${
                              item.isUser 
                                ? "bg-blue-50/70 dark:bg-blue-900/10 font-bold border-l-4 border-blue-500" 
                                : "hover:bg-slate-100/30 dark:hover:bg-slate-800/10"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              {/* Rank Badges */}
                              <div className="w-6 text-center">
                                {item.rank === 1 ? (
                                  <span className="text-yellow-500 font-extrabold text-base">🥇</span>
                                ) : item.rank === 2 ? (
                                  <span className="text-slate-400 font-extrabold text-base">🥈</span>
                                ) : item.rank === 3 ? (
                                  <span className="text-amber-600 font-extrabold text-base">🥉</span>
                                ) : (
                                  <span className="text-slate-400 font-mono text-sm">{item.rank}</span>
                                )}
                              </div>
                              <span className={`text-sm ${
                                item.isUser 
                                  ? "text-blue-700 dark:text-blue-400 font-black" 
                                  : "text-slate-700 dark:text-slate-300 font-semibold"
                              }`}>
                                {item.username} {item.isUser && "(Anda)"}
                              </span>
                            </div>
                            
                            <div className="flex items-center gap-2">
                              <span className="text-xs text-slate-400 font-mono font-medium">({item.exactCount} skor tepat)</span>
                              <span className={`text-sm font-black ${
                                item.isUser ? "text-blue-600 dark:text-blue-400" : "text-slate-800 dark:text-slate-100"
                              }`}>
                                {item.points} pt
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                      <button
                        onClick={resetDemo}
                        className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-4 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-2xl font-bold hover:bg-slate-200 transition-all text-sm"
                      >
                        <RefreshCw size={16} />
                        <span>Reset Simulasi</span>
                      </button>
                      <a 
                        href="https://wa.me/6281166016611?text=Halo%20Nakha%20Solution,%20saya%20tertarik%20dengan%20Platform%20Tebak%20Skor."
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={handleWhatsAppClick}
                        className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-4 bg-blue-600 text-white rounded-2xl font-black shadow-lg shadow-blue-500/20 hover:scale-105 transition-all text-sm"
                      >
                        <CheckCircle2 size={16} />
                        <span>Minta Penawaran Campaign</span>
                      </a>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Demo Footer / Tech Stats */}
            <div className="bg-slate-50/50 dark:bg-slate-900/50 px-4 md:px-8 py-4 md:py-6 border-t border-slate-100 dark:border-slate-700 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 text-center md:text-left">
              <div className="space-y-1">
                <p className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest">Database</p>
                <div className="flex items-center justify-center md:justify-start gap-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[9px] md:text-xs font-bold text-slate-600 dark:text-slate-300">Live Auto-Sync</span>
                </div>
              </div>
              <div className="space-y-1">
                <p className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest">Anti-Fraud</p>
                <span className="text-[9px] md:text-xs font-bold text-slate-600 dark:text-slate-300">WA OTP / Device Bind</span>
              </div>
              <div className="space-y-1">
                <p className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest">Sponsor Integration</p>
                <span className="text-[9px] md:text-xs font-bold text-slate-600 dark:text-slate-300">Ad banner & vouchers</span>
              </div>
              <div className="space-y-1">
                <p className="text-[8px] md:text-[10px] font-black text-slate-400 uppercase tracking-widest">Scale</p>
                <span className="text-[9px] md:text-xs font-bold text-slate-600 dark:text-slate-300">100k+ users support</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default TebakSkorDemo;
