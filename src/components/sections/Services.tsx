"use client";

import { Camera, Share2, Package, Trophy, Monitor, AppWindow, ArrowRight, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const Services = () => {
  const t = useTranslations("Services");
  const infoT = useTranslations("ContactInfo");

  const handleWhatsAppClick = () => {
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead", { 
        content_name: "WhatsApp Inquiry from Services CTA",
        content_category: "Services"
      });
    }
  };

  const services = [
    {
      title: t("items.cctv.title"),
      description: t("items.cctv.desc"),
      slug: t("items.cctv.slug"),
      icon: <Camera size={28} />,
      gradient: "from-rose-500/10 via-red-500/10 to-orange-500/10 text-red-600 dark:text-red-400 border-red-200/40 dark:border-red-900/40",
      badgeColor: "bg-red-500/10 text-red-600 dark:text-red-400",
    },
    {
      title: t("items.digital-marketing.title"),
      description: t("items.digital-marketing.desc"),
      slug: t("items.digital-marketing.slug"),
      icon: <Share2 size={28} />,
      gradient: "from-emerald-500/10 via-teal-500/10 to-green-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-200/40 dark:border-emerald-900/40",
      badgeColor: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
    },
    {
      title: t("items.device-bundling.title"),
      description: t("items.device-bundling.desc"),
      slug: t("items.device-bundling.slug"),
      icon: <Package size={28} />,
      gradient: "from-amber-500/10 via-yellow-500/10 to-orange-500/10 text-amber-600 dark:text-amber-400 border-amber-200/40 dark:border-amber-900/40",
      badgeColor: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
    },
    {
      title: t("items.campaign-activation.title"),
      description: t("items.campaign-activation.desc"),
      slug: t("items.campaign-activation.slug"),
      icon: <Trophy size={28} />,
      gradient: "from-purple-500/10 via-indigo-500/10 to-violet-500/10 text-purple-600 dark:text-purple-400 border-purple-200/40 dark:border-purple-900/40",
      badgeColor: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
    },
    {
      title: t("items.web-development.title"),
      description: t("items.web-development.desc"),
      slug: t("items.web-development.slug"),
      icon: <Monitor size={28} />,
      gradient: "from-blue-500/10 via-cyan-500/10 to-sky-500/10 text-blue-600 dark:text-blue-400 border-blue-200/40 dark:border-blue-900/40",
      badgeColor: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
    },
    {
      title: t("items.business-application.title"),
      description: t("items.business-application.desc"),
      slug: t("items.business-application.slug"),
      icon: <AppWindow size={28} />,
      gradient: "from-cyan-500/10 via-blue-500/10 to-teal-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-200/40 dark:border-cyan-900/40",
      badgeColor: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-28 bg-slate-50/70 dark:bg-slate-950 transition-colors duration-300 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[120px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16 sm:mb-20">
          <div className="inline-flex items-center space-x-2 bg-blue-500/10 dark:bg-blue-500/15 border border-blue-500/20 text-blue-600 dark:text-blue-400 px-4 py-1.5 rounded-full text-xs font-bold mb-4 uppercase tracking-widest">
            <Sparkles size={14} />
            <span>{t("badge")}</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white mb-6 tracking-tight">
            {t("title")}
          </h2>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-2xl mx-auto">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group glass-card p-7 sm:p-8 rounded-3xl border border-slate-200/80 dark:border-slate-800 hover:border-blue-500/50 dark:hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${service.gradient} border flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm`}>
                  {service.icon}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6 text-justify">
                  {service.description}
                </p>
              </div>

              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center text-sm font-bold text-blue-600 dark:text-blue-400 group-hover:text-blue-700 dark:group-hover:text-blue-300 transition-colors pt-4 border-t border-slate-100 dark:border-slate-800/80"
              >
                <span>{t("learnMore")}</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className="mt-16 sm:mt-24 relative rounded-3xl overflow-hidden shadow-2xl p-8 sm:p-12 md:p-14 bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-700 text-white">
          <div className="absolute top-0 right-0 -mr-16 -mt-16 w-80 h-80 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 text-center lg:text-left">
            <div className="max-w-2xl">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black mb-4 tracking-tight">
                {t("ready")}
              </h3>
              <p className="text-blue-100 text-base sm:text-lg leading-relaxed">
                {t("readyDesc")}
              </p>
            </div>
            <a
              href={buildWhatsAppLink(infoT("phone"), "Halo Nakha Solution, saya ingin berkonsultasi.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 hover:bg-slate-100 px-8 py-4 rounded-2xl font-black text-base shadow-lg hover:scale-[1.03] active:scale-95 transition-all whitespace-nowrap"
            >
              <span>{t("cta")}</span>
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
