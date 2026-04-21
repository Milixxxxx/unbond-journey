import {
  ScrollText,
  Brain,
  Lightbulb,
  Microscope,
  Layers,
  Sparkles,
  Quote,
} from "lucide-react";
import { ChapterIntro } from "@/components/chapter-intro";
import { ChecklistGoals } from "@/components/checklist-goals";
import { BonusLock } from "@/components/bonus-lock";
import { CalloutBold, LikertScale, PillCloud } from "@/components/exercise";
import { useModuleProgress } from "@/hooks/use-module-progress";
import { ExerciseFrame } from "@/components/exercise/exercise-frame";

const SLUG = "bonus-e";

/**
 * BONUS E · Das Warum hinter dem Warum
 *
 * Quelle: Phase-2-Briefing.
 *
 * Pflicht-Elemente laut Briefing:
 *   ✓ Einführungstext ≥5 Abschnitte
 *   ✓ Mary&Sandra Story 3 Absätze (Therapie-Sitzung · Mutter-Schema · Exile-Kind)
 *   ✓ ≥3 wiss. Konzepte mit Quellen (Young 1994 · Schwartz 1994 · Bowlby 1969 als Brücke · Meyer 2003)
 *   ✓ ≥3 Übungen (Schema-Identifikation, IFS-Parts-Map, Schema-Trigger-Tagebuch 7 Tage)
 *   ✓ 1 Reflexionsfeld (in Trigger-Tagebuch)
 *   ✓ 5 Transformationsziele
 *
 * Abgrenzung zu Modul 09 (Bindungsmuster & Inneres Kind):
 *   Modul 09 erklärt Anxious-Avoidant-Trap (Bindungstypologie) + Reparenting/Inneres Kind als
 *   Selbstfürsorge-Praxis. Bonus E geht *darunter*: Welche Schemata (Young) + welche Teile (IFS)
 *   produzieren das Bindungsmuster überhaupt? Bowlby wird in 1 Brückensatz erwähnt, NICHT
 *   wiederholt erklärt. Inneres Kind = "Exile" im IFS-Sinn — explizit anders gerahmt als
 *   Reparenting in Modul 09.
 *
 * Sperre: Story + Diagnose offen, Übungen + Transformationsziele hinter BonusLock
 *         (Code: UNBOND-COMPLETE-2025 oder UNBOND-BONUS-E-2025).
 */
