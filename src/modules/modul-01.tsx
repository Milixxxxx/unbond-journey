import { useState } from "react";
import {
  Bomb,
  Thermometer,
  Waves,
  MessageSquareOff,
  Swords,
  TreePalm,
  RefreshCw,
  Magnet,
  BatteryLow,
  Flame,
  Bird,
  Brain,
  Link2,
  type LucideIcon,
} from "lucide-react";
import { GlossarTerm } from "@/components/glossar-term";
import { ChapterIntro } from "@/components/chapter-intro";
import { SectionBlock } from "@/components/section-block";
import { StoryPortrait } from "@/components/story-portrait";
import { InfoGraphicBlock } from "@/components/infographic-block";
import { InfographicHotspots } from "@/components/infographic-hotspots";
import { bookImages } from "@/lib/book-images";
import { TextCollapse } from "@/components/text-collapse";
import marySpielautomatImg from "@/assets/story/mary-spielautomat.jpg";
import traumaBondingInfografik from "@/assets/infographics/trauma-bonding-kreislauf.png";
import { ButtonChoice } from "@/components/button-choice";
import { ReflectionField } from "@/components/exercise-fields";
import { ChecklistGoals } from "@/components/checklist-goals";
import { DeepDiveIntro } from "@/components/deep-dive-intro";
import { Reveal } from "@/components/reveal";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";
import {
  PillCloud,
  Reflection3Step,
  StackedCards,
  CalloutBold,
  FlipCard,
  MeditationCard,
} from "@/components/exercise";
import { BreathPacer } from "@/components/exercise/breath-pacer";
import { QuickToolsTrio, QUICK_TOOLS_M02 } from "@/components/quick-tools-trio";

const SLUG = "modul-01";

/**
 * MODUL 01 · Trauma-Bonding verstehen
 * Pilot-Refactor nach UNBOND Experience System.
 * Reihenfolge: Story → Diagnose → Lösung → Deep Dive → Übungen (3) → Checkliste.
 * Alle Sections via SectionBlock. Lange Texte via TextCollapse.
 * Single-Select via ButtonChoice (kein Slider).
 */
