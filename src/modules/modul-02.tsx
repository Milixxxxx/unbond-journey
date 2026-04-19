import {
  ScrollText,
  Brain,
  Lightbulb,
  Microscope,
  Sparkles,
  AlertTriangle,
  Zap,
  Heart,
  Flame,
  Eye,
  FileText,
  Calendar,
  Mail,
} from "lucide-react";
import { GlossarTerm } from "@/components/glossar-term";
import {
  StackedCards,
  Reflection3Step,
  CalloutBold,
  TransformationGoals,
  TwentyOneDayChallenge,
  HooverDecoder,
} from "@/components/exercise";

const SLUG = "modul-02";

/**
 * MODUL 02 · Die Rosa-Brille abnehmen
 * Quelle: UNBOND_Final_v5.html, Schritt 03 "Die Rosa-Brille abnehmen"
 * Pflichtelemente: Story · Diagnose · Wissenschaft · Infografiken · 3+ Übungen
 * · Reflexionsfrage · Transformationsziele
 */
export function Modul02() {
  return (
    <article className="space-y-7">
      {/* ── Story · Der Hoovering-Brief ── */}
      <Section icon={<ScrollText className="h-4 w-4" />} label="Story · Der Hoovering-Brief">
        <div className="glass-card-strong p-5">
          <div className="space-y-3 text-sm leading-relaxed animate-fade-in-stagger">
            <h3 className="font-display text-base font-bold text-bordeaux">
              Wenn die Schuppen von den Augen fallen
            </h3>
            <p>
              Sechs Monate nach dem Ghosting vibriert Marys Handy. Eine Nachricht von Sandra auf
              einer Plattform, auf der sie angeblich nie aktiv sein wollte. Es ist ein klassischer
              „Hoovering"-Versuch:{" "}
              <em>
                „Unser Treffen war sehr belastend, weil du dich direkt in die Opferrolle begeben
                hast. Ich war immer für dich da. Lass uns doch wenigstens im Frieden sein. Schade,
                dass du die Dinge so verdrehst."
              </em>
            </p>
            <p>
              Sofort schnürt sich Marys Hals zu. Hat Sandra recht? War ich das Problem? Bevor die
              Selbstzweifel sie verschlingen, schlägt Mary ihr Workbook auf und nutzt die „Wolf im
              Schafspelz"-Übung (Realitäts-Check). Sie zieht einen Strich in die Mitte der Seite.
            </p>
            <div className="rounded-lg border-l-4 border-bordeaux bg-bordeaux/5 p-3 text-xs">
              <strong className="text-bordeaux">Was Sandra schreibt (Die Maske):</strong> „Ich war
              immer für dich da, ich reiche dir die Hand zum Frieden. Ich bin das Opfer."
            </div>
            <div className="rounded-lg border-l-4 border-sage bg-sage/5 p-3 text-xs">
              <strong className="text-sage-dark">Was Sandra TAT (Die Fakten):</strong> Sie hat Mary
              nach den intimsten Momenten tagelang geghostet. Sie hat Behörden instrumentalisiert,
              um sie einzuschüchtern. Sie hat Mary stillschweigend ersetzt, während sie ihr Liebe
              schwor.
            </div>
            <p>
              Mary atmet tief aus. Die Fakten sind glasklar. Das Geschriebene brennt sich in ihr
              Bewusstsein. Ohne noch einen einzigen Moment zu zögern, drückt Mary auf „Blockieren".
              Die jahrzehntealte rosa Brille splittert krachend. Die Illusion ist endlich gebrochen.
            </p>
          </div>
        </div>
      </Section>

      {/* ── Marys Gaslighting-Log: Drei Beispiele ── */}
      <Section icon={<FileText className="h-4 w-4" />} label="Marys Gaslighting-Log · Drei Einträge">
        <div className="space-y-3">
          {GASLIGHTING_BEISPIELE.map((e) => (
            <div
              key={e.id}
              className="rounded-xl border-l-4 bg-white/70 p-4 shadow-glass"
              style={{ borderLeftColor: e.color }}
            >
              <p className="font-display text-sm font-bold" style={{ color: e.color }}>
                {e.titel}
              </p>
              <div className="mt-2 space-y-1.5 text-xs leading-relaxed text-graphite/90">
                <p>
                  <strong>Die Situation:</strong> {e.situation}
                </p>
                <p>
                  <strong>Was ich gefühlt habe:</strong> {e.gefuehl}
                </p>
                <p className="rounded bg-sage/10 p-2">
                  <strong className="text-sage-dark">Was die Fakten sagen:</strong> {e.fakten}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Diagnose · Kognitive Dissonanz ── */}
      <Section
        icon={<Brain className="h-4 w-4" />}
        label="Diagnose · Kognitive Dissonanz & Spielautomat"
      >
        <div className="diagnose-box space-y-3 text-sm">
          <p>
            <GlossarTerm termKey="kognitive-dissonanz">Kognitive Dissonanz</GlossarTerm>{" "}
            (Festinger, 1957) entsteht, wenn zwei widersprüchliche Überzeugungen gleichzeitig
            existieren: <em>„Ich weiß, dass diese Beziehung mir schadet"</em> und{" "}
            <em>„Ich kann ohne sie nicht leben."</em> Das Gehirn kann diesen Widerspruch nicht
            dauerhaft aushalten – es löst ihn auf, indem es eine der beiden Überzeugungen
            abschwächt. Meistens die erste.
          </p>
          <p>
            B.F. Skinner entdeckte, dass{" "}
            <GlossarTerm termKey="intermittierende-verstaerkung">
              intermittierende Verstärkung
            </GlossarTerm>{" "}
            – unregelmäßige, unvorhersehbare Belohnung – die stärkste Form der Konditionierung
            erzeugt. Ratten, die nur manchmal Futter bekamen, drückten den Hebel obsessiv – weit
            häufiger als Ratten mit konstanter Belohnung.
          </p>
          <p>
            Helen Fisher zeigte per fMRT, dass romantische Ablehnung und Kokain-Entzug{" "}
            <strong>dieselben Gehirnareale</strong> aktivieren: das Ventrale Tegmentale Areal (VTA)
            und den Nucleus Accumbens. Trennungsschmerz ist kein emotionales Drama. Er ist ein
            biochemischer Entzug.
          </p>
          <p>
            In toxischen Beziehungen wird diese Dissonanz durch <strong>Weaponized Virtue</strong>{" "}
            verstärkt: Wenn deine Partnerin öffentlich als einfühlsam und tugendhaft gilt,
            zweifelst du an dir selbst, nicht an ihr.
          </p>
        </div>
      </Section>

      {/* ── Die drei Botenstoffe der Falle ── */}
      <Section icon={<Zap className="h-4 w-4" />} label="Die drei Botenstoffe der Falle">
        <div className="grid gap-3 sm:grid-cols-3">
          {BOTENSTOFFE.map((b) => (
            <div key={b.name} className="rounded-xl bg-white/75 p-4 shadow-glass">
              <div className="mb-2 grid h-10 w-10 place-items-center rounded-full bg-bordeaux/10">
                {b.icon}
              </div>
              <h5 className="font-display text-sm font-bold text-bordeaux">{b.name}</h5>
              <p className="mt-1 text-xs leading-relaxed text-graphite/85">{b.desc}</p>
            </div>
          ))}
        </div>
        <p className="mt-2 text-[11px] italic text-graphite/60">
          Skinner (1938) · Fisher et al. (2005, 2010) · Berridge &amp; Robinson (1998)
        </p>
      </Section>

      {/* ── Der 4-Phasen-Zyklus ── */}
      <Section icon={<AlertTriangle className="h-4 w-4" />} label="Der 4-Phasen-Zyklus">
        <div className="rounded-2xl bg-white/70 p-4 shadow-glass">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-wider text-bordeaux">
            🔄 Der Zyklus der toxischen Bindung
          </p>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
            {PHASEN.map((p) => (
              <div
                key={p.label}
                className="rounded-xl border-2 p-3 text-center"
                style={{ borderColor: p.color, background: `${p.color}15` }}
              >
                <div className="mb-1 text-2xl">{p.emoji}</div>
                <p
                  className="text-[10px] font-bold uppercase tracking-wider"
                  style={{ color: p.color }}
                >
                  {p.label}
                </p>
                <p className="mt-1 text-[11px] leading-snug text-graphite/85">{p.desc}</p>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-lg bg-bordeaux/8 p-3 text-xs">
            <strong className="text-bordeaux">⚠️ Das Muster erkennen:</strong> Jeder Durchlauf
            dieses Zyklus verstärkt die neuronale Verbindung. Nicht weil die Beziehung besser wird –
            sondern weil dein Gehirn gelernt hat: Nach dem Schmerz kommt die Erlösung. Warte nur
            lang genug.
          </div>
        </div>
      </Section>

      {/* ── Lösung · Negative Reappraisal ── */}
      <Section
        icon={<Lightbulb className="h-4 w-4" />}
        label="Lösung · Negative Reappraisal & Realitäts-Anker"
      >
        <CalloutBold
          kind="science"
          title="Warum bewusstes Umbewerten dein Gehirn entgiftet"
          source="Langeslag & Sanchez (2018), Nader et al. (2000)"
        >
          <p>
            <GlossarTerm termKey="negative-reappraisal">Negative Reappraisal</GlossarTerm> ist die
            wissenschaftlich am besten belegte Methode, um romantische Gefühle aktiv zu reduzieren –
            nicht durch Verdrängen, sondern durch bewusstes Ersetzen des idealisierten Bildes durch
            ein vollständiges, reales Bild.
          </p>
          <p>
            Das Prinzip nutzt die <strong>Rekonsolidierung</strong>: Erinnerungen werden bei jedem
            Abruf leicht verändert. Jedes Mal, wenn eine positiv besetzte Erinnerung mit einer
            faktischen Verletzung verknüpft wird, schwächt sich die emotionale Aufladung ab – nicht
            durch Willenskraft, sondern durch neuronale Umstrukturierung.
          </p>
          <p>
            fMRT-Studien zeigen: 21 Tage tägliches Reappraisal reduzieren die emotionale
            Aktivierung um <strong>30–40 %</strong>. Es geht nicht darum, sie zu hassen – es geht
            darum, das idealisierte Bild durch ein reales zu ersetzen, das Schmerz, Enttäuschung
            und Verrat einschließt.
          </p>
        </CalloutBold>
      </Section>

      {/* ── Übung 1 · Gaslighting-Log ── */}
      <Section icon={<FileText className="h-4 w-4" />} label="Übung 1 · Dein Gaslighting-Log">
        <StackedCards
          slug={SLUG}
          storageKey="gaslighting_log"
          title="Dein persönliches Gaslighting-Log"
          subtitle="Dokumentiere Momente, in denen du an deiner eigenen Wahrnehmung gezweifelt hast. Trenne Fakten von Interpretation."
          meta="3 Einträge · ca. 15 Min · wird automatisch gespeichert"
          accent="bordeaux"
          rows={[
            {
              id: "log_1",
              title: "Eintrag 1",
              fields: [
                { key: "passiert", label: "Was ist passiert?", placeholder: "Beschreibe die Situation…" },
                { key: "gesagt", label: "Was hat sie gesagt/getan?", placeholder: "Ihre genauen Worte…" },
                { key: "gefuehl", label: "Wie hast du dich gefühlt?", placeholder: "Deine Reaktion, Selbstzweifel…" },
                { key: "fakten", label: "Was sagen die Fakten?", placeholder: "Unbestreitbare Tatsachen…" },
              ],
            },
            {
              id: "log_2",
              title: "Eintrag 2",
              fields: [
                { key: "passiert", label: "Was ist passiert?", placeholder: "Beschreibe die Situation…" },
                { key: "gesagt", label: "Was hat sie gesagt/getan?", placeholder: "Ihre genauen Worte…" },
                { key: "gefuehl", label: "Wie hast du dich gefühlt?", placeholder: "Deine Reaktion, Selbstzweifel…" },
                { key: "fakten", label: "Was sagen die Fakten?", placeholder: "Unbestreitbare Tatsachen…" },
              ],
            },
            {
              id: "log_3",
              title: "Eintrag 3",
              fields: [
                { key: "passiert", label: "Was ist passiert?", placeholder: "Beschreibe die Situation…" },
                { key: "gesagt", label: "Was hat sie gesagt/getan?", placeholder: "Ihre genauen Worte…" },
                { key: "gefuehl", label: "Wie hast du dich gefühlt?", placeholder: "Deine Reaktion, Selbstzweifel…" },
                { key: "fakten", label: "Was sagen die Fakten?", placeholder: "Unbestreitbare Tatsachen…" },
              ],
            },
          ]}
        />
      </Section>

      {/* ── Übung 2 · 4-Spalten-Realitäts-Check ── */}
      <Section icon={<Eye className="h-4 w-4" />} label="Übung 2 · 4-Spalten-Realitäts-Check">
        <StackedCards
          slug={SLUG}
          storageKey="realitaets_check"
          title="Romantik gegen Realität"
          subtitle="Vergleiche romantisierte Erinnerungen mit der faktischen Realität. So löst sich kognitive Dissonanz strukturiert auf."
          meta="2 Erinnerungen · 4 Spalten · 10 Min"
          accent="mauve"
          rows={[
            {
              id: "rc_1",
              title: "Erinnerung 1",
              fields: [
                { key: "romantik", label: "Romantisierte Version", placeholder: "z.B. Sie war so fürsorglich…" },
                { key: "wirkung", label: "Emotionale Wirkung", placeholder: "z.B. Ich fühlte mich geliebt…" },
                { key: "real", label: "Faktische Realität", placeholder: "z.B. Nur nach Konflikten…" },
                { key: "neu", label: "Neue Bewertung", placeholder: "z.B. Das war Kontrolle…" },
              ],
            },
            {
              id: "rc_2",
              title: "Erinnerung 2",
              fields: [
                { key: "romantik", label: "Romantisierte Version", placeholder: "Romantisierte Erinnerung…" },
                { key: "wirkung", label: "Emotionale Wirkung", placeholder: "Was du damals fühltest…" },
                { key: "real", label: "Faktische Realität", placeholder: "Was wirklich passiert ist…" },
                { key: "neu", label: "Neue Bewertung", placeholder: "Wie du es heute siehst…" },
              ],
            },
          ]}
        />
        <div className="rounded-2xl border-l-4 border-warning bg-warning/10 p-4">
          <strong className="block font-bold text-bordeaux">💡 Merksatz</strong>
          <p className="mt-1 text-sm italic text-bordeaux">
            „Negative Reappraisal bedeutet nicht, das Gute kleinzureden. Es bedeutet, das Reale
            sichtbar zu machen – damit das idealisierte Bild nicht mehr Macht hat als die
            Wirklichkeit."
          </p>
        </div>
      </Section>

      {/* ── Übung 3 · Podest-Analyse & Brief ── */}
      <Section
        icon={<Mail className="h-4 w-4" />}
        label="Übung 3 · Podest-Analyse & Brief ans idealisierte Bild"
      >
        <div className="rounded-2xl bg-white/70 p-4 text-sm leading-relaxed text-graphite/85 shadow-glass">
          <p>
            Wir lieben selten die reale Person – wir lieben die Illusion, die wir uns von ihr
            gemacht haben. In der Verliebtheitsphase kam deine Partnerin dieser Illusion
            beängstigend nahe: aufmerksam, zugewandt, als hätte sie dich wirklich gesehen. Doch
            sobald diese Phase verging, zeigte sie zunehmend ihr wahres Verhalten – und wich immer
            weiter von dem Bild ab, das du im Kopf hattest.
          </p>
          <p className="mt-2">
            Trotzdem hast du am idealisierten Bild festgehalten, weil das Loslassen dieser
            Illusion bedeutet hätte, den Schmerz des Verlustes wirklich zu fühlen. Diese Übung
            hilft dir, das Podest sichtbar zu machen.
          </p>
        </div>

        <Reflection3Step
          slug={SLUG}
          title="Podest-Analyse · Idealisiert vs. Real"
          subtitle="Stelle das idealisierte Bild der realen Person gegenüber – und schreibe einen Brief an die Version, die nie existiert hat."
          meta="3 Schritte · 15–20 Min"
          accent="terracotta"
          steps={[
            {
              key: "podest_ideal",
              label: "🌹 Idealisiert – was ich ihr zugeschrieben habe",
              placeholder: "Ich habe ihr zugeschrieben…\nIch dachte, sie sei…\nIch glaubte, sie würde…",
              rows: 5,
            },
            {
              key: "podest_real",
              label: "🔍 Real – was sie tatsächlich gezeigt hat",
              placeholder: "Die reale Person hat gezeigt…\nWas sie tatsächlich getan hat…\nWas ich ignoriert habe…",
              rows: 5,
            },
            {
              key: "podest_brief",
              label: "✉️ Brief ans idealisierte Bild",
              placeholder: "Liebes idealisiertes Bild,\n\nIch habe dich so lange festgehalten, weil…",
              rows: 6,
            },
          ]}
        />
      </Section>

      {/* ── Übung 4 · 21-Tage-Challenge (Reflexionsfrage) ── */}
      <Section
        icon={<Calendar className="h-4 w-4" />}
        label="Übung 4 · 21-Tage-Challenge & Reflexion"
      >
        <Reflection3Step
          slug={SLUG}
          title="Negative Reappraisal · 21-Tage-Start"
          subtitle="Schreibe heute den ersten faktisch belegten, negativen Aspekt auf – nicht aus Hass, sondern aus Klarheit. Studien zeigen: nach 21 Tagen sinkt die emotionale Intensität um 30–40 %."
          meta="Tag 1 · 5 Min · täglich wiederholen"
          accent="sage"
          steps={[
            {
              key: "reappraisal_tag1",
              label: "🗓️ Mein erster Eintrag (Tag 1)",
              placeholder:
                "Eine konkrete, faktisch belegte Erinnerung – z.B. 'Sie hat mich vor meinen Freundinnen bloßgestellt, als ich…'",
              rows: 4,
            },
            {
              key: "reflexion_klarheit",
              label: "💭 Reflexionsfrage · Welche Wahrheit hast du heute zum ersten Mal wirklich zugelassen?",
              placeholder:
                "Was siehst du jetzt, das du vorher nicht sehen wolltest oder konntest? Schreibe es ohne Filter auf.",
              rows: 5,
            },
          ]}
        />
      </Section>

      {/* ── Hoovering-Taktiken · Glossar ── */}
      <Section icon={<AlertTriangle className="h-4 w-4" />} label="Die 5 häufigsten Hoovering-Taktiken">
        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
          {TAKTIKEN.map((t) => (
            <div
              key={t.name}
              className="rounded-xl border-l-4 bg-white/75 p-3 shadow-glass"
              style={{ borderLeftColor: t.color }}
            >
              <p className="text-sm font-bold" style={{ color: t.color }}>
                {t.emoji} {t.name}
              </p>
              <p className="mt-1 text-xs leading-snug text-graphite/85">{t.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── Deep Dive · Wissenschaft ── */}
      <Section icon={<Microscope className="h-4 w-4" />} label="Deep Dive · Forschung">
        <CalloutBold
          kind="deepdive"
          title="Die vier Säulen der kognitiven Neubewertung"
          source="Langeslag & Sanchez (2018) · Festinger (1957) · Fisher et al. (2010) · Ristock (2002)"
        >
          <p>
            <strong>Langeslag &amp; Sanchez (2018):</strong> In kontrollierten fMRT-Studien
            reduzierte Negative Reappraisal die Intensität romantischer Gefühle signifikant stärker
            als die Strategien „an etwas anderes denken" oder „die Situation akzeptieren". Wichtig:
            Der Effekt wird mit Übung stärker. Die ersten Male fühlt sich Negative Reappraisal
            künstlich an. Das ist normal.
          </p>
          <p>
            <strong>Festinger (1957):</strong> Die Theorie der kognitiven Dissonanz erklärt, warum
            wir so verzweifelt an idealisierten Bildern festhalten – das Eingestehen der Realität
            würde bedeuten, dass unsere Urteilsfähigkeit versagt hat. Das Ego verteidigt die
            Investition in die Idealisierung.
          </p>
          <p>
            <strong>Fisher et al. (2010):</strong> Hirnscans zeigten aktivierte
            Dopamin-Sucht-Areale bei romantischer Ablehnung – identisch mit Kokainkonsumenten.
            Gleichzeitig erhöhte Aktivität im anterioren cingulären Kortex (physischer Schmerz).
            Romantischer Trennungsschmerz ist real – er aktiviert dieselben Schmerzregionen wie
            physischer Schmerz.
          </p>
          <p>
            <strong>Ristock (2002):</strong> Frauen in lesbischen Beziehungen zweifeln besonders
            häufig an ihrer eigenen Wahrnehmung – weil gesellschaftliche Narrative Frauen nicht als
            Täterinnen konzipieren. Das macht das Gaslighting-Log für WLW-Beziehungen besonders
            wichtig: Die Fakten aufzuschreiben ist ein Akt des Widerstands gegen die Unsichtbarkeit
            dieser Erfahrungen.
          </p>
        </CalloutBold>
      </Section>

      {/* ── Begleit-Meditation ── */}
      <Section icon={<Sparkles className="h-4 w-4" />} label="Begleitende Meditation">
        <a
          href="https://www.youtube.com/watch?v=UnjielNyg08"
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-4 rounded-xl bg-gradient-to-br from-mauve/15 to-sage/15 p-4 transition hover:shadow-soft"
        >
          <div className="grid h-14 w-14 flex-shrink-0 place-items-center rounded-full bg-white/70 text-2xl">
            🧘
          </div>
          <div>
            <p className="font-display text-sm font-bold text-bordeaux">
              Gedankenkarussell stoppen · Einschlaf-Hypnose
            </p>
            <p className="text-xs text-graphite/70">ChakraTunes / Raphael Kempermann</p>
            <p className="mt-0.5 text-[11px] text-mauve underline">▹ Auf YouTube anhören</p>
          </div>
        </a>
      </Section>

      {/* ── Transformationsziele ── */}
      <TransformationGoals
        slug={SLUG}
        diagnosisLabel="Idealisierung · Kognitive Dissonanz · Hoovering"
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
            text: "Ich habe mit der 21-Tage-Challenge begonnen und mindestens den ersten Eintrag geschrieben.",
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

const GASLIGHTING_BEISPIELE = [
  {
    id: "tattoo",
    titel: "Eintrag 1 · Das Partnertattoo",
    color: "var(--color-bordeaux)",
    situation:
      'Wir hatten uns ein tiefes Partnertattoo stechen lassen – „Go" und „Stop". Nur 2 Monate später ließ Sandra ihr Tattoo einfach überstechen. Als ich in Tränen ausbrach, sagte sie genervt: „Es passt halt nicht mehr zu mir. Du reagierst total über."',
    gefuehl: "Ich dachte, ich sei zu klammernd. Ich redete mir ein, dass es ja nur ein Tattoo sei.",
    fakten:
      "Ein gemeinsames Tattoo ist ein massives Symbol für Bindung. Es nach 2 Monaten heimlich überstechen zu lassen, ist ein radikaler, verletzender Akt der Zurückweisung. Mein Schmerz war absolut angemessen.",
  },
  {
    id: "geburtstag",
    titel: "Eintrag 2 · Der Geburtstag",
    color: "var(--color-mauve)",
    situation:
      'Sandra hatte mir wochenlang versprochen, an meinem Geburtstag etwas Besonderes zu machen. Drei Tage vorher sagte sie mit einer fadenscheinigen Ausrede ab. Als ich enttäuscht war, wurde sie wütend: „Du bist so bedürftig. Deine Erwartungen erdrücken mich!"',
    gefuehl:
      "Ich dachte, meine Bedürfnisse nach Nähe und Zuverlässigkeit seien falsch.",
    fakten:
      "Es ist in jeder gesunden Beziehung der absolute Standard, Versprechen zu halten. Meine Enttäuschung war die einzig normale Reaktion.",
  },
  {
    id: "blockade",
    titel: "Eintrag 3 · Die Blockade",
    color: "var(--color-terracotta)",
    situation:
      "Nach einem harmonischen Vormittag rief ich am nächsten Tag an. Sandra blockte mich sofort genervt ab. Als ich fassungslos fragte, was das soll, sagte sie ich solle sie auch mal in Ruhe lassen. Sie legte auf und blockierte mich überall.",
    gefuehl: "Ich dachte, ich hätte etwas falsch gemacht. Ich suchte stundenlang nach meinem Fehler.",
    fakten:
      "Einen Menschen nach einem harmonischen Moment ohne Erklärung zu blockieren, ist keine normale Reaktion. Es ist ein Kontrollmechanismus.",
  },
];

const BOTENSTOFFE = [
  {
    name: "Dopamin",
    icon: <Zap className="h-5 w-5 text-bordeaux" />,
    desc: "Das Verlangen-Molekül. Wird nicht durch Genuss ausgeschüttet, sondern durch die Erwartung von Belohnung. Macht das Warten unerträglich – und das Warten selbst zur Sucht.",
  },
  {
    name: "Oxytocin",
    icon: <Heart className="h-5 w-5 text-bordeaux" />,
    desc: "Das Bindungshormon. Wird durch Berührung und Nähe ausgeschüttet. Erzeugt tiefes Vertrauen – auch zu Personen, die uns schaden. Macht Trennung körperlich schmerzhaft.",
  },
  {
    name: "Cortisol",
    icon: <Flame className="h-5 w-5 text-bordeaux" />,
    desc: 'Das Stresshormon. In Phasen des Rückzugs dauerhaft erhöht. Hält das Nervensystem in Alarmbereitschaft und verstärkt das Verlangen nach der einzigen bekannten „Lösung": ihr.',
  },
];

const PHASEN = [
  {
    label: "Idealisierung",
    emoji: "💛",
    color: "#a07800",
    desc: "Intensive Zuwendung, Komplimente, Nähe. Dopamin und Oxytocin fluten das System.",
  },
  {
    label: "Abwertung",
    emoji: "🌑",
    color: "var(--color-bordeaux)",
    desc: "Plötzlicher Rückzug, Kritik, Ghosting. Cortisol steigt. Du suchst den Fehler bei dir.",
  },
  {
    label: "Discard",
    emoji: "🌀",
    color: "#6b4f7a",
    desc: "Kognitive Dissonanz. Du zweifelst an dir. Du romanisierst die guten Phasen.",
  },
  {
    label: "Hoovering",
    emoji: "🪝",
    color: "var(--color-sage)",
    desc: "Sie kommt zurück. Ein Satz, ein Emoji. Der Dopamin-Hit ist überwältigend.",
  },
];

const TAKTIKEN = [
  {
    name: "Gaslighting",
    emoji: "🎭",
    color: "var(--color-bordeaux)",
    desc: '„Du verdrehst alles." „Du bist zu empfindlich." Deine Realität wird zur Erfindung erklärt.',
  },
  {
    name: "DARVO",
    emoji: "🔄",
    color: "var(--color-mauve)",
    desc: "Täter*in wird Opfer. Deine Reaktion auf Schmerz wird als Angriff umgedeutet.",
  },
  {
    name: "Pity Play",
    emoji: "💧",
    color: "var(--color-terracotta)",
    desc: '„Ich leide so sehr." Mitleid als Zugangscode zu deinen Grenzen.',
  },
  {
    name: "Friedens-Falle",
    emoji: "🕊",
    color: "var(--color-sage)",
    desc: '„Lass uns im Frieden sein." Frieden als Tarnung für: Schweig und vergib ohne Konsequenz.',
  },
  {
    name: "Falsche Äquivalenz",
    emoji: "⚖️",
    color: "var(--color-graphite)",
    desc: '„Wir waren beide schuld." Gewalt und Reaktion darauf werden gleichgesetzt.',
  },
];
