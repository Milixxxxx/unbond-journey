import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";

export const Route = createFileRoute("/vorwort")({
  component: Vorwort,
  head: () => ({
    meta: [
      { title: "Vorwort · UNBOND" },
      {
        name: "description",
        content:
          "Ein Brief von der Autorin Milena – warum dieses Programm entstanden ist.",
      },
      { property: "og:title", content: "Vorwort · UNBOND" },
      {
        property: "og:description",
        content: "Ein persönlicher Brief von Milena an dich.",
      },
    ],
  }),
});

function Vorwort() {
  return (
    <main className="min-h-screen px-4 py-10 pb-24">
      <article className="mx-auto max-w-2xl space-y-7">
        <Link to="/" className="inline-flex items-center gap-1 text-sm text-bordeaux hover:underline">
          <ArrowLeft className="h-3.5 w-3.5" /> Zur Titelseite
        </Link>

        <header className="text-center animate-fade-in">
          <p className="inline-block rounded-full bg-gradient-to-r from-bordeaux to-mauve px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white">
            Ein Brief von der Autorin
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-bordeaux">
            Vorwort
          </h1>
        </header>

        {/* Milena Foto Platzhalter */}
        <div className="mx-auto max-w-[280px] text-center animate-fade-in">
          <div className="aspect-square w-full overflow-hidden rounded-2xl bg-gradient-to-br from-mauve/15 via-bordeaux/10 to-sage/15 ring-1 ring-bordeaux/15">
            <div className="grid h-full w-full place-items-center font-display text-6xl text-bordeaux/40">
              M
            </div>
          </div>
          <p className="mt-3 font-display text-sm font-bold text-bordeaux">
            Milena · Autorin &amp; Betroffene
          </p>
        </div>

        <div className="glass-card p-6 md:p-8 space-y-5 text-[15px] leading-relaxed text-graphite/90 animate-fade-in">
          <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-mauve">
            Meine Geschichte
          </h2>
          <p>
            Es gibt einen Moment, den viele von uns kennen. Den Moment, in dem
            jemand in dein Leben tritt und alles auf einmal heller macht – als
            würdest du endlich jemanden treffen, der dich versteht, ohne dass
            du alles erklären müsstest. Einen Moment, der sich anfühlt wie
            Heimkommen. Ich nannte meinen solchen Moment meine große Liebe.
            Heute weiß ich, dass er meine härteste Lehrerin war.
          </p>
          <p>
            Fünf Jahre. Fünf Jahre voller Nähe und Rückzug, voller Versprechen
            und Funkstille, voller Momente, in denen ich dachte:{" "}
            <em>Jetzt. Vielleicht jetzt.</em> Fünf Jahre, in denen ich mich
            immer kleiner gemacht habe, in der Hoffnung, dass es endlich passt.
            Fünf Jahre, die mich zwei Klinikaufenthalte, meinen Selbstwert,
            meine Stabilität – und beinahe meinen Sohn – gekostet haben.
          </p>
          <p>
            Sie – ich nenne sie in diesem Programm Sandra – war eine Meisterin
            der Ambivalenz. Auf intensive Liebesschwüre folgte schleichender
            Rückzug, kaum wahrnehmbar. Dennoch reagierte mein Nervensystem
            nicht zuletzt mit handfesten Panikattacken auf ihr „zu Nebel
            werden" wie ich es immer nannte. Auf gemeinsame Momente voller
            Zärtlichkeit folgten Tage des Ausweichens und Auflegen beim ersten
            Widerspruch.
          </p>
          <p>
            Was ich damals nicht verstand: Mein Gehirn war in diesem Muster
            buchstäblich süchtig geworden. Nicht nach ihr als Mensch, sondern
            nach dem biochemischen Auf und Ab, das diese Beziehung erzeugte.
            Das Nervensystem nennt Schmerz irgendwann Vertrautheit. Und was
            vertraut ist, verlässt man nicht einfach.
          </p>
          <p>
            Der Bruch kündigte sich zwar mit einer längeren Ghostingphase an,
            doch bei so vielen On und Offs traf es mich auch da ohne Vorwarnung.
            Eine Blockade und schließlich Schweigen monatelang, diesmal
            endgültig. Denn dieses Mal griff ich nicht nach und behielt meine
            Würde und lies sie vollständig zu Nebel werden …
          </p>
          <p>
            Und ich stand da – mit all dem Schmerz, der Scham und der
            vollkommenen Verwirrung – ohne ein einziges Werkzeug, um das zu
            verarbeiten, was in mir zerbrochen war. Was folgte, waren die
            dunkelsten Monate meines Lebens: Ein Jugendamtbesuch, ein
            Klinikaufenthalt, das Gefühl, mein Kind und mich selbst gleichzeitig
            zu verlieren.
          </p>

          <h2 className="pt-2 text-xs font-semibold uppercase tracking-[0.18em] text-mauve">
            Warum dieses Programm entstanden ist
          </h2>
          <p>
            Was ich in den Jahren danach suchte, gab es schlicht nicht. Keine
            Ressource, die sowohl die Neurobiologie des Trauma-Bondings
            erklärte als auch die besonderen Dynamiken lesbischer und queerer
            Beziehungen berücksichtigte. Kein Programm, das mich mit den
            konkreten Werkzeugen ausstattete, die ich in den Nächten brauchte,
            wenn das Craving nach Kontakt unerträglich wurde. Keinen Raum, der
            gleichzeitig wissenschaftlich fundiert und tief menschlich war.
          </p>
          <p className="font-display text-xl italic text-bordeaux">
            Also habe ich es selbst geschrieben.
          </p>
          <p>
            UNBOND – Breaking Chains ist das Ergebnis von Jahren der Recherche,
            der Therapie, des Lernens und des langsamen, manchmal quälend
            langsamen Heilens. Es basiert auf evidenzbasierten Ansätzen aus der
            kognitiven Verhaltenstherapie, der Dialektisch-Behavioralen
            Therapie, der Akzeptanz- und Commitment-Therapie sowie der
            Polyvagal-Theorie. Vor allem aber basiert es auf echter Erfahrung –
            meiner eigenen und der Erfahrungen vieler Frauen, die mir ihre
            Geschichte anvertraut haben.
          </p>

          <h2 className="pt-2 text-xs font-semibold uppercase tracking-[0.18em] text-mauve">
            An dich, die dieses Programm liest
          </h2>
          <p>
            Vielleicht bist du gerade mitten in den Trümmern. Vielleicht bist
            du seit drei Uhr morgens wach und hast ihr Profil zum hundertsten
            Mal aufgerufen. Vielleicht bist du noch in der Beziehung und weißt
            nicht, wie du herauskommst. Oder du hast die Trennung schon hinter
            dir, aber dein Herz hat sich noch nicht losgelöst – und du
            verstehst nicht, warum.
          </p>
          <p>
            Was auch immer dich hierher gebracht hat: Du bist richtig. Dieser
            Raum ist für dich.
          </p>
          <p>
            Dieses Programm ist kein Versprechen der schnellen Heilung. Es
            gibt keinen 5-Tage-Plan, der fünf Jahre überschreibt. Aber es gibt
            dir Orientierung, wenn alles verschwommen ist. Es gibt dir Sprache
            für das, was du erlebt hast. Und es gibt dir, Schritt für Schritt,
            die Werkzeuge zurück, die dir gehören.
          </p>

          <blockquote className="my-3 rounded-xl border-l-4 border-mauve bg-mauve/5 px-5 py-4 text-[14px] italic leading-relaxed text-graphite/85">
            „157.680.000 Sekunden aus der Zukunft schreibe ich dir – als dein
            älteres Ich, das alles überstanden hat. Zeit heilt nicht alle
            Wunden, schon gar nicht jene, die aus verdrehten Wahrheiten und
            monatelangem Schweigen entstanden sind. Aber sie vergeht. Und du
            wirst an diesen Narben wachsen."
            <footer className="mt-2 text-[11px] font-semibold uppercase tracking-wider text-bordeaux not-italic">
              — Milena an sich selbst
            </footer>
          </blockquote>

          <p>
            Ich wünsche dir, was ich mir damals gewünscht hätte: einen Ort, an
            dem du wirklich gesehen wirst. Vollständig.
          </p>
          <p className="text-right font-display font-bold text-bordeaux">— Milena</p>
        </div>

        <div className="flex items-center justify-between gap-3 pt-2">
          <Link
            to="/"
            className="inline-flex items-center gap-1 rounded-md border border-bordeaux/20 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-bordeaux transition hover:bg-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Zurück
          </Link>
          <Link
            to="/poem"
            className="inline-flex items-center gap-1.5 rounded-md bg-bordeaux px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-elegant transition hover:opacity-90"
          >
            Marys Geschichte <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </article>
    </main>
  );
}
