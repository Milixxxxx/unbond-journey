import { useState } from "react";
import { GlossarTerm } from "@/components/glossar-term";
import { ChapterIntro } from "@/components/chapter-intro";
import { SectionBlock } from "@/components/section-block";
import { TextCollapse } from "@/components/text-collapse";
import { ButtonChoice } from "@/components/button-choice";
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
      {/* ── Einleitung (3 Sätze max) ── */}
      <ChapterIntro
        title="Kapitel 01 · Trauma-Bonding verstehen"
        keywords={[
          "Intermittierende Verstärkung",
          "Dopamin-Achterbahn",
          "Spielautomaten-Effekt",
        ]}
      >
        <p>
          Was du fühlst, ist keine zu große Liebe — es ist Biochemie. Dein
          Gehirn wurde auf einen Spielautomaten konditioniert, und
          Spielautomaten gewinnen immer.
        </p>
      </ChapterIntro>

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
                "rounded-full border px-3 py-1 text-xs font-medium transition-all",
                perspektive === opt.v
                  ? "border-cream/80 bg-cream/15 text-cream"
                  : "border-cream/25 bg-transparent text-cream/65 hover:border-cream/50 hover:text-cream/85",
              )}
            >
              {opt.l}
            </button>
          ))}
        </div>

        <div className="animate-fade-in-stagger space-y-3">
          <p className={dim("mary")}>
            Mary sitzt nachts am Küchentisch und rechnet die nackte Wahrheit
            zusammen: <strong>sechs bis acht Stunden im Monat</strong> — das
            war alles, was Sandra ihr an echter, präsenter Beziehungszeit
            gönnte.
          </p>
          <p className={dim("sandra")}>
            Der Rest: Ausreden, vorgeschobener Stress, unsichtbare Mauern.
            Rational ergibt das keinen Sinn. Warum also fühlte Mary, als würde
            sie ohne diese Frau buchstäblich nicht atmen können?
          </p>
          <TextCollapse preview={1} threshold={3}>
            <p className={dim("mary")}>
              Die Antwort trifft sie wie ein Schlag, als sie zum ersten Mal
              über{" "}
              <GlossarTerm termKey="intermittierende-verstaerkung">
                intermittierende Verstärkung
              </GlossarTerm>{" "}
              stolpert. Sandra war kein sicherer Hafen — sie war ein kaputter
              Spielautomat. Nach wochenlangem emotionalem Verhungern warf er
              plötzlich den Jackpot aus: ein Blick absoluter Liebe, ein
              intimes Versprechen, ein Abend leidenschaftlicher Nähe.
            </p>
            <p className={dim("sandra")}>
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
        </div>
      </SectionBlock>

      {/* ════════════════ 2 · DIAGNOSE ════════════════ */}
      <SectionBlock
        kind="diagnose"
        eyebrow="Diagnose · Was Trauma-Bonding wirklich ist"
        title="Neurobiologie der toxischen Bindung"
      >
        <TextCollapse preview={2} threshold={3}>
          <p>
            Trauma-Bonding ist <strong>keine Schwäche</strong> und kein
            Zeichen mangelnder Intelligenz. Es ist ein neurobiologischer
            Prozess, der durch{" "}
            <GlossarTerm termKey="intermittierende-verstaerkung">
              intermittierende Verstärkung
            </GlossarTerm>{" "}
            entsteht — den unvorhersehbaren Wechsel aus Nähe und Rückzug.
            Skinner (1938) zeigte: Belohnungen, die unregelmäßig und
            unvorhersehbar kommen, erzeugen die <strong>stärkste und
            hartnäckigste Konditionierung</strong> überhaupt.
          </p>
          <p>
            Fisher et al. (2005) zeigten mittels fMRT, dass romantische Liebe
            dieselben Hirnareale aktiviert wie Kokainkonsum. Bei
            Trauma-Bonding wird dieses System besonders stark konditioniert:
            Das Gehirn lernt, dass auf Schmerz Erleichterung folgt — und
            beginnt, den Schmerz selbst als Teil des Belohnungszyklus zu
            antizipieren.
          </p>
          <p>
            Dutton und Painter (1993) beschrieben Trauma-Bonding als Bindung,
            die <strong>nicht trotz, sondern wegen des Schmerzes</strong>{" "}
            entsteht. Der Wechsel zwischen Missbrauch und Zuneigung schafft
            eine pathologische Bindung, die stärker ist als gesunde Liebe.
            Das ist der Spielautomat, an dem Mary saß — und an dem du
            vielleicht auch sitzt.
          </p>
        </TextCollapse>

        {/* TODO: Infografik „Neurobiologie der toxischen Liebe" hier einsetzen
            (Caption: VTA als Spielautomat · Trennungsschmerz = Kokain-Entzug · Vagus-Reset & No Contact als med. Protokoll) */}
      </SectionBlock>

      {/* ── 10 Warnsignale als interaktive FlipCards ── */}
      <SectionBlock
        kind="diagnose"
        eyebrow="⚠️ Die 10 Warnsignale toxischer Bindung"
        title="Tippe eine Karte an — sieh die Definition"
      >
        <p className="text-sm text-graphite/75">
          Vorderseite: Name. Rückseite: was wirklich dahintersteckt. Was du
          benennen kannst, kann dein Verstand nicht mehr wegrationalisieren.
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {WARNSIGNALE.map((w) => (
            <FlipCard
              key={w.id}
              emoji={w.emoji}
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
        eyebrow="💡 Lösung · ACT-Defusion & Dopamin-Reset"
        title="Den Konditionierungskreislauf unterbrechen"
      >
        <TextCollapse preview={2} threshold={3}>
          <p>
            <strong>Trauma-Bonding ist neurobiologisch eine Sucht</strong> —
            und jede wirksame Suchtbehandlung beginnt nicht damit, die Droge
            zu bewerten, sondern damit, den Konditionierungskreislauf selbst
            zu unterbrechen.
          </p>
          <p>
            Die <em>Acceptance and Commitment Therapy</em> (ACT, Hayes,
            Strosahl &amp; Wilson, 2006) bietet dafür die{" "}
            <GlossarTerm termKey="defusion">Defusions-Technik</GlossarTerm>:
            Du lernst, Gedanken und Cravings als mentale Ereignisse zu
            beobachten — als Züge, die durch den Bahnhof fahren — ohne ihnen
            zu folgen oder gegen sie zu kämpfen.
          </p>
          <p>
            Parallel dazu beschreibt die Suchtforschung (Nestler, 2005) das
            Konzept der <strong>Dopamin-Sensitivierung</strong>: Das
            Belohnungssystem wird durch intermittierende Verstärkung
            hyperreaktiv und reagiert auf kleinste Hinweisreize — ein Like,
            ein Emoji, ein gemeinsames Lied — mit unverhältnismäßig starken
            Cravings.
          </p>
          <p>
            <strong>Der Dopamin-Reset bedeutet daher: konsequente
            Null-Exposition gegenüber diesen Micro-Cues.</strong>
          </p>
          <ul className="ml-5 list-disc space-y-1">
            <li>Kein Profilschauen</li>
            <li>Keine geteilten Playlists</li>
            <li>Keine gegenseitigen Kontakte</li>
          </ul>
          <p>
            Nicht aus Hass — sondern weil jeder Blick auf ihr Profil den
            Konditionierungskreislauf neu aktiviert und den Heilungsprozess
            um Wochen zurückwirft.
          </p>
          <p>
            Defusion und Dopamin-Reset zusammen erlauben dir, das Suchtmuster
            nüchtern zu betrachten: nicht als Liebesbeweis, sondern als{" "}
            <strong>neurobiologisches Muster, das du durch konsequentes
            Nicht-Handeln und bewusstes Beobachten entlernen kannst.</strong>
          </p>
        </TextCollapse>

        <CalloutBold
          kind="act"
          title="Defusion: Gedanken als Züge im Bahnhof"
          source="Hayes, Strosahl &amp; Wilson (2006)"
        >
          <p>
            Wenn der Gedanke kommt <em>„Sie war doch meine große Liebe"</em>,
            ist das ein Zug, der in deinen Bahnhof einfährt. Du beobachtest
            ihn, sagst innerlich:{" "}
            <strong>„Da ist der Gedanke, dass sie meine große Liebe war."</strong>{" "}
            — und lässt ihn weiterfahren. Du steigst nicht ein. Du
            argumentierst nicht. Du wartest auf den nächsten Zug.
          </p>
        </CalloutBold>

        <p className="mt-2 text-xs italic text-graphite/65">
          Quelle: Hayes, S. C., Strosahl, K. D., &amp; Wilson, K. G. (2006).{" "}
          <em>Acceptance and Commitment Therapy</em>. Guilford Press; Nestler,
          E. J. (2005). Is there a common molecular pathway for addiction?{" "}
          <em>Nature Neuroscience</em>, 8(11), 1445–1449.
        </p>
      </SectionBlock>

      {/* ════════════════ 4 · DEEP DIVE ════════════════ */}
      <SectionBlock
        kind="deep-dive"
        title="Drei Studien, die alles erklären"
      >
        <div className="grid gap-3 sm:grid-cols-3">
          <FlipCard
            emoji="🐦"
            color="var(--color-sage)"
            label="Skinner · 1938"
            heading="Operante Konditionierung"
            front="Warum unregelmäßige Belohnung süchtig macht."
            back="Variable Verstärkungspläne erzeugen die widerstandsfähigste Konditionierung. Eine Taube, die unregelmäßig Futter bekommt, pickt länger als eine, die jedes Mal belohnt wird."
          />
          <FlipCard
            emoji="🧠"
            color="var(--color-sage)"
            label="Fisher et al. · 2005"
            heading="Liebe = Kokain im fMRT"
            front="Romantische Liebe aktiviert dasselbe Areal wie Kokain."
            back="fMRT zeigt: Romantische Liebe aktiviert das ventrale tegmentale Areal — dasselbe System wie bei Kokain. Trennungsschmerz ist neurochemisch identisch mit Drogen-Entzug."
          />
          <FlipCard
            emoji="🔗"
            color="var(--color-sage)"
            label="Dutton & Painter · 1993"
            heading="Bindung wegen Schmerz"
            front="Trauma-Bonding entsteht wegen, nicht trotz des Schmerzes."
            back="Erleichterung nach Bestrafung wirkt stärker als jede konstante Zuneigung. Das ist der Kern jeder pathologischen Bindung."
          />
        </div>
      </SectionBlock>

      {/* ════════════════ 5 · ÜBUNGEN (3) ════════════════ */}

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
          meta="🧠 Name it to tame it"
          accent="terracotta"
          pills={WARNSIGNALE.map((w) => ({ id: w.id, label: w.label }))}
          counterLabel="Warnsignale erkannt"
          emptyHint="Tippe an, was du wiedererkennst."
        />
      </SectionBlock>

      {/* ── Übung 2 · Innere Anwältinnen der Sucht ── */}
      <SectionBlock
        kind="uebung"
        eyebrow="Übung 2 · Innere Anwältinnen der Sucht"
        title="Welcher Satz hat dich am längsten gehalten?"
      >
        <ButtonChoice
          moduleSlug={SLUG}
          storageKey="rationalisierung_top"
          label="Wähle die Rationalisierung, die du am häufigsten gedacht hast:"
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
          meta="🎰 Suchtmuster sichtbar machen"
          accent="terracotta"
          rows={[1, 2, 3].map((n) => ({
            id: `jp${n}`,
            title: `Jackpot-Moment ${n}`,
            fields: [
              {
                key: "kaelte",
                label: "🧊 Kälte davor",
                placeholder: "Wie lange? Welche Form? (Schweigen, Distanz…)",
                rows: 3,
              },
              {
                key: "jackpot",
                label: "🎰 Der Jackpot",
                placeholder: "Was genau hat sie getan / gesagt?",
                rows: 3,
              },
              {
                key: "wirkung",
                label: "💊 Wirkung in mir",
                placeholder: "Was hat das in deinem Körper / Kopf ausgelöst?",
                rows: 3,
              },
            ],
          }))}
        />
      </SectionBlock>

      {/* ── Begleit-Meditation (optional, kein Pflicht-Element) ── */}
      <MeditationCard
        title="Nervensystem beruhigen &amp; Cortisol senken"
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

const WARNSIGNALE: {
  id: string;
  nr: string;
  emoji: string;
  label: string;
  teaser: string;
  desc: string;
}[] = [
  {
    id: "lovebombing",
    nr: "01",
    emoji: "💣",
    label: "Lovebombing",
    teaser: "Überschwängliche Zuneigung zu Beginn.",
    desc: "Überschwängliche Zuneigung zu Beginn, die eine emotionale Abhängigkeit erzeugt, bevor das wahre Muster sichtbar wird.",
  },
  {
    id: "hotcold",
    nr: "02",
    emoji: "🌡️",
    label: "Hot/Cold-Muster",
    teaser: "Abwechselnd liebevoll und abweisend — ohne Anlass.",
    desc: "Abwechselnd liebevoll und abweisend — ohne erkennbaren Anlass. Das Unvorhersehbare ist das Suchterzeugende.",
  },
  {
    id: "gaslighting",
    nr: "03",
    emoji: "🌀",
    label: "Gaslighting",
    teaser: "Deine Wahrnehmung wird in Frage gestellt.",
    desc: "Deine Wahrnehmung wird systematisch in Frage gestellt. Du beginnst, deiner eigenen Realität zu misstrauen.",
  },
  {
    id: "schweigen",
    nr: "04",
    emoji: "🤐",
    label: "Schweigen als Strafe",
    teaser: "Funkstille als emotionale Bestrafung.",
    desc: "Funkstille, Blockieren, Ignorieren als Reaktion auf Grenzen oder Konflikte. Emotionale Bestrafung ohne Worte.",
  },
  {
    id: "weaponized",
    nr: "05",
    emoji: "⚔️",
    label: "Weaponized Virtue",
    teaser: "Progressive Werte als Kontrollwerkzeug.",
    desc: "Progressive Werte werden als Kontrollwerkzeug eingesetzt. Macht Gaslighting besonders wirksam.",
  },
  {
    id: "isolation",
    nr: "06",
    emoji: "🏝️",
    label: "Isolation",
    teaser: "Dein Kreis wird kleiner.",
    desc: "Dein Freundes- und Familienkreis wird kleiner. Du ziehst dich zurück oder wirst von ihr isoliert.",
  },
  {
    id: "schuld",
    nr: "07",
    emoji: "🪞",
    label: "Schuldzuweisung",
    teaser: "Deine Emotionen sind „das Problem“.",
    desc: "Du wirst für Dinge verantwortlich gemacht, die du nicht kontrollieren kannst. Deine Emotionen sind das Problem.",
  },
  {
    id: "hoovering",
    nr: "08",
    emoji: "🧲",
    label: "Hoovering",
    teaser: "Wärme genau dann, wenn du gehen willst.",
    desc: "Sobald du anfängst loszulassen, kommt die nächste Welle der Wärme — gerade dann, wenn du kurz davor warst, wirklich zu gehen.",
  },
  {
    id: "selbstwert",
    nr: "09",
    emoji: "🪫",
    label: "Selbstwert-Erosion",
    teaser: "Du siehst dich schlechter als davor.",
    desc: "Du siehst dich selbst schlechter als davor. Du glaubst, du seist zu viel, zu wenig, zu anstrengend.",
  },
  {
    id: "hoffnung",
    nr: "10",
    emoji: "🕯️",
    label: "Hoffnungssucht",
    teaser: "Du glaubst, es könnte sich noch wenden.",
    desc: "Du glaubst tief im Inneren, dass sich alles noch wenden könnte — wenn du nur anders wärst oder anders gehandelt hättest.",
  },
];

const RATIONALISIERUNGEN = [
  { id: "kindheit", label: "Sie hatte eine schwere Kindheit" },
  { id: "guteph", label: "In guten Phasen war sie perfekt" },
  { id: "ichauch", label: "Ich war auch nicht immer einfach" },
  { id: "meintenicht", label: "Sie meinte es nicht so" },
  { id: "aufgeben", label: "Wer gibt so eine Liebe einfach auf?" },
  { id: "geduld", label: "Ich hätte mehr Geduld haben sollen" },
  { id: "aendern", label: "Sie ändert sich noch" },
  { id: "ohnemich", label: "Ohne mich bricht sie zusammen" },
  { id: "allebez", label: "Alle Beziehungen sind manchmal so" },
  { id: "liebenicht", label: "Liebe ist nicht immer einfach" },
];
