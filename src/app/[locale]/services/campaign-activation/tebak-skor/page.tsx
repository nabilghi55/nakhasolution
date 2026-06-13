"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TebakSkorDemo from "@/components/sections/TebakSkorDemo";
import { Link } from "@/i18n/routing";
import { ArrowLeft } from "lucide-react";

export default function TebakSkorDemoPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white dark:bg-slate-950">
      <Navbar />
      <main className="flex-grow pt-24 md:pt-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 mt-6">
          <Link 
            href="/services/campaign-activation" 
            className="inline-flex items-center text-sm font-bold text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white transition-colors mb-4 group"
          >
            <ArrowLeft size={16} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Kembali ke Campaign Platform
          </Link>
        </div>
        <TebakSkorDemo />
      </main>
      <Footer />
    </div>
  );
}
