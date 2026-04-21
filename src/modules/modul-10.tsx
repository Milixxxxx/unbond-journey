import {
  ScrollText,
  Brain,
  Lightbulb,
  Microscope,
  Sparkles,
  Quote,
  HeartHandshake,
} from "lucide-react";
import { GlossarTerm } from "@/components/glossar-term";
import { ChapterIntro } from "@/components/chapter-intro";
import { BonusGateway } from "@/components/bonus-gateway";
import {
  Reflection3Step,
  CalloutBold,
  TransformationGoals,
  MeditationCard,
  LikertScale,
  KintsugiVase,
  KintsugiManifest,
  FlipCard,
} from "@/components/exercise";

const SLUG = "modul-10";

/**
 * MODUL 10 · Kintsugi · Posttraumatisches Wachstum
 *
 * Quelle: UNBOND_Final_v5.html — Schritt 10 / Finale „Abschluss · Kintsugi"
 * (Zeilen 4060-4360 sowie 6280-6520).
 *
 * Roter Faden im Programm:
 *   01-03  Erkennen     (Trauma-Bonding, Rosa-Brille, No Contact)
 *   04-05  Regulieren   (Trigger, Körper)
 *   06-08  Mustern brechen (Sucht, WLW-Realität, Bindung)
 *   09     Identität füllen (Werte, Self-Expansion)
 *   10     Integration  ← HIER
 *          Die Bruchstellen vergolden, das Wachstum benennen,
 *          die neue Identität besiegeln.
 *
 * Was Modul 10 von Modul 09 unterscheidet:
 *   09 fragt: „Wer fülle ich das Vakuum?"
 *   10 fragt: „Was ist mit den Narben — und wer bin ich DURCH sie geworden?"
 *
 * Pflichtelemente:
 *   - ChapterIntro mit 5 Keywords (Kintsugi · PTG · Narben · Integration · Manifest)
 *   - Story · Mary, zwei Jahre später · Kintsugi-Vase
 *   - Diagnose · Resilienz vs. Posttraumatisches Wachstum
 *   - Lösung · Die 5 Domänen nach Tedeschi & Calhoun
 *   - Übung 1 · KintsugiVase (Bruchstellen vergolden)
 *   - Übung 2 · LikertScale · PTG-Inventar nach 5 Domänen
 *   - Übung 3 · Reflection3Step · Brief an mein früheres Ich
 *   - Übung 4 · KintsugiManifest (drucker-fähig)
 *   - Deep Dive · Tedeschi/Calhoun · Doidge · Janoff-Bulman
 *   - Meditation · Sage-Akzent
 *   - TransformationGoals (finale 6 Sätze)
 */
