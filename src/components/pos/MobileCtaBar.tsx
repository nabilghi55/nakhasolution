"use client";

import { useEffect, useState } from "react";
import WhatsAppCta from "@/components/ui/WhatsAppCta";

interface MobileCtaBarProps {
  message: string;
  source: string;
  /** Element ids that already show a CTA; the bar hides while any of them is on screen. */
  hideWhenVisible?: string[];
}

/**
 * Phone-only consultation bar. It appears after the hero CTA scrolls away and hides again
 * over the final CTA and footer, so it never sits on top of another CTA or form.
 */
export default function MobileCtaBar({ message, source, hideWhenVisible = [] }: MobileCtaBarProps) {
  const [visibleTargets, setVisibleTargets] = useState<Set<string>>(() => new Set(hideWhenVisible));
  const idsKey = hideWhenVisible.join("|");

  useEffect(() => {
    const ids = idsKey ? idsKey.split("|") : [];
    const targets = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    const footer = document.querySelector("footer");
    if (footer) targets.push(footer);
    if (!targets.length) return;

    const observer = new IntersectionObserver((entries) => {
      setVisibleTargets((current) => {
        const next = new Set(current);
        for (const entry of entries) {
          const key = entry.target.id || "footer";
          if (entry.isIntersecting) next.add(key);
          else next.delete(key);
        }
        return next;
      });
    });
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, [idsKey]);

  const hidden = visibleTargets.size > 0;

  return (
    <div className="pos-mobile-bar" data-hidden={hidden} inert={hidden}>
      <p>Ceritakan alur usaha Anda</p>
      <WhatsAppCta
        message={message}
        source={source}
        placement="mobile_bar"
        className="button-dark pos-mobile-bar-button"
        iconSize={17}
      >
        Chat Nakha
      </WhatsAppCta>
    </div>
  );
}
