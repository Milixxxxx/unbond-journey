import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { GlossarTerm } from "@/components/glossar-term";

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
      <article className="mx-auto max-w-2xl space-y-7">
        <Link to="/vorwort" className="inline-flex items-center gap-1 text-sm text-bordeaux hover:underline">
          <ArrowLeft className="h-3.5 w-3.5" /> Vorwort
        </Link>

        <header className="text-center animate-fade-in">
          <p className="inline-block rounded-full bg-gradient-to-r from-mauve to-bordeaux px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white">
            ✦ Marys Geschichte
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-bordeaux">
            Am Anfang war das Gefühl
          </h1>
        </header>

        <div className="glass-card p-6 md:p-8 space-y-5 text-[15px] leading-relaxed text-graphite/90 animate-fade-in">
          <p>
            Es gibt diesen Moment, den viele von uns kennen. Den Moment, in dem
            jemand in dein Leben tritt und alles auf einmal heller macht. Du
            erkennst dich in ihr. Du fühlst dich gesehen, ohne dich erklären zu
            müssen. Du denkst: <em>Endlich.</em>
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
            <GlossarTerm termKey="dopamin">Dopamin</GlossarTerm>, Oxytocin und
            Serotonin aus. Ihre Liebe war real – und gleichzeitig von Anfang an
            anfällig für eine Dynamik, die über sie hinausging.
          </p>
          <p>
            Das Gedicht „Liebe fragt nicht nach der Uhr" wurde im Mai 2024
            geschrieben – als Versuch, das Unbegreifliche in Sprache zu fassen.
            Zwei Schatten auf einem Weg, der nirgendwo hinführt. Es ist Marys
            Geschichte. Und vielleicht auch deine.
          </p>
        </div>

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
    </main>
  );
}
