import { Save } from "lucide-react";

/**
 * Standardisierter Übungs-Container für alle interaktiven Elemente.
 * Linker Akzent-Streifen (sage = somatic/general, mauve = ACT, terracotta = practice),
 * gerundete Ecken, zarte Glassmorphism-Fläche und Auto-Save-Pille rechts oben.
 */
export type ExerciseAccent = "sage" | "mauve" | "terracotta" | "bordeaux";

const accentMap: Record<ExerciseAccent, string> = {
  sage: "var(--color-sage)",
  mauve: "var(--color-mauve)",
  terracotta: "var(--color-terracotta)",
  bordeaux: "var(--color-bordeaux)",
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
  meta?: string; // z.B. "🧠 Kognitive Defusion · ⏱ 20 Min"
  accent?: ExerciseAccent;
  showSave?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div
      className="relative overflow-hidden rounded-2xl bg-white/75 p-5 shadow-soft backdrop-blur-sm sm:p-6"
      style={{ borderLeft: `5px solid ${accentMap[accent]}` }}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div className="min-w-0">
          <h3 className="font-display text-base font-bold text-bordeaux sm:text-lg">{title}</h3>
          {subtitle && <p className="mt-1 text-sm text-graphite/80">{subtitle}</p>}
          {meta && (
            <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-mauve/85">
              {meta}
            </p>
          )}
        </div>
        {showSave && (
          <span className="inline-flex flex-shrink-0 items-center gap-1.5 rounded-full bg-sage/15 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-sage">
            <Save className="h-3 w-3" />
            Auto-Save
          </span>
        )}
      </div>
      <div className="mt-4 space-y-4">{children}</div>
    </div>
  );
}
