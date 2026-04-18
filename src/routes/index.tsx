import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Heart, Lock, Shield } from "lucide-react";

export const Route = createFileRoute("/")({
  component: Landing,
  head: () => ({
    meta: [
      { title: "UNBOND – Breaking Chains" },
      {
        name: "description",
        content:
          "Interaktives Selbsthilfe-Programm für lesbische und queere Frauen, die sich aus toxischen Beziehungen lösen. Wissenschaftlich fundiert. EU-Hosting.",
      },
    ],
  }),
});

function Landing() {
  return (
    <main className="min-h-screen px-4 py-10 md:py-16">
      <div className="mx-auto max-w-3xl space-y-8">
        <header className="text-center animate-fade-in">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-mauve">
            UNBOND · Breaking Chains
          </p>
          <h1 className="mt-3 font-display text-4xl font-extrabold leading-tight text-bordeaux md:text-5xl">
            Du bist nicht verrückt.<br />
            <span className="text-mauve">Du bist im Entzug.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-base text-graphite/80 md:text-lg">
            Ein interaktives 10-Modul-Programm für lesbische und queere Frauen, die sich aus
            emotional missbräuchlichen Beziehungen lösen wollen.
          </p>
        </header>

        <div className="glass-card-strong p-6 md:p-8 animate-fade-in">
          <div className="grid gap-4 sm:grid-cols-3">
            <Feature
              icon={<Shield className="h-5 w-5" />}
              title="Wissenschaftlich"
              text="CBT, ACT, DBT, Polyvagal-Theorie – evidenzbasiert."
            />
            <Feature
              icon={<Heart className="h-5 w-5" />}
              title="Queer & inklusiv"
              text="Geschrieben für WLW-Beziehungen, nicht angepasst."
            />
            <Feature
              icon={<Lock className="h-5 w-5" />}
              title="🇪🇺 EU-Hosting"
              text="Deine Daten bleiben in Frankfurt. DSGVO-konform."
            />
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/auth"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-md bg-bordeaux px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-white shadow-elegant transition hover:opacity-90"
            >
              Beginne deine Reise <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/willkommen"
              className="inline-flex flex-1 items-center justify-center gap-2 rounded-md border-2 border-bordeaux/20 bg-white/60 px-6 py-3.5 text-sm font-semibold uppercase tracking-wider text-bordeaux transition hover:bg-white"
            >
              Erst mehr erfahren
            </Link>
          </div>
        </div>

        <p className="text-center text-xs text-muted-foreground">
          Dieses Programm ersetzt keine Psychotherapie. In akuten Krisen:{" "}
          <strong>0800 116 016</strong> (Hilfetelefon Gewalt gegen Frauen, 24/7)
        </p>
      </div>
    </main>
  );
}

function Feature({ icon, title, text }: { icon: React.ReactNode; title: string; text: string }) {
  return (
    <div className="rounded-xl bg-white/60 p-4">
      <div className="mb-2 inline-grid h-9 w-9 place-items-center rounded-lg bg-sage/20 text-bordeaux">
        {icon}
      </div>
      <h3 className="font-display text-sm font-bold text-bordeaux">{title}</h3>
      <p className="mt-1 text-xs leading-snug text-graphite/75">{text}</p>
    </div>
  );
}
