import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "../globals.css";

import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import WhatsAppButton from "@/components/ui/WhatsAppButton";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Nakha Solution | Digital Transformation Partner in Sumatra",
  description: "Nakha Solution is a leading technology transformation provider based in Padang. We offer CCTV, Web Development, Digital Marketing, and Business Applications.",
  keywords: "Nakha Solution, IT Consultant Padang, Web Development Sumatra, CCTV Installation Padang, Digital Marketing Agency, Software Development Padang",
  openGraph: {
    title: "Nakha Solution | Your Best Digital Partner",
    description: "Empowering businesses with smart, integrated, and sustainable IT solutions.",
    url: "https://nakhasolution.com",
    siteName: "Nakha Solution",
    locale: "id_ID",
    type: "website",
  },
};

export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
}) {
  const { locale } = await params;

  // Ensure that the incoming `locale` is valid
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }
 
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300">
        <NextIntlClientProvider messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <WhatsAppButton />
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
