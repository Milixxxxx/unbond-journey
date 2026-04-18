import { useModuleProgress } from "@/hooks/use-module-progress";
import { ExerciseFrame, type ExerciseAccent } from "./exercise-frame";

export type ReflectionStep = {
  key: string;
  label: string;
  placeholder?: string;
  rows?: number;
};

/**
 * Variant B · Geführtes 3-Schritt-Reflexionsfeld.
 * Jede Zeile hat einen kleinen Stufen-Indikator (1 · 2 · 3) – führt sanft durch eine Übung.
 */
export function Reflection3Step({
  slug,
  title,
  subtitle,
  meta,
  accent = "terracotta",
  steps,
}: {
  slug: string;
  title: string;
  subtitle?: string;
  meta?: string;
  accent?: ExerciseAccent;
  steps: ReflectionStep[];
}) {
  const { exerciseState, setExercise, loaded } = useModuleProgress(slug);
  if (!loaded) return null;

  return (
    <ExerciseFrame title={title} subtitle={subtitle} meta={meta} accent={accent}>
      <ol className="space-y-4">
        {steps.map((step, i) => (
          <li key={step.key} className="grid gap-2 sm:grid-cols-[2.25rem_1fr] sm:gap-3">
            <div className="hidden h-9 w-9 place-items-center rounded-full bg-bordeaux/10 font-display text-sm font-bold text-bordeaux sm:grid">
              {i + 1}
            </div>
            <label className="block">
              <span className="mb-1.5 block text-sm font-semibold text-bordeaux">
                <span className="mr-1.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-bordeaux/10 text-[10px] font-bold sm:hidden">
                  {i + 1}
                </span>
                {step.label}
              </span>
              <textarea
                value={exerciseState[step.key] ?? ""}
                onChange={(e) => setExercise(step.key, e.target.value)}
                placeholder={step.placeholder}
                rows={step.rows ?? 2}
                className="w-full resize-none rounded-lg border-2 border-sage/30 bg-white/85 p-3 text-sm leading-relaxed outline-none transition focus:border-sage"
              />
            </label>
          </li>
        ))}
      </ol>
    </ExerciseFrame>
  );
}