export function Modul01() {
  const [perspektive, setPerspektive] = useState<"mary" | "sandra" | "beide">("beide");
  const dim = (who: "mary" | "sandra") =>
    perspektive !== "beide" && perspektive !== who
      ? "opacity-30 transition-opacity duration-500"
      : "opacity-100 transition-opacity duration-500";

  return (
    <article className="space-y-7">
      {/* ── Phase-Strip + Hero + Einleitung ── */}
      <div className="-mb-2 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.22em] text-mauve">
        <span className="grid h-8 w-8 place-items-center rounded-full border border-mauve/40 bg-mauve/10 font-display text-sm text-mauve">
          02
        </span>
        <span>Phase 1 · Die Fessel verstehen</span>
      </div>
      <ChapterIntro
        title="Schritt 02 · Trauma-Bonding: Anatomie der Fessel"
        keywords={[
          "Intermittierende Verstärkung",
          "Dopamin-Achterbahn",
          "Spielautomaten-Effekt",
        ]}
      >
        <p>
          Was du für tiefe Liebe gehalten hast, ist eine messbare
          neurobiologische Reaktion — und das ist keine Beleidigung, sondern
          eine Befreiung. Intermittierende Verstärkung konditioniert das Gehirn
          stärker als jede konstante Zuneigung, und genau das macht diese
          Bindung so schwer zu durchbrechen.
        </p>
      </ChapterIntro>

      {/* ── Quick-Tools-Trio: sofort-Anker, falls Drang JETZT da ist ── */}
      <QuickToolsTrio tools={QUICK_TOOLS_M02} />


      {/* ════════════════ 1 · STORY ════════════════ */}
      <SectionBlock
        kind="story"
        eyebrow="Story · Der neurologische Spielautomat"
        title="Mary &amp; Sandra — getrennt und doch gebunden"
      >
        {/* Perspektiv-Switch (Micro-Interaction · kein Persistence) */}
        <div className="mb-4 flex flex-wrap items-center gap-2">
          <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cream/70">
            Perspektive
          </span>
          {([
            { v: "beide", l: "Beide" },
            { v: "mary", l: "Mary" },
            { v: "sandra", l: "Sandra" },
          ] as const).map((opt) => (
            <button
              key={opt.v}
              type="button"
              onClick={() => setPerspektive(opt.v)}
              aria-pressed={perspektive === opt.v}
              className={cn(
                "rounded-full border px-3 py-1 text-xs font-medium transition-all duration-300",
                perspektive === opt.v
                  ? "border-cream/80 bg-cream/15 text-cream shadow-[0_0_0_3px_oklch(0.92_0.005_250/0.18)]"
                  : "border-cream/25 bg-transparent text-cream/65 hover:border-cream/50 hover:text-cream/85",
              )}
            >
              {opt.l}
            </button>
          ))}
        </div>

        {/* Story-Container: clearfix für das float-Portrait */}
        <div className="[&>p+p]:mt-4 [&>p]:mb-0">
          {/* Mary-Portrait — Desktop: float-left mit Textumfluss · Mobile: oben drüber */}
          <StoryPortrait
            src={marySpielautomatImg}
            alt="Mary sitzt nachts am Küchentisch und schreibt in ihr Journal"
            caption="Mary · Die Nacht der Erkenntnis"
            side="left"
          />
          <Reveal>
            <p data-voice="mary" className={dim("mary")}>
              Mary sitzt nachts am Küchentisch und rechnet die nackte Wahrheit
              zusammen: <strong>Sechs bis acht Stunden im Monat</strong> — das
              war alles, was Sandra ihr an echter, präsenter Beziehungszeit
              gönnte.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <p data-voice="sandra" className={dim("sandra")}>
              Der Rest: Ausreden, vorgeschobener Stress, unsichtbare Mauern.
            </p>
          </Reveal>
          <Reveal delay={240}>
            <p data-voice="mary" className={dim("mary")}>
              Rational ergibt das keinen Sinn. Warum also fühlte Mary, als würde
              sie ohne diese Frau buchstäblich nicht atmen können?
            </p>
          </Reveal>
          <Reveal delay={360}>
            <TextCollapse preview={1} threshold={3}>
              <p data-voice="mary" className={dim("mary")}>
                Die Antwort trifft sie wie ein Schlag, als sie zum ersten Mal
                über{" "}
                <GlossarTerm termKey="intermittierende-verstaerkung">
                  intermittierende Verstärkung
                </GlossarTerm>{" "}
                stolpert. Sandra war kein sicherer Hafen — sie war ein kaputter
                Spielautomat. Nach wochenlangem emotionalem Verhungern warf er
                plötzlich den Jackpot aus: ein Blick absoluter Liebe, ein
                intimes Versprechen, ein Abend leidenschaftlicher Nähe. Und dann
                wieder Rückzug, gerade in dem Moment, wo die Harmonie am größten
                war …
              </p>
              <p data-voice="mary" className={dim("mary")}>
                Doch dann erinnert sie sich an einen Satz aus ihrem Workbuch —
                an die <GlossarTerm termKey="defusion">ACT-Defusion</GlossarTerm>.
                Sie atmet einmal tief und sagt innerlich:{" "}
                <em>
                  „Da ist er wieder, dieser Gedanke — dass unsere Liebe
                  einzigartig gewesen sei. Schon spüre ich den Schmerz im
                  Herzen. Aber ich lasse ihn weiterziehen. Es ist nur ein
                  Gedanke, den der kaputte Spielautomat ausgespuckt hat."
                </em>
              </p>
              <p data-voice="sandra" className={dim("sandra")}>
                Genau dieser sadistische Wechsel aus eiskaltem Entzug und
                massiver Belohnung hatte Marys Gehirn biochemisch
                umprogrammiert. Keine Seelenverwandtschaft — das Zittern in
                ihren Händen, ihre verzweifelte Hörigkeit:{" "}
                <strong>klassischer Junkie-Entzug</strong> vor dem Automaten. Es
                war schlicht{" "}
                <GlossarTerm termKey="trauma-bonding">Trauma-Bonding</GlossarTerm>
                .
              </p>
            </TextCollapse>
          </Reveal>
          {/* Clearfix: Stoppt das float-Bild, damit die Story-Box korrekt umschließt */}
          <div className="clear-both" />
        </div>
      </SectionBlock>

      {/* ════════════════ 2 · DIAGNOSE ════════════════ */}
      <SectionBlock
        kind="diagnose"
        eyebrow="Diagnose · Was Trauma-Bonding wirklich ist"
        title="Neurobiologie der toxischen Bindung"
      >
        <p className="text-sm leading-relaxed text-graphite/85">
          Trauma-Bonding ist <strong>keine Schwäche</strong> und kein Zeichen
          mangelnder Intelligenz. Es ist ein neurobiologischer Prozess, der
          durch{" "}
          <GlossarTerm termKey="intermittierende-verstaerkung">
            intermittierende Verstärkung
          </GlossarTerm>{" "}
          entsteht — den unvorhersehbaren Wechsel aus Nähe und Rückzug.
        </p>

        <Accordion
          type="single"
          collapsible
          className="mt-3 divide-y divide-[color:var(--color-sage)]/20 rounded-xl border border-[color:var(--color-sage)]/25 bg-white/55"
        >
          <AccordionItem value="skinner" className="border-0 px-4">
            <AccordionTrigger className="py-3 text-left text-sm font-semibold text-graphite hover:no-underline">
              <span>
                <span className="mr-2 text-[color:var(--color-sage)]">01 ·</span>
                Skinner (1938) — Warum unvorhersehbare Belohnung am stärksten konditioniert
              </span>
            </AccordionTrigger>
            <AccordionContent className="pb-4 text-sm leading-relaxed text-graphite/85">
              Belohnungen, die unregelmäßig und unvorhersehbar kommen, erzeugen
              die <strong>stärkste und hartnäckigste Konditionierung</strong>{" "}
              überhaupt. Genau dieses Muster — ein Like heute, drei Tage Eis
              danach — ist das Suchterzeugende. Nicht die Liebe, sondern ihre
              Unvorhersehbarkeit.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="fisher" className="border-0 px-4">
            <AccordionTrigger className="py-3 text-left text-sm font-semibold text-graphite hover:no-underline">
              <span>
                <span className="mr-2 text-[color:var(--color-sage)]">02 ·</span>
                Fisher et al. (2005) — Romantische Liebe = Kokain im fMRT
              </span>
            </AccordionTrigger>
            <AccordionContent className="pb-4 text-sm leading-relaxed text-graphite/85">
              Romantische Liebe aktiviert dieselben Hirnareale wie Kokainkonsum.
              Bei Trauma-Bonding wird dieses System besonders stark
              konditioniert: Das Gehirn lernt, dass auf Schmerz Erleichterung
              folgt — und beginnt, den Schmerz selbst als Teil des
              Belohnungszyklus zu antizipieren.
            </AccordionContent>
          </AccordionItem>

          <AccordionItem value="dutton" className="border-0 px-4">
            <AccordionTrigger className="py-3 text-left text-sm font-semibold text-graphite hover:no-underline">
              <span>
                <span className="mr-2 text-[color:var(--color-sage)]">03 ·</span>
                Dutton &amp; Painter (1993) — Bindung wegen, nicht trotz des Schmerzes
              </span>
            </AccordionTrigger>
            <AccordionContent className="pb-4 text-sm leading-relaxed text-graphite/85">
              Trauma-Bonding ist eine Bindung, die <strong>nicht trotz, sondern
              wegen des Schmerzes</strong> entsteht. Der Wechsel zwischen
              Missbrauch und Zuneigung schafft eine pathologische Bindung, die
              stärker ist als gesunde Liebe. Das ist der Spielautomat, an dem
              Mary saß — und an dem du vielleicht auch sitzt.
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        {/* Inline-Infografik mit 5 Hotspots — die 5 Säulen der Diagnose interaktiv */}
        <InfographicHotspots
          src={bookImages.infoToxliebe}
          alt="Neurobiologie der toxischen Liebe – VTA als Spielautomat"
          title="Wenn Bindung zur Sucht wird · interaktiv"
          caption="Tippe die markierten Punkte an — jeder zeigt einen Baustein deiner Diagnose. So wird sichtbar, warum dein Wille allein nicht ausreicht."
          hotspots={DIAGNOSE_HOTSPOTS}
        />
      </SectionBlock>

      {/* ── 10 Warnsignale als interaktive FlipCards ── */}
      <SectionBlock
        kind="diagnose"
        eyebrow="Die 10 Warnsignale toxischer Bindung"
        title="Tippe eine Karte an — sieh die Definition"
      >
        <p className="text-sm text-graphite/75">
          Vorderseite: Name. Rückseite: was wirklich dahintersteckt. Was du
          benennen kannst, kann dein Verstand nicht mehr wegrationalisieren.
        </p>
        {/* Grid: 2 Spalten Mobile (5 Reihen × 2) · 5 Spalten ab md (2 Reihen × 5) — keine einzelne Karte */}
        <div className="grid grid-cols-2 gap-2 sm:gap-2.5 md:grid-cols-5">
          {WARNSIGNALE.map((w) => (
            <FlipCard
              key={w.id}
              icon={w.icon}
              color="var(--color-bordeaux)"
              label={w.nr}
              heading={w.label}
              front={w.teaser}
              back={w.desc}
            />
          ))}
        </div>
      </SectionBlock>

      {/* ════════════════ 3 · LÖSUNG ════════════════ */}
      <SectionBlock
        kind="loesung"
        eyebrow="Lösung · ACT-Defusion & Dopamin-Reset"
        title="Den Konditionierungskreislauf unterbrechen"
      >
        <p className="font-display text-[15px] font-semibold leading-snug text-bordeaux sm:text-base">
          Trauma-Bonding ist neurobiologisch eine Sucht — und Sucht heilt
          nicht durch Bewerten, sondern durch Unterbrechen.
        </p>

        <TextCollapse preview={1} threshold={2}>
          <p>
            Die <em>Acceptance and Commitment Therapy</em> (ACT) bietet dafür
            die <GlossarTerm termKey="defusion">Defusions-Technik</GlossarTerm>:
            Du beobachtest Gedanken und Cravings als mentale Ereignisse — wie
            Züge, die durch den Bahnhof fahren — ohne ihnen zu folgen oder
            gegen sie zu kämpfen.
          </p>
          <p>
            Parallel beschreibt die Suchtforschung die{" "}
            <strong>Dopamin-Sensitivierung</strong>: Das Belohnungssystem
            wird durch intermittierende Verstärkung hyperreaktiv und reagiert
            auf kleinste Hinweisreize — ein Like, ein Lied — mit
            unverhältnismäßig starken Cravings.
          </p>
          <p className="font-semibold text-bordeaux">
            Der Dopamin-Reset bedeutet: konsequente Null-Exposition gegenüber
            diesen Micro-Cues — kein Profilschauen, keine geteilten Playlists,
            keine gemeinsamen Kontakte.
          </p>
          <p>
            Nicht aus Hass — sondern weil jeder Blick auf ihr Profil den
            Kreislauf neu aktiviert und den Heilungsprozess um Wochen
            zurückwirft.
          </p>
        </TextCollapse>

        <CalloutBold
          kind="act"
          title="Defusion: Gedanken als Züge im Bahnhof"
          source="Hayes, Strosahl &amp; Wilson (2006)"
        >
          <p>
            Wenn der Gedanke kommt <em>„Sie war doch meine große Liebe"</em>,
            ist das ein Zug, der einfährt. Du beobachtest ihn, sagst innerlich:{" "}
            <strong>„Da ist der Gedanke, dass sie meine große Liebe war."</strong>{" "}
            — und lässt ihn weiterfahren. Du steigst nicht ein.
          </p>
        </CalloutBold>

        <p className="text-xs italic text-graphite/60">
          Quellen: Hayes, Strosahl &amp; Wilson (2006), <em>ACT</em>; Nestler
          (2005), <em>Nature Neuroscience</em>, 8(11), 1445–1449.
        </p>
      </SectionBlock>

      <DeepDiveIntro
        label="Wenn du tiefer verstehen willst …"
        hint="Optional. Fünf Studien, die das Muster erklären — du musst sie nicht lesen, um zu heilen."
      >
        <SectionBlock kind="deep-dive" title="Fünf Studien, die alles erklären">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            <FlipCard
              icon={Bird}
              color="var(--color-sage)"
              label="Skinner · 1938"
              heading="Operante Konditionierung"
              front="Warum unregelmäßige Belohnung süchtig macht."
              back="Variable Verstärkung erzeugt die hartnäckigste Konditionierung. Eine Taube, die unregelmäßig Futter bekommt, pickt länger als eine, die jedes Mal belohnt wird."
            />
            <FlipCard
              icon={Brain}
              color="var(--color-sage)"
              label="Fisher · 2005"
              heading="Liebe = Kokain im fMRT"
              front="Liebe aktiviert dasselbe Belohnungssystem wie Kokain."
              back="fMRT zeigt: Romantische Liebe aktiviert das ventrale tegmentale Areal — dasselbe System wie Kokain. Trennungsschmerz ist neurochemisch identisch mit Drogen-Entzug."
            />
            <FlipCard
              icon={Link2}
              color="var(--color-sage)"
              label="Dutton · 1993"
              heading="Bindung wegen Schmerz"
              front="Trauma-Bonding entsteht wegen, nicht trotz Schmerz."
              back="Erleichterung nach Bestrafung wirkt stärker als jede konstante Zuneigung. Das ist der Kern jeder pathologischen Bindung."
            />
            <FlipCard
              icon={Brain}
              color="var(--color-sage)"
              label="Langeslag · 2016"
              heading="Negative Reappraisal"
              front="Liebesgefühle lassen sich aktiv herunterregulieren."
              back="Negative Reappraisal erhöht die Aktivierung des medialen präfrontalen Kortex und reduziert die Amygdala-Aktivität messbar — bewusste Neubewertung dämpft Craving."
            />
            <FlipCard
              icon={Flame}
              color="var(--color-sage)"
              label="Grant · 2010"
              heading="Verhaltenssucht = Substanzsucht"
              front="Toxische Liebe erfüllt alle vier Suchtkriterien."
              back="Verhaltenssucht aktiviert dieselben Mechanismen wie Substanzabhängigkeit: Toleranzentwicklung, Entzugssymptome, Kontrollverlust, fortgesetztes Verhalten trotz negativer Konsequenzen."
            />
          </div>
        </SectionBlock>
      </DeepDiveIntro>

      {/* ── Infografik nach dem Deep Dive: Anatomie des toxischen Kreislaufs (80% Breite, Text darunter) ── */}
      <InfoGraphicBlock
        src={traumaBondingInfografik}
        alt="Infografik: Anatomie des toxischen Kreislaufs — fünf Phasen des Trauma-Bondings"
        title="Infografik · Anatomie des toxischen Kreislaufs"
        caption="Die fünf Phasen — Idealisierung · Entwertung · Verwirrung · Versöhnung · erneute Idealisierung — die dein Gehirn in der Sucht halten. Jede Versöhnung erzeugt einen Dopamin-Spike, der die Konditionierung verstärkt. Tap zum Vergrößern."
        aspect="16/9"
      />

      {/* ════════════════ 5 · ÜBUNGEN (4) ════════════════ */}


      {/* ── Übung 1 · Warnsignale erkennen ── */}
      <SectionBlock
        kind="uebung"
        eyebrow="Übung 1 · Meine klarsten Warnsignale"
        title="Welches Signal hat dich am meisten getroffen?"
      >
        <ButtonChoice
          moduleSlug={SLUG}
          storageKey="signal_top"
          label="Wähle das Warnsignal, das du heute am stärksten wiedererkennst:"
          helper="Was du benennen kannst, kann dein Verstand nicht mehr wegrationalisieren."
          options={WARNSIGNALE.map((w) => ({
            value: w.id,
            label: w.label,
            description: w.desc,
          }))}
        />
        <PillCloud
          slug={SLUG}
          storageKey="warnsignale"
          title="Alle Warnsignale, die du erlebt hast"
          subtitle="Mehrfach-Auswahl. Klicke alles an, was dir bekannt vorkommt."
          meta="Name it to tame it"
          accent="terracotta"
          pills={WARNSIGNALE.map((w) => ({ id: w.id, label: w.label }))}
          counterLabel="Warnsignale erkannt"
          emptyHint="Tippe an, was du wiedererkennst."
        />
        <div className="mt-5 space-y-3">
          <p className="text-sm font-semibold text-bordeaux">
            Meine 3 klarsten Warnsignale — in eigenen Worten
          </p>
          <ReflectionField
            slug={SLUG}
            exerciseKey="ws_eigen_1"
            label="Warnsignal 1 — das Klarste, das ich lange nicht sehen wollte:"
            placeholder="z.B. „Wenn ich Nähe wollte, wurde sie kalt …"
            rows={2}
          />
          <ReflectionField
            slug={SLUG}
            exerciseKey="ws_eigen_2"
            label="Warnsignal 2 — ein Muster, das sich immer wiederholte:"
            rows={2}
          />
          <ReflectionField
            slug={SLUG}
            exerciseKey="ws_eigen_3"
            label="Warnsignal 3 — das Zeichen, das mein Körper kannte, bevor mein Verstand es zugab:"
            rows={2}
          />
        </div>
      </SectionBlock>

      {/* ── Übung 2 · Innere Anwältinnen der Sucht ── */}
      <SectionBlock
        kind="uebung"
        eyebrow="Übung 2 · Innere Anwältinnen der Sucht"
        title="Welcher Satz hat dich am längsten gehalten?"
      >
        <p className="text-sm text-graphite/75">
          Welche dieser Sätze hast du gedacht? Tippe eine Karte an — auf der
          Rückseite siehst du den ACT-Reframe, der den Gedanken entwaffnet.
        </p>
        <div className="grid grid-cols-1 gap-2 sm:gap-2.5 sm:grid-cols-2 md:grid-cols-3">
          {RATIONALISIERUNGEN.map((r) => (
            <FlipCard
              key={r.id}
              icon={Brain}
              color="var(--color-mauve)"
              label="Rationalisierung"
              heading={r.label}
              front={r.front}
              back={r.reframe}
            />
          ))}
        </div>
        <ButtonChoice
          moduleSlug={SLUG}
          storageKey="rationalisierung_top"
          label="Welche Rationalisierung hat dich am längsten gehalten?"
          options={RATIONALISIERUNGEN.map((r) => ({
            value: r.id,
            label: r.label,
          }))}
        />
        <Reflection3Step
          slug={SLUG}
          title="Eigene Rationalisierungen sichtbar machen"
          subtitle="Schreib die Sätze auf, mit denen DU dich gehalten hast — ohne Selbstkritik."
          accent="mauve"
          steps={[
            {
              key: "rat_eigene_1",
              label: "Dieser Satz hat mich am längsten gehalten:",
              placeholder: "z.B. „Ohne mich überlebt sie nicht.“",
            },
            {
              key: "rat_eigene_2",
              label: "Diesen Satz hat ein Teil von mir wirklich geglaubt:",
            },
            {
              key: "rat_eigene_3",
              label: "Wenn ich diesen Satz mit ACT-Defusion ansehe, höre ich:",
              placeholder: "„Da ist der Gedanke, dass …“",
            },
          ]}
        />
      </SectionBlock>

      {/* ── Übung 3 · Jackpot-Protokoll ── */}
      <SectionBlock
        kind="uebung"
        eyebrow="Übung 3 · Jackpot-Protokoll"
        title="Mein persönlicher Spielautomaten-Zyklus"
      >
        <JackpotWheel />
        <ButtonChoice
          moduleSlug={SLUG}
          storageKey="jackpot_intensitaet"
          label="Wie stark hat dich der letzte Jackpot-Moment getroffen?"
          options={[
            { value: "leicht", label: "Leicht spürbar" },
            { value: "deutlich", label: "Deutlich spürbar" },
            { value: "stark", label: "Wie ein Schuss" },
            { value: "ueberwaeltigend", label: "Überwältigend" },
          ]}
        />
        <StackedCards
          slug={SLUG}
          storageKey="jackpot_protokoll"
          title="Drei konkrete Jackpot-Momente"
          subtitle="Beschreibe drei Momente — und erkenne dein persönliches Suchtmuster."
          meta="Suchtmuster sichtbar machen"
          accent="terracotta"
          rows={[1, 2, 3].map((n) => ({
            id: `jp${n}`,
            title: `Jackpot-Moment ${n}`,
            fields: [
              {
                key: "kaelte",
                label: "Kälte davor",
                placeholder: "Wie lange? Welche Form? (Schweigen, Distanz…)",
                rows: 3,
              },
              {
                key: "jackpot",
                label: "Der Jackpot",
                placeholder: "Was genau hat sie getan oder gesagt?",
                rows: 3,
              },
              {
                key: "wirkung",
                label: "Wirkung in mir",
                placeholder: "Was hat das in deinem Körper / Kopf ausgelöst?",
                rows: 3,
              },
            ],
          }))}
        />
        <ReflectionField
          slug={SLUG}
          exerciseKey="jackpot_muster"
          label="Was erkennst du in deinem persönlichen Muster?"
          placeholder="z.B. „Meine Hoffnung stieg immer dann, wenn …“"
          rows={3}
        />
      </SectionBlock>

      {/* ── Übung 4 · 4-7-8 Atem — Craving unterbrechen ── */}
      <SectionBlock
        kind="uebung"
        eyebrow="Übung 4 · 4-7-8 Atem"
        title="Wenn der Drang kommt, sie zu kontaktieren — erst atmen, dann entscheiden"
      >
        <p className="text-sm text-graphite/75">
          Vier Sekunden einatmen, sieben halten, acht ausatmen. Der lange
          Ausatem aktiviert den Vagusnerv und schaltet das Craving-Signal
          messbar herunter.
        </p>
        <BreathPacer slug={SLUG} totalCycles={4} />
      </SectionBlock>

      {/* ── Begleit-Meditation (optional, kein Pflicht-Element) ── */}
      <MeditationCard
        title="Lass los — ohne darüber zu reden"
        duration="2 Std"
        source="ChakraTunes / Raphael Kempermann"
        youtubeId="VXrIMaXIpkQ"
      />


      {/* ════════════════ 6 · CHECKLISTE ════════════════ */}
      <SectionBlock kind="checkliste" bare>
        <ChecklistGoals
          slug={SLUG}
          goals={[
            {
              id: "g1",
              text: "Ich verstehe, dass meine Hörigkeit Neurobiologie ist — kein Charakterfehler.",
            },
            {
              id: "g2",
              text: "Ich kann mindestens 3 der 10 Warnsignale in meiner Beziehung klar benennen.",
            },
            {
              id: "g3",
              text: "Ich erkenne mindestens eine Rationalisierung, die mich gehalten hat — und sehe sie heute als Gedanken, nicht als Wahrheit.",
            },
            {
              id: "g4",
              text: "Ich habe meinen persönlichen Jackpot-Zyklus benannt: Kälte → Sehnsucht → Jackpot → Dopamin-Flut.",
            },
            {
              id: "g5",
              text: "Ich verpflichte mich auf konsequente Null-Exposition (kein Profilschauen, keine geteilten Playlists).",
            },
          ]}
        />
      </SectionBlock>
    </article>
  );
}

