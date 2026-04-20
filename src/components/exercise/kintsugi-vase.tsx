import { useEffect, useMemo, useState } from "react";
import { Sparkles, RotateCcw } from "lucide-react";
import { useModuleProgress } from "@/hooks/use-module-progress";
import { ExerciseFrame } from "./exercise-frame";

/**
 * KintsugiVase · Interaktive Vase mit Bruchstellen.
 *
 * Die Nutzerin klickt einen "Riss" an, beschriftet ihn (z.B. "Vertrauen verloren",
 * "Stimme verloren", "Selbstwert verloren") — und sieht, wie er mit goldener Naht
 * gefüllt wird. Mikro-Choreografie für die Kintsugi-Metapher: Risse werden
 * sichtbar gemacht, nicht versteckt.
 *
 * Persistiert Beschriftungen pro Riss in exerciseState[storageKey].
 */
type CrackId = "c1" | "c2" | "c3" | "c4" | "c5";

const CRACKS: { id: CrackId; label: string; path: string }[] = [
  // Vase-Form: stilisierte SVG-Pfade über der Vasenkontur.
  { id: "c1", label: "Bruchstelle 1 · oben links", path: "M 95 70 L 130 110 L 115 145" },
  { id: "c2", label: "Bruchstelle 2 · Mitte rechts", path: "M 215 120 L 180 150 L 195 190" },
  { id: "c3", label: "Bruchstelle 3 · Herz", path: "M 130 175 L 165 195 L 200 175" },
  { id: "c4", label: "Bruchstelle 4 · Bauch links", path: "M 100 215 L 130 240 L 120 275" },
  { id: "c5", label: "Bruchstelle 5 · Bauch rechts", path: "M 220 230 L 195 260 L 215 290" },
];

const PRESETS: string[] = [
  "Vertrauen verloren",
  "Meine Stimme verloren",
  "Mein Selbstwert ging klein",
  "Schlaflose Nächte",
  "Freundinnen verloren",
  "Mein Körper hat geschwiegen",
  "Ich habe mich verkleinert",
  "Geld / Job-Verlust",
];

