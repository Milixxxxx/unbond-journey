import * as React from "react";
import { Hand } from "lucide-react";

/**
 * FlipCard · Einheitliches Diagnose-Karten-Design im gesamten Buch.
 *
 * Vorderseite: Emoji + Label + Heading + dezenter Tap-Hint (Hand-Icon, animiert).
 * Rückseite:   gleicher Header + Erklärungstext.
 *
 * Geste: Tap/Klick toggelt. Tastatur: Enter/Space.
 * Accessibility: button-Semantik, aria-pressed spiegelt Flip-Zustand.
 *
 * Visuelle Konsistenz: 5px-Topborder in der Akzentfarbe (wie Vorgänger DiagnosisCard),
 * cream/white Glass-Surface, gleiche Typo-Skala.
 */
export function FlipCard({
  emoji,
  color,
  label,
  heading,
  front,
  back,
}: {
  emoji: string;
  /** CSS color string, z.B. "var(--color-bordeaux)" */
  color: string;
  label: string;
  heading: string;
  /** Optionaler Teaser-Text auf der Vorderseite (1 Zeile). */
  front?: string;
  /** Erklärtext auf der Rückseite. */
  back: string;
}) {
  const [flipped, setFlipped] = React.useState(false);

  return (
    <button
      type="button"
      onClick={() => setFlipped((v) => !v)}
      aria-pressed={flipped}
      aria-label={`${heading} – ${flipped ? "Zurück" : "Mehr erfahren"}`}
      className="flip-card-wrap group relative h-full min-h-[180px] w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bordeaux/40 focus-visible:ring-offset-2 focus-visible:ring-offset-cream rounded-2xl"
    >
      <div
        className={`flip-card-inner ${flipped ? "is-flipped" : ""}`}
        style={{ minHeight: "inherit" }}
      >
        {/* Front */}
        <div
          className="flip-card-face rounded-2xl bg-white/85 p-4 shadow-soft"
          style={{ borderTop: `5px solid ${color}` }}
        >
          <div className="text-2xl">{emoji}</div>
          <p
            className="mt-1 font-display text-xs font-bold uppercase tracking-wider"
            style={{ color }}
          >
            {label}
          </p>
          <p className="mt-1 font-display text-sm font-bold text-bordeaux">
            {heading}
          </p>
          {front ? (
            <p className="mt-1.5 text-xs leading-snug text-graphite/75">
              {front}
            </p>
          ) : null}

          {/* Tap-Hint */}
          <div
            className="absolute bottom-2.5 right-3 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.14em]"
            style={{ color }}
          >
            <span className="opacity-70 group-hover:opacity-100 transition-opacity">
              Tippen
            </span>
            <span
              className="flip-tap-hint inline-flex h-7 w-7 items-center justify-center rounded-full bg-white/80 shadow-soft"
              style={{ color }}
            >
              <Hand className="h-3.5 w-3.5" />
            </span>
          </div>
        </div>

        {/* Back */}
        <div
          className="flip-card-face flip-card-back rounded-2xl bg-white/95 p-4 shadow-soft"
          style={{ borderTop: `5px solid ${color}` }}
        >
          <div className="flex items-start justify-between gap-2">
            <div>
              <p
                className="font-display text-xs font-bold uppercase tracking-wider"
                style={{ color }}
              >
                {label}
              </p>
              <p className="mt-1 font-display text-sm font-bold text-bordeaux">
                {heading}
              </p>
            </div>
            <span className="text-xl leading-none opacity-60">{emoji}</span>
          </div>
          <p className="mt-2 text-xs leading-relaxed text-graphite/85">
            {back}
          </p>
          <p
            className="mt-3 text-[10px] font-semibold uppercase tracking-[0.14em] opacity-60"
            style={{ color }}
          >
            ← Zurück tippen
          </p>
        </div>
      </div>
    </button>
  );
}
