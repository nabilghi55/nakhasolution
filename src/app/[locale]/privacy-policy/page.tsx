import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/routing";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

interface LegalSection {
  title: string;
  body: string;
}

export default async function PrivacyPolicyPage() {
  const t = await getTranslations("Legal");
  const sections = t.raw("privacy.sections") as LegalSection[];

  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-slate-950">
      <Navbar />

      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-blue-600 transition-colors mb-8 group"
          >
            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            {t("backToHome")}
          </Link>

          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white mb-3">
            {t("privacy.title")}
          </h1>
          <p className="text-sm font-semibold text-slate-400 mb-10">
            {t("lastUpdated")}: {t("updatedDate")}
          </p>

          <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed mb-12">
            {t("privacy.intro")}
          </p>

          <div className="space-y-10">
            {sections.map((section, idx) => (
              <div key={idx}>
                <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {section.title}
                </h2>
                <p className="text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                  {section.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
