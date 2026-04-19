import {
  ScrollText,
  Brain,
  Lightbulb,
  Microscope,
  Sparkles,
  Quote,
  Send,
  Pencil,
} from "lucide-react";
import { GlossarTerm } from "@/components/glossar-term";
import { ChapterIntro } from "@/components/chapter-intro";
import {
  PillCloud,
  Reflection3Step,
  CalloutBold,
  TransformationGoals,
  MeditationCard,
  LikertScale,
  ValueCompass,
} from "@/components/exercise";

const SLUG = "modul-09";

/**
 * MODUL 09 · Identität & Zukunft
 *
 * Quelle: UNBOND_Final_v5.html — Schritt 09 (Identität, Zukunft & Abschluss),
 * vorbereitet für späteren Schritt 10 (Kintsugi-Abschluss).
 *
 * Roter Faden:
 *  Nach Körper (05), Suchtmuster (06), WLW-Dynamik (07) und Bindungsmustern (08)
 *  steht das Vakuum offen. Hier füllen wir den Platz, den die toxische Bindung
 *  jahrelang besetzt hat — mit eigenen Werten, eigenem Tun, einer Vision,
 *  die endlich nur dir gehört. Self-Expansion (Aron & Aron) statt Self-Constriction.
 *
 * Pflichtelemente:
 *  - ChapterIntro mit Keywords
 *  - Story · Mary · "Der Brief, den sie niemals abschickt"
 *  - Diagnose · Self-Constriction & das Vakuum
 *  - Lösung · ACT-Werteklärung & Mikro-Bewegung
 *  - Übungen: Werte-Kompass · Identitäts-Archäologie · Brief ans zukünftige Ich
 *  - Vibe-Check: "Wer bist du gerade?" (Likert) — speist den Brief
 *  - Deep Dive · Aron & Aron · Hayes · Sapolsky · Tedeschi
 *  - Reflexion · "Wofür stehst du auf, wenn niemand zuschaut?"
 *  - Meditation · Sage-Akzent
 *  - TransformationGoals
 */
