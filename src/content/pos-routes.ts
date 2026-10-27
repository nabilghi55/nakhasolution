// Lightweight route data for the POS / stock pages. Client components (navbar, floating
// WhatsApp button) import this file instead of the full page copy in pos-pages.ts.

export type PosPageKey = "kasir" | "konter" | "stok";

export interface PosRoute {
  key: PosPageKey;
  path: string;
  navLabel: string;
  code: string;
  whatsappMessage: string;
}

export const posRoutes: Record<PosPageKey, PosRoute> = {
  kasir: {
    key: "kasir",
    path: "/jasa-aplikasi-kasir-padang",
    navLabel: "Aplikasi Kasir & POS",
    code: "POS-01",
    whatsappMessage: "Halo Nakha Solution, saya ingin konsultasi aplikasi kasir/POS untuk usaha saya.",
  },
  konter: {
    key: "konter",
    path: "/aplikasi-pos-konter-hp-padang",
    navLabel: "POS Konter & Service HP",
    code: "POS-02",
    whatsappMessage:
      "Halo Nakha Solution, saya ingin konsultasi aplikasi POS dan tiket servis untuk konter HP saya.",
  },
  stok: {
    key: "stok",
    path: "/sistem-manajemen-stok-padang",
    navLabel: "Sistem Manajemen Stok",
    code: "STK-01",
    whatsappMessage: "Halo Nakha Solution, saya ingin konsultasi sistem manajemen stok untuk usaha saya.",
  },
};

export const posRouteList = Object.values(posRoutes);

/** WhatsApp opener for a pathname, so the floating button stays page-specific. */
export function whatsappMessageForPath(pathname: string) {
  return posRouteList.find((route) => pathname.endsWith(route.path))?.whatsappMessage;
}
