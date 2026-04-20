import { useEffect, useRef, useState } from "react";
import { Play, RotateCcw, Pause, Zap, Heart } from "lucide-react";

/**
 * AttachmentDance · Didaktische Visualisierung des Anxious-Avoidant-Tanzes.
 *
 * 6-Phasen-Choreografie (korrigiert nach User-Feedback):
 *   1. Nähe         – beide eng beieinander, Herz pulsiert
 *   2. Rückzug      – Sandra weicht grundlos zurück
 *   3. Klammern     – Mary greift panisch nach, Sandra weicht weiter
 *   4. Knall        – Blitz, Sandra verschwindet, Beziehung explodiert
 *   5. Leere        – Mary allein, Wochen vergehen
 *   6. Hoover       – Sandra kommt zurück, Spiel beginnt von vorne
 *
 * Auto-Pause nach 2 vollen Loops. Replay-Button setzt zurück.
 * Reines CSS / SVG, keine externe Animations-Lib.
 */
export function AttachmentDance() {
  const [phase, setPhase] = useState<0 | 1 | 2 | 3 | 4 | 5>(0);
  const [playing, setPlaying] = useState(true);
  const [loops, setLoops] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!playing) return;
    timer.current = setInterval(() => {
      setPhase((p) => {
        const next = ((p + 1) % 6) as 0 | 1 | 2 | 3 | 4 | 5;
        if (next === 0) {
          setLoops((l) => {
            const nl = l + 1;
            if (nl >= 2) setPlaying(false);
            return nl;
          });
        }
        return next;
      });
    }, 2400);
    return () => {
      if (timer.current) clearInterval(timer.current);
    };
  }, [playing]);

  const reset = () => {
    setPhase(0);
    setLoops(0);
    setPlaying(true);
  };

  const phaseLabel = [
    "1 · Nähe · Honeymoon. Beide ganz dicht.",
    "2 · Sandra weicht zurück · grundlos, kalt",
    "3 · Mary klammert · Panik flutet, sie greift nach",
    "4 · Knall · Sandra verschwindet · Beziehung aus",
    "5 · Leere · Wochen vergehen · Mary allein",
    "6 · Hoover · Sandra kommt zurück · von vorn",
  ][phase];

  // Positions per phase (percentage from left)
  // Phase: 0=Nähe  1=Rückzug  2=Klammern  3=Knall  4=Leere  5=Hoover
  const maryPos = [45, 38, 32, 30, 50, 42][phase];
  const sandraPos = [55, 70, 80, 95, 110, 60][phase];
  const sandraOpacity = [1, 0.85, 0.6, 0.2, 0, 0.9][phase];
  const maryPulse = phase === 2;
  const showLightning = phase === 3;
  const showHeart = phase === 0;
  const showHoover = phase === 5;
  const maryScale = phase === 4 ? 0.85 : 1;
  const maryOpacity = phase === 4 ? 0.55 : 1;

  return (
    <div
      className="rounded-2xl bg-white/80 p-5 shadow-soft sm:p-6"
      style={{ borderLeft: "5px solid var(--color-mauve)" }}
    >
      <div className="flex flex-wrap items-start justify-between gap-3">
        <div>
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-mauve">
            Mary ↔ Sandra · Der Tanz
          </p>
          <h3 className="mt-1 font-display text-base font-bold text-bordeaux sm:text-lg">
            Anxious-Avoidant-Trap visualisiert
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setPlaying((p) => !p)}
            className="inline-flex items-center gap-1.5 rounded-md border border-mauve/30 bg-white/80 px-2.5 py-1.5 text-[11px] font-semibold text-mauve transition hover:bg-mauve/10"
            aria-label={playing ? "Pause" : "Play"}
          >
            {playing ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
            {playing ? "Pause" : "Play"}
          </button>
          <button
            type="button"
            onClick={reset}
            className="inline-flex items-center gap-1.5 rounded-md border border-bordeaux/30 bg-white/80 px-2.5 py-1.5 text-[11px] font-semibold text-bordeaux transition hover:bg-bordeaux/10"
          >
            <RotateCcw className="h-3 w-3" />
            Replay
          </button>
        </div>
      </div>

      {/* Bühne */}
      <div className="relative mt-5 h-44 overflow-hidden rounded-xl bg-gradient-to-r from-bordeaux/8 via-cream/60 to-mauve/8">
        {/* Herz bei Phase 0 (Nähe) */}
        {showHeart && (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-[200%] animate-pulse text-bordeaux/70">
            <Heart className="h-5 w-5 fill-current" />
          </div>
        )}

        {/* Blitz bei Phase 3 (Knall) */}
        {showLightning && (
          <div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-bordeaux"
            style={{ animation: "pulse 0.4s ease-in-out infinite" }}
          >
            <Zap className="h-14 w-14 fill-current drop-shadow-[0_0_12px_rgba(122,47,68,0.6)]" />
          </div>
        )}

        {/* Hoover-Pfeil bei Phase 5 */}
        {showHoover && (
          <div className="absolute right-4 top-3 text-[10px] font-semibold uppercase tracking-wider text-mauve/80">
            ← „Ich vermisse dich"
          </div>
        )}

        {/* Mary */}
        <div
          className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-[2000ms] ease-in-out"
          style={{
            left: `${maryPos}%`,
            opacity: maryOpacity,
            transform: `translate(-50%, -50%) scale(${maryScale})`,
          }}
        >
          <div
            className={`grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-bordeaux to-mauve text-white shadow-elegant ${
              maryPulse ? "animate-pulse" : ""
            }`}
            style={{
              boxShadow: maryPulse
                ? "0 0 0 0 rgba(122,47,68,0.5), 0 0 30px 10px rgba(122,47,68,0.35)"
                : undefined,
            }}
          >
            <div className="text-center">
              <div className="font-display text-base font-bold leading-none">M</div>
              <div className="mt-1 text-[8px] font-semibold uppercase tracking-wider opacity-90">
                anxious
              </div>
            </div>
          </div>
        </div>

        {/* Sandra */}
        <div
          className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-[2000ms] ease-in-out"
          style={{ left: `${sandraPos}%`, opacity: sandraOpacity }}
        >
          <div className="grid h-20 w-20 place-items-center rounded-full border-2 border-graphite/40 bg-white/70 text-graphite shadow-soft backdrop-blur">
            <div className="text-center">
              <div className="font-display text-base font-bold leading-none">S</div>
              <div className="mt-1 text-[8px] font-semibold uppercase tracking-wider opacity-70">
                avoidant
              </div>
            </div>
          </div>
        </div>

        {/* Phasen-Indikator */}
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
          <div className="flex gap-1.5">
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <span
                key={i}
                className={`h-1.5 w-5 rounded-full transition-colors ${
                  i === phase ? "bg-bordeaux" : "bg-bordeaux/15"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <p className="mt-3 text-center text-sm font-medium text-bordeaux">{phaseLabel}</p>

      {!playing && loops >= 2 && (
        <p className="mt-2 text-center text-xs italic text-graphite/65">
          2 Durchläufe gesehen. Drück Replay, wenn du es noch einmal brauchst —
          oder lass es ruhen. Du hast den Tanz erkannt. Das reicht.
        </p>
      )}
    </div>
  );
}
