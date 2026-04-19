import { useEffect, useRef, useState } from "react";
import { Pause, Play, RotateCcw, Waves } from "lucide-react";
import { ExerciseFrame, type ExerciseAccent } from "./exercise-frame";

/**
 * Vibe-Check · Urge-Surf-Wave (90 Sekunden)
 * Animierte SVG-Welle, die die Craving-Kurve visualisiert: aufsteigen,
 * Höhepunkt, abklingen. Gedacht als Begleiter zum Übung 3 "Urge-Surfing-Protokoll".
 *
 * Designprinzip: KEINE Farbexplosion. Eine ruhige Welle in mauve, ein gleitender
 * Cursor zeigt deinen Standort auf der Welle. Botschaft: "Der Drang steigt – und
 * fällt. Du musst nichts tun."
 */
export function UrgeSurfWave({
  totalSeconds = 90,
  accent = "mauve",
}: {
  totalSeconds?: number;
  accent?: ExerciseAccent;
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

  // Welle: y = peak * sin(pi * t / total). Höhepunkt bei 50%.
  const W = 320;
  const H = 120;
  const PAD = 12;
  const points: string[] = [];
  const STEPS = 64;
  for (let i = 0; i <= STEPS; i++) {
    const t = i / STEPS;
    const x = PAD + t * (W - 2 * PAD);
    const y = H - PAD - Math.sin(Math.PI * t) * (H - 2 * PAD);
    points.push(`${x.toFixed(1)},${y.toFixed(1)}`);
  }
  const path = `M ${points.join(" L ")}`;
  const closed = `${path} L ${W - PAD},${H - PAD} L ${PAD},${H - PAD} Z`;

  const progress = totalSeconds === 0 ? 0 : seconds / totalSeconds;
  const cursorX = PAD + progress * (W - 2 * PAD);
  const cursorY = H - PAD - Math.sin(Math.PI * progress) * (H - 2 * PAD);

  const phase =
    progress === 0
      ? "Bereit · Atme ein."
      : progress < 0.45
        ? "Die Welle steigt. Beobachte. Nicht handeln."
        : progress < 0.6
          ? "Höhepunkt. Du musst nichts tun – sie kippt von selbst."
          : progress < 1
            ? "Sie zieht ab. Spürst du den Unterschied?"
            : "Vorbei. Du hast nicht gehandelt – und überlebt.";

  const m = Math.floor((totalSeconds - seconds) / 60);
  const s = (totalSeconds - seconds) % 60;

  return (
    <ExerciseFrame
      title="Vibe-Check · Surf die Welle"
      subtitle="90 Sekunden Urge Surfing in Echtzeit. Beobachte den Drang, ohne ihm zu folgen."
      meta="🌊 Marlatt & Gordon · Beobachten statt handeln"
      accent={accent}
      showSave={false}
    >
      <div className="flex flex-col items-center gap-3">
        <div className="relative w-full overflow-hidden rounded-xl bg-gradient-to-b from-cream/40 to-mauve/8 p-3">
          <svg
            viewBox={`0 0 ${W} ${H}`}
            className="h-32 w-full"
            preserveAspectRatio="none"
            aria-hidden
          >
            <defs>
              <linearGradient id="wave-fill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--color-mauve)" stopOpacity="0.45" />
                <stop offset="100%" stopColor="var(--color-mauve)" stopOpacity="0.05" />
              </linearGradient>
            </defs>
            {/* Wasserlinie */}
            <line
              x1={PAD}
              y1={H - PAD}
              x2={W - PAD}
              y2={H - PAD}
              stroke="var(--color-sage)"
              strokeOpacity={0.35}
              strokeDasharray="3 4"
            />
            {/* Welle */}
            <path d={closed} fill="url(#wave-fill)" />
            <path
              d={path}
              fill="none"
              stroke="var(--color-mauve)"
              strokeWidth={2.5}
              strokeLinecap="round"
            />
            {/* Surfer-Punkt */}
            <circle
              cx={cursorX}
              cy={cursorY}
              r={7}
              fill="var(--color-bordeaux)"
              stroke="white"
              strokeWidth={2.5}
              style={{ transition: "cx 0.95s linear, cy 0.95s linear" }}
            />
          </svg>
          <div className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-white/85 px-2 py-0.5 text-[10px] font-semibold text-bordeaux backdrop-blur">
            <Waves className="h-3 w-3" />
            {String(m).padStart(2, "0")}:{String(s).padStart(2, "0")}
          </div>
        </div>

        <p className="text-center text-sm italic text-graphite/80">{phase}</p>

        <div className="flex gap-3">
          <button
            type="button"
            onClick={() => {
              if (seconds >= totalSeconds) setSeconds(0);
              setRunning((r) => !r);
            }}
            className="grid h-12 w-12 place-items-center rounded-full bg-bordeaux text-white shadow-soft transition active:scale-95"
            aria-label={running ? "Pause" : "Start"}
          >
            {running ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
          </button>
          <button
            type="button"
            onClick={() => {
              setRunning(false);
              setSeconds(0);
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
