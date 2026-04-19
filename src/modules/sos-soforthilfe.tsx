import { CollapsibleBox } from "@/components/collapsible-box";
import { GlossarTerm } from "@/components/glossar-term";
import { ZoomableImage } from "@/components/zoomable-image";
import { ChecklistGoals } from "@/components/checklist-goals";
import { ReflectionField, ReflectionInput } from "@/components/exercise-fields";
import { DailyTracker } from "@/components/exercise/daily-tracker";
import {
  Brain,
  Lightbulb,
  ScrollText,
  Pencil,
  Microscope,
  Sparkles,
  Phone,
  Info,
} from "lucide-react";

const SLUG = "sos-soforthilfe";

/**
 * SOS · Notfallkoffer
 * Permanente Anlaufstelle: Mary/Sandra-Story (DIE SOS-Geschichte),
 * Selbst-Monitoring (DailyTracker mit Liniendiagramm),
 * Notfallkontakte mit Fallback-Hinweis.
 *
 * Die akuten Quick-Tools (TIPP, STOPP, 5-4-3-2-1, Urge-Surf, 4-7-8 Atem)
 * leben im globalen SosFloatingButton-Drawer und sind aus jedem Kapitel
 * heraus erreichbar – für die Zeit nach dem Buch und bei akuten Triggern
 * während der Buchbearbeitung.
 */