/**
 * JackpotWheel · Brand-styled SVG des 4-Phasen-Zyklus
 * (Kälte → Sehnsucht → Jackpot → Dopamin → ♾️).
 * Rein dekorativ, keine Persistenz.
 */
function JackpotWheel() {
  return (
    <figure className="mx-auto my-4 w-full max-w-[340px]">
      <div className="relative aspect-square w-full">
        <svg viewBox="0 0 300 300" className="absolute inset-0 h-full w-full">
          <circle
            cx="150"
            cy="150"
            r="120"
            fill="none"
            stroke="color-mix(in oklab, var(--color-graphite) 18%, transparent)"
            strokeWidth="2"
          />
          <defs>
            <marker
              id="jpArrow"
              viewBox="0 0 10 10"
              refX="8"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto"
            >
              <path d="M0,0 L10,5 L0,10" fill="color-mix(in oklab, var(--color-graphite) 38%, transparent)" />
            </marker>
          </defs>
          <path d="M150,30 A120,120 0 0,1 262,105" fill="none" stroke="color-mix(in oklab, var(--color-graphite) 28%, transparent)" strokeWidth="2" markerEnd="url(#jpArrow)" />
          <path d="M262,195 A120,120 0 0,1 195,262" fill="none" stroke="color-mix(in oklab, var(--color-graphite) 28%, transparent)" strokeWidth="2" markerEnd="url(#jpArrow)" />
          <path d="M105,262 A120,120 0 0,1 38,195" fill="none" stroke="color-mix(in oklab, var(--color-graphite) 28%, transparent)" strokeWidth="2" markerEnd="url(#jpArrow)" />
          <path d="M38,105 A120,120 0 0,1 105,38" fill="none" stroke="color-mix(in oklab, var(--color-graphite) 28%, transparent)" strokeWidth="2" markerEnd="url(#jpArrow)" />
        </svg>
        <div className="absolute left-1/2 top-0 -translate-x-1/2">
          <span className="rounded-full border border-bordeaux/30 bg-bordeaux/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.08em] text-bordeaux">
            🧊 Kälte
          </span>
        </div>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1">
          <span className="rounded-full border border-terracotta/30 bg-terracotta/10 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.08em] text-terracotta">
            💔 Sehnsucht
          </span>
        </div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
          <span className="rounded-full border border-mauve/40 bg-mauve/15 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.08em] text-mauve">
            🎰 Jackpot
          </span>
        </div>
        <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1">
          <span className="rounded-full border border-sage/40 bg-sage/15 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.08em] text-sage">
            💊 Dopamin
          </span>
        </div>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <span className="block font-display text-2xl text-graphite/80">♾️</span>
          <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-graphite/55">
            Endlosschleife
          </span>
        </div>
      </div>
      <figcaption className="mt-3 text-center text-xs italic text-graphite/65">
        Der Zyklus wiederholt sich — bis du ihn benennst.
      </figcaption>
    </figure>
  );
}

