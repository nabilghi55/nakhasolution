import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import JsonLd from "@/components/seo/JsonLd";
import DetailSignalRail from "@/components/detail/DetailSignalRail";
import { Link } from "@/i18n/routing";
import { findPublishedArticle } from "@/content/articles";
import { articleSchema } from "@/lib/schema";
import { buildPageMetadata } from "@/lib/seo";

type Params = Promise<{ locale: string; slug: string }>;

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { slug } = await params;
  const article = findPublishedArticle(slug);
  if (!article) return {};
  return buildPageMetadata({
    locale: "id",
    path: `/artikel/${article.slug}`,
    title: article.title,
    description: article.description,
    locales: ["id"],
    type: "article",
  });
}

function formatDate(iso: string) {
  return new Intl.DateTimeFormat("id-ID", { day: "numeric", month: "long", year: "numeric" }).format(new Date(iso));
}

// Article template. Drafts return 404 so unfinished copy is never indexed.
export default async function ArticlePage({ params }: { params: Params }) {
  const { locale, slug } = await params;
  const article = findPublishedArticle(slug);
  if (!article) notFound();
  if (locale !== "id") permanentRedirect(`/artikel/${slug}`);

  const path = `/artikel/${article.slug}`;

  return (
    <div className="detail-page">
      <JsonLd
        data={articleSchema({
          title: article.title,
          description: article.description,
          path,
          datePublished: article.datePublished,
          dateModified: article.updatedAt,
          authorName: article.author,
        })}
      />
      <Navbar />
      <main className="legal-main">
        <div className="detail-standalone-signal">
          <DetailSignalRail start="ARTIKEL" end="LAYANAN" labels={["PERTANYAAN", "JAWABAN", "SUMBER"]} />
        </div>
        <article className="detail-shell">
          <header className="legal-header">
            <div>
              <p className="detail-eyebrow">NAKHA SOLUTION / ARTIKEL</p>
              <h1 className="legal-title">{article.title}</h1>
              <p className="legal-meta">
                {article.author} · Diperbarui <time dateTime={article.updatedAt}>{formatDate(article.updatedAt)}</time>
              </p>
            </div>
            <p>{article.summary}</p>
          </header>
          <div className="legal-content">
            <aside>
              <p className="detail-kicker">LAYANAN TERKAIT</p>
              {article.relatedServices.map((service) => (
                <Link key={service.href} href={service.href} className="detail-secondary-link">
                  {service.label}
                </Link>
              ))}
            </aside>
            <div>
              {article.body.map((block, index) => {
                if (block.type === "h2") return <h2 key={index}>{block.text}</h2>;
                if (block.type === "ul")
                  return (
                    <ul key={index}>
                      {block.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  );
                return <p key={index}>{block.text}</p>;
              })}
              {article.sources.length > 0 ? (
                <section className="legal-section">
                  <h2>Sumber</h2>
                  <ul>
                    {article.sources.map((source) => (
                      <li key={source.url}>
                        <a href={source.url} target="_blank" rel="noopener noreferrer">{source.label}</a>
                      </li>
                    ))}
                  </ul>
                </section>
              ) : null}
            </div>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
