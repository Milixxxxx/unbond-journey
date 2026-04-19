import { useMemo } from "react";
import { Compass, Sparkles } from "lucide-react";
import { useModuleProgress } from "@/hooks/use-module-progress";
import { ExerciseFrame, type ExerciseAccent } from "./exercise-frame";

/**
 * ValueCompass · Interaktiver Werte-Radar (6 Lebensbereiche).
 *
 * Jeder Bereich hat einen Slider 0–10 ("Wie gut lebst du diesen Wert HEUTE?")
 * und ein Mini-Ziel-Textfeld ("Ein kleiner Schritt diese Woche").
 * Visuell: animiertes SVG-Hexagon-Polygon, das sich live mit den Slidern verformt —
 * der Kompass wird zum Spiegel des eigenen Lebens.
 *
 * Persistiert unter exerciseState[storageKey] = { values: {id:0-10}, goals: {id:string} }.
 *
 * Quelle: ACT-Werteklärung (Hayes, Strosahl & Wilson, 2006) +
 *         Self-Expansion Model (Aron & Aron, 1986).
 */

export type ValueArea = {
  id: string;
  emoji: string;
  label: string;
  hint?: string;
};

const DEFAULT_AREAS: ValueArea[] = [
  { id: "liebe", emoji: "❤️", label: "Liebe & Nähe", hint: "Echte Verbundenheit, nicht Abhängigkeit" },
  { id: "koerper", emoji: "🌿", label: "Körper & Energie", hint: "Schlaf, Bewegung, Essen, Atem" },
  { id: "freiheit", emoji: "🔓", label: "Freiheit & Autonomie", hint: "Eigene Entscheidungen ohne Angst" },
  { id: "kreativitaet", emoji: "🎨", label: "Kreativität & Ausdruck", hint: "Was du machst, weil du es liebst" },
  { id: "familie", emoji: "💜", label: "Familie & Freundschaft", hint: "Menschen, die dich nähren" },
  { id: "wachstum", emoji: "🌱", label: "Wachstum & Sinn", hint: "Lernen, Werte, größerer Kontext" },
];

type Saved = {
  values?: Record<string, number>;
  goals?: Record<string, string>;
};

