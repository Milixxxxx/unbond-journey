import { useEffect, useState } from "react";
import { Trophy, Sparkles, Check } from "lucide-react";
import { useModuleProgress } from "@/hooks/use-module-progress";

export type TransformationGoal = { id: string; text: string };

/**
 * Variant B · Transformationsziele als anklickbare Karten.
 * Wenn ≥ 3 von 5 Zielen markiert sind, gilt das Kapitel als "transformiert" und
 * die Nutzerin erhält positive Rückmeldung (Badge-Animation + Bestätigungstext).
 *
 * Die Logik (≥ 3 → badge_earned) lebt bereits in useModuleProgress.toggleChecklist,
 * d.h. der Erfolg wird sofort persistent in der DB gespeichert.
 */
export function TransformationGoals({
  slug,
  diagnosisLabel,
  goals,
  threshold = 3,
}: {
  slug: string;
  diagnosisLabel?: string; // optionaler Hinweis "bezogen auf X"
  goals: TransformationGoal[];
  threshold?: number;
}) {
  const { checklistState, toggleChecklist, badgeEarned, checkedCount, loaded } =
    useModuleProgress(slug);
  const [celebrate, setCelebrate] = useState(false);

  // Konfetti-/Pop-Animation einmalig triggern, wenn der Badge gerade kippt
  useEffect(() => {
    if (badgeEarned) {
      setCelebrate(true);
      const t = setTimeout(() => setCelebrate(false), 2400);
      return () => clearTimeout(t);
    }
  }, [badgeEarned]);

  if (!loaded) return null;

  return (
    <section
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-bordeaux/8 via-mauve/8 to-sage/8 p-5 shadow-soft sm:p-6"
      style={{ borderLeft: "5px solid var(--color-bordeaux)" }}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-wider text-mauve">
            Transformationsziele
          </p>
          <h3 className="mt-1 font-display text-lg font-bold text-bordeaux sm:text-xl">
            Was sich verändert haben darf
          </h3>
          {diagnosisLabel && (
            <p className="mt-1 text-xs text-graphite/70">
              Bezogen auf: <span className="font-medium">{diagnosisLabel}</span>
            </p>
          )}
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-white/70 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-bordeaux">
          {checkedCount} / {goals.length}
        </span>
      </div>

      <ul className="mt-4 space-y-2">
        {goals.map((g) => {
          const on = !!checklistState[g.id];
          return (
            <li key={g.id}>
              <button
                type="button"
                onClick={() => toggleChecklist(g.id)}
                className={`flex w-full items-start gap-3 rounded-xl border-2 p-3 text-left transition ${
                  on
                    ? "border-bordeaux bg-bordeaux/8 shadow-glass"
                    : "border-sage/30 bg-white/65 hover:border-sage hover:bg-white"
                }`}
                aria-pressed={on}
              >
                <span
                  className={`mt-0.5 grid h-6 w-6 flex-shrink-0 place-items-center rounded-md border-2 transition ${
                    on
                      ? "border-bordeaux bg-bordeaux text-white"
                      : "border-sage/50 bg-white"
                  }`}
                >
                  {on && <Check className="h-3.5 w-3.5" />}
                </span>
                <span
                  className={`text-sm leading-snug ${
                    on ? "font-medium text-bordeaux" : "text-graphite"
                  }`}
                >
                  {g.text}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      {/* Erfolgs-Block */}
      <div className="mt-4">
        {badgeEarned ? (
          <div
            className={`flex items-center gap-3 rounded-xl bg-gradient-to-r from-bordeaux to-mauve p-4 text-white shadow-elegant ${
              celebrate ? "animate-badge-pop" : ""
            }`}
          >
            <div className="grid h-12 w-12 flex-shrink-0 place-items-center rounded-full bg-white/20 backdrop-blur">
              <Trophy className="h-6 w-6" />
            </div>
            <div className="min-w-0">
              <p className="font-display text-base font-bold">
                Transformation vollzogen ✦
              </p>
              <p className="text-xs text-white/85">
                Du hast {checkedCount} von {goals.length} Zielen erreicht. Dieses Kapitel
                ist Teil deiner neuen Realität.
              </p>
            </div>
          </div>
        ) : (
          <div className="flex items-start gap-3 rounded-xl bg-white/55 p-3">
            <Sparkles className="mt-0.5 h-4 w-4 flex-shrink-0 text-mauve" />
            <p className="text-xs text-graphite/75">
              Markiere mindestens <strong>{threshold} von {goals.length}</strong> Zielen,
              die für dich heute schon zutreffen – dann gilt das Kapitel als transformiert.
              Es geht nicht um Perfektion, sondern um spürbare Bewegung.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
