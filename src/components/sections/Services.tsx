"use client";

import { Camera, Share2, Package, Trophy, Monitor, AppWindow } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const Services = () => {
  const t = useTranslations("Services");

  const services = [
    {
      title: t("items.cctv.title"),
      description: t("items.cctv.desc"),
      slug: t("items.cctv.slug"),
      icon: <Camera size={32} />,
      color: "bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400",
    },
    {
      title: t("items.digital-marketing.title"),
      description: t("items.digital-marketing.desc"),
      slug: t("items.digital-marketing.slug"),
      icon: <Share2 size={32} />,
      color: "bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400",
    },
    {
      title: t("items.device-bundling.title"),
      description: t("items.device-bundling.desc"),
      slug: t("items.device-bundling.slug"),
      icon: <Package size={32} />,
      color: "bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-400",
    },
    {
      title: t("items.campaign-activation.title"),
      description: t("items.campaign-activation.desc"),
      slug: t("items.campaign-activation.slug"),
      icon: <Trophy size={32} />,
      color: "bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400",
    },
    {
      title: t("items.web-development.title"),
      description: t("items.web-development.desc"),
      slug: t("items.web-development.slug"),
      icon: <Monitor size={32} />,
      color: "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400",
    },
    {
      title: t("items.business-application.title"),
      description: t("items.business-application.desc"),
      slug: t("items.business-application.slug"),
      icon: <AppWindow size={32} />,
      color: "bg-cyan-100 dark:bg-cyan-900/30 text-cyan-600 dark:text-cyan-400",
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-20">
          <h2 className="text-blue-600 dark:text-blue-400 font-bold tracking-wider uppercase text-xs sm:text-sm mb-3 sm:mb-4">{t("badge")}</h2>
          <h3 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white mb-4 sm:mb-6">
            {t("title")}
          </h3>
          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 px-4 sm:px-0">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-100 dark:border-slate-800 rounded-3xl shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center sm:text-left"
            >
              <div className={`w-14 h-14 sm:w-16 sm:h-16 mx-auto sm:mx-0 rounded-2xl ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {service.icon}
              </div>
              <h4 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4">{service.title}</h4>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed mb-6 min-h-0 sm:min-h-[80px] text-justify">
                {service.description}
              </p>
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center text-blue-600 dark:text-blue-400 font-bold hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
              >
                {t("learnMore")}
                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </Link>
            </div>
          ))}
        </div>

        <div className="mt-16 sm:mt-20 bg-blue-600 dark:bg-blue-700 rounded-3xl p-8 md:p-12 flex flex-col lg:flex-row items-center justify-between shadow-2xl overflow-hidden relative text-center lg:text-left">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full -mr-20 -mt-20 opacity-50 hidden md:block"></div>
          
          <div className="relative z-10 mb-8 lg:mb-0 lg:max-w-xl w-full">
            <h4 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">{t("ready")}</h4>
            <p className="text-blue-100 text-base sm:text-lg">
              {t("readyDesc")}
            </p>
          </div>
          <div className="relative z-10 w-full lg:w-auto">
            <a
              href="https://wa.me/6281166016611?text=Halo%20Nakha%20Solution,%20saya%20ingin%20berkonsultasi."
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleWhatsAppClick}
              className="inline-block w-full sm:w-auto bg-white text-blue-600 dark:text-blue-700 px-8 sm:px-10 py-4 rounded-xl sm:rounded-full font-bold text-base sm:text-lg hover:bg-blue-50 transition-all shadow-lg text-center"
            >
              {t("cta")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
 rounded-xl sm:rounded-full font-bold text-base sm:text-lg hover:bg-blue-50 transition-all shadow-lg text-center"
            >
              {t("cta")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
