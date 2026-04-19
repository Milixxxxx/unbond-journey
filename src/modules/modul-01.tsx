import {
  ScrollText,
  Brain,
  Lightbulb,
  Pencil,
  Microscope,
  Sparkles,
  AlertTriangle,
} from "lucide-react";
import { GlossarTerm } from "@/components/glossar-term";
import { ChapterIntro } from "@/components/chapter-intro";
import {
  PillCloud,
  Reflection3Step,
  StackedCards,
  CalloutBold,
  TransformationGoals,
} from "@/components/exercise";

const SLUG = "modul-01";

/**
 * MODUL 01 · Trauma-Bonding verstehen
 * Fusion aus ehemaligem Modul 02 + Dopamin/Neurobiologie-Theorie
 * (vorher in Kapitel 0 / SOS angesiedelt). Mary/Sandra-Story bleibt
 * im SOS-Notfallkoffer; hier liegt die theoretische Heimat.
 */
export function Modul01() {
  return (
    <article className="space-y-7">
      {/* ── Einleitungs-Block (NEU) ── */}
      <ChapterIntro
        title="Kapitel 01 · Trauma-Bonding verstehen"
        keywords={[
          "Intermittierende Verstärkung",
          "Dopamin-Achterbahn",
          "Cycle of Abuse",
          "Spielautomaten-Effekt",
        ]}
      >
        <p>
          Was du fühlst, ist keine zu große Liebe — es ist Biochemie. Dein Gehirn
          wurde auf einen Spielautomaten konditioniert, und Spielautomaten
          gewinnen immer.
        </p>
        <p>
          Hier verstehst du, warum du nicht schwach bist, sondern gefangen — und
          warum dieses Wissen schon der erste Schlüssel ist.
        </p>
      </ChapterIntro>

      {/* ── Story · Mary & der Spielautomat ── */}
      <Section icon={<ScrollText className="h-4 w-4" />} label="Story · Der neurologische Spielautomat">
        <div className="glass-card-strong p-5">

          <div className="space-y-3 text-sm leading-relaxed animate-fade-in-stagger">
            <h3 className="font-display text-base font-bold text-bordeaux">
              Mary &amp; Sandra – getrennt und doch gebunden
            </h3>
            <p>
              Mary sitzt nachts am Küchentisch und rechnet die nackte Wahrheit zusammen:{" "}
              <strong>sechs bis acht Stunden im Monat</strong> – das war alles, was Sandra ihr an
              echter, präsenter Beziehungszeit gönnte. Der Rest: Ausreden, vorgeschobener Stress,
              unsichtbare Mauern. Rational ergibt das keinen Sinn. Warum also fühlte Mary, als würde
              sie ohne diese Frau buchstäblich nicht atmen können?
            </p>
            <p>
              Die Antwort trifft sie wie ein Schlag, als sie zum ersten Mal über{" "}
              <GlossarTerm termKey="intermittierende-verstaerkung">
                intermittierende Verstärkung
              </GlossarTerm>{" "}
              stolpert. Sandra war kein sicherer Hafen – sie war ein kaputter Spielautomat. Nach
              wochenlangem emotionalem Verhungern warf er plötzlich den Jackpot aus: ein Blick
              absoluter Liebe, ein intimes Versprechen, ein Abend leidenschaftlicher Nähe.
            </p>
            <p>
              Genau dieser sadistische Wechsel aus eiskaltem Entzug und massiver Belohnung hatte
              Marys Gehirn biochemisch umprogrammiert. Keine Seelenverwandtschaft – das Zittern in
              ihren Händen, ihre verzweifelte Hörigkeit:{" "}
              <strong>klassischer Junkie-Entzug</strong> vor dem Automaten. Es war schlicht{" "}
              <GlossarTerm termKey="trauma-bonding">Trauma-Bonding</GlossarTerm>.
            </p>
          </div>
        </div>
      </Section>

      {/* ── Diagnose · Trauma-Bonding ── */}
      <Section icon={<Brain className="h-4 w-4" />} label="Diagnose · Was Trauma-Bonding wirklich ist">
        <div className="diagnose-box space-y-3 text-sm">
          <p>
            Trauma-Bonding ist <strong>keine Schwäche</strong> und kein Zeichen mangelnder
            Intelligenz. Es ist ein neurobiologischer Prozess, der durch intermittierende Verstärkung
            entsteht – den unvorhersehbaren Wechsel aus Nähe und Rückzug. Skinner (1938) zeigte:
            Belohnungen, die unregelmäßig kommen, erzeugen die <strong>stärkste und hartnäckigste
            Konditionierung</strong> überhaupt.
          </p>
          <p>
            Dutton und Painter (1993) beschrieben Trauma-Bonding als Bindung, die{" "}
            <strong>nicht trotz, sondern wegen des Schmerzes</strong> entsteht. Der Wechsel zwischen
            Missbrauch und Zuneigung schafft eine pathologische Bindung, die stärker ist als gesunde
            Liebe.
          </p>
        </div>
      </Section>

      {/* ── Diagnose · Dopamin & Liebe als Sucht (NEU integriert aus altem Kapitel 0) ── */}
      <Section icon={<Brain className="h-4 w-4" />} label="Diagnose · Liebe ist Neurochemie">
        <div className="diagnose-box space-y-3 text-sm">
          <p>
            Fisher et al. (2005) zeigten mittels fMRT, dass romantische Liebe dieselben Hirnareale
            aktiviert wie Kokainkonsum: das ventrale tegmentale Areal (VTA), den Nucleus accumbens,
            das gesamte mesolimbische Belohnungssystem.{" "}
            <GlossarTerm termKey="dopamin">Dopamin</GlossarTerm> ist hier die Hauptwährung – und es
            wird nicht durch <em>Belohnung</em> ausgeschüttet, sondern durch die{" "}
            <strong>Erwartung der Belohnung</strong>.
          </p>
          <p>
            Bei Trauma-Bonding wird dieses System besonders stark konditioniert: Das Gehirn lernt,
            dass auf Schmerz Erleichterung folgt – und beginnt, den Schmerz selbst als Teil des
            Belohnungszyklus zu antizipieren. Ein Like, ein Emoji, ein gemeinsames Lied lösen dann
            unverhältnismäßig starke Cravings aus (Nestler, 2005 · Dopamin-Sensitivierung).
          </p>
          <p className="rounded-lg bg-mauve/8 p-3 text-xs text-graphite/85">
            💡 <strong>Love Addiction</strong> ist kein moralisches Versagen, sondern ein Suchtbild:
            Toleranzentwicklung, Entzugssymptome, Kontrollverlust, Weiterführung trotz Schaden. Das
            <strong> tiefere Suchtmodell</strong> (Sucht-Anatomie der Liebe, Trigger-Inventar,
            digitale Hygiene) bekommst du in <em>Modul 03 · No-Contact als Entzug</em>.
          </p>
        </div>
      </Section>

      {/* ── Die 10 Warnsignale ── */}
      <Section icon={<AlertTriangle className="h-4 w-4" />} label="Die 10 Warnsignale toxischer Bindung">
        <div className="grid gap-2 sm:grid-cols-2">
          {WARNSIGNALE.map((w, i) => (
            <div key={w.id} className="rounded-lg bg-white/75 p-3">
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-bordeaux">
                <span className="grid h-6 w-6 place-items-center rounded-full bg-bordeaux text-[11px] text-white">
                  {String(i + 1).padStart(2, "0")}
                </span>
                {w.label}
              </p>
              <p className="mt-1.5 text-xs leading-snug text-graphite/85">{w.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Lösung: ACT Defusion + Dopamin-Reset ── */}
      <Section icon={<Lightbulb className="h-4 w-4" />} label="Lösung · ACT-Defusion & Dopamin-Reset">
        <div className="loesung-box space-y-3 text-sm">
          <p>
            Trauma-Bonding ist neurobiologisch eine Sucht – und jede wirksame Suchtbehandlung beginnt
            damit, den <strong>Konditionierungskreislauf zu unterbrechen</strong>.
          </p>
          <p>
            Die <em>Acceptance and Commitment Therapy</em> (ACT, Hayes, Strosahl &amp; Wilson, 2006)
            bietet dafür die{" "}
            <GlossarTerm termKey="defusion">Defusions-Technik</GlossarTerm>: Du lernst, Gedanken und
            Cravings als mentale Ereignisse zu beobachten – als <em>Züge, die durch den Bahnhof
            fahren</em> – ohne ihnen zu folgen oder gegen sie zu kämpfen.
          </p>
          <div className="rounded-lg bg-white/65 p-3">
            <p className="mb-1.5 text-xs font-bold uppercase tracking-wider text-bordeaux">
              Der Dopamin-Reset bedeutet konsequente Null-Exposition:
            </p>
            <ul className="ml-4 list-disc space-y-1 text-sm marker:text-bordeaux">
              <li>Kein Profilschauen.</li>
              <li>Keine geteilten Playlists.</li>
              <li>Keine gegenseitigen Kontakte.</li>
            </ul>
            <p className="mt-2 text-xs text-graphite/70">
              Nicht aus Hass – sondern weil jeder Blick auf ihr Profil den Konditionierungskreislauf
              neu aktiviert und den Heilungsprozess um Wochen zurückwirft.
            </p>
          </div>
        </div>
      </Section>

      {/* ── ACT-Callout ── */}
      <CalloutBold
        kind="act"
        title="Defusion: Gedanken als Züge im Bahnhof"
        source="Hayes, S. C., Strosahl, K. D. & Wilson, K. G. (2006). Acceptance and Commitment Therapy."
      >
        <p>
          Wenn der Gedanke kommt <em>„Sie war doch meine große Liebe"</em>, ist das ein Zug, der in
          deinen Bahnhof einfährt. Du musst weder mitfahren noch versuchen, ihn zu stoppen. Du
          beobachtest ihn, sagst innerlich:{" "}
          <strong>„Da ist der Gedanke, dass sie meine große Liebe war."</strong> – und lässt ihn
          weiterfahren.
        </p>
        <p>
          Das ist Defusion: Du fusionierst nicht mehr <em>mit</em> dem Gedanken, du beobachtest ihn.
          Damit verliert er die Kraft, dich zur Kontaktaufnahme zu bewegen.
        </p>
      </CalloutBold>

      {/* ── ÜBUNG 1 · Pill-Cloud Warnsignale ── */}
      <Section icon={<Pencil className="h-4 w-4" />} label="Übung 1 · Meine klarsten Warnsignale">
        <PillCloud
          slug={SLUG}
          storageKey="warnsignale"
          title="Meine 3 klarsten Warnsignale"
          subtitle="Klicke alle Warnsignale an, die du in deiner Beziehung erlebt hast. Was du einmal klar benennen kannst, kann dein Verstand nicht mehr so leicht wegrationalisieren."
          meta="🧠 Name it to tame it · ⏱ 15 Min"
          accent="terracotta"
          pills={WARNSIGNALE.map((w) => ({ id: w.id, label: w.label }))}
          counterLabel="Warnsignale erkannt"
          emptyHint="Tippe an, was du wiedererkennst."
        />
        <Reflection3Step
          slug={SLUG}
          title="Meine 3 klarsten Warnsignale in eigenen Worten"
          subtitle="Vertiefe drei davon – in deiner Sprache, mit deinem Körpergedächtnis."
          accent="terracotta"
          steps={[
            {
              key: "warn_1",
              label: "Warnsignal 1 — das klarste Zeichen, das ich lange nicht sehen wollte:",
              placeholder: "Ich habe immer gespürt, dass…",
            },
            {
              key: "warn_2",
              label: "Warnsignal 2 — ein Muster, das sich immer wiederholte:",
              placeholder: "Jedes Mal wenn ich…, dann…",
            },
            {
              key: "warn_3",
              label: "Warnsignal 3 — das Zeichen, das mein Körper kannte, bevor mein Verstand es zugab:",
              placeholder: "Mein Körper hat reagiert mit…",
            },
          ]}
        />
      </Section>

      {/* ── ÜBUNG 2 · Innere Anwältinnen der Sucht ── */}
      <Section
        icon={<Pencil className="h-4 w-4" />}
        label="Übung 2 · Meine inneren Anwältinnen der Sucht"
      >
        <PillCloud
          slug={SLUG}
          storageKey="rationalisierungen"
          title="Welche Rationalisierungen kennst du bei dir?"
          subtitle="Dein Verstand hatte gute Gründe, dich in der Beziehung zu halten. Klicke alle an, die du wiedererkennst – und sieh dabei, dass es Muster sind, nicht die Wahrheit."
          meta="🧠 ACT · Kognitive Defusion · ⏱ 20 Min"
          accent="mauve"
          pills={RATIONALISIERUNGEN}
          counterLabel="Rationalisierungen erkannt"
        />
        <Reflection3Step
          slug={SLUG}
          title="Eigene Rationalisierungen sichtbar machen"
          subtitle="Welche Sätze hast DU dir innerlich gesagt, um zu bleiben? Schreib sie auf – ohne Selbstkritik."
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
      </Section>

      {/* ── ÜBUNG 3 · Jackpot-Protokoll ── */}
      <Section
        icon={<Pencil className="h-4 w-4" />}
        label="Übung 3 · Jackpot-Protokoll · Mein Spielautomaten-Zyklus"
      >
        <StackedCards
          slug={SLUG}
          storageKey="jackpot_protokoll"
          title="Drei konkrete Jackpot-Momente aus meiner Beziehung"
          subtitle="Dein Gehirn hat gelernt: Nach der Kälte kommt manchmal Wärme. Das ist mächtiger als dauerhafte Liebe. Beschreibe drei Momente – und erkenne dein persönliches Suchtmuster."
          meta="🎰 Suchtmuster sichtbar machen · ⏱ 25 Min"
          accent="terracotta"
          rows={[1, 2, 3].map((n) => ({
            id: `jp${n}`,
            title: `Jackpot-Moment ${n}`,
            fields: [
              {
                key: "kaelte",
                label: "🧊 Kälte davor",
                placeholder: "Wie lange? Welche Form? (Schweigen, Distanz, Strafe…)",
                rows: 3,
              },
              {
                key: "jackpot",
                label: "🎰 Der Jackpot",
                placeholder: "Was genau hat sie getan / gesagt? Wie kam die Wärme?",
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
        <Reflection3Step
          slug={SLUG}
          title="Mein persönliches Muster"
          subtitle="Wenn du diese drei Momente nebeneinanderlegst – was siehst du?"
          accent="terracotta"
          steps={[
            {
              key: "muster_zyklus",
              label: "So sah mein Zyklus aus (Kälte → Sehnsucht → Jackpot → Endlosschleife):",
              rows: 3,
            },
            {
              key: "muster_koerper",
              label: "So hat mein Körper auf den Jackpot reagiert:",
            },
            {
              key: "muster_erkenntnis",
              label: "Was ich heute weiß und damals nicht sehen konnte:",
            },
          ]}
        />
      </Section>

      {/* ── Deep Dive ── */}
      <Section icon={<Microscope className="h-4 w-4" />} label="Deep Dive · Die Forschung dahinter">
        <CalloutBold
          kind="science"
          title="Drei Studien, die alles erklären"
          source="Skinner (1938) · Fisher et al. (2005) · Dutton & Painter (1993)"
        >
          <p>
            <strong>Skinner (1938)</strong> – Operante Konditionierung: Variable Verstärkungspläne
            erzeugen die widerstandsfähigste Konditionierung. Eine Taube, die unregelmäßig Futter
            bekommt, pickt länger als eine, die jedes Mal belohnt wird.
          </p>
          <p>
            <strong>Fisher et al. (2005)</strong> – fMRT-Studien zeigen: Romantische Liebe aktiviert
            das ventrale tegmentale Areal (VTA) – dasselbe System, das auch bei Kokain feuert.
            Trennungsschmerz ist neurochemisch identisch mit Drogen-Entzug.
          </p>
          <p>
            <strong>Dutton &amp; Painter (1993)</strong> – Bei Trauma-Bonding entsteht die Bindung{" "}
            <em>wegen</em> des Schmerzes, nicht trotz. Die Erleichterung nach der Bestrafung wirkt
            stärker als jede konstante Zuneigung.
          </p>
        </CalloutBold>
      </Section>

      {/* ── Begleit-Meditation ── */}
      <Section icon={<Sparkles className="h-4 w-4" />} label="Begleitende Meditation">
        <a
          href="https://www.youtube.com"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 rounded-xl bg-gradient-to-br from-mauve/15 to-sage/15 p-4 transition hover:shadow-soft"
        >
          <div className="grid h-14 w-14 flex-shrink-0 place-items-center rounded-full bg-white/70 text-2xl">
            🧘
          </div>
          <div>
            <p className="font-display text-sm font-bold text-bordeaux">
              Defusion-Meditation: Gedanken als Wolken
            </p>
            <p className="text-xs text-graphite/70">12 Min · ACT geleitet</p>
            <p className="mt-0.5 text-[11px] text-mauve underline">▹ Auf YouTube anhören</p>
          </div>
        </a>
      </Section>

      {/* ── Transformationsziele ── */}
      <TransformationGoals
        slug={SLUG}
        diagnosisLabel="Trauma-Bonding · die neurobiologische Fessel der intermittierenden Verstärkung"
        goals={[
          {
            id: "g1",
            text: "Ich verstehe, dass meine Hörigkeit Neurobiologie ist – kein Charakterfehler.",
          },
          {
            id: "g2",
            text: "Ich kann mindestens 3 der 10 Warnsignale in meiner Beziehung klar benennen.",
          },
          {
            id: "g3",
            text: "Ich erkenne mindestens eine Rationalisierung, die mich gehalten hat – und sehe sie heute als Gedanken, nicht als Wahrheit.",
          },
          {
            id: "g4",
            text: "Ich habe meinen persönlichen Jackpot-Zyklus benannt: Kälte → Sehnsucht → Jackpot → Dopamin-Flut.",
          },
          {
            id: "g5",
            text: "Ich verpflichte mich auf konsequente Null-Exposition (kein Profilschauen, keine geteilten Playlists, keine Mittlerinnen).",
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

const WARNSIGNALE: { id: string; label: string; desc: string }[] = [
  { id: "lovebombing", label: "Lovebombing", desc: "Überschwängliche Zuneigung zu Beginn, die emotionale Abhängigkeit erzeugt, bevor das wahre Muster sichtbar wird." },
  { id: "hotcold", label: "Hot/Cold-Muster", desc: "Abwechselnd liebevoll und abweisend – ohne erkennbaren Anlass. Das Unvorhersehbare ist das Suchterzeugende." },
  { id: "gaslighting", label: "Gaslighting", desc: "Deine Wahrnehmung wird systematisch in Frage gestellt. Du beginnst, deiner eigenen Realität zu misstrauen." },
  { id: "schweigen", label: "Schweigen als Strafe", desc: "Funkstille, Blockieren, Ignorieren als Reaktion auf Grenzen oder Konflikte. Bestrafung ohne Worte." },
  { id: "weaponized", label: "Weaponized Virtue", desc: "Progressive Werte werden als Kontrollwerkzeug eingesetzt. Macht Gaslighting besonders wirksam." },
  { id: "isolation", label: "Isolation", desc: "Dein Freundes- und Familienkreis wird kleiner. Du ziehst dich zurück oder wirst isoliert." },
  { id: "schuld", label: "Schuldzuweisung", desc: "Du wirst für Dinge verantwortlich gemacht, die du nicht kontrollieren kannst. Deine Emotionen sind das Problem." },
  { id: "hoovering", label: "Hoovering", desc: "Sobald du loslässt, kommt die nächste Welle der Wärme – gerade dann, wenn du gehen wolltest." },
  { id: "selbstwert", label: "Selbstwert-Erosion", desc: "Du siehst dich selbst schlechter als davor. Du glaubst, du seist zu viel, zu wenig, zu anstrengend." },
  { id: "hoffnung", label: "Hoffnungssucht", desc: "Du glaubst tief im Inneren, dass sich alles noch wenden könnte – wenn du nur anders wärst." },
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
