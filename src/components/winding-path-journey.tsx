import { useEffect, useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Check, Lock, Sparkles, ArrowUpRight } from "lucide-react";
import { JOURNEY_CHAPTERS, computeChapterState } from "@/lib/journey-goals";
import { useJourneyProgress } from "@/hooks/use-journey-progress";

/**
 * WindingPathJourney
 * ──────────────────────────────────────────────────────────────────────
 * Meditativer Heilungs-Pfad als organische SVG-Schlangenlinie.
 *
 * Layout:
 *  - Links (oder oben, mobile): Winding-Path mit 10 Knoten.
 *  - Rechts (oder unten, mobile): aktives Kapitel mit 3 Transformations-
 *    Zielen + Status-Logik.
 *
 * Zustands-Modell pro Kapitel:
 *   - locked       Vorgänger nicht 3/3 → graue Silhouette, Klick gesperrt.
 *   - in_progress  freigeschaltet, aber 0–2/3 → Bernstein-Hint auf
 *                  fehlende Ziele.
 *   - completed    3/3 → Segment leuchtet warm-golden, nächster Knoten
 *                  wird sichtbar.
 *
 * Persistenz: useJourneyProgress (localStorage, v1).
 */

// Knoten-Koordinaten in einem 400×900 viewBox.
// Wechseln links/rechts, um den meditativen Schlängel-Effekt zu erzeugen.
const NODE_POSITIONS: ReadonlyArray<{ x: number; y: number }> = [
  { x: 90, y: 60 },
  { x: 240, y: 140 },
  { x: 320, y: 260 },
  { x: 200, y: 360 },
  { x: 80, y: 460 },
  { x: 180, y: 560 },
  { x: 320, y: 640 },
  { x: 250, y: 740 },
  { x: 120, y: 800 },
  { x: 220, y: 870 },
];

function segmentPath(
  a: { x: number; y: number },
  b: { x: number; y: number },
) {
  // Smoother cubic mit Kontrollpunkten, die vertikal versetzt sind →
  // organischer Welleneindruck.
  const midY = (a.y + b.y) / 2;
  return `M ${a.x} ${a.y} C ${a.x} ${midY}, ${b.x} ${midY}, ${b.x} ${b.y}`;
}

