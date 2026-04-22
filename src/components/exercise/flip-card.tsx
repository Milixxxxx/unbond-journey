import * as React from "react";
import { Hand, type LucideIcon } from "lucide-react";

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
  icon: Icon,
  color,
  label,
  heading,
  front,
  back,
}: {
  /** @deprecated — bitte `icon` (Lucide-Komponente) verwenden statt Emoji. */
  emoji?: string;
  /** Lucide-Icon-Komponente, z. B. `Bomb`. Wird bevorzugt vor `emoji`. */
  icon?: LucideIcon;
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
      className="flip-card-wrap group relative w-full text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-bordeaux/40 focus-visible:ring-offset-2 focus-visible:ring-offset-cream rounded-2xl"
      style={{ aspectRatio: "1 / 1" }}
    >
      <div className={`flip-card-inner ${flipped ? "is-flipped" : ""} h-full`}>
        {/* Front */}
        <div
          className="flip-card-face flex h-full flex-col overflow-hidden rounded-2xl bg-white/85 p-2.5 shadow-soft"
          style={{ borderTop: `4px solid ${color}` }}
        >
          <div className="flex items-start justify-between gap-1">
            <span className="text-lg leading-none">{emoji}</span>
            <p
              className="font-display text-[9px] font-bold uppercase tracking-wider"
              style={{ color }}
            >
              {label}
            </p>
          </div>
          <p className="mt-1 font-display text-[12px] font-bold leading-tight text-bordeaux line-clamp-2">
            {heading}
          </p>
          {front ? (
            <p className="mt-1 text-[10.5px] leading-snug text-graphite/70 line-clamp-3">
              {front}
            </p>
          ) : null}

          {/* Tap-Hint — kompakt unten */}
          <div className="mt-auto flex items-center justify-end pt-1">
            <span
              className="flip-tap-hint inline-flex h-5 w-5 items-center justify-center rounded-full bg-white/85 shadow-soft"
              style={{ color }}
            >
              <Hand className="h-2.5 w-2.5" />
            </span>
          </div>
        </div>

        {/* Back */}
        <div
          className="flip-card-face flip-card-back flex h-full flex-col overflow-hidden rounded-2xl bg-white/95 p-2.5 shadow-soft"
          style={{ borderTop: `4px solid ${color}` }}
        >
          <div className="flex items-start justify-between gap-1">
            <p
              className="font-display text-[9px] font-bold uppercase tracking-wider"
              style={{ color }}
            >
              {label}
            </p>
            <span className="text-sm leading-none opacity-60">{emoji}</span>
          </div>
          <p className="mt-1 font-display text-[11px] font-bold leading-tight text-bordeaux line-clamp-2">
            {heading}
          </p>
          <p className="mt-1 text-[10.5px] leading-snug text-graphite/85 line-clamp-[7]">
            {back}
          </p>
          <p
            className="mt-auto pt-1 text-[8.5px] font-semibold uppercase tracking-[0.14em] opacity-60"
            style={{ color }}
          >
            ← Zurück
          </p>
        </div>
      </div>
    </button>
  );
}
