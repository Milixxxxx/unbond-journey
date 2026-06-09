import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";
import { ProgressExport } from "@/components/progress-export";

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
            <p className="text-[11px] font-medium uppercase tracking-wider text-mauve">Privat &amp; sicher</p>
            <h1 className="font-display text-lg font-bold text-bordeaux md:text-xl">Einstellungen</h1>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-2xl space-y-6 px-4 py-6">
        <ProgressExport />

        <p className="text-center text-xs text-graphite/55">
          <Link to="/datenschutz" className="underline">
            Datenschutzerklärung
          </Link>
        </p>
      </div>
    </main>
  );
}
