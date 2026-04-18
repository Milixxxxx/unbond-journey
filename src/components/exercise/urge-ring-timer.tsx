import { useEffect, useRef, useState } from "react";
import { Pause, Play, RotateCcw } from "lucide-react";
import { ExerciseFrame, type ExerciseAccent } from "./exercise-frame";

/**
 * Variant A · Live-Ring-Timer (für akute Übungen wie Urge Surfing).
 * Visualisiert die laufende Sekunde als ringförmigen Fortschritt.
 */
export function UrgeRingTimer({
  title,
  subtitle,
  meta,
  accent = "mauve",
  totalSeconds = 20 * 60,
  cueText = "Atmen · Beobachten · Nicht handeln",
}: {
  title: string;
  subtitle?: string;
  meta?: string;
  accent?: ExerciseAccent;
  totalSeconds?: number;
  cueText?: string;
}) {
  const [seconds, setSeconds] = useState(totalSeconds);
  const [running, setRunning] = useState(false);
  const ref = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (running) {
      ref.current = setInterval(() => {
        setSeconds((s) => {
          if (s <= 1) {
            setRunning(false);
            return 0;
          }
          return s - 1;
        });
      }, 1000);
    }
    return () => {
      if (ref.current) clearInterval(ref.current);
    };
  }, [running]);

  const m = Math.floor(seconds / 60);
  const s = seconds % 60;
  const pct = ((totalSeconds - seconds) / totalSeconds) * 100;
  const SIZE = 168;
  const STROKE = 12;
  const R = (SIZE - STROKE) / 2;
  const C = 2 * Math.PI * R;
  const offset = C * (1 - pct / 100);

  return (
    <ExerciseFrame title={title} subtitle={subtitle} meta={meta} accent={accent} showSave={false}>
      <div className="flex flex-col items-center gap-4">
        <div className="relative" style={{ width: SIZE, height: SIZE }}>
          <svg width={SIZE} height={SIZE} className="rotate-[-90deg]">
            <circle
              cx={SIZE / 2}
              cy={SIZE / 2}
              r={R}
              stroke="oklch(0.78 0.035 155 / 0.3)"
              strokeWidth={STROKE}
              fill="none"
            />
            <circle
              cx={SIZE / 2}
              cy={SIZE / 2}
              r={R}
              stroke="var(--color-mauve)"
              strokeWidth={STROKE}
              fill="none"
              strokeDasharray={C}
              strokeDashoffset={offset}
              strokeLinecap="round"
              style={{ transition: "stroke-dashoffset 0.6s linear" }}
            />
          </svg>
          <div className="absolute inset-0 grid place-items-center">
            <div className="text-center">
              <p className="font-display text-3xl font-extrabold text-bordeaux tabular-nums">
                {String(m).padStart(2, "0")}:{String(s).padStart(2, "0")}
              </p>
              <p className="text-[10px] uppercase tracking-wider text-mauve">verbleibend</p>
            </div>
          </div>
        </div>
        <p className="text-center text-xs italic text-graphite/70">{cueText}</p>
        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => setRunning((r) => !r)}
            className="grid h-12 w-12 place-items-center rounded-full bg-bordeaux text-white shadow-soft transition active:scale-95"
            aria-label={running ? "Pause" : "Start"}
          >
            {running ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </button>
          <button
            type="button"
            onClick={() => {
              setRunning(false);
              setSeconds(totalSeconds);
            }}
            className="grid h-12 w-12 place-items-center rounded-full border-2 border-bordeaux/30 bg-white text-bordeaux transition active:scale-95"
            aria-label="Zurücksetzen"
          >
            <RotateCcw className="h-5 w-5" />
          </button>
        </div>
      </div>
    </ExerciseFrame>
  );
}
