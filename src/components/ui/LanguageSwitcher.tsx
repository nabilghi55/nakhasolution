'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import { useState, useTransition } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);

  const handleLanguageChange = (newLocale: string) => {
    if (newLocale === locale) {
      setIsOpen(false);
      return;
    }
    startTransition(() => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      router.replace(pathname, { locale: (newLocale as any) });
      setIsOpen(false);
    });
  };

  const langs = [
    { id: 'id', flag: '🇮🇩', label: 'Indonesia' },
    { id: 'en', flag: '🇺🇸', label: 'English' },
  ];

  const currentLang = langs.find(l => l.id === locale) || langs[0];

  return (
    <div 
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={cn(
          "flex items-center gap-2 px-4 py-2 rounded-xl text-[14px] font-semibold text-[#172B4D] dark:text-slate-300 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-all duration-200",
          isOpen && "bg-blue-50/50 dark:hover:bg-blue-900/20"
        )}
      >
        <Globe size={16} className="text-[#0052CC]" />
        <span>{currentLang.flag} {currentLang.id.toUpperCase()}</span>
        <ChevronDown 
          size={14} 
          className={cn("transition-transform duration-200 opacity-50", isOpen && "rotate-180")} 
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full right-0 mt-2 w-40 bg-white dark:bg-slate-900 shadow-2xl border border-gray-50 dark:border-slate-800 py-2 rounded-2xl z-[100] overflow-hidden"
          >
            {langs.map((lang) => (
              <button
                key={lang.id}
                onClick={() => handleLanguageChange(lang.id)}
                disabled={isPending}
                className={cn(
                  "w-full flex items-center gap-3 px-4 py-3 text-[13px] font-medium transition-colors hover:bg-blue-50/50 dark:hover:bg-blue-900/20",
                  locale === lang.id 
                    ? "text-[#0052CC] bg-blue-50/30 dark:bg-blue-900/10" 
                    : "text-[#42526E] dark:text-slate-400"
                )}
              >
                <span className="text-lg">{lang.flag}</span>
                <span>{lang.label}</span>
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
