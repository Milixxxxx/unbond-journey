import {
  ScrollText,
  Brain,
  Lightbulb,
  Microscope,
  Sparkles,
  Activity,
} from "lucide-react";
import { GlossarTerm } from "@/components/glossar-term";
import { ChapterIntro } from "@/components/chapter-intro";
import {
  Reflection3Step,
  CalloutBold,
  TransformationGoals,
  MeditationCard,
  FlipCard,
  AttachmentDance,
  AttachmentStyleQuiz,
  ReactiveAbuseReframe,
  InnerChildLetter,
} from "@/components/exercise";

const SLUG = "modul-08";

/**
 * MODUL 08 · Bindungsmuster & Inneres Kind
 *
 * Quelle: UNBOND_Final_v5.html · in der Quelldatei „Schritt 09".
 * Meditation-ID (Memory-bestätigt): fXObOa9E_X4 — „Heile dein inneres Kind im Schlaf".
 *
 * Roter Faden: Phase 4 · Identitätsrekonstruktion. Nach 07 (äußere Schutz-
 * architektur) wendet sich 08 nach innen: Warum bist du in genau diese
 * Bindung geraten? Brücke zu 09 (Identität) und 10 (Kintsugi).
 *
 * Fluss des Kapitels:
 *   Erkennen (mein Stil) → Diagnostizieren (Mary↔Sandra-System)
 *     → Vergeben (Reactive Abuse) → Umlernen (Opposite Action somatisch)
 *     → Reparenten (das innere Kind hören).
 */