export function Modul10() {
  return (
    <article className="space-y-7">
      {/* ── Einleitung mit Keywords ── */}
      <ChapterIntro
        title="Kapitel 10 · Kintsugi · Posttraumatisches Wachstum"
        keywords={[
          "Kintsugi",
          "Post-Traumatic Growth",
          "Narben als Gold",
          "Integration",
          "Mein Manifest",
        ]}
      >
        <p>
          Du bist hier am Ende eines langen Wegs angekommen — und am Anfang
          eines neuen. Die letzten Kapitel haben dir gezeigt, was zerbrochen
          wurde: dein Vertrauen, deine Stimme, dein Selbstbild. Dieses
          Kapitel fragt nicht mehr <em>warum</em>. Es fragt:{" "}
          <strong>Was machen wir mit den Bruchstellen?</strong>
        </p>
        <p>
          In Japan klebt man zerbrochene Keramik nicht heimlich zusammen. Man
          füllt die Risse mit Gold und macht sie sichtbar — als Beweis, dass
          das Stück eine Geschichte hat. Genau das ist die Bewegung, die wir
          heute miteinander gehen. Du wirst nicht{" "}
          <em>trotz</em> dieser Erfahrung stark. Du wirst es{" "}
          <strong>durch sie</strong>.
        </p>
      </ChapterIntro>

      {/* ── Story ── */}
      <Section
        icon={<ScrollText className="h-4 w-4" />}
        label="Story · Mary, zwei Jahre später"
      >
        <div className="glass-card-strong p-5">
          <div className="space-y-3 text-sm leading-relaxed animate-fade-in-stagger">
            <h3 className="font-display text-base font-bold text-bordeaux">
              Die Vase auf dem Tisch
            </h3>
            <p>
              Auf Marys Schreibtisch steht eine kleine Vase. Sie hat sie auf
              einem Markt gekauft, irgendwann im zweiten Jahr nach Sandra. Die
              Vase ist hellgrau, ungefähr handgroß, und über ihren Bauch laufen
              fünf goldene Linien — Bruchstellen, mit denen jemand sie wieder
              zusammengesetzt hat. <em>Kintsugi.</em>
            </p>
            <p>
              Wenn Freundinnen sie das erste Mal sehen, fragen sie immer
              dasselbe: <em>„Ist die nicht traurig?"</em> Und Mary sagt jedes
              Mal: <em>„Im Gegenteil. Sie ist mein Lieblingsstück."</em>{" "}
              Manchmal, wenn das Licht günstig fällt, stellt sie die Vase ans
              Fenster und beobachtet, wie das Gold leuchtet. Es leuchtet nur
              da, wo etwas zerbrochen war.
            </p>
            <p>
              Mary sucht nicht mehr nach Sandra. Sie sucht nicht einmal mehr
              die Antwort darauf, warum jemand ihr das angetan hat. Sie weiß
              jetzt: Was Sandra getan hat, war nie über Mary. Und was Mary
              jetzt ist, war nie über Sandra. Mary ist eine Frau mit fünf
              goldenen Linien — und einer Geschichte, die sie nicht mehr
              versteckt. <strong>Sie ist nicht kaputt. Sie ist erfahren.</strong>
            </p>
          </div>
        </div>
      </Section>

      {/* ── Diagnose ── */}
      <Section
        icon={<Brain className="h-4 w-4" />}
        label="Diagnose · Resilienz oder Wachstum?"
      >
        <CalloutBold
          kind="science"
          title="Du sollst nicht zurück. Du sollst hindurch."
          source="Tedeschi & Calhoun (1996/2004) · Posttraumatic Growth Inventory"
        >
          <p>
            Lange galt in der Traumaforschung das Bild der{" "}
            <strong>Resilienz</strong>: Wer ein Trauma übersteht, kehrt zum
            Ausgangspunkt zurück. <em>Wieder funktionieren.</em> Wieder „die
            Alte" sein. Tedeschi und Calhoun haben in den 90ern bewiesen, dass
            das nur ein Teil der Wahrheit ist. Bei vielen Menschen geschieht
            etwas anderes: Sie kehren <em>nicht</em> zum Ausgangspunkt zurück
            — sie wachsen darüber hinaus. Das nennt sich{" "}
            <GlossarTerm termKey="ptg">Post-Traumatic Growth</GlossarTerm>{" "}
            (PTG).
          </p>
          <p>
            PTG ist <strong>kein Trostpreis</strong>. Es bedeutet nicht, dass
            das Trauma „auch sein Gutes hatte". Es bedeutet: Wer gezwungen
            war, die eigenen Fundamente zu prüfen, baut hinterher anders.
            Klarere Werte. Tiefere Beziehungen. Weniger Toleranz für Drama.
            Mehr Toleranz für echte Nähe. Ein Leben, das nichts mehr zu
            verteidigen hat.
          </p>
          <p style={{ marginBottom: 0 }}>
            Voraussetzung für PTG ist <em>nicht</em>, dass es dir schon gut
            geht. Voraussetzung ist, dass du das Trauma <strong>benennst</strong>,
            statt es zu glätten. Dass du die Risse <strong>siehst</strong>,
            statt sie zu überpinseln. Genau das tust du in diesem Kapitel.
          </p>
        </CalloutBold>

        <div className="grid gap-3 sm:grid-cols-2">
          <FlipCard
            emoji="🛡️"
            color="var(--color-mauve)"
            label="Resilienz"
            heading="Zurück zum Ausgangspunkt"
            front="„Ich bin wieder funktionsfähig."
            back="Resilienz ist die Fähigkeit, nach einer Krise wieder dort zu landen, wo man vorher war. Wertvoll und wichtig — aber nicht das Ende der Geschichte. Du musst nicht zurück."
          />
          <FlipCard
            emoji="✦"
            color="var(--color-bordeaux)"
            label="Posttraumatisches Wachstum"
            heading="Über den Ausgangspunkt hinaus"
            front="„Ich bin nicht dieselbe — und das ist gut."
            back="PTG (Tedeschi & Calhoun, 2004) zeigt sich in 5 Domänen: stärkere Wertschätzung des Lebens, tiefere Beziehungen, neue Möglichkeiten, persönliche Stärke und spirituelle/existenzielle Reife."
          />
        </div>
      </Section>

      {/* ── Lösung · Die 5 Domänen ── */}
      <Section
        icon={<Lightbulb className="h-4 w-4" />}
        label="Lösung · Die fünf Domänen des Wachstums"
      >
        <div className="rounded-2xl bg-white/70 p-4 text-sm leading-relaxed text-graphite/85 shadow-glass">
          <p>
            Tedeschi & Calhoun haben in über 25 Jahren Forschung fünf Bereiche
            identifiziert, in denen Menschen nach schweren Krisen wachsen.
            Nicht alle, nicht in jedem Bereich gleich stark, nicht
            gleichzeitig. Aber sehr verlässlich in <em>mindestens einem</em>:
          </p>
          <ul className="mt-3 grid gap-2 sm:grid-cols-2">
            {DOMAINS.map((d) => (
              <li
                key={d.key}
                className="rounded-xl border-2 border-mauve/15 bg-cream/60 p-3"
              >
                <p className="text-[11px] font-semibold uppercase tracking-wider text-mauve">
                  {d.label}
                </p>
                <p className="mt-1 text-xs leading-snug text-graphite/85">
                  {d.body}
                </p>
              </li>
            ))}
            {/* 6. Domäne · Queere Klarheit — gleiche Größe, farblich abgehoben */}
            <li
              className="rounded-xl p-3"
              style={{
                background:
                  "linear-gradient(135deg, color-mix(in oklab, var(--color-bordeaux) 12%, white) 0%, color-mix(in oklab, var(--color-mauve) 16%, white) 100%)",
                border: "2px solid color-mix(in oklab, var(--color-bordeaux) 35%, transparent)",
              }}
            >
              <p className="text-[11px] font-semibold uppercase tracking-wider text-bordeaux">
                ✦ Queere Klarheit · nur für dich
              </p>
              <p className="mt-1 text-xs leading-snug text-graphite/90">
                Du weißt jetzt, wie sich ungesunde Fusion in einem
                identifikatorischen Raum anfühlt — und was sie von echter Nähe
                unterscheidet. Eine Unterscheidungsfähigkeit, die viele nie
                lernen müssen. Du <em>hast</em> sie gelernt.
              </p>
            </li>
          </ul>
        </div>
      </Section>

      {/* ── Übungen ── */}
      <Section
        icon={<Sparkles className="h-4 w-4" />}
        label="Übungen · Vier Werkzeuge zur Integration"
      >
        <div className="space-y-5">
          {/* 1 · Vase */}
          <KintsugiVase slug={SLUG} />

          {/* 2 · PTG-Inventar */}
          <LikertScale
            slug={SLUG}
            storageKey="ptg_inventar"
            title="Übung 2 · Mein PTG-Inventar"
            subtitle="Eine Standortbestimmung — kein Test, keine Bewertung. Wo spürst du HEUTE schon, dass etwas gewachsen ist? Wo noch nicht? Beides ist okay. Du darfst diese Übung in 6 Monaten wiederholen und sehen, was sich bewegt hat."
            meta="🌱 Selbst-Inventar · 6 Sätze · ~5 Min · Wiederholbar"
            accent="bordeaux"
            items={[
              {
                id: "ptg1",
                text: "Ich schätze mein Leben heute mehr als vor der Beziehung.",
              },
              {
                id: "ptg2",
                text: "Meine Beziehungen zu anderen Menschen sind tiefer und ehrlicher geworden.",
              },
              {
                id: "ptg3",
                text: "Ich entdecke neue Möglichkeiten und Wege, die ich vorher nicht gesehen habe.",
              },
              {
                id: "ptg4",
                text: "Ich weiß heute, dass ich stärker bin, als ich dachte.",
              },
              {
                id: "ptg5",
                text: "Ich habe ein klareres Gefühl dafür, was im Leben wirklich zählt.",
              },
              {
                id: "ptg6",
                text: "Ich erkenne ungesunde Beziehungsmuster heute schneller — bei anderen und bei mir.",
              },
            ]}
          />

          {/* 3 · Brief an mein früheres Ich */}
          <Reflection3Step
            slug={SLUG}
            title="Übung 3 · Brief an mein früheres Ich"
            subtitle="In Kapitel 09 hast du deinem zukünftigen Ich geschrieben. Jetzt drehen wir die Richtung um. Schreibe an die Frau, die du warst — bevor du dieses Programm angefangen hast. An die Frau, die noch in der Beziehung war oder gerade erst ausgestiegen ist. Sie braucht dich."
            meta="✉️ Integrationsbrief · ~12 Min · 3 Sätze, mehr nicht"
            accent="bordeaux"
            steps={[
              {
                key: "past_was_du_wissen_solltest",
                label: "1 · Was hättest du dir vor einem Jahr am liebsten gesagt?",
                placeholder:
                  'z.B. „Du bist nicht zu sensibel. Dein System schreit, weil etwas wirklich nicht stimmt."',
                rows: 4,
              },
              {
                key: "past_was_ich_dir_verzeihen",
                label: "2 · Was verzeihst du dir heute, was du dir damals nicht verzeihen konntest?",
                placeholder:
                  'z.B. „Dass ich so lange geblieben bin. Ich habe nicht geblieben weil ich schwach war — ich bin geblieben, weil mein Nervensystem süchtig war."',
                rows: 4,
              },
              {
                key: "past_was_dich_beschuetzt",
                label: "3 · Was sagst du ihr heute, das sie schützt?",
                placeholder:
                  'z.B. „Wenn jemand dich klein machen muss, um sich groß zu fühlen — dann ist das nicht Liebe. Dann ist das ein Symptom. Geh."',
                rows: 4,
              },
            ]}
          />

          {/* 4 · Manifest */}
          <KintsugiManifest slug={SLUG} />
        </div>
      </Section>

      {/* ── Deep Dive ── */}
      <Section
        icon={<Microscope className="h-4 w-4" />}
        label="Deep Dive · Warum Wachstum mehr ist als Heilung"
      >
        <CalloutBold
          kind="deepdive"
          title="Tedeschi & Calhoun · Janoff-Bulman · Doidge"
          source="Posttraumatic Growth Inventory (1996/2004) · Shattered Assumptions (1992) · The Brain That Changes Itself (2007)"
        >
          <p>
            Ronnie <strong>Janoff-Bulman</strong> (1992) beschrieb in{" "}
            <em>Shattered Assumptions</em>, dass schwere Beziehungs-Traumata
            drei Grundannahmen erschüttern: <em>Die Welt ist wohlwollend. Die
            Welt ergibt Sinn. Ich bin liebenswert.</em> Diese Erschütterung ist
            der Schmerz, den du gespürt hast. Aber sie ist auch die
            Voraussetzung dafür, dass du <strong>realistischere</strong>{" "}
            Annahmen baust — und auf denen lebt es sich am Ende ehrlicher.
          </p>
          <p>
            <strong>Tedeschi & Calhoun</strong> (1996, 2004) haben mit dem
            Posttraumatic Growth Inventory gezeigt: Wachstum nach Trauma ist
            nicht selten, sondern häufig — bei 30-70% der Betroffenen,
            abhängig von Begleitfaktoren wie sozialer Unterstützung,
            Selbstoffenbarung und der Fähigkeit, das Erlebte zu{" "}
            <em>narrativ zu integrieren</em> (genau das tust du in diesem
            Programm).
          </p>
          <p style={{ marginBottom: 0 }}>
            Norman <strong>Doidge</strong> (2007, <em>The Brain That Changes
            Itself</em>) lieferte das neurobiologische Fundament:
            Neuroplastizität ist lebenslang möglich. Jede neue Erfahrung, jeder
            wertegeleitete Schritt, jedes ehrliche Gespräch baut neue
            synaptische Verknüpfungen — und schwächt die alten Trauma-Pfade.
            Dein Gehirn ist nicht „beschädigt". Es ist im Umbau.
          </p>
        </CalloutBold>

        <aside
          className="mt-3 rounded-2xl border-2 border-mauve/30 bg-mauve/8 p-4"
          style={{ borderLeft: "5px solid var(--color-mauve)" }}
        >
          <div className="flex items-start gap-3">
            <Quote className="mt-0.5 h-4 w-4 flex-shrink-0 text-mauve" />
            <p className="text-sm italic leading-relaxed text-graphite/85">
              „Wir sind nicht zerbrochen, weil wir geliebt haben. Wir sind
              gewachsen, weil wir endlich aufgehört haben, das falsche zu
              lieben."
            </p>
          </div>
        </aside>
      </Section>

      {/* ── Reflexion ── */}
      <Reflection3Step
        slug={SLUG}
        title="Reflexion · Wer bist du jetzt?"
        subtitle="Drei letzte Fragen. Beantworte sie, ohne dich zu zensieren — und schau in 6 Monaten noch einmal hin."
        meta="🌸 Tiefenreflexion · ~10 Min"
        accent="bordeaux"
        steps={[
          {
            key: "kintsugi_was_anders",
            label: "1 · Was ist heute anders an dir als vor dieser Beziehung?",
            placeholder:
              'z.B. „Ich erkenne Love-Bombing nach 3 Tagen. Ich sage Nein, ohne mich zu erklären."',
            rows: 4,
          },
          {
            key: "kintsugi_dankbar",
            label:
              "2 · Wofür bist du heute dankbar — nicht trotz, sondern weil dir das passiert ist?",
            placeholder:
              'z.B. „Ich kenne meine Werte. Ich weiß, was ich nicht mehr toleriere. Ich habe Freundinnen, die das aushalten."',
            rows: 4,
          },
          {
            key: "kintsugi_naechste_frau",
            label:
              "3 · Was möchtest du der nächsten Frau weitergeben, die das durchmacht?",
            placeholder:
              'z.B. „Es liegt nicht an dir. Es lag nie an dir. Und es geht vorbei — schneller, als du denkst, wenn du es nicht alleine machst."',
            rows: 4,
          },
        ]}
      />

      {/* ── Schlussgeste ── */}
      <FinalGesture />

      {/* ── Meditation ── */}
      <MeditationCard
        title="Selbstheilungskräfte aktivieren — Heilung & Dankbarkeit"
        duration="24 Min"
        source="Inner Garden · Geführte Meditation für Gesundheit & Selbstheilung"
        youtubeId="4sANOxLQ_7c"
      />

      {/* ── Transformationsziele ── */}
      <TransformationGoals
        slug={SLUG}
        diagnosisLabel="Kintsugi · Integration der Bruchstellen"
        goals={[
          {
            id: "g1",
            text: "Ich akzeptiere meine Risse als Teil meiner Geschichte — nicht als Makel.",
          },
          {
            id: "g2",
            text: "Ich habe meine Bruchstellen benannt, statt sie zu verstecken.",
          },
          {
            id: "g3",
            text: "Ich erkenne mindestens eine Domäne, in der ich gewachsen bin (PTG-Inventar).",
          },
          {
            id: "g4",
            text: 'Ich verstehe, dass ich nicht „die Alte" werden muss — ich darf eine Neue werden.',
          },
          {
            id: "g5",
            text: "Ich habe mein Kintsugi-Manifest in eigenen Worten formuliert.",
          },
          {
            id: "g6",
            text: "Ich weiß: Heilung verläuft in Schleifen, nicht in geraden Linien — und das ist okay.",
          },
        ]}
      />

      {/* ── Bonus-Gateway · Brücke ins Complete-Paket ── */}
      <BonusGateway />
    </article>
  );
}

