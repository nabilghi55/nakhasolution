"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

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
    
    // Default values if empty
    const subjectText = formData.subject || t("form.subjects.general");
    const name = `${formData.firstName} ${formData.lastName}`.trim() || "Calon Klien";
    
    // Construct WhatsApp Message
    // "Halo Nakha Solution saya ingin bla bla"
    const textMessage = `Halo Nakha Solution,\n\nSaya ${name}.\n\nTerkait: ${subjectText}\n\n${formData.message}`;
    
    // Phone number from dictionary (clean it to remove non-numeric chars except +)
    // Assuming the phone number is something like "081166016611", we convert to "6281166016611"
    let waNumber = infoT("phone").replace(/\D/g, '');
    if (waNumber.startsWith('0')) {
      waNumber = '62' + waNumber.slice(1);
    }
    
    const whatsappUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(textMessage)}`;
    
    // Open in new tab
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 dark:bg-slate-900/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div>
            <h2 className="text-blue-600 dark:text-blue-400 font-bold tracking-wider uppercase text-sm mb-4">{t("badge")}</h2>
            <h3 className="text-4xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
              {t("title")}
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
              {t("description")}
            </p>

            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <div className="bg-blue-600 dark:bg-blue-700 p-4 rounded-2xl text-white shadow-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">{t("emailLabel")}</h4>
                  <p className="text-xl font-bold text-slate-900 dark:text-white">{infoT("email")}</p>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="bg-blue-600 dark:bg-blue-700 p-4 rounded-2xl text-white shadow-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">{t("phoneLabel")}</h4>
                  <p className="text-xl font-bold text-slate-900 dark:text-white">{infoT("phone")}</p>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="bg-blue-600 dark:bg-blue-700 p-4 rounded-2xl text-white shadow-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">{t("addressLabel")}</h4>
                  <p className="text-xl font-bold text-slate-900 dark:text-white">{infoT("address")}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 p-8 lg:p-12 rounded-3xl shadow-xl border border-slate-100 dark:border-slate-800">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">{t("form.firstName")}</label>
                  <input
                    type="text"
                    id="first-name"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white dark:focus:bg-slate-750 text-slate-900 dark:text-white transition-all"
                    placeholder={t("form.placeholderFirstName")}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">{t("form.lastName")}</label>
                  <input
                    type="text"
                    id="last-name"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white dark:focus:bg-slate-750 text-slate-900 dark:text-white transition-all"
                    placeholder={t("form.placeholderLastName")}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">{t("form.subject")}</label>
                <select
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white dark:focus:bg-slate-750 text-slate-900 dark:text-white transition-all"
                >
                  <option value={t("form.subjects.general")}>{t("form.subjects.general")}</option>
                  <option value={t("form.subjects.proposal")}>{t("form.subjects.proposal")}</option>
                  <option value={t("form.subjects.partnership")}>{t("form.subjects.partnership")}</option>
                  <option value={t("form.subjects.support")}>{t("form.subjects.support")}</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">{t("form.message")}</label>
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:bg-white dark:focus:bg-slate-750 text-slate-900 dark:text-white transition-all"
                  placeholder={t("form.placeholderMessage")}
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 dark:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg hover:bg-blue-700 dark:hover:bg-blue-800 transition-all flex items-center justify-center space-x-2 group"
              >
                <span>{t("form.send")} (WhatsApp)</span>
                <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
