import {
  ScrollText,
  Brain,
  Lightbulb,
  Microscope,
  ShieldAlert,
  Phone,
  ExternalLink,
} from "lucide-react";
import { ChapterIntro } from "@/components/chapter-intro";
import { ChecklistGoals } from "@/components/checklist-goals";
import { BonusLock } from "@/components/bonus-lock";
import { WitnessCircle } from "@/components/exercise/witness-circle";
import { LetterToAuthority } from "@/components/exercise/letter-to-authority";
import { BehoerdenBriefCoach } from "@/components/exercise/behoerden-brief-coach";
import { BehoerdenBingo } from "@/components/exercise/behoerden-bingo";
import { Reflection3Step } from "@/components/exercise";
import { useModuleProgress } from "@/hooks/use-module-progress";
import { ExerciseFrame } from "@/components/exercise/exercise-frame";

const SLUG = "bonus-d";

/**
 * BONUS D · Wenn Behörden zur Waffe werden
 *
 * Quelle: UNBOND_Final_v5.html (Zeilen 4263–6520) + Phase-2-Briefing.
 *
 * Pflicht-Elemente laut Briefing:
 *   ✓ Einführungstext ≥5 Abschnitte
 *   ✓ Mary&Sandra Story 3 Absätze (Polizei · Marys Reaktion · Anhörung mit Ex-Frau als Zeugin)
 *   ✓ ≥3 wiss. Konzepte mit Quellen (Litigation Abuse, DARVO, Institutional Betrayal, Badenes-Ribera)
 *   ✓ ≥3 Übungen (Reflexion-Chronik, Zeug*innen-Kreis, Brief an Behörde)
 *   ✓ 1 Reflexionsfeld (in Übung 1 — Reflection3Step)
 *   ✓ 5 Transformationsziele
 *   ✓ Vorlagen + queere Ressourcen + Krisen-Hotlines
 *
 * Sperre: Story + Diagnose offen, Übungen + Transformationsziele hinter BonusLock
 *         (Code: UNBOND-COMPLETE-2025 oder UNBOND-BONUS-D-2025).
 */