/* ─────────────────────────────────────────────────────────── */
/*  Hilfs-Komponenten                                          */
/* ─────────────────────────────────────────────────────────── */

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

/**
 * FinalGesture · Sanfter Schlussakkord.
 * Erscheint VOR der Meditation als emotionale Brücke ans Ende des Programms.
 */
function FinalGesture() {
  return (
    <div
      className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-bordeaux via-mauve to-sage p-6 text-center text-white shadow-elegant"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-12 -left-10 h-44 w-44 rounded-full bg-white/10 blur-2xl"
      />

      <div className="relative">
        <div className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.28em] backdrop-blur">
          <HeartHandshake className="h-3.5 w-3.5" />
          Schlussakkord
        </div>
        <h3 className="mt-3 font-display text-xl font-bold leading-tight sm:text-2xl">
          Du bist nicht kaputt.
          <br />
          Du bist erfahren.
        </h3>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-white/90">
          Dieses Programm ist nicht das Ende deiner Heilung — es ist der
          Punkt, an dem du aufhörst, dich zu fragen, ob du <em>kaputt</em> bist.
          Ab hier weißt du: <strong>Du bist erfahren.</strong> Und Erfahrung
          ist die einzige Form von Schönheit, die mit der Zeit zunimmt.
        </p>
        <div className="mt-4 flex items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-[0.32em] text-white/80">
          <span className="h-px w-8 bg-white/40" />
          UNBOND · Breaking Chains
          <span className="h-px w-8 bg-white/40" />
        </div>
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────────────────── */
/*  Daten                                                      */
/* ─────────────────────────────────────────────────────────── */

const DOMAINS: { key: string; label: string; body: string }[] = [
  {
    key: "appreciation",
    label: "1 · Wertschätzung des Lebens",
    body: "Kleine Dinge bekommen Gewicht: ein ruhiger Morgen, ein Lachen ohne Hintergedanken, ein eigener Plan.",
  },
  {
    key: "relating",
    label: "2 · Tiefere Beziehungen",
    body: "Du toleriert weniger Drama — und mehr Wahrheit. Freundschaften werden ehrlicher, Smalltalk langweilt schneller.",
  },
  {
    key: "possibilities",
    label: "3 · Neue Möglichkeiten",
    body: "Wege, die du wegen ihr nicht gegangen bist, öffnen sich wieder. Manchmal kommen ganz neue dazu.",
  },
  {
    key: "strength",
    label: "4 · Persönliche Stärke",
    body: '„Wenn ich DAS überlebt habe …" — du kennst jetzt deine eigene Tragfähigkeit. Das nimmt dir niemand mehr.',
  },
  {
    key: "spiritual",
    label: "5 · Existenzielle Reife",
    body: "Du fragst andere Fragen. Was zählt wirklich? Was will ich nicht mehr investieren? Was darf gehen?",
  },
];
