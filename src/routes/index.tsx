import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Cover,
  head: () => ({
    meta: [
      { title: "UNBOND · Breaking Chains" },
      {
        name: "description",
        content:
          "Ein wissenschaftlich fundiertes 10-Schritte-Begleitprogramm zur Heilung nach toxischen Beziehungen – speziell für lesbische und queere Frauen.",
      },
      { property: "og:title", content: "UNBOND · Breaking Chains" },
      {
        property: "og:description",
        content:
          "Heilung nach toxischen Beziehungen – ein 10-Schritte-Programm für lesbische und queere Frauen.",
      },
    ],
  }),
});

function Cover() {
  return (
    <main className="min-h-screen px-4 py-12 md:py-20">
      <div className="mx-auto max-w-3xl">
        <div className="glass-card-strong p-8 text-center md:p-14 animate-fade-in">
          {/* Healing-Hearts Logo Platzhalter (User liefert healing_hearts_logo.png) */}
          <div className="mx-auto mb-8 grid h-40 w-40 place-items-center rounded-full bg-gradient-to-br from-bordeaux/15 via-mauve/10 to-sage/15 ring-1 ring-bordeaux/15 md:h-48 md:w-48">
            <div className="font-display text-5xl text-bordeaux/80">♥</div>
          </div>

          <p className="text-[10px] font-semibold uppercase tracking-[0.4em] text-mauve">
            · Healing Hearts ·
          </p>
          <h1 className="mt-4 font-display text-5xl font-extrabold leading-[1.05] tracking-tight text-bordeaux md:text-6xl">
            UNBOND
          </h1>
          <p className="mt-2 font-display text-xl italic text-mauve md:text-2xl">
            Breaking Chains
          </p>

          <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-graphite/85 md:text-base">
            Ein wissenschaftlich fundiertes 10-Schritte-Begleitprogramm zur
            Heilung nach toxischen Beziehungen – speziell für lesbische und
            queere Frauen.
          </p>

          <blockquote className="mx-auto mt-8 max-w-xl border-l-2 border-mauve/40 pl-5 text-left text-[13px] leading-relaxed text-graphite/85 md:text-sm">
            <p className="italic">
              „Ich kenne diesen Ort. Ich habe dort Jahre meines Lebens
              verbracht – gefangen zwischen Lovebombing und Funkstille,
              zwischen dem Versprechen von Nähe und der Realität des Rückzugs.
              Dieses Programm ist das Werkzeug, das ich mir damals gewünscht
              hätte. Es gehört dir."
            </p>
            <footer className="mt-3 text-[11px] font-semibold uppercase tracking-wider text-bordeaux not-italic">
              — Milena, Autorin &amp; Betroffene
            </footer>
          </blockquote>

          <div className="mt-10">
            <Link
              to="/vorwort"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-bordeaux px-8 py-4 text-sm font-semibold uppercase tracking-wider text-white shadow-elegant transition-all duration-300 hover:opacity-90 hover:translate-y-[-1px]"
            >
              Beginne deine Reise <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <p className="mt-8 text-[11px] leading-relaxed text-graphite/60">
            ⚠️ Dieses Programm ersetzt keine Psychotherapie. Bei akuten Krisen
            bitte das <strong>Krisentelefon 0800 111 0 111</strong> anrufen
            (kostenlos, 24/7).
          </p>
        </div>

        <p className="mt-6 text-center text-xs text-muted-foreground">
          Schon dabei?{" "}
          <Link to="/dashboard" className="font-semibold text-bordeaux hover:underline">
            Direkt zum Dashboard →
          </Link>
        </p>
      </div>
    </main>
  );
}
