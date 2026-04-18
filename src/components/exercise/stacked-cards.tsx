import { useModuleProgress } from "@/hooks/use-module-progress";
import { ExerciseFrame, type ExerciseAccent } from "./exercise-frame";

export type StackedRow = {
  id: string;
  title: string; // Zeilen-Titel (z.B. "Jackpot 1")
  fields: { key: string; label: string; placeholder?: string; rows?: number }[];
};

/**
 * Variant B · Mobile-first Stacked Cards (statt Tabelle).
 * Pro Zeile eine Karte mit beliebig vielen Spalten als Felder.
 * Persistiert pro Feld unter `exerciseState[storageKey][rowId][fieldKey]`.
 */
export function StackedCards({
  slug,
  storageKey,
  title,
  subtitle,
  meta,
  accent = "terracotta",
  rows,
}: {
  slug: string;
  storageKey: string;
  title: string;
  subtitle?: string;
  meta?: string;
  accent?: ExerciseAccent;
  rows: StackedRow[];
}) {
  const { exerciseState, setExercise, loaded } = useModuleProgress(slug);
  if (!loaded) return null;

  const data: Record<string, Record<string, string>> = exerciseState[storageKey] ?? {};
  const setField = (rowId: string, fieldKey: string, val: string) => {
    setExercise(storageKey, {
      ...data,
      [rowId]: { ...(data[rowId] ?? {}), [fieldKey]: val },
    });
  };

  return (
    <ExerciseFrame title={title} subtitle={subtitle} meta={meta} accent={accent}>
      <div className="space-y-3">
        {rows.map((row, i) => (
          <div key={row.id} className="rounded-xl bg-white/75 p-4 shadow-glass">
            <div className="mb-3 flex items-center gap-2">
              <span className="grid h-7 w-7 place-items-center rounded-full bg-bordeaux text-xs font-bold text-white">
                {i + 1}
              </span>
              <p className="font-display text-sm font-bold text-bordeaux">{row.title}</p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {row.fields.map((f) => (
                <label key={f.key} className="block">
                  <span className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-mauve/85">
                    {f.label}
                  </span>
                  <textarea
                    value={data[row.id]?.[f.key] ?? ""}
                    onChange={(e) => setField(row.id, f.key, e.target.value)}
                    placeholder={f.placeholder}
                    rows={f.rows ?? 2}
                    className="w-full resize-none rounded-lg border-2 border-sage/30 bg-white p-2.5 text-sm leading-snug outline-none transition focus:border-sage"
                  />
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
    </ExerciseFrame>
  );
}