export function BonusD() {
  return (
    <article className="space-y-7">
      {/* ── Einleitung ── */}
      <ChapterIntro
        title="Bonus D · Wenn Behörden zur Waffe werden"
        keywords={[
          "Litigation Abuse",
          "DARVO",
          "Institutional Betrayal",
          "Dokumentation",
          "Vorsorge",
        ]}
      >
        <p>
          Wenn deine Ex Polizei, Jugendamt oder Anwält*innen einschaltet, ist das
          meist <strong>keine berechtigte Sorge — sondern die letzte Eskalationsstufe</strong>{" "}
          eines Kontrollsystems. In WLW-Beziehungen besonders gefährlich, weil
          Behörden die Dynamik selten kennen. Dieses Kapitel gibt dir die nüchterne
          Werkzeugkiste — Dokumentation, anwaltliche Vorsorge, Zeug*innen, vorbereitete
          Briefe — damit du im Ernstfall handlungsfähig bleibst statt erstarrt.
        </p>
      </ChapterIntro>

      {/* ── STORY · Polizei vor der Tür (kompakt mit Cliffhänger) ── */}
      <section className="space-y-3">
        <p className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-sage">
          <ScrollText className="h-3.5 w-3.5" />
          Story · Dienstag, 9:47 Uhr
        </p>
        <div
          className="rounded-2xl bg-white/75 p-5 shadow-soft sm:p-6"
          style={{ borderLeft: "5px solid var(--color-sage)" }}
        >
          <div className="space-y-3 text-sm leading-relaxed text-graphite/90">
            <p>
              Es klingelt. Mary öffnet — <strong>drei Polizist*innen</strong>.
              Eine „besorgte Bürgerin" habe gemeldet: instabiles häusliches
              Umfeld, psychische Belastung der Mutter, Kinder in Gefahr. Marys
              Hände werden kalt. Sie weiß sofort, wer dahintersteckt. Sandra
              hat nie akzeptiert, dass Mary gegangen ist — und jetzt, wo
              Blockieren und Breadcrumbing nicht mehr greifen, zieht sie den
              schwersten Hebel: <em>den Staat</em>.
            </p>
            <p>
              In Marys Kopf: Panik, Wut, Scham. <em>Bin ich eine schlechte
              Mutter? Was, wenn sie mir die Kinder wegnehmen?</em> Der
              vertraute Selbstzweifel-Nebel kriecht zurück. Aber diesmal greift
              Mary nicht zum Telefon, um Sandra anzuflehen. Sie greift zu
              ihrem Dokumentations-Ordner — und ruft ihre Anwältin an.
            </p>
            <p
              className="rounded-lg p-3 text-sm italic"
              style={{
                background:
                  "color-mix(in oklab, var(--color-bordeaux) 6%, transparent)",
                borderLeft: "3px solid var(--color-bordeaux)",
              }}
            >
              Drei Wochen später, Anhörungstermin Jugendamt. Sandra hat eine
              Zeugin mitgebracht, die Mary „seit Jahren" als instabil
              beschreiben soll. Mary hat <em>auch</em> jemanden mitgebracht —
              jemanden, mit dem niemand gerechnet hat …{" "}
              <span className="not-italic font-semibold text-bordeaux">
                Was Mary in den nächsten 40 Minuten lernt, ist die wichtigste
                Lektion dieses Kapitels: Vorbereitung schlägt Reaktion. Immer.
              </span>
            </p>
            <p className="text-[11px] text-graphite/55">
              → Wie der Termin ausgeht und wer Marys Zeugin war, erfährst du
              am Ende — nach Diagnose, Lösung und deinen drei Übungen.
            </p>
          </div>
        </div>
      </section>

      {/* ── DIAGNOSE ── */}
      <section className="space-y-3">
        <p className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-bordeaux">
          <Brain className="h-3.5 w-3.5" />
          Diagnose · Litigation Abuse & DARVO
        </p>
        <div className="rounded-2xl bg-white/80 p-5 shadow-soft sm:p-6"
          style={{ borderLeft: "5px solid var(--color-bordeaux)" }}>
          <h3 className="font-display text-base font-bold text-bordeaux">
            Wenn das System zur Verlängerung der Kontrolle wird
          </h3>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-graphite/90">
            <p>
              <strong>Litigation Abuse</strong> — der Missbrauch des
              Rechtssystems als Verlängerung häuslicher Gewalt — ist ein
              dokumentiertes Phänomen. Elizabeth M. Schneider beschrieb bereits
              2000, wie Täter*innen das Rechtssystem strategisch nutzen, um
              Kontrolle über ihre ehemaligen Partner*innen aufrechtzuerhalten:
              durch falsche Anschuldigungen, Sorgerechtsstreitigkeiten oder das
              Einschalten von Behörden als Druckmittel.
            </p>
            <p>
              In WLW-Beziehungen verschärft sich die Lage durch die
              gesellschaftliche Unsichtbarkeit queerer häuslicher Gewalt.
              Behörden erkennen die Dynamik oft nicht. Wenn deine Ex eine
              Meldung beim Jugendamt macht oder die Polizei ruft, wirkt sie
              nach außen wie die „besorgte Partnerin" — während du als die
              vermeintlich Instabile dastehst.
            </p>
          </div>

          {/* DARVO-Schema */}
          <div className="mt-4 space-y-2.5">
            <div
              className="rounded-lg p-3"
              style={{
                background: "color-mix(in oklab, var(--color-bordeaux) 8%, transparent)",
                borderLeft: "4px solid var(--color-bordeaux)",
              }}
            >
              <strong className="text-bordeaux">D — Deny (Leugnen):</strong>{" "}
              <span className="text-sm text-graphite/90">
                „Das habe ich nie gesagt. Du interpretierst alles falsch."
              </span>
            </div>
            <div
              className="rounded-lg p-3"
              style={{
                background: "color-mix(in oklab, var(--color-terracotta) 12%, transparent)",
                borderLeft: "4px solid var(--color-terracotta)",
              }}
            >
              <strong className="text-terracotta">A — Attack (Angreifen):</strong>{" "}
              <span className="text-sm text-graphite/90">
                „Du bist instabil. Du brauchst Hilfe. Deine Medikamente funktionieren nicht."
              </span>
            </div>
            <div
              className="rounded-lg p-3"
              style={{
                background: "color-mix(in oklab, var(--color-graphite) 8%, transparent)",
                borderLeft: "4px solid var(--color-graphite)",
              }}
            >
              <strong className="text-graphite">RVO — Reverse Victim & Offender:</strong>{" "}
              <span className="text-sm text-graphite/90">
                Sie wird zum Opfer, du zur Täterin. Behörden sehen nur ihre Darstellung.
              </span>
            </div>
          </div>

          <p className="mt-3 text-sm leading-relaxed text-graphite/90">
            Jennifer Freyd identifizierte DARVO als eine der effektivsten
            Strategien zur Aufrechterhaltung von Macht nach einer Trennung. Das
            Muster ist besonders wirksam, wenn Behörden die Dynamik queerer
            Beziehungen nicht kennen.
          </p>
        </div>
      </section>

      {/* ── LÖSUNG · drei Säulen ── */}
      <section className="space-y-3">
        <p className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-sage">
          <Lightbulb className="h-3.5 w-3.5" />
          Lösung · Dokumentation · Vorsorge · Netzwerk
        </p>

        <div className="space-y-3">
          {[
            {
              title: "Dokumentation ist Selbstschutz",
              text: "In Behördenverfahren zählt nicht, wer die Wahrheit sagt — es zählt, wer die Wahrheit belegen kann. Eine lückenlose, chronologische Dokumentation aller Vorfälle, Kontakte und Manipulationsversuche ist dein wichtigstes Werkzeug. Nicht für Konfrontation, nicht für Rache — sondern für deinen Schutz und den deiner Kinder.",
            },
            {
              title: "Rechtliche Vorsorge VOR der Eskalation",
              text: "Warte nicht, bis die Polizei vor der Tür steht. Wenn du weißt, dass deine Ex zu institutioneller Eskalation fähig ist, kläre den Kontakt zu einer Anwältin vorab. Viele Beratungsstellen bieten kostenlose Erstgespräche. Du brauchst keine laufende Bedrohung, um dich beraten zu lassen — nur die realistische Einschätzung, dass eine Bedrohung möglich ist.",
            },
            {
              title: "Vertrauenspersonen als Zeug*innen deiner Realität",
              text: "Informiere mindestens zwei bis drei Vertrauenspersonen vollständig über die Situation — bevor eine Eskalation eintritt. Diese Menschen dienen als Zeug*innen deiner Realität: Sie kennen den Kontext, können Behörden gegenüber bestätigen, was du durchgemacht hast, und verhindern, dass deine Ex allein die Narration kontrolliert. Das ist keine Paranoia — das ist Vorsorge.",
            },
          ].map((p) => (
            <div
              key={p.title}
              className="rounded-xl bg-white/80 p-4 shadow-soft"
              style={{ borderLeft: "4px solid var(--color-sage)" }}
            >
              <strong className="text-bordeaux">{p.title}</strong>
              <p className="mt-1.5 text-sm leading-relaxed text-graphite/90">
                {p.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* ── DEEP DIVE · Institutional Betrayal ── */}
      <section className="space-y-3">
        <p className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-mauve">
          <Microscope className="h-3.5 w-3.5" />
          Deep Dive · Institutional Betrayal in queeren Kontexten
        </p>
        <div className="rounded-2xl bg-mauve/5 p-5 shadow-soft sm:p-6"
          style={{ borderLeft: "5px solid var(--color-mauve)" }}>
          <h3 className="font-display text-base font-bold text-bordeaux">
            Wenn Institutionen versagen
          </h3>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-graphite/90">
            <p>
              Carly P. Smith und Jennifer Freyd prägten den Begriff{" "}
              <em>Institutional Betrayal</em> (2013, 2014): den Verrat durch
              Institutionen, denen man vertrauen sollte. Wenn Polizei,
              Jugendamt oder Gerichte die Manipulation einer Täterin nicht
              erkennen — oder schlimmer, ihr Glauben schenken —, wird das
              Trauma nicht nur aufrechterhalten, sondern institutionell
              verstärkt. Betroffene erleben einen <strong>doppelten Verrat</strong>:
              zuerst durch die Partnerin, dann durch das System.
            </p>
            <p>
              In queeren Kontexten verschärft sich dieses Problem deutlich.
              Badenes-Ribera et al. (2019) zeigten in einer Meta-Analyse, dass
              häusliche Gewalt in gleichgeschlechtlichen Beziehungen von
              Behörden systematisch unterschätzt wird. Die Annahme, dass
              „zwischen zwei Frauen keine Gewalt stattfinden kann", macht es
              Täterinnen leicht, sich als besorgte Partnerin darzustellen —
              während die tatsächlich Betroffene als die Instabile wahrgenommen
              wird.
            </p>
            <p>
              DARVO ist dabei die Kernstrategie: Die Täterin leugnet ihr
              Verhalten, greift die Betroffene an und kehrt die Rollen um.
              Freyd (1997) dokumentierte, dass DARVO besonders wirksam ist,
              wenn ein Machtgefälle besteht — und Behördenkontakt erzeugt
              genau dieses Gefälle: Die Täterin steht auf der Seite des
              Systems, die Betroffene muss sich verteidigen.
            </p>
            <p className="text-xs italic text-graphite/65">
              Quellen: Smith, C. P. & Freyd, J. J. (2013). Institutional
              betrayal. <em>American Psychologist</em>, 68(8); Freyd, J. J.
              (1997). <em>Violations of power, adaptive blindness, and betrayal
              trauma theory</em>; Badenes-Ribera, L. et al. (2019). Intimate
              partner violence in LGBTQ+ relationships. <em>Trauma, Violence
              & Abuse</em>, 20(2); Schneider, E. M. (2000).{" "}
              <em>Battered Women & Feminist Lawmaking</em>. Yale University Press.
            </p>
          </div>
        </div>
      </section>

      {/* ── Krisen-Hinweis & queere Ressourcen ── */}
      <section className="space-y-3">
        <div
          className="rounded-2xl border border-bordeaux/30 bg-bordeaux/5 p-5"
          style={{ borderLeft: "5px solid var(--color-bordeaux)" }}
        >
          <p className="inline-flex items-center gap-1.5 font-semibold text-bordeaux">
            <ShieldAlert className="h-4 w-4" />
            Wichtiger Hinweis
          </p>
          <p className="mt-2 text-sm leading-relaxed text-graphite/90">
            Dieses Kapitel ersetzt keine Rechtsberatung. Bei laufenden
            Verfahren, Sorgerechtsstreitigkeiten oder behördlichen
            Untersuchungen: Nimm sofort anwaltlichen Beistand in Anspruch.
          </p>

          <ul className="mt-4 space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-bordeaux" />
              <span>
                <strong>Hilfetelefon Gewalt gegen Frauen:</strong>{" "}
                <a href="tel:08000116016" className="font-semibold text-bordeaux underline">
                  08000 116 016
                </a>{" "}
                — kostenlos, anonym, 24/7. Berät auch queere Frauen.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-bordeaux" />
              <span>
                <strong>Frauenhauskoordinierung:</strong>{" "}
                <a href="tel:08000116016" className="font-semibold text-bordeaux underline">
                  08000 116 016
                </a>{" "}
                — vermittelt Schutzplätze deutschlandweit.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <ExternalLink className="mt-0.5 h-4 w-4 flex-shrink-0 text-bordeaux" />
              <span>
                <strong>LSVD (Lesben- und Schwulenverband):</strong>{" "}
                <a
                  href="https://www.lsvd.de/de/ct/19-Beratung-zu-haeuslicher-Gewalt"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-bordeaux underline"
                >
                  lsvd.de
                </a>{" "}
                — Beratung speziell zu häuslicher Gewalt in queeren Beziehungen.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <ExternalLink className="mt-0.5 h-4 w-4 flex-shrink-0 text-bordeaux" />
              <span>
                <strong>Antidiskriminierungsstelle des Bundes:</strong>{" "}
                <a
                  href="https://www.antidiskriminierungsstelle.de"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-bordeaux underline"
                >
                  antidiskriminierungsstelle.de
                </a>{" "}
                — kostenlose Erstberatung.
              </span>
            </li>
            <li className="flex items-start gap-2">
              <ExternalLink className="mt-0.5 h-4 w-4 flex-shrink-0 text-bordeaux" />
              <span>
                <strong>Lesbenberatung Berlin (LesMigraS):</strong>{" "}
                <a
                  href="https://www.lesmigras.de"
                  target="_blank"
                  rel="noreferrer"
                  className="font-semibold text-bordeaux underline"
                >
                  lesmigras.de
                </a>{" "}
                — Antigewaltberatung für lesbische, bisexuelle Frauen und Trans*-Personen.
              </span>
            </li>
          </ul>
        </div>
      </section>

      {/* ── ÜBUNGEN + ZIELE — hinter Lock ── */}
      <BonusLock slug={SLUG} bonusLabel="Bonus D">
        <section className="space-y-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-terracotta">
            ✏️ Übungen · 5 Transformationsziele
          </p>

          {/* Übung 1 — Reflexion / Chronik */}
          <Reflection3Step
            slug={SLUG}
            title="Übung 1 · Meine Chronik beginnen"
            subtitle="Schreibe deine Geschichte in deinen Worten — sachlich, chronologisch. Diese Chronik ist nur für dich (und ggf. deine Anwältin)."
            meta="📋 Chronik · ⏱ 25 Min"
            accent="bordeaux"
            steps={[
              {
                key: "bd-chronik-what",
                label: "Was in der Beziehung passierte (sachlich, in deinen Worten)",
                placeholder:
                  "Beschreibe Schlüssel-Vorfälle mit Datum, Ort, was konkret gesagt/getan wurde. Keine Bewertung — nur Fakten.",
              },
              {
                key: "bd-chronik-sep",
                label: "Wie die Trennung verlief",
                placeholder:
                  "Wann hast du dich getrennt? Wie hat sie reagiert? Welche Drohungen / Manipulationsversuche gab es?",
              },
              {
                key: "bd-chronik-after",
                label: "Welches Verhalten nach der Trennung folgte (und warum du es als Kontrolle erkennst)",
                placeholder:
                  "Nachrichten, Anrufe, Dritte einschalten, Rufschädigung, Behördenkontakt … und warum du sicher bist, dass es Kontrolle ist und keine berechtigte Sorge.",
              },
            ]}
          />

          {/* Übung 2 — Notfall-Netzwerk */}
          <NotfallNetzwerk />

          {/* Übung 3 — Zeug*innen-Kreis */}
          <WitnessCircle slug={SLUG} storageKey="bd-witnesses" />

          {/* Übung 4 — Brief an Behörde */}
          <LetterToAuthority slug={SLUG} storageKey="bd-letter" />

          {/* Übung 5 — KI Brief-Coach */}
          <BehoerdenBriefCoach slug={SLUG} />

          {/* Übung 6 — Behörden-Bingo (interaktiv) */}
          <BehoerdenBingo />

          {/* Transformationsziele */}
          <ChecklistGoals
            slug={SLUG}
            goals={[
              {
                id: "g1",
                text: "Ich verstehe Behördeneinsatz als Eskalationstaktik, nicht als berechtigte Sorge.",
              },
              {
                id: "g2",
                text: "Ich habe meine Chronik begonnen — meine Version der Geschichte ist gesichert.",
              },
              {
                id: "g3",
                text: "Ich habe den Kontakt zu einer Anwältin oder Beratungsstelle hergestellt (oder vorbereitet).",
              },
              {
                id: "g4",
                text: "Ich habe mindestens zwei Zeug*innen vollständig informiert.",
              },
              {
                id: "g5",
                text: "Ich habe meinen Brief-Vorlage angepasst und weiß, was ich im Ernstfall sende.",
              },
            ]}
          />

          {/* Story-Auflösung · Cliffhänger schließt sich */}
          <div
            className="rounded-2xl bg-white/80 p-5 shadow-soft sm:p-6"
            style={{ borderLeft: "5px solid var(--color-sage)" }}
          >
            <p className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-sage">
              <ScrollText className="h-3.5 w-3.5" />
              Auflösung · Wer war Marys Zeugin?
            </p>
            <div className="mt-3 space-y-3 text-sm leading-relaxed text-graphite/90">
              <p>
                Marys Zeugin war ihre <strong>Ex-Frau aus der Zeit vor
                Sandra</strong> — die Frau, mit der sie jahrelang eine gesunde
                Beziehung geführt hatte. Trotz eigener Trennungs­geschichte
                zögert sie im Termin keine Sekunde. Sie bestätigt Marys
                Integrität und sagt einen Satz, der die Sachbearbeiterin
                aufhorchen lässt: Sie habe Sandra <em>jahrelang als
                Außenstehende</em> beobachten können und Mary mehrfach gewarnt,
                dass Sandra starke narzisstische Züge zeige — auch wenn sie
                nach außen die Unschuld in Person spiele.
              </p>
              <p>
                Das Verfahren wird wenige Wochen später eingestellt. Mary
                versteht in diesem Moment, was die Werkzeuge dieses Kapitels
                wirklich bedeuten:{" "}
                <em>Vorbereitung schlägt Reaktion. Immer.</em>
              </p>
            </div>
          </div>
        </section>
      </BonusLock>
    </article>
  );
}

/**
 * Übung 2 · Notfall-Netzwerk-Felder (3 Textareas)
 * Inline-Komponente, weil sehr spezifisch zu Bonus D.
 */
type NetState = { anwalt: string; vertrauen: string; plan: string };
const NET_EMPTY: NetState = { anwalt: "", vertrauen: "", plan: "" };

function NotfallNetzwerk() {
  const { exerciseState, setExercise, loaded } = useModuleProgress(SLUG);
  if (!loaded) return null;
  const state: NetState = exerciseState["bd-netzwerk"] ?? NET_EMPTY;
  const update = (patch: Partial<NetState>) =>
    setExercise("bd-netzwerk", { ...state, ...patch });

  const fields: { key: keyof NetState; label: string; placeholder: string }[] = [
    {
      key: "anwalt",
      label: "Meine Anwältin / Rechtsberatung (Name, Kontakt)",
      placeholder:
        "Falls noch nicht vorhanden: Frauenberatungsstelle in deiner Stadt für Erstberatung kontaktieren.",
    },
    {
      key: "vertrauen",
      label: "Meine Vertrauensperson (vollständig informiert)",
      placeholder: "Name, Telefon, was sie weiß",
    },
    {
      key: "plan",
      label: "Mein Plan bei behördlichem Kontakt",
      placeholder:
        "1. Nicht in Panik geraten\n2. Anwältin anrufen BEVOR ich reagiere\n3. Kein Geständnis, kein Drama — nur formale Kanäle\n4. Dokumentation bereithalten",
    },
  ];

  return (
    <ExerciseFrame
      title="Übung 2 · Mein Notfall-Netzwerk aufbauen"
      subtitle="Plane dein Schutznetz bewusst — bevor du es brauchst."
      meta="🛡️ Vorsorge · ⏱ 10 Min"
      accent="mauve"
    >
      {fields.map((f) => (
        <div key={f.key}>
          <label className="text-[11px] font-semibold uppercase tracking-wider text-bordeaux">
            {f.label}
          </label>
          <textarea
            value={state[f.key]}
            onChange={(e) => update({ [f.key]: e.target.value } as Partial<NetState>)}
            placeholder={f.placeholder}
            rows={3}
            className="mt-1 w-full resize-y rounded-md border border-mauve/25 bg-white/85 p-2.5 text-sm leading-snug text-graphite outline-none transition focus:border-mauve focus:ring-2 focus:ring-mauve/15"
          />
        </div>
      ))}
    </ExerciseFrame>
  );
}
