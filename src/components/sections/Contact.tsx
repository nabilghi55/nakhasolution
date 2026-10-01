"use client";

import { Mail, Phone, MapPin, Send, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { buildWhatsAppLink } from "@/lib/whatsapp";

const Contact = () => {
  const t = useTranslations("Contact");
  const infoT = useTranslations("ContactInfo");

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    subject: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [id === "first-name" ? "firstName" : id === "last-name" ? "lastName" : id]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead", { 
        content_name: "WhatsApp Inquiry from Contact Form",
        content_category: "Contact Form"
      });
    }

    const subjectText = formData.subject || t("form.subjects.general");
    const name = `${formData.firstName} ${formData.lastName}`.trim() || "Calon Klien";
    
    const textMessage = `Halo Nakha Solution,\n\nSaya ${name}.\n\nTerkait: ${subjectText}\n\n${formData.message}`;
    const whatsappUrl = buildWhatsAppLink(infoT("phone"), textMessage);

    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white dark:bg-[#020617] transition-colors duration-300 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Info Column */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-blue-500/10 dark:bg-blue-500/15 border border-blue-500/20 text-blue-600 dark:text-blue-400 px-4 py-1.5 rounded-full text-xs font-bold mb-4 uppercase tracking-widest">
              <Sparkles size={14} />
              <span>{t("badge")}</span>
            </div>
            
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white mb-6 leading-tight tracking-tight">
              {t("title")}
            </h2>
            
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0">
              {t("description")}
            </p>

            {/* Contact Cards */}
            <div className="space-y-6 text-left">
              <div className="glass-card p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-5 text-center sm:text-left">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-3.5 rounded-2xl text-white shadow-lg shrink-0">
                  <Mail size={22} />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">{t("emailLabel")}</h3>
                  <p className="text-base sm:text-lg font-bold text-slate-900 dark:text-white break-all">{infoT("email")}</p>
                </div>
              </div>

              <div className="glass-card p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-5 text-center sm:text-left">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-3.5 rounded-2xl text-white shadow-lg shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">{t("phoneLabel")}</h3>
                  <p className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">{infoT("phone")}</p>
                </div>
              </div>

              <div className="glass-card p-5 rounded-2xl border border-slate-200/80 dark:border-slate-800/80 flex flex-col sm:flex-row items-center sm:items-start space-y-3 sm:space-y-0 sm:space-x-5 text-center sm:text-left">
                <div className="bg-gradient-to-br from-blue-600 to-indigo-600 p-3.5 rounded-2xl text-white shadow-lg shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 className="text-xs font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">{t("addressLabel")}</h3>
                  <p className="text-base sm:text-lg font-bold text-slate-900 dark:text-white">{infoT("address")}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="glass-card p-7 sm:p-10 rounded-[32px] border border-slate-200/80 dark:border-slate-800 shadow-2xl">
            <form className="space-y-5" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="first-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">{t("form.firstName")}</label>
                  <input
                    type="text"
                    id="first-name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 text-slate-900 dark:text-white transition-all text-sm font-medium"
                    placeholder={t("form.placeholderFirstName")}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">{t("form.lastName")}</label>
                  <input
                    type="text"
                    id="last-name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 text-slate-900 dark:text-white transition-all text-sm font-medium"
                    placeholder={t("form.placeholderLastName")}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">{t("form.subject")}</label>
                <select
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 text-slate-900 dark:text-white transition-all text-sm font-medium"
                >
                  <option value={t("form.subjects.general")}>{t("form.subjects.general")}</option>
                  <option value={t("form.subjects.proposal")}>{t("form.subjects.proposal")}</option>
                  <option value={t("form.subjects.partnership")}>{t("form.subjects.partnership")}</option>
                  <option value={t("form.subjects.support")}>{t("form.subjects.support")}</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 mb-2">{t("form.message")}</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-blue-600 dark:focus:ring-blue-500 text-slate-900 dark:text-white transition-all text-sm font-medium"
                  placeholder={t("form.placeholderMessage")}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 via-blue-700 to-indigo-700 hover:from-blue-700 hover:to-indigo-800 text-white font-bold py-4 rounded-xl shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all flex items-center justify-center space-x-2 group active:scale-95"
              >
                <span>{t("form.send")} (WhatsApp)</span>
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
