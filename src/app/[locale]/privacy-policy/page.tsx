import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import DetailSignalRail from "@/components/detail/DetailSignalRail";
import { buildPageMetadata, isLocale } from "@/lib/seo";

interface LegalSection { title: string; body: string; }

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "id";
  const t = await getTranslations({ locale, namespace: "Legal" });
  return buildPageMetadata({ locale, path: "/privacy-policy", title: t("privacy.title"), description: t("privacy.intro") });
}

export default async function PrivacyPolicyPage() {
  const t = await getTranslations("Legal");
  const sections = t.raw("privacy.sections") as LegalSection[];

  return (
    <div className="detail-page">
      <Navbar />
      <main className="legal-main">
        <div className="detail-standalone-signal">
          <DetailSignalRail start="DOCUMENT" end="CURRENT" labels={["SCOPE", "POLICY", "REFERENCE"]} />
        </div>
        <div className="detail-shell">
          <header className="legal-header">
            <div>
              <p className="detail-eyebrow">NAKHA SOLUTION / LEGAL</p>
              <h1 className="legal-title">{t("privacy.title")}</h1>
              <p className="legal-meta">{t("lastUpdated")}: {t("updatedDate")}</p>
            </div>
            <p>{t("privacy.intro")}</p>
          </header>
          <div className="legal-content">
            <aside>
              <p className="detail-kicker">DOCUMENT / 01</p>
              <p>{t("privacy.title")}</p>
              <Link href="/" className="detail-secondary-link">{t("backToHome")}</Link>
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
