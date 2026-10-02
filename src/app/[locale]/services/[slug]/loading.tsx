export default function ServiceDetailLoading() {
  return (
    <main className="detail-page detail-main" aria-busy="true" aria-live="polite">
      <section className="detail-section">
        <div className="detail-shell detail-loading">
          <p className="detail-eyebrow">NAKHA SOLUTION / LOADING</p>
          <h1>Menyiapkan detail layanan.</h1>
          <p>Memuat struktur layanan dan informasi pendukung.</p>
        </div>
      </section>
    </main>
  );
}
