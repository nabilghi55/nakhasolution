/* eslint-disable @next/next/no-html-link-for-pages */
"use client";

import { useTranslations } from "next-intl";
import { useParams } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DetailHero from "@/components/detail/DetailHero";

interface ProjectItem {
  title: string;
  slug: string;
  desc: string;
  challengeText: string;
  solutionText: string;
  impactText: string;
}

const projectImages: Record<string, string> = {
  raya: "/assets/backgroundportofolio/RAYA-1.webp",
  putra: "/assets/backgroundportofolio/PWM3.webp",
  alfajr: "/assets/backgroundportofolio/ALFJR2.webp",
};

const projectLogos: Record<string, string> = {
  raya: "/assets/logoportofolio/logorayalawfirm.webp",
  putra: "/assets/logoportofolio/logo-pwm.webp",
  alfajr: "/assets/logoportofolio/logoalfajr.png",
};

const projectLinks: Record<string, string> = {
  raya: "https://rayalawfirm.vercel.app/",
  putra: "https://putrawijayamandiri.id/",
  alfajr: "https://alfajrumroh.co.id/",
};

export default function PortfolioDetailPage() {
  const t = useTranslations("Portfolio");
  const params = useParams();
  const slug = params.slug as string;
  const projects = t.raw("projects") as Record<string, ProjectItem>;
  const projectEntry = Object.entries(projects).find(([, item]) => item.slug === slug);
  const project = projectEntry?.[1];

  if (!project || !projectEntry) {
    return (
      <div className="detail-not-found">
        <div>
          <p className="detail-eyebrow">NAKHA SOLUTION / 404</p>
          <h1>Project not found.</h1>
          <a href="/#portfolio" className="detail-secondary-link">
            {t("backToHome")}
          </a>
        </div>
      </div>
    );
  }

  const key = projectEntry[0];
  const image = projectImages[key];
  const logo = projectLogos[key];
  const externalLink = projectLinks[key];
  const story = [
    { title: t("challenge"), body: project.challengeText },
    { title: t("solution"), body: project.solutionText },
    { title: t("impact"), body: project.impactText },
  ];

  return (
    <div className="detail-page">
      <Navbar />
      <main className="detail-main">
        <DetailHero
          index={`PROJECT / ${String(Object.keys(projects).indexOf(key) + 1).padStart(2, "0")}`}
          eyebrow={t("badge")}
          title={project.title}
          description={project.desc}
          image={image}
          imageAlt={`${project.title} project preview`}
          mediaLabel={`${project.title} / live project`}
          logo={logo}
          backHref="/#portfolio"
          backLabel={t("backToHome")}
        />

        <section className="detail-section">
          <div className="detail-shell project-story">
            <aside className="project-story-aside">
              <p className="detail-kicker">01 / PROJECT NOTES</p>
              <p>{project.desc}</p>
            </aside>
            <div className="project-story-list">
              {story.map((item, index) => (
                <article className="project-story-item" key={item.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h2>{item.title}</h2>
                    <p>{item.body}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="detail-section">
          <div className="detail-shell detail-cta-layout">
            <div>
              <p className="detail-kicker">02 / LIVE REFERENCE</p>
              <h2>{t("launch")}</h2>
            </div>
            <a className="detail-cta-link" href={externalLink} target="_blank" rel="noopener noreferrer">
              {t("launch")}
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
