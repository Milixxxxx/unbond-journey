import { useModuleProgress } from "@/hooks/use-module-progress";

export function ReflectionField({
  slug,
  exerciseKey,
  label,
  placeholder,
  rows = 3,
}: {
  slug: string;
  exerciseKey: string;
  label: string;
  placeholder?: string;
  rows?: number;
}) {
  const { exerciseState, setExercise, loaded } = useModuleProgress(slug);
  if (!loaded) return null;

  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-bordeaux">{label}</span>
      <textarea
        value={exerciseState[exerciseKey] ?? ""}
        onChange={(e) => setExercise(exerciseKey, e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className="w-full resize-none rounded-lg border-2 border-sage/40 bg-white/85 p-3 text-sm leading-relaxed outline-none transition focus:border-sage"
      />
    </label>
  );
}

export function ReflectionInput({
  slug,
  exerciseKey,
  label,
  placeholder,
}: {
  slug: string;
  exerciseKey: string;
  label: string;
  placeholder?: string;
}) {
  const { exerciseState, setExercise, loaded } = useModuleProgress(slug);
  if (!loaded) return null;

  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-semibold text-bordeaux">{label}</span>
      <input
        type="text"
        value={exerciseState[exerciseKey] ?? ""}
        onChange={(e) => setExercise(exerciseKey, e.target.value)}
        placeholder={placeholder}
        className="w-full rounded-lg border-2 border-sage/40 bg-white/85 p-3 text-sm outline-none transition focus:border-sage"
      />
    </label>
  );
}

export function SliderField({
  slug,
  exerciseKey,
  label,
  min = 0,
  max = 10,
  defaultVal = 5,
  hint,
}: {
  slug: string;
  exerciseKey: string;
  label: string;
  min?: number;
  max?: number;
  defaultVal?: number;
  hint?: string;
}) {
  const { exerciseState, setExercise, loaded } = useModuleProgress(slug);
  if (!loaded) return null;
  const val = exerciseState[exerciseKey] ?? defaultVal;
  const steps = Array.from({ length: max - min + 1 }, (_, index) => min + index);

  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-sm">
        <span className="font-semibold text-bordeaux">{label}</span>
        <span className="font-display text-lg font-bold text-sage">{val}</span>
      </div>
      <div className="grid grid-cols-6 gap-1.5 rounded-xl bg-white/65 p-2 sm:grid-cols-11">
        {steps.map((step) => {
          const active = val === step;

          return (
            <button
              key={step}
              type="button"
              onClick={() => setExercise(exerciseKey, step)}
              aria-pressed={active}
              className={`grid h-10 place-items-center rounded-lg border-2 text-sm font-semibold transition ${
                active
                  ? "border-bordeaux bg-bordeaux text-white shadow-soft"
                  : "border-sage/30 bg-white text-graphite/75 hover:border-sage hover:bg-sage/5"
              }`}
            >
              {step}
            </button>
          );
        })}
      </div>
      {hint && <p className="mt-1 text-[11px] text-graphite/55">{hint}</p>}
    </div>
  );
}
