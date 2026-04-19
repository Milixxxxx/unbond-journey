import { useMemo, useState } from "react";
import { Check, Lock } from "lucide-react";
import { ExerciseFrame, type ExerciseAccent } from "./exercise-frame";
import { useModuleProgress } from "@/hooks/use-module-progress";

/**
 * 21-Tage-Negative-Reappraisal-Kalender.
 * Klickbares 7×3-Grid: Nutzerin wählt Tag, schreibt einen faktisch belegten,
 * negativen Aspekt. Alle Einträge werden in exerciseState[storageKey] gespeichert.
 * Tage werden grün markiert sobald ein nicht-leerer Eintrag existiert.
 */
export function TwentyOneDayChallenge({
  slug,
  storageKey = "reappraisal_21",
  title = "21-Tage-Challenge · Negative Reappraisal",
  subtitle,
  meta = "21 Tage · 5 Min/Tag · automatisch gespeichert",
  accent = "sage" as ExerciseAccent,
  placeholder = "Eine konkrete, faktisch belegte Erinnerung – z.B. „Sie hat mich vor meinen Freundinnen bloßgestellt, als ich…"",
}: {
  slug: string;
  storageKey?: string;
  title?: string;
  subtitle?: string;
  meta?: string;
  accent?: ExerciseAccent;
  placeholder?: string;
}) {
  const { exerciseState, setExercise } = useModuleProgress(slug);
  const entries: Record<string, string> = exerciseState[storageKey] ?? {};
  const [activeDay, setActiveDay] = useState<number>(() => {
    // erster leerer Tag als Default, sonst Tag 1
    for (let i = 1; i <= 21; i++) {
      if (!entries[`d${i}`]?.trim()) return i;
    }
    return 1;
  });

  const filledCount = useMemo(
    () => Object.values(entries).filter((v) => v?.trim().length > 0).length,
    [entries],
  );

  const update = (day: number, value: string) => {
    setExercise(storageKey, { ...entries, [`d${day}`]: value });
  };

  return (
    <ExerciseFrame title={title} subtitle={subtitle} meta={meta} accent={accent}>
      {/* Fortschritts-Header */}
      <div className="flex items-center justify-between rounded-xl bg-sage/10 px-4 py-2.5">
        <p className="text-xs font-semibold uppercase tracking-wider text-sage">
          Fortschritt: {filledCount} / 21 Tage
        </p>
        <div className="h-1.5 w-32 overflow-hidden rounded-full bg-sage/20">
          <div
            className="h-full rounded-full bg-sage transition-all duration-500"
            style={{ width: `${(filledCount / 21) * 100}%` }}
          />
        </div>
      </div>

      {/* 21 Tage Grid */}
      <div className="grid grid-cols-7 gap-1.5 sm:gap-2">
        {Array.from({ length: 21 }, (_, i) => i + 1).map((day) => {
          const filled = !!entries[`d${day}`]?.trim();
          const isActive = day === activeDay;
          return (
            <button
              key={day}
              type="button"
              onClick={() => setActiveDay(day)}
              className={`group relative aspect-square rounded-lg border-2 text-xs font-bold transition-all ${
                isActive
                  ? "border-bordeaux bg-bordeaux text-white shadow-soft"
                  : filled
                    ? "border-sage bg-sage/20 text-sage hover:border-sage/70"
                    : "border-graphite/15 bg-white/60 text-graphite/60 hover:border-bordeaux/40"
              }`}
              aria-label={`Tag ${day}${filled ? " (ausgefüllt)" : ""}`}
            >
              {filled && !isActive ? (
                <Check className="mx-auto h-3.5 w-3.5" strokeWidth={3} />
              ) : (
                <span>{day}</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Eintrags-Bereich */}
      <div className="rounded-xl bg-cream/50 p-4">
        <div className="mb-2 flex items-center justify-between">
          <p className="font-display text-sm font-bold text-bordeaux">
            Dein Eintrag für Tag {activeDay}
          </p>
          {entries[`d${activeDay}`]?.trim() && (
            <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-sage">
              <Check className="h-3 w-3" strokeWidth={3} />
              gespeichert
            </span>
          )}
        </div>
        <textarea
          value={entries[`d${activeDay}`] ?? ""}
          onChange={(e) => update(activeDay, e.target.value)}
          placeholder={placeholder}
          rows={4}
          className="w-full resize-y rounded-lg border-2 border-warning/40 bg-white/90 p-3 text-sm leading-relaxed text-graphite focus:border-bordeaux focus:outline-none"
        />
        <p className="mt-2 text-[11px] italic text-graphite/60">
          Tipp: Du musst die Tage nicht in Reihenfolge ausfüllen. Wichtig ist die tägliche
          Wiederholung – das Gehirn braucht Konsistenz für die Rekonsolidierung.
        </p>
      </div>

      {filledCount >= 21 && (
        <div className="rounded-xl border-2 border-sage bg-sage/15 p-4 text-center">
          <p className="font-display text-sm font-bold text-sage">
            🌿 Alle 21 Tage abgeschlossen
          </p>
          <p className="mt-1 text-xs text-graphite/80">
            Studien zeigen: Die emotionale Intensität deiner romantischen Erinnerungen ist jetzt
            messbar reduziert. Du hast deinem Gehirn ein neues Bild gegeben.
          </p>
        </div>
      )}

      {filledCount < 21 && filledCount > 0 && (
        <p className="flex items-center gap-2 text-[11px] text-graphite/55">
          <Lock className="h-3 w-3" />
          Noch {21 - filledCount} Tage bis zum Abschluss-Badge.
        </p>
      )}
    </ExerciseFrame>
  );
}
