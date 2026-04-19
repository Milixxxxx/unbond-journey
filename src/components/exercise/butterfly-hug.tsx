import { useEffect, useRef, useState } from "react";
import { Play, Pause } from "lucide-react";
import { ExerciseFrame } from "./exercise-frame";
import { useModuleProgress } from "@/hooks/use-module-progress";

/**
 * ButterflyHug · EMDR-Selbstanwendung mit visuellem Links/Rechts-Indikator.
 * Bilateral wechselnde Pulse (1s Takt), 2 Min Standard. Vor & nach Session
 * SUD-Skala (Subjective Units of Distress, 0–10) abfragen für Effekt-Tracking.
 */
export function ButterflyHug({ slug }: { slug: string }) {
  const { exerciseState, setExerciseBulk, loaded } = useModuleProgress(slug);
  const sessionsKey = "butterfly_sessions";
  const sudBeforeKey = "butterfly_sud_before";
  const sudAfterKey = "butterfly_sud_after";
  const sessions = (exerciseState[sessionsKey] as number) ?? 0;
  const sudBefore = (exerciseState[sudBeforeKey] as number | undefined) ?? undefined;
  const sudAfter = (exerciseState[sudAfterKey] as number | undefined) ?? undefined;

  const totalSeconds = 120;
  const [running, setRunning] = useState(false);
  const [secondsLeft, setSecondsLeft] = useState(totalSeconds);
  const [side, setSide] = useState<"L" | "R">("L");
  const tickRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    return () => {
      if (tickRef.current) clearInterval(tickRef.current);
    };
  }, []);

  const start = () => {
    setRunning(true);
    setSecondsLeft(totalSeconds);
    setSide("L");
    if (tickRef.current) clearInterval(tickRef.current);
    tickRef.current = setInterval(() => {
      setSide((s) => (s === "L" ? "R" : "L"));
      setSecondsLeft((s) => {
        if (s <= 1) {
          if (tickRef.current) clearInterval(tickRef.current);
          setRunning(false);
          setExerciseBulk({ [sessionsKey]: sessions + 1 });
          return 0;
        }
        return s - 1;
      });
    }, 1000);
  };
  const stop = () => {
    if (tickRef.current) clearInterval(tickRef.current);
    setRunning(false);
  };

  if (!loaded) return null;

  const mins = Math.floor(secondsLeft / 60);
  const secs = secondsLeft % 60;

  return (
    <ExerciseFrame
      title="Übung 3 · Butterfly Hug (EMDR-Selbstanwendung)"
      subtitle="Arme über der Brust gekreuzt, Fingerspitzen auf den Schultern. Klopfe im Takt der Pulse — denke dabei an die belastende Erinnerung. 2 Minuten."
      meta={`🦋 Bilaterale Stimulation · ${sessions}× absolviert`}
      accent="mauve"
      showSave={false}
    >
      {/* SUD vorher */}
      <SudPicker
        label="Belastung VORHER (0 = neutral, 10 = überwältigend)"
        value={sudBefore}
        onChange={(v) => setExerciseBulk({ [sudBeforeKey]: v })}
        accent="mauve"
      />

      {/* Animation */}
      <div className="relative grid h-32 place-items-center rounded-xl bg-gradient-to-r from-mauve/12 via-cream/60 to-mauve/12">
        <div className="flex w-full items-center justify-between px-8">
          <span
            className={`grid h-16 w-16 place-items-center rounded-full text-3xl transition-all duration-500 ${
              side === "L" && running
                ? "scale-110 bg-mauve text-white shadow-elegant"
                : "scale-90 bg-white/70 text-mauve/40"
            }`}
            aria-hidden
          >
            🦋
          </span>
          <div className="text-center">
            <p className="font-display text-3xl font-extrabold tabular-nums text-bordeaux">
              {mins}:{secs.toString().padStart(2, "0")}
            </p>
            <p className="text-[10px] font-semibold uppercase tracking-wider text-graphite/65">
              {running ? `${side === "L" ? "← Links" : "Rechts →"}` : "Bereit"}
            </p>
          </div>
          <span
            className={`grid h-16 w-16 place-items-center rounded-full text-3xl transition-all duration-500 ${
              side === "R" && running
                ? "scale-110 bg-mauve text-white shadow-elegant"
                : "scale-90 bg-white/70 text-mauve/40"
            }`}
            aria-hidden
          >
            🦋
          </span>
        </div>
      </div>

      <div className="flex justify-center">
        {running ? (
          <button
            type="button"
            onClick={stop}
            className="inline-flex items-center gap-1.5 rounded-full bg-bordeaux px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:opacity-90 active:scale-95"
          >
            <Pause className="h-4 w-4 fill-current" />
            Stoppen
          </button>
        ) : (
          <button
            type="button"
            onClick={start}
            className="inline-flex items-center gap-1.5 rounded-full bg-mauve px-4 py-2 text-sm font-semibold text-white shadow-soft transition hover:opacity-90 active:scale-95"
          >
            <Play className="h-4 w-4 fill-current" />
            2 Min starten
          </button>
        )}
      </div>

      {/* SUD nachher */}
      <SudPicker
        label="Belastung NACHHER"
        value={sudAfter}
        onChange={(v) => setExerciseBulk({ [sudAfterKey]: v })}
        accent="sage"
      />

      {sudBefore !== undefined && sudAfter !== undefined && (
        <div className="rounded-xl bg-sage/10 p-3 text-center text-xs text-graphite/85">
          Veränderung:{" "}
          <strong className="text-bordeaux">
            {sudBefore} → {sudAfter} ({sudAfter - sudBefore >= 0 ? "+" : ""}
            {sudAfter - sudBefore})
          </strong>
          {sudAfter < sudBefore && " · Dein Nervensystem hat reagiert. 💛"}
        </div>
      )}
    </ExerciseFrame>
  );
}

function SudPicker({
  label,
  value,
  onChange,
  accent,
}: {
  label: string;
  value: number | undefined;
  onChange: (v: number) => void;
  accent: "mauve" | "sage";
}) {
  const color = accent === "mauve" ? "var(--color-mauve)" : "var(--color-sage)";
  return (
    <div>
      <p className="mb-1.5 text-[11px] font-semibold uppercase tracking-wider text-graphite/70">
        {label}
      </p>
      <div className="flex flex-wrap gap-1">
        {Array.from({ length: 11 }).map((_, n) => {
          const on = value === n;
          return (
            <button
              key={n}
              type="button"
              onClick={() => onChange(n)}
              className="h-8 w-8 rounded-lg border-2 text-xs font-bold tabular-nums transition active:scale-95"
              style={{
                borderColor: on ? color : "rgba(0,0,0,0.1)",
                background: on ? color : "white",
                color: on ? "white" : "var(--color-graphite)",
              }}
              aria-pressed={on}
            >
              {n}
            </button>
          );
        })}
      </div>
    </div>
  );
}
