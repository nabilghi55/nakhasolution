import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Portfolio from "@/components/sections/Portfolio";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import { organizationGraph } from "@/lib/schema";
import { buildPageMetadata, isLocale } from "@/lib/seo";

const homeCopy = {
  id: {
    title: "Nakha Solution | Software House & Solusi Digital di Padang",
    description:
      "Nakha Solution membantu bisnis di Padang dan Sumatera Barat membangun aplikasi kasir, POS, manajemen stok, website, dan sistem operasional custom.",
  },
  en: {
    title: "Nakha Solution | Software House & Digital Solutions in Padang",
    description:
      "Nakha Solution helps businesses in Padang and West Sumatra build custom cashier and POS apps, inventory management, websites, and operational systems.",
  },
} as const;

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale: raw } = await params;
  const locale = isLocale(raw) ? raw : "id";
  return buildPageMetadata({ locale, path: "/", absoluteTitle: true, ...homeCopy[locale] });
}

export default function Home() {
  return (
    <div className="site-page flex min-h-screen flex-col">
      <JsonLd data={organizationGraph(homeCopy.id.description)} />
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
