import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronLeft, ShieldCheck, Sparkles, AlertTriangle } from "lucide-react";

export const Route = createFileRoute("/einstellungen")({
  component: SettingsPage,
  head: () => ({
    meta: [{ title: "Einstellungen · UNBOND" }],
  }),
});

function SettingsPage() {
  return (
    <main className="min-h-screen pb-24">
      <header className="border-b border-border/40 bg-cream/50 backdrop-blur">
        <div className="mx-auto flex max-w-2xl items-center gap-3 px-4 py-3">
          <Link
            to="/dashboard"
            aria-label="Zurück"
            className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full text-bordeaux hover:bg-bordeaux/10"
          >
            <ChevronLeft className="h-5 w-5" />
          </Link>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-wider text-mauve">Konto</p>
            <h1 className="font-display text-lg font-bold text-bordeaux md:text-xl">Einstellungen</h1>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-2xl space-y-6 px-4 py-6">
        <section className="glass-card-strong p-5 animate-fade-in">
          <div className="mb-3 flex items-center gap-2 text-mauve">
            <Sparkles className="h-4 w-4" />
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em]">Gastmodus</h2>
          </div>
          <p className="text-sm text-graphite/80">
            Der Login ist vorübergehend entfernt, damit du ohne Schleife in die Inhalte kommst. Personalisierte Einstellungen, Export und gespeicherter Fortschritt kommen am Ende wieder zurück.
          </p>
        </section>

        <section className="glass-card p-5 animate-fade-in">
          <div className="mb-3 flex items-center gap-2 text-sage">
            <ShieldCheck className="h-4 w-4" />
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em]">Datenschutz</h2>
          </div>
          <p className="text-sm text-graphite/80">
            Sobald der Login wieder aktiviert wird, hängen wir die persönlichen Funktionen wieder sauber an dieselbe Oberfläche an.
          </p>
        </section>

        <section className="rounded-xl border border-mauve/25 bg-mauve/5 p-5 animate-fade-in">
          <div className="mb-2 flex items-center gap-2 text-mauve">
            <AlertTriangle className="h-4 w-4" />
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em]">Hinweis</h2>
          </div>
          <p className="text-sm text-graphite/85">
            Aktuell werden keine persönlichen Daten gespeichert oder geladen. Der Fokus liegt jetzt nur darauf, dass du sofort arbeiten kannst.
          </p>
        </section>

        <p className="text-center text-xs text-graphite/55">
          <Link to="/datenschutz" className="underline">
            Datenschutzerklärung
          </Link>
        </p>
      </div>
    </main>
  );
}
