import { useId } from "react";

/**
 * HealingTree — minimaler SVG-Lebensbaum.
 *
 * Phase 1 (jetzt): visuelle Hülle + Dummy-State via Props.
 * Phase 2 (später): Datenbindung an `unbond-progress:*` LocalStorage und
 * Supabase `module_progress` (Blatt = badgeEarned, Blüte = 3 von 5 Zielen).
 *
 * Stilrichtung: dünne 1.5px Strokes, monochromer Stamm (graphite),
 * sage-green Blätter, mauve Blüten. Keine Farbverläufe innerhalb der
 * Blätter — Apple-Symbol-Sprache, kein Kitsch.
 */

const ALL_SLUGS = [
  "modul-01",
  "modul-02",
  "modul-03",
  "modul-04",
  "modul-05",
  "modul-06",
  "modul-07",
  "modul-08",
  "modul-09",
  "modul-10",
];

// Vorberechnete Positionen für Blätter/Blüten an den Ästen.
// Layout: 10 Module verteilt links/rechts entlang des Stamms.
const SLOTS: Record<string, { x: number; y: number; side: "L" | "R" }> = {
  "modul-01": { x: 100, y: 250, side: "L" },
  "modul-02": { x: 200, y: 240, side: "R" },
  "modul-03": { x: 90, y: 210, side: "L" },
  "modul-04": { x: 210, y: 195, side: "R" },
  "modul-05": { x: 80, y: 165, side: "L" },
  "modul-06": { x: 215, y: 145, side: "R" },
  "modul-07": { x: 95, y: 115, side: "L" },
  "modul-08": { x: 205, y: 95, side: "R" },
  "modul-09": { x: 120, y: 65, side: "L" },
  "modul-10": { x: 180, y: 50, side: "R" },
};

interface HealingTreeProps {
  /** Slugs, für die ein Blatt erscheint (Modul abgeschlossen). */
  leafSlugs?: string[];
  /** Slugs, für die zusätzlich eine Blüte erscheint (3+ Ziele erreicht). */
  bloomSlugs?: string[];
  className?: string;
}

