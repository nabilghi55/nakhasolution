"use client";

import { useLocale, useTranslations } from "next-intl";
import { useMemo, useState } from "react";
import type { FormEvent } from "react";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";

interface Score { home: string; away: string; }
interface Match { id: number; home: string; away: string; result: [number, number]; }

const matches: Match[] = [
  { id: 1, home: "Tim A", away: "Tim B", result: [2, 1] },
  { id: 2, home: "Tim C", away: "Tim D", result: [1, 1] },
  { id: 3, home: "Tim E", away: "Tim F", result: [0, 2] },
];

const emptyScores = (): Record<number, Score> => ({
  1: { home: "", away: "" },
  2: { home: "", away: "" },
  3: { home: "", away: "" },
});

export default function TebakSkorDemo() {
  const isEnglish = useLocale() === "en";
  const infoT = useTranslations("ContactInfo");
  const [step, setStep] = useState<0 | 1 | 2 | 3>(0);
  const [scores, setScores] = useState<Record<number, Score>>(emptyScores);
  const [username, setUsername] = useState("");
  const [phone, setPhone] = useState("");
  const [error, setError] = useState("");

  const points = useMemo(() => matches.reduce((total, match) => {
    const prediction = scores[match.id];
    const home = Number(prediction.home);
    const away = Number(prediction.away);
    if (home === match.result[0] && away === match.result[1]) return total + 3;
    if (Math.sign(home - away) === Math.sign(match.result[0] - match.result[1])) return total + 1;
    return total;
  }, 0), [scores]);

  const updateScore = (id: number, side: "home" | "away", value: string) => {
    setScores((current) => ({ ...current, [id]: { ...current[id], [side]: value.replace(/\D/g, "").slice(0, 2) } }));
  };

  const submitScores = () => {
    if (matches.some((match) => !scores[match.id].home || !scores[match.id].away)) {
      setError(isEnglish ? "Enter a score for every sample match." : "Isi skor untuk semua pertandingan contoh.");
      return;
    }
    setError("");
    setStep(1);
  };

  const submitParticipant = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!username.trim() || !phone.trim()) {
      setError(isEnglish ? "Enter the sample participant details first." : "Isi data peserta contoh terlebih dahulu.");
      return;
    }
    setError("");
    setStep(2);
  };

  const reset = () => {
    setStep(0);
    setScores(emptyScores());
    setUsername("");
    setPhone("");
    setError("");
  };

  const whatsapp = buildWhatsAppLink(infoT("phone"), isEnglish
    ? "Hello Nakha Solution, I want to discuss a score prediction campaign."
    : "Halo Nakha Solution, saya ingin membahas campaign tebak skor.");

  return (
    <section className="demo-frame" aria-labelledby="score-demo-title">
      <div className="demo-frame-header">
        <span>{isEnglish ? "LOCAL SIMULATION / SAMPLE MATCHES" : "SIMULASI LOKAL / PERTANDINGAN CONTOH"}</span>
        <strong>STEP {step + 1} / 4</strong>
      </div>
      <div className="demo-stage">
        {step === 0 && (
          <div className="demo-panel">
            <h2 id="score-demo-title">{isEnglish ? "Enter three sample predictions." : "Isi tiga prediksi contoh."}</h2>
            <p>{isEnglish ? "The points below are calculated in your browser from the sample results." : "Poin di bawah dihitung di browser dari hasil pertandingan contoh."}</p>
            <div className="score-list">
              {matches.map((match) => (
                <div className="score-row" key={match.id}>
                  <span className="score-team">{match.home}</span>
                  <div className="score-inputs">
                    <input className="score-input" aria-label={`${match.home} score`} inputMode="numeric" value={scores[match.id].home} onChange={(event) => updateScore(match.id, "home", event.target.value)} />
                    <span>:</span>
                    <input className="score-input" aria-label={`${match.away} score`} inputMode="numeric" value={scores[match.id].away} onChange={(event) => updateScore(match.id, "away", event.target.value)} />
                  </div>
                  <span className="score-team">{match.away}</span>
                </div>
              ))}
            </div>
            {error && <p className="demo-error" role="alert">{error}</p>}
            <div className="demo-control-row"><button className="demo-button" type="button" onClick={submitScores}>{isEnglish ? "Continue" : "Lanjutkan"}</button></div>
          </div>
        )}

        {step === 1 && (
          <div className="demo-panel">
            <h2>{isEnglish ? "Add sample participant details." : "Tambahkan data peserta contoh."}</h2>
            <p>{isEnglish ? "This form only advances the local simulation. It does not send a lead." : "Form ini hanya melanjutkan simulasi lokal. Data tidak dikirim sebagai lead."}</p>
            <form className="demo-form" onSubmit={submitParticipant}>
              <div className="demo-field"><label htmlFor="demo-username">{isEnglish ? "Instagram username" : "Username Instagram"}</label><input id="demo-username" placeholder="@username" value={username} onChange={(event) => setUsername(event.target.value)} /></div>
              <div className="demo-field"><label htmlFor="demo-phone">{isEnglish ? "WhatsApp number" : "Nomor WhatsApp"}</label><input id="demo-phone" placeholder="08xxxxxxxxxx" inputMode="tel" value={phone} onChange={(event) => setPhone(event.target.value)} /></div>
              {error && <p className="demo-error" role="alert">{error}</p>}
              <div className="demo-control-row"><button className="demo-button secondary" type="button" onClick={() => setStep(0)}>{isEnglish ? "Back" : "Kembali"}</button><button className="demo-button" type="submit">{isEnglish ? "Calculate sample result" : "Hitung hasil contoh"}</button></div>
            </form>
          </div>
        )}

        {step === 2 && (
          <div className="demo-panel">
            <h2>{isEnglish ? "Sample result is ready." : "Hasil contoh siap."}</h2>
            <p>{isEnglish ? "The system can now show the points it calculated from the three sample matches." : "Sistem sekarang menampilkan poin dari tiga pertandingan contoh."}</p>
            <div className="demo-result"><span className="demo-result-label">{isEnglish ? "Calculated sample points" : "Poin contoh yang dihitung"}</span><strong>{points}</strong></div>
            <div className="demo-control-row"><button className="demo-button" type="button" onClick={() => setStep(3)}>{isEnglish ? "Review result" : "Lihat hasil"}</button><button className="demo-button secondary" type="button" onClick={reset}>{isEnglish ? "Start over" : "Mulai lagi"}</button></div>
          </div>
        )}

        {step === 3 && (
          <div className="demo-panel">
            <h2>{isEnglish ? "A campaign flow, ready to discuss." : "Alur campaign siap dibahas."}</h2>
            <p>{isEnglish ? "The demo is complete. Real match data, participant storage, and campaign rules would be defined with your team." : "Demo selesai. Data pertandingan, penyimpanan peserta, dan aturan campaign akan ditentukan bersama tim Anda."}</p>
            <div className="demo-data-grid">
              <div className="demo-data-cell">{isEnglish ? "PLAYER" : "PESERTA"}<br />{username}</div>
              <div className="demo-data-cell">{isEnglish ? "POINTS" : "POIN"}<br />{points}</div>
              <div className="demo-data-cell">{isEnglish ? "MATCHES" : "PERTANDINGAN"}<br />{matches.length}</div>
              <div className="demo-data-cell">{isEnglish ? "MODE" : "MODE"}<br />SAMPLE</div>
            </div>
            <div className="demo-control-row"><button className="demo-button secondary" type="button" onClick={reset}>{isEnglish ? "Run again" : "Ulangi"}</button><a className="demo-button" href={whatsapp} target="_blank" rel="noopener noreferrer"><WhatsAppIcon size={16} />{isEnglish ? "Discuss real campaign" : "Bahas campaign nyata"}</a></div>
          </div>
        )}
      </div>
      <p className="demo-note">{isEnglish ? "No participant data, match result, leaderboard, or campaign is connected to this local demo." : "Tidak ada data peserta, hasil pertandingan, leaderboard, atau campaign yang terhubung ke demo lokal ini."}</p>
    </section>
  );
}