const WARNSIGNALE: {
  id: string;
  nr: string;
  icon: LucideIcon;
  label: string;
  teaser: string;
  desc: string;
}[] = [
  {
    id: "lovebombing",
    nr: "01",
    icon: Bomb,
    label: "Lovebombing",
    teaser: "Übermaß an Zuneigung — sofort.",
    desc: "Überschwängliche Zuneigung am Anfang erzeugt emotionale Abhängigkeit, bevor das wahre Muster sichtbar wird.",
  },
  {
    id: "hotcold",
    nr: "02",
    icon: Thermometer,
    label: "Hot/Cold",
    teaser: "Heiß. Kalt. Ohne Anlass.",
    desc: "Wechsel zwischen Nähe und Rückzug ohne erkennbaren Grund. Das Unvorhersehbare macht süchtig.",
  },
  {
    id: "gaslighting",
    nr: "03",
    icon: Waves,
    label: "Gaslighting",
    teaser: "„Das war nicht so.“",
    desc: "Deine Wahrnehmung wird systematisch in Frage gestellt. Du beginnst, deiner eigenen Realität zu misstrauen.",
  },
  {
    id: "schweigen",
    nr: "04",
    icon: MessageSquareOff,
    label: "Schweige-Strafe",
    teaser: "Funkstille als Waffe.",
    desc: "Ignorieren oder Blockieren als Reaktion auf Grenzen. Bestrafung ohne Worte.",
  },
  {
    id: "weaponized",
    nr: "05",
    icon: Swords,
    label: "Weaponized Virtue",
    teaser: "Werte werden zur Kontrolle.",
    desc: "Progressive Werte (Therapie-Sprache, Awareness) werden als Kontrollwerkzeug eingesetzt — macht Gaslighting besonders wirksam.",
  },
  {
    id: "isolation",
    nr: "06",
    icon: TreePalm,
    label: "Isolation",
    teaser: "Dein Kreis schrumpft.",
    desc: "Dein Freundes- und Familienkreis wird kleiner — du ziehst dich zurück oder wirst gezielt isoliert.",
  },
  {
    id: "schuld",
    nr: "07",
    icon: RefreshCw,
    label: "Schuldumkehr",
    teaser: "Du bist „das Problem“.",
    desc: "Du wirst für Dinge verantwortlich gemacht, die du nicht kontrollierst. Deine Emotionen werden zur Ursache erklärt.",
  },
  {
    id: "hoovering",
    nr: "08",
    icon: Magnet,
    label: "Hoovering",
    teaser: "Wärme beim Loslassen.",
    desc: "Sobald du gehen willst, kommt die nächste Welle Wärme — das hält dich im Kreislauf gefangen.",
  },
  {
    id: "selbstwert",
    nr: "09",
    icon: BatteryLow,
    label: "Selbstwert-Erosion",
    teaser: "Du fühlst dich kleiner.",
    desc: "Du glaubst, du seist zu viel, zu wenig, zu anstrengend. Du siehst dich schlechter als vor der Beziehung.",
  },
  {
    id: "hoffnung",
    nr: "10",
    icon: Flame,
    label: "Hoffnungssucht",
    teaser: "„Es kann sich noch wenden.“",
    desc: "Du glaubst, alles wird gut — wenn du nur anders wärst oder anders gehandelt hättest.",
  },
];

