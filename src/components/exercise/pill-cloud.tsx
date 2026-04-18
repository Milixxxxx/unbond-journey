import { Check } from "lucide-react";
import { useModuleProgress } from "@/hooks/use-module-progress";
import { ExerciseFrame, type ExerciseAccent } from "./exercise-frame";

export type Pill = { id: string; label: string };

/**
 * Variant B · Interaktive Pill-Cloud (Mehrfachauswahl).
 * Klar abgegrenzter Klick-Status, mit Live-Counter unter der Wolke.
 * Persistiert als boolean-Map unter `exerciseState[storageKey]`.
 */
export function PillCloud({
  slug,
  storageKey,
  title,
  subtitle,
  meta,
  accent = "terracotta",
  pills,
  counterLabel = "ausgewählt",
  emptyHint,
}: {
  slug: string;
  storageKey: string;
  title: string;
  subtitle?: string;
  meta?: string;
  accent?: ExerciseAccent;
  pills: Pill[];
  counterLabel?: string;
  emptyHint?: string;
}) {
  const { exerciseState, setExercise, loaded } = useModuleProgress(slug);
  if (!loaded) return null;

  const selected: Record<string, boolean> = exerciseState[storageKey] ?? {};
  const toggle = (id: string) => {
    setExercise(storageKey, { ...selected, [id]: !selected[id] });
  };
  const count = Object.values(selected).filter(Boolean).length;

  return (
    <ExerciseFrame title={title} subtitle={subtitle} meta={meta} accent={accent}>
      <div className="flex flex-wrap gap-2">
        {pills.map((p) => {
          const on = !!selected[p.id];
          return (
            <button
              key={p.id}
              type="button"
              onClick={() => toggle(p.id)}
              className={`group inline-flex items-center gap-1.5 rounded-full border-2 px-3 py-1.5 text-xs font-medium transition active:scale-[0.97] sm:text-sm ${
                on
                  ? "border-bordeaux bg-bordeaux text-white shadow-soft"
                  : "border-sage/40 bg-white/85 text-graphite hover:border-sage hover:bg-sage/10"
              }`}
              aria-pressed={on}
            >
              {on && <Check className="h-3.5 w-3.5" />}
              {p.label}
            </button>
          );
        })}
      </div>
      <div className="flex items-center justify-between rounded-lg bg-white/55 px-3 py-2 text-xs">
        <span className="font-medium text-graphite/80">
          <span className="font-display text-base font-bold text-bordeaux">{count}</span>
          {" / "}
          {pills.length} {counterLabel}
        </span>
        {count === 0 && emptyHint && <span className="text-graphite/55">{emptyHint}</span>}
      </div>
    </ExerciseFrame>
  );
}
