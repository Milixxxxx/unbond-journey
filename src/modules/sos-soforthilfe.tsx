import {
  Brain,
  Lightbulb,
  ScrollText,
  Microscope,
  Hand,
  Snowflake,
  Activity,
  Wind,
  Pause,
  Waves,
} from "lucide-react";
import { CollapsibleBox } from "@/components/collapsible-box";
import { GlossarTerm } from "@/components/glossar-term";
import { ZoomableImage } from "@/components/zoomable-image";
import { CrisisBanner } from "@/components/crisis-banner";
import { ChapterIntro } from "@/components/chapter-intro";
import { SectionBlock } from "@/components/section-block";
import { ChecklistGoals } from "@/components/checklist-goals";
import { TextCollapse } from "@/components/text-collapse";
import { DeepDiveIntro } from "@/components/deep-dive-intro";
import { ReflectionField, ReflectionInput } from "@/components/exercise-fields";
import { DailyTracker } from "@/components/exercise/daily-tracker";
import { UrgeSurfWave } from "@/components/exercise/urge-surf-wave";

import {
  Reflection3Step,
  PillCloud,
  MeditationCard,
} from "@/components/exercise";
import { HighLoadDistraction } from "@/components/exercise/high-load-distraction";
import { QuickToolsTrio } from "@/components/quick-tools-trio";
import tippInfografik from "@/assets/tipp-protokoll.png.asset.json";

const SLUG = "sos-soforthilfe";

/**
 * SCHRITT 01 · SOS: Akute Stabilisierung
 * Wenn der präfrontale Kortex offline ist, kannst du nicht denken — du kannst nur überleben.
 *
 * Struktur (Claude-Vorlage):
 *   Hero · Crisis-Banner · Story · Diagnose · Lösung (TIPP) ·
 *   Übungen (TIPP-Notfallplan · Urge Surfing · STOPP · Supermarkt-Distraction) ·
 *   Deep Dive (90-Sek-Regel) · Meditation · Selbst-Monitoring · Notfallkontakte · Checkliste
 *
 * Hinweis: Die akuten Quick-Tools (TIPP, STOPP, 5-4-3-2-1, Urge-Surf, 4-7-8 Atem)
 * leben zusätzlich im globalen SosFloatingButton-Drawer — aus jedem Kapitel erreichbar.
 */