export function BonusE() {
  return (
    <article className="space-y-7">
      {/* ── Einleitung ── */}
      <ChapterIntro
        title="Bonus E · Das Warum hinter dem Warum"
        keywords={[
          "Schema-Therapie",
          "IFS / Parts",
          "Verlassenheits-Schema",
          "Manager · Firefighter · Exile",
          "Internalisierte Homophobie",
        ]}
      >
        <p>
          Du hast in Kapitel 09 verstanden, <em>welches</em> Bindungsmuster du
          mitbringst — anxious, avoidant, oder beides im Wechsel. Hier
          beantworten wir die nächste Frage: <strong>Warum überhaupt?</strong>{" "}
          Welche Tiefenschichten sorgen dafür, dass dein Nervensystem genau
          diese Muster produziert? Warum hat ausgerechnet diese Frau,
          ausgerechnet zu diesem Zeitpunkt, so präzise in dein System gepasst?
        </p>
        <p>
          Die Antwort liegt nicht in der Beziehung zu Sandra. Sie liegt
          Jahrzehnte früher — in den Schemata, die du als Kind gebaut hast, um
          zu überleben. Und in den inneren Anteilen, die seither still ihre
          Aufgabe tun: dich beschützen, dich anpassen, dich vor dem ganz alten
          Schmerz fernhalten.
        </p>
        <p>
          Wir arbeiten in diesem Bonus mit zwei Modellen, die einander präzise
          ergänzen: der <strong>Schema-Therapie nach Jeffrey Young</strong> und
          dem <strong>Internal Family Systems Modell von Richard Schwartz</strong>.
          Young zeigt dir die <em>Inhalte</em> deiner alten Überzeugungen.
          Schwartz zeigt dir die <em>Stimmen</em>, die diese Überzeugungen in
          dir tragen.
        </p>
        <p>
          Für queere Frauen kommt eine zusätzliche Schicht dazu, die in
          klassischen Schema-Modellen fehlt: <strong>internalisierte Homophobie</strong>{" "}
          (Meyer 2003). Sie ist kein eigenes Schema — sie ist ein
          Verstärker. Sie macht das Verlassenheits-Schema bedrohlicher, das
          Unzulänglichkeits-Schema giftiger, das Unterwerfungs-Schema
          plausibler. Wer als Kind gelernt hat, dass das eigene Begehren
          „falsch" ist, lernt früh, sich zu verkleinern. Sandras Verhalten
          fand auf bereits vorbereitetem Boden statt.
        </p>
        <p>
          Dieses Kapitel ist tiefer als die vorherigen. Es ist nicht für die
          akute Phase gedacht. Wenn du im Sturm bist, geh zu Kapitel 01 oder
          zur SOS-Seite. Wenn der Nebel sich gelichtet hat — was bei Mary
          nach etwa 9 Monaten geschah — dann öffnet sich hier eine Tür, die
          vorher verschlossen war.
        </p>
      </ChapterIntro>

      {/* ── STORY · Therapie nach 9 Monaten ── */}
      <section className="space-y-3">
        <p className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-sage">
          <ScrollText className="h-3.5 w-3.5" />
          Story · Neun Monate später
        </p>
        <div
          className="rounded-2xl bg-white/75 p-5 shadow-soft sm:p-6"
          style={{ borderLeft: "5px solid var(--color-sage)" }}
        >
          <h3 className="font-display text-base font-bold text-bordeaux">
            Donnerstag, 17:30 Uhr · Therapieraum
          </h3>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-graphite/90">
            <p>
              Mary sitzt in dem grauen Sessel, den sie inzwischen gut kennt.
              Neun Monate sind seit der Trennung vergangen. Die Therapeutin
              fragt heute etwas anderes als sonst — nicht nach Sandra, nicht
              nach den Triggern der Woche, nicht nach den Übungen.{" "}
              <em>„Erzählen Sie mir von Ihrer Mutter, als Sie zwölf waren.
              Wenn Sie traurig nach Hause kamen — was passierte dann?"</em>
              {" "}Mary will erst antworten wie immer: „Sie war schon okay."
              Aber stattdessen kommt etwas anderes. Sie sieht die Mutter am
              Küchentisch, mit dem leeren Blick, der Zeitung in der Hand,
              den Schultern, die nie reagierten. Sie hört sich selbst sagen:
              „Sie war einfach nicht da. Und ich habe gelernt, dass es
              meine Aufgabe ist, niemandem zur Last zu fallen."
            </p>
            <p>
              In dem Moment kippt etwas. Mary versteht plötzlich nicht
              Sandra — sondern <em>sich selbst</em>. Sie sieht, wie ihr
              ganzes Leben darauf ausgerichtet war, das Verlassen-Werden
              vorwegzunehmen, indem sie sich klein machte, niemals zur Last
              fiel, sich in jeder Beziehung erst nützlich machte. Das
              Verlassenheits-Schema, von dem die Therapeutin gesprochen
              hatte, war kein abstraktes Konzept mehr. Es war ihr Atem,
              ihre Wirbelsäule, ihre erste Bewegung am Morgen. Und Sandra?
              Sandra hatte dieses Schema mit chirurgischer Präzision
              bedient. Nicht aus Zufall. Nicht aus Liebe.{" "}
              <strong>Weil das Schema sie wie ein Magnet angezogen hatte.</strong>
            </p>
            <p>
              Die Therapeutin spricht später von „Teilen". Von einem
              Beschützer-Teil, der Mary jahrelang funktionsfähig gehalten
              hat — der scannte, plante, vorwegnahm. Von einem
              Feuerwehr-Teil, der mit Suchtverhalten und obsessiver Liebe
              löschte, was zu heiß wurde. Und von einem ganz kleinen
              Mädchen-Teil, irgendwo tief verborgen, das niemand mehr seit
              dreißig Jahren gehört hatte. An diesem Donnerstagabend, zum
              ersten Mal, weint Mary nicht über Sandra. Sie weint über das
              Mädchen am Küchentisch. Und der Beschützer-Teil tritt — zum
              ersten Mal überhaupt — einen Schritt zurück und lässt es
              geschehen. Mary geht an diesem Abend nach Hause und fühlt
              etwas Neues: <em>nicht Verzweiflung, sondern Mitgefühl. Für sich.</em>
            </p>
          </div>
        </div>
      </section>

      {/* ── DIAGNOSE · 5 Schemata ── */}
      <section className="space-y-3">
        <p className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-bordeaux">
          <Brain className="h-3.5 w-3.5" />
          Diagnose · Die 5 Schemata, die toxische Bindungen anziehen
        </p>
        <div
          className="rounded-2xl bg-white/80 p-5 shadow-soft sm:p-6"
          style={{ borderLeft: "5px solid var(--color-bordeaux)" }}
        >
          <h3 className="font-display text-base font-bold text-bordeaux">
            Was Young entdeckte
          </h3>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-graphite/90">
            <p>
              Jeffrey Young entwickelte 1994 die <strong>Schema-Therapie</strong>{" "}
              für genau die Patient*innen, bei denen klassische kognitive
              Verhaltenstherapie wenig bewegte: Menschen mit chronischen,
              wiederkehrenden Beziehungsmustern. Schemata, so Young, sind
              tiefe Überzeugungen über das Selbst und die Welt, die in
              Kindheit und Jugend gebaut werden — meist als logische
              Antwort auf das, was war. Sie sind nicht „falsch". Sie waren
              einmal überlebensnotwendig. Heute sind sie deine
              Lieblingsfilterlinse, durch die du Menschen wählst.
            </p>
            <p>
              Fünf Schemata sind in toxischen WLW-Beziehungen besonders
              häufig. Sie treten selten allein auf — meist in Clustern.
              Lies sie nicht als Diagnose. Lies sie als Inventar.
            </p>
          </div>

          <div className="mt-4 grid gap-2.5">
            {SCHEMATA.map((s) => (
              <div
                key={s.key}
                className="rounded-lg p-3"
                style={{
                  background:
                    "color-mix(in oklab, var(--color-bordeaux) 6%, transparent)",
                  borderLeft: `4px solid ${s.color}`,
                }}
              >
                <p className="text-sm leading-snug">
                  <strong style={{ color: s.color }}>{s.title}</strong>
                  {" — "}
                  <span className="text-graphite/90">{s.belief}</span>
                </p>
                <p className="mt-1 text-xs leading-snug text-graphite/70">
                  <em>Wie Sandra-Typen es bedienen:</em> {s.exploit}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-3 text-xs italic text-graphite/65">
            Quelle: Young, J. E., Klosko, J. S. & Weishaar, M. E. (1994).{" "}
            <em>Schema Therapy: A Practitioner's Guide</em>. Guilford Press.
          </p>
        </div>
      </section>

      {/* ── DEEP DIVE · IFS ── */}
      <section className="space-y-3">
        <p className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-mauve">
          <Layers className="h-3.5 w-3.5" />
          Deep Dive · IFS — die Stimmen, die deine Schemata leben
        </p>
        <div
          className="rounded-2xl bg-mauve/5 p-5 shadow-soft sm:p-6"
          style={{ borderLeft: "5px solid var(--color-mauve)" }}
        >
          <h3 className="font-display text-base font-bold text-bordeaux">
            Manager · Firefighter · Exile
          </h3>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-graphite/90">
            <p>
              Richard Schwartz veröffentlichte 1994 das{" "}
              <strong>Internal Family Systems Modell</strong> (IFS). Die
              Grundidee ist radikal einfach: Wir sind innerlich keine
              Einheit, sondern eine Familie aus Teilen. Jeder Teil hat ein
              Anliegen, das einmal sinnvoll war. Kein Teil ist „böse" — auch
              nicht der, der dich um drei Uhr morgens dazu bringt, ihre
              Stories zu checken.
            </p>
            <p>
              Drei Kategorien strukturieren das System. Sie greifen wie
              Zahnräder ineinander — und sie erklären, warum dein
              Verlassenheits-Schema sich so beharrlich hält:
            </p>
          </div>

          <div className="mt-4 space-y-2.5">
            {PARTS.map((p) => (
              <div
                key={p.key}
                className="rounded-lg p-3"
                style={{
                  background: `color-mix(in oklab, ${p.color} 10%, transparent)`,
                  borderLeft: `4px solid ${p.color}`,
                }}
              >
                <p className="text-sm leading-snug">
                  <strong style={{ color: p.color }}>{p.title}</strong>{" "}
                  <span className="text-graphite/60 text-[11px] uppercase tracking-wider">
                    · {p.role}
                  </span>
                </p>
                <p className="mt-1 text-sm leading-snug text-graphite/90">
                  {p.desc}
                </p>
                <p className="mt-1 text-xs italic text-graphite/70">
                  Bei Mary: {p.mary}
                </p>
              </div>
            ))}
          </div>

          <p className="mt-3 text-sm leading-relaxed text-graphite/90">
            Die Brücke: <strong>Schemata sind die Inhalte, Teile sind die
            Träger.</strong> Dein Manager hält sich an das Schema „ich darf
            niemandem zur Last fallen". Dein Firefighter zündet, wenn das
            Schema zu schmerzhaft wird. Dein Exile ist der Teil, der den
            ursprünglichen Schmerz <em>ist</em>. Heilung heißt nicht, Teile
            loszuwerden — sondern ihnen zuzuhören, bis sie ihre alte
            Aufgabe ablegen dürfen.
          </p>

          <p className="mt-3 text-xs italic text-graphite/65">
            Quelle: Schwartz, R. C. (1994).{" "}
            <em>Internal Family Systems Therapy</em>. Guilford Press.
          </p>
        </div>
      </section>

      {/* ── DEEP DIVE · Bowlby-Brücke + Internalisierte Homophobie ── */}
      <section className="space-y-3">
        <p className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-terracotta">
          <Microscope className="h-3.5 w-3.5" />
          Brücke · Bowlby trifft Meyer
        </p>
        <div
          className="rounded-2xl bg-white/80 p-5 shadow-soft sm:p-6"
          style={{ borderLeft: "5px solid var(--color-terracotta)" }}
        >
          <h3 className="font-display text-base font-bold text-bordeaux">
            Wie Schemata, Bindung und Minority Stress zusammenfinden
          </h3>
          <div className="mt-3 space-y-3 text-sm leading-relaxed text-graphite/90">
            <p>
              Wie du in <strong>Kapitel 09</strong> gelernt hast, beschrieb
              John Bowlby (1969) die frühen Bindungserfahrungen als Vorlage
              für alle späteren Beziehungen. Schema-Therapie und IFS bauen
              auf diesem Fundament auf — sie zeigen, <em>was</em> aus diesen
              frühen Erfahrungen konkret im Inneren entsteht: Schemata als
              Inhalte, Teile als Träger. Bowlby liefert das „Warum kommt
              überhaupt etwas zustande", Young und Schwartz das „Was genau
              ist es geworden".
            </p>
            <p>
              Für queere Frauen kommt eine Schicht dazu, die in beiden
              klassischen Modellen fehlt. Ilan Meyer dokumentierte 2003 mit
              dem <strong>Minority Stress Modell</strong>, dass das
              chronische Erleben von Stigma, Diskriminierung und Vorurteil
              zu <em>internalisierter Homophobie</em> führt: dem leisen,
              oft unbewussten Glauben, dass das eigene Begehren falsch,
              schmutzig oder weniger wert ist. Diese internalisierte
              Stimme ist kein eigenes Schema — sie ist ein{" "}
              <strong>Verstärker</strong>, der die fünf Young-Schemata
              brutaler macht:
            </p>
          </div>

          <ul className="mt-3 space-y-2 text-sm leading-snug text-graphite/90">
            <li className="rounded-md bg-terracotta/8 p-2.5">
              <strong className="text-terracotta">Verlassenheit:</strong> „Wenn
              sie geht, finde ich nie wieder eine andere — die Szene ist so
              klein."
            </li>
            <li className="rounded-md bg-terracotta/8 p-2.5">
              <strong className="text-terracotta">Unzulänglichkeit:</strong>{" "}
              „Vielleicht hatte meine Mutter recht — vielleicht ist das mit
              den Frauen einfach nicht das Richtige."
            </li>
            <li className="rounded-md bg-terracotta/8 p-2.5">
              <strong className="text-terracotta">Unterwerfung:</strong> „Ich
              muss dankbar sein, dass mich überhaupt jemand will, der so ist
              wie ich."
            </li>
          </ul>

          <p className="mt-3 text-xs italic text-graphite/65">
            Quellen: Bowlby, J. (1969). <em>Attachment and Loss, Vol. 1</em>;
            Meyer, I. H. (2003). Prejudice, social stress, and mental health
            in lesbian, gay, and bisexual populations.{" "}
            <em>Psychological Bulletin</em>, 129(5).
          </p>
        </div>
      </section>

      {/* ── LÖSUNG · drei Säulen ── */}
      <section className="space-y-3">
        <p className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-sage">
          <Lightbulb className="h-3.5 w-3.5" />
          Lösung · Erkennen · Trennen · Zuhören
        </p>
        <div className="space-y-3">
          {SOLUTIONS.map((p) => (
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

      {/* ── ÜBUNGEN + ZIELE — hinter Lock ── */}
      <BonusLock slug={SLUG} bonusLabel="Bonus E">
        <section className="space-y-5">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-terracotta">
            <Sparkles className="mr-1 inline h-3.5 w-3.5" />
            Übungen · 5 Transformationsziele
          </p>

          {/* Übung 1 · Schema-Identifikation (Likert über 15 Items, 3 pro Schema) */}
          <LikertScale
            slug={SLUG}
            storageKey="be-schema-id"
            title="Übung 1 · Welche Schemata leben in mir?"
            subtitle="Drei Aussagen pro Schema. Markiere, wie sehr jede Aussage auf dich zutrifft. Es gibt kein Richtig oder Falsch — nur ein Inventar."
            meta="🧬 Self-Assessment · ⏱ 12 Min · 15 Aussagen"
            accent="bordeaux"
            items={SCHEMA_ITEMS}
          />

          <SchemaScoring />

          {/* Übung 2 · IFS-Parts-Map (PillCloud) */}
          <PillCloud
            slug={SLUG}
            storageKey="be-parts-map"
            title="Übung 2 · Meine inneren Teile sichtbar machen"
            subtitle="Welche dieser Stimmen kennst du in dir? Wähle alles aus, was du wiedererkennst — die Liste ist absichtlich lang. Eigene Teile darfst du unten ergänzen."
            meta="👥 IFS-Parts · ⏱ 8 Min · Mehrfachauswahl"
            accent="mauve"
            allowCustom
            customPlaceholder="Eigenen Teil benennen …"
            counterLabel="Teile erkannt"
            pills={[
              // Manager
              { id: "m_planer", label: "Der Planer (denkt 5 Schritte voraus)" },
              { id: "m_kontrolleur", label: "Der Kontrolleur (alles im Griff)" },
              { id: "m_perfektionist", label: "Der Perfektionist" },
              { id: "m_pleaser", label: "Der People-Pleaser" },
              { id: "m_kritiker", label: "Der innere Kritiker" },
              { id: "m_scanner", label: "Der Stimmungs-Scanner" },
              // Firefighter
              { id: "f_obsess", label: "Der Obsessive (Stalking, Checken)" },
              { id: "f_alkohol", label: "Der Trinker / Esser / Konsument" },
              { id: "f_hoover", label: "Der zurück-Wollende" },
              { id: "f_rage", label: "Die plötzliche Wut" },
              { id: "f_dating", label: "Der Rebound-Dater" },
              { id: "f_serien", label: "Der Serien-/Scroll-Betäuber" },
              // Exile
              { id: "e_klein", label: "Das ungeliebte Kind" },
              { id: "e_schuld", label: "Die schuldige Tochter" },
              { id: "e_einsam", label: "Die ganz Einsame" },
              { id: "e_anders", label: "Die, die nicht dazugehört" },
              { id: "e_wertlos", label: "Die Wertlose" },
              // Self
              { id: "s_ruhig", label: "Die ruhige Erwachsene (Self)" },
              { id: "s_neugier", label: "Die neugierige Beobachterin" },
              { id: "s_mitgefuehl", label: "Die mitfühlende Zeugin" },
            ]}
          />

          {/* Übung 3 · Schema-Trigger-Tagebuch (7 Tage) */}
          <SchemaTriggerLog />

          {/* Transformationsziele */}
          <ChecklistGoals
            slug={SLUG}
            goals={[
              {
                id: "g1",
                text: "Ich kann mindestens 2 meiner Schemata benennen — und weiß, woher sie kommen.",
              },
              {
                id: "g2",
                text: "Ich verstehe, dass Sandra mein Verlassenheits-Schema nicht zufällig getroffen hat.",
              },
              {
                id: "g3",
                text: "Ich kenne mindestens einen Manager, einen Firefighter und einen Exile in mir.",
              },
              {
                id: "g4",
                text: "Ich habe eine Woche lang beobachtet, was meine Schemata triggert — ohne mich dafür zu verurteilen.",
              },
              {
                id: "g5",
                text: "Ich weiß: Heilung heißt nicht, Teile loszuwerden, sondern ihnen zuzuhören.",
              },
            ]}
          />
        </section>
      </BonusLock>
    </article>
  );
}

/* ─────────────────────────────────────────────────────────
 *  Inhalts-Konstanten
 * ───────────────────────────────────────────────────────── */

const SCHEMATA = [
  {
    key: "verlassenheit",
    title: "Verlassenheit",
    color: "var(--color-bordeaux)",
    belief: "„Alle, die ich liebe, gehen am Ende. Es ist nur eine Frage der Zeit."",
    exploit:
      "Erst überschwängliche Nähe (Love-Bombing), dann strategischer Rückzug — du gibst alles, um sie zu halten.",
  },
  {
    key: "unzulaenglichkeit",
    title: "Unzulänglichkeit / Scham",
    color: "var(--color-terracotta)",
    belief: "„Wenn man mich wirklich kennt, lehnt man mich ab. Ich bin im Kern falsch."",
    exploit:
      "Subtile Kritik („so meine ich das doch nicht"), Vergleiche, Demütigungen vor anderen — du wirst dankbar, dass sie dich erträgt.",
  },
  {
    key: "unterwerfung",
    title: "Unterwerfung",
    color: "var(--color-mauve)",
    belief: "„Meine Bedürfnisse sind nicht wichtig. Konflikt führt zu Strafe."",
    exploit:
      "Sie eskaliert, wenn du widersprichst — du lernst, deine Wünsche zu schlucken, um Frieden zu haben.",
  },
  {
    key: "entbehrung",
    title: "Emotionale Entbehrung",
    color: "var(--color-sage)",
    belief:
      "„Niemand wird je wirklich verstehen, was ich brauche. Ich bin allein, auch zu zweit."",
    exploit:
      "Intermittierende emotionale Verfügbarkeit — die seltenen Momente echten Verstanden-Werdens machen alles andere erträglich.",
  },
  {
    key: "misstrauen",
    title: "Misstrauen / Missbrauch",
    color: "var(--color-graphite)",
    belief: "„Menschen werden mich verletzen, sobald ich verletzlich bin."",
    exploit:
      "Sie bricht Vertrauen wiederholt — und bestätigt damit dein Schema. Es fühlt sich vertraut an, fast wie zu Hause.",
  },
] as const;

const PARTS = [
  {
    key: "manager",
    title: "Manager",
    role: "Proaktive Beschützer",
    color: "var(--color-mauve)",
    desc: "Halten dich funktionsfähig. Sie planen, kontrollieren, kritisieren, gefallen — alles, damit der Schmerz der Exiles nicht hochkommt. Sie wirken oft wie deine „Persönlichkeit".",
    mary: "Der Stimmungs-Scanner, der jahrelang Sandras Mikro-Mimik gelesen hat, um Konflikte vorwegzunehmen.",
  },
  {
    key: "firefighter",
    title: "Firefighter",
    role: "Reaktive Löscher",
    color: "var(--color-terracotta)",
    desc: "Springen ein, wenn der Manager versagt und der Schmerz eines Exiles durchbricht. Sie löschen mit allem, was schnell wirkt: Stalking, Alkohol, Sex, Rebound, Wut, Bingen. Nicht „böse" — verzweifelt.",
    mary: "Der obsessive Teil, der nachts Sandras Stories gecheckt hat. Er schützte das ungeliebte Kind vor dem freien Fall.",
  },
  {
    key: "exile",
    title: "Exile",
    role: "Verbannte Schmerz-Träger",
    color: "var(--color-bordeaux)",
    desc: "Tragen den ursprünglichen Schmerz: das ungeliebte Kind, die einsame Jugendliche, die Verlassene. Sie sind in Schubladen weggesperrt, weil ihr Gefühl zu groß war. Heilung beginnt, wenn du ihnen zuhörst.",
    mary: "Das zwölfjährige Mädchen am Küchentisch, das gelernt hat, niemandem zur Last zu fallen.",
  },
] as const;

const SOLUTIONS = [
  {
    title: "Erkennen ohne Verurteilen",
    text: "Ein Schema ist keine Schwäche. Es war einmal die einzig sinnvolle Antwort auf das, was war. Wenn du es benennen kannst, verliert es seine unsichtbare Macht. Das Gespräch verschiebt sich von „Was stimmt nicht mit mir?" zu „Was hat mein System gelernt, um zu überleben?"",
  },
  {
    title: "Teile trennen, nicht verurteilen (IFS-Sprache)",
    text: "Statt „Ich bin so obsessiv" lernst du zu sagen: „Ein Teil von mir ist obsessiv — und er versucht, etwas zu schützen, das jünger ist als ich denke." Diese kleine sprachliche Verschiebung macht enorm viel auf. Du bist nicht mehr deckungsgleich mit dem Symptom.",
  },
  {
    title: "Zuhören statt wegmachen",
    text: "Schwartz' radikalste Idee: Kein Teil ist dein Feind. Auch der Teil, der dich nachts ihre Stories scrollen lässt, hat einen Grund. Wenn du ihm zuhörst — wirklich zuhörst, mit Neugier statt Genervtheit — beginnt er, sich zu beruhigen. Was am Ende heilt, ist nicht Disziplin, sondern Beziehung. Mit dir selbst.",
  },
];

const SCHEMA_ITEMS = [
  // Verlassenheit (1-3)
  { id: "v1", text: "Ich rechne in jeder Beziehung damit, dass die andere irgendwann geht." },
  { id: "v2", text: "Wenn jemand nicht sofort antwortet, denke ich, etwas sei kaputt." },
  { id: "v3", text: "Ich gebe mehr als die andere — aus Angst, sonst nicht zu reichen." },
  // Unzulänglichkeit (4-6)
  { id: "u1", text: "Wenn man mich wirklich kennt, würde man mich verlassen." },
  { id: "u2", text: "Ich schäme mich oft für etwas, das andere harmlos finden." },
  { id: "u3", text: "Komplimente glaube ich nicht — ich denke, sie kennen mich nur noch nicht." },
  // Unterwerfung (7-9)
  { id: "s1", text: "Ich vermeide Konflikt, auch wenn ich dafür meine Bedürfnisse opfere." },
  { id: "s2", text: "Ich weiß oft nicht, was ich will — weil ich erst frage, was die andere will." },
  { id: "s3", text: "Wenn ich Nein sage, fühlt es sich gefährlich an." },
  // Emotionale Entbehrung (10-12)
  { id: "e1", text: "Selbst in nahen Beziehungen fühle ich mich oft innerlich allein." },
  { id: "e2", text: "Ich erwarte nicht wirklich, dass jemand versteht, was ich brauche." },
  { id: "e3", text: "Ich habe gelernt, mit emotionalem Hunger zu leben — er ist normal für mich." },
  // Misstrauen (13-15)
  { id: "m1", text: "Wenn ich verletzlich werde, rechne ich damit, dass es gegen mich verwendet wird." },
  { id: "m2", text: "Ich beobachte Menschen sehr genau — weil ich nicht überrascht werden will." },
  { id: "m3", text: "Vertrauen muss bei mir mühsam verdient werden — und kann sehr schnell wieder weg sein." },
];

/* ─────────────────────────────────────────────────────────
 *  Schema-Score-Auswertung (zeigt Top-Schemata)
 * ───────────────────────────────────────────────────────── */

function SchemaScoring() {
  const { exerciseState, loaded } = useModuleProgress(SLUG);
  if (!loaded) return null;

  const answers: Record<string, number> = exerciseState["be-schema-id"] ?? {};
  if (Object.keys(answers).length < 5) return null;

  const groups: { key: string; label: string; ids: string[]; color: string }[] = [
    { key: "v", label: "Verlassenheit", ids: ["v1", "v2", "v3"], color: "var(--color-bordeaux)" },
    { key: "u", label: "Unzulänglichkeit", ids: ["u1", "u2", "u3"], color: "var(--color-terracotta)" },
    { key: "s", label: "Unterwerfung", ids: ["s1", "s2", "s3"], color: "var(--color-mauve)" },
    { key: "e", label: "Emotionale Entbehrung", ids: ["e1", "e2", "e3"], color: "var(--color-sage)" },
    { key: "m", label: "Misstrauen", ids: ["m1", "m2", "m3"], color: "var(--color-graphite)" },
  ];

  const scored = groups
    .map((g) => {
      const sum = g.ids.reduce((acc, id) => acc + (answers[id] ?? 0), 0);
      return { ...g, sum, max: g.ids.length * 4 };
    })
    .sort((a, b) => b.sum - a.sum);

  return (
    <div
      className="rounded-2xl border-2 border-bordeaux/20 bg-white/85 p-4 shadow-soft"
      style={{ borderLeft: "5px solid var(--color-bordeaux)" }}
    >
      <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-bordeaux">
        Auswertung · Deine Schema-Landkarte
      </p>
      <p className="mt-1 text-xs leading-snug text-graphite/75">
        Je höher die Zahl, desto stärker spricht dieses Schema in dir.
        Die obersten zwei sind oft die, die deine Beziehungswahl am meisten
        prägen.
      </p>
      <ul className="mt-3 space-y-1.5">
        {scored.map((g) => {
          const pct = Math.round((g.sum / g.max) * 100);
          return (
            <li key={g.key}>
              <div className="flex items-baseline justify-between text-xs">
                <span className="font-semibold" style={{ color: g.color }}>
                  {g.label}
                </span>
                <span className="font-mono text-graphite/70">
                  {g.sum} / {g.max}
                </span>
              </div>
              <div className="mt-1 h-2 w-full overflow-hidden rounded-full bg-graphite/10">
                <div
                  className="h-full rounded-full transition-all"
                  style={{ width: `${pct}%`, background: g.color }}
                />
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────
 *  Übung 3 · 7-Tage Schema-Trigger-Tagebuch
 * ───────────────────────────────────────────────────────── */

type DayEntry = { trigger: string; schema: string; part: string };
const EMPTY_DAY: DayEntry = { trigger: "", schema: "", part: "" };
const DAYS = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];

function SchemaTriggerLog() {
  const { exerciseState, setExercise, loaded } = useModuleProgress(SLUG);
  if (!loaded) return null;

  const log: Record<string, DayEntry> = exerciseState["be-trigger-log"] ?? {};
  const update = (day: string, patch: Partial<DayEntry>) => {
    const cur = log[day] ?? EMPTY_DAY;
    setExercise("be-trigger-log", { ...log, [day]: { ...cur, ...patch } });
  };

  const filledDays = DAYS.filter((d) => (log[d]?.trigger ?? "").trim().length > 0).length;

  return (
    <ExerciseFrame
      title="Übung 3 · Mein Schema-Trigger-Tagebuch (7 Tage)"
      subtitle="Eine Woche lang notierst du jeden Abend in 3 Sätzen: Was hat heute getriggert? Welches Schema sprang an? Welcher Teil hat das Steuer übernommen? Du musst nicht jeden Tag schaffen — beobachte, was geht."
      meta="📓 Beobachtung · ⏱ 5 Min/Tag · 1 Woche"
      accent="terracotta"
    >
      <div className="rounded-lg bg-terracotta/8 p-3 text-xs leading-relaxed text-graphite/85">
        <strong className="text-bordeaux">Hinweis:</strong> Es geht nicht
        darum, etwas zu „lösen". Es geht darum, beim Beobachten überhaupt
        anwesend zu sein. Schon das verändert das Muster.
      </div>

      <div className="space-y-3">
        {DAYS.map((d) => {
          const entry = log[d] ?? EMPTY_DAY;
          const filled = entry.trigger.trim().length > 0;
          return (
            <div
              key={d}
              className="rounded-xl bg-white/85 p-3 shadow-soft transition"
              style={{
                borderLeft: `4px solid ${
                  filled ? "var(--color-terracotta)" : "color-mix(in oklab, var(--color-terracotta) 25%, transparent)"
                }`,
              }}
            >
              <p className="mb-2 inline-flex items-center gap-2 text-xs font-semibold text-bordeaux">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-terracotta/15 font-mono text-[10px] uppercase">
                  {d}
                </span>
                Tag {DAYS.indexOf(d) + 1}
              </p>
              <textarea
                value={entry.trigger}
                onChange={(e) => update(d, { trigger: e.target.value })}
                placeholder="Was hat heute getriggert? (z. B. „Sie hat eine Story mit der Neuen gepostet")"
                rows={2}
                className="w-full resize-y rounded-md border border-terracotta/25 bg-white/90 p-2 text-sm leading-snug text-graphite outline-none transition focus:border-terracotta focus:ring-2 focus:ring-terracotta/15"
              />
              <div className="mt-2 grid gap-2 sm:grid-cols-2">
                <input
                  type="text"
                  value={entry.schema}
                  onChange={(e) => update(d, { schema: e.target.value })}
                  placeholder="Welches Schema sprang an?"
                  className="rounded-md border border-terracotta/25 bg-white/90 p-2 text-sm text-graphite outline-none transition focus:border-terracotta focus:ring-2 focus:ring-terracotta/15"
                />
                <input
                  type="text"
                  value={entry.part}
                  onChange={(e) => update(d, { part: e.target.value })}
                  placeholder="Welcher Teil übernahm? (Manager / Firefighter / Exile)"
                  className="rounded-md border border-terracotta/25 bg-white/90 p-2 text-sm text-graphite outline-none transition focus:border-terracotta focus:ring-2 focus:ring-terracotta/15"
                />
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex items-center justify-between rounded-lg bg-terracotta/8 px-3 py-2 text-xs">
        <span className="font-medium text-graphite/80">
          {filledDays} / 7 Tagen dokumentiert
        </span>
        {filledDays >= 5 && (
          <span className="inline-flex items-center gap-1 font-semibold text-terracotta">
            <Quote className="h-3 w-3" />
            Du beobachtest dich — das ist die Arbeit.
          </span>
        )}
      </div>
    </ExerciseFrame>
  );
}
