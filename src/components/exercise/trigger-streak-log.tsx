import { Waves, Plus, X, Flame } from "lucide-react";
import { useModuleProgress } from "@/hooks/use-module-progress";
import { ExerciseFrame } from "./exercise-frame";

type LogEntry = { id: string; date: string; intensity: number };

/**
 * Vibe-Check · Trigger-Logbuch-Streak
 * Jede Welle, die du geritten hast (ohne zu handeln) wird hier festgehalten.
 * Ziel: sichtbar machen, dass du dranbleibst – Sage-grüne Mini-Stats statt
 * grellem Gamification-Feuerwerk.
 */
export function TriggerStreakLog({ slug }: { slug: string }) {
  const { exerciseState, setExercise, loaded } = useModuleProgress(slug);
  if (!loaded) return null;

  const entries: LogEntry[] = (exerciseState.trg_streak_log as LogEntry[]) ?? [];
  const total = entries.length;

  // Streak: aufeinanderfolgende Tage, an denen mind. eine Welle geritten wurde,
  // rückwärts ab heute.
  const days = new Set(entries.map((e) => e.date));
  const today = new Date();
  let streak = 0;
  for (let i = 0; i < 90; i++) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    const key = d.toISOString().slice(0, 10);
    if (days.has(key)) streak++;
    else if (i > 0) break;
  }

  const last7 = entries.filter((e) => {
    const d = new Date(e.date);
    const diff = (today.getTime() - d.getTime()) / 86400000;
    return diff <= 7;
  });
  const avgIntensity =
    last7.length > 0
      ? Math.round(
          (last7.reduce((s, e) => s + (e.intensity || 0), 0) / last7.length) * 10,
        ) / 10
      : 0;

  const addWave = (intensity: number) => {
    const entry: LogEntry = {
      id: crypto.randomUUID(),
      date: new Date().toISOString().slice(0, 10),
      intensity,
    };
    setExercise("trg_streak_log", [...entries, entry]);
  };

  const removeEntry = (id: string) => {
    setExercise(
      "trg_streak_log",
      entries.filter((e) => e.id !== id),
    );
  };

  return (
    <ExerciseFrame
      title="Vibe-Check · Trigger-Logbuch"
      subtitle="Jede Welle, die du geritten hast – ohne zu handeln."
      meta="🌊 Inhibitionslernen · sichtbar gemacht"
      accent="sage"
    >
      {/* Mini-Stats */}
      <div className="grid grid-cols-3 gap-2">
        <Stat icon={<Waves className="h-4 w-4" />} label="Wellen geritten" value={String(total)} />
        <Stat icon={<Flame className="h-4 w-4" />} label="Tage in Folge" value={String(streak)} />
        <Stat
          icon={<span className="font-display text-sm font-bold">⌀</span>}
          label="Stärke (7 T.)"
          value={avgIntensity > 0 ? avgIntensity.toFixed(1) : "—"}
        />
      </div>

      {/* Erfolgs-Botschaft */}
      <p className="mt-3 rounded-lg bg-sage/12 p-3 text-center text-sm leading-relaxed text-graphite/85">
        {total === 0 ? (
          <>Noch keine Welle geloggt. Die nächste, die kommt, gehört dir.</>
        ) : (
          <>
            Du hast <strong className="text-bordeaux">{total}</strong>{" "}
            {total === 1 ? "Welle" : "Wellen"} geritten ohne zu handeln.{" "}
            {streak > 1 && (
              <>
                Aktuell <strong>{streak} Tage</strong> in Folge.{" "}
              </>
            )}
            Jede einzelne war ein neues Stück Inhibitionslernen.
          </>
        )}
      </p>

      {/* Quick-Add */}
      <div className="mt-4">
        <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-mauve">
          Welle eben geritten? Logge die Stärke:
        </p>
        <div className="grid grid-cols-5 gap-1.5 sm:grid-cols-10">
          {Array.from({ length: 10 }, (_, i) => i + 1).map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => addWave(n)}
              className="grid h-9 place-items-center rounded-lg border-2 border-sage/30 bg-white text-sm font-semibold text-bordeaux transition hover:border-sage hover:bg-sage/10 active:scale-95"
              aria-label={`Welle Stärke ${n} loggen`}
            >
              {n}
            </button>
          ))}
        </div>
      </div>

      {/* Letzte Einträge */}
      {entries.length > 0 && (
        <div className="mt-4">
          <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-mauve">
            Letzte Einträge
          </p>
          <ul className="space-y-1.5">
            {[...entries]
              .reverse()
              .slice(0, 5)
              .map((e) => (
                <li
                  key={e.id}
                  className="flex items-center justify-between rounded-lg bg-white/70 px-3 py-2 text-xs"
                >
                  <span className="text-graphite/80">
                    {new Date(e.date).toLocaleDateString("de-DE", {
                      day: "2-digit",
                      month: "short",
                    })}
                  </span>
                  <span className="font-semibold text-bordeaux">
                    Stärke {e.intensity}/10
                  </span>
                  <button
                    type="button"
                    onClick={() => removeEntry(e.id)}
                    className="grid h-6 w-6 place-items-center rounded-full text-graphite/50 hover:bg-sage/15 hover:text-bordeaux"
                    aria-label="Eintrag löschen"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </li>
              ))}
          </ul>
        </div>
      )}
    </ExerciseFrame>
  );
}

function Stat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-xl bg-sage/10 p-3 text-center">
      <div className="mx-auto mb-1 grid h-7 w-7 place-items-center rounded-full bg-white/80 text-sage">
        {icon}
      </div>
      <p className="font-display text-xl font-extrabold text-bordeaux leading-none">
        {value}
      </p>
      <p className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-graphite/65">
        {label}
      </p>
    </div>
  );
}
