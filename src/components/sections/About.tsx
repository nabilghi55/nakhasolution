"use client";

import { useTranslations } from "next-intl";

const About = () => {
  const t = useTranslations("About");

  const values = [
    { index: "01", title: t("missionTitle"), copy: t("missionDesc") },
    { index: "02", title: t("visionTitle"), copy: t("visionDesc") },
    { index: "03", title: t("cultureTitle"), copy: t("cultureDesc") },
  ];

  return (
    <section id="about" className="about-section" aria-labelledby="about-title">
      <div className="section-shell">
        <div className="section-intro">
          <div>
            <p className="technical-label">01 / {t("badge")}</p>
            <h2 id="about-title">{t("title")}</h2>
          </div>
          <p>{t("description")}</p>
        </div>

        <div className="about-body">
          <div className="system-map" aria-label={t("mapLabel")}>
            <span className="map-axis-x" aria-hidden="true" />
            <span className="map-axis-y" aria-hidden="true" />
            <span className="map-node">{t("mapNeeds")}</span>
            <span className="map-node">{t("mapDesign")}</span>
            <span className="map-node">{t("mapDeploy")}</span>
            <span className="map-node">{t("mapSupport")}</span>
            <div className="map-core">
              <span>NAKHA<br />SYSTEM</span>
            </div>
          </div>

          <div className="value-list">
            {values.map((value) => (
              <article className="value-row" key={value.index}>
                <span className="value-index">{value.index}</span>
                <div>
                  <h3>{value.title}</h3>
                  <p>{value.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
