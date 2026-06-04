import { useEffect, useRef, useState } from "react";
import { Play, RotateCcw, CheckCircle2 } from "lucide-react";

/**
 * HighLoadDistraction – Working-Memory-Overload Timer.
 * 90 Sekunden, drei kognitiv anspruchsvolle Aufgaben parallel.
 * Visualisierung: drei rotierende Aufgaben + zentrale Sekundenanzeige.
 */
const TASKS = [
  "Buchstabiere deine Lieblings-Eissorte rückwärts.",
  "Gehe gedanklich durch deinen Lieblings-Supermarkt und zähle alle Regale bis zur Kasse.",
  "Zähle rückwärts von 200 in 7er-Schritten und zähle dabei alle roten Gegenstände im Raum.",
];

export function HighLoadDistraction({
  totalSeconds = 90,
}: {
  totalSeconds?: number;
}) {
  const [seconds, setSeconds] = useState(0);
  const [running, setRunning] = useState(false);
  const ref = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (running) {
      ref.current = setInterval(() => {
        setSeconds((s) => {
          if (s >= totalSeconds) {
            setRunning(false);
            return totalSeconds;
          }
          return s + 1;
        });
      }, 1000);
    }
    return () => {
      if (ref.current) clearInterval(ref.current);
    };
  }, [running, totalSeconds]);

  const done = seconds >= totalSeconds;
  const pct = Math.round((seconds / totalSeconds) * 100);

  return (
    <div className="rounded-2xl border border-bordeaux/20 bg-white/70 p-5">
      <div className="mb-4 flex items-center justify-between">
        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-bordeaux">
          90 Sekunden · 3 Aufgaben parallel
        </span>
        <span className="font-display text-2xl font-extrabold text-bordeaux tabular-nums">
          {Math.max(0, totalSeconds - seconds)}s
        </span>
      </div>

      <ol className="space-y-2.5">
        {TASKS.map((t, i) => (
          <li
            key={i}
            className="flex gap-3 rounded-xl border-l-4 border-bordeaux/40 bg-bordeaux/5 p-3 text-sm leading-relaxed text-graphite/90"
          >
            <span className="grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-bordeaux text-xs font-bold text-cream">
              {i + 1}
            </span>
            <span>{t}</span>
          </li>
        ))}
      </ol>

      <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-bordeaux/15">
        <div
          className="h-full bg-bordeaux transition-all duration-500"
          style={{ width: `${pct}%` }}
        />
      </div>

      <div className="mt-4 flex flex-wrap items-center gap-2">
        {!done ? (
          <button
            type="button"
            onClick={() => setRunning((r) => !r)}
            className="inline-flex items-center gap-1.5 rounded-full bg-bordeaux px-4 py-2 text-xs font-semibold text-cream transition hover:opacity-90"
          >
            <Play className="h-3.5 w-3.5" />
            {running ? "Pause" : seconds > 0 ? "Weiter" : "Starten"}
          </button>
        ) : (
          <span className="inline-flex items-center gap-1.5 rounded-full bg-[color:var(--color-sage)]/20 px-4 py-2 text-xs font-semibold text-[color:var(--color-sage)]">
            <CheckCircle2 className="h-3.5 w-3.5" />
            Geschafft — deine Welle ist vorbei.
          </span>
        )}
        {seconds > 0 && (
          <button
            type="button"
            onClick={() => {
              setRunning(false);
              setSeconds(0);
            }}
            className="inline-flex items-center gap-1.5 rounded-full border border-bordeaux/30 px-3 py-2 text-xs font-medium text-bordeaux/80 transition hover:bg-bordeaux/5"
          >
            <RotateCcw className="h-3.5 w-3.5" />
            Zurücksetzen
          </button>
        )}
      </div>
    </div>
  );
}
