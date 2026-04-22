import { Save } from "lucide-react";

/**
 * Standardisierter Übungs-Container — Apple-like / Calm Luxury.
 * KEIN linker Akzentstreifen mehr (wirkt altmodisch), stattdessen:
 *  - sehr zarte gerundete Glassmorphism-Fläche
 *  - dezente farbige Aura (akzent-getönter Schatten + 1px Hairline)
 *  - kleine Akzent-Pille oben links als "Modus"-Marker (statt Balken)
 */
export type ExerciseAccent = "sage" | "mauve" | "terracotta" | "bordeaux";

const accentMap: Record<ExerciseAccent, { color: string; label: string }> = {
  sage: { color: "var(--color-sage)", label: "Somatic" },
  mauve: { color: "var(--color-mauve)", label: "ACT" },
  terracotta: { color: "var(--color-terracotta)", label: "Practice" },
  bordeaux: { color: "var(--color-bordeaux)", label: "Reflexion" },
};

export function ExerciseFrame({
  title,
  subtitle,
  meta,
  accent = "terracotta",
  showSave = true,
  children,
}: {
  title: string;
  subtitle?: string;
  meta?: string;
  accent?: ExerciseAccent;
  showSave?: boolean;
  children: React.ReactNode;
}) {
  const a = accentMap[accent];
  return (
    <div
      className="relative overflow-hidden rounded-3xl bg-white/70 p-5 backdrop-blur-xl sm:p-7"
      style={{
        border: `1px solid color-mix(in oklab, ${a.color} 22%, transparent)`,
        boxShadow: `
          0 1px 0 oklch(1 0 0 / 0.6) inset,
          0 18px 50px -28px color-mix(in oklab, ${a.color} 35%, transparent),
          0 8px 24px -16px oklch(0.28 0.025 30 / 0.18)
        `,
      }}
    >
      {/* Sehr dezente Akzent-Aura oben links — ersetzt den alten Balken */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-16 -top-16 h-40 w-40 rounded-full opacity-60 blur-2xl"
        style={{ background: `radial-gradient(closest-side, ${a.color}, transparent 70%)` }}
      />

      <div className="relative flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <span
            className="mb-2 inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-[0.14em]"
            style={{
              color: a.color,
              background: `color-mix(in oklab, ${a.color} 12%, white)`,
              border: `1px solid color-mix(in oklab, ${a.color} 25%, transparent)`,
            }}
          >
            <span
              className="h-1.5 w-1.5 rounded-full"
              style={{ background: a.color }}
            />
            {a.label}
          </span>
          <h3 className="font-display text-base font-semibold tracking-tight text-bordeaux sm:text-lg">
            {title}
          </h3>
          {subtitle && (
            <p className="mt-1 text-sm leading-relaxed text-graphite/75">{subtitle}</p>
          )}
          {meta && (
            <p className="mt-1.5 text-[11px] font-medium uppercase tracking-wider text-mauve/85">
              {meta}
            </p>
          )}
        </div>
        {showSave && (
          <span className="inline-flex flex-shrink-0 items-center gap-1.5 rounded-full bg-sage/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-sage/90">
            <Save className="h-3 w-3" />
            Auto-Save
          </span>
        )}
      </div>
      <div className="relative mt-5 space-y-4">{children}</div>
    </div>
  );
}
