"use client";

import Image from "next/image";
import { Target, Lightbulb, Users } from "lucide-react";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("About");

  return (
    <section id="about" className="py-16 lg:py-24 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="order-2 lg:order-1 relative mt-8 lg:mt-0">
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <div className="space-y-3 sm:space-y-4">
                <div className="relative w-full h-[200px] sm:h-[300px]">
                  <Image
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400&h=500"
                    alt="Team collaboration"
                    fill
                    sizes="(max-width: 768px) 50vw, 300px"
                    className="rounded-2xl shadow-lg object-cover"
                  />
                </div>
                <div className="relative w-full h-[150px] sm:h-[200px]">
                  <Image
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=400&h=300"
                    alt="Modern office"
                    fill
                    sizes="(max-width: 768px) 50vw, 300px"
                    className="rounded-2xl shadow-lg object-cover"
                  />
                </div>
              </div>
              <div className="pt-6 sm:pt-8 space-y-3 sm:space-y-4">
                <div className="relative w-full h-[150px] sm:h-[200px]">
                  <Image
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400&h=300"
                    alt="Technology meeting"
                    fill
                    sizes="(max-width: 768px) 50vw, 300px"
                    className="rounded-2xl shadow-lg object-cover"
                  />
                </div>
                <div className="relative w-full h-[200px] sm:h-[300px]">
                  <Image
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400&h=500"
                    alt="Business strategy"
                    fill
                    sizes="(max-width: 768px) 50vw, 300px"
                    className="rounded-2xl shadow-lg object-cover"
                  />
                </div>
              </div>
            </div>
            {/* Experience Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-600 text-white p-6 sm:p-8 rounded-2xl shadow-xl text-center flex flex-col items-center justify-center min-w-[120px] sm:min-w-[150px]">
              <span className="text-3xl sm:text-4xl font-bold block">100+</span>
              <span className="text-xs sm:text-sm font-medium uppercase tracking-wider">{t("yearsExcellence")}</span>
            </div>
          </div>

          <div className="order-1 lg:order-2 text-center lg:text-left">
            <h2 className="text-blue-600 dark:text-blue-400 font-bold tracking-wider uppercase text-xs sm:text-sm mb-3 sm:mb-4">{t("badge")}</h2>
            <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 sm:mb-6 leading-tight">
              {t("title")}
            </h3>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 mb-8 sm:mb-10 leading-relaxed mx-auto lg:mx-0 max-w-xl text-justify">
              {t("description")}
            </p>

            <div className="space-y-6 sm:space-y-8 text-left">
              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
                <div className="bg-white dark:bg-slate-800 p-3 sm:p-4 rounded-xl shadow-sm text-blue-600 dark:text-blue-400 shrink-0">
                  <Target size={24} className="sm:w-8 sm:h-8" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">{t("missionTitle")}</h4>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 text-justify">{t("missionDesc")}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
                <div className="bg-white dark:bg-slate-800 p-3 sm:p-4 rounded-xl shadow-sm text-blue-600 dark:text-blue-400 shrink-0">
                  <Lightbulb size={24} className="sm:w-8 sm:h-8" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">{t("visionTitle")}</h4>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 text-justify">{t("visionDesc")}</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-4 text-center sm:text-left">
                <div className="bg-white dark:bg-slate-800 p-3 sm:p-4 rounded-xl shadow-sm text-blue-600 dark:text-blue-400 shrink-0">
                  <Users size={24} className="sm:w-8 sm:h-8" />
                </div>
                <div>
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2">{t("cultureTitle")}</h4>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 text-justify">{t("cultureDesc")}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
