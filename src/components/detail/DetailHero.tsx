import Image from "next/image";

interface DetailHeroProps {
  index: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  backHref: string;
  backLabel: string;
  mediaLabel?: string;
  logo?: string;
}

export default function DetailHero({
  index,
  eyebrow,
  title,
  description,
  image,
  imageAlt,
  backHref,
  backLabel,
  mediaLabel,
  logo,
}: DetailHeroProps) {
  return (
    <section className="detail-hero" aria-labelledby="detail-title">
      <div className="detail-hero-rail">
        <span>NAKHA SOLUTION / PADANG</span>
        <span>{index}</span>
      </div>

      <div className="detail-hero-layout">
        <div className="detail-hero-copy">
          <a href={backHref} className="detail-back-link">
            <span aria-hidden="true">←</span>
            {backLabel}
          </a>
          <p className="detail-eyebrow">{eyebrow}</p>
          <h1 id="detail-title">{title}</h1>
          <p className="detail-lead">{description}</p>
        </div>

        <figure className="detail-media">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 820px) 100vw, 48vw"
            className="detail-media-image"
            priority
          />
          <div className="detail-media-grid" aria-hidden="true" />
          {logo && (
            <div className="detail-media-logo">
              <Image src={logo} alt="" width={112} height={72} className="detail-media-logo-image" />
            </div>
          )}
          <figcaption>
            <span>{mediaLabel ?? imageAlt}</span>
            <span>NS / DETAIL</span>
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
