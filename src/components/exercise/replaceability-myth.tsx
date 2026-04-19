import { useState } from "react";
import { Hand, Plus, Anchor, X } from "lucide-react";
import { useModuleProgress } from "@/hooks/use-module-progress";
import { ExerciseFrame, type ExerciseAccent } from "./exercise-frame";

/**
 * Übung · Den Ersetzbarkeits-Mythos entlarven.
 * Zwei Ebenen:
 *   A) Lüge↔Wahrheit-Flip-Karten (Aufklärung) — 8 typische Trauma-Lügen,
 *      auf Klick flippen sie und zeigen die psychologische Wahrheit.
 *      Nutzerin kann eigene Lügen hinzufügen.
 *   B) Selbstwert-Anker-Ritual (4 Schritte) — Lüge benennen, Körper spüren,
 *      Wahrheit lesen, eigenen Anker-Satz schreiben. Wird als persönliche
 *      Anker-Karte im Profil gespeichert.
 */

type MythCard = {
  id: string;
  lie: string;
  truth: string;
  custom?: boolean;
};

const DEFAULT_MYTHS: MythCard[] = [
  {
    id: "m1",
    lie: "„Sie ist endlich glücklich — mit ihr, nicht mit mir.“",
    truth:
      "Was du siehst, ist die Love-Bombing-Phase. Sie zeigt der Neuen exakt das Bild, das sie dir am Anfang gezeigt hat. Der Zyklus startet neu — du siehst nur Akt 1.",
  },
  {
    id: "m2",
    lie: "„Für sie ändert sie sich endlich. Mir war das nicht möglich.“",
    truth:
      "Menschen mit narzisstischen Mustern ändern sich nicht für eine neue Partnerin. Sie passen ihre Maske an — bis die Idealisierungsphase endet. Dann kommt die Entwertung. Wieder.",
  },
  {
    id: "m3",
    lie: "„Ich war einfach nicht genug für sie.“",
    truth:
      "Du warst nicht zu wenig — du warst zu echt. Echte Bedürfnisse, echte Grenzen, echte Verletzbarkeit lassen sich nicht ausbeuten. Genau das war dein 'Fehler'.",
  },
  {
    id: "m4",
    lie: "„Sie hat mich so schnell ersetzt, weil ich austauschbar bin.“",
    truth:
      "Schnelles Weiterziehen ist kein Beweis deiner Austauschbarkeit. Es ist ein Symptom ihrer Unfähigkeit, allein zu sein. Sie braucht eine Quelle für Bestätigung — du warst nur die letzte.",
  },
  {
    id: "m5",
    lie: "„Wenn ich besser gekämpft hätte, wären wir noch zusammen.“",
    truth:
      "Du hast nicht zu wenig gekämpft. Du hast aufgehört, in einem manipulierten Spiel zu kämpfen, dessen Regeln sich täglich ändern. Das ist Reifung, nicht Versagen.",
  },
  {
    id: "m6",
    lie: "„Die Neue ist hübscher / cooler / queerer / erfolgreicher als ich.“",
    truth:
      "Vergleich ist die Sprache des verletzten Inneren Kindes, nicht der Realität. Sie wird die Neue auf dieselbe Weise abwerten, wie sie dich abgewertet hat. Garantiert.",
  },
  {
    id: "m7",
    lie: "„Vor der Community sieht es so aus, als hätte ich verloren.“",
    truth:
      "Die Community sieht eine Inszenierung. Du erlebst die Wahrheit. Dein Heilungsprozess ist nicht öffentlich — und genau deshalb ist er echt. Performte Stärke ist keine Stärke.",
  },
  {
    id: "m8",
    lie: "„Sie wird der Neuen nie das antun, was sie mir angetan hat.“",
    truth:
      "Das Muster gehört zu ihr, nicht zu dir. Was du ertragen hast, war keine Reaktion auf dich — es war ihr Drehbuch. Und Drehbücher werden mit jeder neuen Hauptdarstellerin neu aufgeführt.",
  },
];

