import { useModuleProgress } from "@/hooks/use-module-progress";
import { ExerciseFrame } from "./exercise-frame";

type State = {
  see: string;
  learned: string;
  promise: string;
  safe: string;
  sealedAt?: string;
};

const EMPTY: State = { see: "", learned: "", promise: "", safe: "" };

/**
 * InnerChildLetter · 4-Felder-Brief ans innere Kind mit Wachs-Siegel-Animation.
 * Beim Versiegeln erscheint ein Wachs-Siegel (SVG) mit einmaligem Schimmer.
 */
export function InnerChildLetter({
  slug,
  storageKey,
}: {
  slug: string;
  storageKey: string;
}) {
  const { exerciseState, setExercise, loaded } = useModuleProgress(slug);
  if (!loaded) return null;

  const state: State = exerciseState[storageKey] ?? EMPTY;
  const update = (patch: Partial<State>) =>
    setExercise(storageKey, { ...state, ...patch });

  const filled = !!(
    state.see.trim() &&
    state.learned.trim() &&
    state.promise.trim() &&
    state.safe.trim()
  );
  const sealed = !!state.sealedAt;

  const seal = () => {
    if (!filled) return;
    update({ sealedAt: new Date().toISOString() });
  };
  const unseal = () => update({ sealedAt: undefined });

  const prompts: { key: keyof State; opener: string; placeholder: string }[] = [
    {
      key: "see",
      opener: "Liebes kleines Ich, ich sehe, dass du …",
      placeholder: "… so lange allein warst und gelernt hast, niemandem mehr zur Last zu fallen.",
    },
    {
      key: "learned",
      opener: "Du musstest lernen, dass …",
      placeholder: "… Liebe nur dann sicher ist, wenn du dich klein machst.",
    },
    {
      key: "promise",
      opener: "Heute verspreche ich dir …",
      placeholder: "… ich werde dich nicht mehr verlassen, auch wenn niemand sonst bleibt.",
    },
    {
      key: "safe",
      opener: "Du bist sicher, weil …",
      placeholder: "… ich jetzt erwachsen bin und auf dich aufpasse. Ich kann uns beide tragen.",
    },
  ];

  return (
    <ExerciseFrame
      title="Übung 3 · Brief ans innere Kind"
      subtitle="Hinter jedem Protestverhalten steht ein Kind, das nie gehört wurde. Heute hörst du es."
      meta="💌 Reparenting · ⏱ 12 Min"
      accent="terracotta"
    >
      {!sealed ? (
        <>
          <div className="space-y-3">
            {prompts.map((p, i) => (
              <div
                key={p.key}
                className="rounded-xl bg-white/75 p-3 shadow-soft"
                style={{ borderLeft: "4px solid var(--color-terracotta)" }}
              >
                <p className="text-xs font-semibold text-bordeaux">
                  <span className="mr-1.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-terracotta/15 text-[10px] font-bold text-terracotta">
                    {i + 1}
                  </span>
                  {p.opener}
                </p>
                <textarea
                  value={state[p.key] as string}
                  onChange={(e) =>
                    update({ [p.key]: e.target.value } as Partial<State>)
                  }
                  placeholder={p.placeholder}
                  rows={2}
                  className="mt-2 w-full resize-y rounded-md border border-sage/25 bg-white/85 p-2.5 text-sm leading-snug text-graphite outline-none transition focus:border-terracotta/60 focus:ring-2 focus:ring-terracotta/15"
                />
              </div>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg bg-terracotta/5 px-3 py-2.5">
            <p className="text-xs text-graphite/75">
              Versiegle den Brief, wenn du fertig bist. Du kannst ihn jederzeit
              wieder aufbrechen — er bleibt für dich.
            </p>
            <button
              type="button"
              onClick={seal}
              disabled={!filled}
              className="inline-flex items-center gap-1.5 rounded-md bg-terracotta px-3 py-1.5 text-xs font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Brief versiegeln
            </button>
          </div>
        </>
      ) : (
        <div className="relative animate-fade-in">
          {/* Brief */}
          <div
            className="relative overflow-hidden rounded-xl bg-gradient-to-b from-cream to-white/95 p-5 shadow-elegant"
            style={{
              border: "1.5px solid color-mix(in oklab, var(--color-terracotta) 30%, transparent)",
              backgroundImage:
                "repeating-linear-gradient(transparent 0, transparent 27px, color-mix(in oklab, var(--color-terracotta) 12%, transparent) 28px)",
              backgroundAttachment: "local",
            }}
          >
            <div className="space-y-3 font-serif text-[15px] leading-7 text-graphite/95">
              {prompts.map((p) => (
                <p key={p.key}>
                  <span className="font-semibold text-bordeaux">{p.opener}</span>{" "}
                  {state[p.key] as string}
                </p>
              ))}
            </div>

            <p className="mt-4 text-right text-xs italic text-graphite/60">
              In Liebe — dein erwachsenes Ich,{" "}
              {new Date(state.sealedAt!).toLocaleDateString("de-DE", {
                day: "2-digit",
                month: "long",
                year: "numeric",
              })}
            </p>
          </div>

          {/* Wachs-Siegel */}
          <div className="absolute -bottom-4 right-6 wax-seal-pop">
            <svg width="72" height="72" viewBox="0 0 72 72" aria-hidden>
              <defs>
                <radialGradient id="waxGrad" cx="35%" cy="35%" r="65%">
                  <stop offset="0%" stopColor="#c0392b" />
                  <stop offset="60%" stopColor="#7a2f44" />
                  <stop offset="100%" stopColor="#4a1928" />
                </radialGradient>
              </defs>
              {/* Drips */}
              <path
                d="M14 36 Q12 46 18 50 M58 38 Q62 50 54 52 M22 12 Q18 18 24 22 M50 14 Q56 20 50 24"
                fill="url(#waxGrad)"
                opacity="0.85"
              />
              <circle cx="36" cy="36" r="26" fill="url(#waxGrad)" />
              <circle
                cx="36"
                cy="36"
                r="22"
                fill="none"
                stroke="rgba(255,255,255,0.35)"
                strokeWidth="1"
              />
              <text
                x="36"
                y="42"
                textAnchor="middle"
                fontFamily="Georgia, serif"
                fontSize="22"
                fontWeight="700"
                fill="rgba(255,240,225,0.95)"
              >
                ❤
              </text>
            </svg>
          </div>

          <div className="mt-6 flex justify-end">
            <button
              type="button"
              onClick={unseal}
              className="text-[11px] font-semibold uppercase tracking-wider text-terracotta/80 underline-offset-2 hover:underline"
            >
              Siegel brechen & bearbeiten
            </button>
          </div>
        </div>
      )}
    </ExerciseFrame>
  );
}
