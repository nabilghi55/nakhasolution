"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import { Link } from "@/i18n/routing";
import { ArrowLeft, ExternalLink, Target, Lightbulb, TrendingUp } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import Image from "next/image";

const PortfolioDetailPage = () => {
  const t = useTranslations("Portfolio");
  const params = useParams();
  const slug = params.slug as string;

  const projectsData = t.raw("projects");
  const projectKey = Object.keys(projectsData).find(
    (key) => projectsData[key].slug === slug
  );

  if (!projectKey) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
        <Link href="/#portfolio" className="text-blue-600 hover:underline">
          {t("backToHome")}
        </Link>
      </div>
    );
  }

  const project = projectsData[projectKey];

  // Map local assets and external links to the dynamic keys
  const images: Record<string, string> = {
    raya: "/assets/backgroundportofolio/RAYA 1.png",
    putra: "/assets/backgroundportofolio/PWM3.png",
    alfajr: "/assets/backgroundportofolio/ALFJR2.png",
  };
  const logos: Record<string, string> = {
    raya: "/assets/logoportofolio/logorayalawfirm.webp",
    putra: "/assets/logoportofolio/logo-pwm.webp",
    alfajr: "/assets/logoportofolio/logoalfajr.png",
  };
  const links: Record<string, string> = {
    raya: "http://rayalawfirm.vercel.app/",
    putra: "https://putrawijayamandiri.id/",
    alfajr: "https://alfajrumroh.co.id/",
  };

  const image = images[projectKey] || "https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&q=80&w=1200";
  const logo = logos[projectKey];
  const externalLink = links[projectKey] || "#";

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-slate-950">
      <Navbar />
      
      <main className="flex-grow pt-24">
        {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[500px] flex items-center overflow-hidden">
          <Image
            src={image}
            alt={project.title}
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-md"></div>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 w-full">
            <Link 
              href="/#portfolio" 
              className="inline-flex items-center text-sm font-bold text-white/70 hover:text-white transition-colors mb-8 group"
            >
              <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
              {t("backToHome")}
            </Link>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col lg:flex-row gap-8 items-start lg:items-center"
            >
              {logo && (
                <div className="bg-white p-6 rounded-3xl shadow-2xl shrink-0">
                  <Image src={logo} alt="Logo" width={100} height={100} className="object-contain" />
                </div>
              )}
              <div>
                <span className="inline-block px-4 py-1.5 rounded-full bg-blue-600 text-white text-xs font-bold uppercase tracking-wider mb-4">
                  {t("caseStudy")}
                </span>
                <h1 className="text-5xl lg:text-7xl font-black text-white mb-6 leading-tight max-w-4xl">
                  {project.title}
                </h1>
                <p className="text-xl text-slate-300 max-w-2xl leading-relaxed">
                  {project.desc}
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content Section */}
        <section className="py-24 bg-white dark:bg-slate-950">
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="md:col-span-3 space-y-16"
              >
                {/* Challenge */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                  <div className="w-16 h-16 rounded-3xl bg-red-100 dark:bg-red-900/30 text-red-600 flex items-center justify-center shrink-0 shadow-sm mt-1">
                    <Target size={32} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-6">{t("challenge")}</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed border-l-4 border-slate-200 dark:border-slate-800 pl-6">
                      {project.challengeText}
                    </p>
                  </div>
                </div>

                {/* Solution */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                  <div className="w-16 h-16 rounded-3xl bg-blue-100 dark:bg-blue-900/30 text-blue-600 flex items-center justify-center shrink-0 shadow-sm mt-1">
                    <Lightbulb size={32} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-6">{t("solution")}</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed border-l-4 border-slate-200 dark:border-slate-800 pl-6">
                      {project.solutionText}
                    </p>
                  </div>
                </div>

                {/* Impact */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-start">
                  <div className="w-16 h-16 rounded-3xl bg-green-100 dark:bg-green-900/30 text-green-600 flex items-center justify-center shrink-0 shadow-sm mt-1">
                    <TrendingUp size={32} />
                  </div>
                  <div>
                    <h2 className="text-3xl font-black text-slate-900 dark:text-white mb-6">{t("impact")}</h2>
                    <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed border-l-4 border-slate-200 dark:border-slate-800 pl-6">
                      {project.impactText}
                    </p>
                  </div>
                </div>

                {/* Launch Button */}
                <div className="pt-16 pb-8 text-center border-t border-slate-100 dark:border-slate-800">
                  <a 
                    href={externalLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-3 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-12 py-6 rounded-[32px] font-black text-xl hover:scale-105 transition-all shadow-2xl active:scale-95 group"
                  >
                    {t("launch")}
                    <ExternalLink size={24} className="group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                  </a>
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

export default PortfolioDetailPage;
