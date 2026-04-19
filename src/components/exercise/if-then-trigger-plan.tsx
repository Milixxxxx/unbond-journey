import { Zap, ArrowRight } from "lucide-react";
import { useModuleProgress } from "@/hooks/use-module-progress";
import { ExerciseFrame, type ExerciseAccent } from "./exercise-frame";

/**
 * Vibe-Check · If-Then-Notfallplan (Implementation Intention, Gollwitzer 1999)
 * 3 vorbereitete Slots: WENN Trigger X auftaucht, DANN tue ich Y.
 * Forschung zeigt: Wer seine Reaktion VORHER schriftlich festlegt,
 * setzt sie 2-3x häufiger im Ernstfall um.
 */
export function IfThenTriggerPlan({
  slug,
  accent = "terracotta",
}: {
  slug: string;
  accent?: ExerciseAccent;
}) {
  const { exerciseState, setExercise, loaded } = useModuleProgress(slug);
  if (!loaded) return null;

  const slots = [1, 2, 3] as const;

  return (
    <ExerciseFrame
      title="Vibe-Check · Wenn-Dann-Notfallplan"
      subtitle="Lege deine Reaktion fest, BEVOR die nächste Welle kommt. 3 Slots für deine Top-Trigger."
      meta="⚡ Implementation Intention · Gollwitzer (1999)"
      accent={accent}
    >
      <p className="rounded-lg bg-mauve/10 p-3 text-xs leading-relaxed text-graphite/80">
        💡 Forschung zeigt: Wer seine Reaktion <strong>vorher</strong>{" "}
        schriftlich festlegt, setzt sie im Ernstfall 2–3× häufiger um. Dein
        Gehirn liebt fertige Skripte – es muss in der Krise nichts mehr
        entscheiden.
      </p>

      <div className="space-y-3">
        {slots.map((n) => {
          const wennKey = `ifthen_wenn_${n}`;
          const dannKey = `ifthen_dann_${n}`;
          return (
            <div
              key={n}
              className="rounded-xl border-2 border-terracotta/25 bg-white/80 p-4 shadow-glass"
            >
              <div className="mb-3 flex items-center gap-2">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-terracotta text-xs font-bold text-white">
                  {n}
                </span>
                <p className="font-display text-sm font-bold text-bordeaux">
                  Notfall-Skript {n}
                </p>
                <Zap className="ml-auto h-4 w-4 text-terracotta" />
              </div>

              <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr] sm:items-start">
                <label className="block">
                  <span className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-mauve/85">
                    WENN
                  </span>
                  <textarea
                    value={(exerciseState[wennKey] as string) ?? ""}
                    onChange={(e) => setExercise(wennKey, e.target.value)}
                    placeholder="…unser Lied im Radio läuft"
                    rows={2}
                    className="w-full resize-none rounded-lg border-2 border-sage/30 bg-white p-2.5 text-sm leading-snug outline-none transition focus:border-sage"
                  />
                </label>

                <ArrowRight className="hidden h-5 w-5 self-center text-terracotta/60 sm:block" />

                <label className="block">
                  <span className="mb-1 block text-[11px] font-semibold uppercase tracking-wider text-terracotta">
                    DANN
                  </span>
                  <textarea
                    value={(exerciseState[dannKey] as string) ?? ""}
                    onChange={(e) => setExercise(dannKey, e.target.value)}
                    placeholder="…wechsle ich sofort den Sender und atme 6× tief aus."
                    rows={2}
                    className="w-full resize-none rounded-lg border-2 border-terracotta/30 bg-white p-2.5 text-sm leading-snug outline-none transition focus:border-terracotta"
                  />
                </label>
              </div>
            </div>
          );
        })}
      </div>

      <p className="rounded-lg bg-sage/12 p-3 text-center text-xs italic text-graphite/75">
        Lies dir deine Skripte einmal pro Tag laut vor. So wandern sie aus dem
        Notizfeld in dein Nervensystem.
      </p>
    </ExerciseFrame>
  );
}
