import { ScrollText, Brain, Lightbulb, Pencil, Microscope, Sparkles } from "lucide-react";
import { ChecklistGoals } from "@/components/checklist-goals";
import { ReflectionField } from "@/components/exercise-fields";
import { CollapsibleBox } from "@/components/collapsible-box";
import type { ModuleMeta } from "@/lib/modules";

/**
 * Spielbarer Stub für Module mit noch nicht ausgearbeitetem Buch-Inhalt.
 * Bietet die 6-Elemente-Struktur (Story · Diagnose · Lösung · Übung · Deep Dive · Checkliste)
 * mit Platzhalter-Texten + funktionierendem Auto-Save für eigene Reflexion.
 */
export function ModuleStub({ meta }: { meta: ModuleMeta }) {
  const slug = meta.slug;
  const topics = meta.stubTopics ?? [];
  const blurb =
    meta.stubBlurb ??
    "Dieses Modul wird in Kürze mit den finalen Inhalten gefüllt. Du kannst aber schon jetzt die Reflexionsübung nutzen – deine Antworten werden gespeichert.";

  return (
    <article className="space-y-7">
      <Section icon={<ScrollText className="h-4 w-4" />} label={`Schritt ${meta.number} · Vorschau`}>
        <div className="glass-card-strong p-5">
          <div className="space-y-3 animate-fade-in-stagger">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-mauve/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-mauve">
              <Sparkles className="h-3 w-3" /> Inhalt in Arbeit
            </span>
            <h3 className="font-display text-xl font-bold text-bordeaux">{meta.title}</h3>
            <p className="text-sm leading-relaxed text-graphite/85">{blurb}</p>
          </div>
        </div>
      </Section>

      <Section icon={<Brain className="h-4 w-4" />} label="Diagnose · Was kommt">
        <div className="diagnose-box space-y-2 text-sm">
          <p>
            Die ausführliche Diagnose und das wissenschaftliche Modell folgen mit dem nächsten Inhalts-Update.
            Eckpunkte:
          </p>
          {topics.length > 0 && (
            <ul className="ml-4 list-disc space-y-1 marker:text-sage">
              {topics.map((t, i) => (
                <li key={i}>{t}</li>
              ))}
            </ul>
          )}
        </div>
      </Section>

      <Section icon={<Lightbulb className="h-4 w-4" />} label="Lösung · Toolbox">
        <div className="loesung-box text-sm">
          <p>
            Die konkreten Tools und Übungssequenzen werden hier eingespielt, sobald die Original-Inhalte
            verfügbar sind. Der Aufbau folgt demselben Muster wie Modul 01.
          </p>
        </div>
      </Section>

      <Section icon={<Pencil className="h-4 w-4" />} label="Reflexion · Schon jetzt nutzbar">
        <div className="uebung-box space-y-3">
          <p className="text-sm">
            Was beschäftigt dich aktuell zu diesem Thema? Halte deine Gedanken fest – sie werden
            automatisch gespeichert und stehen dir später beim vollständigen Modul zur Verfügung.
          </p>
          <ReflectionField
            slug={slug}
            exerciseKey="freie_reflexion"
            label="Meine erste Reflexion"
            placeholder="Schreib einfach drauflos…"
            rows={5}
          />
        </div>
      </Section>

      <Section icon={<Microscope className="h-4 w-4" />} label="Deep Dive">
        <CollapsibleBox title="Wissenschaftlicher Hintergrund (folgt)">
          <p>
            In der finalen Version findest du hier Studienverweise, neurobiologische Erklärungen und
            weiterführende Literatur – kollabierbar, damit du Tiefe hast, ohne überflutet zu werden.
          </p>
        </CollapsibleBox>
      </Section>

      <ChecklistGoals
        slug={slug}
        goals={[
          { id: "g1", text: `Ich habe das Vorschau-Modul „${meta.title}" gelesen.` },
          { id: "g2", text: "Ich habe meine erste Reflexion zu diesem Thema festgehalten." },
          { id: "g3", text: "Ich verstehe, wo dieses Modul in meinem Heilungsweg steht." },
          { id: "g4", text: "Ich habe mindestens einen Begriff im Glossar nachgeschlagen." },
          { id: "g5", text: "Ich bin bereit, dieses Modul zu vertiefen, sobald der volle Inhalt da ist." },
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
