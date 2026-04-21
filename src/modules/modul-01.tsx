import { GlossarTerm } from "@/components/glossar-term";
import { ChapterIntro } from "@/components/chapter-intro";
import { SectionBlock } from "@/components/section-block";
import { TextCollapse } from "@/components/text-collapse";
import { ButtonChoice } from "@/components/button-choice";
import { ChecklistGoals } from "@/components/checklist-goals";
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
        <div className="animate-fade-in-stagger space-y-3">
          <p>
            Mary sitzt nachts am Küchentisch und rechnet die nackte Wahrheit
            zusammen: <strong>sechs bis acht Stunden im Monat</strong> — das
            war alles, was Sandra ihr an echter, präsenter Beziehungszeit
            gönnte.
          </p>
          <p>
            Der Rest: Ausreden, vorgeschobener Stress, unsichtbare Mauern.
            Rational ergibt das keinen Sinn. Warum also fühlte Mary, als würde
            sie ohne diese Frau buchstäblich nicht atmen können?
          </p>
          <TextCollapse preview={1} threshold={3}>
            <p>
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
            <p>
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
        title="Was Trauma-Bonding wirklich ist"
      >
        <TextCollapse preview={2} threshold={3}>
          <p>
            Trauma-Bonding ist <strong>keine Schwäche</strong> und kein
            Zeichen mangelnder Intelligenz. Es ist ein neurobiologischer
            Prozess, der durch intermittierende Verstärkung entsteht — den
            unvorhersehbaren Wechsel aus Nähe und Rückzug.
          </p>
          <p>
            Skinner (1938) zeigte: Belohnungen, die unregelmäßig kommen,
            erzeugen die <strong>stärkste und hartnäckigste Konditionierung</strong>
            {" "}überhaupt.
          </p>
          <p>
            Dutton und Painter (1993) beschrieben Trauma-Bonding als Bindung,
            die <strong>nicht trotz, sondern wegen des Schmerzes</strong>{" "}
            entsteht. Der Wechsel zwischen Missbrauch und Zuneigung schafft
            eine pathologische Bindung, die stärker ist als gesunde Liebe.
          </p>
          <p>
            Fisher et al. (2005) ergänzten den biochemischen Beweis:
            romantische Liebe aktiviert dieselben Hirnareale wie Kokainkonsum
            — das ventrale tegmentale Areal, den Nucleus accumbens, das
            gesamte mesolimbische Belohnungssystem.{" "}
            <GlossarTerm termKey="dopamin">Dopamin</GlossarTerm> wird dabei
            nicht durch Belohnung ausgeschüttet, sondern durch die{" "}
            <strong>Erwartung</strong> der Belohnung.
          </p>
        </TextCollapse>
      </SectionBlock>

      {/* ════════════════ 3 · LÖSUNG ════════════════ */}
      <SectionBlock
        kind="loesung"
        title="ACT-Defusion &amp; Dopamin-Reset"
      >
        <TextCollapse preview={2} threshold={3}>
          <p>
            Trauma-Bonding ist neurobiologisch eine Sucht — und jede wirksame
            Suchtbehandlung beginnt damit, den{" "}
            <strong>Konditionierungskreislauf zu unterbrechen</strong>.
          </p>
          <p>
            Die <em>Acceptance and Commitment Therapy</em> bietet dafür die{" "}
            <GlossarTerm termKey="defusion">Defusions-Technik</GlossarTerm>:
            Du lernst, Gedanken und Cravings als mentale Ereignisse zu
            beobachten — als Züge, die durch den Bahnhof fahren — ohne ihnen
            zu folgen oder gegen sie zu kämpfen.
          </p>
          <p>
            Der Dopamin-Reset bedeutet konsequente Null-Exposition: kein
            Profilschauen, keine geteilten Playlists, keine gegenseitigen
            Kontakte. Nicht aus Hass — sondern weil jeder Blick auf ihr Profil
            den Konditionierungskreislauf neu aktiviert.
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
            — und lässt ihn weiterfahren.
          </p>
        </CalloutBold>
      </SectionBlock>

      {/* ════════════════ 4 · DEEP DIVE ════════════════ */}
      <SectionBlock
        kind="deep-dive"
        title="Drei Studien, die alles erklären"
      >
        <div className="grid gap-3 sm:grid-cols-3">
          <FlipCard
            front={<span>Skinner (1938)</span>}
            back={
              <span>
                Operante Konditionierung: Variable Verstärkungspläne erzeugen
                die widerstandsfähigste Konditionierung. Eine Taube, die
                unregelmäßig Futter bekommt, pickt länger als eine, die jedes
                Mal belohnt wird.
              </span>
            }
          />
          <FlipCard
            front={<span>Fisher et al. (2005)</span>}
            back={
              <span>
                fMRT zeigt: Romantische Liebe aktiviert das ventrale
                tegmentale Areal — dasselbe System wie bei Kokain.
                Trennungsschmerz ist neurochemisch identisch mit
                Drogen-Entzug.
              </span>
            }
          />
          <FlipCard
            front={<span>Dutton &amp; Painter (1993)</span>}
            back={
              <span>
                Trauma-Bonding entsteht <em>wegen</em> des Schmerzes, nicht
                trotz. Erleichterung nach Bestrafung wirkt stärker als jede
                konstante Zuneigung.
              </span>
            }
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

const WARNSIGNALE: { id: string; label: string; desc: string }[] = [
  { id: "lovebombing", label: "Lovebombing", desc: "Überschwängliche Zuneigung zu Beginn, die emotionale Abhängigkeit erzeugt." },
  { id: "hotcold", label: "Hot/Cold-Muster", desc: "Abwechselnd liebevoll und abweisend — ohne erkennbaren Anlass." },
  { id: "gaslighting", label: "Gaslighting", desc: "Deine Wahrnehmung wird systematisch in Frage gestellt." },
  { id: "schweigen", label: "Schweigen als Strafe", desc: "Funkstille, Blockieren, Ignorieren als Bestrafung." },
  { id: "weaponized", label: "Weaponized Virtue", desc: "Progressive Werte werden als Kontrollwerkzeug eingesetzt." },
  { id: "isolation", label: "Isolation", desc: "Dein Freundes- und Familienkreis wird kleiner." },
  { id: "schuld", label: "Schuldzuweisung", desc: "Du wirst für Dinge verantwortlich gemacht, die du nicht kontrollieren kannst." },
  { id: "hoovering", label: "Hoovering", desc: "Sobald du loslässt, kommt die nächste Welle der Wärme." },
  { id: "selbstwert", label: "Selbstwert-Erosion", desc: "Du siehst dich selbst schlechter als davor." },
  { id: "hoffnung", label: "Hoffnungssucht", desc: "Du glaubst, alles könnte sich noch wenden — wenn du nur anders wärst." },
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
