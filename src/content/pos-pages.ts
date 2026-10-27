// Copy for the Indonesian-only POS / stock service pages.
// Rules for editing: no rankings ("terbaik", "nomor 1"), no invented numbers, clients, or
// testimonials. Features that would be built per project use "dapat dirancang".

import { posRoutes, type PosPageKey, type PosRoute } from "@/content/pos-routes";

export type { PosPageKey };

export interface FaqItem {
  question: string;
  answer: string;
}

export interface SystemNode {
  code: string;
  title: string;
  body: string;
}

export interface PosPageContent extends PosRoute {
  /** ISO date of the last content review, used in the sitemap. */
  updatedAt: string;
  seo: { title: string; description: string };
  schema: { name: string; serviceType: string; audience: string[] };
  hero: {
    index: string;
    h1: string;
    lead: string;
    spec: Array<{ label: string; value: string }>;
    signal: readonly [string, string, string];
  };
  faqIntro: string;
  faq: FaqItem[];
}

export const posPages: Record<PosPageKey, PosPageContent> = {
  kasir: {
    ...posRoutes.kasir,
    updatedAt: "2026-10-27",
    seo: {
      title: "Jasa Aplikasi Kasir & POS Custom di Padang",
      description:
        "Aplikasi kasir/POS custom untuk usaha di Padang dan Sumatera Barat: transaksi, stok, pelanggan, laporan pemilik, QRIS, dan printer thermal. Bisa beli putus.",
    },
    schema: {
      name: "Jasa Aplikasi Kasir dan POS Custom di Padang",
      serviceType: "Pembuatan aplikasi kasir (point of sale) custom",
      audience: ["Retail dan toko", "Konter HP dan service HP", "Kuliner dan UMKM", "Bisnis multi-cabang"],
    },
    hero: {
      index: `LAYANAN / ${posRoutes.kasir.code}`,
      h1: "Aplikasi Kasir yang Mengikuti Cara Bisnis Anda Bekerja.",
      lead:
        "Nakha Solution membangun POS custom untuk bisnis di Padang dan Sumatera Barat, mulai dari transaksi, stok, pelanggan, hingga dashboard pemilik.",
      spec: [
        { label: "Untuk", value: "Retail, konter HP, kuliner, multi-cabang" },
        { label: "Skema", value: "Beli putus, dapat dikembangkan lanjut" },
        { label: "Perangkat", value: "Printer thermal, QRIS, pemindai barcode" },
        { label: "Pendampingan", value: "Pelatihan tim dan go-live" },
      ],
      signal: ["ALUR KERJA", "MODUL", "GO-LIVE"],
    },
    faqIntro: "Pertanyaan yang biasanya muncul sebelum pemilik usaha memutuskan membangun POS sendiri.",
    // TODO(owner): confirm the wording on ownership, support period, and what "beli putus" includes.
    faq: [
      {
        question: "Berapa biaya membuat aplikasi kasir custom?",
        answer:
          "Biaya dihitung dari jumlah modul, jumlah outlet dan perangkat, integrasi yang dibutuhkan (QRIS, printer, timbangan, marketplace), serta migrasi data lama. Estimasi diberikan setelah kebutuhan dipetakan, dan dapat dipecah per modul agar Anda bisa mulai dari bagian yang paling mendesak.",
      },
      {
        question: "Berapa lama waktu pengerjaannya?",
        answer:
          "Tergantung ruang lingkup. Jadwal disusun setelah sesi discovery. Modul inti seperti kasir dan stok dapat diselesaikan dan dipakai lebih dulu, lalu modul lain menyusul bertahap.",
      },
      {
        question: "Apa maksud skema beli putus?",
        answer:
          "Anda membayar pembuatan sistem, bukan biaya langganan bulanan per outlet atau per pengguna. Biaya yang tetap berjalan biasanya hanya server atau hosting dan, bila Anda pilih, kontrak pemeliharaan. Hal yang termasuk dalam pembelian dicantumkan tertulis di penawaran.",
      },
      {
        question: "Apakah kasir tetap bisa dipakai saat internet mati?",
        answer:
          "Dapat dirancang. Kasir bisa dibuat menyimpan transaksi di perangkat, lalu menyinkronkannya saat koneksi kembali. Pilihan ini menambah kompleksitas, misalnya stok antar perangkat tidak langsung sama selama offline, jadi risikonya dibahas bersama sebelum diputuskan.",
      },
      {
        question: "Apakah bisa terhubung ke printer thermal dan QRIS?",
        answer:
          "Bisa. Printer struk thermal yang umum dipakai kasir dapat dihubungkan, dan tipe printer Anda dicek saat discovery. QRIS dapat berupa kode statis milik usaha Anda, atau QRIS dinamis yang terhubung ke penyedia pembayaran pilihan Anda dengan biaya transaksi dari penyedia tersebut.",
      },
      {
        question: "Bisakah fitur ditambah setelah sistem berjalan?",
        answer:
          "Bisa. Sistem disusun per modul, sehingga fitur baru, cabang baru, atau integrasi dapat ditambahkan tanpa membangun ulang dari awal.",
      },
      {
        question: "Siapa pemilik data transaksi usaha saya?",
        answer:
          "Data usaha tetap milik Anda. Lokasi penyimpanan (server Anda, VPS, atau layanan cloud) dan cara ekspor data disepakati tertulis di awal proyek.",
      },
      {
        question: "Bagaimana support setelah sistem dipakai?",
        answer:
          "Setelah go-live ada masa pendampingan untuk perbaikan dan penyesuaian. Setelah itu Anda dapat memilih kontrak pemeliharaan atau meminta pengembangan sesuai kebutuhan. Durasi dan cakupannya tertulis di penawaran.",
      },
    ],
  },

  konter: {
    ...posRoutes.konter,
    updatedAt: "2026-10-27",
    seo: {
      title: "Aplikasi POS Konter HP & Service HP di Padang",
      description:
        "POS custom untuk konter dan service HP di Padang: tiket servis, sparepart per merek dan tipe, DP dan pelunasan, stok pulsa dan aksesoris, serta dashboard pemilik.",
    },
    schema: {
      name: "Aplikasi POS untuk Konter HP dan Service HP di Padang",
      serviceType: "Pembuatan aplikasi kasir dan tiket servis untuk konter HP",
      audience: ["Konter HP", "Tempat service HP"],
    },
    hero: {
      index: `LAYANAN / ${posRoutes.konter.code}`,
      h1: "Kasir dan Tiket Servis untuk Konter HP dalam Satu Sistem.",
      lead:
        "Nakha Solution merancang POS custom untuk konter dan service HP di Padang: penjualan pulsa, SIM card, dan aksesoris di kasir, ditambah tiket servis yang melacak perangkat sejak diterima sampai diambil pelanggan.",
      spec: [
        { label: "Penjualan", value: "Pulsa, SIM card, aksesoris, perangkat" },
        { label: "Servis", value: "Tiket, status, DP, pelunasan, garansi" },
        { label: "Stok", value: "Sparepart per merek dan tipe" },
        { label: "Skema", value: "Beli putus, dapat dikembangkan lanjut" },
      ],
      signal: ["DITERIMA", "DIKERJAKAN", "DIAMBIL"],
    },
    faqIntro: "Pertanyaan khusus konter dan tempat service HP.",
    faq: [
      {
        question: "Apakah penjualan barang dan jasa servis bisa dipisah?",
        answer:
          "Dapat dirancang begitu. Penjualan pulsa, SIM card, dan aksesoris dicatat di kasir, sedangkan servis dicatat per tiket. Keduanya bertemu di laporan harian sehingga pemilik melihat omzet barang dan jasa secara terpisah.",
      },
      {
        question: "Bagaimana sparepart yang dipakai untuk servis tercatat?",
        answer:
          "Sparepart dapat dikeluarkan dari stok langsung dari tiket servis. Dengan begitu stok berkurang di tempat yang benar dan modal sparepart ikut tercatat di tiket tersebut.",
      },
      {
        question: "Bisakah pelanggan diberi tahu saat HP-nya selesai?",
        answer:
          "Bisa. Pesan WhatsApp dapat dikirim dari tombol di tiket secara manual. Pengiriman otomatis memerlukan WhatsApp Business API, yang punya biaya sendiri dari penyedianya, jadi pilihannya dibahas saat discovery.",
      },
      {
        question: "Bagaimana DP dan garansi servis dicatat?",
        answer:
          "DP dicatat di tiket, lalu sisa tagihan dihitung saat pelunasan. Masa garansi dapat disimpan per tiket sehingga klaim garansi bisa dicek dari riwayat pelanggan.",
      },
      {
        question: "Saya punya lebih dari satu konter. Bisa dipantau dari satu tempat?",
        answer:
          "Dapat dirancang multi-cabang: stok dan tiket tercatat per cabang, hak akses dibatasi per cabang, dan pemilik melihat semuanya dari satu dashboard.",
      },
      {
        question: "Berapa biaya dan lama pengerjaannya?",
        answer:
          "Keduanya bergantung pada modul yang dipilih dan jumlah cabang. Estimasi biaya dan jadwal diberikan setelah alur servis di konter Anda dipetakan.",
      },
    ],
  },

  stok: {
    ...posRoutes.stok,
    updatedAt: "2026-10-27",
    seo: {
      title: "Sistem Manajemen Stok & Inventori Custom di Padang",
      description:
        "Sistem manajemen stok custom untuk usaha di Padang dan Sumatera Barat: supplier, pembelian, minimum stok, stock opname, mutasi antar lokasi, dan laporan margin.",
    },
    schema: {
      name: "Sistem Manajemen Stok Custom di Padang",
      serviceType: "Pembuatan sistem manajemen stok dan inventori",
      audience: ["Retail dan toko", "Distributor dan grosir", "Usaha dengan gudang", "Bisnis multi-cabang"],
    },
    hero: {
      index: `LAYANAN / ${posRoutes.stok.code}`,
      h1: "Sistem Manajemen Stok untuk Usaha yang Belum Butuh POS Lengkap.",
      lead:
        "Nakha Solution membangun sistem stok custom untuk bisnis di Padang dan Sumatera Barat: supplier, pembelian, minimum stok, stock opname, mutasi antar lokasi, dan laporan margin. Modul kasir dapat ditambahkan nanti di sistem yang sama.",
      spec: [
        { label: "Mulai dari", value: "Stok dan pembelian, tanpa ganti kasir" },
        { label: "Lokasi", value: "Gudang, toko, atau beberapa cabang" },
        { label: "Data lama", value: "Impor dari spreadsheet" },
        { label: "Skema", value: "Beli putus, dapat dikembangkan lanjut" },
      ],
      signal: ["SUPPLIER", "GUDANG", "LAPORAN"],
    },
    faqIntro: "Pertanyaan dari usaha yang ingin merapikan stok lebih dulu.",
    faq: [
      {
        question: "Apakah sistem stok bisa dipakai tanpa aplikasi kasir dari Nakha?",
        answer:
          "Bisa. Penjualan dapat dicatat lewat input manual, impor file dari kasir yang sudah ada, atau integrasi bila kasir lama menyediakan API atau ekspor data. Kemungkinan integrasinya dicek saat discovery.",
      },
      {
        question: "Data stok kami masih di Excel. Bisa dipindahkan?",
        answer:
          "Bisa. Data barang dan saldo awal dapat diimpor. Format spreadsheet dirapikan bersama lebih dulu supaya kode barang dan satuan tidak tercampur.",
      },
      {
        question: "Bagaimana stock opname dilakukan?",
        answer:
          "Opname dapat dilakukan per lokasi atau per kategori barang. Selisih antara catatan dan hitungan fisik tercatat sebagai penyesuaian, lengkap dengan alasan dan petugas yang menghitung.",
      },
      {
        question: "Apakah bisa memakai barcode?",
        answer:
          "Bisa. Pemindai barcode yang bekerja seperti keyboard umumnya langsung dapat dipakai. Label barcode dapat dicetak dari sistem bila printer label tersedia.",
      },
      {
        question: "Bagaimana laporan margin dihitung?",
        answer:
          "Margin dihitung dari harga jual dikurangi harga pokok. Metode harga pokok, misalnya rata-rata tertimbang atau harga beli terakhir, dipilih sesuai cara usaha Anda menghitung modal.",
      },
      {
        question: "Kalau nanti butuh kasir, apakah harus mulai dari awal?",
        answer:
          "Tidak. Modul kasir dapat ditambahkan ke sistem yang sama dan langsung memakai data barang dan stok yang sudah berjalan.",
      },
    ],
  },
};

export const posPageList = Object.values(posPages);