const RATIONALISIERUNGEN: {
  id: string;
  label: string;
  front: string;
  reframe: string;
}[] = [
  {
    id: "kindheit",
    label: "Sie hatte eine schwere Kindheit",
    front: "„Ich muss sie verstehen — sie hatte es nie leicht.“",
    reframe: "Mitgefühl ersetzt keine Sicherheit. Ihre Geschichte erklärt Verhalten, sie entschuldigt es nicht.",
  },
  {
    id: "guteph",
    label: "In guten Phasen war sie perfekt",
    front: "„Wenn es gut war, war es das Beste, was ich je hatte.“",
    reframe: "Die guten Phasen sind der Jackpot — sie machen den Spielautomaten süchtig, nicht sicher.",
  },
  {
    id: "ichauch",
    label: "Ich war auch nicht immer einfach",
    front: "„Ich habe auch Fehler gemacht — wer bin ich, zu urteilen?“",
    reframe: "Fehler machen ist menschlich. Systematisches Verletzen ist ein Muster. Das ist nicht dasselbe.",
  },
  {
    id: "meintenicht",
    label: "Sie meinte es nicht so",
    front: "„Sie wollte mich nicht verletzen — es ist ihr nur rausgerutscht.“",
    reframe: "Absicht ändert nichts an der Wirkung. Dein Nervensystem reagiert auf das, was passiert ist — nicht auf das, was gemeint war.",
  },
  {
    id: "aufgeben",
    label: "Wer gibt so eine Liebe einfach auf?",
    front: "„Diese Liebe war doch einzigartig.“",
    reframe: "Das Gefühl der Einzigartigkeit ist Dopamin, nicht Bestimmung. Gesunde Liebe fühlt sich nicht wie Überleben an.",
  },
  {
    id: "geduld",
    label: "Ich hätte mehr Geduld haben sollen",
    front: "„Wenn ich nur noch geduldiger gewesen wäre …“",
    reframe: "Geduld heilt nicht das, was nicht heilen will. Es war nie deine Aufgabe, jemanden zu reparieren.",
  },
  {
    id: "aendern",
    label: "Sie ändert sich noch",
    front: "„Beim nächsten Mal wird alles anders.“",
    reframe: "Veränderung ist kein Versprechen, sondern ein Verhaltensbeweis über Zeit. Du hast lange genug gewartet.",
  },
  {
    id: "ohnemich",
    label: "Ohne mich bricht sie zusammen",
    front: "„Ich kann sie doch nicht im Stich lassen.“",
    reframe: "Niemand bricht zusammen, weil eine andere Person Selbstschutz wählt. Ihre Stabilität ist nicht dein Job.",
  },
  {
    id: "allebez",
    label: "Alle Beziehungen sind manchmal so",
    front: "„So schlimm ist das doch nicht — andere Paare streiten auch.“",
    reframe: "Streit ja, systematische Entwertung nein. Vergleich mit gesunden Beziehungen, nicht mit toxischen Normalisierungen.",
  },
  {
    id: "liebenicht",
    label: "Liebe ist nicht immer einfach",
    front: "„Echte Liebe braucht eben Arbeit.“",
    reframe: "Liebe darf anstrengend sein. Sie darf nicht weh tun. Der Unterschied ist deine Sicherheit — körperlich, emotional, psychisch.",
  },
];