export function ReplaceabilityMyth({
  slug,
  title = "Übung 3 · Den Ersetzbarkeits-Mythos entlarven",
  subtitle = "Die schnelle neue Partnerin sagt nichts über deinen Wert. Sie sagt alles über ihr Muster. Erst Aufklärung — dann verankerst du eine eigene Wahrheit in deinem Körper.",
  meta = "🪞 Reframing + Ritual · ~15 Min",
  accent = "mauve",
}: {
  slug: string;
  title?: string;
  subtitle?: string;
  meta?: string;
  accent?: ExerciseAccent;
}) {
  const { exerciseState, setExercise, setExerciseBulk, loaded } =
    useModuleProgress(slug);
  const [flipped, setFlipped] = useState<Record<string, boolean>>({});
  const [newLie, setNewLie] = useState("");
  const [newTruth, setNewTruth] = useState("");

  if (!loaded) return null;

  const customMyths: MythCard[] = Array.isArray(exerciseState["myth_custom"])
    ? (exerciseState["myth_custom"] as MythCard[])
    : [];
  const myths = [...DEFAULT_MYTHS, ...customMyths];

  const toggleFlip = (id: string) =>
    setFlipped((prev) => ({ ...prev, [id]: !prev[id] }));

  const addCustom = () => {
    if (!newLie.trim() || !newTruth.trim()) return;
    const next: MythCard = {
      id: `c-${Date.now()}`,
      lie: newLie.trim(),
      truth: newTruth.trim(),
      custom: true,
    };
    setExercise("myth_custom", [...customMyths, next]);
    setNewLie("");
    setNewTruth("");
  };

  const removeCustom = (id: string) =>
    setExercise(
      "myth_custom",
      customMyths.filter((m) => m.id !== id),
    );

  return (
    <ExerciseFrame title={title} subtitle={subtitle} meta={meta} accent={accent}>
      {/* ── A · Lüge↔Wahrheit-Flip-Karten ── */}
      <div>
        <h4 className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-mauve">
          Teil A · Lüge ↔ Wahrheit
        </h4>
        <p className="mb-3 text-xs leading-relaxed text-graphite/75">
          Tippe eine Karte an. Dreh sie um. Lies die Wahrheit dahinter — laut, wenn du kannst.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {myths.map((m) => {
            const isFlipped = flipped[m.id];
            return (
              <div
                key={m.id}
                className="flip-card-perspective relative h-44 cursor-pointer"
                onClick={() => toggleFlip(m.id)}
              >
                <div
                  className={`flip-card-inner relative h-full w-full ${isFlipped ? "is-flipped" : ""}`}
                >
                  {/* Front · Lüge */}
                  <div className="flip-card-face absolute inset-0 flex flex-col justify-between rounded-2xl bg-gradient-to-br from-rose-50 to-rose-100/70 p-4 shadow-soft ring-2 ring-rose-200/60">
                    <div className="flex items-start justify-between">
                      <span className="inline-flex items-center gap-1 rounded-full bg-rose-200/50 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-rose-700">
                        Trauma-Lüge
                      </span>
                      {m.custom && (
                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            removeCustom(m.id);
                          }}
                          className="text-rose-400 hover:text-rose-700"
                          aria-label="Eigene Karte löschen"
                        >
                          <X className="h-3.5 w-3.5" />
                        </button>
                      )}
                    </div>
                    <p className="text-sm font-semibold leading-snug text-bordeaux">
                      {m.lie}
                    </p>
                    <div className="flex items-center gap-1.5 text-[11px] font-medium text-rose-700/80">
                      <Hand className="h-3.5 w-3.5 animate-flip-tap-bob" />
                      Antippen zum Umdrehen
                    </div>
                  </div>
                  {/* Back · Wahrheit */}
                  <div className="flip-card-face flip-card-back absolute inset-0 flex flex-col justify-between rounded-2xl bg-gradient-to-br from-emerald-50 to-sage/20 p-4 shadow-soft ring-2 ring-emerald-300/50">
                    <span className="inline-flex w-fit items-center gap-1 rounded-full bg-emerald-200/60 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-800">
                      Wahrheit
                    </span>
                    <p className="text-[13px] leading-relaxed text-graphite/90">
                      {m.truth}
                    </p>
                    <div className="text-[11px] font-medium text-emerald-700/80">
                      Nochmal antippen
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Eigene Lüge hinzufügen */}
        <div className="mt-4 rounded-xl bg-white/80 p-3 shadow-sm">
          <label className="mb-1.5 block text-xs font-semibold uppercase tracking-wider text-bordeaux">
            Deine eigene Lüge ↔ Wahrheit hinzufügen
          </label>
          <div className="space-y-2">
            <input
              value={newLie}
              onChange={(e) => setNewLie(e.target.value)}
              placeholder="Die Lüge, die dein Trauma dir flüstert…"
              className="w-full rounded-lg border-2 border-rose-200/60 bg-white px-3 py-2 text-sm outline-none focus:border-rose-400"
            />
            <textarea
              value={newTruth}
              onChange={(e) => setNewTruth(e.target.value)}
              rows={2}
              placeholder="Die Wahrheit, die du heute über sie / über dich kennst…"
              className="w-full resize-none rounded-lg border-2 border-emerald-200/60 bg-white px-3 py-2 text-sm leading-relaxed outline-none focus:border-emerald-400"
            />
            <button
              type="button"
              onClick={addCustom}
              disabled={!newLie.trim() || !newTruth.trim()}
              className="inline-flex items-center gap-1.5 rounded-lg bg-bordeaux px-3 py-1.5 text-xs font-semibold text-white transition hover:bg-bordeaux/90 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <Plus className="h-3.5 w-3.5" />
              Eigene Karte hinzufügen
            </button>
          </div>
        </div>
      </div>

      {/* ── B · Selbstwert-Anker-Ritual ── */}
      <div className="mt-2">
        <h4 className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-mauve">
          Teil B · Dein Selbstwert-Anker
        </h4>
        <p className="mb-3 text-xs leading-relaxed text-graphite/75">
          Vier Schritte, ein Ritual. Atme zwischen jedem Feld dreimal tief in den Bauch — du verankerst hier eine Wahrheit, die größer ist als jede Trauma-Lüge.
        </p>

        <ol className="space-y-3">
          {[
            {
              key: "anchor_lie",
              n: 1,
              label: "Benenne EINE Lüge, die heute am lautesten ist",
              placeholder: "z.B. „Sie ist mit der Neuen glücklicher.“",
              rows: 2,
            },
            {
              key: "anchor_body",
              n: 2,
              label: "Wo spürst du diese Lüge in deinem Körper? (Was tut weh?)",
              placeholder: "z.B. „Engegefühl im Brustkorb, Druck im Hals, Magen zieht sich zusammen.“",
              rows: 2,
            },
            {
              key: "anchor_truth",
              n: 3,
              label: "Lies eine Wahrheit aus den Karten oben — und schreib sie in eigenen Worten ab",
              placeholder: "z.B. „Was sie zeigt, ist Akt 1 ihres Drehbuchs. Mit der Neuen läuft derselbe Film. Mein Wert ist nicht ihre Bühne.“",
              rows: 3,
            },
            {
              key: "anchor_sentence",
              n: 4,
              label: "Dein eigener Anker-Satz · kurz, im Präsens, in deinen Worten",
              placeholder: "z.B. „Ich bin nicht ersetzbar. Ich bin echt — und das war nie das Problem.“",
              rows: 2,
            },
          ].map((step) => (
            <li key={step.key} className="grid gap-2 sm:grid-cols-[2.25rem_1fr] sm:gap-3">
              <div className="hidden h-9 w-9 place-items-center rounded-full bg-mauve/15 font-display text-sm font-bold text-mauve sm:grid">
                {step.n}
              </div>
              <label className="block">
                <span className="mb-1.5 block text-sm font-semibold text-bordeaux">
                  <span className="mr-1.5 inline-flex h-5 w-5 items-center justify-center rounded-full bg-mauve/15 text-[10px] font-bold sm:hidden">
                    {step.n}
                  </span>
                  {step.label}
                </span>
                <textarea
                  value={exerciseState[step.key] ?? ""}
                  onChange={(e) =>
                    setExerciseBulk({ [step.key]: e.target.value })
                  }
                  placeholder={step.placeholder}
                  rows={step.rows}
                  className="w-full resize-none rounded-lg border-2 border-mauve/30 bg-white/85 p-3 text-sm leading-relaxed outline-none transition focus:border-mauve"
                />
              </label>
            </li>
          ))}
        </ol>

        {/* Anker-Karte (Vorschau) */}
        {exerciseState["anchor_sentence"] && (
          <div className="mt-4 rounded-2xl bg-gradient-to-br from-mauve/15 via-white to-sage/15 p-5 shadow-soft ring-2 ring-mauve/30">
            <div className="mb-2 flex items-center gap-2 text-[11px] font-bold uppercase tracking-wider text-mauve">
              <Anchor className="h-3.5 w-3.5" />
              Deine Anker-Karte
            </div>
            <p className="font-display text-base font-semibold leading-relaxed text-bordeaux sm:text-lg">
              „{exerciseState["anchor_sentence"]}“
            </p>
            <p className="mt-2 text-[11px] text-graphite/60">
              Mach ein Foto davon. Setze es als Sperrbildschirm. Lies es vor jedem Szene-Event.
            </p>
          </div>
        )}
      </div>
    </ExerciseFrame>
  );
}
