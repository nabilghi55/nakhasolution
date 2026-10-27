"use client";

import type { ReactNode } from "react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { trackEvent } from "@/lib/analytics";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

interface WhatsAppCtaProps {
  /** Pre-filled opener; specific to the page so the conversation starts with context. */
  message: string;
  /** Page or feature the click came from, e.g. "/jasa-aplikasi-kasir-padang". */
  source: string;
  /** Position on the page, e.g. "hero", "final_cta", "mobile_bar". */
  placement: string;
  children: ReactNode;
  className?: string;
  iconSize?: number;
}

export default function WhatsAppCta({
  message,
  source,
  placement,
  children,
  className = "button-dark",
  iconSize = 18,
}: WhatsAppCtaProps) {
  return (
    <a
      href={buildWhatsAppLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      onClick={() => trackEvent("click_whatsapp", { source_page: source, placement })}
    >
      <WhatsAppIcon size={iconSize} />
      {children}
      <span className="sr-only"> (WhatsApp, tab baru)</span>
    </a>
  );
}
