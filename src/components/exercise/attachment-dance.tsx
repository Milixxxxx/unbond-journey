import { useEffect, useRef, useState } from "react";
import { Play, RotateCcw, Pause } from "lucide-react";

/**
 * AttachmentDance · Didaktische Visualisierung des Anxious-Avoidant-Tanzes.
 *
 * Zwei Kreise (Mary anxious, links · Sandra avoidant, rechts) bewegen sich
 * in einer 4-Phasen-Choreografie:
 *   1. Annäherung      – Mary sucht Nähe
 *   2. Rückzug          – Sandra weicht aus
 *   3. Protest          – Mary eskaliert (Pulsation)
 *   4. Erstarrung       – beide frieren ein → Reset
 *
 * Auto-Pause nach 3 Loops (sonst überfordernd, vor allem bei aktiv
 * Triggerten Leserinnen). Replay-Button setzt zurück.
 *
 * Reines CSS / SVG, keine externe Animations-Lib.
 */
export function AttachmentDance() {
  const [phase, setPhase] = useState<0 | 1 | 2 | 3>(0);
  const [playing, setPlaying] = useState(true);
  const [loops, setLoops] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!playing) return;
    timer.current = setInterval(() => {
      setPhase((p) => {
        const next = ((p + 1) % 4) as 0 | 1 | 2 | 3;
        if (next === 0) {
          setLoops((l) => {
            const nl = l + 1;
            if (nl >= 3) setPlaying(false);
            return nl;
          });
        }
        return next;
      });
    }, 2200);
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
    "1 · Mary sucht Nähe",
    "2 · Sandra weicht aus",
    "3 · Mary protestiert · Panik flutet",
    "4 · Beide erstarren · Stille brennt",
  ][phase];

  // Positions per phase (percentage from left)
  const maryPos = [38, 28, 22, 25][phase];
  const sandraPos = [62, 75, 82, 78][phase];
  const sandraOpacity = [1, 0.85, 0.55, 0.35][phase];
  const maryPulse = phase === 2;

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
        {/* Mary */}
        <div
          className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-[1800ms] ease-in-out"
          style={{ left: `${maryPos}%` }}
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
          className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-[1800ms] ease-in-out"
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
            {[0, 1, 2, 3].map((i) => (
              <span
                key={i}
                className={`h-1.5 w-6 rounded-full transition-colors ${
                  i === phase ? "bg-bordeaux" : "bg-bordeaux/15"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      <p className="mt-3 text-center text-sm font-medium text-bordeaux">{phaseLabel}</p>

      {!playing && loops >= 3 && (
        <p className="mt-2 text-center text-xs italic text-graphite/65">
          3 Durchläufe gesehen. Drück Replay, wenn du es noch einmal brauchst —
          oder lass es ruhen. Du hast den Tanz erkannt. Das reicht.
        </p>
      )}
    </div>
  );
}
