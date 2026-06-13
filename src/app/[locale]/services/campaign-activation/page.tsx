"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { 
  ArrowLeft, 
  CheckCircle2, 
  MessageCircle, 
  ArrowRight, 
  Trophy, 
  Sparkles,
  Users,
  Vote,
  Target,
  BarChart3,
  Award,
  Zap,
  TrendingUp,
  MessageSquare
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

declare global {
  interface Window {
    fbq: any;
  }
}

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

const CampaignActivationLanding = () => {
  const t = useTranslations("Services");
  
  const service = {
    title: t("items.campaign-activation.title"),
    desc: t("items.campaign-activation.desc"),
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1200",
    features: t.raw("items.campaign-activation.features")
  };

  const handleWhatsAppClick = (productName: string) => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead", { 
        content_name: `WhatsApp Inquiry for ${productName}`,
        content_category: "Campaign Activation"
      });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-slate-950">
      <Navbar />
      
      <main className="flex-grow pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="relative min-h-[450px] md:min-h-[550px] flex flex-col justify-center overflow-hidden pt-16 md:pt-24 pb-12">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/75 backdrop-blur-[2px]"></div>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
            <Link 
              href="/#services" 
              className="inline-flex items-center text-sm font-bold text-white/70 hover:text-white transition-colors mb-8 md:mb-12 group"
            >
              <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              {t("backToHome")}
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="px-3 py-1 bg-blue-600/30 text-blue-400 border border-blue-500/30 rounded-full font-black text-xs uppercase tracking-widest inline-block mb-4">
                Interactive Marketing Solution
              </span>
              <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 md:mb-8 leading-[1.2] md:leading-[1.1] max-w-4xl text-balance">
                {service.title}
              </h1>
              <p className="text-base sm:text-lg md:text-xl text-slate-200 max-w-2xl leading-relaxed text-pretty">
                {service.desc}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Product Selection Section */}
        <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/20">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="px-3 py-1 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-600 dark:text-indigo-400 rounded-full font-black text-xs uppercase tracking-widest inline-block mb-3">
                Pilih Produk Anda
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-4">
                Dua Solusi Campaign Activation Terbaik
              </h2>
              <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Tingkatkan konversi data, interaksi media sosial, dan loyalitas pelanggan Anda melalui platform interaktif yang siap disesuaikan dengan brand Anda.
              </p>
            </div>

            <motion.div 
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
            >
              {/* Product 1: Instagram Comment Picker */}
              <motion.div 
                variants={cardVariants}
                className="bg-white dark:bg-slate-800 rounded-[32px] border border-slate-100 dark:border-slate-700/80 p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group flex flex-col justify-between"
              >
                {/* Accent Background Gradient */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-pink-500/10 to-rose-500/5 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
                
                <div>
                  <div className="w-14 h-14 bg-pink-100 dark:bg-pink-900/30 rounded-2xl flex items-center justify-center text-pink-600 mb-6">
                    <InstagramIcon size={28} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-3">
                    Instagram Comment Picker
                  </h3>
                  <span className="inline-block px-2.5 py-0.5 bg-pink-50 dark:bg-pink-950 text-pink-600 dark:text-pink-400 font-extrabold text-xs uppercase rounded-md mb-6">
                    Social Media Engagement
                  </span>
                  
                  <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed mb-8">
                    Tarik data komentar dari postingan Instagram secara instan dan otomatis. Dilengkapi dengan filter AI untuk menyaring jawaban kuis yang benar, deteksi komentar duplikat untuk keadilan, dan sistem Live Draw interaktif untuk mengumumkan pemenang secara transparan.
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
                      <CheckCircle2 size={16} className="text-pink-500 shrink-0" />
                      <span>Live data fetching via Instagram API resmi</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
                      <CheckCircle2 size={16} className="text-pink-500 shrink-0" />
                      <span>Filter jawaban benar secara otomatis dengan AI</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
                      <CheckCircle2 size={16} className="text-pink-500 shrink-0" />
                      <span>Tampilan undian langsung (Live Draw) menarik</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-slate-100 dark:border-slate-700/50">
                  <Link 
                    href="/services/campaign-activation/instagram-picker"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-100 font-bold rounded-2xl transition-all text-sm"
                  >
                    <span>Coba Demo Live</span>
                    <ArrowRight size={16} />
                  </Link>
                  <a
                    href="https://wa.me/6281166016611?text=Halo%20Nakha%20Solution,%20saya%20tertarik%20dengan%20Instagram%20Picker%20Platform."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleWhatsAppClick("Instagram Picker")}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-pink-600 hover:bg-pink-700 text-white font-black rounded-2xl transition-all shadow-lg shadow-pink-500/20 text-sm"
                  >
                    <MessageCircle size={18} />
                    <span>Pesan Sekarang</span>
                  </a>
                </div>
              </motion.div>

              {/* Product 2: Tebak Skor Campaign */}
              <motion.div 
                variants={cardVariants}
                className="bg-white dark:bg-slate-800 rounded-[32px] border border-slate-100 dark:border-slate-700/80 p-8 lg:p-12 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group flex flex-col justify-between"
              >
                {/* Accent Background Gradient */}
                <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-br from-blue-500/10 to-indigo-500/5 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500"></div>
                
                <div>
                  <div className="w-14 h-14 bg-blue-100 dark:bg-blue-900/30 rounded-2xl flex items-center justify-center text-blue-600 mb-6">
                    <Trophy size={28} />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white mb-3">
                    Tebak Skor Pertandingan
                  </h3>
                  <span className="inline-block px-2.5 py-0.5 bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 font-extrabold text-xs uppercase rounded-md mb-6">
                    Lead Gen & Interactive Gamification
                  </span>
                  
                  <p className="text-slate-600 dark:text-slate-300 text-sm md:text-base leading-relaxed mb-8">
                    Buat halaman atau widget game tebak skor khusus untuk turnamen olahraga populer (Piala Dunia, Euro, Liga 1). Sangat cocok untuk mengumpulkan database kontak WhatsApp/Instagram secara masif melalui integrasi form registrasi interaktif.
                  </p>
                  
                  <ul className="space-y-3 mb-8">
                    <li className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
                      <CheckCircle2 size={16} className="text-blue-500 shrink-0" />
                      <span>Form input prediksi skor responsif & user-friendly</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
                      <CheckCircle2 size={16} className="text-blue-500 shrink-0" />
                      <span>Leaderboard (Tabel Klasemen) otomatis real-time</span>
                    </li>
                    <li className="flex items-center gap-2 text-sm font-semibold text-slate-700 dark:text-slate-200">
                      <CheckCircle2 size={16} className="text-blue-500 shrink-0" />
                      <span>Optimasi penempatan iklan sponsor & kupon voucher</span>
                    </li>
                  </ul>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 pt-6 border-t border-slate-100 dark:border-slate-700/50">
                  <Link 
                    href="/services/campaign-activation/tebak-skor"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-800 dark:text-slate-100 font-bold rounded-2xl transition-all text-sm"
                  >
                    <span>Coba Demo Live</span>
                    <ArrowRight size={16} />
                  </Link>
                  <a
                    href="https://wa.me/6281166016611?text=Halo%20Nakha%20Solution,%20saya%20tertarik%20dengan%20Platform%20Tebak%20Skor."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleWhatsAppClick("Tebak Skor")}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-4 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl transition-all shadow-lg shadow-blue-500/20 text-sm"
                  >
                    <MessageCircle size={18} />
                    <span>Pesan Sekarang</span>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Ideas & Strategic Use Cases */}
        <section className="py-20 md:py-28 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="text-center mb-16">
              <span className="px-3 py-1 bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400 rounded-full font-black text-xs uppercase tracking-widest inline-block mb-3">
                Ide & Strategi Kampanye
              </span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-4">
                Bagaimana Brand Menggunakan Platform Ini?
              </h2>
              <p className="text-base md:text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                Berikut adalah beberapa ide kreatif yang dapat diimplementasikan langsung untuk meningkatkan engagement dan profit bisnis Anda.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-xl flex items-center justify-center text-blue-600 mb-4">
                  <Vote size={22} />
                </div>
                <h4 className="font-extrabold text-slate-900 dark:text-white text-base mb-2">1. Tebak Skor Berhadiah (Nobar Cafe)</h4>
                <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm leading-relaxed">
                  Sangat cocok untuk Cafe/Resto saat nobar. Pengunjung memindai kode QR, masuk ke halaman Tebak Skor, memasukkan skor, dan pemenang mendapatkan makanan gratis secara instan.
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-pink-100 dark:bg-pink-900/30 rounded-xl flex items-center justify-center text-pink-600 mb-4">
                  <MessageSquare size={22} />
                </div>
                <h4 className="font-extrabold text-slate-900 dark:text-white text-base mb-2">2. Giveaway Instagram (Filter Skor)</h4>
                <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm leading-relaxed">
                  Brand memposting kuis di Instagram. Menggunakan Instagram Picker, sistem memfilter otomatis komentar yang berisi jawaban skor yang benar, lalu mengundi pemenang secara live.
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-xl flex items-center justify-center text-purple-600 mb-4">
                  <Zap size={22} />
                </div>
                <h4 className="font-extrabold text-slate-900 dark:text-white text-base mb-2">3. Voucher Diskon WhatsApp Instan</h4>
                <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm leading-relaxed">
                  Semua peserta tebak skor yang menjawab benar otomatis dikirimi kode voucher belanja toko retail Anda langsung melalui pesan WhatsApp otomatis.
                </p>
              </div>

              <div className="bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 p-6 rounded-2xl hover:scale-105 transition-transform duration-300">
                <div className="w-12 h-12 bg-emerald-100 dark:bg-emerald-900/30 rounded-xl flex items-center justify-center text-emerald-600 mb-4">
                  <TrendingUp size={22} />
                </div>
                <h4 className="font-extrabold text-slate-900 dark:text-white text-base mb-2">4. Traffic Booster Portal Media</h4>
                <p className="text-slate-600 dark:text-slate-400 text-xs md:text-sm leading-relaxed">
                  Menyematkan widget Tebak Skor di portal media lokal. Pembaca setia berpartisipasi setiap hari untuk naik di klasemen bulanan demi memperebutkan hadiah utama.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Point Target System & Case Studies Section */}
        <section className="py-20 md:py-24 bg-slate-50 dark:bg-slate-900/40 border-t border-b border-slate-100 dark:border-slate-800">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              
              {/* Left Side: Point Target System Explanation */}
              <div className="lg:col-span-5 space-y-6">
                <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full font-black text-xs uppercase tracking-widest inline-block">
                  Sistem Target Poin
                </span>
                <h3 className="text-3xl font-black text-slate-900 dark:text-white leading-tight">
                  Sistem Hadiah Berbasis Target Poin (Milestone)
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed">
                  Selain berkompetisi memperebutkan posisi teratas di papan klasemen, Anda dapat merancang kampanye di mana **siapa saja yang mencapai target akumulasi poin tertentu** dapat mengklaim hadiah langsung.
                </p>
                <div className="space-y-4">
                  <div className="flex gap-3 items-start">
                    <div className="bg-blue-600 text-white rounded-lg p-1 shrink-0 mt-1">
                      <CheckCircle2 size={16} />
                    </div>
                    <div>
                      <h5 className="font-extrabold text-sm text-slate-900 dark:text-white">Lebih Adil Bagi Seluruh Peserta</h5>
                      <p className="text-xs text-slate-500 mt-0.5">Semua orang berkesempatan menang asal analisis skor mereka tepat, tanpa dibatasi hanya untuk 3 besar klasemen.</p>
                    </div>
                  </div>
                  <div className="flex gap-3 items-start">
                    <div className="bg-blue-600 text-white rounded-lg p-1 shrink-0 mt-1">
                      <CheckCircle2 size={16} />
                    </div>
                    <div>
                      <h5 className="font-extrabold text-sm text-slate-900 dark:text-white">Otomasi Pengiriman Voucher Belanja</h5>
                      <p className="text-xs text-slate-500 mt-0.5">Sistem kami dapat diintegrasikan dengan WhatsApp Gateway untuk mengirimkan kode promo instan ketika target poin peserta tercapai.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side: Case Studies Grid */}
              <div className="lg:col-span-7 space-y-6">
                <h4 className="text-xl font-extrabold text-slate-900 dark:text-white flex items-center gap-2">
                  <Award className="text-yellow-500" /> Studi Kasus Keberhasilan Campaign
                </h4>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Case 1 */}
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700/80 shadow-sm space-y-3">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">F&B / Retail Brand</span>
                    <h5 className="font-black text-sm text-slate-900 dark:text-white">Nobar Cafe Piala Dunia</h5>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      Jaringan kafe menyelenggarakan tebak skor selama Piala Dunia 2026. Pelanggan yang mencapai akumulasi **9 poin** otomatis menerima voucher diskon Rp 50,000 langsung ke nomor WhatsApp mereka.
                    </p>
                    <div className="pt-2 border-t border-slate-100 dark:border-slate-700 text-xs font-bold text-green-600 flex justify-between">
                      <span>Database Baru:</span>
                      <span>12,400+ Kontak WA</span>
                    </div>
                  </div>

                  {/* Case 2 */}
                  <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700/80 shadow-sm space-y-3">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">E-Commerce App</span>
                    <h5 className="font-black text-sm text-slate-900 dark:text-white">Daily Check-in Booster</h5>
                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                      Aplikasi e-commerce mengadakan game tebak skor harian. Pengguna yang mencapai target akumulasi **30 poin** sepanjang grup grup berhak mengikuti undian Grand Prize Jersey Original.
                    </p>
                    <div className="pt-2 border-t border-slate-100 dark:border-slate-700 text-xs font-bold text-green-600 flex justify-between">
                      <span>Daily Active Users:</span>
                      <span>Naik 22% Selama Event</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* Key Features & Why Choose Us Section */}
        <section className="py-20 md:py-28 bg-slate-50 dark:bg-slate-900/20 border-t border-slate-100 dark:border-slate-900">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full font-black text-xs uppercase tracking-widest inline-block mb-3">
                  Fitur Teknologi
                </span>
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 dark:text-white mb-6">
                  Kenapa Memilih Platform Kami?
                </h2>
                <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed mb-8">
                  Sistem kami dibangun menggunakan teknologi web modern berkinerja tinggi, menjamin kelancaran kampanye Anda meskipun menangani puluhan ribu pendaftar sekaligus dalam hitungan detik.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {service.features.map((feature: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="bg-blue-600 rounded-lg p-1 text-white shrink-0 mt-0.5">
                        <CheckCircle2 size={14} />
                      </div>
                      <span className="text-sm font-bold text-slate-700 dark:text-slate-200">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Consultation Call Card */}
              <div className="bg-slate-900 dark:bg-blue-900/10 rounded-[32px] md:rounded-[40px] p-8 md:p-12 text-white border border-white/10 relative overflow-hidden group">
                <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full -mr-32 -mt-32 opacity-20 blur-3xl group-hover:opacity-40 transition-opacity"></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl md:text-3xl font-black mb-4 md:mb-6">
                    {t("consultTitle")}
                  </h3>
                  <p className="text-slate-400 dark:text-slate-300 text-base mb-8 leading-relaxed">
                    Kami siap membantu menyesuaikan platform kuis tebak skor atau instagram picker ini dengan logo, warna, domain, serta alur bisnis yang Anda butuhkan.
                  </p>
                  <a
                    href="https://wa.me/6281166016611?text=Halo%20Nakha%20Solution,%20saya%20ingin%20berkonsultasi%20mengenai%20Campaign%20Activation%20Platform."
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleWhatsAppClick("Consultation")}
                    className="inline-flex items-center justify-center gap-3 bg-blue-600 text-white w-full py-4 rounded-2xl font-black text-base md:text-lg hover:bg-blue-700 shadow-xl shadow-blue-500/20 transition-all active:scale-95 group"
                  >
                    <MessageCircle size={24} />
                    {t("cta")}
                    <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CampaignActivationLanding;
