import {
  ScrollText,
  Brain,
  Lightbulb,
  Microscope,
  Map,
  Waves,
  Quote,
} from "lucide-react";
import { GlossarTerm } from "@/components/glossar-term";
import { ChapterIntro } from "@/components/chapter-intro";
import {
  Reflection3Step,
  StackedCards,
  CalloutBold,
  TransformationGoals,
  MeditationCard,
} from "@/components/exercise";
import { UrgeSurfWave } from "@/components/exercise/urge-surf-wave";
import { TriggerStreakLog } from "@/components/exercise/trigger-streak-log";
import { IfThenTriggerPlan } from "@/components/exercise/if-then-trigger-plan";

const SLUG = "modul-04";

/**
 * MODUL 04 · Trigger entmachten
 * Quelle: UNBOND_Final_v5.html, Z. 3340–3540
 *
 * Roter Faden:
 *  No-Contact (Modul 03) blockiert AKTIVE Auslöser. Aber unsichtbare Reize
 *  (Lieder, Gerüche, Uhrzeiten) bleiben. Dieses Kapitel lehrt, sie zu erkennen
 *  (Trigger-Landkarte), kognitiv zu unterbrechen (ABC-Analyse) und körperlich
 *  zu überstehen (Urge Surfing).
 *
 * Pflichtelemente:
 *  - ChapterIntro
 *  - Story · Eine Welle bricht (Mary an der Supermarktkasse)
 *  - Diagnose · ABC-Modell (Ellis)
 *  - Lösung · Urge Surfing (Marlatt & Gordon)
 *  - Deep Dive · Cue-Reaktivität (LeDoux, Bouton)
 *  - 3 Originalübungen + Vibe-Check Urge-Surf-Wave
 *  - Transformationsziele
 */
