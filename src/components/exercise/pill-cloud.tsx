import { Check, Plus, X } from "lucide-react";
import { useState } from "react";
import { useModuleProgress } from "@/hooks/use-module-progress";
import { ExerciseFrame, type ExerciseAccent } from "./exercise-frame";

export type Pill = { id: string; label: string };

/**
 * Variant B · Interaktive Pill-Cloud (Mehrfachauswahl).
 * Klar abgegrenzter Klick-Status, mit Live-Counter unter der Wolke.
 * Persistiert als boolean-Map unter `exerciseState[storageKey]`.
 *
 * Optional: `allowCustom` schaltet ein kleines Eingabefeld frei, mit dem
 * Nutzerinnen eigene Pillen hinzufügen können. Eigene Pillen werden
 * separat unter `exerciseState[storageKey + "_custom"]` gespeichert
 * (Liste {id,label}) und sind auch löschbar.
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
  allowCustom = false,
  customPlaceholder = "Eigenes hinzufügen …",
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
  allowCustom?: boolean;
  customPlaceholder?: string;
}) {
  const { exerciseState, setExercise, loaded } = useModuleProgress(slug);
  const [draft, setDraft] = useState("");
  if (!loaded) return null;

  const selected: Record<string, boolean> = exerciseState[storageKey] ?? {};
  const customKey = `${storageKey}_custom`;
  const customPills: Pill[] = Array.isArray(exerciseState[customKey])
    ? (exerciseState[customKey] as Pill[])
    : [];

  const allPills = [...pills, ...customPills];

  const toggle = (id: string) => {
    setExercise(storageKey, { ...selected, [id]: !selected[id] });
  };

  const addCustom = () => {
    const text = draft.trim();
    if (!text) return;
    const id = `c_${Date.now()}_${Math.random().toString(36).slice(2, 6)}`;
    const next = [...customPills, { id, label: text }];
    setExercise(customKey, next);
    setExercise(storageKey, { ...selected, [id]: true });
    setDraft("");
  };

  const removeCustom = (id: string) => {
    const next = customPills.filter((p) => p.id !== id);
    setExercise(customKey, next);
    const nextSel = { ...selected };
    delete nextSel[id];
    setExercise(storageKey, nextSel);
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
        {customPills.map((p) => {
          const on = !!selected[p.id];
          return (
            <span
              key={p.id}
              className={`group inline-flex items-center gap-1 rounded-full border-2 pl-3 pr-1 py-1 text-xs font-medium transition sm:text-sm ${
                on
                  ? "border-mauve bg-mauve text-white shadow-soft"
                  : "border-mauve/40 bg-white/85 text-graphite"
              }`}
            >
              <button
                type="button"
                onClick={() => toggle(p.id)}
                className="inline-flex items-center gap-1.5"
                aria-pressed={on}
              >
                {on && <Check className="h-3.5 w-3.5" />}
                {p.label}
              </button>
              <button
                type="button"
                onClick={() => removeCustom(p.id)}
                aria-label={`„${p.label}" entfernen`}
                className={`grid h-5 w-5 place-items-center rounded-full transition ${
                  on ? "hover:bg-white/20" : "hover:bg-mauve/15"
                }`}
              >
                <X className="h-3 w-3" />
              </button>
            </span>
          );
        })}
      </div>

      {allowCustom && (
        <form
          onSubmit={(e) => {
            e.preventDefault();
            addCustom();
          }}
          className="flex gap-2 rounded-full border-2 border-dashed border-mauve/40 bg-white/55 p-1 pl-3"
        >
          <input
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            placeholder={customPlaceholder}
            maxLength={60}
            className="flex-1 bg-transparent text-sm outline-none placeholder:text-graphite/45"
            aria-label="Eigene Pill hinzufügen"
          />
          <button
            type="submit"
            disabled={!draft.trim()}
            className="inline-flex items-center gap-1 rounded-full bg-mauve px-3 py-1.5 text-xs font-semibold text-white shadow-soft transition disabled:opacity-40 disabled:cursor-not-allowed hover:bg-mauve/90 active:scale-95"
          >
            <Plus className="h-3.5 w-3.5" />
            Hinzufügen
          </button>
        </form>
      )}

      <div className="flex items-center justify-between rounded-lg bg-white/55 px-3 py-2 text-xs">
        <span className="font-medium text-graphite/80">
          <span className="font-display text-base font-bold text-bordeaux">{count}</span>
          {" / "}
          {allPills.length} {counterLabel}
        </span>
        {count === 0 && emptyHint && <span className="text-graphite/55">{emptyHint}</span>}
      </div>
    </ExerciseFrame>
  );
}