export function SosSoforthilfe() {
  return (
    <article className="space-y-7">
      <ChapterIntro
        title="Schritt 01 · SOS: Akute Stabilisierung"
        keywords={["TIPP-Protokoll", "Amygdala-Hijacking", "90-Sekunden-Regel"]}
        introSentenceLimit={2}
      >
        <p>
          Wenn der präfrontale Kortex offline ist, kannst du nicht denken — du
          kannst nur überleben. Deshalb beginnen wir nicht mit Analyse, sondern
          damit, dein Nervensystem physiologisch aus dem Alarmmodus
          herauszuholen.
        </p>
        <p>
          Dieser Schritt vermittelt dir das evidenzbasierte TIPP-Protokoll aus
          der DBT, konkrete Atemtechniken und Sofortmaßnahmen — anwendbar
          mitten in der Nacht, auf dem Küchenboden, mit zitternden Händen,
          ohne einen einzigen klaren Gedanken fassen zu müssen.
        </p>
      </ChapterIntro>

      {/* Quick-Tools-Trio · 3 Sofort-Werkzeuge direkt unter Hero */}
      <QuickToolsTrio
        tools={[
          {
            icon: <Hand className="h-3.5 w-3.5" />,
            label: "SOS-Stopp",
            text: 'Hand hoch wie ein Stoppschild · laut „STOPP!" · bis 5 zählen, dann eine Ersatzhandlung wählen.',
            tint: "bordeaux",
          },
          {
            icon: <Snowflake className="h-3.5 w-3.5" />,
            label: "Vagus-Reset",
            text: "Gesicht 15–30 Sek. in eiskaltes Wasser (oder Coolpack auf Wangen) — senkt den Puls in Sekunden.",
            tint: "sage",
          },
          {
            icon: <Waves className="h-3.5 w-3.5" />,
            label: "Merke · 90 Sek.",
            text: "Eine Emotionswelle hält biochemisch nur ~90 Sek. — du musst sie nur überstehen, ohne zu handeln.",
            tint: "mauve",
          },
        ]}
      />

      {/* Crisis-Banner ganz oben */}
      <CrisisBanner />

      {/* ════════════════ 1 · STORY ════════════════ */}
      <SectionBlock
        kind="story"
        eyebrow="Story · 3:14 Uhr nachts"
        title="Mary — Die erste Nacht"
      >
        <div className="grid gap-5 sm:grid-cols-[200px_1fr]">
          <ZoomableImage alt="Mary · Die erste Nacht" caption="Mary · Schritt 01" />
          <div className="space-y-3 text-sm leading-relaxed">
            <p>
              Mary sitzt um 3 Uhr nachts auf dem Küchenboden. Ihr Herz rast,
              sie bekommt kaum Luft. Vor dem endgültigen Abbruch hatte Sandra
              sie mit ihrer extremen Ambivalenz schier in den Wahnsinn
              getrieben: Morgens nahm sie noch innig ein Liebeskettchen an und
              sprach von einer gemeinsamen Zukunft, abends machte sie
              plötzlich Schluss — nur um Mary am nächsten Tag ihren Schlüssel
              in einem parfümierten Briefumschlag in den Briefkasten zu
              werfen.
            </p>
            <TextCollapse preview={1} threshold={2}>
              <p>
                Der eigentliche Auslöser für die jetzige Eskalation war ein
                intimer, überaus harmonischer Vormittag. Als Mary — wohlwissend
                um Sandras Muster — erst am nächsten Tag anrief, blockte
                Sandra sofort ab. Als Mary fassungslos fragte, was das soll,
                legte sie einfach auf und blockierte sie überall.
              </p>
              <p>
                Der Schock über diesen ultimativen Verrat lässt Marys Körper
                hyperventilieren. Statt Sandra anzuflehen, stoppt Mary. Sie
                nutzt das TIPP-Protokoll, taucht ihr Gesicht in eiskaltes
                Wasser und zwingt ihr Nervensystem durch tiefe Bauchatmung aus
                der Panik. <strong>Sie schreibt nicht. Sie atmet.</strong>
              </p>
            </TextCollapse>
          </div>
        </div>
      </SectionBlock>

      {/* ════════════════ 2 · DIAGNOSE ════════════════ */}
      <SectionBlock
        kind="diagnose"
        eyebrow="Diagnose · Amygdala-Hijacking"
        title="Was in deinem Körper passiert"
      >
        <p>
          Was Mary erlebt — und was du vielleicht gerade erlebst — hat einen
          Namen:{" "}
          <GlossarTerm termKey="amygdala-hijacking">Amygdala-Hijacking</GlossarTerm>.
          Die Amygdala, das Alarmsystem deines Gehirns, hat das plötzliche
          Schweigen als lebensbedrohliche Situation registriert. In diesem
          Zustand ist dein präfrontaler Kortex buchstäblich offline.
        </p>
        <TextCollapse preview={1} threshold={2}>
          <p>
            Das ist kein Zeichen von Schwäche. Das ist Biologie. Dein
            Nervensystem hat gelernt, dass der Entzug von Aufmerksamkeit und
            Sicherheit eine existenzielle Bedrohung darstellt — weil er in
            dieser Beziehung immer wieder genau das war.
          </p>
          <p>
            Die gute Nachricht: Das Nervensystem lässt sich regulieren. Nicht
            durch Willenskraft, sondern durch gezielte körperliche
            Interventionen, die direkt auf das autonome Nervensystem wirken —
            bevor der Verstand überhaupt eingeschaltet ist.
          </p>
        </TextCollapse>
      </SectionBlock>

      {/* ════════════════ 3 · LÖSUNG · TIPP ════════════════ */}
      <SectionBlock
        kind="loesung"
        eyebrow="Lösung · Das TIPP-Protokoll (DBT)"
        title="Wirkt auf die Physiologie, bevor Kognition möglich ist"
      >
        <p>
          Das TIPP-Protokoll aus der Dialektisch-Behavioralen Therapie
          (Linehan, 1993) ist das wirksamste evidenzbasierte Notfall-Werkzeug
          bei akuter emotionaler Überwältigung — und es ist deshalb so
          effektiv, weil es die Biologie deiner Krise versteht.
        </p>
        <p>
          Neuroanatomin Jill Bolte Taylor (2006) beschrieb, dass eine reine
          biochemische Emotionswelle physiologisch nur{" "}
          <strong>90 Sekunden</strong> dauert — was danach kommt, ist ein
          Gedanke, der die Emotion neu aktiviert. Diese 90 Sekunden sind das
          Ziel: <strong>Du musst sie nur überstehen, ohne zu handeln.</strong>
        </p>

        <div className="mt-2 grid gap-3 sm:grid-cols-2">
          <TippCard
            icon={<Snowflake className="h-4 w-4" />}
            letter="T"
            title="Temperature"
            text="Eiskaltes Wasser ins Gesicht (30 Sek.) aktiviert den Tauchreflex und senkt die Herzfrequenz innerhalb von Sekunden."
          />
          <TippCard
            icon={<Activity className="h-4 w-4" />}
            letter="I"
            title="Intense Exercise"
            text="Kurze, intensive Bewegung (20 Liegestütze, Treppe) metabolisiert Cortisol und Adrenalin im Blut."
          />
          <TippCard
            icon={<Wind className="h-4 w-4" />}
            letter="P"
            title="Paced Breathing"
            text="Langsame Bauchatmung im 4-4-8-Rhythmus aktiviert den Vagusnerv und kippt dich in den parasympathischen Modus."
          />
          <TippCard
            icon={<Pause className="h-4 w-4" />}
            letter="P"
            title="Progressive Relaxation"
            text="Muskelgruppen für 5 Sek. anspannen, dann lösen — entladen körperliche Anspannung systematisch."
          />
        </div>

        {/* TIPP-Infografik · brand-styled HTML statt PNG */}
        <TippProtokollInfografik />


        <p className="mt-2 text-xs italic text-graphite/65">
          Quellen: Linehan, M. M. (1993), <em>DBT Skills Training Manual</em>;
          Taylor, J. B. (2006), <em>My Stroke of Insight</em>.
        </p>
      </SectionBlock>

      {/* ════════════════ 4 · ÜBUNGEN (4) ════════════════ */}

      {/* Übung 1 · TIPP-Notfallplan */}
      <SectionBlock
        kind="uebung"
        eyebrow="Übung 1 · Mein TIPP-Notfallplan"
        title="Schreibe jetzt — nicht in der Krise — wie du jede Phase umsetzt"
      >
        <p className="text-sm text-graphite/75">
          Wird automatisch gespeichert. In der nächsten Krise hast du diesen
          Plan griffbereit — ohne nachdenken zu müssen.
        </p>
        <Reflection3Step
          slug={SLUG}
          title="Mein persönlicher Notfallplan"
          accent="bordeaux"
          steps={[
            {
              key: "tipp_t",
              label: "T · Temperature — Wo ist bei mir kaltes Wasser verfügbar?",
              placeholder: "z.B. Waschbecken im Bad, Eiswürfel im Tiefkühler …",
            },
            {
              key: "tipp_i",
              label: "I · Intense Exercise — Welche Bewegung kann ich sofort machen?",
              placeholder: "z.B. 20 Liegestütze, Treppe im Haus …",
            },
            {
              key: "tipp_p1",
              label: "P · Paced Breathing — Mein Atemrhythmus",
              placeholder: "z.B. 4-4-8, 5 Minuten, mit Timer …",
            },
          ]}
        />
        <ReflectionField
          slug={SLUG}
          exerciseKey="tipp_p2"
          label="P · Progressive Relaxation — Wann und wo übe ich das?"
          placeholder="z.B. Abends im Bett, bevor ich einschlafe …"
        />
      </SectionBlock>

      {/* Übung 2 · Urge Surfing */}
      <SectionBlock
        kind="uebung"
        eyebrow="Übung 2 · Urge Surfing"
        title="Den Impuls reiten — wie eine Welle"
      >
        <p className="text-sm text-graphite/80">
          Wenn der Drang kommt, ihr zu schreiben: Beobachte ihn wie eine
          Welle. Er steigt, erreicht seinen Höhepunkt — und fällt wieder ab.
          Du musst nicht handeln. Du musst nur warten.
        </p>
        <UrgeSurfWave totalSeconds={90} accent="bordeaux" />
        <Reflection3Step
          slug={SLUG}
          title="Urge-Surf-Reflexion"
          accent="bordeaux"
          steps={[
            {
              key: "urge_koerper",
              label: "Wie fühlt sich der Impuls in meinem Körper an?",
              placeholder: "z.B. Enge in der Brust, Kribbeln in den Fingern …",
            },
            {
              key: "urge_stattdessen",
              label: "Was tue ich stattdessen, wenn die Welle kommt?",
              placeholder: "z.B. TIPP-T sofort, dann 5 Min. spazieren …",
            },
            {
              key: "urge_lernen",
              label: "Was nehme ich aus dieser Übung mit?",
              placeholder: "z.B. Die Welle ist immer wieder abgeklungen, ohne dass ich etwas tun musste …",
            },
          ]}
        />
      </SectionBlock>

      {/* Übung 3 · STOPP-Technik */}
      <SectionBlock
        kind="uebung"
        eyebrow="Übung 3 · Die STOPP-Technik"
        title="Den Moment zwischen Impuls und Reaktion erweitern"
      >
        <p className="text-sm text-graphite/80">
          Die STOPP-Technik aus der Verhaltenstherapie unterbricht impulsive
          Reaktionen, bevor sie zur Handlung werden.{" "}
          <strong>Wichtig:</strong> Übe sie zuerst in ruhigen Momenten — je
          öfter du sie im Alltag trainierst, desto zuverlässiger greift sie in
          der Krise.
        </p>
        <CollapsibleBox title="So funktioniert es">
          <p>
            Setze dich hin und stell dir vor, du willst ihr gerade schreiben.
            Hebe die Hand wie ein Stoppschild. Sage laut: „STOPP!" Zähle bis
            5. Wähle dann eine Ersatzhandlung.{" "}
            <strong>Wiederhole die Übung 3× am Stück.</strong>
          </p>
        </CollapsibleBox>
        <PillCloud
          slug={SLUG}
          storageKey="stopp_ersatzhandlungen"
          title="Meine Ersatzhandlungen"
          subtitle="Klicke alle an, die du dir vorstellen kannst — oder ergänze weiter unten."
          meta="Vor-Auswahl trainiert das Gehirn"
          accent="bordeaux"
          pills={ERSATZHANDLUNGEN.map((e) => ({ id: e.id, label: e.label }))}
          counterLabel="Ersatzhandlungen gewählt"
          emptyHint="Tippe an, was du dir merken willst."
        />
        <ReflectionField
          slug={SLUG}
          exerciseKey="stopp_reflexion"
          label="Mein STOPP-Moment: Beschreibe, wann du es geübt hast."
          placeholder="z.B. Ich wollte ihr schreiben. Ich habe STOPP gesagt, geatmet und dann meiner Freundin geschrieben …"
        />
      </SectionBlock>

      {/* Übung 4 · High-Load Distraction */}
      <SectionBlock
        kind="uebung"
        eyebrow="Übung 4 · High-Load Distraction"
        title="Supermarkt-Übung — Working-Memory-Overload"
      >
        <p className="text-sm text-graphite/80">
          Dein Arbeitsgedächtnis gleichzeitig mit drei kognitiv anspruchsvollen
          Aufgaben überlasten — dann hat es schlicht keine Kapazität mehr für
          obsessive Gedanken an die Ex.
        </p>
        <HighLoadDistraction />
        <CollapsibleBox title="Warum das funktioniert">
          <p>
            Das Arbeitsgedächtnis hat eine begrenzte Kapazität. Wenn es mit
            kognitiv anspruchsvollen Aufgaben zu 100 % ausgelastet ist, fehlt
            buchstäblich der neuronale Raum für obsessive Gedanken. Working
            Memory Overload ist eine klinisch validierte Technik aus der DBT
            (Linehan, 1993).
          </p>
        </CollapsibleBox>
      </SectionBlock>

      {/* ════════════════ 5 · DEEP DIVE ════════════════ */}
      <DeepDiveIntro
        label="Wenn du tiefer verstehen willst …"
        hint="Optional. Die Neurobiologie der 90-Sekunden-Welle."
      >
        <SectionBlock
          kind="deep-dive"
          eyebrow="Deep Dive · Die 90-Sekunden-Regel"
          title="Die Neurobiologie der Emotion (Bolte Taylor, 2006)"
        >
          <p>
            Neuroanatomin Jill Bolte Taylor beschrieb, dass eine Emotion — die
            reine biochemische Reaktion im Körper — nur 90 Sekunden dauert.
            Was danach kommt, ist kein Gefühl mehr, sondern ein Gedanke, der
            die Emotion neu aktiviert. Das bedeutet: Wenn du 90 Sekunden lang
            nicht auf den Impuls reagierst, ist die ursprüngliche Welle vorbei.
          </p>
          <p>
            Das TIPP-Protokoll nutzt genau dieses Fenster. Kaltes Wasser
            aktiviert den Tauchreflex und senkt die Herzfrequenz innerhalb von
            Sekunden. Intensive Bewegung metabolisiert Cortisol und Adrenalin.
          </p>
          <p className="text-xs italic text-graphite/65">
            Quellen: Linehan (1993), <em>DBT Skills Training Manual</em> ·
            Taylor (2006), <em>My Stroke of Insight</em> · Fisher et al.
            (2005), <em>Romantic Love: An fMRI Study</em>.
          </p>
        </SectionBlock>
      </DeepDiveIntro>

      {/* ════════════════ 6 · MEDITATION ════════════════ */}
      <MeditationCard
        title="Nervensystem beruhigen & Cortisol senken — Stressabbau"
        duration="2 Std"
        source="ChakraTunes / Raphael Kempermann"
        youtubeId="v9XmIgvP0Wc"
      />

      {/* ════════════════ 7 · BEGLEIT-WERKZEUGE ════════════════ */}
      <SectionBlock
        kind="uebung"
        eyebrow="Begleitend · Selbst-Monitoring"
        title="Tägliches Nervensystem-Tracking"
      >
        <p className="text-sm text-graphite/80">
          Kabat-Zinn (1990) zeigte: Die bloße Beobachtung eines Zustands —
          ohne ihn verändern zu müssen — aktiviert den präfrontalen Kortex und
          senkt die Amygdala-Reaktivität. Trage täglich drei Werte ein: Schlaf,
          Körperspannung, Kontakt-Drang.
        </p>
        <DailyTracker slug={SLUG} />
      </SectionBlock>

      <SectionBlock
        kind="uebung"
        eyebrow="Begleitend · Notfall-Kontaktliste"
        title="Drei Menschen, drei Funktionen — jetzt eintragen"
      >
        <p className="text-sm">
          Trage jetzt — nicht in der Krise — mindestens eine Person pro
          Kategorie ein. Diese Liste kommt ans Handy und an den Kühlschrank.
        </p>
        <ReflectionInput
          slug={SLUG}
          exerciseKey="kontakt_a"
          label="💛 A · Wärme — jemand, der zuhört und nicht urteilt"
          placeholder="Name & Telefonnummer"
        />
        <ReflectionInput
          slug={SLUG}
          exerciseKey="kontakt_b"
          label="🧩 B · Struktur — jemand, der dir hilft, den Tag zu planen"
          placeholder="Name & Telefonnummer"
        />
        <ReflectionInput
          slug={SLUG}
          exerciseKey="kontakt_c"
          label="🩺 C · Professionell — Therapeutin oder Krisentelefon"
          placeholder="z.B. Telefonseelsorge 0800 111 0 111"
        />
        <p className="rounded-xl border-l-4 border-mauve bg-mauve/8 p-3 text-xs leading-snug">
          <strong>Du hast nicht drei verschiedene Personen?</strong> Eine
          einzige reicht — sie sollte nur ein wenig Einblick in die Thematik
          (Trauma-Bonding) haben, damit sie dich nicht mit „Du übertreibst"
          zurück in den Strudel zieht. Wenn niemand verfügbar ist, trag unter
          A und B die Telefonseelsorge ein — 24/7 ohne Wartezeit.
        </p>
      </SectionBlock>

      {/* ════════════════ 8 · CHECKLISTE ════════════════ */}
      <SectionBlock kind="checkliste" bare>
        <ChecklistGoals
          slug={SLUG}
          goals={[
            { id: "g1", text: "Ich kenne das TIPP-Protokoll und kann es im Notfall anwenden." },
            { id: "g2", text: "Ich verstehe, dass mein Amygdala-Hijacking eine biologische Reaktion ist — kein Zeichen von Schwäche." },
            { id: "g3", text: "Ich habe meinen persönlichen TIPP-Notfallplan ausgefüllt." },
            { id: "g4", text: "Ich habe Urge Surfing oder die STOPP-Technik mindestens einmal ausprobiert." },
            { id: "g5", text: "Ich weiß: Eine Emotionswelle klingt nach 90 Sekunden ab — ich muss sie nur überstehen, ohne zu handeln." },
          ]}
        />
      </SectionBlock>
    </article>
  );
}

