import { createFileRoute, Link } from "@tanstack/react-router";
import { CrisisBanner } from "@/components/crisis-banner";
import { ZoomableImage } from "@/components/zoomable-image";
import { GlossarTerm } from "@/components/glossar-term";
import { Brain, FlaskConical, HeartHandshake, Microscope, ScrollText, Sparkles, Lightbulb, Pencil, ListChecks } from "lucide-react";

export const Route = createFileRoute("/willkommen")({
  component: Welcome,
  head: () => ({
    meta: [
      { title: "Bevor du anfängst · UNBOND" },
      {
        name: "description",
        content: "Was UNBOND ist, was es nicht ist – und wie das Programm aufgebaut ist.",
      },
    ],
  }),
});

function Welcome() {
  return (
    <main className="min-h-screen px-4 py-8 pb-24">
      <div className="mx-auto max-w-2xl space-y-7">
        <Link to="/dashboard" className="text-sm text-bordeaux hover:underline">
          ← Zum Dashboard
        </Link>

        <header className="text-center animate-fade-in">
          <p className="text-xs font-semibold uppercase tracking-widest text-mauve">Einleitung</p>
          <h1 className="mt-2 font-display text-3xl font-extrabold text-bordeaux">
            Bevor du anfängst
          </h1>
          <p className="mx-auto mt-2 max-w-md text-sm text-graphite/75">
            Was du hier findest – und was nicht.
          </p>
        </header>

        <CrisisBanner />

        {/* Was ist UNBOND */}
        <section className="space-y-4 animate-fade-in">
          <SectionLabel>Was ist UNBOND?</SectionLabel>
          <p>
            UNBOND – Breaking Chains ist ein strukturiertes Selbsthilfe-Begleitprogramm. Es ist
            kein Kurs, keine Fernlehre und kein Heilsversprechen. Es ist ein Raum, den du in
            deinem eigenen Tempo durchlaufen kannst – mit Texten, die dich ernst nehmen, mit
            Übungen, die du freiwillig ausprobieren kannst, und mit wissenschaftlichen
            Erklärungen, die dem Chaos in dir einen Namen geben.
          </p>

          <div className="grid gap-3 sm:grid-cols-2 animate-fade-in-stagger">
            <IntroCard icon="🧬" title="Wissenschaftlich fundiert">
              CBT, ACT, DBT, <GlossarTerm termKey="polyvagal">Polyvagal-Theorie</GlossarTerm>,
              Langeslag, Fisher.
            </IntroCard>
            <IntroCard icon="🌈" title="Queer & inklusiv">
              Geschrieben für lesbische und queere Frauen.{" "}
              <GlossarTerm termKey="minority-stress">Minority Stress</GlossarTerm>, Fusion,
              Late-Bloomer.
            </IntroCard>
            <IntroCard icon="🇪🇺" title="Daten in Frankfurt">
              EU-Hosting, DSGVO, geräteübergreifend. Keine Tracker.
            </IntroCard>
            <IntroCard icon="⚠️" title="Wichtiger Hinweis">
              Ersetzt keine Psychotherapie. Bei akuten Krisen: <strong>0800 116 016</strong>.
            </IntroCard>
          </div>
        </section>

        {/* Aufbau der Module */}
        <section className="space-y-4 animate-fade-in">
          <SectionLabel>Der Aufbau jedes Moduls</SectionLabel>
          <div className="science-box">
            <p className="mb-4">
              Jedes der 10 Module folgt exakt derselben Struktur. Das gibt dir Orientierung – und
              dem Chaos einen Rahmen.
            </p>
            <ol className="space-y-2.5">
              <Step icon={<ScrollText className="h-4 w-4" />} title="Story">
                Eine Szene mit Mary &amp; Sandra. Du erkennst dich wieder.
              </Step>
              <Step icon={<Brain className="h-4 w-4" />} title="Diagnose">
                Was neurobiologisch passiert. Mit Namen statt Schuld.
              </Step>
              <Step icon={<Lightbulb className="h-4 w-4" />} title="Lösung">
                Konkrete, anwendbare Strategie. „Du kannst…"
              </Step>
              <Step icon={<Pencil className="h-4 w-4" />} title="Übungen">
                Mindestens drei interaktive Praxis-Tools.
              </Step>
              <Step icon={<Microscope className="h-4 w-4" />} title="Deep Dive">
                Studien und Quellen für alle, die es genau wissen wollen.
              </Step>
              <Step icon={<ListChecks className="h-4 w-4" />} title="5 Transformationsziele">
                Ab 3 von 5 erreichst du den Modul-Badge.
              </Step>
            </ol>
          </div>
        </section>

        {/* 5 Säulen */}
        <section className="space-y-4 animate-fade-in">
          <SectionLabel>Warum dieses Programm funktioniert</SectionLabel>
          <p>
            Fünf wissenschaftliche Säulen tragen UNBOND. Du musst sie nicht studieren – nur
            anwenden.
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            <Pillar number="1" title="Emotionsregulation" color="sage">
              Langeslag (2016):{" "}
              <GlossarTerm termKey="negative-reappraisal">Negative Reappraisal</GlossarTerm>{" "}
              reduziert Bindungsgefühle messbar.
            </Pillar>
            <Pillar number="2" title="ACT" color="mauve">
              Akzeptanz &amp; Commitment-Therapie: Gedanken haben, ohne ihnen zu gehorchen.
            </Pillar>
            <Pillar number="3" title="Neurobiologie" color="terracotta">
              Fisher: Liebeskummer aktiviert dieselben Areale wie Kokainentzug.
            </Pillar>
            <Pillar number="4" title="DBT" color="bordeaux">
              <GlossarTerm termKey="tipp">TIPP-Protokoll</GlossarTerm>: vier Sofortmaßnahmen für
              akute Krisen.
            </Pillar>
            <Pillar number="5" title="Detached Mindfulness" color="sage">
              <GlossarTerm termKey="detached-mindfulness">Losgelöste Achtsamkeit</GlossarTerm>:
              Gedanken sind keine Fakten.
            </Pillar>
          </div>
        </section>

        {/* Mary & Sandra */}
        <section className="space-y-4 animate-fade-in">
          <SectionLabel>Mary &amp; Sandra · Deine Begleiterinnen</SectionLabel>
          <div className="glass-card-strong p-5">
            <div className="grid gap-5 sm:grid-cols-[200px_1fr]">
              <ZoomableImage alt="Mary und Sandra" caption="Mary & Sandra · Zwei Seiten einer Bindung" />
              <div className="space-y-3 text-sm">
                <p>
                  Durch das gesamte Programm begleiten dich zwei fiktive Frauen: <strong>Mary</strong>{" "}
                  und <strong>Sandra</strong>. Ihre Geschichten basieren auf realen Erlebnissen und
                  zeigen die zwei häufigsten Positionen einer toxischen Dynamik.
                </p>
                <p>
                  <strong>Mary</strong> liebt offen, roh, unkontrolliert. Sie gibt alles, manchmal
                  mehr als sie hat. Ihr Nervensystem hat gelernt, Schmerz als Vertrautheit zu codieren.
                </p>
                <p>
                  <strong>Sandra</strong> liebt zögerlich, kontrolliert, ausweichend. Bindung
                  bedeutet für sie Bedrohung – und genau dieses Muster erzeugt bei Mary die Sucht,
                  die das{" "}
                  <GlossarTerm termKey="trauma-bonding">Trauma-Bonding</GlossarTerm> am Leben hält.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="flex justify-center pt-4">
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-2 rounded-md bg-bordeaux px-7 py-3.5 text-sm font-semibold uppercase tracking-wider text-white shadow-elegant transition hover:opacity-90"
          >
            <Sparkles className="h-4 w-4" /> Zu deinem Pfad
          </Link>
        </div>
      </div>
    </main>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="text-xs font-semibold uppercase tracking-[0.18em] text-mauve">
      {children}
    </div>
  );
}