/**
 * 5 Hotspots auf der Infografik „Wenn Bindung zur Sucht wird".
 * Positionen sind Schätzungen relativ zum Bild — bei Bedarf nach Sichtprüfung
 * feinjustieren. Inhalte folgen der Diagnose-Säulen-Struktur des Plans.
 */
const DIAGNOSE_HOTSPOTS = [
  {
    id: "skinner",
    x: 22,
    y: 30,
    label: "1 · Verstärkung",
    body: "Intermittierende Verstärkung (Skinner): Unvorhersehbare Belohnung konditioniert stärker als jede konstante Zuneigung. Genau deshalb hängst du an den seltenen guten Momenten — nicht weil sie echt sind, sondern weil sie unberechenbar kommen.",
  },
  {
    id: "vta",
    x: 52,
    y: 38,
    label: "2 · VTA",
    body: "Das Ventrale Tegmentale Areal ist dein interner Spielautomat. Bei Kontakt zu ihr feuert es Dopamin — derselbe Pfad, der bei Kokain anspringt (Fisher, 2005). Liebe und Sucht sind hier neurochemisch nicht zu unterscheiden.",
  },
  {
    id: "dopamin",
    x: 78,
    y: 34,
    label: "3 · Sensitivierung",
    body: "Dopamin-Sensitivierung (Nestler, 2005): Das System wird hyperreaktiv. Schon ein Song, ihr Profilbild, ein Geruch lösen einen vollen Craving-Anfall aus. Das ist kein Rückschlag — das ist Biochemie.",
  },
  {
    id: "cortisol",
    x: 30,
    y: 70,
    label: "4 · Cortisol-Bindung",
    body: "Dutton & Painter (1993): Bindung entsteht WEGEN, nicht trotz des Schmerzes. Die Erleichterung nach Kälte ist so intensiv, dass dein Gehirn die Bestrafung als Teil der Belohnung speichert.",
  },
  {
    id: "praefrontal",
    x: 72,
    y: 70,
    label: "5 · Shutdown",
    body: 'Im Craving fällt der präfrontale Kortex biochemisch aus — der Teil, der „Vernunft" macht. Deshalb hilft kein Vorsatz im Moment des Drangs. Du brauchst ein Protokoll, das vorher steht.',
  },
];
