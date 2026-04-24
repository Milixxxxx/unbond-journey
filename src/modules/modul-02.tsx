import {
  Heart,
  CloudRain,
  Scissors,
  Anchor,
  Zap,
  HeartHandshake,
  Flame,
  Drama,
  RefreshCw,
  Droplet,
  Bird,
  Scale,
  Phone,
  type LucideIcon,
} from "lucide-react";
import { GlossarTerm } from "@/components/glossar-term";
import { ChapterIntro } from "@/components/chapter-intro";
import { SectionBlock } from "@/components/section-block";
import { TextCollapse } from "@/components/text-collapse";
import { Reveal } from "@/components/reveal";
import { DeepDiveIntro } from "@/components/deep-dive-intro";
import { ChecklistGoals } from "@/components/checklist-goals";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  StackedCards,
  Reflection3Step,
  PillCloud,
  CalloutBold,
  FlipCard,
  TwentyOneDayChallenge,
  HooverDecoder,
  MeditationCard,
} from "@/components/exercise";

const SLUG = "modul-02";

/**
 * MODUL 02 · Die Rosa-Brille abnehmen (Quelle: Schritt 03 · UNBOND_Final_02-3.html)
 * 1:1-Übernahme der Inhalte in das Master-Blueprint-Gerüst aus Modul 01.
 * Reihenfolge: ChapterIntro → Story → Diagnose → Lösung → Deep Dive → Übungen
 *              → Unterkapitel 3.5/3.6/3.7 (jeweils Story · Diagnose · Lösung/Übung)
 *              → Meditation → Checkliste.
 * Alle Sections via SectionBlock. Lange Diagnose-Texte via TextCollapse.
 * Persistence: useModuleProgress("modul-02") über alle Übungen.
 */
