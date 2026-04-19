import { useEffect, useRef, useState } from "react";
import { Play, Pause, RotateCcw } from "lucide-react";
import { ExerciseFrame } from "./exercise-frame";
import { useModuleProgress } from "@/hooks/use-module-progress";

/**
 * BreathPacer · 4-7-8-Vagusatem mit visuellem Atemkreis.
 * Phasen: einatmen 4s · halten 7s · ausatmen 8s. 6 Zyklen Standard.
 * Speichert Anzahl abgeschlossener Sessions in module_progress.
 *
 * Designprinzip: Der Kreis selbst ist die Anleitung. Kein Text-Tutorial nötig.
 */
type Phase = "in" | "hold" | "out" | "idle";
const PHASE_DURATIONS: Record<Exclude<Phase, "idle">, number> = { in: 4, hold: 7, out: 8 };
const PHASE_LABEL: Record<Exclude<Phase, "idle">, string> = {
  in: "Einatmen",
  hold: "Halten",
  out: "Ausatmen",
};

export function BreathPacer({ slug, totalCycles = 6 }: { slug: string; totalCycles?: number }) {
  const { exerciseState, setExercise, loaded } = useModuleProgress(slug);
  const sessionsKey = "breath_478_sessions";
  const sessions = (exerciseState[sessionsKey] as number) ?? 0;

  const [phase, setPhase] = useState<Phase>("idle");
  const [secondsLeft, setSecondsLeft] = useState(0);
  const [cycle, setCycle] = useState(0);
  const tickRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    return () => {
      if (tickRef.current) clearInterval(tickRef.current);
    };
  }, []);

  const start = () => {
    setCycle(0);
    setPhase("in");
    setSecondsLeft(PHASE_DURATIONS.in);
    if (tickRef.current) clearInterval(tickRef.current);
    tickRef.current = setInterval(() => {
      setSecondsLeft((s) => {
        if (s > 1) return s - 1;
        // Phase wechseln
        setPhase((p) => {
          if (p === "in") {
            setSecondsLeft(PHASE_DURATIONS.hold);
            return "hold";
          }
          if (p === "hold") {
            setSecondsLeft(PHASE_DURATIONS.out);
            return "out";
          }
          // out → nächster Zyklus oder Ende
          setCycle((c) => {
            const next = c + 1;
            if (next >= totalCycles) {
              if (tickRef.current) clearInterval(tickRef.current);
              setExercise(sessionsKey, sessions + 1);
              setPhase("idle");
              return 0;
            }
            setSecondsLeft(PHASE_DURATIONS.in);
            setPhase("in");
            return next;
          });
          return p;
        });
        return 0;
      });
    }, 1000);
  };

  const pause = () => {
    if (tickRef.current) clearInterval(tickRef.current);
    setPhase("idle");
  };
  const reset = () => {
    if (tickRef.current) clearInterval(tickRef.current);
    setPhase("idle");
    setSecondsLeft(0);
    setCycle(0);
  };

  if (!loaded) return null;

  // Kreis-Skalierung pro Phase
  const scale =
    phase === "in" ? 1.15 : phase === "hold" ? 1.15 : phase === "out" ? 0.7 : 0.85;
  const transitionDuration =
    phase === "in"
      ? `${PHASE_DURATIONS.in}s`
      : phase === "out"
      ? `${PHASE_DURATIONS.out}s`
      : "1s";

  return (
    <ExerciseFrame
      title="Übung 2 · 6-Atemzüge-Protokoll (4-7-8)"
      subtitle="Verlängerte Ausatmung aktiviert den ventralen Vagus. Folge dem Kreis — er weiß den Takt."
      meta={`🌬️ Vagus-Reset · 6 Zyklen · ~2 Min · ${sessions}× absolviert`}
      accent="sage"
      showSave={false}
    >
      <div className="grid place-items-center py-2">
        <div className="relative grid h-44 w-44 place-items-center sm:h-52 sm:w-52">
          <span
            aria-hidden
            className="absolute inset-0 rounded-full bg-sage/20"
            style={{ transform: `scale(${scale})`, transition: `transform ${transitionDuration} ease-in-out` }}
          />
          <span
            aria-hidden
            className="absolute inset-4 rounded-full bg-sage/35"
            style={{ transform: `scale(${scale})`, transition: `transform ${transitionDuration} ease-in-out` }}
          />
          <div className="relative z-10 grid place-items-center text-center">
            <p className="font-display text-base font-bold text-bordeaux">
              {phase === "idle" ? "Bereit" : PHASE_LABEL[phase]}
            </p>
            <p className="font-display text-3xl font-extrabold tabular-nums text-bordeaux">
              {phase === "idle" ? "🌬️" : secondsLeft}
            </p>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-graphite/65">
              Zyklus {phase === "idle" ? 0 : cycle + 1} / {totalCycles}
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-2">
        {phase === "idle" ? (
          <button
            type="button"
            onClick={start}
            className="inline-flex items-center gap-1.5 rounded-full bg-sage px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:opacity-90 active:scale-95"
          >
            <Play className="h-4 w-4 fill-current" />
            Start
          </button>
        ) : (
          <button
            type="button"
            onClick={pause}
            className="inline-flex items-center gap-1.5 rounded-full bg-bordeaux px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:opacity-90 active:scale-95"
          >
            <Pause className="h-4 w-4 fill-current" />
            Pause
          </button>
        )}
        <button
          type="button"
          onClick={reset}
          className="inline-flex items-center gap-1.5 rounded-full border-2 border-sage/40 bg-white/70 px-3 py-2 text-xs font-semibold text-bordeaux transition hover:border-sage hover:bg-white"
        >
          <RotateCcw className="h-3.5 w-3.5" />
          Reset
        </button>
      </div>

      <p className="text-center text-[11px] italic text-graphite/65">
        Tipp: Mund leicht geöffnet, Ausatmen hörbar wie ein Seufzer. Schon nach 2 Zyklen sinkt die Herzfrequenz messbar.
      </p>
    </ExerciseFrame>
  );
}