export function SosSoforthilfe() {
  return (
    <article className="space-y-7">
      {/* ─── STORY · 3:14 Uhr nachts ─── */}
      <Section icon={<ScrollText className="h-4 w-4" />} label="Story · 3:14 Uhr nachts">
        <div className="glass-card-strong p-5">
          <div className="grid gap-5 sm:grid-cols-[200px_1fr]">
            <ZoomableImage alt="Mary · Die erste Nacht" caption="Mary · Die erste Nacht" />
            <div className="space-y-3 text-sm leading-relaxed animate-fade-in-stagger">
              <h3 className="font-display text-base font-bold text-bordeaux">Der Kontaktabbruch</h3>
              <p>
                Eigentlich ist es ein sonniger, schöner Tag. Doch Mary kann nichts davon wirklich
                wahrnehmen. Sie sitzt auf ihrer Couch und starrt das tutende Smartphone an. Alles
                wirkt unwirklich auf sie. Ihr Herz hämmert so heftig gegen ihre Rippen, dass es
                schmerzt. Der Auslöser?
              </p>
              <p>
                Ein plötzlicher, eiskalter Kontaktabbruch von Sandra, nur 4 Tage nach einem innigen,
                harmonischen Wochenende. Marys Verstand rattert: <em>„Was habe ich falsch gemacht?
                Warum stoßt sie mich wieder weg?"</em> 3 Tage hatte sie Sandras Rückzug ausgehalten,
                doch paradoxerweise, je mehr sie aushielt, desto komischer und abweisender wurde
                Sandra. Schließlich stellte sie sie zur Rede, nicht anklagend, in einem ruhigen Ton.
                Doch Sandra legte auf und blockierte sie. Allein die Frage nach ihrem Verhalten löste
                aggressive Abwehr aus.
              </p>
              <p>
                Ihr Körper ist in Alarmbereitschaft. Die{" "}
                <GlossarTerm termKey="amygdala-hijacking">Amygdala</GlossarTerm> hat das Schweigen als
                Bedrohung registriert – so, als ob sie einer physischen Gefahr ausgesetzt wäre.
                Cortisol flutet. Der präfrontale Kortex, der Marys rationale Stimme ist, schaltet sich
                zunehmend ab. Was bleibt: Drang. Reflexe. Schmerz.
              </p>
              <p>
                Doch Mary weiß: Wenn sie jetzt zum Handy greift, füttert sie nur das Monster. Sie
                wankt ins Badezimmer, füllt das Waschbecken mit eiskaltem Wasser und taucht ihr
                Gesicht für 30 Sekunden unter. Der Tauchreflex kickt ein. Ihr Herzschlag wird ruhiger.{" "}
                <strong>Die Gefahr ist nicht real, es ist nur ihr Nervensystem.</strong>
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ─── DIAGNOSE ─── */}
      <Section icon={<Brain className="h-4 w-4" />} label="Diagnose · Was in deinem Körper passiert">
        <div className="diagnose-box space-y-3 text-sm">
          <p>
            Was du gerade erlebst – die Gedankenschleifen um 3 Uhr morgens, das Herzrasen, das Wissen,
            dass du gehen musst, und der Körper, der trotzdem zurückwill – ist kein Zeichen, dass du
            verrückt bist. Es ist ein neurobiologisches Ereignis. Dein Gehirn reagiert auf Trennung
            wie auf Drogenentzug. <GlossarTerm termKey="dopamin">Dopamin</GlossarTerm> bricht ein,
            Cortisol steigt, der präfrontale Kortex – dein rationales Denken – ist offline.
          </p>
          <p>
            Romantische Liebe aktiviert dieselben neuronalen Belohnungspfade wie Kokain (Fisher et
            al., 2005). Bei{" "}
            <GlossarTerm termKey="intermittierende-verstaerkung">intermittierender Verstärkung</GlossarTerm>{" "}
            – dem unvorhersehbaren Wechsel aus Nähe und Rückzug – wird dieses Belohnungssystem
            besonders stark konditioniert. Wir nennen sie{" "}
            <GlossarTerm termKey="trauma-bonding">Trauma-Bonding</GlossarTerm>.
          </p>
        </div>
      </Section>

      {/* ─── LÖSUNG · Selbst-Monitoring ─── */}
      <Section icon={<Lightbulb className="h-4 w-4" />} label="Lösung · Selbst-Monitoring">
        <div className="loesung-box space-y-3 text-sm">
          <p>
            Bevor du mit der aktiven Arbeit beginnst, ist Selbst-Monitoring das erste wirksame
            Werkzeug deiner Heilung. Kabat-Zinn (1990) zeigte: Die bloße Beobachtung eines Zustands
            – ohne ihn verändern zu müssen – aktiviert den präfrontalen Kortex und senkt die
            Amygdala-Reaktivität.
          </p>
          <p>
            Indem du <strong>täglich</strong> drei Werte dokumentierst – Schlafqualität,
            Körperspannung und Kontakt-Drang – schaffst du eine datenbasierte Außenperspektive auf
            dein Nervensystem. Im Trauma fühlen sich Zustände endlos an; tatsächliche Zahlen beweisen
            die Veränderlichkeit deines Erlebens.
          </p>
          <p className="rounded-lg bg-mauve/8 p-3 text-xs text-graphite/80">
            💡 <strong>Akute Krise jetzt?</strong> Tippe rechts unten auf den roten SOS-Button. Dort
            findest du die fünf Sofort-Tools (4-7-8 Atem, TIPP, 5-4-3-2-1, STOPP, Urge-Surf) plus
            Notfallnummern – aus jedem Kapitel heraus erreichbar.
          </p>
        </div>
      </Section>

      {/* ─── ÜBUNG 1 · Tägliches Tracking mit Liniendiagramm ─── */}
      <DailyTracker slug={SLUG} />

      {/* ─── ÜBUNG 2 · Notfall-Kontaktliste mit Fallback ─── */}
      <Section icon={<Pencil className="h-4 w-4" />} label="Übung 2 · Notfall-Kontaktliste">
        <div className="uebung-box space-y-3">
          <p className="text-sm">
            Trage jetzt – nicht in der Krise – mindestens eine Person pro Kategorie ein. Diese Liste
            kommt ans Handy und an den Kühlschrank.
          </p>
          <ReflectionInput
            slug={SLUG}
            exerciseKey="kontakt_a"
            label="💛 A · Wärme – jemand, der zuhört und nicht urteilt"
            placeholder="Name & Telefonnummer"
          />
          <ReflectionInput
            slug={SLUG}
            exerciseKey="kontakt_b"
            label="🧩 B · Struktur – jemand, der dir hilft, den Tag zu planen"
            placeholder="Name & Telefonnummer"
          />
          <ReflectionInput
            slug={SLUG}
            exerciseKey="kontakt_c"
            label="🩺 C · Professionell – Therapeutin oder Krisentelefon"
            placeholder="z.B. Telefonseelsorge 0800 111 0 111"
          />

          <div className="flex gap-3 rounded-xl border-l-4 border-mauve bg-mauve/8 p-3 text-xs leading-snug">
            <Info className="mt-0.5 h-4 w-4 flex-shrink-0 text-mauve" />
            <p>
              <strong>Du hast nicht drei verschiedene Personen?</strong> Eine einzige Person reicht
              auch – sie sollte nur ein wenig <strong>Einblick in die Thematik</strong> (toxische
              Bindung, Trauma-Bonding) haben, damit sie dich nicht mit „Du übertreibst" oder „Geh
              halt einfach zurück" zurück in den Strudel zieht. Wenn niemand verfügbar ist: Trag
              unter <strong>A</strong> und <strong>B</strong> ruhig die Telefonseelsorge ein – sie
              ist 24/7 ohne Wartezeit erreichbar.
            </p>
          </div>

          <div className="rounded-xl bg-[var(--color-sos)]/8 p-3">
            <p className="mb-2 text-[11px] font-semibold uppercase tracking-wider text-[var(--color-sos)]">
              Krisennummern · Kostenlos · 24/7
            </p>
            <div className="space-y-1.5">
              <a
                href="tel:08001110111"
                className="flex items-center gap-2 rounded-lg bg-white/85 p-2 text-xs hover:bg-white"
              >
                <Phone className="h-3.5 w-3.5 text-bordeaux" />
                <span><strong>Telefonseelsorge</strong> · 0800 111 0 111</span>
              </a>
              <a
                href="tel:08001160160"
                className="flex items-center gap-2 rounded-lg bg-white/85 p-2 text-xs hover:bg-white"
              >
                <Phone className="h-3.5 w-3.5 text-bordeaux" />
                <span><strong>Hilfetelefon Gewalt gegen Frauen</strong> · 0800 116 016</span>
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* ─── REFLEXION ─── */}
      <Section icon={<Pencil className="h-4 w-4" />} label="Reflexion · Dein erster Schritt">
        <div className="uebung-box space-y-3">
          <ReflectionField
            slug={SLUG}
            exerciseKey="erster_schritt"
            label="Was nimmst du dir aus diesem Modul mit – und was probierst du als Erstes aus?"
            placeholder="z.B. Ich werde heute Abend die Notfall-Kontaktliste fertig ausfüllen…"
          />
        </div>
      </Section>

      {/* ─── DEEP DIVE ─── */}
      <Section icon={<Microscope className="h-4 w-4" />} label="Deep Dive · Die 90-Sekunden-Regel">
        <CollapsibleBox title="Die Neurobiologie der Emotionswelle (Jill Bolte Taylor, 2006)">
          <p>
            Die Neuroanatomin Jill Bolte Taylor beschrieb, dass eine reine biochemische Emotionswelle
            nur <strong>90 Sekunden</strong> dauert. Was danach kommt, ist kein Gefühl mehr, sondern
            ein Gedanke, der die Emotion neu aktiviert. Wenn du 90 Sekunden lang nicht auf den Impuls
            reagierst, ist die ursprüngliche Welle vorbei.
          </p>
          <p>
            Das TIPP-Protokoll (Linehan, 1993) nutzt genau dieses Fenster. Du findest es zusammen mit
            STOPP, 5-4-3-2-1 und Urge-Surf jederzeit im SOS-Drawer (roter Button rechts unten).
          </p>
          <p className="text-xs italic text-graphite/65">
            Quellen: Linehan (1993), <em>DBT Skills Training Manual</em> · Taylor (2006), <em>My
            Stroke of Insight</em> · Fisher et al. (2005), <em>Romantic Love: An fMRI Study</em>.
          </p>
        </CollapsibleBox>
      </Section>

      {/* ─── BEGLEIT-MEDITATION ─── */}
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
              Nervensystem beruhigen &amp; Cortisol senken
            </p>
            <p className="text-xs text-graphite/70">2 Std · ChakraTunes / Raphael Kempermann</p>
            <p className="mt-0.5 text-[11px] text-mauve underline">▹ Auf YouTube anhören</p>
          </div>
        </a>
      </Section>

      {/* ─── CHECKLISTE ─── */}
      <ChecklistGoals
        slug={SLUG}
        goals={[
          { id: "g1", text: "Ich verstehe, dass mein Schmerz Entzug ist – keine Einbildung." },
          { id: "g2", text: "Ich habe heute meinen ersten Nervensystem-Eintrag gemacht." },
          { id: "g3", text: "Ich habe meine Notfall-Kontaktliste erstellt (auch Krisentelefon zählt)." },
          { id: "g4", text: "Ich weiß, wo der SOS-Button ist und welche fünf Tools dort warten." },
          { id: "g5", text: "Ich weiß: Eine Emotionswelle klingt nach 90 Sekunden ab – ich muss sie nur überstehen." },
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
