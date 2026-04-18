import { useModuleProgress } from "@/hooks/use-module-progress";
import { ExerciseFrame, type ExerciseAccent } from "./exercise-frame";

export type LikertItem = { id: string; text: string };

const SCALE = [
  { v: 0, label: "Nie" },
  { v: 1, label: "Selten" },
  { v: 2, label: "Manchmal" },
  { v: 3, label: "Oft" },
  { v: 4, label: "Immer" },
];

/**
 * Variant B · Likert-Skala über mehrere Items (Quiz/Self-Assessment).
 * Persistiert je Item einen Wert 0-4 unter `exerciseState[storageKey]`.
 */
export function LikertScale({
  slug,
  storageKey,
  title,
  subtitle,
  meta,
  accent = "mauve",
  items,
}: {
  slug: string;
  storageKey: string;
  title: string;
  subtitle?: string;
  meta?: string;
  accent?: ExerciseAccent;
  items: LikertItem[];
}) {
  const { exerciseState, setExercise, loaded } = useModuleProgress(slug);
  if (!loaded) return null;

  const answers: Record<string, number> = exerciseState[storageKey] ?? {};
  const setAnswer = (id: string, v: number) =>
    setExercise(storageKey, { ...answers, [id]: v });

  const answered = Object.keys(answers).length;
  const total = items.length;
  const sum = Object.values(answers).reduce((a, b) => a + b, 0);

  return (
    <ExerciseFrame title={title} subtitle={subtitle} meta={meta} accent={accent}>
      <ol className="space-y-3">
        {items.map((it, i) => {
          const cur = answers[it.id];
          return (
            <li key={it.id} className="rounded-lg bg-white/65 p-3">
              <p className="mb-2 text-sm leading-snug">
                <span className="mr-1.5 font-display font-bold text-mauve">{i + 1}.</span>
                {it.text}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {SCALE.map((s) => {
                  const on = cur === s.v;
                  return (
                    <button
                      key={s.v}
                      type="button"
                      onClick={() => setAnswer(it.id, s.v)}
                      className={`flex-1 min-w-[3.5rem] rounded-md border-2 px-2 py-1.5 text-[11px] font-medium transition ${
                        on
                          ? "border-mauve bg-mauve text-white"
                          : "border-sage/30 bg-white text-graphite/75 hover:border-mauve/50"
                      }`}
                      aria-pressed={on}
                    >
                      {s.label}
                    </button>
                  );
                })}
              </div>
            </li>
          );
        })}
      </ol>
      <div className="flex items-center justify-between rounded-lg bg-white/55 px-3 py-2 text-xs">
        <span className="font-medium text-graphite/80">
          {answered} / {total} beantwortet
        </span>
        {answered > 0 && (
          <span className="font-medium text-graphite/80">
            Summe: <span className="font-display text-base font-bold text-mauve">{sum}</span> /{" "}
            {total * 4}
          </span>
        )}
      </div>
    </ExerciseFrame>
  );
}
