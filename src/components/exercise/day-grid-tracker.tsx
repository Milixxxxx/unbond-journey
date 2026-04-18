import { useModuleProgress } from "@/hooks/use-module-progress";
import { ExerciseFrame, type ExerciseAccent } from "./exercise-frame";

/**
 * Variant B · Long-term Day-Grid (z.B. 90 Tage No-Contact).
 * Tippen togglet einen Tag. Persistiert als Set unter `exerciseState[storageKey]` (Index-Liste).
 */
export function DayGridTracker({
  slug,
  storageKey,
  title,
  subtitle,
  meta,
  accent = "sage",
  days = 90,
}: {
  slug: string;
  storageKey: string;
  title: string;
  subtitle?: string;
  meta?: string;
  accent?: ExerciseAccent;
  days?: number;
}) {
  const { exerciseState, setExercise, loaded } = useModuleProgress(slug);
  if (!loaded) return null;

  const filled: number[] = exerciseState[storageKey] ?? [];
  const filledSet = new Set(filled);
  const toggle = (d: number) => {
    if (filledSet.has(d)) filledSet.delete(d);
    else filledSet.add(d);
    setExercise(storageKey, [...filledSet].sort((a, b) => a - b));
  };

  const list = Array.from({ length: days }, (_, i) => i + 1);
  const done = filled.length;
  const pct = Math.round((done / days) * 100);

  return (
    <ExerciseFrame title={title} subtitle={subtitle} meta={meta} accent={accent}>
      <div className="flex items-baseline justify-between">
        <p className="text-sm font-semibold text-bordeaux">
          <span className="font-display text-2xl">{done}</span> / {days} Tage
        </p>
        <p className="text-xs font-medium text-graphite/60">{pct}%</p>
      </div>
      <div className="grid grid-cols-[repeat(15,minmax(0,1fr))] gap-1">
        {list.map((d) => {
          const on = filledSet.has(d);
          return (
            <button
              key={d}
              type="button"
              onClick={() => toggle(d)}
              title={`Tag ${d}`}
              className={`aspect-square rounded transition ${
                on ? "bg-sage shadow-glass" : "bg-sage/15 hover:bg-sage/35"
              }`}
              aria-label={`Tag ${d} ${on ? "abgeschlossen" : "offen"}`}
            />
          );
        })}
      </div>
    </ExerciseFrame>
  );
}
