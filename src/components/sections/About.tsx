"use client";

import Image from "next/image";
import { Target, Lightbulb, Users, Award, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("About");

  return (
    <section id="about" className="py-20 lg:py-28 bg-slate-50/70 dark:bg-slate-900/50 transition-colors duration-300 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Left Grid Images & Stat Badge */}
          <div className="order-2 lg:order-1 relative mt-8 lg:mt-0">
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              <div className="space-y-4">
                <div className="relative w-full h-[220px] sm:h-[300px] rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 dark:border-slate-800">
                  <Image
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80&w=400&h=500"
                    alt="Team collaboration"
                    fill
                    sizes="(max-width: 768px) 50vw, 300px"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="relative w-full h-[160px] sm:h-[220px] rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 dark:border-slate-800">
                  <Image
                    src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=400&h=300"
                    alt="Modern office"
                    fill
                    sizes="(max-width: 768px) 50vw, 300px"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
              <div className="pt-6 sm:pt-10 space-y-4">
                <div className="relative w-full h-[160px] sm:h-[220px] rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 dark:border-slate-800">
                  <Image
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=400&h=300"
                    alt="Technology meeting"
                    fill
                    sizes="(max-width: 768px) 50vw, 300px"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="relative w-full h-[220px] sm:h-[300px] rounded-3xl overflow-hidden shadow-lg border border-slate-200/80 dark:border-slate-800">
                  <Image
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&q=80&w=400&h=500"
                    alt="Business strategy"
                    fill
                    sizes="(max-width: 768px) 50vw, 300px"
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Experience Center Badge */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 sm:p-8 rounded-3xl shadow-2xl text-center flex flex-col items-center justify-center min-w-[140px] sm:min-w-[170px] border-4 border-white dark:border-slate-900">
              <Award className="w-8 h-8 mb-1 text-blue-200" />
              <span className="text-3xl sm:text-4xl font-black block leading-none">100+</span>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest mt-1">{t("yearsExcellence")}</span>
            </div>
          </div>

          {/* Right Content Column */}
          <div className="order-1 lg:order-2 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 dark:bg-blue-500/15 border border-blue-500/20 text-blue-600 dark:text-blue-400 px-4 py-1.5 rounded-full text-xs font-bold mb-4 uppercase tracking-widest">
              <Sparkles size={14} />
              <span>{t("badge")}</span>
            </div>
            
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
              {t("title")}
            </h2>
            
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0 text-justify">
              {t("description")}
            </p>

            {/* Mission, Vision, Culture */}
            <div className="space-y-6 text-left">
              <div className="glass-card p-5 sm:p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-5">
                <div className="bg-blue-500/10 text-blue-600 dark:text-blue-400 p-3.5 rounded-2xl shrink-0">
                  <Target size={26} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1.5">{t("missionTitle")}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed text-justify">{t("missionDesc")}</p>
                </div>
              </div>

              <div className="glass-card p-5 sm:p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-5">
                <div className="bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 p-3.5 rounded-2xl shrink-0">
                  <Lightbulb size={26} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1.5">{t("visionTitle")}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed text-justify">{t("visionDesc")}</p>
                </div>
              </div>

              <div className="glass-card p-5 sm:p-6 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 flex flex-col sm:flex-row items-start space-y-3 sm:space-y-0 sm:space-x-5">
                <div className="bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 p-3.5 rounded-2xl shrink-0">
                  <Users size={26} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-1.5">{t("cultureTitle")}</h3>
                  <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed text-justify">{t("cultureDesc")}</p>
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
