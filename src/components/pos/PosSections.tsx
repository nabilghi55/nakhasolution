import type { ReactNode } from "react";
import { Link } from "@/i18n/routing";
import DetailSignalRail from "@/components/detail/DetailSignalRail";
import WhatsAppCta from "@/components/ui/WhatsAppCta";
import type { FaqItem, PosPageContent } from "@/content/pos-pages";
import { posPageList } from "@/content/pos-pages";

export function PosHero({ page }: { page: PosPageContent }) {
  return (
    <section className="detail-hero pos-hero" aria-labelledby="pos-title">
      <div className="detail-hero-rail">
        <span>NAKHA SOLUTION / PADANG</span>
        <span>{page.hero.index}</span>
      </div>

      <DetailSignalRail start="KEBUTUHAN" end="SISTEM" labels={page.hero.signal} />

      <div className="pos-hero-layout">
        <div className="pos-hero-copy">
          <nav aria-label="Breadcrumb" className="pos-breadcrumb">
            <ol>
              <li><Link href="/">Beranda</Link></li>
              <li><Link href="/#services">Layanan</Link></li>
              <li aria-current="page">{page.navLabel}</li>
            </ol>
          </nav>
          <h1 id="pos-title">{page.hero.h1}</h1>
          <p className="detail-lead">{page.hero.lead}</p>
          <div className="pos-hero-actions">
            <WhatsAppCta message={page.whatsappMessage} source={page.path} placement="hero">
              Konsultasikan Kebutuhan
            </WhatsAppCta>
            <a href="#cara-kerja" className="button-line">
              Lihat Cara Kerja
            </a>
          </div>
        </div>

        <dl className="pos-spec" aria-label="Ringkasan layanan">
          {page.hero.spec.map((row, index) => (
            <div className="pos-spec-row" key={row.label}>
              <dt>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {row.label}
              </dt>
              <dd>{row.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

interface SectionHeadProps {
  kicker: string;
  title: string;
  intro?: ReactNode;
  id?: string;
}

export function SectionHead({ kicker, title, intro, id }: SectionHeadProps) {
  return (
    <div className="detail-section-head pos-section-head">
      <p className="detail-kicker">{kicker}</p>
      <div>
        <h2 id={id}>{title}</h2>
        {intro ? <p>{intro}</p> : null}
      </div>
    </div>
  );
}

export interface Problem {
  symptom: string;
  detail: string;
}

/** Numbered symptoms in a sticky two-column layout: the reader recognises their own situation. */
export function ProblemList({ kicker, title, intro, items }: { kicker: string; title: string; intro: string; items: Problem[] }) {
  return (
    <section className="detail-section pos-problems" aria-labelledby="pos-problems-title">
      <div className="detail-shell pos-problems-layout">
        <div className="pos-problems-intro">
          <p className="detail-kicker">{kicker}</p>
          <h2 id="pos-problems-title">{title}</h2>
          <p>{intro}</p>
        </div>
        <ol className="pos-problem-list">
          {items.map((item, index) => (
            <li key={item.symptom}>
              <span className="pos-index">G{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{item.symptom}</h3>
                <p>{item.detail}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export interface Segment {
  name: string;
  need: string;
  scope: string;
  href?: string;
  linkLabel?: string;
}

export function SegmentList({ kicker, title, intro, items }: { kicker: string; title: string; intro: string; items: Segment[] }) {
  return (
    <section className="detail-section pos-segments" aria-labelledby="pos-segments-title">
      <div className="detail-shell">
        <SectionHead kicker={kicker} title={title} intro={intro} id="pos-segments-title" />
        <div className="pos-segment-table" role="list">
          <div className="pos-segment-header" aria-hidden="true">
            <span>Jenis usaha</span>
            <span>Yang biasanya dibutuhkan</span>
            <span>Yang dapat dirancang</span>
          </div>
          {items.map((item) => (
            <div className="pos-segment-row" role="listitem" key={item.name}>
              <h3>{item.name}</h3>
              <p><span className="pos-mobile-label">Yang biasanya dibutuhkan</span>{item.need}</p>
              <p>
                <span className="pos-mobile-label">Yang dapat dirancang</span>
                {item.scope}
                {item.href ? (
                  <>
                    {" "}
                    <Link href={item.href} className="text-link pos-inline-link">{item.linkLabel}</Link>
                  </>
                ) : null}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export interface ComparisonRow {
  aspect: string;
  custom: string;
  subscription: string;
}

export function ComparisonTable({
  rows,
  customFits,
  subscriptionFits,
}: {
  rows: ComparisonRow[];
  customFits: string[];
  subscriptionFits: string[];
}) {
  return (
    <section className="detail-section pos-compare" aria-labelledby="pos-compare-title">
      <div className="detail-shell">
        <SectionHead
          kicker="04 / PERBANDINGAN"
          title="POS custom beli putus atau POS langganan?"
          id="pos-compare-title"
          intro="Keduanya pilihan yang masuk akal. Yang menentukan adalah seberapa khusus alur kerja usaha Anda dan bagaimana Anda ingin menanggung biayanya."
        />
        <table className="pos-compare-table">
          <caption className="sr-only">Perbandingan POS custom beli putus dan POS langganan</caption>
          <thead>
            <tr>
              <th scope="col">Aspek</th>
              <th scope="col">POS custom beli putus</th>
              <th scope="col">POS langganan</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.aspect}>
                <th scope="row">{row.aspect}</th>
                <td data-label="POS custom beli putus">{row.custom}</td>
                <td data-label="POS langganan">{row.subscription}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="pos-fit-grid">
          <div className="pos-fit pos-fit-custom">
            <h3>Custom lebih cocok bila</h3>
            <ul>{customFits.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
          <div className="pos-fit">
            <h3>Langganan lebih cocok bila</h3>
            <ul>{subscriptionFits.map((item) => <li key={item}>{item}</li>)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export interface ProcessStep {
  title: string;
  output: string;
}

export const defaultProcess: ProcessStep[] = [
  { title: "Discovery", output: "Alur kerja kasir, gudang, dan pemilik dipetakan, lalu modul diprioritaskan." },
  { title: "Rancangan", output: "Alur layar dan struktur data disusun untuk Anda setujui sebelum dibangun." },
  { title: "Development", output: "Modul dibangun bertahap dan dapat dicoba di setiap tahap." },
  { title: "Testing", output: "Sistem diuji dengan data barang dan perangkat yang Anda pakai sehari-hari." },
  { title: "Training & go-live", output: "Kasir, admin, dan pemilik dilatih, lalu didampingi saat sistem mulai dipakai." },
  { title: "Support", output: "Perbaikan, penyesuaian, dan pengembangan modul berikutnya." },
];

export function ProcessTrack({ kicker, steps = defaultProcess }: { kicker: string; steps?: ProcessStep[] }) {
  return (
    <section className="detail-section pos-process" id="cara-kerja" aria-labelledby="pos-process-title">
      <div className="detail-shell">
        <SectionHead
          kicker={kicker}
          title="Cara kerja Nakha dari kebutuhan sampai sistem dipakai"
          id="pos-process-title"
          intro="Setiap tahap menghasilkan sesuatu yang bisa Anda periksa sebelum lanjut ke tahap berikutnya."
        />
        <ol className="pos-process-track">
          {steps.map((step, index) => (
            <li key={step.title}>
              <span className="pos-process-node" aria-hidden="true" />
              <span className="pos-index">{String(index + 1).padStart(2, "0")}</span>
              <h3>{step.title}</h3>
              <p>{step.output}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export interface ExampleFlow {
  title: string;
  steps: string[];
  href?: string;
  linkLabel?: string;
}

// TODO(owner): replace with an approved POS screenshot (e.g. /assets/pos/dashboard.webp, 1600x1000)
// and set it here. Until then the slot below renders an honest, fixed-size placeholder.
const POS_SCREENSHOT: { src: string; alt: string } | null = null;

export function ExampleFlows({ kicker, flows }: { kicker: string; flows: ExampleFlow[] }) {
  return (
    <section className="detail-section pos-examples" aria-labelledby="pos-examples-title">
      <div className="detail-shell">
        <SectionHead
          kicker={kicker}
          title="Contoh alur yang dapat disesuaikan"
          id="pos-examples-title"
          intro="Ini contoh rancangan untuk menggambarkan cara sistem bekerja, bukan studi kasus klien. Alur di usaha Anda dipetakan ulang saat discovery."
        />
        <div className="pos-examples-layout">
          <div className="pos-example-list">
            {flows.map((flow, index) => (
              <article className="pos-example" key={flow.title}>
                <header>
                  <span className="pos-index">C{String(index + 1).padStart(2, "0")}</span>
                  <h3>{flow.title}</h3>
                </header>
                <ol>
                  {flow.steps.map((step) => <li key={step}>{step}</li>)}
                </ol>
                {flow.href ? (
                  <Link href={flow.href} className="text-link pos-inline-link">{flow.linkLabel}</Link>
                ) : null}
              </article>
            ))}
          </div>

          <figure className="pos-shot">
            {POS_SCREENSHOT ? (
              // eslint-disable-next-line @next/next/no-img-element -- replaced by next/image once the asset exists
              <img src={POS_SCREENSHOT.src} alt={POS_SCREENSHOT.alt} width={1600} height={1000} />
            ) : (
              <div className="pos-shot-placeholder">
                <span className="pos-index">[TANGKAPAN LAYAR]</span>
                <p>Ruang ini disiapkan untuk tangkapan layar dashboard POS yang sudah disetujui untuk dipublikasikan.</p>
              </div>
            )}
            <figcaption>
              <span>Dashboard pemilik</span>
              <Link href="/#portfolio" className="text-link">Lihat proyek Nakha yang sudah dipublikasikan</Link>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

export function PosFaq({ kicker, intro, items }: { kicker: string; intro: string; items: FaqItem[] }) {
  return (
    <section className="detail-section detail-faq-section" aria-labelledby="pos-faq-title">
      <div className="detail-shell detail-faq-layout">
        <div className="detail-faq-intro">
          <p className="detail-kicker">{kicker}</p>
          <h2 id="pos-faq-title">Pertanyaan yang sering diajukan</h2>
          <p>{intro}</p>
        </div>
        <div className="detail-faq-list">
          {items.map((item, index) => (
            <details className="detail-faq-item" key={item.question}>
              <summary>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <strong>{item.question}</strong>
              </summary>
              <p>{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FinalCta({ page, kicker, title }: { page: PosPageContent; kicker: string; title: string }) {
  return (
    <section className="detail-cta-band pos-final" id="konsultasi" aria-labelledby="pos-final-title">
      <div className="detail-shell detail-cta-layout">
        <div>
          <p className="detail-kicker">{kicker}</p>
          <h2 id="pos-final-title">{title}</h2>
          <p className="pos-final-note">
            Pesan pembuka sudah terisi. Tambahkan jenis usaha, jumlah outlet, dan kasir yang dipakai sekarang.
          </p>
        </div>
        <div className="pos-final-actions">
          <WhatsAppCta
            message={page.whatsappMessage}
            source={page.path}
            placement="final_cta"
            className="detail-cta-link"
            iconSize={17}
          >
            Konsultasikan lewat WhatsApp
          </WhatsAppCta>
          <Link href="/#contact" className="pos-final-alt">Atau isi formulir kontak</Link>
        </div>
      </div>
    </section>
  );
}

export function RelatedPages({ current }: { current: PosPageContent["key"] }) {
  const others = posPageList.filter((page) => page.key !== current);
  return (
    <nav className="pos-related" aria-label="Layanan terkait">
      <div className="detail-shell pos-related-layout">
        <p className="detail-kicker">LAYANAN TERKAIT</p>
        <ul>
          {others.map((page) => (
            <li key={page.key}>
              <Link href={page.path}>
                <span className="pos-index">{page.code}</span>
                <strong>{page.navLabel}</strong>
                <span>{page.seo.title}</span>
              </Link>
            </li>
          ))}
          <li>
            <Link href="/services/business-application">
              <span className="pos-index">APP</span>
              <strong>Aplikasi bisnis lainnya</strong>
              <span>ERP, HRIS, dan modul operasional</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
