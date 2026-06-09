import { useModuleProgress } from "@/hooks/use-module-progress";
import { ExerciseFrame } from "./exercise-frame";

/**
 * IntensityPrePost · zwei diskrete 0–10-Skalen für "vor" und "nach" einer
 * regulierenden Übung (z.B. 4-7-8-Atem). Berechnet automatisch das Delta
 * und zeigt es als farbliches Mikro-Feedback.
 */
export function IntensityPrePost({
  slug,
  storageKeyBefore,
  storageKeyAfter,
  title = "Drang-Intensität · vor / nach",
  subtitle = "Miss vor dem Atem-Timer — und direkt danach noch einmal. Der Unterschied ist spürbar.",
  labelBefore = "Vor dem Atem-Timer",
  labelAfter = "Nach dem Atem-Timer",
}: {
  slug: string;
  storageKeyBefore: string;
  storageKeyAfter: string;
  title?: string;
  subtitle?: string;
  labelBefore?: string;
  labelAfter?: string;
}) {
  const { exerciseState, setExercise, loaded } = useModuleProgress(slug);
  if (!loaded) return null;

  const before: number | undefined = exerciseState[storageKeyBefore];
  const after: number | undefined = exerciseState[storageKeyAfter];
  const delta =
    typeof before === "number" && typeof after === "number" ? after - before : null;

  return (
    <ExerciseFrame title={title} subtitle={subtitle} accent="bordeaux" showSave={false}>
      <div className="space-y-5">
        <ScaleRow
          label={labelBefore}
          value={before}
          onPick={(v) => setExercise(storageKeyBefore, v)}
        />
        <ScaleRow
          label={labelAfter}
          value={after}
          onPick={(v) => setExercise(storageKeyAfter, v)}
        />
      </div>

      {delta !== null && (
        <div
          className={`mt-4 rounded-xl border p-3 text-sm ${
            delta <= -2
              ? "border-sage/40 bg-sage/10 text-graphite"
              : delta >= 0
                ? "border-bordeaux/30 bg-bordeaux/5 text-graphite/85"
                : "border-mauve/30 bg-mauve/8 text-graphite/85"
          }`}
        >
          <strong className="font-display">
            Δ {delta > 0 ? "+" : ""}
            {delta}
          </strong>{" "}
          {delta <= -2
            ? "— spürbarer Drop. Genau das ist Selbstwirksamkeit."
            : delta <= -1
              ? "— leichte Beruhigung. Gib dem Vagus noch eine Runde."
              : delta === 0
                ? "— unverändert. Atme noch eine Runde, oder wechsle zu kaltem Wasser (TIPP-T)."
                : "— die Welle ist gerade auf dem Höhepunkt. Nicht handeln, nur warten."}
        </div>
      )}
    </ExerciseFrame>
  );
}

function ScaleRow({
  label,
  value,
  onPick,
}: {
  label: string;
  value: number | undefined;
  onPick: (v: number) => void;
}) {
  const steps = Array.from({ length: 11 }, (_, i) => i);
  return (
    <div>
      <div className="mb-2 flex items-baseline justify-between">
        <span className="text-xs font-semibold uppercase tracking-[0.12em] text-bordeaux">
          {label}
        </span>
        <span className="font-display text-2xl font-extrabold tabular-nums text-bordeaux">
          {value ?? "–"}
        </span>
      </div>
      <div className="grid grid-cols-11 gap-1">
        {steps.map((v) => {
          const on = value === v;
          return (
            <button
              key={v}
              type="button"
              onClick={() => onPick(v)}
              aria-pressed={on}
              className={`grid h-9 place-items-center rounded-md border-2 text-xs font-semibold transition ${
                on
                  ? "border-bordeaux bg-bordeaux text-white shadow-soft"
                  : "border-sage/30 bg-white/85 text-graphite/70 hover:border-sage"
              }`}
            >
              {v}
            </button>
          );
        })}
      </div>
      <div className="mt-1 flex justify-between text-[10px] text-graphite/55">
        <span>0 · Ruhig</span>
        <span>10 · Überwältigt</span>
      </div>
    </div>
  );
}