export function WindingPathJourney() {
  const { goals, toggleGoal, loaded } = useJourneyProgress();
  const [activeIndex, setActiveIndex] = useState(0);

  // Initial: erstes offenes Kapitel als aktiv setzen
  useEffect(() => {
    if (!loaded) return;
    const firstOpen = JOURNEY_CHAPTERS.findIndex((c, i) => {
      const s = computeChapterState(i, goals);
      return s !== "completed";
    });
    if (firstOpen !== -1) setActiveIndex(firstOpen);
  }, [loaded]); // eslint-disable-line react-hooks/exhaustive-deps

  const chapterStates = useMemo(
    () => JOURNEY_CHAPTERS.map((_, i) => computeChapterState(i, goals)),
    [goals],
  );

  const completedCount = chapterStates.filter((s) => s === "completed").length;
  const activeChapter = JOURNEY_CHAPTERS[activeIndex];
  const activeState = chapterStates[activeIndex];
  const activeGoals = goals[activeChapter.slug] ?? [false, false, false];

  return (
    <section
      className="relative overflow-hidden rounded-3xl border border-sage/20 bg-gradient-to-br from-cream via-white/85 to-sage/8 shadow-soft animate-fade-in"
      aria-label="Dein Heilungs-Pfad"
    >
      {/* Header */}
      <div className="border-b border-sage/15 px-5 py-4 sm:px-6">
        <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-sage">
          · Dein Heilungs-Pfad ·
        </p>
        <div className="mt-1 flex items-baseline justify-between gap-3">
          <h2 className="font-display text-xl font-semibold text-bordeaux sm:text-2xl">
            Atme. Geh in deinem Tempo.
          </h2>
          <span className="rounded-full bg-sage/15 px-2.5 py-1 text-[11px] font-semibold text-sage">
            {completedCount} / {JOURNEY_CHAPTERS.length}
          </span>
        </div>
        <p className="mt-1 max-w-md text-[12.5px] leading-relaxed text-graphite/70">
          Jedes Kapitel hat drei stille Transformationsziele. Markiere, was für
          dich schon wahr ist — der Pfad leuchtet auf und das nächste Kapitel
          wird sichtbar.
        </p>
      </div>

      <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)]">
        {/* ─── SVG-PFAD ─── */}
        <div className="relative bg-gradient-to-b from-white/40 via-sage/5 to-mauve/5 p-3 sm:p-4">
          <svg
            viewBox="0 0 400 940"
            className="mx-auto block w-full max-w-[420px]"
            role="img"
            aria-label="Winding Path mit 10 Kapiteln"
          >
            <defs>
              <linearGradient id="completedGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="oklch(0.78 0.11 75)" />
                <stop offset="100%" stopColor="oklch(0.66 0.045 155)" />
              </linearGradient>
              <filter id="softGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Segmente zwischen den Knoten */}
            {NODE_POSITIONS.slice(0, -1).map((from, i) => {
              const to = NODE_POSITIONS[i + 1];
              const d = segmentPath(from, to);
              const fromState = chapterStates[i];
              const toState = chapterStates[i + 1];
              // Segment leuchtet nur, wenn das VORHERIGE Kapitel completed ist
              const lit = fromState === "completed";
              const halfLit =
                fromState === "completed" && toState !== "locked";
              return (
                <g key={i}>
                  {/* Locked-Silhouette immer als Grundschicht */}
                  <path
                    d={d}
                    fill="none"
                    stroke="oklch(0.85 0.02 60)"
                    strokeWidth={2}
                    strokeDasharray="2 6"
                    strokeLinecap="round"
                    opacity={0.55}
                  />
                  {/* Aufleuchtende Schicht */}
                  {lit && (
                    <path
                      d={d}
                      fill="none"
                      stroke="url(#completedGrad)"
                      strokeWidth={halfLit ? 3.2 : 3}
                      strokeLinecap="round"
                      filter="url(#softGlow)"
                      style={{
                        animation: "fade-in 0.8s ease-out both",
                      }}
                    />
                  )}
                </g>
              );
            })}

            {/* Knoten */}
            {NODE_POSITIONS.map((pos, i) => {
              const ch = JOURNEY_CHAPTERS[i];
              const state = chapterStates[i];
              const isActive = i === activeIndex;
              const checked = (goals[ch.slug] ?? [false, false, false]).filter(
                Boolean,
              ).length;

              const baseR = 18;
              const fill =
                state === "completed"
                  ? "url(#completedGrad)"
                  : state === "in_progress"
                    ? "oklch(0.985 0.012 78)"
                    : "oklch(0.92 0.018 65)";
              const stroke =
                state === "completed"
                  ? "oklch(0.66 0.045 155)"
                  : state === "in_progress"
                    ? "oklch(0.6 0.075 320)"
                    : "oklch(0.78 0.02 60)";

              return (
                <g
                  key={ch.slug}
                  className={state === "locked" ? "" : "cursor-pointer"}
                  onClick={() => {
                    if (state !== "locked") setActiveIndex(i);
                  }}
                  role={state === "locked" ? undefined : "button"}
                  aria-label={`Kapitel ${ch.number} – ${ch.title}`}
                >
                  {/* aktiver Halo */}
                  {isActive && state !== "locked" && (
                    <circle
                      cx={pos.x}
                      cy={pos.y}
                      r={baseR + 8}
                      fill="none"
                      stroke="oklch(0.6 0.075 320 / 0.45)"
                      strokeWidth={1.5}
                      style={{ animation: "fade-in 0.4s ease-out both" }}
                    />
                  )}
                  <circle
                    cx={pos.x}
                    cy={pos.y}
                    r={baseR}
                    fill={fill}
                    stroke={stroke}
                    strokeWidth={state === "completed" ? 2.5 : 2}
                    strokeDasharray={state === "locked" ? "3 3" : undefined}
                    opacity={state === "locked" ? 0.7 : 1}
                    filter={state === "completed" ? "url(#softGlow)" : undefined}
                  />
                  {state === "completed" ? (
                    <g transform={`translate(${pos.x - 7} ${pos.y - 7})`}>
                      <path
                        d="M2 8 L6 12 L13 3"
                        fill="none"
                        stroke="white"
                        strokeWidth={2.5}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </g>
                  ) : (
                    <text
                      x={pos.x}
                      y={pos.y + 4}
                      textAnchor="middle"
                      fontSize="12"
                      fontWeight="700"
                      fill={
                        state === "locked"
                          ? "oklch(0.55 0.015 60)"
                          : "var(--color-bordeaux)"
                      }
                      fontFamily="var(--font-display)"
                    >
                      {ch.number}
                    </text>
                  )}

                  {/* Label am Knoten */}
                  <text
                    x={pos.x < 200 ? pos.x + 28 : pos.x - 28}
                    y={pos.y + 4}
                    textAnchor={pos.x < 200 ? "start" : "end"}
                    fontSize="11"
                    fill={
                      state === "locked"
                        ? "oklch(0.55 0.015 60)"
                        : isActive
                          ? "var(--color-mauve)"
                          : "var(--color-graphite)"
                    }
                    fontWeight={isActive ? 600 : 500}
                    opacity={state === "locked" ? 0.55 : 0.9}
                  >
                    {ch.shortTitle}
                  </text>

                  {/* In-progress: kleiner Fortschritts-Ring */}
                  {state === "in_progress" && checked > 0 && (
                    <text
                      x={pos.x < 200 ? pos.x + 28 : pos.x - 28}
                      y={pos.y + 18}
                      textAnchor={pos.x < 200 ? "start" : "end"}
                      fontSize="9"
                      fill="oklch(0.78 0.11 75)"
                      fontWeight="600"
                    >
                      {checked}/3
                    </text>
                  )}
                </g>
              );
            })}
          </svg>
        </div>

        {/* ─── DETAIL-PANEL ─── */}
        <div className="border-t border-sage/15 p-5 sm:p-6 lg:border-l lg:border-t-0">
          <ChapterPanel
            chapter={activeChapter}
            state={activeState}
            checked={activeGoals}
            onToggle={(idx) => toggleGoal(activeChapter.slug, idx)}
          />
        </div>
      </div>
    </section>
  );
}

