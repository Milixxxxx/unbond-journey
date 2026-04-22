import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, ArrowRight, Waves, HeartCrack } from "lucide-react";

export const Route = createFileRoute("/routing")({
  component: Routing,
  head: () => ({
    meta: [
      { title: "Wo stehst du gerade? · UNBOND" },
      {
        name: "description",
        content:
          "Self-Select: Beziehung beendet oder noch in der Beziehung – wir zeigen dir den passenden Einstieg.",
      },
      { property: "og:title", content: "Wo stehst du gerade? · UNBOND" },
      {
        property: "og:description",
        content: "Finde deinen persönlichen Einstieg in UNBOND.",
      },
    ],
  }),
});

type Path = "after" | "in" | null;

function Routing() {
  const [path, setPath] = useState<Path>(null);

  return (
    <main className="min-h-screen px-4 py-10 pb-24">
      <article className="mx-auto max-w-2xl space-y-7">
        <Link to="/einleitung" className="inline-flex items-center gap-1 text-sm text-bordeaux hover:underline">
          <ArrowLeft className="h-3.5 w-3.5" /> Einleitung
        </Link>

        <header className="text-center animate-fade-in">
          <p className="inline-block rounded-full bg-gradient-to-r from-bordeaux to-sage px-4 py-1 text-[10px] font-semibold uppercase tracking-[0.22em] text-white">
            🧭 Dein Einstieg
          </p>
          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-bordeaux">
            Wo stehst du gerade?
          </h1>
          <p className="mx-auto mt-3 max-w-md text-sm text-graphite/75">
            UNBOND begleitet dich, egal wo du gerade stehst. Triff eine Auswahl:
          </p>
        </header>

        <div className="space-y-3 animate-fade-in">
          <button
            type="button"
            onClick={() => setPath("after")}
            aria-pressed={path === "after"}
            className={`w-full rounded-xl border-2 bg-white/72 p-5 text-left transition-all duration-300 hover:bg-white ${
              path === "after" ? "border-sage shadow-soft" : "border-transparent"
            }`}
          >
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-full bg-sage/20 text-sage">
                <Waves className="h-5 w-5" />
              </span>
              <div>
                <strong className="font-display text-base text-bordeaux">
                  Die Beziehung ist beendet
                </strong>
                <p className="mt-1 text-sm leading-snug text-graphite/75">
                  Ich habe mich getrennt oder wurde verlassen – und komme nicht los.
                </p>
              </div>
            </div>
          </button>

          <button
            type="button"
            onClick={() => setPath("in")}
            aria-pressed={path === "in"}
            className={`w-full rounded-xl border-2 bg-white/72 p-5 text-left transition-all duration-300 hover:bg-white ${
              path === "in" ? "border-warning shadow-soft" : "border-transparent"
            }`}
          >
            <div className="flex items-start gap-4">
              <span className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-full bg-mauve/15 text-mauve">
                <HeartCrack className="h-5 w-5" />
              </span>
              <div>
                <strong className="font-display text-base text-bordeaux">
                  Ich bin noch in der Beziehung
                </strong>
                <p className="mt-1 text-sm leading-snug text-graphite/75">
                  Ich bin unglücklich oder verwirrt – und weiß nicht, was ich tun soll.
                </p>
              </div>
            </div>
          </button>
        </div>

        {path === "after" && (
          <div className="science-box animate-fade-in">
            <h4 className="font-display text-base font-bold text-bordeaux">
              🧭 Dein Weg: Liebeskummer &amp; Trennung
            </h4>
            <p className="mt-2 text-[14px] leading-relaxed">
              Du kannst direkt mit <strong>Schritt 01 · Trauma-Bonding verstehen</strong>{" "}
              beginnen und das Programm linear durchlaufen. Der Weg ist klar: Stabilisierung →
              Verarbeitung → Loslassen → Neuaufbau. Alle Module wurden für genau diese Situation
              entwickelt.
            </p>
            <p className="mt-2 text-[14px] leading-relaxed">
              Wenn du gerade in einer akuten Krise bist (Panik, 3-Uhr-nachts-Loops, körperliche
              Überflutung): Beginne mit dem <strong>SOS-Notfallkoffer</strong> – die akuten
              Stabilisierungs-Tools holen dein Nervensystem aus dem Alarmmodus.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link
                to="/modul/$slug"
                params={{ slug: "modul-01" }}
                className="inline-flex items-center gap-1.5 rounded-md bg-bordeaux px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white shadow-elegant transition hover:opacity-90"
              >
                Schritt 01 starten <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                to="/modul/$slug"
                params={{ slug: "sos-soforthilfe" }}
                className="inline-flex items-center gap-1.5 rounded-md border-2 border-warning/40 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-warning transition hover:bg-white"
              >
                SOS-Notfallkoffer
              </Link>
            </div>
          </div>
        )}

        {path === "in" && (
          <div
            className="science-box animate-fade-in"
            style={{ borderLeftColor: "var(--color-warning)", background: "linear-gradient(135deg,rgba(212,165,116,0.32),rgba(212,165,116,0.15))" }}
          >
            <h4 className="font-display text-base font-bold text-bordeaux">
              💡 Dein Weg: Noch in der Beziehung
            </h4>
            <p className="mt-2 text-[14px] leading-relaxed">
              Manche Kapitel – insbesondere No-Contact, Trigger-Management und Detox-Module –
              werden sich für dich noch nicht vollständig anwendbar anfühlen. Das ist normal und
              in Ordnung.
            </p>
            <p className="mt-2 text-[14px] leading-relaxed">
              Nutze zunächst <strong>Schritt 01 bis 03</strong>, um Klarheit darüber zu
              gewinnen, was du wirklich erlebst. Der Rest des Programms steht dir zur Verfügung,
              wenn du bereit bist.
            </p>
            <p className="mt-3 text-[13px] font-semibold text-bordeaux">
              Wenn du dich in akuter Gefahr befindest:{" "}
              <strong>Hilfetelefon Gewalt gegen Frauen 0800 116 016</strong> (kostenlos, 24/7).
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              <Link
                to="/modul/$slug"
                params={{ slug: "modul-01" }}
                className="inline-flex items-center gap-1.5 rounded-md bg-bordeaux px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white shadow-elegant transition hover:opacity-90"
              >
                Schritt 01 <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link
                to="/modul/$slug"
                params={{ slug: "modul-02" }}
                className="inline-flex items-center gap-1.5 rounded-md bg-mauve px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white shadow-soft transition hover:opacity-90"
              >
                Schritt 02 · Diagnose
              </Link>
            </div>
          </div>
        )}

        <div className="flex items-center justify-between gap-3 pt-4">
          <Link
            to="/einleitung"
            className="inline-flex items-center gap-1 rounded-md border border-bordeaux/20 bg-white/60 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-bordeaux transition hover:bg-white"
          >
            <ArrowLeft className="h-3.5 w-3.5" /> Einleitung
          </Link>
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-1.5 rounded-md bg-graphite px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white shadow-soft transition hover:opacity-90"
          >
            Zum Dashboard <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </article>
    </main>
  );
}
