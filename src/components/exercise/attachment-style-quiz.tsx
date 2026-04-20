import { useModuleProgress } from "@/hooks/use-module-progress";
import { ExerciseFrame } from "./exercise-frame";

type Style = "anxious" | "avoidant" | "disorganized" | "secure";

type Item = {
  id: string;
  text: string;
  style: Style;
};

const SCALE = [
  { v: 1, label: "Trifft nicht zu" },
  { v: 2, label: "Eher nicht" },
  { v: 3, label: "Teils/teils" },
  { v: 4, label: "Eher schon" },
  { v: 5, label: "Trifft voll zu" },
];

const ITEMS: Item[] = [
  {
    id: "a1",
    text: "Wenn sie länger als ein paar Stunden nicht antwortet, kreisen meine Gedanken nur noch um sie.",
    style: "anxious",
  },
  {
    id: "a2",
    text: "Ich brauche regelmäßige Bestätigung, dass ich noch geliebt werde — sonst wird mir körperlich unwohl.",
    style: "anxious",
  },
  {
    id: "v1",
    text: "Wenn jemand mir emotional zu nah kommt, spüre ich den Drang, mich zurückzuziehen oder Abstand zu schaffen.",
    style: "avoidant",
  },
  {
    id: "v2",
    text: "Ich erlebe Unabhängigkeit als wichtiger als Nähe — auch wenn ich eigentlich Nähe vermisse.",
    style: "avoidant",
  },
  {
    id: "d1",
    text: "Ich sehne mich nach Nähe und habe gleichzeitig panische Angst davor — beides spüre ich oft im selben Moment.",
    style: "disorganized",
  },
  {
    id: "d2",
    text: "Wenn jemand mich wirklich liebt, misstraue ich der Person fast automatisch.",
    style: "disorganized",
  },
  {
    id: "s1",
    text: "Ich kann sagen, was ich brauche, ohne mich zu schämen oder Strafe zu erwarten.",
    style: "secure",
  },
  {
    id: "s2",
    text: "Konflikte machen mir keine existenzielle Angst — ich vertraue darauf, dass Nähe sie übersteht.",
    style: "secure",
  },
];

const STYLE_INFO: Record<
  Style,
  { label: string; color: string; emoji: string; short: string; longer: string }
> = {
  anxious: {
    label: "Ängstlich (Anxious)",
    color: "var(--color-bordeaux)",
    emoji: "🔥",
    short:
      "Dein System wurde geprägt von Inkonsistenz. Nähe ist überlebenswichtig — und gefühlt nie sicher.",
    longer:
      "Dein Nervensystem hat gelernt, kleinste Distanzsignale früh zu scannen. Das ist keine Schwäche, sondern ein hochsensibler Schutzmechanismus. Heilung beginnt damit, dieses Scannen zu bemerken — ohne dich dafür zu verurteilen.",
  },
  avoidant: {
    label: "Vermeidend (Avoidant)",
    color: "var(--color-graphite)",
    emoji: "🧊",
    short:
      "Du hast früh gelernt: Nähe = Verlust der eigenen Kontrolle. Distanz fühlt sich wie Überleben an.",
    longer:
      "Du wirkst nach außen autonom, vielleicht sogar gleichgültig — aber innen drin willst du Nähe. Du hast nur nie gelernt, dass sie dich nicht zerstören wird. Heilung heißt: kleine Dosen Nähe üben, ohne sofort zu fliehen.",
  },
  disorganized: {
    label: "Desorganisiert (Fearful-Avoidant)",
    color: "var(--color-mauve)",
    emoji: "🌪️",
    short:
      "Bindungspersonen waren gleichzeitig Sicherheit und Quelle von Angst. Dein System trägt beides: Sehnsucht und Misstrauen.",
    longer:
      "Das ist kein Urteil. Es ist eine Anpassung an etwas, das nie deine Schuld war. Du brauchst besonders viel Geduld mit dir selbst — und stabile, vorhersehbare Beziehungen, in denen sich dein Körper langsam neu kalibrieren darf.",
  },
  secure: {
    label: "Sicher (Secure)",
    color: "var(--color-sage)",
    emoji: "🌿",
    short:
      "Dein Grundvertrauen ist intakt — auch wenn Trauma-Bindungen auch dich kurzfristig destabilisieren konnten.",
    longer:
      "Sicherheit heißt nicht, nie verletzt zu werden. Es heißt: nach Verletzung zurückzufinden in den eigenen Körper, in eigene Werte, in echte Beziehungen.",
  },
};