export function HealingTree({
  leafSlugs = [],
  bloomSlugs = [],
  className,
}: HealingTreeProps) {
  const gradientId = useId();

  return (
    <div className={`relative mx-auto w-full max-w-[300px] ${className ?? ""}`}>
      <svg
        viewBox="0 0 300 320"
        className="h-auto w-full"
        aria-labelledby="healing-tree-title"
        role="img"
      >
        <title id="healing-tree-title">
          Dein Healing-Tree · {leafSlugs.length} von {ALL_SLUGS.length} Schritten gemeistert
        </title>

        <defs>
          <radialGradient id={gradientId} cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="oklch(0.78 0.04 155)" stopOpacity="1" />
            <stop offset="100%" stopColor="oklch(0.65 0.05 155)" stopOpacity="0.85" />
          </radialGradient>
        </defs>

        {/* Sanfter Bodenschatten / Erde */}
        <ellipse
          cx="150"
          cy="305"
          rx="80"
          ry="6"
          fill="oklch(0.30 0.02 250)"
          opacity="0.10"
        />

        {/* Stamm */}
        <path
          d="M 150 305 Q 148 240 150 180 Q 152 120 150 50"
          stroke="oklch(0.32 0.02 250)"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
          opacity="0.85"
        />

        {/* Wurzeln */}
        <path d="M 150 305 Q 130 308 110 312" stroke="oklch(0.32 0.02 250)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />
        <path d="M 150 305 Q 170 308 190 312" stroke="oklch(0.32 0.02 250)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.5" />

        {/* Äste links */}
        <path d="M 150 250 Q 130 248 100 250" stroke="oklch(0.32 0.02 250)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7" />
        <path d="M 150 210 Q 125 209 90 210" stroke="oklch(0.32 0.02 250)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7" />
        <path d="M 150 165 Q 120 165 80 165" stroke="oklch(0.32 0.02 250)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7" />
        <path d="M 150 115 Q 125 114 95 115" stroke="oklch(0.32 0.02 250)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7" />
        <path d="M 150 65 Q 138 64 120 65" stroke="oklch(0.32 0.02 250)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7" />

        {/* Äste rechts */}
        <path d="M 150 240 Q 175 239 200 240" stroke="oklch(0.32 0.02 250)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7" />
        <path d="M 150 195 Q 180 194 210 195" stroke="oklch(0.32 0.02 250)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7" />
        <path d="M 150 145 Q 185 144 215 145" stroke="oklch(0.32 0.02 250)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7" />
        <path d="M 150 95 Q 180 94 205 95" stroke="oklch(0.32 0.02 250)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7" />
        <path d="M 150 50 Q 165 49 180 50" stroke="oklch(0.32 0.02 250)" strokeWidth="1.5" strokeLinecap="round" fill="none" opacity="0.7" />

        {/* Knospen (Slot-Marker) — immer sichtbar, wenn nicht erreicht */}
        {ALL_SLUGS.map((slug) => {
          const slot = SLOTS[slug];
          if (!slot) return null;
          const hasLeaf = leafSlugs.includes(slug);
          if (hasLeaf) return null;
          return (
            <circle
              key={`bud-${slug}`}
              cx={slot.x}
              cy={slot.y}
              r="2"
              fill="oklch(0.32 0.02 250)"
              opacity="0.25"
            />
          );
        })}

        {/* Blätter — sage-green, mit sanftem Fade-In */}
        {ALL_SLUGS.map((slug, i) => {
          const slot = SLOTS[slug];
          if (!slot || !leafSlugs.includes(slug)) return null;
          const rotation = slot.side === "L" ? -35 : 35;
          return (
            <g
              key={`leaf-${slug}`}
              transform={`translate(${slot.x} ${slot.y}) rotate(${rotation})`}
              style={{
                animation: `leaf-grow 600ms cubic-bezier(0.4,0,0.2,1) ${i * 60}ms both`,
                transformOrigin: "center",
              }}
            >
              <ellipse cx="0" cy="0" rx="9" ry="5" fill={`url(#${gradientId})`} />
              <path
                d="M -8 0 Q 0 -1 8 0"
                stroke="oklch(0.45 0.05 155)"
                strokeWidth="0.8"
                fill="none"
                opacity="0.6"
              />
            </g>
          );
        })}

        {/* Blüten — mauve, kleine 5-Blatt-Form */}
        {ALL_SLUGS.map((slug, i) => {
          const slot = SLOTS[slug];
          if (!slot || !bloomSlugs.includes(slug)) return null;
          return (
            <g
              key={`bloom-${slug}`}
              transform={`translate(${slot.x + (slot.side === "L" ? -10 : 10)} ${slot.y - 8})`}
              style={{
                animation: `bloom-grow 700ms cubic-bezier(0.4,0,0.2,1) ${300 + i * 70}ms both`,
                transformOrigin: "center",
              }}
            >
              {[0, 72, 144, 216, 288].map((angle) => (
                <ellipse
                  key={angle}
                  cx="0"
                  cy="-3"
                  rx="2"
                  ry="3.2"
                  fill="oklch(0.65 0.08 340)"
                  opacity="0.85"
                  transform={`rotate(${angle})`}
                />
              ))}
              <circle cx="0" cy="0" r="1.6" fill="oklch(0.85 0.06 75)" />
            </g>
          );
        })}

        <style>{`
          @keyframes leaf-grow {
            from { opacity: 0; transform: scale(0.3) rotate(0deg); }
            to { opacity: 1; transform: scale(1); }
          }
          @keyframes bloom-grow {
            from { opacity: 0; transform: scale(0.2); }
            to { opacity: 1; transform: scale(1); }
          }
        `}</style>
      </svg>

      <div className="mt-3 flex items-center justify-center gap-5 text-[11px] text-graphite/60">
        <div className="flex items-center gap-1.5">
          <span
            className="inline-block h-2.5 w-3.5 rounded-full"
            style={{ background: "oklch(0.72 0.05 155)" }}
            aria-hidden
          />
          <span>{leafSlugs.length} Blätter</span>
        </div>
        <div className="flex items-center gap-1.5">
          <span
            className="inline-block h-2.5 w-2.5 rounded-full"
            style={{ background: "oklch(0.65 0.08 340)" }}
            aria-hidden
          />
          <span>{bloomSlugs.length} Blüten</span>
        </div>
      </div>
    </div>
  );
}