/* ─── Kleine TIPP-Karte ─── */
function TippCard({
  icon,
  letter,
  title,
  text,
}: {
  icon: React.ReactNode;
  letter: string;
  title: string;
  text: string;
}) {
  return (
    <div className="flex gap-3 rounded-xl border-l-4 border-bordeaux bg-white/70 p-3.5">
      <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full bg-bordeaux/10 font-display text-base font-extrabold text-bordeaux">
        {letter}
      </div>
      <div>
        <div className="mb-0.5 flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-bordeaux">
          {icon}
          {title}
        </div>
        <p className="text-sm leading-relaxed text-graphite/90">{text}</p>
      </div>
    </div>
  );
}

const ERSATZHANDLUNGEN = [
  { id: "freundin", label: "Freundin anrufen" },
  { id: "spaziergang", label: "5 Min. spazieren gehen" },
  { id: "kaltes_wasser", label: "Kaltes Wasser ins Gesicht" },
  { id: "musik", label: "Lautstarke Lieblings-Playlist" },
  { id: "journal", label: "Ins Journal schreiben" },
  { id: "dusche", label: "Kalt duschen" },
  { id: "putzen", label: "Etwas konkret aufräumen" },
  { id: "atem", label: "4-7-8 Atem (4 Zyklen)" },
  { id: "sport", label: "20 Liegestütze / Treppe" },
  { id: "meditation", label: "Geführte Meditation starten" },
];
