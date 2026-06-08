"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { Link } from "@/i18n/routing";
import { ArrowLeft, CheckCircle2, MessageCircle, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

const ServiceDetailPage = () => {
  const t = useTranslations("Services");
  const params = useParams();
  const slug = params.slug as string;

  // Find the service data based on the slug
  const servicesData = t.raw("items");
  const serviceKey = Object.keys(servicesData).find(
    (key) => servicesData[key].slug === slug
  );

  if (!serviceKey) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Service Not Found</h1>
        <Link href="/" className="text-blue-600 hover:underline">
          {t("backToHome")}
        </Link>
      </div>
    );
  }

  const service = servicesData[serviceKey];

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-slate-950">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section with Image */}
        <section className="relative h-[60vh] min-h-[400px] flex items-center overflow-hidden">
          <Image
            src={service.image}
            alt={service.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-[2px]"></div>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
            <Link 
              href="/#services" 
              className="inline-flex items-center text-sm font-bold text-white/70 hover:text-white transition-colors mb-8 group"
            >
              <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              {t("backToHome")}
            </Link>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-tight max-w-3xl">
                {service.title}
              </h1>
              <p className="text-xl text-slate-200 max-w-2xl leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-24 bg-white dark:bg-slate-950">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
              {/* Left Column: Key Features */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-8">
                  {t("whyChoose")}
                </h2>
                <div className="space-y-6">
                  {service.features.map((feature: string, idx: number) => (
                    <div key={idx} className="flex items-start gap-4 p-6 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-100 dark:border-slate-800 hover:shadow-lg transition-all">
                      <div className="bg-blue-600 rounded-lg p-1 text-white shrink-0 mt-1">
                        <CheckCircle2 size={18} />
                      </div>
                      <span className="text-lg font-semibold text-slate-700 dark:text-slate-200 leading-tight">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Right Column: Engagement Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="lg:sticky lg:top-32"
              >
                <div className="bg-slate-900 dark:bg-blue-900/10 rounded-[40px] p-10 lg:p-12 text-white border border-white/10 relative overflow-hidden group">
                  {/* Decorative Gradient */}
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600 rounded-full -mr-32 -mt-32 opacity-20 blur-3xl group-hover:opacity-40 transition-opacity"></div>
                  
                  <div className="relative z-10">
                    <h3 className="text-3xl font-black mb-6">
                      {t("consultTitle")}
                    </h3>
                    <p className="text-slate-400 dark:text-slate-300 text-lg mb-10 leading-relaxed">
                      {t("consultDesc")}
                    </p>
                    <a
                      href="https://wa.me/6281166016611?text=Halo%20Nakha%20Solution,%20saya%20ingin%20berkonsultasi."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-3 bg-blue-600 text-white w-full py-5 rounded-2xl font-black text-lg hover:bg-blue-700 shadow-xl shadow-blue-500/20 transition-all active:scale-95 group"
                    >
                      <MessageCircle size={24} />
                      {t("cta")}
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </a>

                    {/* Social Proof Placeholder */}
                    <div className="mt-12 pt-12 border-t border-white/10 flex items-center gap-4">
                      <div className="flex -space-x-2">
                        {[1, 2, 3].map((i) => (
                          <div key={i} className="w-10 h-10 rounded-full border-2 border-slate-900 overflow-hidden bg-slate-800">
                             <Image 
                               src={`https://i.pravatar.cc/100?u=${i + 20}`} 
                               alt="Trusted User" 
                               width={40} 
                               height={40} 
                             />
                          </div>
                        ))}
                      </div>
                      <p className="text-sm font-bold text-slate-400">
                        Dipercaya oleh 50+ perusahaan di Sumatra
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ServiceDetailPage;
