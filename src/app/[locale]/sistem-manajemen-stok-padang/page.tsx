import PosPageShell, { ensureIndonesian, posPageMetadata } from "@/components/pos/PosPageShell";
import { FinalCta, PosFaq, ProblemList, ProcessTrack, RelatedPages, SectionHead } from "@/components/pos/PosSections";
import { StockFlow } from "@/components/pos/Diagrams";
import { Link } from "@/i18n/routing";
import { posPages } from "@/content/pos-pages";

const page = posPages.stok;

export const metadata = posPageMetadata(page);

export default async function StokPage({ params }: { params: Promise<{ locale: string }> }) {
  ensureIndonesian((await params).locale, page);

  return (
    <PosPageShell page={page}>
      <ProblemList
        kicker="01 / GEJALA"
        title="Kapan stok perlu sistem sendiri"
        intro="Banyak usaha sudah punya kasir yang cukup, tetapi masalahnya ada di gudang dan pembelian."
        items={[
          {
            symptom: "Barang habis baru ketahuan saat pelanggan bertanya",
            detail: "Tidak ada batas stok minimum, sehingga pesanan ke supplier selalu terlambat satu langkah.",
          },
          {
            symptom: "Hasil stock opname tidak pernah cocok",
            detail: "Selisih ditutup begitu saja tanpa catatan, dan penyebabnya terulang bulan berikutnya.",
          },
          {
            symptom: "Barang pindah gudang atau cabang tanpa jejak",
            detail: "Stok di satu lokasi berkurang, tetapi lokasi tujuan tidak pernah mencatat barang masuk.",
          },
          {
            symptom: "Margin per barang hanya perkiraan",
            detail: "Harga beli berubah dari supplier ke supplier, sementara harga jual tetap dihitung dari harga lama.",
          },
        ]}
      />

      <StockFlow
        kicker="02 / ALUR STOK"
        flow={[
          { code: "A01", title: "Supplier", body: "Data supplier, harga beli terakhir, dan barang yang biasa dipesan." },
          { code: "A02", title: "Pembelian", body: "Pesanan pembelian dibuat dari daftar stok minimum." },
          { code: "A03", title: "Barang masuk", body: "Penerimaan dicocokkan dengan pesanan, kekurangan atau barang rusak dicatat." },
          { code: "A04", title: "Mutasi", body: "Perpindahan antar gudang, toko, atau cabang dengan bukti kirim dan terima." },
          { code: "A05", title: "Keluar", body: "Penjualan, pemakaian internal, retur ke supplier, atau barang rusak." },
          { code: "A06", title: "Laporan", body: "Saldo per lokasi, kartu stok per barang, dan laporan margin." },
        ]}
        controls={[
          { code: "C01", title: "Stok minimum", body: "Batas per barang dan per lokasi. Barang di bawah batas masuk daftar belanja." },
          { code: "C02", title: "Stock opname", body: "Hitung fisik per lokasi atau kategori, selisih dicatat dengan alasan dan petugas." },
          { code: "C03", title: "Kartu stok", body: "Setiap angka saldo dapat ditelusuri ke transaksi yang membentuknya." },
          { code: "C04", title: "Laporan margin", body: "Harga jual dibandingkan harga pokok dengan metode yang Anda pilih." },
        ]}
      />

      <section className="detail-section pos-later" aria-labelledby="pos-later-title">
        <div className="detail-shell">
          <SectionHead
            kicker="03 / TANPA POS LENGKAP"
            title="Mulai dari stok, tambah kasir saat dibutuhkan"
            id="pos-later-title"
            intro="Sistem stok tidak mengharuskan Anda mengganti kasir yang sedang berjalan."
          />
          <ol className="pos-later-steps">
            <li>
              <span className="pos-index">Tahap 1</span>
              <h3>Stok dan pembelian</h3>
              <p>Data barang diimpor dari spreadsheet. Penjualan dicatat lewat input, impor file dari kasir lama, atau integrasi bila kasir lama mendukung.</p>
            </li>
            <li>
              <span className="pos-index">Tahap 2</span>
              <h3>Mutasi dan multi-lokasi</h3>
              <p>Gudang, toko, dan cabang dicatat terpisah, dengan bukti kirim dan terima di setiap perpindahan.</p>
            </li>
            <li>
              <span className="pos-index">Tahap 3, bila dibutuhkan</span>
              <h3>Modul kasir</h3>
              <p>
                Kasir ditambahkan ke sistem yang sama dan memakai data barang yang sudah rapi.{" "}
                <Link href={posPages.kasir.path} className="text-link pos-inline-link">Lihat aplikasi kasir</Link>
              </p>
            </li>
          </ol>
        </div>
      </section>

      <ProcessTrack kicker="04 / CARA KERJA" />

      <PosFaq kicker="05 / FAQ" intro={page.faqIntro} items={page.faq} />

      <FinalCta
        page={page}
        kicker="06 / KONSULTASI"
        title="Ceritakan di mana stok Anda paling sering tidak cocok."
      />

      <RelatedPages current={page.key} />
    </PosPageShell>
  );
}
