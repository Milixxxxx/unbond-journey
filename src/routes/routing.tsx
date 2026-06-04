import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Heart, Compass, LifeBuoy } from "lucide-react";
import { readPathMode, writePathMode, type PathMode } from "@/lib/path-mode";

export const Route = createFileRoute("/routing")({
  component: Routing,
  head: () => ({
    meta: [
      { title: "Wo stehst du gerade? · UNBOND" },
      {
        name: "description",
        content:
          "Zwei Wege durch UNBOND: akute Krise mit SOS-Stabilisierung oder ruhige Aufarbeitung mit Trauma-Bonding als Einstieg.",
      },
      { property: "og:title", content: "Wo stehst du gerade? · UNBOND" },
      {
        property: "og:description",
        content: "Finde deinen persönlichen Einstieg in UNBOND.",
      },
    ],
  }),
});

function Routing() {
  const navigate = useNavigate();
  const [path, setPath] = useState<PathMode | null>(null);

  useEffect(() => {
    setPath(readPathMode());
  }, []);

  const choose = (mode: PathMode) => {
    setPath(mode);
    writePathMode(mode);
  };

  const startAkut = () => {
    writePathMode("akut");
    navigate({ to: "/modul/$slug", params: { slug: "sos-soforthilfe" } });
  };
  const startKlarheit = () => {
    writePathMode("klarheit");
    navigate({ to: "/modul/$slug", params: { slug: "modul-01" } });
  };

  return (
    <main className="min-h-screen px-4 py-10 pb-24">
      <article className="mx-auto max-w-3xl space-y-7">
        <Link to="/einleitung" className="inline-flex items-center gap-1 text-sm text-bordeaux hover:underline">
          <ArrowLeft className="h-3.5 w-3.5" /> Einleitung
        </Link>

        <header className="text-center animate-fade-in">
          <p className="inline-block rounded-full bg-gradient-to-r from-bordeaux to-sage px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white">
            Dein Einstieg
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-bordeaux">
            Wo stehst du gerade?
          </h1>
          <p className="mx-auto mt-3 max-w-xl text-sm text-graphite/75">
            Es macht einen Unterschied, ob du gerade aufgelöst und in Not bist –
            oder ob du in Ruhe verstehen und aufarbeiten möchtest. Wähle den
            Einstieg, der zu deinem aktuellen Zustand passt. Du kannst die
            Auswahl jederzeit ändern.
          </p>
        </header>

        <div className="grid gap-4 md:grid-cols-2 animate-fade-in">
          {/* AKUT */}
          <button
            type="button"
            onClick={() => choose("akut")}
            aria-pressed={path === "akut"}
            className={`group rounded-2xl border-2 bg-white/75 p-6 text-left transition-all hover:-translate-y-[1px] hover:bg-white ${
              path === "akut" ? "border-[var(--color-sos)] shadow-elegant" : "border-transparent"
            }`}
          >
            <span className="grid h-12 w-12 place-items-center rounded-full bg-[var(--color-sos)]/15 text-[var(--color-sos)]">
              <LifeBuoy className="h-6 w-6" />
            </span>
            <h2 className="mt-4 font-display text-lg font-extrabold text-bordeaux">
              Ich bin in akuter Not
            </h2>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-[var(--color-sos)]">
              Direkt nach der Trennung · Panik · 3-Uhr-nachts-Loops
            </p>
            <p className="mt-3 text-sm leading-relaxed text-graphite/80">
              Dein Nervensystem ist im Alarmmodus. Du brauchst jetzt keine
              Theorie über Trauma-Bonding – du brauchst Werkzeuge, die den
              Schmerz im Körper sofort regulieren.
            </p>
            <ul className="mt-3 space-y-1 text-[12.5px] text-graphite/80">
              <li>• <strong>Start:</strong> SOS · Akute Stabilisierung</li>
              <li>• 4-7-8-Atem, TIPP-Skill, Grounding, Urge-Surf</li>
              <li>• Krisen-Telefonnummern jederzeit greifbar</li>
            </ul>
          </button>

          {/* KLARHEIT */}
          <button
            type="button"
            onClick={() => choose("klarheit")}
            aria-pressed={path === "klarheit"}
            className={`group rounded-2xl border-2 bg-white/75 p-6 text-left transition-all hover:-translate-y-[1px] hover:bg-white ${
              path === "klarheit" ? "border-sage shadow-elegant" : "border-transparent"
            }`}
          >
            <span className="grid h-12 w-12 place-items-center rounded-full bg-sage/20 text-sage">
              <Compass className="h-6 w-6" />
            </span>
            <h2 className="mt-4 font-display text-lg font-extrabold text-bordeaux">
              Ich möchte verstehen & aufarbeiten
            </h2>
            <p className="mt-1 text-[11px] font-semibold uppercase tracking-wider text-sage">
              Noch in der Beziehung · Liebeskummer · Klarheit suchen
            </p>
            <p className="mt-3 text-sm leading-relaxed text-graphite/80">
              Du bist nicht in akuter Panik, sondern willst die Dynamik
              durchschauen und Stück für Stück loslassen. Du arbeitest in
              deinem Tempo durchs Buch.
            </p>
            <ul className="mt-3 space-y-1 text-[12.5px] text-graphite/80">
              <li>• <strong>Start:</strong> Schritt 01 · Trauma-Bonding</li>
              <li>• Lineare Reise durch die 10 Kapitel</li>
              <li className="flex items-start gap-1.5">
                <Heart className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-[var(--color-sos)]" fill="currentColor" />
                <span>SOS bleibt jederzeit über den Herz-Button rechts unten erreichbar – falls eine akute Welle kommt.</span>
              </li>
            </ul>
          </button>
        </div>

        {path && (
          <div className="science-box animate-fade-in">
            <h3 className="font-display text-base font-bold text-bordeaux">
              {path === "akut" ? "Dein Weg: Erst stabilisieren" : "Dein Weg: Verstehen & aufarbeiten"}
            </h3>
            <p className="mt-2 text-[14px] leading-relaxed">
              {path === "akut" ? (
                <>
                  Beginne mit dem <strong>SOS-Notfallkoffer</strong>. Erst wenn dein
                  Körper aus dem Alarmmodus zurückkommt, kannst du verstehen –
                  Theorie greift nicht im Sturm. Sobald sich dein Nervensystem
                  beruhigt, führt dich der Pfad weiter zu Schritt 01 · Trauma-Bonding.
                </>
              ) : (
                <>
                  Beginne mit <strong>Schritt 01 · Trauma-Bonding</strong> und
                  folge dem Pfad in deinem Tempo. Solltest du in einen akuten
                  Moment geraten, öffne den{" "}
                  <strong>Herz-Button rechts unten</strong> – darin findest du
                  alle SOS-Werkzeuge.
                </>
              )}
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {path === "akut" ? (
                <button
                  type="button"
                  onClick={startAkut}
                  className="inline-flex items-center gap-1.5 rounded-md bg-[var(--color-sos)] px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-elegant transition hover:opacity-90"
                >
                  SOS starten <ArrowRight className="h-3.5 w-3.5" />
                </button>
              ) : (
                <button
                  type="button"
                  onClick={startKlarheit}
                  className="inline-flex items-center gap-1.5 rounded-md bg-bordeaux px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-elegant transition hover:opacity-90"
                >
                  Schritt 01 starten <ArrowRight className="h-3.5 w-3.5" />
                </button>
              )}
              <Link
                to="/dashboard"
                className="inline-flex items-center gap-1.5 rounded-md border border-bordeaux/20 bg-white/70 px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-bordeaux transition hover:bg-white"
              >
                Zum Dashboard
              </Link>
            </div>
            <p className="mt-3 text-[11px] text-graphite/60">
              Du kannst diese Auswahl jederzeit ändern – sie steuert nur den
              vorgeschlagenen nächsten Schritt auf dem Dashboard.
            </p>
          </div>
        )}

        <div className="rounded-xl border border-bordeaux/10 bg-cream/40 p-4 text-[12px] leading-relaxed text-graphite/75">
          <p>
            <strong>In akuter Lebensgefahr:</strong> Hilfetelefon Gewalt gegen
            Frauen <strong>0800 116 016</strong> (kostenlos, 24/7) ·
            Telefonseelsorge <strong>0800 111 0 111</strong> · Notruf{" "}
            <strong>112</strong>.
          </p>
        </div>
      </article>
    </main>
  );
}
