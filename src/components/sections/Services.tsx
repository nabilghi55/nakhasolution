"use client";

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

const Services = () => {
  const t = useTranslations("Services");

  const services = [
    "cctv",
    "digital-marketing",
    "device-bundling",
    "campaign-activation",
    "web-development",
    "business-application",
  ] as const;

  return (
    <section id="services" className="services-section" aria-labelledby="services-title">
      <div className="section-shell">
        <div className="services-heading">
          <div>
            <p className="technical-label">02 / {t("badge")}</p>
            <h2 id="services-title">{t("title")}</h2>
          </div>
          <p>{t("description")}</p>
        </div>

        <div className="service-index">
          {services.map((service, index) => (
            <Link
              key={service}
              href={`/services/${t(`items.${service}.slug`)}`}
              className="service-row"
            >
              <span className="service-number">{String(index + 1).padStart(2, "0")}</span>
              <h3>{t(`items.${service}.title`)}</h3>
              <p>{t(`items.${service}.summary`)}</p>
              <span className="service-action">{t("learnMore")}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
