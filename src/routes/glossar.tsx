import { createFileRoute, Link } from "@tanstack/react-router";
import { GLOSSAR } from "@/lib/glossar";
import { ChevronLeft, BookOpen } from "lucide-react";

export const Route = createFileRoute("/glossar")({
  component: GlossarPage,
  head: () => ({
    meta: [
      { title: "Glossar · UNBOND" },
      {
        name: "description",
        content:
          "Alle Fachbegriffe aus dem UNBOND-Programm verständlich erklärt: Trauma-Bonding, Polyvagal, TIPP, Amygdala-Hijacking u.v.m.",
      },
    ],
  }),
});

function GlossarPage() {
  const entries = Object.values(GLOSSAR).sort((a, b) => a.term.localeCompare(b.term, "de"));

  return (
    <main className="min-h-screen pb-24">
      <header className="border-b border-border/40 bg-cream/50 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center gap-3 px-4 py-3">
          <Link
            to="/dashboard"
            aria-label="Zurück"
            className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full text-bordeaux hover:bg-bordeaux/10"
          >
            <ChevronLeft className="h-5 w-5" />
          </Link>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-wider text-mauve">Anhang</p>
            <h1 className="font-display text-lg font-bold text-bordeaux md:text-xl">Glossar</h1>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 py-6">
        <div className="glass-card mb-6 flex items-start gap-3 p-4 animate-fade-in">
          <BookOpen className="mt-0.5 h-5 w-5 flex-shrink-0 text-mauve" />
          <p className="text-sm text-graphite/80">
            {entries.length} Begriffe aus Neurobiologie, DBT, ACT und Bindungsforschung – traumasensibel
            erklärt.
          </p>
        </div>

        <ul className="space-y-3 animate-fade-in-stagger">
          {entries.map((e) => (
            <li key={e.term} className="glass-card p-4">
              <h2 className="font-display text-base font-bold text-bordeaux">{e.term}</h2>
              <p className="mt-1.5 text-sm leading-relaxed text-graphite/85">{e.short}</p>
              {e.long && <p className="mt-2 text-xs text-graphite/65">{e.long}</p>}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
