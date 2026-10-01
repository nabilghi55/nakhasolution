"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ExternalLink, ChevronRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const Portfolio = () => {
  const t = useTranslations("Portfolio");

  const projects = [
    {
      title: "Raya Law Firm",
      slug: t("projects.raya.slug"),
      description: t("projects.raya.desc"),
      image: "/assets/backgroundportofolio/RAYA-1.webp",
      logo: "/assets/logoportofolio/logorayalawfirm.webp",
      link: "https://rayalawfirm.vercel.app/",
      tags: ["Legal Tech", "Next.js"],
    },
    {
      title: "Putra Wijaya Mandiri",
      slug: t("projects.putra.slug"),
      description: t("projects.putra.desc"),
      image: "/assets/backgroundportofolio/PWM3.webp",
      logo: "/assets/logoportofolio/logo-pwm.webp",
      link: "https://putrawijayamandiri.id/",
      tags: ["Industrial", "B2B Showcase"],
    },
    {
      title: "Alfajr Umroh",
      slug: t("projects.alfajr.slug"),
      description: t("projects.alfajr.desc"),
      image: "/assets/backgroundportofolio/ALFJR2.webp",
      logo: "/assets/logoportofolio/logoalfajr.png",
      link: "https://alfajrumroh.co.id/",
      tags: ["Travel & Tour", "Booking System"],
    },
  ];

  return (
    <section id="portfolio" className="py-20 sm:py-28 bg-white dark:bg-[#020617] transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 sm:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center space-x-2 bg-blue-500/10 dark:bg-blue-500/15 border border-blue-500/20 text-blue-600 dark:text-blue-400 px-4 py-1.5 rounded-full text-xs font-bold mb-4 uppercase tracking-widest"
          >
            <Sparkles size={14} />
            <span>{t("badge")}</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-tight tracking-tight"
          >
            {t("title")}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 sm:mt-6 text-base sm:text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto font-medium"
          >
            {t("description")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col h-full glass-card rounded-[28px] sm:rounded-[36px] overflow-hidden border border-slate-200/80 dark:border-slate-800/80 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/15 transition-all duration-500"
            >
              {/* Image Preview Container */}
              <div className="relative h-52 sm:h-64 w-full overflow-hidden bg-slate-950">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-950/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-xs">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-slate-900 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-full font-black text-xs sm:text-sm flex items-center gap-2 transform translate-y-3 group-hover:translate-y-0 transition-all duration-300 shadow-2xl active:scale-95"
                  >
                    <span>{t("launch")}</span>
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
              
              <div className="p-7 sm:p-8 flex flex-col flex-grow justify-between">
                <div>
                  <div className="flex justify-between items-center mb-5 gap-3">
                    <div className="relative h-12 w-12 bg-white p-2 rounded-2xl shadow-sm border border-slate-100 overflow-hidden shrink-0">
                      <Image
                        src={project.logo}
                        alt={`${project.title} Logo`}
                        fill
                        sizes="48px"
                        className="object-contain p-1"
                      />
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span key={tag} className="text-[11px] font-bold tracking-wide bg-blue-500/10 text-blue-600 dark:text-blue-400 px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-3 tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 text-justify">
                    {project.description}
                  </p>
                </div>
                
                <div className="pt-5 border-t border-slate-100 dark:border-slate-800/80 flex justify-between items-center">
                  <Link 
                    href={`/portfolio/${project.slug}`}
                    className="inline-flex items-center text-slate-900 dark:text-white font-bold text-xs sm:text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    <span>{t("viewProject")}</span>
                    <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <span className="text-slate-400 dark:text-slate-600 font-black text-xs">
                    0{index + 1}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
