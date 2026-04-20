import { useModuleProgress } from "@/hooks/use-module-progress";
import { ExerciseFrame } from "./exercise-frame";
import { Heart } from "lucide-react";

type State = {
  shame: string;
  context: string;
  forgiveness: string;
  sealedAt?: string;
};

const EMPTY: State = { shame: "", context: "", forgiveness: "" };

/**
 * ReactiveAbuseReframe · 3-Spalten-Reframing zur radikalen Vergebung.
 * Spalte 1: Was ich tat (Scham)
 * Spalte 2: Was sie davor tat (Kontext)
 * Spalte 3: Die radikale Vergebung
 *
 * Beim Speichern entsteht eine "Vergebungs-Karte" mit Datum.
 */
export function ReactiveAbuseReframe({
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

  const filled = !!(state.shame.trim() && state.context.trim() && state.forgiveness.trim());
  const sealed = !!state.sealedAt;

  const seal = () => {
    if (!filled) return;
    update({ sealedAt: new Date().toISOString() });
  };

  const unseal = () => update({ sealedAt: undefined });

  const fields: { key: keyof State; label: string; placeholder: string; color: string; head: string }[] = [
    {
      key: "shame",
      label: "1 · Was ich tat — und wofür ich mich schäme",
      placeholder: "z.B. Ich stand betrunken vor ihrer Tür und habe geweint.",
      color: "var(--color-bordeaux)",
      head: "Die Scham",
    },
    {
      key: "context",
      label: "2 · Was sie unmittelbar davor tat (der Kontext)",
      placeholder:
        "z.B. Sie hat zwei Wochen lang stillgeschwiegen, mein Geburtstag fiel mittendrin, sie leugnete jede Absprache.",
      color: "var(--color-mauve)",
      head: "Der Kontext",
    },
    {
      key: "forgiveness",
      label: "3 · Die radikale Vergebung — Es war keine Aggression, es war …",
      placeholder:
        "z.B. Es war kein Stalking. Es war das verzweifelte Luftschnappen einer Ertrinkenden, der systematisch der Sauerstoff entzogen wurde.",
      color: "var(--color-sage)",
      head: "Die Vergebung",
    },
  ];

  return (
    <ExerciseFrame
      title="Übung 2 · Reactive-Abuse-Reframe"
      subtitle={'Was du in dir „hysterisch" genannt hast, war biologische Notwehr. Hier wird Scham zu Klarheit.'}
      meta="💔 → 💛 Perspektivwechsel · ⏱ 15 Min"
      accent="bordeaux"
    >
      <div className="grid gap-3 md:grid-cols-3">
        {fields.map((f) => (
          <div
            key={f.key}
            className="rounded-xl bg-white/75 p-3 shadow-soft"
            style={{ borderTop: `4px solid ${f.color}` }}
          >
            <p
              className="text-[10px] font-semibold uppercase tracking-wider"
              style={{ color: f.color }}
            >
              {f.head}
            </p>
            <label className="mt-1 block text-xs font-semibold text-bordeaux">
              {f.label}
            </label>
            <textarea
              value={state[f.key] as string}
              onChange={(e) => update({ [f.key]: e.target.value } as Partial<State>)}
              placeholder={f.placeholder}
              rows={5}
              disabled={sealed}
              className="mt-2 w-full resize-y rounded-md border border-sage/25 bg-white/85 p-2.5 text-sm leading-snug text-graphite outline-none transition focus:border-bordeaux/60 focus:ring-2 focus:ring-bordeaux/15 disabled:cursor-not-allowed disabled:bg-cream/50"
            />
          </div>
        ))}
      </div>

      {!sealed ? (
        <div className="flex flex-wrap items-center justify-between gap-3 rounded-lg bg-bordeaux/5 px-3 py-2.5">
          <p className="text-xs text-graphite/75">
            Wenn alle drei Felder gefüllt sind, kannst du diese Vergebungs-Karte
            versiegeln — als Erinnerung für schwere Tage.
          </p>
          <button
            type="button"
            onClick={seal}
            disabled={!filled}
            className="inline-flex items-center gap-1.5 rounded-md bg-bordeaux px-3 py-1.5 text-xs font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Heart className="h-3.5 w-3.5" />
            Vergebungs-Karte versiegeln
          </button>
        </div>
      ) : (
        <div
          className="relative overflow-hidden rounded-xl bg-gradient-to-br from-bordeaux/10 via-cream to-sage/10 p-4 shadow-elegant animate-fade-in"
          style={{ border: "1.5px solid color-mix(in oklab, var(--color-bordeaux) 25%, transparent)" }}
        >
          <div className="flex items-start gap-3">
            <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full bg-bordeaux/15 text-bordeaux">
              <Heart className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-[10px] font-semibold uppercase tracking-wider text-bordeaux">
                Vergebungs-Karte · versiegelt am{" "}
                {new Date(state.sealedAt!).toLocaleDateString("de-DE", {
                  day: "2-digit",
                  month: "long",
                  year: "numeric",
                })}
              </p>
              <p className="mt-2 text-sm italic leading-relaxed text-graphite/90">
                „Was ich „<span className="font-semibold not-italic">{state.shame}</span>"
                getan habe, war keine Aggression. Es war{" "}
                <span className="font-semibold not-italic text-sage">{state.forgiveness}</span>.
                Ich habe getan, was mein System konnte. Es tut mir leid, dass ich das
                durchmachen musste. Ich vergebe mir."
              </p>
              <button
                type="button"
                onClick={unseal}
                className="mt-3 text-[11px] font-semibold uppercase tracking-wider text-bordeaux/70 underline-offset-2 hover:underline"
              >
                Karte entsiegeln & bearbeiten
              </button>
            </div>
          </div>
        </div>
      )}
    </ExerciseFrame>
  );
}
