import {
  Anchor,
  Bird,
  CloudRain,
  Drama,
  Droplet,
  Flame,
  Heart,
  HeartCrack,
  HeartHandshake,
  NotebookPen,
  Orbit,
  Phone,
  RefreshCw,
  Scale,
  ScanSearch,
  Scissors,
  ShieldAlert,
  TriangleAlert,
  type LucideIcon,
  Zap,
} from "lucide-react";
import { GlossarTerm } from "@/components/glossar-term";
import { ChapterIntro } from "@/components/chapter-intro";
import { SectionBlock } from "@/components/section-block";
import { Reveal } from "@/components/reveal";
import { DeepDiveIntro } from "@/components/deep-dive-intro";
import { ChecklistGoals } from "@/components/checklist-goals";
import { InfographicHotspots } from "@/components/infographic-hotspots";
import { InfoGraphicBlock } from "@/components/infographic-block";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  StackedCards,
  Reflection3Step,
  PillCloud,
  CalloutBold,
  FlipCard,
  TwentyOneDayChallenge,
  HooverDecoder,
  MeditationCard,
  TimelineSorter,
  ToxicometerScale,
} from "@/components/exercise";
import gaslightingGraphic from "@/assets/infographics/gaslighting-erkennen.png";
import traumaBondingGraphic from "@/assets/infographics/trauma-bonding-sucht-loop.png";

const SLUG = "modul-02";

