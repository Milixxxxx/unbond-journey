import { useModuleProgress } from "@/hooks/use-module-progress";
import { ExerciseFrame, type ExerciseAccent } from "./exercise-frame";

export type ReflectionStep = {
  key: string;
  label: string;
  placeholder?: string;
  rows?: number;
};

/**
 * Variant B · Geführtes 3-Schritt-Reflexionsfeld — Apple-like / Calm Luxury.
 * Nummern-Indikatoren als kleine, weiche Kreise OHNE durchgehende Linie.
 * Eingabefelder als zarte Glas-Inputs mit subtilem Focus-Ring.
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
      <ol className="space-y-5">
        {steps.map((step, i) => (
          <li key={step.key} className="grid gap-3 sm:grid-cols-[2.5rem_1fr]">
            <div className="hidden sm:block">
              <div
                className="grid h-9 w-9 place-items-center rounded-full font-display text-sm font-semibold text-bordeaux/85"
                style={{
                  background: "color-mix(in oklab, var(--color-bordeaux) 8%, white)",
                  border: "1px solid color-mix(in oklab, var(--color-bordeaux) 18%, transparent)",
                  boxShadow: "inset 0 1px 0 oklch(1 0 0 / 0.7)",
                }}
              >
                {i + 1}
              </div>
            </div>
            <label className="block">
              <span className="mb-2 block text-sm font-medium text-bordeaux/90">
                <span
                  className="mr-2 inline-flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-bold sm:hidden"
                  style={{
                    background: "color-mix(in oklab, var(--color-bordeaux) 8%, white)",
                    border: "1px solid color-mix(in oklab, var(--color-bordeaux) 18%, transparent)",
                    color: "var(--color-bordeaux)",
                  }}
                >
                  {i + 1}
                </span>
                {step.label}
              </span>
              <textarea
                value={exerciseState[step.key] ?? ""}
                onChange={(e) => setExercise(step.key, e.target.value)}
                placeholder={step.placeholder}
                rows={step.rows ?? 2}
                className="w-full resize-none rounded-2xl border border-graphite/10 bg-white/80 p-3.5 text-sm leading-relaxed text-graphite shadow-[inset_0_1px_0_oklch(1_0_0/0.7)] outline-none transition-all duration-300 placeholder:text-graphite/40 focus:border-sage/50 focus:bg-white focus:shadow-[0_0_0_4px_color-mix(in_oklab,var(--color-sage)_18%,transparent)]"
              />
            </label>
          </li>
        ))}
      </ol>
    </ExerciseFrame>
  );
}
