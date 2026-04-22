import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { GlossarTerm } from "@/components/glossar-term";

export const Route = createFileRoute("/einleitung")({
  component: Einleitung,
  head: () => ({
    meta: [
      { title: "Bevor du anfängst · UNBOND" },
      {
        name: "description",
        content:
          "Was UNBOND ist, der wissenschaftliche Aufbau, die fünf Säulen und der 4-Phasen-Heilungsweg.",
      },
      { property: "og:title", content: "Bevor du anfängst · UNBOND" },
      {
        property: "og:description",
        content: "Wissenschaftlicher Aufbau, 5 Säulen und 4-Phasen-Heilungsweg von UNBOND.",
      },
    ],
  }),
});

function Einleitung() {
  return (
    <main className="min-h-screen px-4 py-10 pb-24">
      <article className="mx-auto max-w-2xl space-y-7">
        <Link to="/inhalt" className="inline-flex items-center gap-1 text-sm text-bordeaux hover:underline">
          <ArrowLeft className="h-3.5 w-3.5" /> Inhaltsverzeichnis
        </Link>

        <header className="text-center animate-fade-in">
          <p className="inline-block rounded-full bg-mauve/15 px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-mauve">
            Einleitung
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-bordeaux">
            Bevor du anfängst
          </h1>
          <p className="mx-auto mt-2 max-w-md text-sm text-graphite/75">
            Was du hier findest – und was nicht.
          </p>
        </header>

        {/* Was ist UNBOND */}
        <section className="space-y-4 animate-fade-in">
          <SectionLabel>Was ist UNBOND?</SectionLabel>
          <div className="space-y-4 text-[15px] leading-relaxed text-graphite/90">
            <p>
              UNBOND – Breaking Chains ist ein strukturiertes Selbsthilfe-Begleitprogramm. Es
              ist kein Kurs, keine Fernlehre und kein Heilsversprechen. Es ist ein Raum, den du
              in deinem eigenen Tempo durchlaufen kannst – mit Texten, die dich ernst nehmen,
              mit Übungen, die du freiwillig ausprobieren kannst, und mit wissenschaftlichen
              Erklärungen, die dem Chaos in dir einen Namen geben.
            </p>
            <p>
              Jeder Abschnitt dieses Programms bietet dir Raum zur Selbsterkundung. Die Übungen
              unterstützen dich dabei, deine eigenen Muster zu erkennen. Es gibt hier keine
              Lernziele, keine Kompetenzversprechen und keine Prüfungen. Nur die Einladung,
              ehrlich zu dir zu sein – in deinem eigenen Tempo, mit deiner eigenen Geschichte.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 animate-fade-in-stagger pt-2">
            <IntroCard icon="🧬" title="Wissenschaftlich fundiert">
              Alle Inhalte basieren auf evidenzbasierten Ansätzen: kognitive
              Verhaltenstherapie (CBT), Akzeptanz- und Commitment-Therapie (ACT),
              Dialektisch-Behaviorale Therapie (DBT) sowie die{" "}
              <GlossarTerm termKey="polyvagal">Polyvagal-Theorie</GlossarTerm> nach Stephen
              Porges. Die Forschung von Sandra Langeslag und Helen Fishers Neurobiologie der
              Liebe bilden das wissenschaftliche Fundament.
            </IntroCard>
            <IntroCard icon="🌈" title="Queer & inklusiv">
              UNBOND wurde explizit für lesbische und queere Frauen geschrieben. Die
              spezifischen Herausforderungen von WLW-Beziehungen – Fusion, Community-Verlust,
              Late-Bloomer-Dynamiken, Heteronormativität – sind kein Randthema, sondern
              zentraler Bestandteil dieses Programms.
            </IntroCard>
            <IntroCard icon="💾" title="Deine Daten bleiben bei dir">
              Eingaben, Reflexionen und Übungen werden lokal in deinem Browser gespeichert
              (LocalStorage) und – bei Login – verschlüsselt auf EU-Servern in Frankfurt. Du
              kannst jederzeit weiterarbeiten, wo du aufgehört hast.
            </IntroCard>
            <IntroCard icon="⚠️" title="Wichtiger Hinweis">
              Dieses Programm ersetzt keine professionelle Psychotherapie. Bei akuten Krisen:{" "}
              <strong>Krisentelefon 0800 111 0 111</strong> · <strong>Hilfetelefon Gewalt
              gegen Frauen 0800 116 016</strong> (jeweils kostenlos, 24/7).
            </IntroCard>
          </div>
        </section>

        {/* Wissenschaftlicher Aufbau */}
        <section className="space-y-4 animate-fade-in">
          <SectionLabel>Der wissenschaftliche Aufbau der Module</SectionLabel>
          <div className="science-box space-y-3">
            <p>
              Dieses Buch ist streng wissenschaftlich fundiert und nicht einfach aus den Fingern
              gesogen. Um dich sicher durch den Prozess zu führen, hat jedes einzelne Kapitel
              exakt denselben strukturierten Aufbau:
            </p>
            <ol className="space-y-2.5">
              <Step icon="📖" title="Die Story">
                Beschreibt das Problem und die emotionale Situation, an der man leidet,
                veranschaulicht durch eine Szene von Mary und Sandra.
              </Step>
              <Step icon="🔬" title="Die Diagnose">
                Erklärt neurobiologisch und psychologisch, warum genau diese Situation entsteht
                und was in deinem Körper passiert.
              </Step>
              <Step icon="🗝️" title="Die Lösung">
                Zeigt dir konkrete, anwendbare Strategien, was du dagegen tun kannst.
              </Step>
              <Step icon="✏️" title="Die Übungen">
                Mindestens drei interaktive Praxis-Tools, um das Gelesene direkt in die Tat
                umzusetzen.
              </Step>
              <Step icon="🧠" title="Wissenschaftlicher Deep Dive">
                Bietet den theoretischen Kontext und die Studien, auf denen das Kapitel basiert.
              </Step>
            </ol>
            <div className="rounded-lg border-l-4 border-bordeaux bg-bordeaux/8 p-4 text-[14px] leading-relaxed">
              <strong className="text-bordeaux">Die Transformationsziele:</strong>{" "}
              Abschließend folgen in jedem Kapitel fünf Transformationsziele. Du solltest diese
              wahrheitsgetreu beantworten und am Ende mindestens drei davon ankreuzen können.
              Nur wenn du diese Meilensteine erreichst, hast du die Transformation für das
              jeweilige Modul vollzogen – und nur so schaffst du es nachhaltig, dich zu
              entlieben und dieser Hölle zu entkommen.
            </div>
          </div>
        </section>

        {/* 5 Säulen */}
        <section className="space-y-4 animate-fade-in">
          <SectionLabel>Warum dieses Programm funktioniert</SectionLabel>
          <p className="text-[15px] leading-relaxed text-graphite/90">
            UNBOND ist keine esoterische Selbsthilfe. Es ist ein evidenzbasiertes
            Begleitprogramm – und hier ist die wissenschaftliche Architektur, die dahintersteckt.
          </p>
          <div className="science-box">
            <h4 className="font-display font-bold text-bordeaux">📐 Das Interventionsdesign</h4>
            <p className="mt-2 text-[14px] leading-relaxed">
              UNBOND rekonzeptualisiert toxische Bindungsdynamiken nicht als bloße romantische
              Phänomene, sondern als neurobiologische Suchtprozesse:{" "}
              <GlossarTerm termKey="trauma-bonding">Trauma-Bonding</GlossarTerm>. Das primäre
              Ziel ist die Wiederherstellung deiner psychischen Flexibilität und physiologischen
              Regulation. Die Relevanz dieses Ansatzes begründet sich in der massiven
              Unterversorgung der queeren Zielgruppe, die nach toxischen Beziehungen mit
              einzigartigen, oft unsichtbaren Stressoren konfrontiert ist –{" "}
              <GlossarTerm termKey="minority-stress">Minority Stress</GlossarTerm>, kleine
              Dating-Pools, Community-Überschneidungen.
            </p>
          </div>

          <div className="grid gap-3 sm:grid-cols-2">
            <Pillar number="1" title="Emotionsregulation" color="sage">
              Langeslag et al. (2016):{" "}
              <GlossarTerm termKey="negative-reappraisal">Negative Reappraisal</GlossarTerm>{" "}
              reduziert Bindungsgefühle durch gezielte Verringerung der Amygdala-Aktivierung.
              Liebe lässt sich aktiv herunterregulieren.
            </Pillar>
            <Pillar number="2" title="ACT" color="mauve">
              Akzeptanz- &amp; Commitment-Therapie fördert psychologische Flexibilität:
              Achtsamkeit, kognitive Defusion und wertebasiertes Handeln. Du lernst, Gedanken
              zu haben, ohne ihnen zu gehorchen.
            </Pillar>
            <Pillar number="3" title="Neurobiologie & Somatik" color="terracotta">
              <GlossarTerm termKey="polyvagal">Polyvagal-Theorie</GlossarTerm> (Porges) &amp;
              Fisher: Liebeskummer aktiviert dieselben Hirnareale wie Kokainentzug. Dein
              Schmerz ist Beweis der Sucht – nicht der Qualität der Beziehung.
            </Pillar>
            <Pillar number="4" title="DBT" color="bordeaux">
              Linehan (1993): <GlossarTerm termKey="tipp">TIPP-Protokoll</GlossarTerm> – vier
              Sofortmaßnahmen, die dein Nervensystem physiologisch aus dem Alarmmodus holen.
            </Pillar>
            <Pillar number="5" title="Detached Mindfulness" color="sage">
              <GlossarTerm termKey="detached-mindfulness">Losgelöste Achtsamkeit</GlossarTerm>:
              Gedanken sind keine Fakten. Beobachten statt beweisen.
            </Pillar>
          </div>
        </section>

        {/* 4-Phasen-Heilungsweg */}
        <section className="space-y-4 animate-fade-in">
          <SectionLabel>Der 4-Phasen-Heilungsweg</SectionLabel>
          <div className="grid gap-3">
            <Phase n="1" title="Akutstabilisierung & Verstehen" range="SOS · Schritt 01">
              Physiologische Regulation und neurobiologisches Verständnis vor allem anderen.
            </Phase>
            <Phase n="2" title="Kognitive Entzauberung" range="Schritte 02 – 03">
              Systematische Dekonstruktion der Idealisierung &amp; Kontaktabbruch als Entzug.
            </Phase>
            <Phase n="3" title="Emotionsregulation" range="Schritte 04 – 05">
              Trigger-Landkarten, Polyvagal-Theorie &amp; ACT-Techniken.
            </Phase>
            <Phase n="4" title="Identitätsrekonstruktion" range="Schritte 06 – 10">
              Wertearbeit, Self-Expansion, posttraumatisches Wachstum.
            </Phase>
          </div>
        </section>

        {/* Mary & Sandra */}
        <section className="space-y-4 animate-fade-in">
          <SectionLabel>Mary &amp; Sandra · Deine Begleiterinnen</SectionLabel>
          <div className="glass-card-strong p-5">
            <div className="grid gap-5 sm:grid-cols-[200px_1fr]">
              <div className="aspect-[4/5] w-full overflow-hidden rounded-xl bg-gradient-to-br from-mauve/15 via-bordeaux/10 to-sage/15 ring-1 ring-bordeaux/15">
                <div className="grid h-full w-full place-items-center font-display text-5xl text-bordeaux/40">
                  M&amp;S
                </div>
              </div>
              <div className="space-y-3 text-sm leading-relaxed">
                <p>
                  Durch das gesamte Programm begleiten dich zwei fiktive Frauen:{" "}
                  <strong>Mary</strong> und <strong>Sandra</strong>. Ihre Geschichten basieren
                  auf realen Erlebnissen und zeigen die zwei häufigsten Positionen einer
                  toxischen Dynamik.
                </p>
                <p>
                  <strong>Mary</strong> liebt offen, roh, unkontrolliert. Sie gibt alles,
                  manchmal mehr als sie hat. Ihr Nervensystem hat gelernt, Schmerz als
                  Vertrautheit zu codieren.
                </p>
                <p>
                  <strong>Sandra</strong> liebt zögerlich, kontrolliert, ausweichend. Bindung
                  bedeutet für sie Bedrohung – und genau dieses Muster erzeugt bei Mary die
                  Sucht, die das{" "}
                  <GlossarTerm termKey="trauma-bonding">Trauma-Bonding</GlossarTerm> am Leben
                  hält.
                </p>
              </div>
            </div>
          </div>
        </section>

        <div className="flex items-center justify-between gap-3 pt-4">
          <Link
            to="/inhalt"
            className="inline-flex items-center gap-1 rounded-md border border-bordeaux/20 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-bordeaux transition hover:bg-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Inhalt
          </Link>
          <Link
            to="/routing"
            className="inline-flex items-center gap-1.5 rounded-md bg-bordeaux px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-elegant transition hover:opacity-90"
          >
            Wo stehst du? <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </article>
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

function Step({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 rounded-lg bg-white/55 p-3">
      <span className="text-xl flex-shrink-0">{icon}</span>
      <div className="text-[14px] leading-snug">
        <strong className="text-bordeaux">{title}:</strong> {children}
      </div>
    </li>
  );
}

function Pillar({
  number,
  title,
  color,
  children,
}: {
  number: string;
  title: string;
  color: "sage" | "mauve" | "terracotta" | "bordeaux";
  children: React.ReactNode;
}) {
  const border = {
    sage: "border-t-sage",
    mauve: "border-t-mauve",
    terracotta: "border-t-terracotta",
    bordeaux: "border-t-bordeaux",
  }[color];
  return (
    <div className={`rounded-lg border-t-4 bg-white/65 p-4 ${border}`}>
      <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-bordeaux">
        🔬 Säule {number}
      </p>
      <h4 className="font-display text-sm font-bold text-bordeaux">{title}</h4>
      <p className="mt-1 text-[12.5px] leading-snug text-graphite/85">{children}</p>
    </div>
  );
}

function Phase({ n, title, range, children }: { n: string; title: string; range: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4 rounded-xl border border-border/60 bg-white/65 p-4">
      <div className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full bg-gradient-to-br from-bordeaux to-mauve font-display text-base font-bold text-white">
        {n}
      </div>
      <div>
        <div className="flex items-baseline gap-3">
          <h4 className="font-display text-sm font-bold text-bordeaux">{title}</h4>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-mauve">{range}</span>
        </div>
        <p className="mt-1 text-[13px] leading-snug text-graphite/80">{children}</p>
      </div>
    </div>
  );
}
