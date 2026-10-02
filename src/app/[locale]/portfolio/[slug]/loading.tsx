export default function PortfolioDetailLoading() {
  return (
    <main className="detail-page detail-main" aria-busy="true" aria-live="polite">
      <section className="detail-section">
        <div className="detail-shell detail-loading">
          <p className="detail-eyebrow">NAKHA SOLUTION / LOADING</p>
          <h1>Menyiapkan rincian proyek.</h1>
          <p>Memuat cerita, referensi, dan konteks proyek.</p>
        </div>
      </section>
    </main>
  );
}
