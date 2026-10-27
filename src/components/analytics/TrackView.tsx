"use client";

import { useEffect } from "react";
import { trackEvent, type AnalyticsEvent, type AnalyticsParams } from "@/lib/analytics";

/** Fires one analytics event when the page mounts. Renders nothing. */
export default function TrackView({ event, params }: { event: AnalyticsEvent; params?: AnalyticsParams }) {
  const serialized = JSON.stringify(params ?? {});

  useEffect(() => {
    trackEvent(event, JSON.parse(serialized) as AnalyticsParams);
  }, [event, serialized]);

  return null;
}
