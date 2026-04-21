import { useModuleProgress } from "@/hooks/use-module-progress";
import { ExerciseFrame } from "./exercise-frame";
import { Users, Plus, X } from "lucide-react";

type Witness = {
  name: string;
  relation: string;
  knows: string;
};

type State = {
  witnesses: Witness[];
};

const EMPTY: State = {
  witnesses: [
    { name: "", relation: "", knows: "" },
    { name: "", relation: "", knows: "" },
    { name: "", relation: "", knows: "" },
  ],
};

/**
 * WitnessCircle · Übung „Mein Zeug*innen-Kreis"
 *
 * Anlass: Marys Ex-Frau (vorherige, gesunde Beziehung) ist im Anhörungs-Termin
 * für Mary eingestanden — obwohl die Trennung selbst schmerzhaft war. Sie kannte
 * Mary lange genug, um Sandras narzisstische Tendenzen über Jahre als Außenstehende
 * zu beobachten.
 *
 * Diese Übung lädt die Nutzerin ein, ihren eigenen Zeug*innen-Kreis bewusst
 * aufzubauen — Menschen, die ihre Realität kennen und im Ernstfall bestätigen
 * können, was wirklich war.
 */
export function WitnessCircle({
  slug,
  storageKey,
}: {
  slug: string;
  storageKey: string;
}) {
  const { exerciseState, setExercise, loaded } = useModuleProgress(slug);
  if (!loaded) return null;

  const state: State = exerciseState[storageKey] ?? EMPTY;
  const update = (next: Witness[]) =>
    setExercise(storageKey, { witnesses: next });

  const updateOne = (idx: number, patch: Partial<Witness>) => {
    const next = state.witnesses.map((w, i) => (i === idx ? { ...w, ...patch } : w));
    update(next);
  };

  const add = () => {
    if (state.witnesses.length >= 7) return;
    update([...state.witnesses, { name: "", relation: "", knows: "" }]);
  };

  const remove = (idx: number) => {
    if (state.witnesses.length <= 1) return;
    update(state.witnesses.filter((_, i) => i !== idx));
  };

  const filledCount = state.witnesses.filter((w) => w.name.trim()).length;

  return (
    <ExerciseFrame
      title="Übung 3 · Mein Zeug*innen-Kreis"
      subtitle="Wer würde im Fall der Fälle absolut hinter dir stehen — auch wenn es Aussage gegen Aussage steht?"
      meta="🤝 Soziales Schutznetz · ⏱ 12 Min"
      accent="sage"
    >
      <div className="rounded-lg bg-sage/10 p-3 text-xs leading-relaxed text-graphite/85">
        <p>
          Im Behördenkontext zählt nicht nur deine Wahrheit, sondern wer sie
          bestätigen kann. Denk in alle Richtungen: Nicht nur enge Freund*innen,
          sondern auch Ex-Partner*innen aus gesunden Beziehungen, Nachbar*innen,
          Therapeut*innen, Kolleg*innen, Familienmitglieder oder Bekannte aus der
          Community, die deine Ex erlebt haben.
        </p>
        <p className="mt-2">
          <strong className="text-bordeaux">Wichtig:</strong> Wähle Menschen, die
          dich <em>kennen</em> — nicht nur mögen. Eine Person, die deine Ex
          nüchtern und über Zeit hinweg beobachten konnte, ist im Zweifel
          glaubwürdiger als jemand, der nur deine Version kennt.
        </p>
      </div>

      <div className="space-y-3">
        {state.witnesses.map((w, idx) => (
          <div
            key={idx}
            className="rounded-xl bg-white/80 p-3 shadow-soft"
            style={{ borderLeft: "4px solid var(--color-sage)" }}
          >
            <div className="mb-2 flex items-center justify-between gap-2">
              <p className="inline-flex items-center gap-1.5 text-xs font-semibold text-bordeaux">
                <Users className="h-3.5 w-3.5" />
                Zeug*in {idx + 1}
              </p>
              {state.witnesses.length > 1 && (
                <button
                  type="button"
                  onClick={() => remove(idx)}
                  aria-label="Zeug*in entfernen"
                  className="grid h-6 w-6 place-items-center rounded-full text-graphite/50 transition hover:bg-bordeaux/10 hover:text-bordeaux"
                >
                  <X className="h-3.5 w-3.5" />
                </button>
              )}
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              <input
                type="text"
                value={w.name}
                onChange={(e) => updateOne(idx, { name: e.target.value })}
                placeholder="Name (oder Initialen)"
                className="rounded-md border border-sage/25 bg-white/90 p-2 text-sm text-graphite outline-none transition focus:border-sage focus:ring-2 focus:ring-sage/15"
              />
              <input
                type="text"
                value={w.relation}
                onChange={(e) => updateOne(idx, { relation: e.target.value })}
                placeholder="Beziehung (z. B. Ex-Frau, Nachbarin, Therapeutin)"
                className="rounded-md border border-sage/25 bg-white/90 p-2 text-sm text-graphite outline-none transition focus:border-sage focus:ring-2 focus:ring-sage/15"
              />
            </div>
            <textarea
              value={w.knows}
              onChange={(e) => updateOne(idx, { knows: e.target.value })}
              placeholder="Was weiß diese Person? Was hat sie selbst gesehen oder gehört? (z. B. „hat Sandras Wutausbruch im Sommer miterlebt", „kennt mich seit 12 Jahren")"
              rows={2}
              className="mt-2 w-full resize-y rounded-md border border-sage/25 bg-white/90 p-2 text-sm leading-snug text-graphite outline-none transition focus:border-sage focus:ring-2 focus:ring-sage/15"
            />
          </div>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg bg-sage/8 px-3 py-2">
        <p className="text-xs text-graphite/70">
          {filledCount} von {state.witnesses.length}{" "}
          {filledCount === 1 ? "Person" : "Personen"} eingetragen
        </p>
        <button
          type="button"
          onClick={add}
          disabled={state.witnesses.length >= 7}
          className="inline-flex items-center gap-1 rounded-md bg-sage px-3 py-1.5 text-xs font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
        >
          <Plus className="h-3.5 w-3.5" />
          Zeug*in hinzufügen
        </button>
      </div>
    </ExerciseFrame>
  );
}