export function ValueCompass({
  slug,
  storageKey = "value_compass",
  title = "Übung · Mein Werte-Kompass",
  subtitle = "Wo lebst du heute schon im Einklang mit dir? Wo nicht? Zieh die Regler ehrlich – und formuliere für jeden Bereich einen winzigen, konkreten nächsten Schritt.",
  meta = "🧭 Live-Radar · ~10 Min · Wird automatisch gespeichert",
  accent = "bordeaux",
  areas = DEFAULT_AREAS,
}: {
  slug: string;
  storageKey?: string;
  title?: string;
  subtitle?: string;
  meta?: string;
  accent?: ExerciseAccent;
  areas?: ValueArea[];
}) {
  const { exerciseState, setExercise, loaded } = useModuleProgress(slug);

  const saved: Saved = exerciseState[storageKey] ?? {};
  const values: Record<string, number> = saved.values ?? {};
  const goals: Record<string, string> = saved.goals ?? {};

  const setValue = (id: string, v: number) =>
    setExercise(storageKey, { ...saved, values: { ...values, [id]: v } });
  const setGoal = (id: string, text: string) =>
    setExercise(storageKey, { ...saved, goals: { ...goals, [id]: text } });

  // Polygon-Punkte berechnen (6 Achsen, 0=Zentrum, 10=Außenring)
  const center = 200;
  const maxR = 150;
  const points = useMemo(() => {
    return areas
      .map((a, i) => {
        const v = values[a.id] ?? 5;
        const r = (v / 10) * maxR;
        const angle = (Math.PI * 2 * i) / areas.length - Math.PI / 2;
        const x = center + Math.cos(angle) * r;
        const y = center + Math.sin(angle) * r;
        return `${x.toFixed(1)},${y.toFixed(1)}`;
      })
      .join(" ");
  }, [areas, values]);

  // Label-Positionen (etwas außerhalb des Außenrings)
  const labelPositions = useMemo(() => {
    return areas.map((a, i) => {
      const angle = (Math.PI * 2 * i) / areas.length - Math.PI / 2;
      return {
        x: center + Math.cos(angle) * (maxR + 30),
        y: center + Math.sin(angle) * (maxR + 30),
      };
    });
  }, [areas]);

  if (!loaded) return null;

  const avg =
    areas.reduce((acc, a) => acc + (values[a.id] ?? 5), 0) / areas.length;

  return (
    <ExerciseFrame
      title={title}
      subtitle={subtitle}
      meta={meta}
      accent={accent}
      icon={<Compass className="h-4 w-4" />}
    >
      {/* Live-Radar */}
      <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] sm:items-center">
        <div className="relative mx-auto w-full max-w-[340px]">
          <svg viewBox="0 0 400 400" className="h-auto w-full">
            {/* Konzentrische Ringe */}
            {[0.33, 0.66, 1].map((s) => (
              <circle
                key={s}
                cx={center}
                cy={center}
                r={maxR * s}
                fill="none"
                stroke="currentColor"
                className="text-bordeaux/15"
                strokeWidth={1}
              />
            ))}
            {/* Achsen */}
            {areas.map((_, i) => {
              const angle = (Math.PI * 2 * i) / areas.length - Math.PI / 2;
              const x = center + Math.cos(angle) * maxR;
              const y = center + Math.sin(angle) * maxR;
              return (
                <line
                  key={i}
                  x1={center}
                  y1={center}
                  x2={x}
                  y2={y}
                  stroke="currentColor"
                  className="text-bordeaux/12"
                  strokeWidth={1}
                />
              );
            })}
            {/* Live-Polygon */}
            <polygon
              points={points}
              fill="var(--color-mauve)"
              fillOpacity={0.22}
              stroke="var(--color-bordeaux)"
              strokeWidth={2.5}
              style={{ transition: "all 250ms ease-out" }}
            />
            {/* Punkte auf Achsen */}
            {areas.map((a, i) => {
              const v = values[a.id] ?? 5;
              const r = (v / 10) * maxR;
              const angle = (Math.PI * 2 * i) / areas.length - Math.PI / 2;
              const x = center + Math.cos(angle) * r;
              const y = center + Math.sin(angle) * r;
              return (
                <circle
                  key={a.id}
                  cx={x}
                  cy={y}
                  r={5}
                  fill="var(--color-bordeaux)"
                  style={{ transition: "all 250ms ease-out" }}
                />
              );
            })}
            {/* Achsenlabels (Emojis) */}
            {areas.map((a, i) => (
              <text
                key={a.id}
                x={labelPositions[i].x}
                y={labelPositions[i].y}
                textAnchor="middle"
                dominantBaseline="middle"
                fontSize={20}
              >
                {a.emoji}
              </text>
            ))}
          </svg>
          <div className="pointer-events-none absolute inset-0 grid place-items-center">
            <div className="rounded-full bg-white/85 px-2.5 py-1 text-center shadow-soft backdrop-blur">
              <p className="text-[9px] font-semibold uppercase tracking-widest text-mauve">
                Schnitt
              </p>
              <p className="font-display text-base font-bold text-bordeaux">
                {avg.toFixed(1)} <span className="text-xs text-graphite/60">/ 10</span>
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <p className="text-xs leading-relaxed text-graphite/75">
            Je weiter ein Punkt am Rand sitzt, desto mehr lebst du diesen Wert
            <em> heute</em>. Es geht nicht um „gut" oder „schlecht" – nur um
            ehrliche Wahrnehmung. Deine Form darf alles sein.
          </p>
          <div className="rounded-xl border-l-4 border-mauve bg-mauve/8 p-3 text-xs leading-relaxed text-graphite/80">
            <strong className="text-mauve">Tipp einer Freundin:</strong> Wähle
            unten <em>einen</em> Bereich mit dem niedrigsten Wert – und schreib
            dort einen Mikro-Schritt rein, den du diese Woche machst. Nicht
            mehr. Sonst wird's wieder Druck.
          </div>
        </div>
      </div>

      {/* Slider + Mini-Ziel pro Bereich */}
      <ul className="mt-5 space-y-3">
        {areas.map((a) => {
          const v = values[a.id] ?? 5;
          return (
            <li
              key={a.id}
              className="rounded-xl bg-white/70 p-3 shadow-soft sm:p-4"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-xl" aria-hidden>
                    {a.emoji}
                  </span>
                  <div>
                    <p className="font-display text-sm font-bold text-bordeaux">
                      {a.label}
                    </p>
                    {a.hint && (
                      <p className="text-[11px] text-graphite/60">{a.hint}</p>
                    )}
                  </div>
                </div>
                <span className="rounded-full bg-bordeaux/10 px-2 py-0.5 text-xs font-semibold text-bordeaux">
                  {v} / 10
                </span>
              </div>
              <input
                type="range"
                min={0}
                max={10}
                step={1}
                value={v}
                onChange={(e) => setValue(a.id, Number(e.target.value))}
                className="mt-2 w-full accent-bordeaux"
                aria-label={`${a.label} Wert`}
              />
              <div className="mt-2">
                <label className="block text-[11px] font-semibold uppercase tracking-wider text-mauve">
                  <Sparkles className="mr-1 inline h-3 w-3" />
                  Mein Mikro-Schritt diese Woche
                </label>
                <textarea
                  value={goals[a.id] ?? ""}
                  onChange={(e) => setGoal(a.id, e.target.value)}
                  rows={1}
                  placeholder={
                    a.id === "freiheit"
                      ? 'z.B. „Ich sage einmal Nein, ohne mich zu erklären."'
                      : a.id === "koerper"
                      ? 'z.B. „Drei Spaziergänge, je 20 Min."'
                      : a.id === "kreativitaet"
                      ? 'z.B. „30 Min an meinem alten Skizzenbuch."'
                      : 'z.B. „Eine konkrete Sache, die DU willst."'
                  }
                  className="mt-1 w-full resize-none rounded-lg border border-mauve/20 bg-white/85 px-3 py-2 text-sm text-graphite shadow-inner focus:border-bordeaux focus:outline-none"
                />
              </div>
            </li>
          );
        })}
      </ul>
    </ExerciseFrame>
  );
}
