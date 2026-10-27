// Thin wrapper over the analytics already loaded in the root layout (GA4 gtag + Meta Pixel).
// Components call trackEvent; swapping or adding a provider only touches this file.

export type AnalyticsEvent =
  | "view_service"
  | "click_whatsapp"
  | "submit_consultation"
  | "view_portfolio";

export type AnalyticsParams = {
  source_page?: string;
  placement?: string;
  service?: string;
  portfolio?: string;
  [key: string]: string | number | undefined;
};

export function trackEvent(event: AnalyticsEvent, params: AnalyticsParams = {}) {
  if (typeof window === "undefined") return;

  const payload = { source_page: window.location.pathname, ...params };

  window.gtag?.("event", event, payload);

  // Meta Pixel keeps receiving the standard Lead event it already used for WhatsApp clicks.
  if (event === "click_whatsapp" || event === "submit_consultation") {
    window.fbq?.("track", "Lead", {
      content_name: `${event}:${payload.placement ?? "unknown"}`,
      content_category: payload.source_page,
    });
  }
}