export function Modul04() {
  return (
    <article className="space-y-7">
      {/* ── Einleitungs-Block ── */}
      <ChapterIntro
        title="Kapitel 04 · Trigger entmachten"
        keywords={[
          "ABC-Analyse",
          "Urge Surfing",
          "Cue-Reaktivität",
          "Inhibitionslernen",
        ]}
      >
        <p>
          No Contact hat die Tür geschlossen — aber ein Lied im Radio, ein
          Parfum, ein Blaulicht klopft trotzdem an. Das sind keine Schwächen,
          sondern <strong>konditionierte Reiz-Reaktions-Ketten</strong>, die dein
          Gehirn in der Beziehung gespeichert hat.
        </p>
        <p>
          Hier lernst du, sie zu kartieren statt vor ihnen zu fliehen, kognitiv
          zu unterbrechen statt sie zu verdrängen, und körperlich zu surfen
          statt in ihnen zu ertrinken.
        </p>
      </ChapterIntro>

      {/* ── Story · Eine Welle bricht ── */}
      <Section icon={<ScrollText className="h-4 w-4" />} label="Story · Eine Welle bricht">
        <div className="glass-card-strong p-5">
          <div className="space-y-3 text-sm leading-relaxed animate-fade-in-stagger">
            <h3 className="font-display text-base font-bold text-bordeaux">
              Mary an der Supermarktkasse
            </h3>
            <p>
              Mary steht an der Supermarktkasse und sortiert ihre Einkäufe, als
              draußen ein Polizeiblaulicht vorbeijagt. In Sekundenbruchteilen
              schießt ihr das Blut in den Kopf, ein eiskalter Schauer zieht die
              Wirbelsäule hinauf, das Sichtfeld verengt sich – nackte Panik.
              Kein bloßer Schreck. Ein Trauma-Flashback.
            </p>
            <p>
              Er katapultiert sie zurück in jene Nacht, in der Sandra in einer
              Krise nicht das Gespräch gesucht, sondern eiskalt Ämter und Polizei
              instrumentalisiert hatte, um Mary auf maximale strafrechtliche
              Distanz zu halten. Ein Akt der Feindseligkeit, der ihren letzten
              Rest fundamentaler Sicherheit zertrümmert hatte.
            </p>
            <p>
              Heute klammert sie sich kurz an den Einkaufswagen und wendet{" "}
              <GlossarTerm termKey="Urge Surfing">Urge Surfing</GlossarTerm> an.
              Drei Sekunden Augen zu, Metaposition. Sie kämpft nicht gegen die
              Panikwelle – sie beobachtet, wie sie aufsteigt, ihren Höhepunkt
              erreicht, und lässt sie ziehen wie eine Zeugin vom sicheren
              Strand. Ein langer, hörbarer Ausatem. Die Welle verliert ihr
              Momentum, bricht, fließt ab. Zehn Minuten später räumt Mary ruhig
              und ganz bei sich ihre Einkäufe in den Kofferraum.{" "}
              <strong>Der Trigger hat seine Macht verloren.</strong>
            </p>
          </div>
        </div>
      </Section>

      {/* ── Diagnose · ABC-Modell ── */}
      <Section icon={<Brain className="h-4 w-4" />} label="Diagnose · Was sind Trigger?">
        <CalloutBold
          kind="science"
          title="Konditionierte Reiz-Reaktions-Ketten"
          source="Ellis, A. (1962). Reason and Emotion in Psychotherapy."
        >
          <p>
            Ein Trigger ist eine gespeicherte Reiz-Reaktions-Kette in deinem
            Gehirn. Ein Lied, ein Ort, eine Uhrzeit, ein Geruch — alles, was
            dein Gehirn mit ihr verknüpft hat, kann den{" "}
            <GlossarTerm termKey="Dopamin">Dopamin</GlossarTerm>-Spike auslösen.
            Das ABC-Modell hilft dir, diese Ketten zu identifizieren und zu
            entschärfen:
          </p>
          <div className="mt-3 grid gap-2 sm:grid-cols-2">
            <ABCRow letter="A" name="Activating Event" desc="Der Auslöser" />
            <ABCRow letter="B" name="Belief" desc="Deine Bewertung" />
            <ABCRow letter="C" name="Consequence" desc="Dein Gefühl/Verhalten" />
            <ABCRow letter="D" name="Disputation" desc="Die neue, gesunde Bewertung" />
          </div>
        </CalloutBold>
      </Section>

      {/* ── Lösung · Urge Surfing ── */}
      <Section icon={<Lightbulb className="h-4 w-4" />} label="Lösung · Urge Surfing & Gegenkonditionierung">
        <CalloutBold
          kind="insight"
          title="Den Drang wie eine Welle reiten"
          source="Marlatt & Gordon (1985); Witkiewitz & Marlatt (2004)."
        >
          <p>
            Der Drang (Urge) zu kontaktieren fühlt sich an wie ein absoluter
            Befehl – aber er ist physiologisch nichts anderes als eine Welle
            aus Neurotransmittern, die aufsteigt, ihren Höhepunkt erreicht und
            von selbst wieder abfällt.
          </p>
          <p>
            🧠 Klinische Studien zeigen: Das bloße Aushalten des Cravings ohne
            Handeln schwächt die neuronale Verknüpfung zwischen Cue und
            Verhalten ab. Dein Gehirn lernt:{" "}
            <strong>Drang bedeutet keine Verpflichtung.</strong>
          </p>
          <p>
            Die ABC-Analyse ergänzt dies kognitiv – sie unterbricht die Kette,
            bevor Impuls zu Handlung wird. Deine Trigger-Landkarte macht das
            Unsichtbare sichtbar: Du kennst deine Minenfelder, bevor du in sie
            trittst.
          </p>
        </CalloutBold>
      </Section>

      {/* ── Übungen ── */}
      <Section icon={<Map className="h-4 w-4" />} label="Übungen">
        <div className="space-y-5">
          {/* Übung 1: Trigger-Landkarte */}
          <Reflection3Step
            slug={SLUG}
            title="Übung 1 · Meine Trigger-Landkarte"
            subtitle="Identifiziere deine persönlichen Minenfelder. Was triggert dich am stärksten?"
            meta="🗺️ Trigger-Inventur · ~8 Min"
            accent="terracotta"
            steps={[
              {
                key: "trg_top5",
                label: "Meine Top-5-Trigger",
                placeholder:
                  "z.B.\n1. Sonntagabende allein\n2. Unser gemeinsames Lied im Radio\n3. Orte, an denen wir zusammen waren\n4. Bestimmte Uhrzeiten (22 Uhr)\n5. Ihr Parfum an anderen Menschen",
                rows: 6,
              },
              {
                key: "trg_intensitaet",
                label: "Welcher davon trifft mich am härtesten – und warum?",
                placeholder: "Der stärkste Trigger ist … weil er …",
                rows: 3,
              },
              {
                key: "trg_kontext",
                label: "In welchem Kontext tauchen sie meistens auf?",
                placeholder: "z.B. abends, wenn ich müde bin / in Begegnungen mit anderen Paaren …",
                rows: 3,
              },
            ]}
          />

          {/* Übung 2: ABC-Analyse als progressive 4-Felder-Karte */}
          <StackedCards
            slug={SLUG}
            storageKey="trg_abc"
            title="Übung 2 · ABC-Analyse eines Triggers"
            subtitle="Analysiere eine Situation, in der du fast schwach geworden wärst. Schritt für Schritt."
            meta="🧠 Kognitive Defusion · Ellis (1962) · ~10 Min"
            accent="mauve"
            rows={[
              {
                id: "abc",
                title: "Eine konkrete Trigger-Situation",
                fields: [
                  {
                    key: "a",
                    label: "A · Auslöser",
                    placeholder: "Was war der Auslöser? z.B. Ich habe unser Lied gehört…",
                    rows: 3,
                  },
                  {
                    key: "b",
                    label: "B · Bewertung",
                    placeholder: "Meine Bewertung: z.B. Das bedeutet, wir gehören zusammen…",
                    rows: 3,
                  },
                  {
                    key: "c",
                    label: "C · Konsequenz",
                    placeholder: "Mein Gefühl/Verhalten: z.B. Panik, Drang anzurufen…",
                    rows: 3,
                  },
                  {
                    key: "d",
                    label: "D · Neue Bewertung",
                    placeholder:
                      "Disputation: z.B. Es ist nur ein Lied. Mein Gehirn verknüpft es mit der Vergangenheit. Es bedeutet nichts für heute.",
                    rows: 3,
                  },
                ],
              },
            ]}
          />

          {/* Übung 3: Urge-Surfing-Protokoll */}
          <Reflection3Step
            slug={SLUG}
            title="Übung 3 · Urge-Surfing-Protokoll"
            subtitle="Wenn der nächste Drang kommt, dokumentiere ihn hier — statt ihm nachzugeben."
            meta="🌊 Marlatt & Gordon · Live-Beobachtung"
            accent="sage"
            steps={[
              {
                key: "urge_meta",
                label: "Datum / Uhrzeit · Stärke des Drangs (1–10)",
                placeholder: "z.B. Mi 22:14 · Stärke 8/10",
                rows: 2,
              },
              {
                key: "urge_koerper",
                label: "Wo spüre ich ihn im Körper?",
                placeholder: "z.B. Brust eng, Hände kribbeln, Magen flau …",
                rows: 2,
              },
              {
                key: "urge_statt",
                label: "Was habe ich STATTDESSEN getan? Wie fühle ich mich 20 Min später?",
                placeholder: "Statt anzurufen habe ich … Nach 20 Min fühlt sich der Drang an wie …",
                rows: 4,
              },
            ]}
          />

          {/* Vibe-Check · Animierte Welle */}
          <UrgeSurfWave totalSeconds={90} accent="mauve" />

          {/* Vibe-Check · Trigger-Logbuch-Streak */}
          <TriggerStreakLog slug={SLUG} />

          {/* Vibe-Check · If-Then-Notfallplan */}
          <IfThenTriggerPlan slug={SLUG} accent="terracotta" />
        </div>
      </Section>

      {/* ── Deep Dive ── */}
      <Section icon={<Microscope className="h-4 w-4" />} label="Deep Dive · Cue-Reaktivität & konditionierte Trigger">
        <CalloutBold
          kind="deepdive"
          title="Warum Trigger dein Gehirn überwältigen"
          source="LeDoux (1996). The Emotional Brain. · Bouton (2004). Context and Behavioral Processes in Extinction."
        >
          <p>
            LeDoux beschrieb in seiner Forschung zur{" "}
            <GlossarTerm termKey="Amygdala-Hijacking">Amygdala</GlossarTerm>, dass
            konditionierte Reize – also Trigger – eine „Abkürzung" zum
            Angstzentrum aktivieren, die den rationalen Präfrontalcortex
            umgeht. Dein Gehirn hat den Trigger blitzschnell als gefährlich
            kodiert, noch bevor du bewusst denken kannst.
          </p>
          <p>
            Bouton (2004) erweiterte das Modell: Konditionierte Trigger-
            Reaktionen löschen sich nie vollständig — sie werden durch neue
            Lernerfahrungen <em>überschrieben</em>{" "}
            (Inhibitionslernen). Jedes Mal, wenn du den Drang aushältst, ohne
            zu handeln, baust du eine konkurrierende, gesündere Spur.
          </p>
        </CalloutBold>

        <aside
          className="mt-3 rounded-2xl border-2 border-mauve/30 bg-mauve/8 p-4"
          style={{ borderLeft: "5px solid var(--color-mauve)" }}
        >
          <div className="flex items-start gap-3">
            <Quote className="mt-0.5 h-4 w-4 flex-shrink-0 text-mauve" />
            <p className="text-sm italic leading-relaxed text-graphite/85">
              „Der Trigger ist nicht das Problem. Das Problem ist, dass dein
              Gehirn ihn noch immer als Liebesbeweis liest. Das kannst du
              umlernen — eine Welle nach der anderen."
            </p>
          </div>
        </aside>
      </Section>

      {/* ── Begleitende Meditation ── */}
      <MeditationCard
        title="Angst & Stress sofort lindern — Einschlafmeditation"
        duration="2 Std"
        source="ChakraTunes / Raphael Kempermann"
        youtubeId="B4MjEWg-3Dw"
      />

      {/* ── Transformationsziele ── */}
      <TransformationGoals
        slug={SLUG}
        diagnosisLabel="Trigger als konditionierte Reiz-Reaktions-Ketten"
        goals={[
          { id: "g1", text: "Ich habe meine Top-5-Trigger schriftlich identifiziert." },
          { id: "g2", text: "Ich habe die ABC-Analyse mindestens einmal vollständig durchlaufen." },
          { id: "g3", text: "Ich habe Urge Surfing in einem akuten Moment angewendet." },
          { id: "g4", text: "Ich verstehe, dass ein Drang eine Welle ist – kein Befehl." },
          { id: "g5", text: "Ich erkenne meinen wichtigsten Trigger frühzeitig, bevor er mich überrollt." },
          { id: "g6", text: "Ich weiß: Aushalten ohne Handeln baut eine neue, gesündere neuronale Spur." },
        ]}
      />
    </article>
  );
}

/** Kleine Kennzeichnung für die ABC(D)-Buchstaben in der Diagnose-Box */
function ABCRow({ letter, name, desc }: { letter: string; name: string; desc: string }) {
  return (
    <div className="flex items-center gap-3 rounded-lg bg-white/65 p-2.5">
      <span className="grid h-8 w-8 flex-shrink-0 place-items-center rounded-full bg-bordeaux font-display text-sm font-bold text-white">
        {letter}
      </span>
      <div className="min-w-0">
        <p className="text-sm font-semibold text-bordeaux">{name}</p>
        <p className="text-xs text-graphite/75">{desc}</p>
      </div>
    </div>
  );
}

function Section({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-3 animate-fade-in">
      <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.18em] text-mauve">
        {icon}
        {label}
      </div>
      {children}
    </section>
  );
}
