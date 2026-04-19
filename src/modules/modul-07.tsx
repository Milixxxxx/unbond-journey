import {
  ScrollText,
  Brain,
  Lightbulb,
  Microscope,
  Sparkles,
} from "lucide-react";
import { GlossarTerm } from "@/components/glossar-term";
import { ChapterIntro } from "@/components/chapter-intro";
import {
  Reflection3Step,
  CalloutBold,
  TransformationGoals,
  MeditationCard,
  FlipCard,
} from "@/components/exercise";

const SLUG = "modul-07";

/**
 * MODUL 07 · WLW-Realität & Community
 *
 * Quelle: UNBOND_Final_v5.html · in der Quelldatei als „Schritt 08" gerendert.
 * App-Modul-→Schritt-Mapping (Memory): Modul 07 → Leitdatei-Schritt 08 →
 * YouTube-ID `MYkQ3EU284g` (verifiziert).
 *
 * Roter Faden im Programm:
 *   01 Trauma-Bonding verstehen → 02 Rosa-Brille → 03 No Contact → 04 Trigger →
 *   05 Körper → 06 Suchtmuster brechen → **07 WLW-Realität & Community** →
 *   08 Bindungsmuster → 09 Identität → 10 Kintsugi.
 *
 * Was 07 leistet (was 01–06 NICHT leisten können):
 *   Die ersten sechs Kapitel haben dir die Neurobiologie, das Nervensystem
 *   und die Sucht entzaubert. Aber sie haben so getan, als lebtest du in einem
 *   neutralen Raum. Tust du nicht. Du lebst in einer kleinen, queeren Szene,
 *   in der totaler No Contact oft schlicht logistisch unmöglich ist und in
 *   der das soziale Netz mit ihr verflochten bleibt. Hier kommt das, was
 *   heteronormative Ratgeber komplett übersehen: Small-Pool, U-Hauling,
 *   Weaponized Therapy Speak, Late Bloomer, Flying Monkeys, Legitimations-
 *   druck. Wir bauen daraus eine konkrete Schutz-Architektur:
 *   Szene-Karte (Grün/Gelb/Rot), Grey-Rock-Skript für Zufallsbegegnungen
 *   und das Entkräften des Ersetzbarkeits-Mythos.
 */
