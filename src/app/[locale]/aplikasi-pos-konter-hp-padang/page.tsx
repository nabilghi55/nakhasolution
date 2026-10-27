import PosPageShell, { ensureIndonesian, posPageMetadata } from "@/components/pos/PosPageShell";
import { FinalCta, PosFaq, ProblemList, ProcessTrack, RelatedPages } from "@/components/pos/PosSections";
import { ServiceTicketFlow } from "@/components/pos/Diagrams";
import { posPages } from "@/content/pos-pages";

const page = posPages.konter;

export const metadata = posPageMetadata(page);

export default async function KonterPage({ params }: { params: Promise<{ locale: string }> }) {
  ensureIndonesian((await params).locale, page);

  return (
    <PosPageShell page={page}>
      <ProblemList
        kicker="01 / DI MEJA KONTER"
        title="POS retail biasa tidak dibuat untuk servis HP"
        intro="Konter menjual barang dan jasa sekaligus. Aplikasi kasir umum hanya mencatat sisi penjualannya."
        items={[
          {
            symptom: "HP pelanggan dicatat di buku atau nota kertas",
            detail: "Saat pelanggan menanyakan status, teknisi harus mencari nota dan mengingat sudah sampai mana pengerjaannya.",
          },
          {
            symptom: "Sparepart keluar tanpa tercatat ke servis mana",
            detail: "Stok LCD, baterai, atau konektor berkurang, tetapi modal sparepart tidak menempel ke tiket yang memakainya.",
          },
          {
            symptom: "DP dan pelunasan tercampur dengan penjualan harian",
            detail: "Kas sore hari sulit dicocokkan karena uang muka servis dan penjualan aksesoris masuk ke laci yang sama.",
          },
        ]}
      />

      <ServiceTicketFlow
        kicker="02 / ALUR SERVIS"
        stages={[
          { code: "S01", title: "Diterima", body: "Data pelanggan, merek dan tipe, IMEI atau nomor seri, kelengkapan, dan keluhan dicatat. Tanda terima dicetak." },
          { code: "S02", title: "Dicek teknisi", body: "Hasil diagnosis, sparepart yang dibutuhkan, dan perkiraan biaya jasa ditambahkan ke tiket." },
          { code: "S03", title: "Menunggu persetujuan", body: "Biaya dikonfirmasi ke pelanggan, DP dicatat bila ada." },
          { code: "S04", title: "Dikerjakan", body: "Sparepart dikeluarkan dari stok lewat tiket, teknisi yang mengerjakan tercatat." },
          { code: "S05", title: "Siap diambil", body: "Pelanggan diberi tahu lewat WhatsApp dari tombol di tiket." },
          { code: "S06", title: "Diambil & lunas", body: "Sisa tagihan dibayar, masa garansi servis disimpan di riwayat pelanggan." },
        ]}
        fields={[
          { name: "Pelanggan", stores: "Nama, nomor WhatsApp, riwayat servis sebelumnya" },
          { name: "Perangkat", stores: "Merek, tipe, IMEI atau nomor seri, warna, kelengkapan" },
          { name: "Keluhan", stores: "Keluhan pelanggan dan kondisi fisik saat diterima" },
          { name: "Diagnosis", stores: "Catatan teknisi dan sparepart yang dibutuhkan" },
          { name: "Biaya", stores: "Biaya jasa, sparepart, DP, sisa tagihan" },
          { name: "Status", stores: "Tahap pengerjaan dan teknisi yang menangani" },
          { name: "Garansi", stores: "Masa garansi servis dan tanggal berakhir" },
        ]}
        counter={[
          { code: "K01", title: "Kasir penjualan", body: "Pulsa, paket data, SIM card, aksesoris, dan perangkat dijual dari layar kasir yang sama." },
          { code: "K02", title: "Stok sparepart", body: "Sparepart dikelompokkan per merek dan tipe HP, sehingga pencarian di rak dan di sistem cocok." },
          { code: "K03", title: "Riwayat pelanggan", body: "Pembelian dan servis sebelumnya terlihat saat pelanggan datang lagi." },
          { code: "K04", title: "Dashboard pemilik", body: "Omzet penjualan dan jasa, tiket yang tertunda, dan stok sparepart menipis." },
        ]}
      />

      <ProcessTrack kicker="03 / CARA KERJA" />

      <PosFaq kicker="04 / FAQ" intro={page.faqIntro} items={page.faq} />

      <FinalCta
        page={page}
        kicker="05 / KONSULTASI"
        title="Ceritakan alur servis di konter Anda, mulai dari HP diterima."
      />

      <RelatedPages current={page.key} />
    </PosPageShell>
  );
}