export function Modul02() {
  return (
    <article className="space-y-7">
      {/* ── Einleitung ── */}
      <ChapterIntro
        title="Schritt 03 · Die Rosa-Brille abnehmen"
        keywords={[
          "Kognitive Dissonanz",
          "Gaslighting",
          "Negative Reappraisal",
          "Hoovering",
        ]}
      >
        <p>
          Solange dein Gehirn die Beziehung idealisiert, ist echte Heilung
          neurobiologisch unmöglich. Die rosa Brille ist keine Schwäche – sie
          ist ein Schutzmechanismus deines Gehirns, der jedoch genau das
          verhindert, was du jetzt brauchst: Klarheit über die Realität.
        </p>
        <p>
          In diesem Schritt arbeitest du mit konkreten Werkzeugen wie dem
          Gaslighting-Log, der Wolf-im-Schafspelz-Übung und der negativen
          Neubewertung, um die systematischen Manipulationsmuster zu
          dokumentieren, Hoovering-Versuche zu entlarven und die romantische
          Illusion durch schriftlich festgehaltene Fakten dauerhaft zu
          zertrümmern.
        </p>
      </ChapterIntro>

      {/* ════════════════ 1 · STORY · Der Hoovering-Brief ════════════════ */}
      <SectionBlock
        kind="story"
        eyebrow="Story · Das Gaslighting-Log"
        title="Wenn die Schuppen von den Augen fallen"
      >
        <div className="[&>p+p]:mt-4 [&>p]:mb-0">
          <Reveal>
            <p className="font-display text-base font-semibold text-cream">
              Der Hoovering-Brief
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p>
              Sechs Monate nach dem Ghosting vibriert Marys Handy. Eine
              Nachricht von Sandra auf einer Plattform, auf der sie angeblich
              nie aktiv sein wollte. Es ist ein klassischer{" "}
              <GlossarTerm termKey="hoovering">„Hoovering“</GlossarTerm>
              -Versuch:
            </p>
          </Reveal>
          <Reveal delay={240}>
            <blockquote className="border-l-2 border-cream/40 pl-4 italic text-cream/90">
              „Unser Treffen war sehr belastend, weil du dich direkt in die
              Opferrolle begeben hast. Ich war immer für dich da. Lass uns doch
              wenigstens im Frieden sein. Schade, dass du die Dinge so
              verdrehst.“
            </blockquote>
          </Reveal>
          <Reveal delay={360}>
            <p>
              Sofort schnürt sich Marys Hals zu. <em>Hat Sandra recht? War ich
              das Problem?</em> Bevor die Selbstzweifel sie verschlingen,
              schlägt Mary ihr Workbook auf und nutzt die „Wolf im
              Schafspelz“-Übung (Realitäts-Check). Sie zieht einen Strich in
              die Mitte der Seite:
            </p>
          </Reveal>

          <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
            <div className="rounded-xl bg-white/10 p-3.5 text-xs leading-relaxed text-cream/90 ring-1 ring-cream/15">
              <p className="mb-1 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-cream/70">
                Was Sandra schreibt · Die Maske
              </p>
              <p>
                „Ich war immer für dich da, ich reiche dir die Hand zum Frieden.
                Ich bin das Opfer.“
              </p>
            </div>
            <div className="rounded-xl bg-white/10 p-3.5 text-xs leading-relaxed text-cream/90 ring-1 ring-cream/15">
              <p className="mb-1 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-cream/70">
                Was Sandra TAT · Die Fakten
              </p>
              <p>
                Sie hat Mary nach den intimsten Momenten tagelang geghostet. Sie
                hat Behörden instrumentalisiert, um sie einzuschüchtern. Sie
                hat Mary stillschweigend ersetzt, während sie ihr Liebe schwor.
              </p>
            </div>
          </div>

          <Reveal delay={120}>
            <p className="mt-4">
              Mary atmet tief aus. Die Fakten sind glasklar. Das Geschriebene
              brennt sich in ihr Bewusstsein. Ohne noch einen einzigen Moment
              zu zögern, drückt Mary auf <strong>„Blockieren“</strong>. Die
              jahrzehntealte rosa Brille splittert krachend. Die Illusion ist
              endlich gebrochen.
            </p>
          </Reveal>
        </div>
      </SectionBlock>

      {/* ── Marys Gaslighting-Log: 3 Einträge (Story-Voice) ── */}
      <SectionBlock
        kind="story"
        eyebrow="Marys Gaslighting-Log · Drei Einträge"
        title="Was geschah – was ich fühlte – was die Fakten sagen"
      >
        <div className="space-y-3">
          {GASLIGHTING_BEISPIELE.map((e, i) => (
            <Reveal key={e.id} delay={i * 120}>
              <div className="rounded-xl bg-white/10 p-4 ring-1 ring-cream/15">
                <p className="font-display text-sm font-bold text-cream">
                  Eintrag {i + 1}: {e.titel}
                </p>
                <div className="mt-2 space-y-1.5 text-xs leading-relaxed text-cream/90">
                  <p>
                    <span className="font-semibold text-cream/95">
                      Die Situation:
                    </span>{" "}
                    {e.situation}
                  </p>
                  <p>
                    <span className="font-semibold text-cream/95">
                      Was ich gefühlt habe:
                    </span>{" "}
                    {e.gefuehl}
                  </p>
                  <p className="rounded-md bg-cream/10 p-2 ring-1 ring-cream/15">
                    <span className="font-semibold text-cream">
                      Was die Fakten sagen:
                    </span>{" "}
                    {e.fakten}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-4 text-[11px] italic leading-snug text-cream/65">
          Abb.: Gaslighting erkennen und entmachten – Gaslighting zerstört
          durch systematisches Leugnen der Realität den inneren
          Sicherheits-Anker. Die Gegenstrategie: konsequente
          Fakten-Dokumentation. Daten lügen nicht, Hoffnung schon.
        </p>
      </SectionBlock>

      {/* ════════════════ 2 · DIAGNOSE ════════════════ */}
      <SectionBlock
        kind="diagnose"
        eyebrow="Diagnose · Kognitive Dissonanz & Spielautomat-Effekt"
        title="Was in deinem Kopf passiert"
      >
        <TextCollapse preview={1} threshold={2}>
          <p>
            <GlossarTerm termKey="kognitive-dissonanz">
              Kognitive Dissonanz
            </GlossarTerm>{" "}
            (Festinger, 1957) entsteht, wenn zwei widersprüchliche
            Überzeugungen gleichzeitig existieren: <em>„Ich weiß, dass diese
            Beziehung mir schadet"</em> und <em>„Ich kann ohne sie nicht
            leben."</em> Das Gehirn kann diesen Widerspruch nicht dauerhaft
            aushalten – es löst ihn auf, indem es eine der beiden
            Überzeugungen abschwächt. Meistens die erste.
          </p>
          <p>
            B.F. Skinner entdeckte, dass{" "}
            <GlossarTerm termKey="intermittierende-verstaerkung">
              intermittierende Verstärkung
            </GlossarTerm>{" "}
            – unregelmäßige, unvorhersehbare Belohnung – die stärkste Form der
            Konditionierung erzeugt. Ratten, die nur manchmal Futter bekamen,
            drückten den Hebel obsessiv – weit häufiger als Ratten mit
            konstanter Belohnung.
          </p>
          <p>
            Helen Fisher zeigte per fMRT, dass romantische Ablehnung und
            Kokain-Entzug <strong>dieselben Gehirnareale</strong> aktivieren:
            das Ventrale Tegmentale Areal (VTA) und den Nucleus Accumbens.
            Trennungsschmerz ist kein emotionales Drama. Er ist ein
            biochemischer Entzug.
          </p>
          <p>
            In toxischen Beziehungen wird diese Dissonanz durch{" "}
            <strong>Weaponized Virtue</strong> verstärkt: Wenn deine Partnerin
            öffentlich als einfühlsam und tugendhaft gilt, zweifelst du an dir
            selbst, nicht an ihr.
          </p>
        </TextCollapse>

        <p className="mt-3 text-[11px] italic leading-snug text-graphite/60">
          Abb.: Der neurobiologische Sucht-Loop – die Darstellung erklärt
          Trauma-Bonding als neurobiologischen Suchtprozess, der durch
          intermittierende Verstärkung und wechselnde Stress- und
          Belohnungsreize entsteht. Sie verdeutlicht, warum der Kontaktabbruch
          („No Contact") notwendig ist, um die konditionierten
          Reaktionsmuster zu durchbrechen und Heilung zu ermöglichen.
        </p>
      </SectionBlock>

      {/* ── Die drei Botenstoffe als FlipCards ── */}
      <SectionBlock
        kind="diagnose"
        eyebrow="Die drei Botenstoffe der Falle"
        title="Tippe eine Karte an — sieh, was sie wirklich tut"
      >
        <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-3">
          {BOTENSTOFFE.map((b) => (
            <FlipCard
              key={b.id}
              icon={b.icon}
              color="var(--color-sage)"
              label={b.kicker}
              heading={b.name}
              front={b.teaser}
              back={b.desc}
            />
          ))}
        </div>
        <p className="mt-3 text-[11px] italic text-graphite/60">
          Skinner (1938): Operante Konditionierung · Fisher et al. (2005,
          2010): fMRT-Studien romantische Ablehnung · Berridge &amp; Robinson
          (1998): Wanting vs. Liking
        </p>
      </SectionBlock>

      {/* ── Der 4-Phasen-Zyklus ── */}
      <SectionBlock
        kind="diagnose"
        eyebrow="Der 4-Phasen-Zyklus der toxischen Bindung"
        title="Wie sich die Schleife immer wieder schließt"
      >
        <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
          {PHASEN.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.id}
                className="rounded-xl bg-white/70 p-4 shadow-glass ring-1 ring-[color:var(--color-sage)]/20"
              >
                <div className="mb-2 grid h-9 w-9 place-items-center rounded-full bg-[color:var(--color-sage)]/12">
                  <Icon
                    className="h-4 w-4 text-[color:var(--color-sage)]"
                    strokeWidth={1.75}
                  />
                </div>
                <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-sage)]">
                  {p.label}
                </p>
                <p className="mt-1 text-xs leading-snug text-graphite/85">
                  {p.desc}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-4">
          <CalloutBold kind="insight" title="Das Muster erkennen">
            <p>
              Jeder Durchlauf dieses Zyklus verstärkt die neuronale Verbindung.
              Nicht weil die Beziehung besser wird – sondern weil dein Gehirn
              gelernt hat: <strong>Nach dem Schmerz kommt die Erlösung.
              Warte nur lang genug.</strong>
            </p>
          </CalloutBold>
        </div>

        <p className="mt-3 text-[11px] italic leading-snug text-graphite/60">
          Abb.: Der 4-Phasen-Zyklus der toxischen Bindung – die Grafik
          veranschaulicht den vierphasigen Kreislauf toxischer Bindung – von
          intensiver Idealisierung (Lovebombing) über emotionalen Entzug und
          kognitive Dissonanz bis hin zum manipulativen Rückholversuch
          (Hoovering). Sie zeigt, wie dieser wiederkehrende Zyklus
          neurobiologisch verstärkt wird und die emotionale Abhängigkeit
          zunehmend vertieft.
        </p>
      </SectionBlock>

      {/* ════════════════ 3 · LÖSUNG · Negative Reappraisal ════════════════ */}
      <SectionBlock
        kind="loesung"
        eyebrow="Lösung · Negative Reappraisal & Realitäts-Anker"
        title="Wie bewusstes Umbewerten dein Gehirn entgiftet"
      >
        <p className="font-display text-[15px] font-semibold leading-snug text-bordeaux sm:text-base">
          Es geht nicht darum, sie zu hassen – es geht darum, das idealisierte
          Bild durch ein reales zu ersetzen, das Schmerz, Enttäuschung und
          Verrat einschließt.
        </p>

        <TextCollapse preview={1} threshold={2}>
          <p>
            <GlossarTerm termKey="negative-reappraisal">
              Negative Reappraisal
            </GlossarTerm>{" "}
            (Langeslag &amp; Sanchez, 2018) ist die wissenschaftlich am besten
            belegte Methode, um romantische Gefühle aktiv zu reduzieren – nicht
            durch Verdrängen, sondern durch bewusstes Ersetzen des
            idealisierten Bildes durch ein vollständiges, reales Bild. Das
            Prinzip nutzt die <strong>Rekonsolidierung</strong> (Nader et al.,
            2000): Erinnerungen werden bei jedem Abruf leicht verändert. Jedes
            Mal, wenn eine positiv besetzte Erinnerung mit einer faktischen
            Verletzung verknüpft wird, schwächt sich die emotionale Aufladung
            ab – nicht durch Willenskraft, sondern durch neuronale
            Umstrukturierung.
          </p>
          <p>
            fMRT-Studien zeigen, dass Negative Reappraisal die Aktivität im
            Belohnungszentrum (Nucleus Accumbens) messbar senkt. Langeslag
            &amp; Sanchez fanden, dass 21 Tage tägliches Reappraisal die
            emotionale Aktivierung um <strong>30–40 %</strong> reduziert.
          </p>
        </TextCollapse>

        <CalloutBold
          kind="science"
          title="Erinnerungen sind kein Archiv – sie werden bei jedem Abruf neu geschrieben."
          source="Langeslag &amp; Sanchez (2018), J. Exp. Psychol.: General · Nader et al. (2000), Nature 406, 722–726"
        >
          <p>
            Wenn du eine romantisierte Erinnerung mit der faktischen
            Verletzung daneben legst, überschreibt dein Gehirn das emotionale
            Etikett. Nicht beim ersten Mal — aber spürbar nach 21 Tagen.
          </p>
        </CalloutBold>
      </SectionBlock>

      {/* ════════════════ 5 · ÜBUNGEN ════════════════ */}

      {/* ── Übung 1a · Gaslighting-Log ── */}
      <SectionBlock
        kind="uebung"
        eyebrow="Übung 1a · Dein persönliches Gaslighting-Log"
        title="Trenne, was du gefühlt hast, von dem, was passiert ist"
      >
        <p className="text-sm leading-relaxed text-graphite/85">
          Dokumentiere Momente, in denen du an deiner eigenen Wahrnehmung
          gezweifelt hast. Für jede Situation: Was ist passiert? Was hat sie
          gesagt/getan? Wie hast du dich gefühlt? Was sagen die Fakten?
        </p>
        <StackedCards
          slug={SLUG}
          storageKey="gaslighting_log"
          title="Gaslighting-Log · 3 Einträge"
          subtitle="Beliebig viele Einträge. Wird automatisch gespeichert."
          meta="3 Einträge · ca. 15 Min"
          accent="bordeaux"
          rows={[1, 2, 3].map((n) => ({
            id: `log_${n}`,
            title: `Eintrag ${n}`,
            fields: [
              {
                key: "passiert",
                label: "Was ist passiert?",
                placeholder: "Beschreibe die Situation…",
                rows: 3,
              },
              {
                key: "gesagt",
                label: "Was hat sie gesagt/getan?",
                placeholder: "Ihre genauen Worte…",
                rows: 3,
              },
              {
                key: "gefuehl",
                label: "Wie hast du dich gefühlt?",
                placeholder: "Deine Reaktion, Selbstzweifel…",
                rows: 3,
              },
              {
                key: "fakten",
                label: "Was sagen die Fakten?",
                placeholder: "Unbestreitbare Tatsachen…",
                rows: 3,
              },
            ],
          }))}
        />
      </SectionBlock>

      {/* ── Übung 1b · 4-Spalten-Realitäts-Check ── */}
      <SectionBlock
        kind="uebung"
        eyebrow="Übung 1b · 4-Spalten-Realitäts-Check"
        title="Romantik gegen Realität – Spalte für Spalte"
      >
        <p className="text-sm leading-relaxed text-graphite/85">
          Vergleiche deine romantisierten Erinnerungen mit der faktischen
          Realität. Dieser strukturierte Check hilft, kognitive Dissonanz
          aufzulösen.
        </p>
        <StackedCards
          slug={SLUG}
          storageKey="realitaets_check"
          title="Realitäts-Check · 4 Spalten"
          subtitle="Pro Erinnerung: romantisierte Version, emotionale Wirkung, faktische Realität, neue Bewertung."
          meta="2 Erinnerungen · 4 Spalten · ca. 10 Min"
          accent="mauve"
          rows={[1, 2].map((n) => ({
            id: `rc_${n}`,
            title: `Erinnerung ${n}`,
            fields: [
              {
                key: "romantik",
                label: "Romantisierte Version",
                placeholder: "z.B. Sie war so fürsorglich…",
                rows: 3,
              },
              {
                key: "wirkung",
                label: "Emotionale Wirkung",
                placeholder: "z.B. Ich fühlte mich geliebt…",
                rows: 3,
              },
              {
                key: "real",
                label: "Faktische Realität",
                placeholder: "z.B. Nur nach Konflikten…",
                rows: 3,
              },
              {
                key: "neu",
                label: "Neue Bewertung",
                placeholder: "z.B. Das war Kontrolle…",
                rows: 3,
              },
            ],
          }))}
        />
        <CalloutBold kind="insight" title="Merksatz">
          <p className="italic">
            „Negative Reappraisal bedeutet nicht, das Gute kleinzureden. Es
            bedeutet, das Reale sichtbar zu machen – damit das idealisierte
            Bild nicht mehr Macht hat als die Wirklichkeit.“
          </p>
        </CalloutBold>
      </SectionBlock>

      {/* ── Lösungs-Brücke zur 21-Tage-Challenge ── */}
      <SectionBlock
        kind="loesung"
        eyebrow="Lösung · Negative Reappraisal in der Praxis"
        title="21 Tage. Ein faktischer Satz pro Tag."
      >
        <p>
          Schreibe täglich einen faktisch belegten, negativen Aspekt der
          Beziehung auf – nicht um zu verurteilen, sondern um das
          Gleichgewicht deiner Erinnerungen wiederherzustellen. Nach 21 Tagen
          zeigen Studien eine 30–40 % Reduktion romantischer
          Gefühlsintensität.
        </p>
        <p className="text-sm font-semibold text-bordeaux">
          → Nutze dafür die 21-Tage-Challenge in Übung 2 (unten).
        </p>
      </SectionBlock>

      {/* ── Übung 1c · Phasen-Mapper ── */}
      <SectionBlock
        kind="uebung"
        eyebrow="Übung 1c · Phasen-Mapper"
        title="Ordne deine Erinnerungen den 4 Phasen zu"
      >
        <p className="text-sm leading-relaxed text-graphite/85">
          Schreibe Erinnerungen in das Eingabefeld und füge sie in die jeweils
          passende Phase ein. So wird das Muster sichtbar.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {PHASEN.map((p) => (
            <PillCloud
              key={p.id}
              slug={SLUG}
              storageKey={`phasen_mapper_${p.id}`}
              title={p.label}
              subtitle={p.desc}
              accent="terracotta"
              pills={[]}
              counterLabel="Erinnerungen"
              emptyHint="Tippe eine Erinnerung ein und füge sie hinzu."
              allowCustom
              customPlaceholder="Erinnerung hinzufügen …"
            />
          ))}
        </div>
      </SectionBlock>

      {/* ── Übung 2 · 21-Tage-Challenge ── */}
      <SectionBlock
        kind="uebung"
        eyebrow="Übung 2 · 21-Tage-Challenge: Negative Reappraisal"
        title="Ein faktischer, negativer Aspekt — jeden Tag, 21 Tage lang"
      >
        <p className="text-sm leading-relaxed text-graphite/85">
          Schreibe jeden Tag eine negative, faktisch belegte Eigenschaft oder
          Handlung auf – nicht aus Hass, sondern aus Klarheit. Wähle einen Tag
          aus und trage deine Erinnerung ein. Nach 21 Tagen zeigen Studien
          eine messbare Reduktion romantischer Gefühlsintensität um 30–40 %.
        </p>
        <TwentyOneDayChallenge
          slug={SLUG}
          storageKey="reappraisal_21"
          title="21-Tage-Challenge · Negative Reappraisal"
          subtitle="Ein Eintrag pro Tag. Wird automatisch gespeichert."
          meta="21 Tage · 5 Min/Tag"
          accent="sage"
        />
      </SectionBlock>

      {/* ── Übung 3 · Podest-Analyse & Brief ── */}
      <SectionBlock
        kind="uebung"
        eyebrow="Übung 3 · Podest-Analyse & Brief ans idealisierte Bild"
        title="Idealisiert vs. Real — und ein Brief an die, die nie existiert hat"
      >
        <p>
          Wir lieben selten die reale Person – wir lieben die Illusion, die wir
          uns von ihr gemacht haben. In der Verliebtheitsphase kam deine
          Partnerin dieser Illusion beängstigend nahe: aufmerksam, zugewandt,
          als hätte sie dich wirklich gesehen. Doch sobald diese Phase verging,
          zeigte sie zunehmend ihr wahres Verhalten – und wich immer weiter
          von dem Bild ab, das du im Kopf hattest. Trotzdem hast du am
          idealisierten Bild festgehalten, weil das Loslassen dieser Illusion
          bedeutet hätte, den Schmerz des Verlustes wirklich zu fühlen.
        </p>
        <p>
          Diese Übung hilft dir, das Podest sichtbar zu machen: Stelle das
          idealisierte Bild der realen Person gegenüber. Dann schreibe einen
          Brief – nicht an sie, sondern an die Version von ihr, die nie
          existiert hat.
        </p>
        <Reflection3Step
          slug={SLUG}
          title="Podest-Analyse · Idealisiert vs. Real"
          subtitle="3 Schritte. Wird automatisch gespeichert."
          meta="3 Schritte · 15–20 Min"
          accent="terracotta"
          steps={[
            {
              key: "podest_ideal",
              label: "Idealisiert – was ich ihr zugeschrieben habe",
              placeholder:
                "Ich habe ihr zugeschrieben…\nIch dachte, sie sei…\nIch glaubte, sie würde…",
              rows: 5,
            },
            {
              key: "podest_real",
              label: "Real – was sie tatsächlich gezeigt hat",
              placeholder:
                "Die reale Person hat gezeigt…\nWas sie tatsächlich getan hat…\nWas ich ignoriert habe…",
              rows: 5,
            },
            {
              key: "podest_brief",
              label: "Brief ans idealisierte Bild",
              placeholder:
                "Liebes idealisiertes Bild,\n\nIch habe dich so lange festgehalten, weil…",
              rows: 6,
            },
          ]}
        />
      </SectionBlock>

      {/* ── Übung 4 · Hoover-Mail Decoder ── */}
      <SectionBlock
        kind="uebung"
        eyebrow="Übung 4 · Hoover-Mail Decoder"
        title="Manipulationssprache entlarven"
      >
        <CalloutBold kind="insight" title="Hinweis: Selbsthilfeübung">
          <p>
            Dies ist eine Selbsthilfeübung im Rahmen des UNBOND-Programms –
            keine Lernzielkontrolle und keine klinische Diagnose. Das Ziel ist
            es, dir Werkzeuge zur Verfügung zu stellen, um manipulative
            Sprachmuster zu erkennen und deiner eigenen Wahrnehmung zu
            vertrauen.
          </p>
        </CalloutBold>
        <p>
          Wenn der „Wolf" zurückschreibt, klingt es selten offensichtlich
          böse. Hoovering-Nachrichten sind meisterhaft konstruiert: Sie
          klingen nach Frieden, nach Reue, nach Sorge – und hinterlassen dich
          dennoch destabilisiert. Denn das ist ihr Zweck. In dieser Übung
          lernst du, die Maske zu durchschauen.
        </p>
        <HooverDecoder slug={SLUG} />

        {/* ── Die 5 häufigsten Hoovering-Taktiken als FlipCards ── */}
        <div className="mt-2">
          <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-terracotta)]">
            Die 5 häufigsten Hoovering-Taktiken auf einen Blick
          </p>
          <div className="grid grid-cols-2 gap-2 sm:gap-2.5 md:grid-cols-5">
            {TAKTIKEN.map((t) => (
              <FlipCard
                key={t.id}
                icon={t.icon}
                color="var(--color-terracotta)"
                label={t.kicker}
                heading={t.name}
                front={t.teaser}
                back={t.desc}
              />
            ))}
          </div>
        </div>
      </SectionBlock>

      {/* ════════════════ DEEP DIVE ════════════════ */}
      <DeepDiveIntro
        label="Wenn du die Forschung dahinter sehen willst …"
        hint="Optional. Vier Studien, die das Muster erklären — du musst sie nicht lesen, um zu heilen."
      >
        <SectionBlock
          kind="deep-dive"
          eyebrow="Deep Dive · Wissenschaft der kognitiven Neubewertung"
          title="Die Forschung hinter den Übungen"
        >
          <Accordion
            type="single"
            collapsible
            className="divide-y divide-[color:var(--color-sage)]/20 rounded-xl border border-[color:var(--color-sage)]/25 bg-white/55"
          >
            <AccordionItem value="langeslag" className="border-0 px-4">
              <AccordionTrigger className="py-3 text-left text-sm font-semibold text-graphite hover:no-underline">
                <span>
                  <span className="mr-2 text-[color:var(--color-sage)]">
                    01 ·
                  </span>
                  Langeslag &amp; Sanchez (2018) — Reappraisal schlägt
                  Verdrängen
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-sm leading-relaxed text-graphite/85">
                In kontrollierten fMRT-Studien reduzierte Negative Reappraisal
                die Intensität romantischer Gefühle signifikant stärker als
                die Strategien „an etwas anderes denken" oder „die Situation
                akzeptieren". Wichtig: Der Effekt wird mit Übung stärker. Die
                ersten Male fühlt sich Negative Reappraisal künstlich an. Das
                ist normal.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="festinger" className="border-0 px-4">
              <AccordionTrigger className="py-3 text-left text-sm font-semibold text-graphite hover:no-underline">
                <span>
                  <span className="mr-2 text-[color:var(--color-sage)]">
                    02 ·
                  </span>
                  Festinger (1957) — Warum wir am idealisierten Bild
                  festhalten
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-sm leading-relaxed text-graphite/85">
                Die Theorie der kognitiven Dissonanz erklärt, warum wir so
                verzweifelt an idealisierten Bildern festhalten – das
                Eingestehen der Realität würde bedeuten, dass unsere
                Urteilsfähigkeit versagt hat. Das Ego verteidigt die
                Investition in die Idealisierung.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="fisher" className="border-0 px-4">
              <AccordionTrigger className="py-3 text-left text-sm font-semibold text-graphite hover:no-underline">
                <span>
                  <span className="mr-2 text-[color:var(--color-sage)]">
                    03 ·
                  </span>
                  Fisher et al. (2010) — Liebeskummer = Drogenentzug im fMRT
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-sm leading-relaxed text-graphite/85">
                Hirnscans zeigten aktivierte Dopamin-Sucht-Areale bei
                romantischer Ablehnung – identisch mit Kokainkonsumenten.
                Gleichzeitig erhöhte Aktivität im anterioren cingulären
                Kortex (physischer Schmerz). Romantischer Trennungsschmerz
                ist real – er aktiviert dieselben Schmerzregionen wie
                physischer Schmerz.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="ristock" className="border-0 px-4">
              <AccordionTrigger className="py-3 text-left text-sm font-semibold text-graphite hover:no-underline">
                <span>
                  <span className="mr-2 text-[color:var(--color-sage)]">
                    04 ·
                  </span>
                  Ristock (2002) — Warum WLW besonders stark zweifeln
                </span>
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-sm leading-relaxed text-graphite/85">
                Frauen in lesbischen Beziehungen zweifeln besonders häufig an
                ihrer eigenen Wahrnehmung – weil gesellschaftliche Narrative
                Frauen nicht als Täterinnen konzipieren. Das macht das
                Gaslighting-Log für WLW-Beziehungen besonders wichtig: Die
                Fakten aufzuschreiben ist ein Akt des Widerstands gegen die
                Unsichtbarkeit dieser Erfahrungen.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </SectionBlock>
      </DeepDiveIntro>

      {/* ════════════════ UNTERKAPITEL 3.5 · GASLIGHTING-NOTBREMSE ════════════════ */}
      <SectionBlock
        kind="story"
        eyebrow="Story · Mary · Die Erklärungsschleife"
        title="„Das habe ich nie gesagt.“"
      >
        <div className="[&>p+p]:mt-4 [&>p]:mb-0">
          <Reveal>
            <p>
              Es ist kurz nach 22 Uhr. Mary und Sandra sitzen am Küchentisch,
              und Mary wiederholt zum dritten Mal, was Sandra noch am Vortag
              gesagt hatte – Wort für Wort. Sie ist sicher. Sie hat es gehört.
              Sie hat es gespürt.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p>
              Sandras Reaktion: ruhig, fast mitleidig.{" "}
              <em>„Das habe ich nie gesagt. Du bist paranoid. Ich mache mir
              wirklich Sorgen um dich."</em> Mary öffnet den Mund, will
              erklären, beweisen – aber mitten im Satz merkt sie:{" "}
              <strong>Je mehr sie erklärt, desto sicherer wirkt Sandra.</strong>{" "}
              Je verzweifelter Mary wird, desto glaubwürdiger Sandras Diagnose:
              instabil.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p>
              Später schreibt Mary in ihr Notizbuch:{" "}
              <em>22:14 Uhr. S. sagte gestern: „Du bist zu empfindlich für
              eine Beziehung." Heute: „Das habe ich nie gesagt." Ich zweifle
              an mir selbst – und genau das ist der Plan.</em> Allein das
              Aufschreiben gibt ihr ihren Boden zurück.
            </p>
          </Reveal>
        </div>
      </SectionBlock>

      <SectionBlock
        kind="diagnose"
        eyebrow="Diagnose · Die Erklärungsschleife"
        title="Warum Beweisen das Gaslighting verstärkt"
      >
        <TextCollapse preview={1} threshold={2}>
          <p>
            Gaslighting funktioniert nicht <em>trotz</em> deiner Versuche, dich
            zu erklären – es funktioniert <strong>durch sie</strong>. Jedes
            Mal, wenn du versuchst, deine Wahrnehmung zu beweisen, sendest du
            unbewusst das Signal: <em>Meine Realität steht zur
            Disposition.</em>
          </p>
          <p>
            Psychologin Robin Stern (2007) beschreibt den
            „Gaslighting-Tanz": Die Gaslighterin braucht nicht die Wahrheit –
            sie braucht deine Zustimmung zu ihrer Version. Je mehr du dich
            rechtfertigst, desto mehr Energie fließt in ein System, das darauf
            ausgelegt ist, dich zu erschöpfen und zu verwirren.
          </p>
          <p>
            Der neurologische Effekt: Chronisches Gaslighting aktiviert den
            anterioren cingulären Kortex (zuständig für Konfliktverarbeitung)
            im Dauerbetrieb. Das Nervensystem kann nicht mehr zwischen echter
            Bedrohung und normaler Meinungsverschiedenheit unterscheiden – du
            bist permanent in Alarmbereitschaft.
          </p>
        </TextCollapse>
      </SectionBlock>

      <SectionBlock
        kind="loesung"
        eyebrow="Lösung · Die 3-Schritt-Notbremse"
        title="Wenn ein Gaslighting-Moment passiert"
      >
        <p>
          Stoppe die Erklärungsschleife sofort – mit drei klaren, inneren
          Schritten.
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          {NOTBREMSE.map((s, i) => (
            <div
              key={s.title}
              className="rounded-2xl bg-white/75 p-4 shadow-glass ring-1 ring-[color:var(--color-terracotta)]/20"
            >
              <div className="mb-2 grid h-8 w-8 place-items-center rounded-full bg-[color:var(--color-terracotta)]/12 text-sm font-bold text-[color:var(--color-terracotta)]">
                {i + 1}
              </div>
              <p className="font-display text-sm font-bold text-bordeaux">
                {s.title}
              </p>
              <p className="mt-1 text-xs leading-relaxed text-graphite/85">
                {s.body}
              </p>
            </div>
          ))}
        </div>
      </SectionBlock>

      <SectionBlock
        kind="uebung"
        eyebrow="Übung · Wahrnehmungs-Anker · Tägliches Realitätsprotokoll"
        title="Dein Gedächtnis, schriftlich gesichert"
      >
        <p>
          Dein Gedächtnis ist dein wichtigstes Werkzeug gegen Gaslighting –
          aber nur, wenn du es schriftlich sicherst. Wenn es sich für dich
          sicher anfühlt, kannst du versuchen, dieses Protokoll drei Wochen
          lang täglich zu führen.
        </p>
        <Reflection3Step
          slug={SLUG}
          title="Wahrnehmungs-Anker"
          subtitle="3 Felder. Wird automatisch gespeichert."
          meta="3 Felder · ca. 5 Min/Tag"
          accent="terracotta"
          steps={[
            {
              key: "anker_ereignisse",
              label:
                "Die 3 wichtigsten Ereignisse heute (Uhrzeit, konkrete Worte, Fakten)",
              placeholder:
                "z.B. 14:20 — Sie sagte: „…“. 19:45 — sie behauptete später, das nie gesagt zu haben.",
              rows: 5,
            },
            {
              key: "anker_widerspruch",
              label:
                "Wenn Nachrichten von ihr Dinge anders darstellen: Was sagen meine Notizen?",
              placeholder:
                "Vergleiche die aktuelle Behauptung mit deinem Protokoll von gestern/letzter Woche.",
              rows: 4,
            },
            {
              key: "anker_satz",
              label: "Mein Stopp-Satz heute",
              placeholder:
                "„Ich brauche ihre Zustimmung nicht, um meine Realität zu kennen.“",
              rows: 2,
            },
          ]}
        />
        <CalloutBold kind="quote" title="Wichtig">
          <p>
            Chronisches Gaslighting kann tiefe Zweifel an der eigenen
            Wahrnehmung hinterlassen. Wenn du regelmäßig nicht weißt, was real
            ist und was nicht, ist das kein Charakterfehler – das ist ein
            Trauma-Symptom. Bei anhaltender Realitätsunsicherheit:
            professionelle Unterstützung ist kein Zeichen von Schwäche,
            sondern ein Akt der Selbstfürsorge.
          </p>
          <p className="flex items-start gap-2 font-semibold text-bordeaux">
            <Phone className="mt-[2px] h-4 w-4 shrink-0" strokeWidth={1.75} />
            Telefonseelsorge: 0800 111 0 111 (kostenlos, 24/7).
          </p>
        </CalloutBold>
      </SectionBlock>

      {/* ════════════════ UNTERKAPITEL 3.6 · DOPPELSTANDARD ════════════════ */}
      <SectionBlock
        kind="story"
        eyebrow="Story · Mary · Der Vergleich, der brennt"
        title="Das Urlaubsfoto"
      >
        <div className="[&>p+p]:mt-4 [&>p]:mb-0">
          <Reveal>
            <p>
              Mary scrollt durch Instagram – eigentlich nur, um eine Geschichte
              einer Freundin anzusehen. Dann trifft es sie wie ein Schlag:
              Sandra, in der Toskana. Mit ihr. Sonnenuntergang, Wein, lachend.
              Das gleiche Lächeln, das sie Mary immer dann zeigte, wenn sie
              etwas wollte.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p>
              Mary erinnert sich, wie oft sie gefragt hatte:{" "}
              <em>„Können wir mal verreisen?"</em> Sandras Antwort war immer
              dieselbe: <em>„Ich bin nicht der Urlaubs-Typ. Das ist einfach
              nichts für mich."</em> Fünf Jahre lang. Und jetzt ist sie es
              offenbar doch.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p>
              Der Schmerz ist real. Aber Mary öffnet ihr Workbook und schreibt
              drei Spalten auf. Nach zehn Minuten liest sie Spalte C laut vor.
              Und dann nochmal. Und nochmal.
            </p>
          </Reveal>
        </div>
      </SectionBlock>

      <SectionBlock
        kind="diagnose"
        eyebrow="Diagnose · Doppelstandard als Kontrollmuster"
        title="Du warst nicht das Problem. Du warst Target."
      >
        <TextCollapse preview={1} threshold={2}>
          <p>
            Der Doppelstandard – wenn die Expartnerin mit jemand anderem
            scheinbar mühelos tut, was sie dir jahrelang verweigerte – ist
            eines der verletzlichsten Nachtrennungs-Phänomene. Er nährt den
            Gedanken: <em>„Es lag an mir. Mit mir war sie nicht bereit. Mit
            ihr schon."</em>
          </p>
          <p>
            Was diese Interpretation übersieht: Widerstand gegen Intimität
            ist kein situativer Mangel – er ist ein <strong>Muster der
            Täterinnen-Persönlichkeit</strong>. Die neue Partnerin erlebt
            zunächst die Idealisierungsphase. Sie wird mit der Zeit dieselbe
            Erfahrung machen. Du warst nicht das Problem. Du warst Target.
          </p>
          <p>
            <strong>Forschung (Durvasula, 2019):</strong> Narzisstische
            Täterinnen zeigen in neuen Beziehungen initial verstärkte
            Love-Bombing-Verhaltensweisen, um die neue Partnerin zu binden.
            Der Zyklus beginnt von vorn – mit einer anderen Person.
          </p>
        </TextCollapse>
      </SectionBlock>

      <SectionBlock
        kind="uebung"
        eyebrow="Übung · Die 3-Spalten-Wahrheit"
        title="Verwandle Doppelstandard-Schmerz in Klarheit"
      >
        <p>
          Wenn es sich für dich sicher anfühlt, kannst du diese Übung nutzen,
          um den Doppelstandard-Schmerz in Klarheit zu verwandeln. Fülle alle
          drei Spalten aus – und lies Spalte C so oft laut vor, bis du
          beginnst, es zu glauben.
        </p>
        <Reflection3Step
          slug={SLUG}
          title="Die 3-Spalten-Wahrheit"
          subtitle="Spalte A · Spalte B · Spalte C. Wird automatisch gespeichert."
          meta="3 Spalten · ca. 10 Min"
          accent="mauve"
          steps={[
            {
              key: "ds_a",
              label: "Spalte A: Was hat sie mir verweigert?",
              placeholder:
                "z.B. Reisen, Vorstellung bei Freundinnen, gemeinsame Zukunftsplanung…",
              rows: 4,
            },
            {
              key: "ds_b",
              label: "Spalte B: Was macht sie jetzt mit der Neuen?",
              placeholder: "z.B. Toskana-Urlaub, öffentliche Posts, Pläne…",
              rows: 4,
            },
            {
              key: "ds_c",
              label: "Spalte C: Die Wahrheit (kopiere und lies laut)",
              placeholder:
                "Es lag nie an mir. Sie hat eine neue Bühne gefunden. Der Zyklus beginnt für die Neue gerade erst.",
              rows: 5,
            },
          ]}
        />
        <p className="text-[11px] italic leading-snug text-graphite/60">
          Der Schmerz beim Lesen von Spalte C ist normal. Er bedeutet, dass
          etwas Altes loslässt.
        </p>
      </SectionBlock>

      {/* ════════════════ UNTERKAPITEL 3.7 · RADICAL ACCEPTANCE ════════════════ */}
      <SectionBlock
        kind="story"
        eyebrow="Story · Mary · Loslassen beginnt innen"
        title="Der Brief, den Sandra nie schreiben wird"
      >
        <div className="[&>p+p]:mt-4 [&>p]:mb-0">
          <Reveal>
            <p>
              Mary wartet. Nicht aktiv – aber das Warten ist da. Irgendwo im
              Hintergrund des Lebens sitzt diese stille Hoffnung:{" "}
              <em>Vielleicht sieht sie es irgendwann. Vielleicht kommt sie,
              wenn sie bereit ist. Vielleicht, wenn die neue Beziehung
              scheitert. Vielleicht wenn Mary stark genug ist, um nicht mehr
              zu brauchen. Vielleicht.</em>
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p>
              Marys Therapeutin fragt ruhig:{" "}
              <em>„Was würdest du verlieren, wenn du aufhörst zu warten?"</em>{" "}
              Mary antwortet nicht sofort. Dann:{" "}
              <em>„Die Möglichkeit, dass sie sich ändert."</em> Und die
              Therapeutin: <em>„Und was gewinnst du, wenn du das loslässt?"</em>{" "}
              Stille. Eine lange Stille. Dann: <em>„Mein eigenes Leben."</em>
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p>
              Radical Acceptance ist keine Kapitulation. Es ist die
              Erkenntnis, dass das Warten auf Veränderung eine Form der
              Selbstbestrafung ist – und dass Loslassen kein Lieblosigkeit
              bedeutet, sondern Selbstliebe.
            </p>
          </Reveal>
        </div>
      </SectionBlock>

      <SectionBlock
        kind="diagnose"
        eyebrow="Psychoedukation · Radical Acceptance"
        title="Was Radical Acceptance bedeutet – und was nicht"
      >
        <p>
          Radical Acceptance ist ein Kernkonzept der Dialektisch-Behavioralen
          Therapie (DBT nach Linehan, 1993) und wurde von Ramani Durvasula
          auf narzisstische Beziehungsdynamiken angewendet. Es bedeutet:{" "}
          <strong>Die Realität vollständig anzunehmen, ohne sie zu
          gutzuheißen.</strong>
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl bg-white/70 p-4 shadow-glass ring-1 ring-[color:var(--color-bordeaux)]/15">
            <p className="mb-2 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-bordeaux">
              Akzeptanz bedeutet NICHT
            </p>
            <ul className="space-y-1.5 text-xs leading-relaxed text-graphite/85">
              <li>· Zustimmung zum Verhalten</li>
              <li>· Vergeben ohne Veränderung</li>
              <li>· Schwäche oder Aufgabe</li>
              <li>· Dass das Erlebte okay war</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white/70 p-4 shadow-glass ring-1 ring-[color:var(--color-sage)]/20">
            <p className="mb-2 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-sage)]">
              Akzeptanz bedeutet
            </p>
            <ul className="space-y-1.5 text-xs leading-relaxed text-graphite/85">
              <li>· Die Realität sehen ohne Filter</li>
              <li>· Energie zurückholen vom Warten</li>
              <li>· Im Jetzt leben können</li>
              <li>· Die eigene Heilung priorisieren</li>
            </ul>
          </div>
        </div>
        <CalloutBold
          kind="quote"
          title="Durvasula (2019)"
          source="Ramani Durvasula"
        >
          <p className="italic">
            „Das Warten auf Einsicht oder Reue einer narzisstischen
            Persönlichkeit bindet deine emotionalen Ressourcen auf unbestimmte
            Zeit. Akzeptanz ist nicht das Ende der Hoffnung – es ist der
            Anfang deiner Freiheit."
          </p>
        </CalloutBold>
      </SectionBlock>

      <SectionBlock
        kind="uebung"
        eyebrow="Übung · Acceptance-Protokoll (21 Tage)"
        title="21 Tage. Wiederholung schafft neue Pfade."
      >
        <p>
          Wenn es sich für dich sicher anfühlt, kannst du mit diesem Protokoll
          beginnen. 21 Tage lang. Jeden Tag. Nicht weil es beim ersten Mal
          klappt – sondern weil Wiederholung neue neuronale Pfade schafft.
        </p>
        <Reflection3Step
          slug={SLUG}
          title="Acceptance-Protokoll"
          subtitle="3 Felder. Wird automatisch gespeichert."
          meta="21 Tage · 3 Min/Tag"
          accent="mauve"
          steps={[
            {
              key: "accept_satz",
              label: "Schreibe heute (am besten morgens)",
              placeholder:
                "„Ich akzeptiere, dass sie nicht die Person ist, die ich geliebt zu haben glaubte.“",
              rows: 3,
            },
            {
              key: "accept_widerstand",
              label:
                "Antworte auf jeden Widerstand mit: „Ja – und das ändert das Gesamtmuster nicht.“",
              placeholder:
                "Notiere die Widerstände, die heute auftauchten – und deine Antwort darauf.",
              rows: 4,
            },
            {
              key: "accept_tag",
              label: "Tag (1–21): Wie lange bist du schon dabei?",
              placeholder: "z.B. Tag 7",
              rows: 1,
            },
          ]}
        />
        <p className="text-[11px] italic leading-snug text-graphite/60">
          Es ist normal, wenn sich der Satz an Tag 1 falsch anfühlt. Er soll
          sich mit der Zeit wahrer anfühlen – nicht durch Überzeugung, sondern
          durch Wiederholung.
        </p>
        <CalloutBold kind="quote" title="Wichtig">
          <p>
            Radical Acceptance bedeutet nicht, den Schmerz wegzumachen. Der
            Schmerz ist berechtigt. Er darf da sein. Wenn du dich in einer
            akuten Krise befindest oder Suizidgedanken auftauchen: Bitte
            wende dich sofort an die Telefonseelsorge.
          </p>
          <p className="flex items-start gap-2 font-semibold text-bordeaux">
            <Phone className="mt-[2px] h-4 w-4 shrink-0" strokeWidth={1.75} />
            0800 111 0 111 (kostenlos, 24/7) oder 0800 111 0 222.
          </p>
        </CalloutBold>
      </SectionBlock>

      {/* ── Begleit-Meditation ── */}
      <MeditationCard
        title="Gedankenkarussell stoppen – Einschlaf-Hypnose &amp; Meditation"
        duration="ChakraTunes"
        source="Raphael Kempermann"
        youtubeId="UnjielNyg08"
      />

      {/* ════════════════ 6 · CHECKLISTE ════════════════ */}
      <SectionBlock kind="checkliste" bare>
        <ChecklistGoals
          slug={SLUG}
          goals={[
            {
              id: "g1",
              text: "Ich verstehe, was kognitive Dissonanz ist – und wie sie mich geschützt hat, auf Kosten der Wahrheit.",
            },
            {
              id: "g2",
              text: "Ich habe mindestens drei Gaslighting-Momente dokumentiert und die Fakten von meiner Interpretation getrennt.",
            },
            {
              id: "g3",
              text: "Ich habe mit der 21-Tage-Challenge begonnen und mindestens 3 Tage eingetragen.",
            },
            {
              id: "g4",
              text: "Ich erkenne: Idealisierung war kein Versagen – es war ein Überlebensmechanismus. Jetzt brauche ich ihn nicht mehr.",
            },
            {
              id: "g5",
              text: "Ich kann zwischen Hoffnung und Fakten unterscheiden – meine Realität ist real.",
            },
          ]}
        />
      </SectionBlock>
    </article>
  );
}

