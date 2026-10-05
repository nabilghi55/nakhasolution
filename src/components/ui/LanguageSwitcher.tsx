"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { useTransition } from "react";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();

  const changeLanguage = (nextLocale: "id" | "en") => {
    if (nextLocale === locale) return;

    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  return (
    <div
      className="inline-grid h-11 grid-cols-2 overflow-hidden rounded-md border border-slate-300 bg-slate-50"
      role="group"
      aria-label="Language"
    >
      {(["id", "en"] as const).map((language) => (
        <button
          type="button"
          key={language}
          onClick={() => changeLanguage(language)}
          disabled={isPending}
          aria-pressed={locale === language}
          className={`min-w-11 px-3 font-mono text-[11px] font-medium uppercase transition-colors ${
            locale === language ? "bg-blue-600 text-white" : "text-slate-600 hover:bg-blue-50"
          }`}
        >
          {language}
        </button>
      ))}
    </div>
  );
}
