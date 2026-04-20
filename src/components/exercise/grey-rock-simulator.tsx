import { useMemo, useState } from "react";
import { CheckCircle2, AlertTriangle, XCircle, RotateCcw, Sparkles, MessageCircle } from "lucide-react";
import { useModuleProgress } from "@/hooks/use-module-progress";
import { ExerciseFrame } from "./exercise-frame";

/**
 * Grey-Rock-Rollenspiel-Simulator
 * Typische Trigger-Sätze einer toxischen Ex erscheinen als Sprechblase.
 * Nutzerin wählt aus 3 Antworten — sofortiges Feedback erklärt die
 * neurobiologische Wirkung (warum Antwort emotional flach genug ist).
 *
 * Bewertungslogik:
 *   "rock"  = perfekter Grey Rock (langweilig, kurz, kein emotionales Futter)
 *   "leak"  = subtiles Leck (zu erklärend, zu höflich, öffnet die Tür einen Spalt)
 *   "bait"  = Köder geschluckt (Rechtfertigung, Wut, Sehnsucht — sie hat dich)
 *
 * Speichert Score & abgeschlossene Szenarien in exercise_state.greyrock_sim.
 */

type Verdict = "rock" | "leak" | "bait";

type Option = {
  text: string;
  verdict: Verdict;
  feedback: string;
};

type Scenario = {
  id: string;
  context: string; // wo / wann
  her: string; // ihr Satz
  options: Option[];
};