// ─────────────────────── Daten ───────────────────────

const GASLIGHTING_BEISPIELE = [
  {
    id: "tattoo",
    titel: "Das Partnertattoo",
    situation:
      'Wir hatten uns ein tiefes Partnertattoo stechen lassen – „Go" und „Stop". Nur 2 Monate später ließ Sandra ihr Tattoo einfach überstechen. Als ich in Tränen ausbrach, sagte sie genervt: „Es passt halt nicht mehr zu mir. Du reagierst total über."',
    gefuehl:
      "Ich dachte, ich sei zu klammernd. Ich redete mir ein, dass es ja nur ein Tattoo sei.",
    fakten:
      "Ein gemeinsames Tattoo ist ein massives Symbol für Bindung. Es nach 2 Monaten heimlich überstechen zu lassen, ist ein radikaler, verletzender Akt der Zurückweisung. Mein Schmerz war absolut angemessen.",
  },
  {
    id: "geburtstag",
    titel: "Der Geburtstag",
    situation:
      'Sandra hatte mir wochenlang versprochen, an meinem Geburtstag etwas Besonderes zu machen. Drei Tage vorher sagte sie mit einer fadenscheinigen Ausrede ab. Als ich enttäuscht war, wurde sie wütend: „Du bist so bedürftig. Deine Erwartungen erdrücken mich!"',
    gefuehl:
      "Ich dachte, meine Bedürfnisse nach Nähe und Zuverlässigkeit seien falsch.",
    fakten:
      "Es ist in jeder gesunden Beziehung der absolute Standard, Versprechen zu halten. Meine Enttäuschung war die einzig normale Reaktion.",
  },
  {
    id: "blockade",
    titel: "Die Blockade",
    situation:
      "Nach einem harmonischen Vormittag rief ich am nächsten Tag an. Sandra blockte mich sofort genervt ab. Als ich fassungslos fragte, was das soll, sagte sie ich solle sie auch mal in Ruhe lassen. Sie legte auf und blockierte mich überall.",
    gefuehl:
      "Ich dachte, ich hätte etwas falsch gemacht. Ich suchte stundenlang nach meinem Fehler.",
    fakten:
      "Einen Menschen nach einem harmonischen Moment ohne Erklärung zu blockieren, ist keine normale Reaktion. Es ist ein Kontrollmechanismus.",
  },
];