export function KintsugiVase({
  slug,
  storageKey = "kintsugi_vase",
}: {
  slug: string;
  storageKey?: string;
}) {
  const { exerciseState, setExercise, loaded } = useModuleProgress(slug);
  const [active, setActive] = useState<CrackId | null>(null);

  const labels: Record<string, string> = useMemo(
    () => exerciseState[storageKey] ?? {},
    [exerciseState, storageKey],
  );
  const filledCount = Object.values(labels).filter((v) => v && v.trim().length > 0).length;

  // Sanftes Pop wenn ein neuer Riss vergoldet wird
  const [justFilled, setJustFilled] = useState<CrackId | null>(null);
  useEffect(() => {
    if (!justFilled) return;
    const t = setTimeout(() => setJustFilled(null), 1200);
    return () => clearTimeout(t);
  }, [justFilled]);

  if (!loaded) return null;

  const setLabel = (id: CrackId, text: string) => {
    const next = { ...labels, [id]: text };
    setExercise(storageKey, next);
    if (text && !labels[id]) setJustFilled(id);
  };

  const reset = () => {
    setExercise(storageKey, {});
    setActive(null);
  };

  return (
    <ExerciseFrame
      title="Übung 1 · Deine Kintsugi-Vase"
      subtitle="Tippe nacheinander auf die fünf Risse deiner Vase. Beschrifte jeden mit etwas, das in der toxischen Bindung gebrochen ist — dein Vertrauen, deine Stimme, dein Selbstwert. In dem Moment, in dem du es benennst, fließt Gold in die Naht. Du versteckst die Brüche nicht. Du machst sie sichtbar — als Teil deiner Geschichte."
      meta="🌟 Symbolische Übung · ~7 Min · Selbst-Mitgefühl"
      accent="bordeaux"
    >
      <div className="grid gap-4 sm:grid-cols-[minmax(0,260px)_1fr] sm:items-start">
        {/* Vase-SVG */}
        <div className="relative mx-auto w-full max-w-[260px]">
          <svg viewBox="0 0 320 420" className="h-auto w-full" aria-label="Kintsugi-Vase">
            <defs>
              <linearGradient id="vaseFill" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f4ede4" />
                <stop offset="100%" stopColor="#e7d8c5" />
              </linearGradient>
              <linearGradient id="goldFill" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#f6d27a" />
                <stop offset="50%" stopColor="#c89539" />
                <stop offset="100%" stopColor="#8b5e1c" />
              </linearGradient>
              <filter id="goldGlow">
                <feGaussianBlur stdDeviation="2.2" />
              </filter>
            </defs>

            {/* Vase-Kontur (klassische Kintsugi-Vasen-Silhouette) */}
            <path
              d="M 110 50
                 Q 110 35 130 35
                 L 190 35
                 Q 210 35 210 50
                 L 210 85
                 Q 260 130 270 200
                 Q 280 290 230 360
                 Q 200 395 160 395
                 Q 120 395 90 360
                 Q 40 290 50 200
                 Q 60 130 110 85
                 Z"
              fill="url(#vaseFill)"
              stroke="rgba(107,62,68,0.35)"
              strokeWidth="1.5"
            />
            {/* Vasenhalsband */}
            <line x1="110" y1="80" x2="210" y2="80" stroke="rgba(107,62,68,0.2)" strokeWidth="1" />

            {/* Risse als anklickbare Pfade */}
            {CRACKS.map((c) => {
              const filled = !!labels[c.id]?.trim();
              const isActive = active === c.id;
              const isJust = justFilled === c.id;
              return (
                <g key={c.id}>
                  {/* Glow-Hintergrund nur bei vergoldet */}
                  {filled && (
                    <path
                      d={c.path}
                      fill="none"
                      stroke="url(#goldFill)"
                      strokeWidth="6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      filter="url(#goldGlow)"
                      opacity="0.7"
                    />
                  )}
                  {/* Eigentliche Naht */}
                  <path
                    d={c.path}
                    fill="none"
                    stroke={filled ? "url(#goldFill)" : "rgba(107,62,68,0.55)"}
                    strokeWidth={filled ? 2.4 : 1.4}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray={filled ? "0" : "3 3"}
                    style={{
                      transition: "all 700ms ease",
                      transform: isJust ? "scale(1.02)" : "scale(1)",
                      transformOrigin: "center",
                    }}
                  />
                  {/* Hit-Area + Ring */}
                  <path
                    d={c.path}
                    fill="none"
                    stroke="transparent"
                    strokeWidth="22"
                    style={{ cursor: "pointer" }}
                    onClick={() => setActive(c.id)}
                  >
                    <title>{c.label}</title>
                  </path>
                  {/* Pulsierender Ring am Startpunkt, wenn aktiv */}
                  {isActive && (
                    <circle
                      cx={parseInt(c.path.split(" ")[1])}
                      cy={parseInt(c.path.split(" ")[2])}
                      r="9"
                      fill="none"
                      stroke="var(--color-bordeaux)"
                      strokeWidth="1.5"
                      className="animate-ping"
                      opacity="0.6"
                    />
                  )}
                </g>
              );
            })}
          </svg>

          {/* Mini-Statusband */}
          <div className="mt-2 flex items-center justify-center gap-1.5 text-[11px] font-semibold text-bordeaux/80">
            <Sparkles className="h-3 w-3" />
            {filledCount} / {CRACKS.length} Bruchstellen vergoldet
          </div>
        </div>

        {/* Editor-Spalte */}
        <div className="space-y-2.5">
          {CRACKS.map((c) => {
            const value = labels[c.id] ?? "";
            const isActive = active === c.id;
            return (
              <div
                key={c.id}
                className={`rounded-xl border-2 p-3 transition ${
                  isActive
                    ? "border-bordeaux bg-bordeaux/5 shadow-glass"
                    : value
                      ? "border-amber-400/60 bg-amber-50/60"
                      : "border-mauve/20 bg-white/70"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setActive(isActive ? null : c.id)}
                  className="flex w-full items-center justify-between gap-2 text-left"
                  aria-expanded={isActive}
                >
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-bordeaux/85">
                    {c.label}
                  </span>
                  {value ? (
                    <span className="text-[10px] font-bold uppercase tracking-wider text-amber-700">
                      ✦ vergoldet
                    </span>
                  ) : (
                    <span className="text-[10px] font-medium text-graphite/50">
                      tippen zum öffnen
                    </span>
                  )}
                </button>

                {(isActive || value) && (
                  <div className="mt-2.5">
                    <input
                      type="text"
                      value={value}
                      onChange={(e) => setLabel(c.id, e.target.value)}
                      placeholder="z.B. Mein Vertrauen in andere Frauen"
                      className="w-full rounded-lg border border-mauve/25 bg-white px-3 py-2 text-sm text-graphite placeholder:text-graphite/40 focus:border-bordeaux focus:outline-none"
                    />
                    {isActive && !value && (
                      <div className="mt-2 flex flex-wrap gap-1.5">
                        {PRESETS.map((p) => (
                          <button
                            key={p}
                            type="button"
                            onClick={() => setLabel(c.id, p)}
                            className="rounded-full border border-bordeaux/20 bg-white/85 px-2.5 py-1 text-[11px] text-bordeaux/85 transition hover:border-bordeaux hover:bg-bordeaux hover:text-white"
                          >
                            {p}
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}

          <button
            type="button"
            onClick={reset}
            className="mt-1 inline-flex items-center gap-1.5 rounded-full border border-mauve/30 bg-white/70 px-3 py-1.5 text-[11px] font-medium text-mauve hover:bg-mauve/10"
          >
            <RotateCcw className="h-3 w-3" /> Vase zurücksetzen
          </button>
        </div>
      </div>

      {filledCount === CRACKS.length && (
        <div className="mt-4 rounded-xl bg-gradient-to-r from-amber-100 via-amber-50 to-amber-100 p-4 text-center shadow-soft animate-fade-in">
          <p className="font-display text-base font-bold text-amber-800">
            Deine Vase ist vollständig vergoldet ✦
          </p>
          <p className="mt-1 text-xs leading-relaxed text-amber-900/80">
            Du hast jede Bruchstelle benannt, statt sie zu verstecken. Genau das
            ist Kintsugi: Du bist nicht weniger wertvoll wegen der Risse — du
            bist mehr wert <em>wegen</em> der Goldnähte, die du selbst gezogen hast.
          </p>
        </div>
      )}
    </ExerciseFrame>
  );
}
