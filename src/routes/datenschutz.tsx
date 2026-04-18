import { createFileRoute, Link } from "@tanstack/react-router";
import { ChevronLeft, ShieldCheck } from "lucide-react";

export const Route = createFileRoute("/datenschutz")({
  component: DatenschutzPage,
  head: () => ({
    meta: [
      { title: "Datenschutz · UNBOND" },
      {
        name: "description",
        content:
          "Datenschutzerklärung von UNBOND – DSGVO-konform, EU-Hosting, deine Daten gehören dir.",
      },
    ],
  }),
});

function DatenschutzPage() {
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
            <p className="text-[11px] font-medium uppercase tracking-wider text-mauve">Rechtliches</p>
            <h1 className="font-display text-lg font-bold text-bordeaux md:text-xl">Datenschutz</h1>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-3xl space-y-6 px-4 py-6 text-sm leading-relaxed">
        <div className="glass-card flex items-start gap-3 p-4">
          <ShieldCheck className="mt-0.5 h-5 w-5 flex-shrink-0 text-sage" />
          <p>
            Wir nehmen Datenschutz ernst. Diese App wird ausschließlich auf europäischen Servern (EU)
            gehostet und folgt der DSGVO.
          </p>
        </div>

        <Section title="Welche Daten wir speichern">
          <ul className="ml-4 list-disc space-y-1.5 marker:text-sage">
            <li>E-Mail-Adresse (für Magic-Link-Login)</li>
            <li>Anzeigename (optional, von dir frei wählbar)</li>
            <li>Toxicometer-Score und Beziehungsstatus (von dir selbst eingegeben)</li>
            <li>Modul-Fortschritt: erledigte Übungen, Reflexionen, Checklisten</li>
            <li>Tagebuch-Einträge (z.B. Nervensystem-Check)</li>
          </ul>
        </Section>

        <Section title="Was wir NICHT tun">
          <ul className="ml-4 list-disc space-y-1.5 marker:text-bordeaux">
            <li>Keine Werbe-Cookies, kein Tracking</li>
            <li>Keine Weitergabe an Dritte</li>
            <li>Kein Profiling, keine Algorithmen-Auswertung deiner Inhalte</li>
            <li>Keine Speicherung außerhalb der EU</li>
          </ul>
        </Section>

        <Section title="Deine Rechte (DSGVO)">
          <p>Du hast jederzeit das Recht auf:</p>
          <ul className="ml-4 mt-2 list-disc space-y-1 marker:text-mauve">
            <li>
              <strong>Auskunft &amp; Datenexport</strong> – über{" "}
              <Link to="/einstellungen" className="text-bordeaux underline">
                Einstellungen
              </Link>{" "}
              kannst du jederzeit eine vollständige JSON-Kopie deiner Daten herunterladen.
            </li>
            <li>
              <strong>Berichtigung &amp; Löschung</strong> – ebenfalls in den Einstellungen.
            </li>
            <li>
              <strong>Widerspruch &amp; Beschwerde</strong> – bei der zuständigen Datenschutzbehörde.
            </li>
          </ul>
        </Section>

        <Section title="Krisensituation">
          <p>
            Diese App ersetzt keine Therapie. Bei akuter Krise wende dich bitte an das{" "}
            <strong>Hilfetelefon Gewalt gegen Frauen 0800 116 016</strong> (24/7, kostenfrei) oder die{" "}
            <strong>TelefonSeelsorge 0800 111 0 111</strong>.
          </p>
        </Section>

        <p className="text-xs text-graphite/55">
          Stand: 2026 · Vollständige Erklärung folgt mit dem Launch der Bezahlversion.
        </p>
      </div>
    </main>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="space-y-2">
      <h2 className="font-display text-base font-bold text-bordeaux">{title}</h2>
      {children}
    </section>
  );
}
