import { useEffect, useRef, useState } from "react";
import { Play, RotateCcw, Pause, Heart } from "lucide-react";

/**
 * AttachmentDance · Didaktische Visualisierung des Anxious-Avoidant-Tanzes.
 *
 * 8-Phasen-Choreografie (nach User-Feedback v3):
 *   0. Nähe          – beide dicht beieinander, Herz darüber
 *   1. Sandra weicht – Sandra geht zurück, Mary bleibt stehen
 *   2. Mary folgt    – Mary geht auf Sandra zu, kommt nah ran
 *   3. Sandra weicht erneut zurück, Mary hinterher
 *   4. Sandra verschwindet aus dem Bild (Beziehungsende)
 *   5. Mary allein   – Wochen vergehen
 *   6. Sandra taucht wieder am Rand auf
 *   7. Sandra bewegt sich auf Mary zu (Hoover, Kreislauf neu)
 *
 * Auto-Pause nach 2 vollen Loops. Replay-Button setzt zurück.
 */
type Phase = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7;

export function AttachmentDance() {
  const [phase, setPhase] = useState<Phase>(0);
  const [playing, setPlaying] = useState(true);
  const [loops, setLoops] = useState(0);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (!playing) return;
    timer.current = setInterval(() => {
      setPhase((p) => {
        const next = ((p + 1) % 8) as Phase;
        if (next === 0) {
          setLoops((l) => {
            const nl = l + 1;
            if (nl >= 2) setPlaying(false);
            return nl;
          });
        }
        return next;
      });
    }, 2600);
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
    "2 · Sandra weicht zurück · grundlos. Mary bleibt stehen.",
    "3 · Mary geht auf Sandra zu · sucht Nähe",
    "4 · Sandra weicht erneut · Mary hinterher",
    "5 · Sandra verschwindet · Beziehung aus",
    "6 · Mary allein · Wochen vergehen",
    "7 · Sandra taucht wieder auf · am Rand",
    "8 · Hoover · Sandra kommt zurück · Kreislauf neu",
  ][phase];

  // Positionen in % (left). 50% = Mitte. <0 oder >100 = außerhalb.
  //                phase:     0    1    2    3    4    5    6    7
  const maryPositions =     [44,  44,  55,  68,  68,  50,  50,  45];
  const sandraPositions =   [56,  72,  72,  85, 115, 115, 105,  60];
  const sandraOpacityArr =  [ 1,   1,   1,   1,   0,   0,   1,   1];
  const maryPos = maryPositions[phase];
  const sandraPos = sandraPositions[phase];
  const sandraOpacity = sandraOpacityArr[phase];

  const showHeart = phase === 0;
  const maryAlone = phase === 5;

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
      <div className="relative mt-5 h-48 overflow-hidden rounded-xl bg-gradient-to-r from-bordeaux/8 via-cream/60 to-mauve/8">
        {/* Herz bei Phase 0 (Nähe) — über den beiden Kreisen */}
        {showHeart && (
          <div
            className="absolute z-10 -translate-x-1/2 text-bordeaux"
            style={{
              left: `${(maryPos + sandraPos) / 2}%`,
              top: "12%",
              animation: "pulse 1.2s ease-in-out infinite",
            }}
          >
            <Heart className="h-7 w-7 fill-current drop-shadow-[0_0_10px_rgba(122,47,68,0.4)]" />
          </div>
        )}

        {/* "allein" Hinweis bei Phase 5 */}
        {maryAlone && (
          <div className="absolute right-4 top-3 text-[10px] font-semibold uppercase tracking-wider text-graphite/60">
            Wochen vergehen…
          </div>
        )}

        {/* Hoover-Hinweis bei Phase 6 */}
        {phase === 6 && (
          <div className="absolute right-4 top-3 text-[10px] font-semibold uppercase tracking-wider text-mauve/80">
            ← „Ich vermisse dich"
          </div>
        )}

        {/* Mary */}
        <div
          className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-[2200ms] ease-in-out"
          style={{ left: `${maryPos}%` }}
        >
          <div className="grid h-20 w-20 place-items-center rounded-full bg-gradient-to-br from-bordeaux to-mauve text-white shadow-elegant">
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
          className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 transition-all duration-[2200ms] ease-in-out"
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
            {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
              <span
                key={i}
                className={`h-1.5 w-4 rounded-full transition-colors ${
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