function IntroCard({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) {
  return (
    <div className="glass-card p-4">
      <div className="mb-1.5 text-2xl">{icon}</div>
      <h3 className="font-display text-sm font-bold text-bordeaux">{title}</h3>
      <p className="mt-1 text-xs leading-snug text-graphite/80">{children}</p>
    </div>
  );
}

function Step({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 rounded-lg bg-white/55 p-2.5">
      <span className="mt-0.5 grid h-7 w-7 flex-shrink-0 place-items-center rounded-full bg-sage/25 text-bordeaux">
        {icon}
      </span>
      <div className="text-sm">
        <strong className="text-bordeaux">{title}:</strong> {children}
      </div>
    </li>
  );
}

function Pillar({ number, title, color, children }: { number: string; title: string; color: "sage" | "mauve" | "terracotta" | "bordeaux"; children: React.ReactNode }) {
  const border = {
    sage: "border-t-sage",
    mauve: "border-t-mauve",
    terracotta: "border-t-terracotta",
    bordeaux: "border-t-bordeaux",
  }[color];
  return (
    <div className={`rounded-lg border-t-4 bg-white/65 p-4 ${border}`}>
      <p className="mb-1 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-bordeaux">
        <FlaskConical className="h-3.5 w-3.5" /> Säule {number}
      </p>
      <h4 className="font-display text-sm font-bold text-bordeaux">{title}</h4>
      <p className="mt-1 text-xs text-graphite/80">{children}</p>
    </div>
  );
}
