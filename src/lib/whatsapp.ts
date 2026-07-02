export function formatWhatsAppNumber(rawPhone: string) {
  let number = rawPhone.replace(/\D/g, "");
  if (number.startsWith("0")) {
    number = `62${number.slice(1)}`;
  }
  return number;
}

export function buildWhatsAppLink(rawPhone: string, message: string) {
  return `https://wa.me/${formatWhatsAppNumber(rawPhone)}?text=${encodeURIComponent(message)}`;
}