const SCENARIOS: Scenario[] = [
  {
    id: "s1",
    context: "Sie schreibt dir nach 6 Wochen Funkstille auf Instagram.",
    her: "„Wir müssen reden. Es ist wichtig.”",
    options: [
      {
        text: "„Worum geht's?”",
        verdict: "leak",
        feedback:
          "Du öffnest die Tür einen Spalt — und genau das wartet sie ab. Jede Rückfrage ist ein Mini-Sieg für ihr Bindungssystem. Sie weiß: Du bist noch erreichbar.",
      },
      {
        text: "Keine Antwort. Nachricht löschen.",
        verdict: "rock",
        feedback:
          "Perfekter Grey Rock. Schweigen ist die undurchdringlichste Wand. Du gibst ihr keinen Anker, an dem sie ziehen kann. Dein Nervensystem darf danach atmen — der Drang vergeht in 90 Sekunden.",
      },
      {
        text: "„Bitte hör auf, mich zu kontaktieren.”",
        verdict: "bait",
        feedback:
          "Klingt wie eine Grenze — ist aber emotionales Futter. Du zeigst, dass sie dich noch erreicht, dass sie noch Wirkung hat. Genau das wollte sie wissen. Beim nächsten Mal: schweigen.",
      },
    ],
  },
  {
    id: "s2",
    context: "Begegnung in der queeren Bar, sie kommt direkt auf dich zu.",
    her: "„Du hast dich verändert. So kalt warst du früher nicht.”",
    options: [
      {
        text: "„Vielleicht. Schönen Abend.” – und gehen.",
        verdict: "rock",
        feedback:
          "Lehrbuch. Kurz, neutral, kein Widerspruch, kein Beweis. Du nimmst ihr die Vorlage für ein Gespräch. „Vielleicht” ist das Grey-Rock-Wort schlechthin — es schließt jede Diskussion.",
      },
      {
        text: "„Ich bin nicht kalt geworden, ich habe nur gelernt, mich zu schützen.”",
        verdict: "bait",
        feedback:
          "Sie hat den Köder ausgelegt — du hast angebissen. Jede Erklärung ist Energie für sie. Sie wollte hören, dass du noch reagierst. Erinnere dich: Du musst dich nicht erklären, schon gar nicht ihr.",
      },
      {
        text: "„Das stimmt nicht!” (laut, mit Tränen in den Augen)",
        verdict: "bait",
        feedback:
          "Genau die emotionale Reaktion, von der sie sich nährt. Für ihre Community wird sie es so spinnen: „Sie ist immer noch nicht über mich hinweg.” Dein Schmerz wird zu ihrer Bühne.",
      },
    ],
  },
  {
    id: "s3",
    context: "Sprachnachricht um 23:47 Uhr, ihre Stimme weint.",
    her: "„Ich vermisse dich so. Ich glaube, ich war nicht fair zu dir.”",
    options: [
      {
        text: "Nicht abspielen. Nummer blockieren.",
        verdict: "rock",
        feedback:
          "Maximaler Schutz. Diese Nachricht ist keine Reue — sie ist Hoovering. Echte Reue zeigt sich in dauerhafter Verhaltensänderung über Monate, nicht in einer Mitternachts-Sprachnachricht. Dein Dopamin-System würde sie als Belohnung speichern.",
      },
      {
        text: "Anhören, aber nicht antworten.",
        verdict: "leak",
        feedback:
          "Halb-Schutz. Die Worte landen in deinem Nervensystem und reaktivieren das Trauma-Bonding. Selbst wenn du nicht antwortest, brauchst du Tage, um den Cortisol-Sturm wieder runterzufahren. Beim nächsten Mal: nicht abspielen.",
      },
      {
        text: "„Es tut mir leid, dass du leidest. Pass auf dich auf.”",
        verdict: "bait",
        feedback:
          "Dein Mitgefühl ist wunderschön — und in diesem Kontext gefährlich. Du bestätigst ihr: Ich bin noch da, ich kümmere mich noch. Sie wird das als Einladung lesen. Speichere dein Mitgefühl für dich selbst.",
      },
    ],
  },
  {
    id: "s4",
    context: "Eine gemeinsame Freundin (Flying Monkey) richtet aus:",
    her: "„Sandra macht sich solche Sorgen um dich. Sie sagt, du wirkst nicht gut.”",
    options: [
      {
        text: "„Mir geht's gut. Wie war dein Wochenende?” (Thema wechseln)",
        verdict: "rock",
        feedback:
          "Doppelt klug: Du verweigerst die Information, die zurück zu Sandra fließen würde, und du holst die Freundin aus der Boten-Rolle. Kein Material — keine Pipeline.",
      },
      {
        text: "„Sag ihr, sie soll sich keine Sorgen machen, mir geht's super.”",
        verdict: "leak",
        feedback:
          "Du sendest eine Botschaft zurück — und das ist genau, was Sandra wollte. Auch ein „mir geht's super!” ist eine Reaktion. Lass die Pipeline trockenlaufen. Antworte nicht über Dritte.",
      },
      {
        text: "„Sandra soll sich um sich selbst kümmern.”",
        verdict: "bait",
        feedback:
          "Klingt stark — ist aber Köder geschluckt. Die Freundin trägt das wortgetreu zurück. Sandra bekommt: a) Bestätigung, dass du noch reagierst, b) Material für ihre Opfererzählung.",
      },
    ],
  },
  {
    id: "s5",
    context: "Sie schreibt dir aus dem Nichts:",
    her: "„Ich habe deinen Pulli noch. Soll ich ihn vorbeibringen?”",
    options: [
      {
        text: "„Ich brauche den Pulli nicht. Behalte ihn oder spende ihn.”",
        verdict: "rock",
        feedback:
          "Sehr gut. Du löst das logistische Anliegen in einem Satz und entziehst den Vorwand für Kontakt. Materielle Dinge sind klassische Hoover-Köder — der Pulli ist ihr Eintrittsticket zurück in dein Leben.",
      },
      {
        text: "„Schick ihn per Post, hier ist meine Adresse.”",
        verdict: "leak",
        feedback:
          "Gut gemeint, aber du gibst ihr eine Mission und einen Anlass für eine Folge-Nachricht („Hab das Paket abgeschickt, alles gut bei dir?”). Lieber: Verzicht auf den Pulli ist günstiger als der Cortisol-Schub.",
      },
      {
        text: "„Ja, bring ihn morgen vorbei, dann können wir kurz reden.”",
        verdict: "bait",
        feedback:
          "Das ist genau das Drehbuch, das sie geschrieben hat. Der Pulli war nie das Thema — der Kontakt war das Thema. Du hast die Tür weit aufgemacht.",
      },
    ],
  },
  {
    id: "s6",
    context: "Ihr steht zufällig nebeneinander an der Bar.",
    her: "„Du siehst gut aus.”",
    options: [
      {
        text: "„Danke.” – Blick nach vorn, Getränk nehmen, gehen.",
        verdict: "rock",
        feedback:
          "Knapp, neutral, kein Lächeln, kein Augenkontakt. Du nimmst das Kompliment wie von einer Fremden — weil sie für dein Nervensystem genau das sein darf. Vorbildlich.",
      },
      {
        text: "„Du auch. Wie geht's dir?”",
        verdict: "bait",
        feedback:
          "Reflex-Höflichkeit. Verständlich — aber genau jetzt beginnt das Gespräch, das du nicht führen willst. In 5 Minuten stehst du in einer Konversation über ihr Leben.",
      },
      {
        text: "(Komplett ignorieren, so tun als hättest du nichts gehört)",
        verdict: "leak",
        feedback:
          "Riskant. Demonstratives Ignorieren ist auch eine Reaktion — sie zeigt ihr, dass du noch zu sehr triggerst, um normal zu antworten. Ein neutrales „Danke” + Weggehen wirkt souveräner und ist energetisch sauberer.",
      },
    ],
  },
  {
    id: "s7",
    context: "Sie postet in eurer gemeinsamen WhatsApp-Gruppe:",
    her: "„Hey ihr Lieben, ich brauche gerade dringend jemanden zum Reden. Hat jemand Zeit?”",
    options: [
      {
        text: "Nicht reagieren. Gruppe stumm schalten.",
        verdict: "rock",
        feedback:
          "Du erkennst das Muster: Gruppen-Hoovering. Sie wirft den Köder breit aus und wartet, wer anbeißt. Du musst nicht reagieren — die anderen werden sich melden. Stummschalten schützt deinen Kopf für die nächsten Stunden.",
      },
      {
        text: "Privat schreiben: „Ich kann gerade nicht, alles okay bei dir?”",
        verdict: "bait",
        feedback:
          "Voll geschluckt. Du bist die Erste, die antwortet — privat, besorgt, fürsorglich. Sie hat exakt das bekommen, was sie wollte. Dein Helfer-Reflex ist genau die Tür, durch die sie zurückkommt.",
      },
      {
        text: "Mit einem Herz-Emoji reagieren.",
        verdict: "leak",
        feedback:
          "Ein Mini-Signal — und für sie ein klares Zeichen: Du bist noch erreichbar. Emojis fühlen sich harmlos an, sind aber Mikro-Brücken. In ihrem Kopf bedeutet das: „Sie denkt noch an mich.”",
      },
    ],
  },
  {
    id: "s8",
    context: "Beim Verlassen des Yoga-Studios, sie wartet draußen.",
    her: "„Bitte. Nur fünf Minuten. Ich muss dir etwas erklären.”",
    options: [
      {
        text: "„Nein.” – weitergehen, nicht stehen bleiben.",
        verdict: "rock",
        feedback:
          "Das vollständigste Nein, das es gibt: ein Wort, kein Augenkontakt, kein Innehalten. Du musst keine Begründung liefern. „Nein” ist ein vollständiger Satz. Dein Körper bleibt in Bewegung — das hält dein Nervensystem reguliert.",
      },
      {
        text: "„Jetzt nicht, vielleicht ein anderes Mal.”",
        verdict: "leak",
        feedback:
          "Du hast die Tür für später geöffnet. Sie wird es als Zusage hören und in einer Woche wieder vor dem Yoga-Studio stehen. „Vielleicht” ist hier nicht Grey Rock — es ist ein Versprechen.",
      },
      {
        text: "„Was willst du erklären?” (kurz stehen bleiben)",
        verdict: "bait",
        feedback:
          "Sobald du stehen bleibst, hat sie ihre fünf Minuten. Und nach den fünf Minuten kommen die nächsten fünf. Dein Körper bleibt in Bewegung — das ist die einzige Regel.",
      },
    ],
  },
];

