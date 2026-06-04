import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { GlossarTerm } from "@/components/glossar-term";
import poemImg1 from "@/assets/poem-liebe-1.png.asset.json";
import poemImg2 from "@/assets/poem-liebe-2.png.asset.json";
import marySandraCafe from "@/assets/mary-sandra-cafe.jpg.asset.json";

export const Route = createFileRoute("/poem")({
  component: Poem,
  head: () => ({
    meta: [
      { title: "Am Anfang war das Gefühl · UNBOND" },
      {
        name: "description",
        content:
          "Marys Geschichte – wie ein gewöhnlicher Nachmittag zum Anfang einer toxischen Bindung wurde.",
      },
      { property: "og:title", content: "Am Anfang war das Gefühl · UNBOND" },
      {
        property: "og:description",
        content: "Marys Eröffnungstext – wo alles begann.",
      },
    ],
  }),
});

function Poem() {
  return (
    <main className="min-h-screen px-4 py-10 pb-24">
      <div className="mx-auto max-w-[1400px]">
        <article className="mx-auto max-w-4xl space-y-8 rounded-3xl bg-white/55 p-5 shadow-soft backdrop-blur-sm sm:p-8 md:p-12">
          <Link
            to="/vorwort"
            className="inline-flex items-center gap-1 text-sm text-bordeaux hover:underline"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Vorwort
          </Link>

          <header className="text-center animate-fade-in">
            <p className="inline-block rounded-full bg-gradient-to-r from-mauve to-bordeaux px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white">
              ✦ Marys Geschichte
            </p>
            <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-bordeaux md:text-5xl">
              Am Anfang war das Gefühl
            </h1>
          </header>

          {/* Mary & Sandra im Café */}
          <figure className="animate-fade-in">
            <img
              src={marySandraCafe.url}
              alt="Mary und Sandra im Café – ein erster Moment, der alles veränderte"
              className="w-full rounded-2xl shadow-elegant"
              loading="lazy"
            />
            <figcaption className="mt-2 text-center text-xs italic text-graphite/65">
              Mary &amp; Sandra · Ein gewöhnlicher Nachmittag, ein Café mit zu vielen Stühlen.
            </figcaption>
          </figure>

          <div className="glass-card p-6 md:p-8 space-y-5 text-[15px] leading-relaxed text-graphite/90 animate-fade-in">
            <p>
              Es gibt diesen Moment, den viele von uns kennen. Den Moment, in
              dem jemand in dein Leben tritt und alles auf einmal heller macht.
              Du erkennst dich in ihr. Du fühlst dich gesehen, ohne dich
              erklären zu müssen. Du denkst: <em>Endlich.</em>
            </p>
            <p>
              Mary kannte diesen Moment. Ein ganz gewöhnlicher Nachmittag, ein
              Café mit zu vielen Stühlen. Sandra saß ihr gegenüber und hörte
              wirklich zu. Mary dachte, sie hätte ihr Zuhause gefunden.
            </p>
            <p>
              Was sie nicht wusste: Dieses Kribbeln in der Brust, das Gefühl
              tiefer Verbundenheit – das ist keine Magie. Es ist Neurobiologie.
              Ihr Gehirn schüttete{" "}
              <GlossarTerm termKey="dopamin">Dopamin</GlossarTerm>, Oxytocin
              und Serotonin aus. Ihre Liebe war real – und gleichzeitig von
              Anfang an anfällig für eine Dynamik, die über sie hinausging.
            </p>
            <p>
              Das Gedicht „Liebe fragt nicht nach der Uhr" wurde im Mai 2024
              geschrieben – als Versuch, das Unbegreifliche in Sprache zu
              fassen. Zwei Schatten auf einem Weg, der nirgendwo hinführt. Es
              ist Marys Geschichte. Und vielleicht auch deine.
            </p>
          </div>

          {/* Der Brief / Das Gedicht */}
          <section className="space-y-6 animate-fade-in">
            <div className="text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-mauve">
                Ein Brief · Mai 2024
              </p>
              <h2 className="mt-2 font-display text-2xl font-extrabold tracking-tight text-bordeaux md:text-3xl">
                Liebe fragt nicht nach der Uhr
              </h2>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <figure>
                <img
                  src={poemImg1.url}
                  alt="Liebe fragt nicht nach der Uhr – Teil 1"
                  className="w-full rounded-2xl shadow-soft ring-1 ring-bordeaux/10"
                  loading="lazy"
                />
              </figure>
              <figure>
                <img
                  src={poemImg2.url}
                  alt="Liebe fragt nicht nach der Uhr – Teil 2"
                  className="w-full rounded-2xl shadow-soft ring-1 ring-bordeaux/10"
                  loading="lazy"
                />
              </figure>
            </div>
            <p className="text-center text-[11px] italic text-graphite/60">
              — Unbekannter Autor, Mai 2024
            </p>
          </section>

          <div className="flex items-center justify-between gap-3 pt-2">
            <Link
              to="/vorwort"
              className="inline-flex items-center gap-1 rounded-md border border-bordeaux/20 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-bordeaux transition hover:bg-white"
            >
              <ArrowLeft className="h-3.5 w-3.5" /> Vorwort
            </Link>
            <Link
              to="/inhalt"
              className="inline-flex items-center gap-1.5 rounded-md bg-bordeaux px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-elegant transition hover:opacity-90"
            >
              Inhaltsverzeichnis <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </article>
      </div>
    </main>
  );
}