export function AttachmentStyleQuiz({
  slug,
  storageKey,
}: {
  slug: string;
  storageKey: string;
}) {
  const { exerciseState, setExercise, loaded } = useModuleProgress(slug);
  if (!loaded) return null;

  const answers: Record<string, number> = exerciseState[storageKey] ?? {};
  const setAnswer = (id: string, v: number) =>
    setExercise(storageKey, { ...answers, [id]: v });

  const answered = Object.keys(answers).length;
  const total = ITEMS.length;
  const complete = answered === total;

  // Auswertung: Summe pro Stil → dominanter Stil
  let dominant: Style | null = null;
  let scores: Record<Style, number> = {
    anxious: 0,
    avoidant: 0,
    disorganized: 0,
    secure: 0,
  };
  if (complete) {
    for (const it of ITEMS) {
      scores[it.style] += answers[it.id] ?? 0;
    }
    dominant = (Object.entries(scores) as [Style, number][]).reduce((a, b) =>
      b[1] > a[1] ? b : a,
    )[0];
  }

  return (
    <ExerciseFrame
      title="Übung 1 · Mein Bindungsstil"
      subtitle="8 Aussagen, ein ehrlicher Blick. Antworte aus dem Bauch — es gibt keine richtige Antwort, nur deine."
      meta="🧭 Self-Assessment · ⏱ 5 Min"
      accent="mauve"
    >
      <ol className="space-y-3">
        {ITEMS.map((it, i) => {
          const cur = answers[it.id];
          return (
            <li key={it.id} className="rounded-lg bg-white/65 p-3">
              <p className="mb-2 text-sm leading-snug">
                <span className="mr-1.5 font-display font-bold text-mauve">{i + 1}.</span>
                {it.text}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {SCALE.map((s) => {
                  const on = cur === s.v;
                  return (
                    <button
                      key={s.v}
                      type="button"
                      onClick={() => setAnswer(it.id, s.v)}
                      className={`flex-1 min-w-[3.5rem] rounded-md border-2 px-2 py-1.5 text-[11px] font-medium transition ${
                        on
                          ? "border-mauve bg-mauve text-white"
                          : "border-sage/30 bg-white text-graphite/75 hover:border-mauve/50"
                      }`}
                      aria-pressed={on}
                    >
                      {s.label}
                    </button>
                  );
                })}
              </div>
            </li>
          );
        })}
      </ol>

      <div className="rounded-lg bg-white/55 px-3 py-2 text-xs">
        <span className="font-medium text-graphite/80">
          {answered} / {total} beantwortet
        </span>
      </div>

      {complete && dominant && (
        <div
          className="rounded-xl bg-white/85 p-4 shadow-soft animate-fade-in"
          style={{ borderTop: `5px solid ${STYLE_INFO[dominant].color}` }}
        >
          <p
            className="text-[10.5px] font-semibold uppercase tracking-wider"
            style={{ color: STYLE_INFO[dominant].color }}
          >
            Dein dominantes Muster
          </p>
          <h4 className="mt-1 font-display text-lg font-bold text-bordeaux">
            {STYLE_INFO[dominant].emoji} {STYLE_INFO[dominant].label}
          </h4>
          <p className="mt-2 text-sm leading-relaxed text-graphite/90">
            {STYLE_INFO[dominant].short}
          </p>
          <p className="mt-2 text-sm leading-relaxed text-graphite/80">
            {STYLE_INFO[dominant].longer}
          </p>

          <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {(Object.keys(scores) as Style[]).map((s) => {
              const max = 10;
              const pct = (scores[s] / max) * 100;
              const isDom = s === dominant;
              return (
                <div
                  key={s}
                  className={`rounded-md bg-white/70 p-2 text-center ${
                    isDom ? "ring-2 ring-offset-1" : ""
                  }`}
                  style={isDom ? ({ "--tw-ring-color": STYLE_INFO[s].color } as React.CSSProperties) : undefined}
                >
                  <div className="text-base">{STYLE_INFO[s].emoji}</div>
                  <div className="mt-1 text-[10px] font-semibold uppercase tracking-wider text-graphite/70">
                    {s}
                  </div>
                  <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-graphite/10">
                    <div
                      className="h-full transition-all"
                      style={{ width: `${pct}%`, background: STYLE_INFO[s].color }}
                    />
                  </div>
                  <div className="mt-1 text-[10px] font-bold text-graphite/70">
                    {scores[s]} / 10
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mt-3 text-[11px] italic text-graphite/60">
            Hinweis: Dein Stil ist kein Etikett, sondern eine Momentaufnahme. Bindung
            ist plastisch — sie verändert sich durch sichere Beziehungen, Therapie und
            bewusste Reparenting-Arbeit.
          </p>
        </div>
      )}
    </ExerciseFrame>
  );
}
