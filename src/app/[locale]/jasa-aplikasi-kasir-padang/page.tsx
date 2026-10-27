import PosPageShell, { ensureIndonesian, posPageMetadata } from "@/components/pos/PosPageShell";
import {
  ComparisonTable,
  ExampleFlows,
  FinalCta,
  PosFaq,
  ProblemList,
  ProcessTrack,
  RelatedPages,
  SegmentList,
} from "@/components/pos/PosSections";
import { ModuleMap } from "@/components/pos/Diagrams";
import { posPages } from "@/content/pos-pages";

const page = posPages.kasir;

export const metadata = posPageMetadata(page);

export default async function KasirPage({ params }: { params: Promise<{ locale: string }> }) {
  ensureIndonesian((await params).locale, page);

  return (
    <PosPageShell page={page}>
      <ProblemList
        kicker="01 / MASALAH OPERASIONAL"
        title="Tanda kasir Anda sudah tidak mengikuti usaha"
        intro="Biasanya bukan satu masalah besar, tetapi beberapa hal kecil yang terjadi setiap hari dan menghabiskan waktu pemilik."
        items={[
          {
            symptom: "Stok di catatan dan di rak tidak sama",
            detail: "Penjualan, barang masuk, dan barang rusak dicatat di tempat berbeda, sehingga selisih baru ketahuan saat barang dicari pelanggan.",
          },
          {
            symptom: "Laporan untuk pemilik datang terlambat",
            detail: "Omzet dan laba harian baru bisa dihitung setelah toko tutup, atau menunggu rekap manual dari admin.",
          },
          {
            symptom: "Sebagian transaksi masih manual",
            detail: "Nota tulis tangan, kalkulator, dan pencatatan ulang ke buku atau spreadsheet membuka peluang salah hitung dan selisih kas.",
          },
          {
            symptom: "Aplikasi langganan tidak bisa mengikuti alur Anda",
            detail: "Harga bertingkat, servis, paket, atau aturan cabang tidak ada di menu, dan biaya bulanan bertambah setiap outlet atau pengguna baru.",
          },
        ]}
      />

      <ModuleMap
        kicker="02 / MODUL SISTEM"
        inputs={[
          { code: "M02", title: "Produk & stok", body: "Katalog, harga, satuan, varian, dan saldo stok per lokasi." },
          { code: "M03", title: "Pembelian", body: "Pesanan ke supplier dan barang masuk yang langsung menambah stok." },
          { code: "M04", title: "Pelanggan", body: "Data pelanggan, riwayat belanja, harga khusus, dan piutang." },
        ]}
        hub={{
          code: "M01",
          title: "Kasir",
          body: "Transaksi, diskon, metode bayar tunai dan non-tunai, retur, dan tutup kasir per shift.",
        }}
        devices={[
          { code: "M07", title: "QRIS", body: "Kode statis milik usaha atau QRIS dinamis lewat penyedia pembayaran." },
          { code: "M08", title: "Printer thermal", body: "Struk penjualan, salinan dapur, atau label sesuai printer yang dipakai." },
        ]}
        outputs={[
          {
            code: "M05",
            title: "Laporan & dashboard pemilik",
            body: "Penjualan per hari, per kasir, per produk, laba kotor, stok menipis, dan rekap kas yang bisa dibuka dari ponsel.",
          },
        ]}
        access={{
          code: "M06",
          title: "Hak akses kasir, admin, dan pemilik",
          body: "Setiap peran hanya melihat dan mengubah yang menjadi tugasnya. Diskon, retur, dan ubah harga dapat dibatasi atau memerlukan persetujuan.",
        }}
      />

      <SegmentList
        kicker="03 / JENIS USAHA"
        title="Disusun mengikuti jenis usaha Anda"
        intro="Modulnya sama, tetapi urutan, aturan, dan laporannya berbeda untuk setiap jenis usaha."
        items={[
          {
            name: "Retail & toko",
            need: "Kasir cepat dengan barcode, stok banyak item, dan selisih kas yang terkendali.",
            scope: "Pemindaian barcode, harga grosir dan eceran, stok minimum, dan tutup kasir per shift.",
          },
          {
            name: "Konter HP & service HP",
            need: "Penjualan pulsa dan aksesoris sekaligus melacak HP yang sedang diservis.",
            scope: "Tiket servis, sparepart per merek dan tipe, DP dan pelunasan.",
            href: "/aplikasi-pos-konter-hp-padang",
            linkLabel: "Lihat POS konter HP",
          },
          {
            name: "Kuliner & UMKM",
            need: "Pesanan per meja atau bawa pulang dan bahan baku yang ikut berkurang.",
            scope: "Pesanan per meja, salinan ke dapur, stok bahan berdasarkan resep, dan menu terlaris.",
          },
          {
            name: "Multi-cabang",
            need: "Data setiap cabang terkumpul di satu tempat tanpa rekap manual.",
            scope: "Katalog dan harga dari pusat, stok dan kas per cabang, mutasi antar cabang, dan hak akses per cabang.",
          },
        ]}
      />

      <ComparisonTable
        rows={[
          {
            aspect: "Biaya",
            custom: "Biaya pembuatan di awal. Setelah itu biasanya server dan pemeliharaan bila dipilih.",
            subscription: "Biaya awal kecil, lalu biaya bulanan yang sering bertambah per outlet atau pengguna.",
          },
          {
            aspect: "Mulai dipakai",
            custom: "Setelah discovery, rancangan, dan pengujian. Modul inti dapat dipakai lebih dulu.",
            subscription: "Bisa dipakai hari yang sama setelah mendaftar dan mengisi produk.",
          },
          {
            aspect: "Alur kerja",
            custom: "Dibangun mengikuti alur usaha, termasuk aturan yang tidak umum.",
            subscription: "Usaha menyesuaikan diri dengan fitur yang tersedia di aplikasi.",
          },
          {
            aspect: "Fitur baru",
            custom: "Dapat dikembangkan sesuai kebutuhan, dengan biaya pengembangan.",
            subscription: "Mengikuti rencana pengembangan penyedia aplikasi.",
          },
          {
            aspect: "Data & server",
            custom: "Lokasi data dan cara ekspor disepakati di awal proyek.",
            subscription: "Data tersimpan di server penyedia; cara ekspor mengikuti fitur aplikasinya.",
          },
        ]}
        customFits={[
          "Alur kerja Anda punya aturan khusus, seperti servis, harga bertingkat, atau resep.",
          "Anda punya beberapa outlet dan biaya langganan per outlet terus bertambah.",
          "Anda ingin sistem dikembangkan lanjut dan terhubung dengan aplikasi lain.",
        ]}
        subscriptionFits={[
          "Usaha baru mulai dan alur kasirnya masih standar.",
          "Anda perlu kasir yang bisa dipakai minggu ini.",
          "Anda belum ingin menanggung biaya pembuatan di awal.",
        ]}
      />

      <ProcessTrack kicker="05 / CARA KERJA" />

      <ExampleFlows
        kicker="06 / CONTOH ALUR"
        flows={[
          {
            title: "Toko retail dengan dua kasir",
            steps: [
              "Barang dipindai di salah satu kasir, stok berkurang untuk kedua kasir.",
              "Barang di bawah stok minimum masuk daftar belanja admin.",
              "Pemilik membuka ringkasan penjualan dan selisih kas per shift dari ponsel.",
            ],
          },
          {
            title: "Konter HP dengan layanan servis",
            steps: [
              "HP diterima dengan tiket, keluhan, dan DP.",
              "Sparepart diambil dari stok melalui tiket, pelanggan diberi tahu saat siap.",
              "Pelunasan masuk laporan harian bersama penjualan aksesoris.",
            ],
            href: "/aplikasi-pos-konter-hp-padang",
            linkLabel: "Rincian POS konter HP",
          },
          {
            title: "Usaha dengan beberapa cabang",
            steps: [
              "Katalog dan harga diatur dari pusat.",
              "Stok dan kas tercatat per cabang, mutasi barang antar cabang tercatat.",
              "Pemilik membandingkan penjualan antar cabang di satu dashboard.",
            ],
          },
        ]}
      />

      <PosFaq kicker="07 / FAQ" intro={page.faqIntro} items={page.faq} />

      <FinalCta
        page={page}
        kicker="08 / KONSULTASI"
        title="Ceritakan alur kasir di usaha Anda, kami bantu petakan modulnya."
      />

      <RelatedPages current={page.key} />
    </PosPageShell>
  );
}