export function Modul07() {
  return (
    <article className="space-y-7">
      {/* ── Einleitung mit Keywords ── */}
      <ChapterIntro
        title="Kapitel 07 · WLW-Realität & Community"
        keywords={[
          "Small-Pool-Problem",
          "Fusion / U-Hauling",
          "Weaponized Therapy Speak",
          "Grey Rock",
          "Flying Monkeys",
          "Community Boundaries",
        ]}
      >
        <p>
          Bis hierher hast du dein Nervensystem kennengelernt, deine Sucht
          entlarvt und deine Cues kartiert. Jetzt wird es konkret: Du lebst
          nicht im luftleeren Raum, sondern in einer kleinen Szene. Du wirst
          ihr begegnen. In der queeren Bar. Bei Pride. Auf der WG-Party einer
          gemeinsamen Freundin.
        </p>
        <p>
          Heteronormative Ratgeber tun so, als reichte „blockieren und
          weiterziehen". In WLW-Communities ist das oft schlicht nicht möglich
          — und genau das nutzen toxische Ex-Partnerinnen aus. Dieses Kapitel
          gibt dir die drei Werkzeuge, die du brauchst, wenn echter No Contact
          unmöglich ist: <strong>Szene-Karte</strong> (wo bist du sicher),
          <strong> Grey Rock</strong> (was sagst du, wenn sie vor dir steht)
          und das Entkräften des <strong>Ersetzbarkeits-Mythos</strong>{" "}
          (warum ihre neue Partnerin nichts über deinen Wert aussagt).
        </p>
      </ChapterIntro>

      {/* ── Story · 1:1 aus Quelldatei (Mary/Sandra) ── */}
      <Section
        icon={<ScrollText className="h-4 w-4" />}
        label="Story · Das Szene-Event"
      >
        <div className="glass-card-strong p-5">
          <div className="space-y-3 text-sm leading-relaxed animate-fade-in-stagger">
            <h3 className="font-display text-base font-bold text-bordeaux">
              Mary · Die graue Mauer der Gleichgültigkeit
            </h3>
            <p>
              Erstes queeres Event seit Monaten. Mary hatte ihre Safe Spaces
              lange gemieden – aus Panik vor genau diesem Moment. Die Szene ist
              klein. Zu klein. Kaum hat sie ihr Getränk, passiert das
              Unvermeidliche: Sandra. Im Mittelpunkt, wie immer. Lautes Lachen,
              Kopf zurückgeworfen, demonstrativ nah an ihrer neuen Partnerin.
              Das perfekte Leben, das sie Mary gegenüber nie zeigen konnte.
              Der Schmerz der Auswechselbarkeit trifft wie eine Ohrfeige.
              Sandra spielt ihre Rolle mühelos – während Mary das Gefühl hat,
              noch immer auf dem Boden zu sitzen und Scherben aufzusammeln.
            </p>
            <p>
              Früher hätte dieser Anblick Marys inneres System gesprengt:
              panische Flucht oder krampfhafter Versuch, Sandras Aufmerksamkeit
              zu erregen – nur um sich zu beweisen, noch sichtbar zu sein.
              Genau diese Reaktivität hatte Sandra stets als narzisstisches
              Futter genutzt. Der Impuls, etwas Scharfes zu sagen, auffällig
              laut zu lachen, brennt kurz in Marys Brust.
            </p>
            <p>
              Doch heute bricht sie die Kette.{" "}
              <GlossarTerm termKey="grey-rock">Grey Rock</GlossarTerm>. Als
              Sandras Blick für einen Bruchteil einer Sekunde triumphierend
              herübergleitet, zeigt Mary absolut nichts. Kein Wegsehen, kein
              Zucken, keine gespielte Arroganz – emotional flach,
              undurchdringlich, grau wie Stein. Sandras Blick prallt ab. Mary
              atmet tief, dreht sich ruhig weg und widmet sich ihrem eigenen
              Abend. Sie weigert sich, länger das Publikum für Sandras
              Bühnenshow zu sein.
            </p>
          </div>
        </div>
      </Section>

      {/* ── Diagnose ── */}
      <Section
        icon={<Brain className="h-4 w-4" />}
        label="Diagnose · Warum WLW-Trauma anders funktioniert"
      >
        <CalloutBold
          kind="science"
          title="Die systemische Komplexität queerer Traumata"
          source="Meyer (2003) · Balsam et al. (2011) · Ristock (2002)"
        >
          <p>
            Toxische Beziehungsdynamiken verlaufen in lesbischen, queeren
            Kontexten oft grundlegend anders als in heteronormativen
            Erzählungen. Der zentrale, schmerzhafteste Faktor ist das{" "}
            <strong>Small-Pool-Problem</strong>: Die Community ist
            überschaubar, soziale Netzwerke überschneiden sich massiv. Nach
            einer toxischen Trennung verlierst du oft nicht nur die Partnerin
            — du fühlst dich aus deinem gesamten Safe Space verdrängt. Die
            Ex bleibt als realer Trigger im ohnehin knappen sozialen Raum
            präsent.
          </p>
          <p>
            Hinzu kommt extrem schnelle{" "}
            <GlossarTerm termKey="u-hauling">Fusion (U-Hauling)</GlossarTerm>:
            Was anfangs als magische Verbundenheit romantisiert wird,
            entwickelt sich in einer Trauma-Bindung zur emotionalen Erstickung.
            Die toxische Partnerin nutzt verschwommene Grenzen, um dich glauben
            zu lassen, ihre Stimmungswechsel seien deine Verantwortung. Du
            verlierst nicht nur den Menschen — du verlierst deinen
            psychologischen Umriss.
          </p>
          <p>
            Manipulative Personen in kleinen queeren Communities sind oft
            hochgradig geschickt darin, progressives Vokabular als Waffe zu
            nutzen — <strong>„Weaponized Therapy Speak"</strong>. Sie
            inszenieren sich vor der Szene als reflektiertes Opfer, während
            sie dich subtil isolieren. Im{" "}
            <GlossarTerm termKey="late-bloomer">Late-Bloomer</GlossarTerm>
            -Kontext (spätes Coming-out) wird toxische Intensität fatal mit
            der lang ersehnten queeren Lebenserfahrung verwechselt. Der vierte
            Stressor: <strong>Legitimationsdruck</strong>. Als queeres Paar
            sollst du beweisen, dass eure Liebe „real" ist — und schweigst
            deshalb über das, was nicht stimmt.
          </p>
        </CalloutBold>

        <div className="grid gap-3 sm:grid-cols-2">
          <FlipCard
            emoji="🌊"
            color="var(--color-bordeaux)"
            label="Small-Pool"
            heading="Wenn die Szene zu klein ist"
            front="Eure Bars, eure Leute — alles geteilt."
            back="In WLW-Communities verlierst du nicht nur sie, sondern oft deinen ganzen Safe Space. Das macht totalen No Contact logistisch unmöglich — und genau deshalb brauchst du eine andere Strategie als heteronormative Ratgeber liefern."
          />
          <FlipCard
            emoji="🫂"
            color="var(--color-mauve)"
            label="U-Hauling"
            heading="Fusion in Lichtgeschwindigkeit"
            front="Drittes Date, Schlüsselübergabe."
            back="Was als magische Tiefe gefeiert wird, ist oft beschleunigtes Love Bombing. Die Grenzen lösen sich, dein Umriss verschwimmt mit ihrem — und sie nutzt diese Auflösung, um ihre Schwankungen zu deiner Verantwortung zu machen."
          />
          <FlipCard
            emoji="🎭"
            color="var(--color-bordeaux)"
            label="Weaponized Therapy Speak"
            heading="Pop-Therapie als Waffe"
            front='„Du triggerst meine Trauma-Reaktion."'
            back="Sie nutzt progressives Vokabular, um dich zu beschuldigen und sich vor der Community als reflektiertes Opfer zu inszenieren. Echte Selbstreflexion klingt anders: Sie führt zu Verhaltensänderung, nicht zu rhetorischen Schuldumkehrungen."
          />
          <FlipCard
            emoji="🐒"
            color="var(--color-mauve)"
            label="Flying Monkeys"
            heading="Boten ohne ihr Wissen"
            front="Gemeinsame Freundinnen als Pipeline."
            back="Dritte Personen werden (oft unbewusst) instrumentalisiert: Sie tragen Infos zu ihr, übermitteln Botschaften, halten dich in ihrem Orbit. Du musst sie nicht aussortieren — aber du darfst aufhören, sie mit Material zu füttern."
          />
        </div>
      </Section>

      {/* ── Lösung ── */}
      <Section
        icon={<Lightbulb className="h-4 w-4" />}
        label="Lösung · Energetischer No Contact statt totaler Isolation"
      >
        <div className="rounded-2xl bg-white/70 p-4 text-sm leading-relaxed text-graphite/85 shadow-glass">
          <p>
            Da absoluter No Contact in kleinen Szenen oft unmöglich ist, übst
            du <strong>energetischen No Contact</strong>: Die{" "}
            <GlossarTerm termKey="grey-rock">Grey-Rock-Methode</GlossarTerm>
            {" "}ist kein Angriff, keine Flucht — sie ist der konsequente
            Entzug emotionaler Nahrung. Wenn Begegnungen unvermeidlich sind,
            reagierst du flach, sachlich, langweilig. Weder Ärger, noch
            Sehnsucht, noch betonte Fröhlichkeit. Du wirst zur Wand, an der
            ihre Inszenierung abprallt.
          </p>
          <p className="mt-2">
            Parallel arbeitest du aktiv an{" "}
            <strong>Community Boundaries</strong>: Du kartierst, welche Räume
            für dein Nervensystem gerade sicher sind und welche nicht — und
            du erschaffst dir bewusst neue, toxizitätsfreie Räume. Das ist
            keine Flucht in die Isolation. Das ist die Entscheidung, dass
            deine Heilung Vorrang hat vor szeneinterner Sichtbarkeit.
          </p>
        </div>
      </Section>

      {/* ── Übungen ── */}
      <Section
        icon={<Sparkles className="h-4 w-4" />}
        label="Übungen · Drei Werkzeuge für die Szene"
      >
        <div className="space-y-5">
          {/* Übung 1 · Szene-Karte mit Grün/Gelb/Rot */}
          <Reflection3Step
            slug={SLUG}
            title="Übung 1 · Meine Szene-Karte (Community Boundaries)"
            subtitle="Du planst nicht aus Angst — du planst aus Klarheit. Sortiere deine Räume nach Sicherheit für dein Nervensystem. Das ist deine persönliche Karte; sie darf sich monatlich ändern."
            meta="🗺 Zonen-Mapping · ~10 Min"
            accent="sage"
            steps={[
              {
                key: "scene_green",
                label: "🟢 GRÜN · Sichere Räume — hier triffst du sie garantiert nicht",
                placeholder:
                  'z.B. „Mein Yoga-Studio · Online-LGBTQ-Gruppen · Freundeskreis aus dem Studium · Buchladen X"',
                rows: 3,
              },
              {
                key: "scene_yellow",
                label: "🟡 GELB · Riskante Räume — eine Begegnung ist möglich",
                placeholder:
                  'z.B. „Die queere Bar am Freitag · große Pride-Events · CSD-Demo"',
                rows: 3,
              },
              {
                key: "scene_red",
                label: "🔴 ROT · Meiden — ihr altes Territorium, Flying-Monkey-Zonen",
                placeholder:
                  'z.B. „Ihr Stammlokal · gemeinsame engste Freundeskreise · ihre Stamm-WG-Partys"',
                rows: 3,
              },
            ]}
          />

          {/* Übung 2 · Grey-Rock-Skript */}
          <Reflection3Step
            slug={SLUG}
            title="Übung 2 · Mein Grey-Rock-Protokoll"
            subtitle="Dein Nervensystem braucht in der Schocksituation ein vorgefertigtes Skript. Schreib es jetzt — bevor du sie das nächste Mal siehst, nicht danach."
            meta="🗿 Wenn-Dann-Plan · ~5 Min"
            accent="bordeaux"
            steps={[
              {
                key: "greyrock_body",
                label: "Meine Körperhaltung & mein Gesichtsausdruck werden sein:",
                placeholder:
                  'z.B. „Schultern entspannt, Blick ruhig und fokussiert, keine künstliche Fröhlichkeit, kein angestrengtes Wegsehen."',
                rows: 2,
              },
              {
                key: "greyrock_response",
                label: "Wenn sie mich direkt anspricht, lautet meine Standardantwort:",
                placeholder:
                  '„Hallo. Ich bin gerade im Gespräch." · oder ein schlichtes Nicken ohne Worte.',
                rows: 2,
              },
              {
                key: "greyrock_exit",
                label: "Mein klarer, höflicher Exit-Satz (max. 5 Sekunden):",
                placeholder:
                  '„Ich muss jetzt weiter. Einen schönen Abend." · und dann direkt drehen und gehen.',
                rows: 2,
              },
            ]}
          />

          {/* Übung 3 · Ersetzbarkeits-Mythos & Flying Monkeys */}
          <Reflection3Step
            slug={SLUG}
            title="Übung 3 · Den Ersetzbarkeits-Mythos entlarven"
            subtitle="Die schnelle neue Partnerin sagt nichts über deinen Wert. Sie sagt alles über ihr Muster. Schreib es auf — damit dein Gehirn es endlich glaubt."
            meta="🪞 Reframing · ~15 Min"
            accent="mauve"
            steps={[
              {
                key: "replace_lie",
                label: "Welche Lüge erzählt mir mein Trauma über ihre neue Beziehung?",
                placeholder:
                  'z.B. „Dass die Neue besser ist. Dass sie sich für die Neue endlich ändert. Dass ich nie genug war."',
                rows: 3,
              },
              {
                key: "replace_truth",
                label: "Was sagt ihr schnelles U-Hauling / Weiterziehen WIRKLICH über ihr Muster?",
                placeholder:
                  'z.B. „Sie kann nicht allein sein. Es ist Flucht vor sich selbst. Es ist neues Love-Bombing — die Neue durchläuft jetzt, was ich durchlaufen habe."',
                rows: 3,
              },
              {
                key: "flying_monkeys_strategy",
                label: "Flying Monkeys: Wer könnte instrumentalisiert sein — und was ist meine Schutzstrategie?",
                placeholder:
                  'z.B. „Freundin X erfährt nichts mehr über mein Leben. Wenn sie über Sandra spricht, sage ich ruhig: Ich möchte das nicht hören."',
                rows: 3,
              },
            ]}
          />
        </div>
      </Section>

      {/* ── Deep Dive ── */}
      <Section
        icon={<Microscope className="h-4 w-4" />}
        label="Deep Dive · Soziologische Faktoren queerer Traumata"
      >
        <CalloutBold
          kind="deepdive"
          title="Minority Stress, Boundary Dissolution & die Unsichtbarkeit"
          source="Meyer (2003) · Balsam et al. (2011) · Ristock (2002)"
        >
          <p>
            Meyer (2003) etablierte das <strong>Minority Stress Model</strong>:
            LGBTQ+-Personen sind durch Stigmatisierung chronischem Stress
            ausgesetzt. Dieser konstante externe Druck führt dazu, dass die
            Partnerschaft zur einzigen vermeintlich sicheren Zuflucht wird.
            Erlebt man hier toxisches Verhalten, kollabiert das letzte
            Sicherheitssystem — was den Traumatisierungsgrad signifikant
            erhöht.
          </p>
          <p>
            Balsam et al. (2011) zeigten in Studien zu gleichgeschlechtlichen
            Partnerschaften, dass die tendenzielle{" "}
            <strong>Boundary Dissolution</strong> in weiblichen
            Identifikationsräumen zwar hohes Empathie-Potential birgt, aber bei
            manipulativen Zügen zu vollständiger Identitätsübernahme (Fusion)
            führen kann. Dies erschwert den Ausstieg massiv, da das eigene
            Ich fast unauffindbar ist.
          </p>
          <p>
            Ristock (2002) wies in <em>No More Secrets</em> nach: Gewalt und
            Manipulation in lesbischen Beziehungen bleiben besonders häufig
            unerkannt, weil gesellschaftliche Narrative Frauen nicht als
            Täterinnen konzipieren. Diese Unsichtbarkeit zwingt Betroffene
            in ein doppeltes Schweigen — und macht aktive{" "}
            <strong>Community-Grenzziehung</strong> als Heilungsansatz
            zwingend, nicht optional.
          </p>
        </CalloutBold>
      </Section>

      {/* ── Reflexion ── */}
      <Reflection3Step
        slug={SLUG}
        title="Reflexion · Wo stehst du heute in der Szene?"
        subtitle="Eine ehrliche Standortbestimmung — kein Richtig, kein Falsch."
        meta="🌸 Tiefenfrage · ~5 Min"
        accent="bordeaux"
        steps={[
          {
            key: "szene_now",
            label: "Welcher Raum in deiner queeren Welt fühlt sich gerade am sichersten an — und welcher am unsichersten?",
            placeholder:
              'z.B. „Sicher: meine Online-Bookclub-Gruppe. Unsicher: jeder Abend in der Bar XY."',
            rows: 4,
          },
          {
            key: "szene_legit",
            label: "Wo spürst du den Druck, eure Liebe / euer Leiden vor der Community zu legitimieren — und wem darfst du heute aufhören, etwas zu beweisen?",
            placeholder:
              'z.B. „Vor unseren gemeinsamen Freundinnen. Ich darf aufhören, das Bild der starken Ex zu spielen."',
            rows: 4,
          },
        ]}
      />

      {/* ── Meditation · 1:1 aus Leitdatei (App-07 → Schritt-08) ── */}
      <MeditationCard
        title="Inneres Kind heilen · Einschlaf-Meditation (Glaubenssätze & Scham)"
        duration="3 Std · Begleitende Meditation"
        source="ChakraTunes / Raphael Kempermann · YouTube"
        youtubeId="MYkQ3EU284g"
      />

      {/* ── Transformationsziele ── */}
      <TransformationGoals
        slug={SLUG}
        diagnosisLabel="WLW-Realität · Community Boundaries & Grey Rock"
        goals={[
          {
            id: "g1",
            text: "Ich verstehe die spezifischen Fallstricke (Small-Pool, Fusion, Weaponized Therapy Speak, Flying Monkeys) von WLW-Traumata.",
          },
          {
            id: "g2",
            text: "Ich habe meine Szene-Karte erstellt und kenne meine sicheren grünen Zonen.",
          },
          {
            id: "g3",
            text: "Ich habe meinen Wenn-Dann-Plan (Grey Rock) für Zufallsbegegnungen formuliert — Körper, Antwort, Exit.",
          },
          {
            id: "g4",
            text: "Ich habe den Ersetzbarkeits-Mythos kognitiv entkräftet — ihre neue Partnerin sagt nichts über meinen Wert.",
          },
          {
            id: "g5",
            text: "Ich erkenne Flying Monkeys in meinem Umfeld und habe eine ruhige Schutzstrategie für sie.",
          },
          {
            id: "g6",
            text: "Ich erlaube mir, meinen Safe Space aktiv zu schützen — und weiß, dass das Verlassen toxischer Räume Selbstliebe ist, keine Schwäche.",
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
