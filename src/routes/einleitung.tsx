import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { GlossarTerm } from "@/components/glossar-term";
import { LightboxImage } from "@/components/lightbox-image";
import { TextCollapse } from "@/components/text-collapse";
import marySandraIntro from "@/assets/book/mary-sandra-intro.png.asset.json";
import poemImg1 from "@/assets/poem-liebe-1.png.asset.json";
import poemImg2 from "@/assets/poem-liebe-2.png.asset.json";

export const Route = createFileRoute("/einleitung")({
  component: Einleitung,
  head: () => ({
    meta: [
      { title: "Bevor du anfängst · UNBOND" },
      {
        name: "description",
        content:
          "Marys Geschichte und wie du UNBOND nutzt – kompakt, mit optionalen Vertiefungen.",
      },
      { property: "og:title", content: "Bevor du anfängst · UNBOND" },
      {
        property: "og:description",
        content: "Marys Geschichte und der Umgang mit dem Buch – kompakt erklärt.",
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
            Marys Geschichte – und wie du dieses Buch nutzt.
          </p>
        </header>

        {/* Marys Geschichte – kurz, mit umflossenem Bild */}
        <section className="glass-card p-5 md:p-6 text-[15px] leading-relaxed text-graphite/90 animate-fade-in">
          <LightboxImage
            src={marySandraIntro.url}
            alt="Mary und Sandra – zwei Frauen, Rücken an Rücken"
            className="float-left mb-3 mr-5 w-36 overflow-hidden rounded-2xl shadow-elegant sm:w-48"
            hint="Bild vergrößern"
          />
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-mauve">
            Am Anfang war das Gefühl
          </h2>
          <p className="mt-2">
            Ein gewöhnlicher Nachmittag, ein Café. Sandra hörte zu, wirklich
            zu. Mary dachte, sie sei endlich angekommen.
          </p>
          <p className="mt-3">
            Was sie nicht wusste: Das Kribbeln, das Gefühl tiefer
            Verbundenheit – das ist keine Magie. Es ist Neurobiologie.{" "}
            <GlossarTerm termKey="dopamin">Dopamin</GlossarTerm>, Oxytocin,
            Serotonin. Ihre Liebe war real – und von Anfang an anfällig für
            eine Dynamik, die größer war als sie selbst.
          </p>
          <div className="clear-both" />

          <div className="mt-4">
            <TextCollapse
              moreLabel="Mehr über Mary &amp; Sandra"
              lessLabel="Einklappen"
              childThreshold={1}
              preview={0}
            >
              <p className="text-[14px] leading-relaxed text-graphite/85">
                Durch das gesamte Programm begleiten dich zwei fiktive Frauen.{" "}
                <strong>Mary</strong> liebt offen, roh, unkontrolliert – ihr
                Nervensystem hat gelernt, Schmerz als Vertrautheit zu codieren.{" "}
                <strong>Sandra</strong> liebt zögerlich, ausweichend – Bindung
                bedeutet für sie Bedrohung. Genau dieses Muster erzeugt bei
                Mary die Sucht, die das{" "}
                <GlossarTerm termKey="trauma-bonding">Trauma-Bonding</GlossarTerm>{" "}
                am Leben hält.
              </p>
            </TextCollapse>
          </div>
        </section>

        {/* MUSS-LESEN: So nutzt du dieses Buch */}
        <section className="science-box space-y-3 animate-fade-in border-l-4 border-bordeaux">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-bordeaux">
            ★ Bitte lesen · So nutzt du dieses Buch
          </p>
          <p className="text-[15px] leading-relaxed">
            Jedes Kapitel folgt demselben Bogen – damit du dich auf die innere
            Arbeit konzentrieren kannst, nicht auf die Form:
          </p>
          <ol className="space-y-2">
            <Step icon="📖" title="Story">
              Eine Szene aus Marys Leben macht das Muster greifbar.
            </Step>
            <Step icon="🔬" title="Diagnose">
              Neurobiologie &amp; Psychologie: Was passiert gerade in dir?
            </Step>
            <Step icon="🗝️" title="Lösung">
              Konkrete Strategien – keine Theorie ohne Handlung.
            </Step>
            <Step icon="✏️" title="Übungen">
              Interaktive Werkzeuge für deinen Alltag.
            </Step>
            <Step icon="🧠" title="Deep Dive (optional)">
              Studien-Kontext für alle, die tiefer wollen.
            </Step>
          </ol>
          <div className="rounded-lg border-l-4 border-bordeaux bg-bordeaux/8 p-3 text-[14px] leading-relaxed">
            <strong className="text-bordeaux">Transformationsziele:</strong>{" "}
            Jedes Kapitel endet mit fünf Zielen. Mindestens drei ehrlich
            beantwortet = Kapitel abgeschlossen.
          </div>
          <div className="rounded-lg border-l-4 border-terracotta bg-terracotta/8 p-3 text-[13px] leading-relaxed">
            <strong>⚠️ Krise:</strong> UNBOND ersetzt keine Therapie. Akut:{" "}
            <strong>Krisentelefon 0800 111 0 111</strong> ·{" "}
            <strong>Hilfetelefon Gewalt 0800 116 016</strong> (kostenlos, 24/7).
          </div>
        </section>

        {/* Optional · Vertiefungen */}
        <section className="space-y-3 animate-fade-in">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-mauve">
            Optional · Vertiefungen
          </p>

          <Details summary="🧬 Wissenschaftliche Grundlagen &amp; die 5 Säulen">
            <p className="text-[14px] leading-relaxed">
              UNBOND rekonzeptualisiert toxische Bindungen als
              neurobiologische Suchtprozesse:{" "}
              <GlossarTerm termKey="trauma-bonding">Trauma-Bonding</GlossarTerm>.
              Inhalte basieren auf CBT, ACT, DBT und der{" "}
              <GlossarTerm termKey="polyvagal">Polyvagal-Theorie</GlossarTerm>.
            </p>
            <div className="mt-3 grid gap-2 sm:grid-cols-2">
              <Pillar n="1" t="Emotionsregulation" c="sage">
                Langeslag (2016):{" "}
                <GlossarTerm termKey="negative-reappraisal">
                  Negative Reappraisal
                </GlossarTerm>{" "}
                reduziert Bindungsgefühle aktiv.
              </Pillar>
              <Pillar n="2" t="ACT" c="mauve">
                Akzeptanz &amp; Commitment – Gedanken haben, ohne ihnen zu
                gehorchen.
              </Pillar>
              <Pillar n="3" t="Neurobiologie &amp; Somatik" c="terracotta">
                Liebeskummer = Kokainentzug. Dein Schmerz ist Beweis der
                Sucht, nicht der Liebe.
              </Pillar>
              <Pillar n="4" t="DBT" c="bordeaux">
                <GlossarTerm termKey="tipp">TIPP-Protokoll</GlossarTerm> – aus
                dem Alarmmodus zurück.
              </Pillar>
              <Pillar n="5" t="Detached Mindfulness" c="sage">
                <GlossarTerm termKey="detached-mindfulness">
                  Losgelöste Achtsamkeit
                </GlossarTerm>{" "}
                – beobachten statt beweisen.
              </Pillar>
            </div>
          </Details>

          <Details summary="🧭 Der 4-Phasen-Heilungsweg">
            <div className="grid gap-2">
              <Phase n="1" t="Akutstabilisierung" r="SOS · Schritt 01">
                Physiologische Regulation zuerst.
              </Phase>
              <Phase n="2" t="Kognitive Entzauberung" r="Schritte 02–03">
                Idealisierung dekonstruieren, Kontaktabbruch als Entzug.
              </Phase>
              <Phase n="3" t="Emotionsregulation" r="Schritte 04–05">
                Trigger-Landkarten, Polyvagal &amp; ACT.
              </Phase>
              <Phase n="4" t="Identitätsrekonstruktion" r="Schritte 06–10">
                Werte, Self-Expansion, posttraumatisches Wachstum.
              </Phase>
            </div>
          </Details>

          <Details summary="✉︎ Gedicht: „Liebe fragt nicht nach der Uhr"">
            <p className="text-[13px] text-graphite/75">
              Tippe auf den Brief, um ihn in voller Größe zu lesen.
            </p>
            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <LightboxImage
                src={poemImg1.url}
                alt="Liebe fragt nicht nach der Uhr – Teil 1"
                className="w-full overflow-hidden rounded-2xl shadow-soft ring-1 ring-bordeaux/10"
                hint="Vergrößern"
              />
              <LightboxImage
                src={poemImg2.url}
                alt="Liebe fragt nicht nach der Uhr – Teil 2"
                className="w-full overflow-hidden rounded-2xl shadow-soft ring-1 ring-bordeaux/10"
                hint="Vergrößern"
              />
            </div>
            <p className="mt-2 text-center text-[11px] italic text-graphite/60">
              — Unbekannter Autor, Mai 2024
            </p>
          </Details>
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

function Step({ icon, title, children }: { icon: string; title: string; children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3 rounded-lg bg-white/55 p-2.5">
      <span className="text-lg flex-shrink-0">{icon}</span>
      <div className="text-[14px] leading-snug">
        <strong className="text-bordeaux">{title}:</strong> {children}
      </div>
    </li>
  );
}

function Pillar({
  n,
  t,
  c,
  children,
}: {
  n: string;
  t: string;
  c: "sage" | "mauve" | "terracotta" | "bordeaux";
  children: React.ReactNode;
}) {
  const border = {
    sage: "border-t-sage",
    mauve: "border-t-mauve",
    terracotta: "border-t-terracotta",
    bordeaux: "border-t-bordeaux",
  }[c];
  return (
    <div className={`rounded-lg border-t-4 bg-white/65 p-3 ${border}`}>
      <p className="text-[10px] font-bold uppercase tracking-wider text-bordeaux">
        Säule {n}
      </p>
      <h4 className="font-display text-sm font-bold text-bordeaux">{t}</h4>
      <p className="mt-1 text-[12.5px] leading-snug text-graphite/85">{children}</p>
    </div>
  );
}

function Phase({ n, t, r, children }: { n: string; t: string; r: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-3 rounded-xl border border-border/60 bg-white/65 p-3">
      <div className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full bg-gradient-to-br from-bordeaux to-mauve font-display text-sm font-bold text-white">
        {n}
      </div>
      <div>
        <div className="flex items-baseline gap-3">
          <h4 className="font-display text-sm font-bold text-bordeaux">{t}</h4>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-mauve">{r}</span>
        </div>
        <p className="mt-0.5 text-[13px] leading-snug text-graphite/80">{children}</p>
      </div>
    </div>
  );
}

function Details({ summary, children }: { summary: string; children: React.ReactNode }) {
  return (
    <details className="group rounded-xl border border-border/60 bg-white/55 p-4 transition-colors open:bg-white/75">
      <summary className="cursor-pointer list-none text-sm font-semibold text-bordeaux marker:hidden flex items-center justify-between gap-3">
        <span dangerouslySetInnerHTML={{ __html: summary }} />
        <span className="text-mauve transition-transform group-open:rotate-180">▾</span>
      </summary>
      <div className="mt-3 space-y-2 text-graphite/90">{children}</div>
    </details>
  );
}