const BOTENSTOFFE: {
  id: string;
  name: string;
  kicker: string;
  icon: LucideIcon;
  teaser: string;
  desc: string;
}[] = [
  {
    id: "dopamin",
    name: "Dopamin",
    kicker: "Verlangen",
    icon: Zap,
    teaser: "Das Verlangen-Molekül.",
    desc: "Wird nicht durch Genuss ausgeschüttet, sondern durch die Erwartung von Belohnung. Macht das Warten unerträglich – und das Warten selbst zur Sucht.",
  },
  {
    id: "oxytocin",
    name: "Oxytocin",
    kicker: "Bindung",
    icon: HeartHandshake,
    teaser: "Das Bindungshormon.",
    desc: "Wird durch Berührung und Nähe ausgeschüttet. Erzeugt tiefes Vertrauen – auch zu Personen, die uns schaden. Macht Trennung körperlich schmerzhaft.",
  },
  {
    id: "cortisol",
    name: "Cortisol",
    kicker: "Stress",
    icon: Flame,
    teaser: "Das Stresshormon.",
    desc: 'In Phasen des Rückzugs dauerhaft erhöht. Hält das Nervensystem in Alarmbereitschaft und verstärkt das Verlangen nach der einzigen bekannten „Lösung": ihr.',
  },
];