export function Modul02() {
  return (
    <article className="space-y-7">
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
          Was du vermisst, ist nicht die Wahrheit — es ist die Illusion, die dein Gehirn
          zum Überleben gebaut hat. Heilung beginnt in dem Moment, in dem du aufhörst,
          Hoffnung mit Realität zu verwechseln.
        </p>
        <p>
          In diesem Schritt arbeitest du mit konkreten Werkzeugen wie dem Gaslighting-Log,
          der Wolf-im-Schafspelz-Übung und der negativen Neubewertung, um die systematischen
          Manipulationsmuster zu dokumentieren, Hoovering-Versuche zu entlarven und die
          romantische Illusion durch schriftlich festgehaltene Fakten dauerhaft zu zertrümmern.
        </p>
      </ChapterIntro>

      <SectionBlock
        kind="story"
        eyebrow="Story · Das Gaslighting-Log"
        title="Wenn die Schuppen von den Augen fallen"
        className="story-box--pulse"
      >
        <div className="[&>p+p]:mt-4 [&>p]:mb-0">
          <Reveal>
            <p className="font-display text-base font-semibold text-cream">Der Hoovering-Brief</p>
          </Reveal>
          <Reveal delay={120}>
            <p>
              Sechs Monate nach dem Ghosting vibriert Marys Handy. Eine Nachricht von Sandra
              auf einer Plattform, auf der sie angeblich nie aktiv sein wollte. Es ist ein
              klassischer <GlossarTerm termKey="hoovering">„Hoovering“</GlossarTerm>-Versuch:
            </p>
          </Reveal>
          <Reveal delay={240}>
            <blockquote className="border-l-2 border-cream/40 pl-4 italic text-cream/90">
              „Unser Treffen war sehr belastend, weil du dich direkt in die Opferrolle begeben
              hast. Ich war immer für dich da. Lass uns doch wenigstens im Frieden sein. Schade,
              dass du die Dinge so verdrehst.“
            </blockquote>
          </Reveal>
          <Reveal delay={360}>
            <p>
              Sofort schnürt sich Marys Hals zu. <em>Hat Sandra recht? War ich das Problem?</em>
              Bevor die Selbstzweifel sie verschlingen, schlägt Mary ihr Workbook auf und nutzt
              die „Wolf im Schafspelz“-Übung (Realitäts-Check). Sie zieht einen Strich in die
              Mitte der Seite:
            </p>
          </Reveal>

          <div className="mt-4 grid gap-2.5 sm:grid-cols-2">
            <div className="rounded-xl bg-white/10 p-3.5 text-xs leading-relaxed text-cream/90 ring-1 ring-cream/15">
              <p className="mb-1 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-cream/70">
                Was Sandra schreibt · Die Maske
              </p>
              <p>
                „Ich war immer für dich da, ich reiche dir die Hand zum Frieden. Ich bin das
                Opfer.“
              </p>
            </div>
            <div className="rounded-xl bg-white/10 p-3.5 text-xs leading-relaxed text-cream/90 ring-1 ring-cream/15">
              <p className="mb-1 text-[10.5px] font-semibold uppercase tracking-[0.16em] text-cream/70">
                Was Sandra TAT · Die Fakten
              </p>
              <p>
                Sie hat Mary nach den intimsten Momenten tagelang geghostet. Sie hat Behörden
                instrumentalisiert, um sie einzuschüchtern. Sie hat Mary stillschweigend ersetzt,
                während sie ihr Liebe schwor.
              </p>
            </div>
          </div>

          <Reveal delay={120}>
            <p className="mt-4">
              Mary atmet tief aus. Die Fakten sind glasklar. Das Geschriebene brennt sich in ihr
              Bewusstsein. Ohne noch einen einzigen Moment zu zögern, drückt Mary auf
              <strong> „Blockieren“</strong>. Die jahrzehntealte rosa Brille splittert krachend.
              Die Illusion ist endlich gebrochen.
            </p>
          </Reveal>
        </div>
      </SectionBlock>

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
                    <span className="font-semibold text-cream/95">Die Situation:</span> {e.situation}
                  </p>
                  <p>
                    <span className="font-semibold text-cream/95">Was ich gefühlt habe:</span>{" "}
                    {e.gefuehl}
                  </p>
                  <p className="rounded-md bg-cream/10 p-2 ring-1 ring-cream/15">
                    <span className="font-semibold text-cream">Was die Fakten sagen:</span>{" "}
                    {e.fakten}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <p className="mt-4 text-[11px] italic leading-snug text-cream/65">
          Abb.: Gaslighting erkennen und entmachten – Gaslighting zerstört durch systematisches
          Leugnen der Realität den inneren Sicherheits-Anker. Die Gegenstrategie: konsequente
          Fakten-Dokumentation. Daten lügen nicht, Hoffnung schon.
        </p>
        <TimelineSorter
          slug={SLUG}
          storageKey="timeline_sorter"
          title="Mini-Tool · Sortiere den Manipulationsverlauf"
          subtitle="Ordne typische Gaslighting-Sätze vom Einstieg bis zum Rückholversuch."
          meta="Drag & Drop · 2 Min"
          accent="mauve"
          items={TIMELINE_ITEMS}
          correctOrder={TIMELINE_ORDER}
        />
      </SectionBlock>

      <SectionBlock
        kind="diagnose"
        eyebrow="Diagnose · Kognitive Dissonanz & Spielautomat-Effekt"
        title="Was in deinem Kopf passiert"
      >
        <Tabs defaultValue="festinger" className="w-full">
          <TabsList className="grid h-auto w-full grid-cols-2 gap-1 rounded-2xl bg-white/70 p-1 sm:grid-cols-4">
            {DIAGNOSE_TABS.map((tab) => (
              <TabsTrigger
                key={tab.id}
                value={tab.id}
                className="rounded-xl px-3 py-2 text-xs font-semibold text-graphite/75 data-[state=active]:text-bordeaux"
              >
                {tab.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {DIAGNOSE_TABS.map((tab) => {
            const Icon = tab.icon;
            return (
              <TabsContent key={tab.id} value={tab.id} className="mt-3">
                <div className="rounded-2xl bg-white/72 p-4 shadow-glass ring-1 ring-[color:var(--color-sage)]/18">
                  <div className="flex items-start gap-3">
                    <div className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-[color:var(--color-sage)]/12">
                      <Icon className="h-4 w-4 text-[color:var(--color-sage)]" strokeWidth={1.8} />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10.5px] font-semibold uppercase tracking-[0.16em] text-[color:var(--color-sage)]">
                        {tab.kicker}
                      </p>
                      <h4 className="mt-1 font-display text-lg font-semibold text-bordeaux">
                        {tab.title}
                      </h4>
                      <p className="mt-2 text-sm leading-relaxed text-graphite/82">{tab.body}</p>
                      <div className="mt-3 rounded-xl bg-[color:var(--color-sage)]/8 p-3 text-xs leading-relaxed text-graphite/78 ring-1 ring-[color:var(--color-sage)]/12">
                        {tab.highlight}
                      </div>
                    </div>
                  </div>
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </SectionBlock>

      <InfographicHotspots
        src={traumaBondingGraphic}
        alt="Infografik zum Trauma-Bonding als neurobiologischer Sucht-Loop"
        title="Infografik · Trauma-Bonding als Sucht-Loop"
        caption="Trauma-Bonding entsteht durch unvorhersehbare Wechsel zwischen Schmerz und Erleichterung: Genau diese intermittierende Verstärkung bindet stärker als verlässliche Liebe. Die Grafik zeigt, warum Cortisol-Stress und Dopamin-Erleichterung zusammen einen Suchtkreislauf erzeugen – und weshalb konsequenter Reizentzug durch No Contact für Heilung so wichtig ist."
        hotspots={TRAUMA_HOTSPOTS}
      />

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
          Skinner (1938): Operante Konditionierung · Fisher et al. (2005, 2010): fMRT-Studien
          romantische Ablehnung · Berridge &amp; Robinson (1998): Wanting vs. Liking
        </p>
      </SectionBlock>

      <SectionBlock
        kind="diagnose"
        eyebrow="Der 4-Phasen-Zyklus der toxischen Bindung"
        title="Wie sich die Schleife immer wieder schließt"
      >
        <Tabs defaultValue="idealisierung" className="w-full">
          <TabsList className="grid h-auto w-full grid-cols-2 gap-1 rounded-2xl bg-white/70 p-1 md:grid-cols-4">
            {PHASEN.map((phase) => (
              <TabsTrigger
                key={phase.id}
                value={phase.id}
                className="rounded-xl px-3 py-2 text-xs font-semibold text-graphite/75 data-[state=active]:text-bordeaux"
              >
                {phase.label}
              </TabsTrigger>
            ))}
          </TabsList>
          {PHASEN.map((phase) => {
            const Icon = phase.icon;
            return (
              <TabsContent key={phase.id} value={phase.id}>
                <div className="rounded-2xl bg-white/76 p-4 shadow-glass ring-1 ring-[color:var(--color-sage)]/18">
                  <div className="flex flex-col gap-3 sm:flex-row sm:items-start">
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-[color:var(--color-sage)]/12">
                      <Icon className="h-5 w-5 text-[color:var(--color-sage)]" strokeWidth={1.75} />
                    </div>
                    <div className="min-w-0">
                      <h4 className="font-display text-lg font-semibold text-bordeaux">{phase.label}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-graphite/82">{phase.desc}</p>
                      <blockquote className="mt-3 rounded-xl border-l-2 border-[color:var(--color-sage)]/45 bg-[color:var(--color-sage)]/8 px-3 py-2 text-sm italic text-graphite/76">
                        {phase.quote}
                      </blockquote>
                    </div>
                  </div>
                </div>
              </TabsContent>
            );
          })}
        </Tabs>

        <div className="mt-4">
          <CalloutBold kind="insight" title="Das Muster erkennen">
            <p>
              Jeder Durchlauf dieses Zyklus verstärkt die neuronale Verbindung. Nicht weil die
              Beziehung besser wird – sondern weil dein Gehirn gelernt hat:
              <strong> Nach dem Schmerz kommt die Erlösung. Warte nur lang genug.</strong>
            </p>
          </CalloutBold>
        </div>
        <p className="mt-3 text-[11px] italic leading-snug text-graphite/60">
          Abb.: Der 4-Phasen-Zyklus der toxischen Bindung – die Schleife zeigt, wie Idealisierung,
          Entzug, Selbstzweifel und manipulative Rückholversuche sich gegenseitig verstärken.
          Wer den Zyklus erkennt, kann einzelne Momente endlich als Muster lesen – nicht mehr als
          Zufall oder Hoffnungsschimmer.
        </p>
      </SectionBlock>

      <SectionBlock
        kind="loesung"
        eyebrow="Lösung · Negative Reappraisal & Realitäts-Anker"
        title="Wie bewusstes Umbewerten dein Gehirn entgiftet"
      >
        <p className="font-display text-[15px] font-semibold leading-snug text-bordeaux sm:text-base">
          Es geht nicht darum, sie zu hassen – es geht darum, das idealisierte Bild durch ein
          reales zu ersetzen, das Schmerz, Enttäuschung und Verrat einschließt.
        </p>

        <Accordion
          type="single"
          collapsible
          className="rounded-2xl border border-[color:var(--color-terracotta)]/18 bg-white/64 px-4 divide-y divide-[color:var(--color-terracotta)]/12"
        >
          {REAPPRAISAL_ITEMS.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="border-0">
              <AccordionTrigger className="py-4 text-left text-sm font-semibold text-graphite hover:no-underline">
                {item.label}
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-sm leading-relaxed text-graphite/82">
                {item.body}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <CalloutBold
          kind="science"
          title="Erinnerungen sind kein Archiv – sie werden bei jedem Abruf neu geschrieben."
          source="Langeslag &amp; Sanchez (2018), J. Exp. Psychol.: General · Nader et al. (2000), Nature 406, 722–726"
        >
          <p>
            Wenn du eine romantisierte Erinnerung mit der faktischen Verletzung daneben legst,
            überschreibt dein Gehirn das emotionale Etikett. Nicht beim ersten Mal — aber spürbar
            nach 21 Tagen.
          </p>
        </CalloutBold>
      </SectionBlock>

      <InfoGraphicBlock
        src={gaslightingGraphic}
        alt="Infografik: Gaslighting erkennen und der eigenen Wahrnehmung wieder trauen"
        title="Infografik · Vertrau deiner Wahrnehmung"
        caption="Gaslighting ersetzt Realität durch Deutungen anderer; die Gegenbewegung heißt: Fakten statt Diskussion. Die Grafik macht sichtbar, dass schriftliche Wahrnehmungs-Anker nicht kleinlich sind, sondern ein Schutz gegen spätere Verwirrung – besonders dann, wenn deine Reaktion im Nachhinein gegen dich verwendet wird."
        aspect="16/9"
      />

      <SectionBlock
        kind="uebung"
        eyebrow="Übung 0 · Toxikometer der Idealisierung"
        title="Wie stark überdeckt Hoffnung gerade noch die Fakten?"
      >
        <ToxicometerScale
          slug={SLUG}
          storageKey="toxikometer_idealisierung"
          title="Toxikometer · Wie idealisiere ich noch?"
          subtitle="Markiere spontan, wie stark sich deine Ex noch wie Hoffnung statt wie Realität anfühlt."
          meta="1–10 · 1 Min"
          accent="mauve"
        />
      </SectionBlock>

      <SectionBlock
        kind="uebung"
        eyebrow="Übung 1a · Dein persönliches Gaslighting-Log"
        title="Trenne, was du gefühlt hast, von dem, was passiert ist"
      >
        <p className="text-sm leading-relaxed text-graphite/85">
          Dokumentiere Momente, in denen du an deiner eigenen Wahrnehmung gezweifelt hast. Für
          jede Situation: Was ist passiert? Was hat sie gesagt/getan? Wie hast du dich gefühlt?
          Was sagen die Fakten?
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

      <SectionBlock
        kind="uebung"
        eyebrow="Übung 1b · 4-Spalten-Realitäts-Check"
        title="Romantik gegen Realität – Spalte für Spalte"
      >
        <p className="text-sm leading-relaxed text-graphite/85">
          Vergleiche deine romantisierten Erinnerungen mit der faktischen Realität. Dieser
          strukturierte Check hilft, kognitive Dissonanz aufzulösen.
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
            „Negative Reappraisal bedeutet nicht, das Gute kleinzureden. Es bedeutet, das Reale
            sichtbar zu machen – damit das idealisierte Bild nicht mehr Macht hat als die
            Wirklichkeit.“
          </p>
        </CalloutBold>
      </SectionBlock>

      <SectionBlock
        kind="loesung"
        eyebrow="Lösung · Negative Reappraisal in der Praxis"
        title="21 Tage. Ein faktischer Satz pro Tag."
      >
        <p>
          Schreibe täglich einen faktisch belegten, negativen Aspekt der Beziehung auf – nicht um
          zu verurteilen, sondern um das Gleichgewicht deiner Erinnerungen wiederherzustellen. Nach
          21 Tagen zeigen Studien eine 30–40 % Reduktion romantischer Gefühlsintensität.
        </p>
        <p className="text-sm font-semibold text-bordeaux">
          → Nutze dafür die 21-Tage-Challenge in Übung 2 (unten).
        </p>
      </SectionBlock>

      <SectionBlock
        kind="uebung"
        eyebrow="Übung 1c · Phasen-Mapper"
        title="Ordne deine Erinnerungen den 4 Phasen zu"
      >
        <p className="text-sm leading-relaxed text-graphite/85">
          Schreibe Erinnerungen in das Eingabefeld und füge sie in die jeweils passende Phase ein.
          So wird das Muster sichtbar.
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

      <SectionBlock
        kind="uebung"
        eyebrow="Übung 2 · 21-Tage-Challenge: Negative Reappraisal"
        title="Ein faktischer, negativer Aspekt — jeden Tag, 21 Tage lang"
      >
        <p className="text-sm leading-relaxed text-graphite/85">
          Schreibe jeden Tag eine negative, faktisch belegte Eigenschaft oder Handlung auf – nicht
          aus Hass, sondern aus Klarheit. Wähle einen Tag aus und trage deine Erinnerung ein. Nach
          21 Tagen zeigen Studien eine messbare Reduktion romantischer Gefühlsintensität um 30–40 %.
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

      <SectionBlock
        kind="uebung"
        eyebrow="Übung 3 · Podest-Analyse & Brief ans idealisierte Bild"
        title="Idealisiert vs. Real — und ein Brief an die, die nie existiert hat"
      >
        <p>
          Wir lieben selten die reale Person – wir lieben die Illusion, die wir uns von ihr gemacht
          haben. In der Verliebtheitsphase kam deine Partnerin dieser Illusion beängstigend nahe:
          aufmerksam, zugewandt, als hätte sie dich wirklich gesehen. Doch sobald diese Phase
          verging, zeigte sie zunehmend ihr wahres Verhalten – und wich immer weiter von dem Bild
          ab, das du im Kopf hattest.
        </p>
        <p>
          Trotzdem hast du am idealisierten Bild festgehalten, weil das Loslassen dieser Illusion
          bedeutet hätte, den Schmerz des Verlustes wirklich zu fühlen. Diese Übung hilft dir, das
          Podest sichtbar zu machen: Stelle das idealisierte Bild der realen Person gegenüber. Dann
          schreibe einen Brief – nicht an sie, sondern an die Version von ihr, die nie existiert hat.
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
              placeholder: "Liebes idealisiertes Bild,\n\nIch habe dich so lange festgehalten, weil…",
              rows: 6,
            },
          ]}
        />
      </SectionBlock>

      <SectionBlock
        kind="uebung"
        eyebrow="Übung 4 · Hoover-Mail Decoder"
        title="Manipulationssprache entlarven"
      >
        <CalloutBold kind="insight" title="Hinweis: Selbsthilfeübung">
          <p>
            Dies ist eine Selbsthilfeübung im Rahmen des UNBOND-Programms – keine Lernzielkontrolle
            und keine klinische Diagnose. Das Ziel ist es, dir Werkzeuge zur Verfügung zu stellen,
            um manipulative Sprachmuster zu erkennen und deiner eigenen Wahrnehmung zu vertrauen.
          </p>
        </CalloutBold>
        <p>
          Wenn der „Wolf" zurückschreibt, klingt es selten offensichtlich böse. Hoovering-Nachrichten
          sind meisterhaft konstruiert: Sie klingen nach Frieden, nach Reue, nach Sorge – und
          hinterlassen dich dennoch destabilisiert. Denn das ist ihr Zweck. In dieser Übung lernst
          du, die Maske zu durchschauen.
        </p>
        <HooverDecoder slug={SLUG} />
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

      <DeepDiveIntro
        label="Wenn du die Forschung dahinter sehen willst …"
        hint="Optional. Vier Studien, die das Muster erklären — du musst sie nicht lesen, um zu heilen."
      >
        <SectionBlock
          kind="deep-dive"
          eyebrow="Deep Dive · Wissenschaft der kognitiven Neubewertung"
          title="Die Forschung hinter den Übungen"
        >
          <div className="grid gap-3 sm:grid-cols-3">
            {STUDY_FLIPS.map((study) => (
              <FlipCard
                key={study.id}
                icon={study.icon}
                color="var(--color-sage)"
                label={study.label}
                heading={study.heading}
                front={study.front}
                back={study.back}
              />
            ))}
          </div>

          <Accordion
            type="single"
            collapsible
            className="divide-y divide-[color:var(--color-sage)]/20 rounded-xl border border-[color:var(--color-sage)]/25 bg-white/55"
          >
            {DEEP_DIVE_ITEMS.map((item, index) => (
              <AccordionItem key={item.id} value={item.id} className="border-0 px-4">
                <AccordionTrigger className="py-3 text-left text-sm font-semibold text-graphite hover:no-underline">
                  <span>
                    <span className="mr-2 text-[color:var(--color-sage)]">0{index + 1} ·</span>
                    {item.title}
                  </span>
                </AccordionTrigger>
                <AccordionContent className="pb-4 text-sm leading-relaxed text-graphite/85">
                  {item.body}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </SectionBlock>
      </DeepDiveIntro>

      <SectionBlock
        kind="story"
        eyebrow="Story · Mary · Die Erklärungsschleife"
        title="„Das habe ich nie gesagt.“"
      >
        <div className="[&>p+p]:mt-4 [&>p]:mb-0">
          <Reveal>
            <p>
              Es ist kurz nach 22 Uhr. Mary und Sandra sitzen am Küchentisch, und Mary wiederholt
              zum dritten Mal, was Sandra noch am Vortag gesagt hatte – Wort für Wort. Sie ist
              sicher. Sie hat es gehört. Sie hat es gespürt.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p>
              Sandras Reaktion: ruhig, fast mitleidig. <em>„Das habe ich nie gesagt. Du bist
              paranoid. Ich mache mir wirklich Sorgen um dich."</em> Mary öffnet den Mund, will
              erklären, beweisen – aber mitten im Satz merkt sie:
              <strong> Je mehr sie erklärt, desto sicherer wirkt Sandra.</strong> Je verzweifelter
              Mary wird, desto glaubwürdiger Sandras Diagnose: instabil.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p>
              Später schreibt Mary in ihr Notizbuch: <em>22:14 Uhr. S. sagte gestern: „Du bist zu
              empfindlich für eine Beziehung." Heute: „Das habe ich nie gesagt." Ich zweifle an
              mir selbst – und genau das ist der Plan.</em> Allein das Aufschreiben gibt ihr ihren
              Boden zurück.
            </p>
          </Reveal>
        </div>
      </SectionBlock>

      <SectionBlock
        kind="diagnose"
        eyebrow="Diagnose · Die Erklärungsschleife"
        title="Warum Beweisen das Gaslighting verstärkt"
      >
        <Accordion
          type="single"
          collapsible
          className="rounded-2xl border border-[color:var(--color-sage)]/18 bg-white/64 px-4 divide-y divide-[color:var(--color-sage)]/12"
        >
          {NOTBREMSE_DIAGNOSE_ITEMS.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="border-0">
              <AccordionTrigger className="py-4 text-left text-sm font-semibold text-graphite hover:no-underline">
                {item.label}
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-sm leading-relaxed text-graphite/82">
                {item.body}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </SectionBlock>

      <SectionBlock
        kind="loesung"
        eyebrow="Lösung · Die 3-Schritt-Notbremse"
        title="Wenn ein Gaslighting-Moment passiert"
      >
        <p>Stoppe die Erklärungsschleife sofort – mit drei klaren, inneren Schritten.</p>
        <div className="grid gap-3 sm:grid-cols-3">
          {NOTBREMSE.map((s, i) => (
            <div
              key={s.title}
              className="rounded-2xl bg-white/75 p-4 shadow-glass ring-1 ring-[color:var(--color-terracotta)]/20"
            >
              <div className="mb-2 grid h-8 w-8 place-items-center rounded-full bg-[color:var(--color-terracotta)]/12 text-sm font-bold text-[color:var(--color-terracotta)]">
                {i + 1}
              </div>
              <p className="font-display text-sm font-bold text-bordeaux">{s.title}</p>
              <p className="mt-1 text-xs leading-relaxed text-graphite/85">{s.body}</p>
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
          Dein Gedächtnis ist dein wichtigstes Werkzeug gegen Gaslighting – aber nur, wenn du es
          schriftlich sicherst. Wenn es sich für dich sicher anfühlt, kannst du versuchen, dieses
          Protokoll drei Wochen lang täglich zu führen.
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
              label: "Die 3 wichtigsten Ereignisse heute (Uhrzeit, konkrete Worte, Fakten)",
              placeholder:
                "z.B. 14:20 — Sie sagte: „…“. 19:45 — sie behauptete später, das nie gesagt zu haben.",
              rows: 5,
            },
            {
              key: "anker_widerspruch",
              label: "Wenn Nachrichten von ihr Dinge anders darstellen: Was sagen meine Notizen?",
              placeholder:
                "Vergleiche die aktuelle Behauptung mit deinem Protokoll von gestern/letzter Woche.",
              rows: 4,
            },
            {
              key: "anker_satz",
              label: "Mein Stopp-Satz heute",
              placeholder: "„Ich brauche ihre Zustimmung nicht, um meine Realität zu kennen.“",
              rows: 2,
            },
          ]}
        />
        <CalloutBold kind="quote" title="Wichtig">
          <p>
            Chronisches Gaslighting kann tiefe Zweifel an der eigenen Wahrnehmung hinterlassen.
            Wenn du regelmäßig nicht weißt, was real ist und was nicht, ist das kein Charakterfehler
            – das ist ein Trauma-Symptom. Bei anhaltender Realitätsunsicherheit: professionelle
            Unterstützung ist kein Zeichen von Schwäche, sondern ein Akt der Selbstfürsorge.
          </p>
          <p className="flex items-start gap-2 font-semibold text-bordeaux">
            <Phone className="mt-[2px] h-4 w-4 shrink-0" strokeWidth={1.75} />
            Telefonseelsorge: 0800 111 0 111 (kostenlos, 24/7).
          </p>
        </CalloutBold>
      </SectionBlock>

      <SectionBlock
        kind="story"
        eyebrow="Story · Mary · Der Vergleich, der brennt"
        title="Das Urlaubsfoto"
      >
        <div className="[&>p+p]:mt-4 [&>p]:mb-0">
          <Reveal>
            <p>
              Mary scrollt durch Instagram – eigentlich nur, um eine Geschichte einer Freundin
              anzusehen. Dann trifft es sie wie ein Schlag: Sandra, in der Toskana. Mit ihr.
              Sonnenuntergang, Wein, lachend. Das gleiche Lächeln, das sie Mary immer dann zeigte,
              wenn sie etwas wollte.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p>
              Mary erinnert sich, wie oft sie gefragt hatte: <em>„Können wir mal verreisen?"</em>
              Sandras Antwort war immer dieselbe: <em>„Ich bin nicht der Urlaubs-Typ. Das ist
              einfach nichts für mich."</em> Fünf Jahre lang. Und jetzt ist sie es offenbar doch.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p>
              Der Schmerz ist real. Aber Mary öffnet ihr Workbook und schreibt drei Spalten auf.
              Nach zehn Minuten liest sie Spalte C laut vor. Und dann nochmal. Und nochmal.
            </p>
          </Reveal>
        </div>
      </SectionBlock>

      <SectionBlock
        kind="diagnose"
        eyebrow="Diagnose · Doppelstandard als Kontrollmuster"
        title="Du warst nicht das Problem. Du warst Target."
      >
        <Accordion
          type="single"
          collapsible
          className="rounded-2xl border border-[color:var(--color-sage)]/18 bg-white/64 px-4 divide-y divide-[color:var(--color-sage)]/12"
        >
          {DOPPELSTANDARD_ITEMS.map((item) => (
            <AccordionItem key={item.id} value={item.id} className="border-0">
              <AccordionTrigger className="py-4 text-left text-sm font-semibold text-graphite hover:no-underline">
                {item.label}
              </AccordionTrigger>
              <AccordionContent className="pb-4 text-sm leading-relaxed text-graphite/82">
                {item.body}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </SectionBlock>

      <SectionBlock
        kind="uebung"
        eyebrow="Übung · Die 3-Spalten-Wahrheit"
        title="Verwandle Doppelstandard-Schmerz in Klarheit"
      >
        <p>
          Wenn es sich für dich sicher anfühlt, kannst du diese Übung nutzen, um den
          Doppelstandard-Schmerz in Klarheit zu verwandeln. Fülle alle drei Spalten aus – und lies
          Spalte C so oft laut vor, bis du beginnst, es zu glauben.
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
          Der Schmerz beim Lesen von Spalte C ist normal. Er bedeutet, dass etwas Altes loslässt.
        </p>
      </SectionBlock>

      <SectionBlock
        kind="story"
        eyebrow="Story · Mary · Loslassen beginnt innen"
        title="Der Brief, den Sandra nie schreiben wird"
      >
        <div className="[&>p+p]:mt-4 [&>p]:mb-0">
          <Reveal>
            <p>
              Mary wartet. Nicht aktiv – aber das Warten ist da. Irgendwo im Hintergrund des Lebens
              sitzt diese stille Hoffnung: <em>Vielleicht sieht sie es irgendwann. Vielleicht kommt
              sie, wenn sie bereit ist. Vielleicht, wenn die neue Beziehung scheitert. Vielleicht
              wenn Mary stark genug ist, um nicht mehr zu brauchen. Vielleicht.</em>
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p>
              Marys Therapeutin fragt ruhig: <em>„Was würdest du verlieren, wenn du aufhörst zu
              warten?"</em> Mary antwortet nicht sofort. Dann: <em>„Die Möglichkeit, dass sie sich
              ändert."</em> Und die Therapeutin: <em>„Und was gewinnst du, wenn du das loslässt?"</em>
              Stille. Eine lange Stille. Dann: <em>„Mein eigenes Leben."</em>
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p>
              Radical Acceptance ist keine Kapitulation. Es ist die Erkenntnis, dass das Warten auf
              Veränderung eine Form der Selbstbestrafung ist – und dass Loslassen kein Lieblosigkeit
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
          Radical Acceptance ist ein Kernkonzept der Dialektisch-Behavioralen Therapie (DBT nach
          Linehan, 1993) und wurde von Ramani Durvasula auf narzisstische Beziehungsdynamiken
          angewendet. Es bedeutet: <strong>Die Realität vollständig anzunehmen, ohne sie zu
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
        <CalloutBold kind="quote" title="Durvasula (2019)" source="Ramani Durvasula">
          <p className="italic">
            „Das Warten auf Einsicht oder Reue einer narzisstischen Persönlichkeit bindet deine
            emotionalen Ressourcen auf unbestimmte Zeit. Akzeptanz ist nicht das Ende der Hoffnung
            – es ist der Anfang deiner Freiheit."
          </p>
        </CalloutBold>
      </SectionBlock>

      <SectionBlock
        kind="uebung"
        eyebrow="Übung · Acceptance-Protokoll (21 Tage)"
        title="21 Tage. Wiederholung schafft neue Pfade."
      >
        <p>
          Wenn es sich für dich sicher anfühlt, kannst du mit diesem Protokoll beginnen. 21 Tage
          lang. Jeden Tag. Nicht weil es beim ersten Mal klappt – sondern weil Wiederholung neue
          neuronale Pfade schafft.
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
          Es ist normal, wenn sich der Satz an Tag 1 falsch anfühlt. Er soll sich mit der Zeit
          wahrer anfühlen – nicht durch Überzeugung, sondern durch Wiederholung.
        </p>
        <CalloutBold kind="quote" title="Wichtig">
          <p>
            Radical Acceptance bedeutet nicht, den Schmerz wegzumachen. Der Schmerz ist berechtigt.
            Er darf da sein. Wenn du dich in einer akuten Krise befindest oder Suizidgedanken
            auftauchen: Bitte wende dich sofort an die Telefonseelsorge.
          </p>
          <p className="flex items-start gap-2 font-semibold text-bordeaux">
            <Phone className="mt-[2px] h-4 w-4 shrink-0" strokeWidth={1.75} />
            0800 111 0 111 (kostenlos, 24/7) oder 0800 111 0 222.
          </p>
        </CalloutBold>
      </SectionBlock>

      <MeditationCard
        title="Gedankenkarussell stoppen – Einschlaf-Hypnose &amp; Meditation"
        duration="ChakraTunes"
        source="Raphael Kempermann"
        youtubeId="UnjielNyg08"
      />

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

const TIMELINE_ITEMS = [
  {
    id: "idealisierung",
    label: "„Niemand versteht mich so wie du.“",
    hint: "Bindung wird durch Exklusivität aufgebaut.",
  },
  {
    id: "abwertung",
    label: "„Du bist in letzter Zeit echt schwierig.“",
    hint: "Erste Irritation: Nähe kippt in diffuse Schuld.",
  },
  {
    id: "leugnung",
    label: "„Das habe ich nie gesagt.“",
    hint: "Deine Wahrnehmung wird entwertet.",
  },
  {
    id: "pity",
    label: "„Du weißt gar nicht, wie schlecht es mir gerade geht.“",
    hint: "Mitleid soll deine Grenze weich machen.",
  },
  {
    id: "hoovering",
    label: "„Lass uns wenigstens im Frieden sein.“",
    hint: "Rückholversuch mit sanfter Verpackung.",
  },
];

const TIMELINE_ORDER = ["idealisierung", "abwertung", "leugnung", "pity", "hoovering"];

const DIAGNOSE_TABS: {
  id: string;
  label: string;
  kicker: string;
  title: string;
  body: string;
  highlight: string;
  icon: LucideIcon;
}[] = [
  {
    id: "festinger",
    label: "Festinger",
    kicker: "Kognitive Dissonanz",
    title: "Warum dein Gehirn Widersprüche weichzeichnet",
    body:
      'Kognitive Dissonanz entsteht, wenn zwei Wahrheiten gleichzeitig aktiv sind: „Diese Beziehung schadet mir“ und „Ich kann sie nicht loslassen“. Um diesen Widerspruch auszuhalten, schwächt das Gehirn oft die Realität ab – nicht die Bindung.',
    highlight:
      'Je größer dein Einsatz war, desto stärker verteidigt dein Nervensystem oft das idealisierte Bild. Nicht aus Dummheit – sondern um den inneren Kollaps zu vermeiden.',
    icon: Orbit,
  },
  {
    id: "skinner",
    label: "Skinner",
    kicker: "Spielautomat-Effekt",
    title: "Warum unvorhersehbare Nähe süchtiger macht als verlässliche Liebe",
    body:
      'Intermittierende Verstärkung bedeutet: Belohnung kommt unregelmäßig. Genau das macht sie so mächtig. Das System lernt nicht Sicherheit – es lernt Warten, Hoffen und erneutes Investieren.',
    highlight:
      'Ein kaputter Spielautomat hält Menschen länger fest als eine Maschine, die verlässlich auszahlt. Toxische Bindung funktioniert genauso.',
    icon: Zap,
  },
  {
    id: "fisher",
    label: "Fisher",
    kicker: "fMRT",
    title: "Warum Trennung wie Entzug wirkt",
    body:
      'Helen Fisher zeigte, dass romantische Ablehnung dieselben Belohnungs- und Schmerzareale aktiviert wie Drogenentzug. Sehnsucht ist deshalb nicht „bloß emotional“ – sie ist ein neurochemischer Ausnahmezustand.',
    highlight:
      'Wenn du dich nach ihr sehnst, bedeutet das nicht, dass sie richtig war. Es bedeutet, dass dein Belohnungssystem sie als Lösung abgespeichert hat.',
    icon: HeartCrack,
  },
  {
    id: "wlw",
    label: "WLW-Kontext",
    kicker: "Weaponized Virtue",
    title: "Warum du an dir statt an ihr gezweifelt hast",
    body:
      'Wenn eine Partnerin öffentlich als sensibel, reflektiert oder besonders „gut“ wahrgenommen wird, wandert dein Zweifel automatisch zu dir. In WLW-Kontexten verstärkt sich das oft noch, weil Täterinnenschaft gesellschaftlich unsichtbar gemacht wird.',
    highlight:
      'Weaponized Virtue heißt: Ihre Tugend wird zur Waffe gegen deine Realität.',
    icon: ShieldAlert,
  },
];

const TRAUMA_HOTSPOTS = [
  {
    id: "chemie",
    x: 22,
    y: 26,
    label: "Chemie",
    body:
      "Dopamin, Oxytocin und Cortisol arbeiten hier nicht gegeneinander, sondern wie ein Cocktail: Hoffnung bindet, Stress hält dich alarmiert, Erleichterung verstärkt die Sucht.",
  },
  {
    id: "spielautomat",
    x: 76,
    y: 24,
    label: "Loop",
    body:
      "Der Loop entsteht, weil Belohnung nie verlässlich kommt. Gerade diese Unberechenbarkeit hält die Suche nach dem nächsten guten Moment am Laufen.",
  },
  {
    id: "entzug",
    x: 26,
    y: 71,
    label: "Entzug",
    body:
      "Wenn der Kontakt wegfällt, reagiert dein System wie auf Entzug: Es will die Quelle der Erleichterung zurück – selbst wenn diese Quelle zugleich die Wunde ist.",
  },
  {
    id: "nocontact",
    x: 73,
    y: 73,
    label: "No Contact",
    body:
      "No Contact unterbricht nicht nur Kommunikation, sondern die gesamte Reizkette. Erst wenn die Trigger ausbleiben, kann das Nervensystem langsam neu lernen.",
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
    desc: "Dopamin reagiert auf Erwartung, nicht auf Sicherheit. Es macht das Warten auf die nächste gute Nachricht selbst zur Belohnungsschleife.",
  },
  {
    id: "oxytocin",
    name: "Oxytocin",
    kicker: "Bindung",
    icon: HeartHandshake,
    teaser: "Das Bindungshormon.",
    desc: "Oxytocin verknüpft Nähe mit Vertrauen – auch dann, wenn die Person dir schadet. Dadurch fühlt sich Trennung nicht nur traurig, sondern körperlich falsch an.",
  },
  {
    id: "cortisol",
    name: "Cortisol",
    kicker: "Stress",
    icon: Flame,
    teaser: "Das Stresshormon.",
    desc: "Cortisol hält dein System in Alarmbereitschaft. Der nächste warme Moment wirkt deshalb wie Erlösung – und verstärkt die Bindung weiter.",
  },
];

const PHASEN: {
  id: string;
  label: string;
  icon: LucideIcon;
  desc: string;
  quote: string;
}[] = [
  {
    id: "idealisierung",
    label: "Idealisierung",
    icon: Heart,
    desc: "Intensive Zuwendung, Komplimente, Nähe. Dopamin und Oxytocin fluten das System und markieren die Person als etwas Einzigartiges.",
    quote: "„Mit dir fühlt es sich endlich echt an.“",
  },
  {
    id: "abwertung",
    label: "Abwertung",
    icon: CloudRain,
    desc: "Plötzlicher Rückzug, Kritik, subtile Distanz. Cortisol steigt und du suchst den Fehler reflexhaft bei dir statt im Muster.",
    quote: "„Du machst gerade echt viel aus nichts.“",
  },
  {
    id: "discard",
    label: "Discard",
    icon: Scissors,
    desc: "Kognitive Dissonanz übernimmt. Du romanisierst die guten Momente, während die Realität immer mehr aus deinem Zugriff rutscht.",
    quote: "„Ich brauche gerade einfach Abstand – dramatisier das bitte nicht.“",
  },
  {
    id: "hoovering",
    label: "Hoovering",
    icon: Anchor,
    desc: "Sie kommt zurück. Ein Satz, ein Emoji, eine Friedensgeste. Der kurze Dopamin-Hit lässt die ganze Schleife wieder wie Hoffnung aussehen.",
    quote: "„Ich will keinen Streit mehr. Lass uns doch einfach Frieden finden.“",
  },
];

const REAPPRAISAL_ITEMS = [
  {
    id: "was-ist-das",
    label: "Was ist Reappraisal?",
    body:
      "Negative Reappraisal bedeutet, romantisierte Erinnerungen nicht länger isoliert zu betrachten, sondern sie bewusst mit der ganzen Realität zu koppeln. Du nimmst dem schönen Bild nicht die Existenz – aber du nimmst ihm das Monopol.",
  },
  {
    id: "rekonsolidierung",
    label: "Wie funktioniert Rekonsolidierung?",
    body:
      "Erinnerungen werden beim Abruf kurz beweglich. Wenn du dann Fakten, Verletzungen und Muster danebenlegst, verändert sich die emotionale Markierung. Genau deshalb helfen schriftliche Gegenbeweise mehr als bloßes Grübeln.",
  },
  {
    id: "warum-21",
    label: "Warum 21 Tage?",
    body:
      "Ein einzelner Reality-Check entlastet kurz. Wiederholung verändert Muster. Die 21 Tage geben deinem Gehirn genug Wiederholungen, damit aus Hoffnung schrittweise Klarheit werden kann.",
  },
];

const STUDY_FLIPS = [
  {
    id: "langeslag",
    icon: Bird,
    label: "Langeslag · 2018",
    heading: "Umbewerten reduziert Gefühle messbar",
    front: "Negative Reappraisal senkte romantische Aktivierung stärker als Verdrängen.",
    back: "Die Studie verglich mehrere Strategien im Labor. Reappraisal war jene Methode, die Gefühle nicht nur kurzfristig, sondern wiederholt am deutlichsten herunterregelte.",
  },
  {
    id: "festinger",
    icon: ScanSearch,
    label: "Festinger · 1957",
    heading: "Das Ego schützt Investitionen",
    front: "Je mehr du investiert hast, desto schwerer wird Realität anzunehmen.",
    back: "Kognitive Dissonanz erklärt, warum das Eingeständnis von Täuschung sich wie Selbstverlust anfühlen kann. Das Gehirn verteidigt lieber das Bild als den Bruch.",
  },
  {
    id: "fisher",
    icon: HeartCrack,
    label: "Fisher · 2010",
    heading: "Liebeskummer ist kein „nur psychischer“ Schmerz",
    front: "Belohnungs- und Schmerzareale feuern parallel.",
    back: "fMRT-Daten zeigten bei romantischer Zurückweisung Aktivierungen, die sowohl Sucht- als auch Schmerzsysteme betreffen. Deshalb fühlt Loslassen sich so körperlich an.",
  },
];

const DEEP_DIVE_ITEMS = [
  {
    id: "langeslag",
    title: "Langeslag & Sanchez (2018) — Reappraisal schlägt Verdrängen",
    body:
      "In kontrollierten fMRT-Studien reduzierte Negative Reappraisal die Intensität romantischer Gefühle signifikant stärker als die Strategien „an etwas anderes denken“ oder „die Situation akzeptieren“. Wichtig: Der Effekt wird mit Übung stärker. Die ersten Male fühlt sich Negative Reappraisal künstlich an. Das ist normal.",
  },
  {
    id: "festinger",
    title: "Festinger (1957) — Warum wir am idealisierten Bild festhalten",
    body:
      "Die Theorie der kognitiven Dissonanz erklärt, warum wir so verzweifelt an idealisierten Bildern festhalten – das Eingestehen der Realität würde bedeuten, dass unsere Urteilsfähigkeit versagt hat. Das Ego verteidigt die Investition in die Idealisierung.",
  },
  {
    id: "fisher",
    title: "Fisher et al. (2010) — Liebeskummer = Drogenentzug im fMRT",
    body:
      "Hirnscans zeigten aktivierte Dopamin-Sucht-Areale bei romantischer Ablehnung – identisch mit Kokainkonsumenten. Gleichzeitig erhöhte Aktivität im anterioren cingulären Kortex. Romantischer Trennungsschmerz ist real – er aktiviert dieselben Schmerzregionen wie physischer Schmerz.",
  },
  {
    id: "ristock",
    title: "Ristock (2002) — Warum WLW besonders stark zweifeln",
    body:
      "Frauen in lesbischen Beziehungen zweifeln besonders häufig an ihrer eigenen Wahrnehmung – weil gesellschaftliche Narrative Frauen nicht als Täterinnen konzipieren. Das macht das Gaslighting-Log für WLW-Beziehungen besonders wichtig: Die Fakten aufzuschreiben ist ein Akt des Widerstands gegen die Unsichtbarkeit dieser Erfahrungen.",
  },
];

const NOTBREMSE_DIAGNOSE_ITEMS = [
  {
    id: "erklaeren",
    label: "Warum jede Rechtfertigung den Tanz verlängert",
    body:
      "Gaslighting funktioniert nicht trotz deiner Versuche, dich zu erklären – es funktioniert durch sie. Jedes Mal, wenn du versuchst, deine Wahrnehmung zu beweisen, sendest du unbewusst das Signal: Meine Realität steht zur Disposition.",
  },
  {
    id: "nervensystem",
    label: "Was chronisches Gaslighting neurologisch macht",
    body:
      "Psychologin Robin Stern beschreibt den Gaslighting-Tanz als System, das nicht Wahrheit will, sondern Erschöpfung. Der anteriore cinguläre Kortex bleibt dabei im Konfliktmodus; dein Nervensystem kann kaum noch unterscheiden, ob gerade Gefahr oder bloß Widerspruch vorliegt.",
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

const DOPPELSTANDARD_ITEMS = [
  {
    id: "target",
    label: "Was der Doppelstandard mit deinem Selbstwert macht",
    body:
      "Wenn die Expartnerin mit jemand anderem scheinbar mühelos tut, was sie dir verweigerte, entsteht schnell der Gedanke: Mit mir stimmte etwas nicht. Genau dieser Schluss ist der eigentliche sekundäre Schaden.",
  },
  {
    id: "muster",
    label: "Warum das neue Glück oft nur die nächste Idealisierungsphase ist",
    body:
      "Widerstand gegen Intimität ist selten ein einmaliger Unfall. In narzisstisch geprägten Dynamiken wirkt die neue Person anfangs wie die Ausnahme – bis der gleiche Zyklus mit neuem Ziel von vorn beginnt.",
  },
  {
    id: "forschung",
    label: "Was Durvasula dazu sagt",
    body:
      "Durvasula beschreibt, dass Täterinnen in neuen Beziehungen häufig zunächst besonders investiert wirken. Nicht weil plötzlich Bindungsfähigkeit da ist, sondern weil die Bindungsphase das Einfallstor des nächsten Kreislaufs ist.",
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