export function Modul09() {
  return (
    <article className="space-y-7">
      {/* ── Einleitung ── */}
      <ChapterIntro
        title="Kapitel 09 · Identität & Zukunft"
        keywords={[
          "Self-Expansion",
          "Werte-Kompass",
          "Reward Replacement",
          "Wer war ich vorher?",
          "Vakuum füllen",
        ]}
      >
        <p>
          Wenn die toxische Bindung geht, bleibt eine Lücke — und sie fühlt sich
          an wie ein Sturz ins Nichts. Das Vakuum ist nicht dein Versagen. Es
          ist der Platz, den dein eigenes, jahrelang verkleinertes Ich
          zurückgelassen hat.
        </p>
        <p>
          In diesem Kapitel füllst du diesen Platz nicht mit der nächsten Person
          — sondern mit dir. Mit Werten, alten Hobbys, kleinen Schritten und
          einer Vision, die endlich nur dir gehört.
        </p>
      </ChapterIntro>

      {/* ── Story ── */}
      <Section
        icon={<ScrollText className="h-4 w-4" />}
        label="Story · Der Brief, den sie niemals abschickt"
      >
        <div className="glass-card-strong p-5">
          <div className="space-y-3 text-sm leading-relaxed animate-fade-in-stagger">
            <h3 className="font-display text-base font-bold text-bordeaux">
              Mary, ein Jahr später
            </h3>
            <p>
              Ein Jahr ist vergangen. Wenn Mary morgens aufwacht, fragt sie sich
              manchmal: <em>Wer war ich ohne das ständige Drama?</em> Fünf Jahre
              lang bestand ihre Lebensaufgabe darin, Sandras Stimmungen zu
              scannen, das eigene Leben bis zur Unsichtbarkeit zu schrumpfen und
              in Hab-Acht-Stellung auf eine Krume Zuneigung zu warten. Das
              Vakuum nach der Trennung fühlte sich an wie ein Sturz ins Nichts.
            </p>
            <p>
              Doch in den letzten Monaten hat sich der Wind gedreht. Die
              politischen Projekte und queeren Initiativen, die sie wegen
              Sandras Eifersucht aufgegeben hatte, hat sie wieder aus der
              Schublade geholt. Morgens checkt sie nicht mehr panisch Sandras
              Instagram, sondern organisiert LGBTQ-Events. Jedes tiefe Lachen
              mit Freunden, in dem Sandra niemals eine Rolle spielte, ist ein
              Leuchtstein ihres neuen Ichs.
            </p>
            <p>
              Heute sitzt Mary ruhig in ihrem Zimmer und faltet einen Brief.
              Den ultimativen Abschiedsbrief an Sandra — ohne Forderungen, ohne
              Anklage. Einen Brief, den sie <strong>niemals abschicken wird</strong>,
              weil Sandra jede Zeile zu ihren Gunsten verdrehen würde. Mary
              hält darin nur die schlichte Wahrheit fest: Sandra war nicht die
              große Liebe ihres Lebens. Sie war ein destruktives Muster, das
              Mary nun vollständig dechiffriert hat. Sie lässt den Brief in die
              Schublade gleiten und drückt sie zu. Die Illusion ist tot.{" "}
              <strong>Mary lebt.</strong>
            </p>
          </div>
        </div>
      </Section>

      {/* ── Diagnose ── */}
      <Section
        icon={<Brain className="h-4 w-4" />}
        label="Diagnose · Self-Constriction & das Vakuum"
      >
        <CalloutBold
          kind="science"
          title="Wer bist du, wenn keine Krise mehr abzuwenden ist?"
          source="Aron & Aron (1986) · Self-Expansion Model"
        >
          <p>
            Arthur und Elaine Aron beschrieben mit dem{" "}
            <GlossarTerm termKey="self-expansion">Self-Expansion Model</GlossarTerm>
            , dass wir gesunde Beziehungen nutzen, um unser Selbst durch neue
            Erfahrungen, Hobbys, Menschen zu <em>erweitern</em>. In
            Trauma-Bonds geschieht das Gegenteil:{" "}
            <strong>Self-Constriction.</strong> Du hast dich verkleinert, um
            den Frieden zu wahren. Hobbys aufgegeben. Freundschaften
            ausgedünnt. Eigene Meinungen geschluckt.
          </p>
          <p>
            Wenn diese Beziehung endet, kollabiert nicht nur die Partnerschaft
            — sondern die zentrale Bewältigungsstrategie deines Lebens. Das
            Vakuum, das du fühlst, ist <strong>real</strong>. Es ist der Platz,
            den dein eigenes amputiertes System zurückgelassen hat.
          </p>
          <p>
            Die effektivste Heilung ist nicht „Zeit". Es ist{" "}
            <strong>gerichtete, neue Selbstwirksamkeit</strong>. Wir füllen die
            Lücke im{" "}
            <GlossarTerm termKey="dopamin">Dopamin</GlossarTerm>-System durch
            neue Kompetenzen, neue Netzwerke und wiederentdeckte Hobbys
            (Reward Replacement). Identität entsteht nicht durch endloses
            Analysieren der toxischen Person — sondern durch konsequentes
            Handeln im Einklang mit deinen eigenen, unantastbaren Werten.
          </p>
        </CalloutBold>

        <div className="grid gap-3 sm:grid-cols-2">
          <DiagnosisCard
            emoji="🌑"
            color="var(--color-bordeaux)"
            label="Self-Constriction"
            heading="Was dir die Bindung genommen hat"
            text="Hobbys, Freunde, Meinungen, Träume, Schlafrhythmus, Stimme. Alles wurde kleiner gemacht, um zu überleben."
          />
          <DiagnosisCard
            emoji="🌱"
            color="var(--color-sage)"
            label="Self-Expansion"
            heading="Was jetzt dran ist"
            text="Werte reaktivieren, Mikro-Schritte, Reward Replacement. Identität als Verb, nicht als Zustand."
          />
        </div>
      </Section>

      {/* ── Lösung ── */}
      <Section
        icon={<Lightbulb className="h-4 w-4" />}
        label="Lösung · ACT-Werteklärung & Mikro-Bewegung"
      >
        <div className="rounded-2xl bg-white/70 p-4 text-sm leading-relaxed text-graphite/85 shadow-glass">
          <p>
            Hayes, Strosahl &amp; Wilson (2006) beschrieben mit der{" "}
            <GlossarTerm termKey="act">ACT</GlossarTerm>-Werteklärung einen der
            robustesten Wege aus chronischer Stagnation: Werte sind{" "}
            <em>kein Ziel</em>, sondern ein Kompass. Sie bestehen aus dem, was
            du fortlaufend tust — nicht aus dem, was du erreichst.
          </p>
          <p className="mt-2">
            Sapolsky (2017) ergänzt neurobiologisch: Dein Dopaminsystem
            generiert Motivation nicht durch das <em>Erreichen</em> von Zielen,
            sondern durch die <strong>Antizipation</strong> — das Gehen auf ein
            Ziel zu. Jeder kleine, wertebasierte Schritt erzeugt Dopamin und
            durchbricht die depressive Spirale des Wartens.
          </p>
          <p className="mt-2">
            Wenn du deinem Nervensystem eine konkrete Richtung aufzeigst,
            aktiviert dein präfrontaler Kortex Dopamin-Pfade für{" "}
            <em>eigene</em> Ziele — anstatt für die Fixierung auf Verlust.
            Transformation beginnt im Mikro.
          </p>
        </div>
      </Section>

      {/* ── Übungen ── */}
      <Section
        icon={<Sparkles className="h-4 w-4" />}
        label="Übungen · Drei Werkzeuge zum Wiederfinden"
      >
        <div className="space-y-5">
          {/* Übung 1 · Werte-Kompass */}
          <ValueCompass slug={SLUG} />

          {/* Übung 2 · Identitäts-Archäologie */}
          <PillCloud
            slug={SLUG}
            storageKey="identity_archaeology"
            title="Übung 2 · Identitäts-Archäologie"
            subtitle="Was hattest du, bevor sie dein Leben besetzt hat? Klick alles an, was du in der Beziehung verloren oder geopfert hast — auch wenn es klein erscheint."
            meta="🔎 Bestandsaufnahme · ~5 Min · Mehrfachauswahl"
            accent="mauve"
            pills={[
              { id: "hobby", label: "Ein konkretes Hobby" },
              { id: "freunde", label: "Freundschaften" },
              { id: "sport", label: "Sport / Bewegung" },
              { id: "kreativ", label: "Kreatives Projekt" },
              { id: "musik", label: "Eine Musikrichtung / Band" },
              { id: "sprache", label: "Sprache / Lernen" },
              { id: "meinung", label: "Politische Meinung" },
              { id: "queer", label: "Queere Räume / Community" },
              { id: "reisen", label: "Reisen / Spontaneität" },
              { id: "ruhe", label: "Zeit allein, ohne schlechtes Gewissen" },
              { id: "berufung", label: "Berufliches Ziel" },
              { id: "essen", label: "Eigener Geschmack / Essen" },
              { id: "stil", label: "Eigener Stil / Aussehen" },
              { id: "stimme", label: "Eigene Stimme / Lautstärke" },
            ]}
          />

          <Reflection3Step
            slug={SLUG}
            title="Übung 2b · Eines davon zurückholen"
            subtitle="Wähle EIN Element von oben — das, das am leisesten ruft, aber nicht aufhört. Hier holen wir es zurück."
            meta="🌱 Re-Activation · ~5 Min"
            accent="sage"
            steps={[
              {
                key: "arch_was",
                label: "Was hole ich zurück?",
                placeholder: 'z.B. „Mein Skizzenbuch" / „Meinen Chor" / „Meine Sonntagsspaziergänge"',
                rows: 2,
              },
              {
                key: "arch_warum",
                label: "Warum war es mir wichtig — bevor sie kam?",
                placeholder: 'z.B. „Weil ich da still und ganz war." …',
                rows: 3,
              },
              {
                key: "arch_naechster",
                label: "Was ist der allerkleinste Schritt diese Woche?",
                placeholder: 'z.B. „Skizzenbuch aus dem Schrank holen und auf den Tisch legen."',
                rows: 2,
              },
            ]}
          />

          {/* Vibe-Check · Wer bist du HEUTE? — kommt VOR dem Zukunftsbrief */}
          <LikertScale
            slug={SLUG}
            storageKey="identity_vibe"
            title="Vibe-Check · Wer bist du heute?"
            subtitle="Kein Test, kein Richtig oder Falsch. Eine Standortbestimmung — du darfst sie in 3 Wochen wiederholen und sehen, was sich bewegt hat. Direkt im Anschluss schreibst du deinem zukünftigen Ich einen Brief — die Antworten hier dienen dir als Ausgangspunkt."
            meta="🌸 Standortbestimmung · 5 Sätze · ~3 Min"
            accent="mauve"
            items={[
              {
                id: "v1",
                text: "Ich kann sagen, was ich mag, ohne erst zu prüfen, ob es ihr gefallen würde.",
              },
              {
                id: "v2",
                text: "Ich verbringe Zeit mit Dingen, die ICH gewählt habe — nicht sie.",
              },
              {
                id: "v3",
                text: "Ich kenne mindestens 3 meiner Kernwerte und kann sie benennen.",
              },
              {
                id: "v4",
                text: "Ich treffe kleine Entscheidungen (Essen, Musik, Kleidung) wieder spontan.",
              },
              {
                id: "v5",
                text: "Wenn ich allein bin, fühle ich mich öfter ‚bei mir' als ‚verlassen'.",
              },
            ]}
          />

          {/* Übung 3 · Brief an mein zukünftiges Ich (15 Min Visualisierung) */}
          <Reflection3Step
            slug={SLUG}
            title="Übung 3 · Brief an mein zukünftiges Ich"
            subtitle="Setze deinen neurologischen Fokus neu. Schau zurück auf den Vibe-Check oben — dort steht dein Heute. Und jetzt schreibe der Frau, die in 12 Monaten dort sitzt, wo du längst angekommen sein willst. Dein Gehirn braucht ein greifbares Ziel-Szenario, um sich nach vorne zu orientieren."
            meta="✉️ Visualisierung · ~15 Min · Hilfsanker: dein Vibe-Check oben"
            accent="bordeaux"
            steps={[
              {
                key: "letter_szene",
                label: "1 · Szene in 12 Monaten — was siehst du, hörst du, riechst du?",
                placeholder:
                  'z.B. „Ich wache in einer hellen Wohnung auf, Kaffee, kein Handychecken. Ich habe geschlafen wie ein Stein."',
                rows: 5,
              },
              {
                key: "letter_vibe_aufwertung",
                label:
                  "2 · Schau jeden Vibe-Check-Satz oben an: Wo stehst du heute? Welcher davon ist in 12 Monaten ein klares ‚Ja'?",
                placeholder:
                  'z.B. „Heute kann ich ‚Nein\' sagen, aber zittere noch. In 12 Monaten ist es selbstverständlich. Ich treffe kleine Entscheidungen wieder spontan, ohne mich zu fragen, was sie davon hielte."',
                rows: 5,
              },
              {
                key: "letter_versprechen",
                label: "3 · Liebes zukünftiges Ich — das verspreche ich dir ab heute:",
                placeholder:
                  'z.B. „Ich werde dich nie wieder zum Schweigen bringen, um geliebt zu werden. Jeden Sonntagabend frage ich dich: Was brauchst du diese Woche?"',
                rows: 4,
              },
            ]}
          />
        </div>
      </Section>

      {/* ── Deep Dive ── */}
      <Section
        icon={<Microscope className="h-4 w-4" />}
        label="Deep Dive · Warum Werte stärker sind als Willenskraft"
      >
        <CalloutBold
          kind="deepdive"
          title="Aron & Aron · Hayes · Sapolsky · Tedeschi"
          source="Self-Expansion Model (1986) · ACT (2006) · Behave (2017) · Posttraumatic Growth (2004)"
        >
          <p>
            Das <strong>Self-Expansion Model</strong> von Aron &amp; Aron (1986)
            zeigt: Identität wächst kontinuierlich. Eine toxische Verbindung
            erzwingt einen Identitätsverlust (Constriction). Echtes Wachstum
            nach dem Bruch entsteht, wenn du beginnst, Hobbys, Menschen und
            Leidenschaften in dein Ich zu integrieren, die rein aus deiner
            eigenen Motivation entspringen. Du baust nicht das alte Haus auf —
            du erschaffst etwas, das nie zuvor existierte.
          </p>
          <p>
            Hayes et al. (ACT, 2006) verschoben die Frage von „Wie reduziere
            ich Schmerz?" zu „Wofür leide ich gerne?". Werte werden nicht
            <em>gefunden</em>, sondern in Aktion sichtbar. Sapolsky (2017)
            ergänzt: Das Dopaminsystem belohnt schon die <em>Antizipation</em>{" "}
            wertegeleiteten Handelns — nicht erst das Ergebnis. Deshalb wirken
            Mikro-Schritte so disproportional gut.
          </p>
          <p>
            Tedeschi &amp; Calhoun (2004) dokumentierten{" "}
            <GlossarTerm termKey="ptg">posttraumatisches Wachstum</GlossarTerm>:
            Menschen kehren nach Krisen nicht nur zum Ausgangszustand zurück —
            viele wachsen <em>darüber hinaus</em>. Mit klareren Werten,
            tieferer Empathie und einer Identität, die nichts mehr zu
            verteidigen hat.
          </p>
        </CalloutBold>

        <aside
          className="mt-3 rounded-2xl border-2 border-mauve/30 bg-mauve/8 p-4"
          style={{ borderLeft: "5px solid var(--color-mauve)" }}
        >
          <div className="flex items-start gap-3">
            <Quote className="mt-0.5 h-4 w-4 flex-shrink-0 text-mauve" />
            <p className="text-sm italic leading-relaxed text-graphite/85">
              „Mary öffnet zum ersten Mal seit Monaten ihren alten
              Skizzenblock. Die Skizzen darin sind drei Jahre alt — aus der
              Zeit, bevor Sandra entschied, dass das ‚Kinderkram' sei. Mary
              malt nichts Großes. Sie kritzelt einen Vogel an den Rand. Es
              fühlt sich an wie nach Hause kommen."
            </p>
          </div>
        </aside>
      </Section>

      {/* ── Reflexion ── */}
      <Reflection3Step
        slug={SLUG}
        title="Reflexion · Wofür stehst du auf, wenn niemand zuschaut?"
        subtitle="Eine Frage, die unter alle Selbstoptimierung greift. Antworte mit dem ersten, das kommt — nicht mit dem ‚richtigen'."
        meta="🌸 Tiefenfrage · ~10 Min"
        accent="bordeaux"
        steps={[
          {
            key: "core_was",
            label: "Wofür stehst du morgens auf, wenn niemand schaut, niemand applaudiert, niemand verlangt es?",
            placeholder: 'z.B. „Für meinen Hund." / „Für eine ruhige Tasse Tee." / „Für meine Patientinnen." …',
            rows: 4,
          },
          {
            key: "core_warum",
            label: "Was sagt diese Antwort über deinen wahren Wert-Kern?",
            placeholder: 'z.B. „Dass mir Fürsorge wichtig ist — aber für mich, nicht für sie." …',
            rows: 4,
          },
          {
            key: "core_naechstes_jahr",
            label: "Wenn du in einem Jahr in den Spiegel schaust — was möchtest du dort sehen?",
            placeholder: "Schreib es auf. Konkret. Du formst dein zukünftiges Ich gerade jetzt.",
            rows: 4,
          },
        ]}
      />

      {/* ── Brief, den du nicht abschickst (kleines Mikro-Ritual) ── */}
      <FutureLetter />

      {/* ── Meditation ── */}
      <MeditationCard
        title="Geführte Meditation · Frieden mit dir selbst"
        duration="15 Min"
        source="Lavendaire · Guided Meditation for Positive Energy & Inner Peace"
        youtubeId="d8pO3mbj-90"
      />

      {/* ── Transformationsziele ── */}
      <TransformationGoals
        slug={SLUG}
        diagnosisLabel="Self-Expansion & Identitätsrekonstruktion"
        goals={[
          { id: "g1", text: "Ich kenne mindestens 3 meiner Kernwerte und habe sie im Werte-Kompass benannt." },
          { id: "g2", text: "Ich habe konkret aufgeschrieben, was ich in der Beziehung verloren oder geopfert habe." },
          { id: "g3", text: "Ich habe EIN altes Hobby / Stück Identität wieder aktiviert — und sei es im Mikro-Schritt." },
          { id: "g4", text: "Ich habe meinem zukünftigen Ich einen Brief geschrieben — mit konkreter Szene in 12 Monaten." },
          { id: "g5", text: "Ich verstehe, dass das Vakuum nach der Trennung kein Versagen ist, sondern Self-Constriction, die rückwärts läuft." },
          { id: "g6", text: "Ich treffe diese Woche mindestens eine kleine Entscheidung allein aus mir heraus — Essen, Kleidung, Plan, egal." },
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

function DiagnosisCard({
  emoji,
  color,
  label,
  heading,
  text,
}: {
  emoji: string;
  color: string;
  label: string;
  heading: string;
  text: string;
}) {
  return (
    <div
      className="rounded-2xl bg-white/75 p-4 shadow-soft"
      style={{ borderTop: `5px solid ${color}` }}
    >
      <div className="text-2xl">{emoji}</div>
      <p
        className="mt-1 font-display text-xs font-bold uppercase tracking-wider"
        style={{ color }}
      >
        {label}
      </p>
      <p className="mt-1 font-display text-sm font-bold text-bordeaux">
        {heading}
      </p>
      <p className="mt-1.5 text-xs leading-snug text-graphite/80">{text}</p>
    </div>
  );
}

/**
 * FutureLetter · Inline-Mini-Ritual: Brief, der nicht abgeschickt wird.
 */
function FutureLetter() {
  return (
    <div
      className="rounded-2xl border-2 border-bordeaux/15 bg-gradient-to-br from-bordeaux/5 via-mauve/5 to-sage/5 p-5 sm:p-6"
      style={{ borderLeft: "5px solid var(--color-bordeaux)" }}
    >
      <div className="flex items-center gap-2">
        <Send className="h-4 w-4 text-bordeaux" />
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-bordeaux">
          Mikro-Ritual · Optional
        </p>
      </div>
      <h3 className="mt-2 font-display text-lg font-bold text-bordeaux sm:text-xl">
        Ein Brief, den du nicht abschickst
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-graphite/80">
        Wie Mary darfst du den ultimativen Abschiedsbrief an die toxische
        Person schreiben — <strong>ohne ihn jemals abzuschicken</strong>. Nicht
        weil sie es nicht hören dürfte. Sondern weil sie es verdrehen würde.
        Der Brief ist nicht für sie. Er ist die Beerdigung der Illusion.
      </p>
      <ul className="mt-3 space-y-1.5 text-sm text-graphite/80">
        <li className="flex items-start gap-2">
          <Pencil className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-mauve" />
          Schreib ihn analog, mit Stift auf Papier — der Körper braucht das.
        </li>
        <li className="flex items-start gap-2">
          <Pencil className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-mauve" />
          Keine Anklage. Keine Erklärung. Nur die schlichte Wahrheit, wie sie
          heute aussieht.
        </li>
        <li className="flex items-start gap-2">
          <Pencil className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-mauve" />
          Falte ihn. Leg ihn weg. Oder verbrenne ihn — wenn das ein sicheres
          Ritual für dich ist.
        </li>
      </ul>
    </div>
  );
}
