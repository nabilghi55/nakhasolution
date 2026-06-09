"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { ExternalLink, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

const Portfolio = () => {
  const t = useTranslations("Portfolio");

  const projects = [
    {
      title: "Raya Law Firm",
      slug: t("projects.raya.slug"),
      description: t("projects.raya.desc"),
      image: "/assets/backgroundportofolio/RAYA 1.png",
      logo: "/assets/logoportofolio/logorayalawfirm.webp",
      link: "http://rayalawfirm.vercel.app/",
      tags: ["Legal", "Next.js"],
    },
    {
      title: "Putra Wijaya Mandiri",
      slug: t("projects.putra.slug"),
      description: t("projects.putra.desc"),
      image: "/assets/backgroundportofolio/PWM3.png",
      logo: "/assets/logoportofolio/logo-pwm.webp",
      link: "https://putrawijayamandiri.id/",
      tags: ["Industrial", "Contractor"],
    },
    {
      title: "Alfajr Umroh",
      slug: t("projects.alfajr.slug"),
      description: t("projects.alfajr.desc"),
      image: "/assets/backgroundportofolio/ALFJR2.png",
      logo: "/assets/logoportofolio/logoalfajr.png",
      link: "https://alfajrumroh.co.id/",
      tags: ["Travel", "Umrah"],
    },
  ];

  return (
    <section id="portfolio" className="py-16 sm:py-24 bg-white dark:bg-[#020617] transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-blue-600 dark:text-blue-500 font-bold tracking-wider uppercase text-xs sm:text-sm mb-3 sm:mb-4"
          >
            {t("badge")}
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white leading-tight tracking-tight"
          >
            {t("title")}
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 sm:mt-6 text-base sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto font-medium"
          >
            {t("description")}
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col h-full bg-slate-50 dark:bg-slate-900/50 rounded-[32px] sm:rounded-[40px] overflow-hidden border border-slate-100 dark:border-slate-800 hover:shadow-2xl hover:shadow-blue-500/10 transition-all duration-500"
            >
              {/* Project Image Header */}
              <div className="relative h-48 sm:h-64 w-full overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="bg-white text-slate-900 px-6 sm:px-8 py-2 sm:py-3 rounded-full font-black text-xs sm:text-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 shadow-xl active:scale-95"
                  >
                    {t("launch")} <ExternalLink size={16} />
                  </a>
                </div>
              </div>
              
              <div className="p-6 sm:p-10 flex flex-col flex-grow">
                {/* Logo & Tags Row */}
                <div className="flex flex-col sm:flex-row justify-between items-start mb-4 sm:mb-6 gap-4 sm:gap-0">
                  <div className="relative h-10 w-10 sm:h-12 sm:w-12 bg-white dark:bg-white p-2 rounded-xl sm:rounded-2xl shadow-sm overflow-hidden shrink-0">
                    <Image
                      src={project.logo}
                      alt={`${project.title} Logo`}
                      fill
                      sizes="48px"
                      className="object-contain p-2"
                    />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-widest bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 px-2 sm:px-3 py-1 rounded-full whitespace-nowrap">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <h4 className="text-xl sm:text-2xl font-black text-slate-900 dark:text-white mb-3 sm:mb-4 leading-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h4>
                
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-6 sm:mb-8 flex-grow text-justify">
                  {project.description}
                </p>
                
                <div className="pt-4 sm:pt-6 border-t border-slate-200 dark:border-slate-800 flex justify-between items-center">
                  <Link 
                    href={`/portfolio/${project.slug}`}
                    className="inline-flex items-center text-slate-900 dark:text-white font-black text-xs sm:text-sm hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                  >
                    {t("viewProject")} <ChevronRight size={16} className="ml-1" />
                  </Link>
                  <span className="text-slate-400 dark:text-slate-600 font-bold text-xs uppercase tracking-widest">
                    #{index + 1}
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
