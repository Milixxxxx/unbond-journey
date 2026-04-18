import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronLeft, BookHeart, FileText } from "lucide-react";

export const Route = createFileRoute("/journal")({
  component: JournalPage,
  head: () => ({
    meta: [{ title: "Mein Journal · UNBOND" }],
  }),
});

function JournalPage() {
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
            <p className="text-[11px] font-medium uppercase tracking-wider text-mauve">Sammlung</p>
            <h1 className="font-display text-lg font-bold text-bordeaux md:text-xl">Mein Journal</h1>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-3xl space-y-6 px-4 py-6">
        <div className="glass-card-strong p-8 text-center animate-fade-in">
          <BookHeart className="mx-auto h-10 w-10 text-mauve/60" />
          <h2 className="mt-3 font-display text-lg font-bold text-bordeaux">
            Journal ist gerade im Gastmodus
          </h2>
          <p className="mt-2 text-sm text-graphite/70">
            Damit du sofort weiterlesen kannst, ist der Login vorübergehend entfernt. Persönliche Einträge und gespeicherte Reflexionen kommen später wieder zurück.
          </p>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            <div className="rounded-xl bg-white/70 p-4 text-left">
              <div className="mb-2 inline-grid h-9 w-9 place-items-center rounded-lg bg-mauve/15 text-mauve">
                <FileText className="h-4 w-4" />
              </div>
              <h3 className="font-display text-sm font-bold text-bordeaux">Später mit Speicherung</h3>
              <p className="mt-1 text-xs leading-snug text-graphite/75">
                Sobald der Login sauber steht, sammeln sich hier wieder deine Antworten, Reflexionen und Check-ins.
              </p>
            </div>
            <div className="rounded-xl bg-white/70 p-4 text-left">
              <div className="mb-2 inline-grid h-9 w-9 place-items-center rounded-lg bg-sage/20 text-bordeaux">
                <BookHeart className="h-4 w-4" />
              </div>
              <h3 className="font-display text-sm font-bold text-bordeaux">Jetzt direkt weiterlesen</h3>
              <p className="mt-1 text-xs leading-snug text-graphite/75">
                Alle Module sind frei offen. Du kannst sofort inhaltlich weiterarbeiten, ohne Anmelde-Schleife.
              </p>
            </div>
          </div>
          <Link
            to="/dashboard"
            className="mt-5 inline-block rounded-full bg-bordeaux px-5 py-2 text-sm font-semibold text-white"
          >
            Zu den Inhalten
          </Link>
        </div>
      </div>
    </main>
  );
}
