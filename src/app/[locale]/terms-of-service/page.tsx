/* eslint-disable @next/next/no-html-link-for-pages */
import { getTranslations } from "next-intl/server";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DetailSignalRail from "@/components/detail/DetailSignalRail";

interface LegalSection { title: string; body: string; }

export default async function TermsOfServicePage() {
  const t = await getTranslations("Legal");
  const sections = t.raw("terms.sections") as LegalSection[];

  return (
    <div className="detail-page">
      <Navbar />
      <main className="legal-main">
        <div className="detail-standalone-signal">
          <DetailSignalRail start="DOCUMENT" end="CURRENT" labels={["SCOPE", "TERMS", "REFERENCE"]} />
        </div>
        <div className="detail-shell">
          <header className="legal-header">
            <div>
              <p className="detail-eyebrow">NAKHA SOLUTION / LEGAL</p>
              <h1 className="legal-title">{t("terms.title")}</h1>
              <p className="legal-meta">{t("lastUpdated")}: {t("updatedDate")}</p>
            </div>
            <p>{t("terms.intro")}</p>
          </header>
          <div className="legal-content">
            <aside>
              <p className="detail-kicker">DOCUMENT / 02</p>
              <p>{t("terms.title")}</p>
              <a href="/" className="detail-secondary-link">{t("backToHome")}</a>
            </aside>
            <div>
              {sections.map((section) => (
                <section className="legal-section" key={section.title}>
                  <h2>{section.title}</h2>
                  <p>{section.body}</p>
                </section>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
