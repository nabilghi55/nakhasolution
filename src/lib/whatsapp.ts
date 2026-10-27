import { siteConfig } from "@/config/site";

export function formatWhatsAppNumber(rawPhone: string) {
  let number = rawPhone.replace(/\D/g, "");
  if (number.startsWith("0")) {
    number = `62${number.slice(1)}`;
  }
  return number;
}

export function buildWhatsAppLink(message: string, rawPhone: string = siteConfig.whatsappNumber) {
  return `https://wa.me/${formatWhatsAppNumber(rawPhone)}?text=${encodeURIComponent(message)}`;
}

/** Number as shown to visitors, e.g. 081166016611. */
export function displayPhone(rawPhone: string = siteConfig.whatsappNumber) {
  const digits = formatWhatsAppNumber(rawPhone);
  return digits.startsWith("62") ? `0${digits.slice(2)}` : digits;
}

/** E.164 form for tel: links and structured data, e.g. +6281166016611. */
export function e164Phone(rawPhone: string = siteConfig.whatsappNumber) {
  return `+${formatWhatsAppNumber(rawPhone)}`;
}