export function Modul08() {
  return (
    <article className="space-y-7">
      {/* ── Einleitung mit Keywords ── */}
      <ChapterIntro
        title="Kapitel 08 · Bindungsmuster & Inneres Kind"
        keywords={[
          "Anxious-Avoidant-Trap",
          "Reactive Abuse",
          "Opposite Action",
          "Reparenting",
          "Inneres Kind",
          "Desorganisierte Bindung",
          "Selbstmitgefühl",
        ]}
      >
        <p>
          Was du in dir „hysterisch" genannt hast, war biologische Notwehr. Du
          warst nicht zu viel — du warst die Eine, die noch atmen wollte,
          während dir systematisch die Luft abgedreht wurde.
        </p>
        <p>
          In diesem Kapitel schauen wir, warum dein Körper genau so reagieren
          musste. Wir öffnen die alte Tür: zu dem Kind, das gelernt hat, dass
          Liebe nur sicher ist, wenn man kämpft. Und wir geben ihm endlich,
          was es nie bekommen hat — einen erwachsenen Menschen, der bleibt.
        </p>
      </ChapterIntro>

      {/* ── 1. Story · Mary auf dem Boden ── */}
      <Section icon={<ScrollText className="h-3.5 w-3.5" />} label="Story · Wenn die Scham endlich zerbricht">
        <div
          className="rounded-2xl bg-white/80 p-5 shadow-soft sm:p-6"
          style={{ borderLeft: "5px solid var(--color-bordeaux)" }}
        >
          <h4 className="font-display text-base font-bold text-bordeaux sm:text-lg">
            Mary · Das Gift der Scham
          </h4>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-graphite/90">
            <p>
              Mary sitzt auf dem Boden vor ihrem Bett, die ausgedruckten
              Chatverläufe vor sich wie ein Gerichtsprotokoll. Dutzende lange,
              panische, bettelnde Nachrichten in hellgrün:{" "}
              <em>„Warum behandelst du mich so? Bitte antworte mir!"</em> —{" "}
              <em>„Was habe ich falsch gemacht?"</em> — <em>„Bitte, Sandra,
              ich flehe dich an."</em> Dazwischen: tagelanges, eiskaltes Schweigen.
              Die grauen Lücken brennen. Scham schnürt ihr die Kehle zu.
            </p>
            <p>
              Doch dann legt sie zitternd das Kapitel über{" "}
              <GlossarTerm term="Reactive Abuse">Reactive Abuse</GlossarTerm>{" "}
              auf ihre Knie. Sie liest. Sie liest noch einmal. Langsam wechselt
              sie die Kameraperspektive. Sie betrachtet nicht ihre grünen
              Blasen — sie betrachtet das gesamte, kranke System: Sandras
              chronisches Vermeidungsverhalten. Das brutale Ghosting, immer
              dann, wenn Sandra spürte, dass Mary ihr zu nahe kam. Die
              Liebesentzüge, exakt getimt auf die Momente, in denen Mary
              Sicherheit am dringendsten brauchte.
            </p>
            <p>
              In diesem Moment bricht die Gehirnwäsche auf. Marys
              Nachrichtenflut war keine Hysterie. Es war das verzweifelte
              Luftschnappen einer Ertrinkenden, der systematisch der
              Sauerstoff entzogen wurde. Mary atmet aus. Die Decke der Scham
              fällt lautlos. Sie streicht sanft über das kalte Papier und
              flüstert: <em>„Es tut mir leid, dass du das durchmachen
              musstest."</em> Sie vergibt sich. Endgültig.
            </p>
          </div>
        </div>
      </Section>

      {/* ── 2. Diagnose · Anxious-Avoidant Trap mit FlipCards ── */}
      <Section icon={<Brain className="h-3.5 w-3.5" />} label="Diagnose · Der Anxious-Avoidant-Trap">
        <CalloutBold kind="science" title="Die Neurobiologie der ungleichen Tanzpartnerinnen">
          <p>
            Wenn dein System einen <strong>ängstlichen Bindungsstil</strong>{" "}
            trägt — geprägt durch Inkonsistenz in der Kindheit — sucht dein
            Nervensystem verzweifelt Regulation durch Nähe und Bestätigung.
            Trifft dieses hochreaktive System auf eine Partnerin mit
            vermeidendem Stil, entsteht ein tödlicher Teufelskreis.
          </p>
          <p>
            Deine Nähe, die dein Überleben sichern soll, empfindet sie als
            existenzielle Bedrohung ihrer Kontrolle. Ihre Regulation: eiskalte
            Mauern. Ihr schweigender Rückzug triggert echte Todesangst in
            deiner <GlossarTerm term="Amygdala">Amygdala</GlossarTerm> — du
            eskalierst in Protestverhalten, sie zieht sich noch weiter zurück
            und stellt dich als „die Verrückte" dar.
          </p>
          <p>
            Es ging nie um mangelnde Liebe. Es war der absolute Krieg zweier
            Überlebenssysteme. Erst wenn du das kognitiv durchdringst, erlischt
            die Scham für dein „hysterisches" Verhalten.
          </p>
        </CalloutBold>

        <p className="mt-2 text-xs text-graphite/65">
          Die vier Bindungsstile — tippe auf eine Karte für die Erklärung:
        </p>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          <FlipCard
            emoji="🌿"
            color="var(--color-sage)"
            label="Sicher"
            heading="Secure Attachment"
            front="Nähe und Autonomie sind kein Widerspruch."
            back="Bezugspersonen waren verlässlich. Du sagst, was du brauchst — ohne Strafe zu erwarten. Konflikte machen keine existenzielle Angst, weil du gelernt hast: Nähe übersteht sie."
          />
          <FlipCard
            emoji="🔥"
            color="var(--color-bordeaux)"
            label="Ängstlich"
            heading="Anxious / Preoccupied"
            front="Liebe ist überlebenswichtig — und gefühlt nie sicher."
            back="Inkonsistente Zuwendung in der Kindheit hat dein System gelehrt, kleinste Distanzsignale zu scannen. Klammern und Protestverhalten sind biologische Notrufe — keine Schwäche."
          />
          <FlipCard
            emoji="🧊"
            color="var(--color-graphite)"
            label="Vermeidend"
            heading="Avoidant / Dismissive"
            front="Distanz fühlt sich wie Überleben an."
            back="Du hast früh gelernt: Nähe = Verlust der Kontrolle. Nach außen autonom, oft sogar gleichgültig. Innen drin willst du Nähe — du hast nur nie gelernt, dass sie dich nicht zerstört."
          />
          <FlipCard
            emoji="🌪️"
            color="var(--color-mauve)"
            label="Desorganisiert"
            heading="Fearful-Avoidant"
            front="Sehnsucht und Misstrauen im selben Atemzug."
            back="Die Bindungsperson war gleichzeitig Sicherheit und Angstquelle. Du sehnst dich nach Nähe und hast panische Angst davor — beides zur selben Zeit. Das ist kein Urteil. Es ist Anpassung an etwas, das nie deine Schuld war."
          />
        </div>
      </Section>

      {/* ── 3. Mary↔Sandra · AttachmentDance ── */}
      <Section icon={<Activity className="h-3.5 w-3.5" />} label="Mary ↔ Sandra · Das System">
        <p className="text-sm text-graphite/85">
          Was zwischen Mary und Sandra passierte, ist kein individuelles
          Drama. Es ist eine Choreografie, die 90 % aller Leserinnen
          wiedererkennen — der Anxious-Avoidant-Tanz. Hier ist er, in vier
          Phasen:
        </p>
        <div className="mt-3">
          <AttachmentDance />
        </div>
      </Section>

      {/* ── 4. Lösung · Opposite Action somatisch ── */}
      <Section icon={<Lightbulb className="h-3.5 w-3.5" />} label="Lösung · Opposite Action (somatisch verankert)">
        <CalloutBold kind="act" title="Gegen den stärksten Impuls handeln">
          <p>
            Um dieses festgefahrene neuronale Muster aufzubrechen, musst du
            gegen dein stärkstes Gefühl handeln. In der{" "}
            <GlossarTerm term="DBT">DBT</GlossarTerm> nennt man das{" "}
            <strong>Opposite Action</strong>: Wenn die Panik schreit{" "}
            <em>„Ruf sie an! Schreib ihr!"</em> heißt es: Handy weglegen,
            spazieren gehen, die Spannung körperlich aushalten.
          </p>
          <p>
            Wenn du den Drang aushältst — ohne nachzugeben — beweist du
            deinem Nervensystem auf körperlicher Ebene eine lebensrettende
            Wahrheit: Du überlebst das Verlassenwerden. Du stirbst nicht an
            der fehlenden Nachricht. Genau in diesem Moment reparierst du
            Stück für Stück dein inneres Kind und erzeugst neue, sichere
            Bindungsnetzwerke im Gehirn.
          </p>
        </CalloutBold>

        <div
          className="mt-3 rounded-2xl bg-white/80 p-5 shadow-soft"
          style={{ borderLeft: "5px solid var(--color-sage)" }}
        >
          <p className="text-[10.5px] font-semibold uppercase tracking-[0.18em] text-sage">
            Somatischer Anker · 3 Schritte
          </p>
          <h4 className="mt-1 font-display text-base font-bold text-bordeaux sm:text-lg">
            Wenn der Drang kommt — erde dich
          </h4>
          <ol className="mt-3 space-y-2.5 text-sm text-graphite/90">
            <li className="flex gap-3">
              <span className="grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-sage/15 font-display text-xs font-bold text-sage">
                1
              </span>
              <span>
                <strong>Füße auf den Boden.</strong> Drücke beide Sohlen fest in
                den Boden. Spüre, wie er trägt. Du fällst nicht.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-sage/15 font-display text-xs font-bold text-sage">
                2
              </span>
              <span>
                <strong>Dreimal länger ausatmen als einatmen.</strong> 4 Sekunden
                ein, 8 Sekunden aus. Das aktiviert deinen Vagusnerv und
                signalisiert deiner Amygdala: Kein Notfall.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-sage/15 font-display text-xs font-bold text-sage">
                3
              </span>
              <span>
                <strong>Hände auf die Oberschenkel.</strong> Spüre die Wärme.
                Sage leise: <em>„Ich bin sicher. Ich überlebe das. Es ist nur
                eine Welle."</em>
              </span>
            </li>
          </ol>
        </div>
      </Section>

      {/* ── 5. Übungen ── */}
      <Section icon={<Sparkles className="h-3.5 w-3.5" />} label="Übungen">
        <AttachmentStyleQuiz slug={SLUG} storageKey="m8_quiz" />
        <ReactiveAbuseReframe slug={SLUG} storageKey="m8_reframe" />
        <InnerChildLetter slug={SLUG} storageKey="m8_letter" />
      </Section>

      {/* ── 6. Deep Dive ── */}
      <Section icon={<Microscope className="h-3.5 w-3.5" />} label="Deep Dive · Trauma-Mechanismen">
        <CalloutBold
          kind="deepdive"
          title="Linehan, Porges, Levine, Neff — die vier Wegweiser"
          source="Linehan (1993) · Porges (2011) · Levine (2010) · Van der Kolk (2014) · Neff (2003)"
        >
          <p>
            <strong>Linehan (1993)</strong> führte mit der DBT die{" "}
            <em>Opposite Action</em> ein: Emotionen sind mit Handlungs-
            tendenzen verbunden. Wird die Handlung umgekehrt (Entzug statt
            Klammern), sendet der Körper dem Gehirn: Keine Lebensgefahr — und
            die Emotion sinkt.
          </p>
          <p>
            <strong>Porges (2011)</strong> erklärt mit der{" "}
            <GlossarTerm term="Polyvagal-Theorie">Polyvagal-Theorie</GlossarTerm>
            , warum ängstliche Bindungstypen bei Kontaktverlust so extrem
            reagieren: Der Rückzug versetzt das autonome Nervensystem in
            ventral-vagalen Kollaps oder sympathisches Hyperarousal.{" "}
            <em>Reactive Abuse</em> ist keine Charakterschwäche — es ist
            Neurozeption auf der Suche nach Sicherheit.
          </p>
          <p>
            <strong>Levine (2010)</strong> ergänzt mit Somatic Experiencing:
            Wenn du dem Impuls zu klammern nicht nachgibst, durchlebst du erst
            einen{" "}
            <GlossarTerm term="Extinction Burst">Extinction Burst</GlossarTerm>
            , bevor der Körper die Energie abbaut und echte Entspannung
            einsetzt.
          </p>
          <p>
            <strong>Neff (2003)</strong>: Radikales{" "}
            <strong>Selbstmitgefühl</strong> ist der Schlüssel aus
            Schamspiralen. Behandle dich mit derselben Wärme, die du einer
            guten Freundin in derselben Situation geben würdest:{" "}
            <em>„Du hast getan, was dein System konnte. Du warst nicht
            hysterisch. Du warst in Not."</em>
          </p>
        </CalloutBold>
      </Section>

      {/* ── 7. Reflexion ── */}
      <Reflection3Step
        slug={SLUG}
        title="Reflexion · Das Echo des Kindes"
        subtitle="Zwei Fragen, ehrlich beantwortet — bevor du in die Meditation gehst."
        meta="🪞 Innere Schau · ⏱ 8 Min"
        accent="bordeaux"
        steps={[
          {
            key: "m8_reflect_child_moment",
            label:
              "Welcher kindliche Moment taucht in dir hoch, wenn du an dein Protestverhalten denkst?",
            placeholder:
              'z.B. „Mit 6 stand ich vor der verschlossenen Schlafzimmertür meiner Mutter und habe so lange geklopft, bis ich keine Stimme mehr hatte."',
            rows: 4,
          },
          {
            key: "m8_reflect_words_unheard",
            label:
              "Welche Worte hat dein inneres Kind nie gehört, die es heute von dir braucht?",
            placeholder:
              'z.B. „Du bist nicht zu viel. Ich gehe nicht weg, auch wenn du wütend bist. Ich sehe dich."',
            rows: 4,
          },
        ]}
      />

      {/* ── 8. Meditation ── */}
      <MeditationCard
        title="Heile dein inneres Kind im Schlaf · Geführte Meditation"
        duration="3 Std · Einschlaf-Begleitung"
        source="ChakraTunes · YouTube"
        youtubeId="fXObOa9E_X4"
      />

      {/* ── 9. Transformationsziele ── */}
      <TransformationGoals
        slug={SLUG}
        diagnosisLabel="Bindungsmuster · Anxious-Avoidant-Trap & Reparenting"
        goals={[
          {
            id: "g9-1",
            text: "Ich verstehe den Ursprung meines ängstlichen Bindungsmusters.",
          },
          {
            id: "g9-2",
            text: "Ich mache mir keine Vorwürfe mehr für neurobiologische Notwehr (Reactive Abuse).",
          },
          {
            id: "g9-3",
            text: "Ich kenne mein stärkstes Protestverhalten, seinen Auslöser und spüre, wie es sich in meinem Körper anfühlt — bevor es eskaliert.",
          },
          {
            id: "g9-4",
            text: "Ich habe ein klares Opposite-Action-Protokoll geplant.",
          },
          {
            id: "g9-5",
            text: "Ich akzeptiere, dass der Schmerz beim Aushalten des Entzugs ein Zeichen von Heilung ist.",
          },
        ]}
      />
    </article>
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
