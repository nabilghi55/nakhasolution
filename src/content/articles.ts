import { posRoutes } from "@/content/pos-routes";

// Article registry for /artikel/<slug>. Only "published" articles render and enter the sitemap.
// Before publishing: write the body, keep every number sourced (add the source to `sources`),
// and update `updatedAt`.

export type ArticleBlock =
  | { type: "h2"; text: string }
  | { type: "p"; text: string }
  | { type: "ul"; items: string[] };

export interface Article {
  slug: string;
  status: "draft" | "published";
  title: string;
  description: string;
  /** One- or two-sentence direct answer shown at the top of the article. */
  summary: string;
  author: string;
  datePublished: string;
  updatedAt: string;
  relatedServices: Array<{ href: string; label: string }>;
  /** Planned H2 sections. Guides the writer; not rendered. */
  outline: string[];
  body: ArticleBlock[];
  sources: Array<{ label: string; url: string }>;
}

// TODO(owner): set a named author (person or "Tim Nakha Solution") that can be verified on the site.
const AUTHOR = "Tim Nakha Solution";

export const articles: Article[] = [
  {
    slug: "harga-aplikasi-kasir-custom-padang",
    status: "draft",
    title: "Harga aplikasi kasir custom di Padang: faktor yang menentukan biaya",
    description:
      "Faktor yang memengaruhi biaya pembuatan aplikasi kasir custom: jumlah modul, outlet, perangkat, integrasi, dan migrasi data.",
    summary: "",
    author: AUTHOR,
    datePublished: "2026-10-27",
    updatedAt: "2026-10-27",
    relatedServices: [{ href: posRoutes.kasir.path, label: posRoutes.kasir.navLabel }],
    outline: [
      "Mengapa harga POS custom tidak bisa disamakan",
      "Jumlah modul dan urutan pengerjaannya",
      "Outlet, perangkat, dan pengguna",
      "Integrasi: QRIS, printer, marketplace",
      "Migrasi data dan pelatihan",
      "Biaya yang tetap berjalan setelah go-live",
    ],
    body: [],
    sources: [],
  },
  {
    slug: "aplikasi-kasir-beli-putus-vs-langganan",
    status: "draft",
    title: "Aplikasi kasir beli putus vs langganan: mana yang cocok untuk usaha?",
    description:
      "Perbandingan aplikasi kasir beli putus dan langganan dari sisi biaya, waktu mulai, fleksibilitas alur kerja, dan data.",
    summary: "",
    author: AUTHOR,
    datePublished: "2026-10-27",
    updatedAt: "2026-10-27",
    relatedServices: [{ href: posRoutes.kasir.path, label: posRoutes.kasir.navLabel }],
    outline: [
      "Apa yang dibayar pada masing-masing skema",
      "Kapan langganan lebih masuk akal",
      "Kapan beli putus lebih masuk akal",
      "Pertanyaan sebelum memilih",
    ],
    body: [],
    sources: [],
  },
  {
    slug: "sistem-pos-konter-service-hp",
    status: "draft",
    title: "Sistem POS untuk konter dan service HP: fitur yang perlu ada",
    description:
      "Fitur POS yang dibutuhkan konter dan tempat service HP: tiket servis, sparepart per tipe, DP, garansi, dan stok pulsa serta aksesoris.",
    summary: "",
    author: AUTHOR,
    datePublished: "2026-10-27",
    updatedAt: "2026-10-27",
    relatedServices: [{ href: posRoutes.konter.path, label: posRoutes.konter.navLabel }],
    outline: [
      "Penjualan barang dan jasa servis dalam satu konter",
      "Tiket servis dan status pengerjaan",
      "Sparepart per merek dan tipe",
      "DP, pelunasan, dan garansi",
      "Laporan yang dibutuhkan pemilik",
    ],
    body: [],
    sources: [],
  },
  {
    slug: "kasir-offline-saat-internet-mati",
    status: "draft",
    title: "Kasir tetap bertransaksi saat internet mati: pilihan sistem dan risikonya",
    description:
      "Pilihan arsitektur kasir saat koneksi internet terputus: online penuh, offline-first dengan sinkronisasi, atau server lokal, beserta risikonya.",
    summary: "",
    author: AUTHOR,
    datePublished: "2026-10-27",
    updatedAt: "2026-10-27",
    relatedServices: [
      { href: posRoutes.kasir.path, label: posRoutes.kasir.navLabel },
      { href: posRoutes.stok.path, label: posRoutes.stok.navLabel },
    ],
    outline: [
      "Apa yang terjadi pada kasir online saat koneksi putus",
      "Offline-first dan sinkronisasi",
      "Server lokal di toko",
      "Risiko stok ganda dan konflik data",
      "Cara memilih sesuai kondisi usaha",
    ],
    body: [],
    sources: [],
  },
];

export function publishedArticles() {
  return articles.filter((article) => article.status === "published" && article.body.length > 0);
}

export function findPublishedArticle(slug: string) {
  return publishedArticles().find((article) => article.slug === slug);
}