const PHASEN: {
  id: string;
  label: string;
  icon: LucideIcon;
  desc: string;
}[] = [
  {
    id: "idealisierung",
    label: "Idealisierung",
    icon: Heart,
    desc: "Intensive Zuwendung, Komplimente, Nähe. Dopamin und Oxytocin fluten das System.",
  },
  {
    id: "abwertung",
    label: "Abwertung",
    icon: CloudRain,
    desc: "Plötzlicher Rückzug, Kritik, Ghosting. Cortisol steigt. Du suchst den Fehler bei dir.",
  },
  {
    id: "discard",
    label: "Discard",
    icon: Scissors,
    desc: "Kognitive Dissonanz. Du zweifelst an dir. Du romanisierst die guten Phasen.",
  },
  {
    id: "hoovering",
    label: "Hoovering",
    icon: Anchor,
    desc: "Sie kommt zurück. Ein Satz, ein Emoji. Der Dopamin-Hit ist überwältigend.",
  },
];

const NOTBREMSE = [
  {
    title: "NICHT erklären.",
    body: "Stoppe den Impuls, dich zu rechtfertigen. Du brauchst ihre Zustimmung nicht, um deine Realität zu kennen. Sage innerlich: „Ich muss das nicht beweisen.“",
  },
  {
    title: "Notieren.",
    body: "Schreibe so bald wie möglich auf: Datum, Uhrzeit, die genauen Worte – so wie du sie gehört hast. Dein Notizbuch ist dein Anker in der Realität.",
  },
  {
    title: "Innerer Stopp-Satz.",
    body: "Sage dir: „Ich brauche ihre Zustimmung nicht, um meine Realität zu kennen.“ Dieser Satz ist kein Angriff – er ist ein Selbstschutz.",
  },
];