const VERDICT_META: Record<
  Verdict,
  { label: string; color: string; bg: string; ring: string; Icon: typeof CheckCircle2 }
> = {
  rock: {
    label: "Grey Rock · perfekt",
    color: "text-emerald-700",
    bg: "bg-emerald-50/80",
    ring: "ring-emerald-300/60",
    Icon: CheckCircle2,
  },
  leak: {
    label: "Subtiles Leck",
    color: "text-amber-700",
    bg: "bg-amber-50/80",
    ring: "ring-amber-300/60",
    Icon: AlertTriangle,
  },
  bait: {
    label: "Köder geschluckt",
    color: "text-rose-700",
    bg: "bg-rose-50/80",
    ring: "ring-rose-300/60",
    Icon: XCircle,
  },
};

type SimState = {
  // map scenarioId -> chosen option index
  picks: Record<string, number>;
};

export function GreyRockSimulator({ slug }: { slug: string }) {
  const { exerciseState, setExercise, loaded } = useModuleProgress(slug);
  const saved = (exerciseState?.greyrock_sim as SimState | undefined) ?? { picks: {} };
  const [picks, setPicks] = useState<Record<string, number>>(saved.picks);
  const [activeIdx, setActiveIdx] = useState(0);

  // Sync from storage once loaded
  useMemo(() => {
    if (loaded) setPicks(saved.picks);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loaded]);

  const scenario = SCENARIOS[activeIdx];
  const chosenIdx = picks[scenario.id];
  const chosen = chosenIdx !== undefined ? scenario.options[chosenIdx] : null;

  const totalAnswered = Object.keys(picks).length;
  const rockCount = Object.entries(picks).filter(
    ([sid, idx]) => SCENARIOS.find((s) => s.id === sid)?.options[idx].verdict === "rock",
  ).length;
  const allDone = totalAnswered === SCENARIOS.length;

  function pick(optIdx: number) {
    const next = { ...picks, [scenario.id]: optIdx };
    setPicks(next);
    setExercise("greyrock_sim", { picks: next });
  }

  function reset() {
    setPicks({});
    setExercise("greyrock_sim", { picks: {} });
    setActiveIdx(0);
  }

  function goNext() {
    if (activeIdx < SCENARIOS.length - 1) setActiveIdx((i) => i + 1);
  }

  return (
    <ExerciseFrame
      title="Übung 2 · Grey-Rock-Simulator"
      subtitle="Acht typische Sätze, die sie sagen wird. Wähle deine Antwort — und sieh sofort, was in eurem Bindungssystem passiert. Übe es jetzt, damit dein Nervensystem im Ernstfall den Reflex schon kennt."
      meta="🗿 Rollenspiel · 8 Szenarien · ~7 Min"
      accent="bordeaux"
    >
      {/* Fortschritt + Score */}
      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 rounded-xl bg-bordeaux/5 px-3 py-2 text-xs">
        <div className="flex items-center gap-2 font-medium text-bordeaux">
          <Sparkles className="h-3.5 w-3.5" />
          Szenario {activeIdx + 1} von {SCENARIOS.length} · {totalAnswered}/{SCENARIOS.length}{" "}
          beantwortet
        </div>
        <div className="flex items-center gap-3">
          <span className="font-semibold text-emerald-700">🗿 {rockCount}× perfekt</span>
          {totalAnswered > 0 && (
            <button
              type="button"
              onClick={reset}
              className="inline-flex items-center gap-1 rounded-full bg-white/70 px-2 py-1 font-medium text-graphite/70 transition hover:text-bordeaux"
            >
              <RotateCcw className="h-3 w-3" /> Reset
            </button>
          )}
        </div>
      </div>

      {/* Szenario-Tabs (kleine Punkte) */}
      <div className="mt-3 flex flex-wrap gap-1.5">
        {SCENARIOS.map((s, i) => {
          const p = picks[s.id];
          const v = p !== undefined ? s.options[p].verdict : null;
          const dot =
            v === "rock"
              ? "bg-emerald-500"
              : v === "leak"
                ? "bg-amber-500"
                : v === "bait"
                  ? "bg-rose-500"
                  : "bg-graphite/20";
          return (
            <button
              key={s.id}
              type="button"
              onClick={() => setActiveIdx(i)}
              className={`flex h-7 w-7 items-center justify-center rounded-full text-[11px] font-semibold transition ${
                i === activeIdx
                  ? "ring-2 ring-bordeaux ring-offset-1 ring-offset-white"
                  : "opacity-80 hover:opacity-100"
              } ${dot} ${v ? "text-white" : "text-graphite/60"}`}
              aria-label={`Szenario ${i + 1}`}
            >
              {i + 1}
            </button>
          );
        })}
      </div>

      {/* Kontext */}
      <p className="mt-5 text-xs uppercase tracking-wider text-mauve/85">
        Szene · {scenario.context}
      </p>

      {/* Sprechblase Sie */}
      <div className="mt-2 flex items-start gap-3">
        <div
          className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full text-sm font-bold text-white shadow-sm"
          style={{ background: "var(--color-bordeaux)" }}
          aria-hidden
        >
          S
        </div>
        <div className="relative max-w-[85%] rounded-2xl rounded-tl-sm bg-bordeaux/10 px-4 py-3 text-sm leading-relaxed text-graphite shadow-sm">
          <MessageCircle className="absolute -left-1 -top-1 h-3 w-3 text-bordeaux/40" />
          {scenario.her}
        </div>
      </div>

      {/* Antwortoptionen */}
      <div className="mt-5 space-y-2">
        <p className="text-xs font-semibold uppercase tracking-wider text-mauve/85">
          Deine Antwort:
        </p>
        {scenario.options.map((opt, i) => {
          const isPicked = chosenIdx === i;
          const meta = VERDICT_META[opt.verdict];
          return (
            <button
              key={i}
              type="button"
              onClick={() => pick(i)}
              disabled={chosenIdx !== undefined && !isPicked}
              className={`group block w-full rounded-xl border px-4 py-3 text-left text-sm transition ${
                isPicked
                  ? `${meta.bg} ${meta.ring} ring-2 border-transparent`
                  : chosenIdx !== undefined
                    ? "border-graphite/10 bg-white/40 text-graphite/40"
                    : "border-graphite/15 bg-white/70 text-graphite hover:border-bordeaux/40 hover:bg-white"
              }`}
            >
              <div className="flex items-start gap-3">
                <span
                  className={`mt-0.5 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full border text-[10px] font-bold ${
                    isPicked
                      ? "border-transparent bg-white/80"
                      : "border-graphite/30 bg-white text-graphite/60"
                  }`}
                >
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="leading-relaxed">{opt.text}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Feedback */}
      {chosen && (
        <div
          className={`mt-4 rounded-xl px-4 py-3 ring-1 animate-fade-in ${
            VERDICT_META[chosen.verdict].bg
          } ${VERDICT_META[chosen.verdict].ring}`}
        >
          <div
            className={`flex items-center gap-2 text-xs font-bold uppercase tracking-wider ${
              VERDICT_META[chosen.verdict].color
            }`}
          >
            {(() => {
              const I = VERDICT_META[chosen.verdict].Icon;
              return <I className="h-4 w-4" />;
            })()}
            {VERDICT_META[chosen.verdict].label}
          </div>
          <p className="mt-2 text-sm leading-relaxed text-graphite/90">{chosen.feedback}</p>

          {activeIdx < SCENARIOS.length - 1 && (
            <button
              type="button"
              onClick={goNext}
              className="mt-3 inline-flex items-center gap-1.5 rounded-full bg-bordeaux px-4 py-1.5 text-xs font-semibold text-white shadow-sm transition hover:bg-bordeaux/90"
            >
              Nächstes Szenario →
            </button>
          )}
        </div>
      )}

      {/* Abschluss-Auswertung */}
      {allDone && (
        <div className="mt-5 rounded-2xl border border-bordeaux/20 bg-gradient-to-br from-bordeaux/5 to-mauve/10 p-4 animate-fade-in">
          <p className="text-xs font-bold uppercase tracking-wider text-bordeaux">
            ✦ Dein Grey-Rock-Profil
          </p>
          <p className="mt-2 text-sm leading-relaxed text-graphite/90">
            Von 8 Szenarien hast du <strong>{rockCount}× perfekten Grey Rock</strong> gewählt.{" "}
            {rockCount >= 6
              ? "Beeindruckend. Dein Nervensystem hat das Skript verinnerlicht — du bist bereit."
              : rockCount >= 3
                ? "Solide Basis. Geh die gelben/roten Szenarien nochmal durch und spür, warum die Grey-Rock-Variante dich besser schützt."
                : "Das ist okay. Dein Helfer- und Erklärungsreflex ist tief eingegraben — und genau den nutzt sie aus. Wiederhol die Übung in ein paar Tagen. Dein Nervensystem lernt."}
          </p>
        </div>
      )}
    </ExerciseFrame>
  );
}
