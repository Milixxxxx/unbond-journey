import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

/**
 * WhatIsNoContact · 6-Karten-Karussell aus SCHRITT_4_FINAL.html.
 * Reframet No Contact von emotional → medizinisch.
 * UX: swipebar auf Mobile, Pfeil-Buttons + Dot-Indikator auf Desktop.
 */
type Card = {
  emoji: string;
  title: string;
  text: string;
  tone?: "info" | "warn";
};

const cards: Card[] = [
  {
    emoji: "💊",
    title: "Die medizinische Notwendigkeit",
    text: "No Contact ist keine Bestrafung und keine Taktik. Es ist die einzige neurobiologisch wirksame Methode, den Dopamin-Loop zu durchbrechen. Jede Nachricht, jeder Profil-Blick setzt die Entzugsuhr auf null.",
  },
  {
    emoji: "🗓️",
    title: "Die 90-Tage-Regel",
    text: "Der Hippocampus braucht mindestens 90 Tage ohne Kontaktreize, um neue neuronale Bahnen zu bauen. Nicht 30. Nicht 60. Neunzig. Das ist die Zeit, die Neuroplastizität braucht — keine willkürliche Zahl.",
  },
  {
    emoji: "🦴",
    title: "Der Gipsverband-Vergleich",
    text: "Stell dir vor, dein Arm ist gebrochen — und du arbeitest weiter mit ihm, weil es sich manchmal okay anfühlt. Genau das ist Kontakt nach toxischer Bindung. No Contact ist der Gipsverband für gebrochene Synapsen.",
  },
  {
    emoji: "👁️",
    title: "Warum „nur schauen" nicht reicht",
    text: "Passiver Konsum — Stories, Profile, alte Fotos — aktiviert dieselben Dopaminareale wie direkter Kontakt. Dein Gehirn unterscheidet nicht zwischen „ich schreibe ihr" und „ich sehe ihr Foto". Beides ist ein Reset.",
    tone: "warn",
  },
  {
    emoji: "🌊",
    title: "Urge Surfing — die Welle reiten",
    text: "Ein Kontaktimpuls dauert physiologisch maximal 10–15 Minuten, wenn du ihm nicht nachgibst. Er steigt, kippt, fällt. Wer die Welle beobachtet statt mit ihr handelt, baut jedes Mal die Spur der Selbstwirksamkeit.",
  },
  {
    emoji: "💛",
    title: "Was No Contact NICHT ist",
    text: "Kein Beweis, dass du sie nicht liebst. Kein Zeichen von Kälte. Kein Versprechen, sie für immer zu löschen. Es ist die bewusste Entscheidung, deinem Nervensystem Zeit zu geben — ohne externen Kontaktstimulus.",
  },
];

export function WhatIsNoContact() {
  const [i, setI] = useState(0);
  const c = cards[i];
  const next = () => setI((p) => (p + 1) % cards.length);
  const prev = () => setI((p) => (p - 1 + cards.length) % cards.length);

  // Touch-Swipe
  let startX = 0;
  const onTouchStart = (e: React.TouchEvent) => {
    startX = e.touches[0].clientX;
  };
  const onTouchEnd = (e: React.TouchEvent) => {
    const diff = e.changedTouches[0].clientX - startX;
    if (Math.abs(diff) < 40) return;
    diff > 0 ? prev() : next();
  };

  const isWarn = c.tone === "warn";
  const accentColor = isWarn ? "var(--color-terracotta)" : "var(--color-mauve)";

  return (
    <section
      className="relative overflow-hidden rounded-2xl bg-white/80 p-5 shadow-soft sm:p-6"
      style={{ borderLeft: `5px solid ${accentColor}` }}
      aria-roledescription="carousel"
      aria-label="Was No Contact ist — sechs Perspektiven"
    >
      <div className="flex items-center justify-between">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-mauve">
          Was No Contact ist · 6 Perspektiven
        </p>
        <span className="text-[11px] font-semibold text-graphite/60 tabular-nums">
          {i + 1} / {cards.length}
        </span>
      </div>

      <div
        className="mt-4 min-h-[180px] animate-fade-in"
        key={i}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <div className="flex items-start gap-4">
          <div
            className="grid h-14 w-14 flex-shrink-0 place-items-center rounded-2xl text-3xl shadow-soft"
            style={{ background: `color-mix(in oklab, ${accentColor} 15%, white)` }}
            aria-hidden
          >
            {c.emoji}
          </div>
          <div className="min-w-0">
            <h3 className="font-display text-base font-bold text-bordeaux sm:text-lg">
              {c.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-graphite/85">{c.text}</p>
          </div>
        </div>
      </div>

      {/* Steuerung */}
      <div className="mt-5 flex items-center justify-between">
        <button
          type="button"
          onClick={prev}
          className="grid h-9 w-9 place-items-center rounded-full border-2 border-mauve/30 bg-white text-bordeaux transition hover:border-mauve active:scale-95"
          aria-label="Vorherige Karte"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>

        <div className="flex items-center gap-1.5" role="tablist">
          {cards.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setI(idx)}
              className={`h-1.5 rounded-full transition-all ${
                idx === i ? "w-6 bg-bordeaux" : "w-1.5 bg-mauve/30 hover:bg-mauve/60"
              }`}
              aria-label={`Karte ${idx + 1}`}
              aria-selected={idx === i}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={next}
          className="grid h-9 w-9 place-items-center rounded-full border-2 border-mauve/30 bg-white text-bordeaux transition hover:border-mauve active:scale-95"
          aria-label="Nächste Karte"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