function ChapterPanel({
  chapter,
  state,
  checked,
  onToggle,
}: {
  chapter: (typeof JOURNEY_CHAPTERS)[number];
  state: "locked" | "in_progress" | "completed";
  checked: [boolean, boolean, boolean];
  onToggle: (idx: 0 | 1 | 2) => void;
}) {
  const checkedCount = checked.filter(Boolean).length;
  const missingCount = 3 - checkedCount;

  if (state === "locked") {
    return (
      <div className="flex h-full flex-col items-center justify-center gap-3 rounded-2xl border border-dashed border-graphite/20 bg-white/50 p-8 text-center">
        <span className="grid h-12 w-12 place-items-center rounded-full bg-graphite/10 text-graphite/60">
          <Lock className="h-5 w-5" />
        </span>
        <h3 className="font-display text-lg font-semibold text-graphite/70">
          {chapter.title}
        </h3>
        <p className="max-w-xs text-[12.5px] leading-relaxed text-graphite/55">
          Dieses Kapitel öffnet sich, sobald du im vorherigen alle drei Ziele
          markiert hast. Es eilt nichts.
        </p>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.24em] text-mauve">
            Kapitel {chapter.number}
          </p>
          <h3 className="mt-1 font-display text-xl font-semibold leading-tight text-bordeaux">
            {chapter.title}
          </h3>
        </div>
        {state === "completed" ? (
          <span className="inline-flex items-center gap-1 rounded-full bg-sage/15 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-wide text-sage">
            <Sparkles className="h-3 w-3" />
            Transformiert
          </span>
        ) : (
          <span className="rounded-full bg-mauve/15 px-2.5 py-1 text-[10.5px] font-semibold uppercase tracking-wide text-mauve">
            Du bist hier
          </span>
        )}
      </div>

      <p className="mt-3 text-[12.5px] leading-relaxed text-graphite/70">
        Drei stille Transformationsziele. Markiere, was schon wahr ist. Was
        noch fehlt, darf fehlen — der Pfad merkt sich deinen Stand.
      </p>

      <ul className="mt-4 space-y-2.5">
        {chapter.goals.map((goal, i) => {
          const isOn = checked[i];
          const isMissingHighlight = !isOn && checkedCount > 0 && state !== "completed";
          return (
            <li key={i}>
              <button
                type="button"
                onClick={() => onToggle(i as 0 | 1 | 2)}
                aria-pressed={isOn}
                className={`group flex w-full items-start gap-3 rounded-xl border-2 p-3 text-left transition-all duration-300 ${
                  isOn
                    ? "border-sage bg-sage/8 shadow-glass"
                    : isMissingHighlight
                      ? "border-warning/55 bg-warning/8"
                      : "border-sage/25 bg-white/70 hover:border-sage/55 hover:bg-white"
                }`}
              >
                <span
                  className={`mt-0.5 grid h-6 w-6 flex-shrink-0 place-items-center rounded-md border-2 transition ${
                    isOn
                      ? "border-sage bg-sage text-white"
                      : isMissingHighlight
                        ? "border-warning/70 bg-white"
                        : "border-sage/40 bg-white"
                  }`}
                >
                  {isOn && <Check className="h-3.5 w-3.5" />}
                </span>
                <span className="min-w-0 flex-1">
                  <span
                    className={`block text-[13px] leading-snug ${
                      isOn ? "font-medium text-bordeaux" : "text-graphite/85"
                    }`}
                  >
                    {goal}
                  </span>
                  {isMissingHighlight && (
                    <span className="mt-1 inline-block text-[10.5px] font-semibold uppercase tracking-wide text-warning">
                      Fehlt noch
                    </span>
                  )}
                </span>
              </button>
            </li>
          );
        })}
      </ul>

      <div className="mt-4 rounded-xl bg-white/60 p-3">
        {state === "completed" ? (
          <p className="text-[12px] leading-relaxed text-sage">
            ✦ Dieses Kapitel leuchtet jetzt auf deinem Pfad. Der nächste
            Knoten ist sichtbar.
          </p>
        ) : checkedCount === 0 ? (
          <p className="text-[12px] leading-relaxed text-graphite/65">
            Noch nichts markiert. Lies, fühle, kehre zurück — kein Druck.
          </p>
        ) : (
          <p className="text-[12px] leading-relaxed text-warning">
            Noch {missingCount} {missingCount === 1 ? "Ziel" : "Ziele"} bis
            dieses Kapitel auf deinem Pfad aufleuchtet.
          </p>
        )}
      </div>

      <Link
        to="/modul/$slug"
        params={{ slug: chapter.slug }}
        className="mt-3 inline-flex items-center justify-center gap-1.5 rounded-full bg-bordeaux px-4 py-2 text-[12px] font-semibold text-cream transition hover:opacity-90"
      >
        Zum Kapitel öffnen
        <ArrowUpRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  );
}
