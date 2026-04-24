import { AlertTriangle, CheckCircle2, Waves } from "lucide-react";
import { useModuleProgress } from "@/hooks/use-module-progress";
import { ExerciseFrame, type ExerciseAccent } from "./exercise-frame";

function getBand(value: number | undefined) {
  if (value == null) {
    return {
      label: "Noch offen",
      hint: "Spüre kurz hinein und markiere, wie stark die Idealisierung heute noch zieht.",
      color: "var(--color-mauve)",
      Icon: Waves,
    };
  }
  if (value <= 3) {
    return {
      label: "stabil",
      hint: "Du kannst die Fakten bereits klarer halten als die Hoffnung.",
      color: "var(--color-sage)",
      Icon: CheckCircle2,
    };
  }
  if (value <= 6) {
    return {
      label: "grenzwertig",
      hint: "Die Idealisierung ist noch aktiv – genau hier helfen tägliche Reality-Anker.",
      color: "var(--color-mauve)",
      Icon: Waves,
    };
  }
  return {
    label: "toxisch aufgeladen",
    hint: "Dein Nervensystem hängt noch stark an der Hoffnung. Fakten-Rituale sind jetzt besonders wichtig.",
    color: "var(--color-terracotta)",
    Icon: AlertTriangle,
  };
}

export function ToxicometerScale({
  slug,
  storageKey,
  title,
  subtitle,
  meta,
  accent = "mauve",
}: {
  slug: string;
  storageKey: string;
  title: string;
  subtitle?: string;
  meta?: string;
  accent?: ExerciseAccent;
}) {
  const { exerciseState, setExercise, loaded } = useModuleProgress(slug);
  if (!loaded) return null;

  const value = exerciseState[storageKey] as number | undefined;
  const band = getBand(value);
  const Icon = band.Icon;
  const steps = Array.from({ length: 10 }, (_, i) => i + 1);

  return (
    <ExerciseFrame title={title} subtitle={subtitle} meta={meta} accent={accent}>
      <div className="rounded-3xl border border-white/70 bg-white/72 p-4 shadow-glass">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-graphite/55">
              Toxikometer
            </p>
            <p className="mt-1 font-display text-4xl font-bold text-bordeaux tabular-nums">
              {value ?? "–"}
            </p>
          </div>
          <div
            className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold"
            style={{
              color: band.color,
              background: `color-mix(in oklab, ${band.color} 12%, white)`,
              border: `1px solid color-mix(in oklab, ${band.color} 25%, transparent)`,
            }}
          >
            <Icon className="h-3.5 w-3.5" />
            {band.label}
          </div>
        </div>

        <div className="mt-4 grid grid-cols-5 gap-2 sm:grid-cols-10">
          {steps.map((step) => {
            const active = value === step;
            const background = `linear-gradient(180deg,
              color-mix(in oklab, var(--color-sage) ${Math.max(0, 65 - step * 4)}%, white),
              color-mix(in oklab, var(--color-terracotta) ${Math.max(0, step * 7 - 15)}%, white)
            )`;

            return (
              <button
                key={step}
                type="button"
                onClick={() => setExercise(storageKey, step)}
                aria-pressed={active}
                className="grid h-12 place-items-center rounded-xl border text-sm font-semibold text-graphite/80 transition hover:-translate-y-0.5"
                style={{
                  background,
                  borderColor: active
                    ? "color-mix(in oklab, var(--color-bordeaux) 35%, transparent)"
                    : "color-mix(in oklab, var(--color-mauve) 18%, transparent)",
                  boxShadow: active
                    ? "0 10px 22px -14px color-mix(in oklab, var(--color-bordeaux) 35%, transparent)"
                    : "none",
                }}
              >
                {step}
              </button>
            );
          })}
        </div>

        <div className="mt-3 flex items-start justify-between gap-3 text-[11px] text-graphite/58">
          <span>1 · kaum Idealisierung</span>
          <span className="text-right">10 · Hoffnung überdeckt fast alles</span>
        </div>
      </div>

      <p className="text-sm leading-relaxed text-graphite/75">{band.hint}</p>
    </ExerciseFrame>
  );
}