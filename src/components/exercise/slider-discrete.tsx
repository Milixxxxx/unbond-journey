import { useModuleProgress } from "@/hooks/use-module-progress";
import { ExerciseFrame, type ExerciseAccent } from "./exercise-frame";

/**
 * Variant B · Diskrete Skala 0–10 als 11-Step-Grid mit klarer Auswahl.
 * Persistiert numerischen Wert unter `exerciseState[storageKey]`.
 */
export function SliderDiscrete({
  slug,
  storageKey,
  title,
  subtitle,
  meta,
  accent = "terracotta",
  min = 0,
  max = 10,
  defaultValue,
  leftLabel = "0",
  rightLabel = "10",
  scaleHint,
}: {
  slug: string;
  storageKey: string;
  title: string;
  subtitle?: string;
  meta?: string;
  accent?: ExerciseAccent;
  min?: number;
  max?: number;
  defaultValue?: number;
  leftLabel?: string;
  rightLabel?: string;
  scaleHint?: string;
}) {
  const { exerciseState, setExercise, loaded } = useModuleProgress(slug);
  if (!loaded) return null;

  const cur: number | undefined = exerciseState[storageKey] ?? defaultValue;
  const steps = Array.from({ length: max - min + 1 }, (_, i) => min + i);

  return (
    <ExerciseFrame title={title} subtitle={subtitle} meta={meta} accent={accent}>
      <div className="flex items-baseline justify-between text-xs text-graphite/60">
        <span>{leftLabel}</span>
        <span className="font-display text-3xl font-extrabold text-bordeaux tabular-nums">
          {cur ?? "–"}
        </span>
        <span>{rightLabel}</span>
      </div>
      <div className="grid grid-cols-11 gap-1">
        {steps.map((v) => {
          const on = cur === v;
          return (
            <button
              key={v}
              type="button"
              onClick={() => setExercise(storageKey, v)}
              className={`grid h-10 place-items-center rounded-md border-2 text-xs font-semibold transition ${
                on
                  ? "border-bordeaux bg-bordeaux text-white shadow-soft"
                  : "border-sage/30 bg-white/85 text-graphite/70 hover:border-sage"
              }`}
              aria-pressed={on}
            >
              {v}
            </button>
          );
        })}
      </div>
      {scaleHint && <p className="text-[11px] text-graphite/55">{scaleHint}</p>}
    </ExerciseFrame>
  );
}
