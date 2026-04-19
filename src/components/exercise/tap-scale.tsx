import { useModuleProgress } from "@/hooks/use-module-progress";

/**
 * TapScale · Mobile-freundliche 0–10 Bewertung als Tap-Buttons (kein Slider).
 * Persistiert unter exerciseState[storageKey] als number.
 *
 * Wird als kontrolliertes Element (value/onChange) ODER über (slug + storageKey)
 * benutzt. Der zweite Modus ist der bevorzugte für Übungen.
 */
export function TapScale({
  slug,
  storageKey,
  value,
  onChange,
  min = 0,
  max = 10,
  leftLabel,
  rightLabel,
  ariaLabel,
}: {
  slug?: string;
  storageKey?: string;
  value?: number;
  onChange?: (n: number) => void;
  min?: number;
  max?: number;
  leftLabel?: string;
  rightLabel?: string;
  ariaLabel?: string;
}) {
  const moduleProgress = slug ? useModuleProgress(slug) : null;
  const persisted: number | undefined = storageKey && moduleProgress
    ? (moduleProgress.exerciseState[storageKey] as number | undefined)
    : undefined;

  const current = value ?? persisted ?? Math.floor((min + max) / 2);
  const set = (n: number) => {
    onChange?.(n);
    if (storageKey && moduleProgress) moduleProgress.setExercise(storageKey, n);
  };

  if (slug && moduleProgress && !moduleProgress.loaded) return null;

  const buttons = Array.from({ length: max - min + 1 }, (_, i) => i + min);

  return (
    <div className="space-y-1.5">
      <div
        role="radiogroup"
        aria-label={ariaLabel}
        className="flex flex-wrap items-center justify-between gap-1"
      >
        {buttons.map((n) => {
          const active = n === current;
          return (
            <button
              key={n}
              type="button"
              role="radio"
              aria-checked={active}
              onClick={() => set(n)}
              className={[
                "flex h-9 min-w-[2.25rem] flex-1 items-center justify-center rounded-lg border-2 text-sm font-bold transition active:scale-95",
                active
                  ? "border-bordeaux bg-bordeaux text-white shadow-soft"
                  : "border-bordeaux/15 bg-white/70 text-graphite/70 hover:border-bordeaux/40 hover:bg-white",
              ].join(" ")}
            >
              {n}
            </button>
          );
        })}
      </div>
      {(leftLabel || rightLabel) && (
        <div className="flex justify-between text-[10px] uppercase tracking-wider text-graphite/55">
          <span>{leftLabel}</span>
          <span>{rightLabel}</span>
        </div>
      )}
    </div>
  );
}
