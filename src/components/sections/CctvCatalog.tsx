"use client";

import { useTranslations } from "next-intl";
import { buildWhatsAppLink } from "@/lib/whatsapp";

interface PackageItem {
  name: string;
  price: string;
  items: string[];
}

export interface CatalogData {
  title: string;
  subtitle: string;
  notes: string[];
  packageTitle: string;
  packageSubtitle: string;
  includedLabel: string;
  ctaText: string;
  packages: PackageItem[];
}

interface CctvCatalogProps {
  catalog: CatalogData;
}

export default function CctvCatalog({ catalog }: CctvCatalogProps) {
  const infoT = useTranslations("ContactInfo");

  if (!catalog) return null;

  return (
    <section className="detail-section" aria-labelledby="package-title">
      <div className="detail-shell">
        <div className="detail-section-head">
          <p className="detail-kicker">02 / CONFIGURATION</p>
          <div>
            <h2 id="package-title">{catalog.packageTitle}</h2>
            <p>{catalog.packageSubtitle}</p>
          </div>
        </div>

        <div className="detail-packages">
          {catalog.packages.map((pkg, index) => {
            const message = `Halo Nakha Solution, saya ingin membahas ${pkg.name}. Harga yang tercantum: ${pkg.price}.`;
            return (
              <article className="detail-package" key={pkg.name}>
                <div>
                  <p className="detail-package-number">PACKAGE / {String(index + 1).padStart(2, "0")}</p>
                  <h3>{pkg.name}</h3>
                  <p className="detail-package-price">{pkg.price}</p>
                  <a
                    className="detail-package-link"
                    href={buildWhatsAppLink(infoT("phone"), message)}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {catalog.ctaText}
                  </a>
                </div>
                <ul aria-label={`${catalog.includedLabel} ${pkg.name}`}>
                  {pkg.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            );
          })}
        </div>

        <div className="detail-notes">
          <div>
            <h3>{catalog.title}</h3>
            <p className="detail-meta">{catalog.subtitle}</p>
          </div>
          <ol className="detail-notes-list">
            {catalog.notes.map((note, index) => (
              <li key={note}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <p>{note}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