const TAKTIKEN: {
  id: string;
  name: string;
  kicker: string;
  icon: LucideIcon;
  teaser: string;
  desc: string;
}[] = [
  {
    id: "gaslighting",
    name: "Gaslighting",
    kicker: "T01",
    icon: Drama,
    teaser: "„Du verdrehst alles.“",
    desc: '„Du verdrehst alles.“ „Du bist zu empfindlich.“ Deine Realität wird zur Erfindung erklärt.',
  },
  {
    id: "darvo",
    name: "DARVO",
    kicker: "T02",
    icon: RefreshCw,
    teaser: "Täterin wird Opfer.",
    desc: "Täter*in wird Opfer. Deine Reaktion auf Schmerz wird als Angriff umgedeutet.",
  },
  {
    id: "pity",
    name: "Pity Play",
    kicker: "T03",
    icon: Droplet,
    teaser: "„Ich leide so sehr.“",
    desc: '„Ich leide so sehr.“ Mitleid als Zugangscode zu deinen Grenzen.',
  },
  {
    id: "frieden",
    name: "Friedens-Falle",
    kicker: "T04",
    icon: Bird,
    teaser: "„Lass uns im Frieden sein.“",
    desc: '„Lass uns im Frieden sein.“ Frieden als Tarnung für: Schweig und vergib ohne Konsequenz.',
  },
  {
    id: "aequivalenz",
    name: "Falsche Äquivalenz",
    kicker: "T05",
    icon: Scale,
    teaser: "„Wir waren beide schuld.“",
    desc: '„Wir waren beide schuld.“ Gewalt und Reaktion darauf werden gleichgesetzt.',
  },
];
