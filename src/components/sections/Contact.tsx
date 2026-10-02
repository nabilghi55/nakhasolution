"use client";

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
    message: "",
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { id, value } = event.target;
    const key = id === "first-name" ? "firstName" : id === "last-name" ? "lastName" : id;
    setFormData((current) => ({ ...current, [key]: value }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (typeof window !== "undefined" && window.fbq) {
      window.fbq("track", "Lead", {
        content_name: "WhatsApp Inquiry from Contact Form",
        content_category: "Contact Form",
      });
    }

    const subjectText = formData.subject || t("form.subjects.general");
    const name = `${formData.firstName} ${formData.lastName}`.trim();
    const textMessage = `Halo Nakha Solution,\n\nSaya ${name}.\n\nTopik: ${subjectText}\n\n${formData.message}`;

    window.open(buildWhatsAppLink(infoT("phone"), textMessage), "_blank", "noopener,noreferrer");
  };

  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-title">
      <div className="section-shell contact-grid">
        <div className="contact-copy">
          <p className="technical-label">04 / {t("badge")}</p>
          <h2 id="contact-title">{t("title")}</h2>
          <p>{t("description")}</p>

          <div className="contact-lines">
            <a className="contact-line" href={`mailto:${infoT("email")}`}>
              <span>{t("emailLabel")}</span>
              <span>{infoT("email")}</span>
            </a>
            <a className="contact-line" href={`tel:${infoT("phone")}`}>
              <span>{t("phoneLabel")}</span>
              <span>{infoT("phone")}</span>
            </a>
            <div className="contact-line">
              <span>{t("addressLabel")}</span>
              <span>{infoT("address")}</span>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-pair">
            <div className="field-group">
              <label htmlFor="first-name">{t("form.firstName")}</label>
              <input
                type="text"
                id="first-name"
                value={formData.firstName}
                onChange={handleChange}
                placeholder={t("form.placeholderFirstName")}
                autoComplete="given-name"
                required
              />
            </div>
            <div className="field-group">
              <label htmlFor="last-name">{t("form.lastName")}</label>
              <input
                type="text"
                id="last-name"
                value={formData.lastName}
                onChange={handleChange}
                placeholder={t("form.placeholderLastName")}
                autoComplete="family-name"
              />
            </div>
          </div>

          <div className="field-group">
            <label htmlFor="subject">{t("form.subject")}</label>
            <select id="subject" value={formData.subject} onChange={handleChange}>
              <option value="">{t("form.subjects.general")}</option>
              <option value={t("form.subjects.proposal")}>{t("form.subjects.proposal")}</option>
              <option value={t("form.subjects.partnership")}>{t("form.subjects.partnership")}</option>
              <option value={t("form.subjects.support")}>{t("form.subjects.support")}</option>
            </select>
          </div>

          <div className="field-group">
            <label htmlFor="message">{t("form.message")}</label>
            <textarea
              id="message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              placeholder={t("form.placeholderMessage")}
              required
            />
          </div>

          <button type="submit" className="button-light contact-submit">
            <span className="button-signal" aria-hidden="true" />
            {t("form.send")}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
