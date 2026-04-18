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

  return (
    <div>
      <div className="mb-1 flex items-center justify-between text-sm">
        <span className="font-semibold text-bordeaux">{label}</span>
        <span className="font-display text-lg font-bold text-sage">{val}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        value={val}
        onChange={(e) => setExercise(exerciseKey, Number(e.target.value))}
        className="w-full accent-[var(--color-sage)]"
      />
      {hint && <p className="mt-1 text-[11px] text-graphite/55">{hint}</p>}
    </div>
  );
}
