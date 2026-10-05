"use client";

import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

interface PortfolioProject {
  key: string;
  title: string;
  slug: string;
  description: string;
  image: string;
  logo: string;
  link?: string;
  tags: string[];
  mediaFit?: "cover" | "contain";
  logoShape?: "horizontal" | "square";
}

const Portfolio = () => {
  const t = useTranslations("Portfolio");

  const projects: PortfolioProject[] = [
    {
      key: "raya",
      title: "Raya Law Firm",
      slug: t("projects.raya.slug"),
      description: t("projects.raya.desc"),
      image: "/assets/backgroundportofolio/RAYA-1.webp",
      logo: "/assets/logoportofolio/logorayalawfirm.webp",
      link: "https://rayalawfirm.vercel.app/",
      tags: ["Legal", "Company profile"],
    },
    {
      key: "putra",
      title: "Putra Wijaya Mandiri",
      slug: t("projects.putra.slug"),
      description: t("projects.putra.desc"),
      image: "/assets/backgroundportofolio/PWM3.webp",
      logo: "/assets/logoportofolio/logo-pwm.webp",
      link: "https://putrawijayamandiri.id/",
      tags: ["Construction", "B2B portfolio"],
    },
    {
      key: "alfajr",
      title: "Alfajr Umroh",
      slug: t("projects.alfajr.slug"),
      description: t("projects.alfajr.desc"),
      image: "/assets/backgroundportofolio/ALFJR2.webp",
      logo: "/assets/logoportofolio/logoalfajr.png",
      link: "https://alfajrumroh.co.id/",
      tags: ["Travel", "Package catalogue"],
    },
    {
      key: "justitia",
      title: "Justitia Law Firm",
      slug: t("projects.justitia.slug"),
      description: t("projects.justitia.desc"),
      image: "/assets/backgroundportofolio/JUSTITIA-LAW-FIRM.png",
      logo: "/assets/logoportofolio/logojustitia.webp",
      tags: ["Legal", "Responsive website"],
      mediaFit: "contain",
      logoShape: "square",
    },
  ];

  return (
    <section id="portfolio" className="portfolio-section" aria-labelledby="portfolio-title">
      <div className="section-shell">
        <div className="portfolio-heading">
          <div>
            <p className="technical-label">03 / {t("badge")}</p>
            <h2 id="portfolio-title">{t("title")}</h2>
          </div>
          <p>{t("description")}</p>
        </div>

        <div className="project-list">
          {projects.map((project, index) => (
            <article className="project-row" key={project.key}>
              <div className={`project-media${project.mediaFit === "contain" ? " project-media--contain" : ""}`}>
                <Image
                  src={project.image}
                  alt={`${project.title} project preview`}
                  fill
                  sizes="(max-width: 760px) 100vw, 65vw"
                />
              </div>

              <div className="project-copy">
                <p className="technical-label">Project / {String(index + 1).padStart(2, "0")}</p>
                <div className={`project-logo${project.logoShape === "square" ? " project-logo--square" : ""}`}>
                  <Image src={project.logo} alt={`${project.title} logo`} fill sizes="132px" />
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul className="project-tags" aria-label={`${project.title} project categories`}>
                  {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
                </ul>
                <div className="project-actions">
                  {project.link && (
                    <a className="button-dark" href={project.link} target="_blank" rel="noopener noreferrer">
                      {t("launch")}
                    </a>
                  )}
                  <Link className={project.link ? "button-line" : "button-dark"} href={`/portfolio/${project.slug}`}>
                    {t("viewProject")}
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
