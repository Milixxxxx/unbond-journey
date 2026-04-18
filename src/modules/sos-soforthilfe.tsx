import { CollapsibleBox } from "@/components/collapsible-box";
import { GlossarTerm } from "@/components/glossar-term";
import { ZoomableImage } from "@/components/zoomable-image";
import { ChecklistGoals } from "@/components/checklist-goals";
import {
  ReflectionField,
  ReflectionInput,
  SliderField,
} from "@/components/exercise-fields";
import { Brain, Lightbulb, ScrollText, Pencil, Microscope } from "lucide-react";

const SLUG = "kapitel-0";

export function Kapitel0() {
  return (
    <article className="space-y-7">
      {/* Story */}
      <Section icon={<ScrollText className="h-4 w-4" />} label="Story · 3:14 Uhr nachts">
        <div className="glass-card-strong p-5">
          <div className="grid gap-5 sm:grid-cols-[200px_1fr]">
            <ZoomableImage alt="Mary · Die erste Nacht" caption="Mary · 3:14 Uhr" />
            <div className="space-y-3 text-sm leading-relaxed animate-fade-in-stagger">
              <h3 className="font-display text-base font-bold text-bordeaux">Der Kontaktabbruch</h3>
              <p>
                Eigentlich ist es ein sonniger Tag. Mary sitzt auf der Couch und starrt das tutende
                Smartphone an. Ihr Herz hämmert so heftig gegen die Rippen, dass es schmerzt. Vier Tage
                nach einem innigen Wochenende: Sandra blockiert sie überall.
              </p>
              <p>
                Marys Verstand rattert: <em>„Was habe ich falsch gemacht?"</em> Drei Tage hatte sie
                Sandras Rückzug ausgehalten. Doch je mehr sie aushielt, desto abweisender wurde Sandra.
                Ein ruhiger Anruf, eine Frage – Sandra legte auf und blockierte.
              </p>
              <p>
                Marys Körper ist in Alarmbereitschaft. Die Amygdala hat das Schweigen als Bedrohung
                registriert. Cortisol flutet. Der präfrontale Kortex schaltet sich ab. Was bleibt: Drang.
                Reflexe. Schmerz.
              </p>
              <p>
                Doch Mary weiß: Wenn sie jetzt zum Handy greift, füttert sie nur das Monster. Sie wankt
                ins Badezimmer, taucht ihr Gesicht für 30 Sekunden in eiskaltes Wasser. Der Tauchreflex
                kickt ein. Ihr Herzschlag wird ruhiger. Die Gefahr war nicht real – es war nur ihr
                Nervensystem.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Diagnose */}
      <Section icon={<Brain className="h-4 w-4" />} label="Diagnose · Was in deinem Körper passiert">
        <div className="diagnose-box space-y-3 text-sm">
          <p>
            Was du gerade erlebst – die Gedankenschleifen um 3 Uhr morgens, das Herzrasen, wenn ihr Name
            auftaucht – ist kein Zeichen, dass du verrückt bist. Es ist ein neurobiologisches Ereignis.
            Dein Gehirn reagiert auf Trennung wie auf Drogenentzug.{" "}
            <GlossarTerm termKey="dopamin">Dopamin</GlossarTerm> bricht ein. Cortisol steigt.
          </p>
          <p>
            Romantische Liebe aktiviert dieselben neuronalen Belohnungspfade wie Kokain (Fisher et al.,
            2005). Bei{" "}
            <GlossarTerm termKey="intermittierende-verstaerkung">
              intermittierender Verstärkung
            </GlossarTerm>{" "}
            – dem unvorhersehbaren Wechsel aus Nähe und Rückzug – wird dieses Belohnungssystem besonders
            stark konditioniert. Wir nennen sie{" "}
            <GlossarTerm termKey="trauma-bonding">Trauma-Bonding</GlossarTerm>.
          </p>
        </div>
      </Section>

      {/* Lösung */}
      <Section icon={<Lightbulb className="h-4 w-4" />} label="Lösung · Dein Ausgangspunkt">
        <div className="loesung-box space-y-3 text-sm">
          <p>
            Bevor du mit der aktiven Arbeit beginnst, ist Selbst-Monitoring das erste wirksame Werkzeug
            deiner Heilung. Die bloße Beobachtung eines Zustands – ohne ihn verändern zu müssen –
            aktiviert den präfrontalen Kortex und senkt die Amygdala-Reaktivität.
          </p>
          <p>
            Indem du täglich drei Werte dokumentierst – <strong>Schlafqualität</strong>,{" "}
            <strong>Körperspannung</strong>, <strong>Kontakt-Drang</strong> – schaffst du eine
            datenbasierte Außenperspektive auf dein Nervensystem.
          </p>
        </div>
      </Section>

      {/* Übung 1 */}
      <Section icon={<Pencil className="h-4 w-4" />} label="Übung 1 · Nervensystem-Check">
        <div className="uebung-box space-y-4">
          <p className="text-sm">
            Bewerte jeden Wert auf 0–10. Dein erster Eintrag ist dein Ausgangspunkt.
          </p>
          <div className="space-y-4 rounded-lg bg-white/65 p-4">
            <SliderField slug={SLUG} exerciseKey="schlaf" label="😴 Schlafqualität" hint="0 = kaum geschlafen · 10 = erholt" />
            <SliderField slug={SLUG} exerciseKey="anspannung" label="😤 Körperanspannung" hint="0 = entspannt · 10 = unter Strom" />
            <SliderField slug={SLUG} exerciseKey="drang" label="📱 Kontakt-Drang" hint="0 = gar nicht · 10 = übermächtig" />
          </div>
          <p className="text-xs text-graphite/60">💾 Wird automatisch gespeichert.</p>
        </div>
      </Section>

      {/* Übung 2 */}
      <Section icon={<Pencil className="h-4 w-4" />} label="Übung 2 · Notfall-Kontaktliste">
        <div className="uebung-box space-y-3">
          <p className="text-sm">
            Trage jetzt – nicht in der Krise – mindestens eine Person pro Kategorie ein.
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
            label="🧩 B · Struktur – jemand, der dir hilft den Tag zu planen"
            placeholder="Name & Telefonnummer"
          />
          <ReflectionInput
            slug={SLUG}
            exerciseKey="kontakt_c"
            label="🩺 C · Professionell – Therapeutin oder Krisentelefon"
            placeholder="z.B. Telefonseelsorge 0800 111 0 111"
          />
        </div>
      </Section>

      {/* Deep Dive */}
      <Section icon={<Microscope className="h-4 w-4" />} label="Deep Dive · Neurobiologie der Bindung">
        <CollapsibleBox icon={<Microscope className="h-4 w-4" />} title="Studien & Quellen">
          <p>
            Fisher et al. (2005) zeigten mittels fMRT, dass romantische Liebe dieselben Hirnareale
            aktiviert wie Kokainkonsum – insbesondere das ventrale tegmentale Areal (VTA) und den
            Nucleus accumbens.
          </p>
          <p>
            Dutton &amp; Painter (1993) beschrieben{" "}
            <GlossarTerm termKey="trauma-bonding">Trauma-Bonding</GlossarTerm> als Bindung, die nicht
            trotz, sondern wegen des Schmerzes entsteht. Skinner (1938) zeigte: Intermittierende
            Verstärkung erzeugt die hartnäckigste Konditionierung überhaupt – stärker als konstante
            Belohnung.
          </p>
        </CollapsibleBox>
      </Section>

      {/* Checkliste */}
      <ChecklistGoals
        slug={SLUG}
        goals={[
          { id: "g1", text: "Ich verstehe, dass mein Schmerz Entzug ist – keine Einbildung." },
          { id: "g2", text: "Ich habe meinen Nervensystem-Check ausgefüllt." },
          { id: "g3", text: "Ich habe meine Notfall-Kontaktliste erstellt." },
          { id: "g4", text: "Ich kenne die Begriffe Dopamin, Trauma-Bonding und intermittierende Verstärkung." },
          { id: "g5", text: "Ich weiß, dass Selbst-Monitoring bereits Teil der Heilung ist." },
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
