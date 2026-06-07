import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { MODULES, isBonus } from "@/lib/modules";
import { ArrowRight, Footprints, Target, LifeBuoy, Compass, Heart } from "lucide-react";
import { WindingPathJourney } from "@/components/winding-path-journey";
import { readPathMode, writePathMode, type PathMode } from "@/lib/path-mode";
import { useJourneyProgress } from "@/hooks/use-journey-progress";

const STORAGE_KEY = "unbond-bonus-unlocks";
function readBonusUnlocks(): string[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
  head: () => ({
    meta: [
      { title: "Dein Heilungs-Pfad · UNBOND" },
      {
        name: "description",
        content:
          "Dein persönliches Dashboard – Heilungs-Pfad mit 10 Kapiteln, Tagesimpuls und Fortschritt.",
      },
    ],
  }),
});

const IMPULSE =
  "\u201EDas Nervensystem nennt Schmerz irgendwann Vertrautheit. Und was vertraut ist, verl\u00E4sst man nicht einfach.\u201C \u2014 Milena, Vorwort";

function Dashboard() {
  const [earnedSlugs, setEarnedSlugs] = useState<string[]>([]);
  const [pathMode, setPathMode] = useState<PathMode | null>(null);

  useEffect(() => {
    readBonusUnlocks();
    setPathMode(readPathMode());
    const onPath = () => setPathMode(readPathMode());
    window.addEventListener("unbond-path-mode-updated", onPath);
    window.addEventListener("storage", onPath);
    return () => {
      window.removeEventListener("unbond-path-mode-updated", onPath);
      window.removeEventListener("storage", onPath);
    };
  }, []);

  const mainModules = useMemo(
    () => MODULES.filter((m) => m.available && !isBonus(m.slug)),
    [],
  );
  const allModules = useMemo(() => MODULES.filter((m) => m.available), []);

  useEffect(() => {
    const readProgress = () => {
      const earned = mainModules
        .filter((module) => {
          try {
            const raw = window.localStorage.getItem(`unbond-progress:${module.slug}`);
            if (!raw) return false;
            const parsed = JSON.parse(raw) as { badgeEarned?: boolean };
            return !!parsed.badgeEarned;
          } catch {
            return false;
          }
        })
        .map((module) => module.slug);
      setEarnedSlugs(earned);
    };

    readProgress();
    window.addEventListener("unbond-progress-updated", readProgress);
    window.addEventListener("storage", readProgress);
    return () => {
      window.removeEventListener("unbond-progress-updated", readProgress);
      window.removeEventListener("storage", readProgress);
    };
  }, [mainModules]);

  const doneSlugs = new Set<string>(earnedSlugs);
  const total = allModules.length;
  const done = allModules.filter((m) => doneSlugs.has(m.slug)).length;

  // nächstes offenes Modul – respektiert den Pfad-Modus.
  // "klarheit": SOS wird aus dem "Weiter mit"-Vorschlag ausgeklammert
  //             (bleibt jederzeit über den Herz-Button erreichbar).
  // "akut":     SOS bleibt der erste Vorschlag, danach linear weiter.
  const candidates = pathMode === "klarheit"
    ? allModules.filter((m) => m.slug !== "sos-soforthilfe")
    : allModules;
  const nextModule = candidates.find((m) => !doneSlugs.has(m.slug)) ?? candidates[0];

  const pickPath = (mode: PathMode) => {
    writePathMode(mode);
    setPathMode(mode);
  };

  return (
    <main className="min-h-screen pb-24">
      <div className="mx-auto max-w-[1400px] px-6 pt-4">
        {/* ─── HEADLINE ─── */}
        <div className="mb-6">
          <p
            className="text-[11px] font-display font-semibold tracking-brand uppercase"
            style={{ color: "var(--mauve)" }}
          >
            Willkommen zurück
          </p>
          <h1
            className="mt-2 font-display text-4xl font-extrabold tracking-brand uppercase md:text-5xl"
            style={{ color: "var(--bordeaux)" }}
          >
            Dein Heilungs-Pfad
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-graphite/75">
            Zehn Kapitel, je drei stille Transformationsziele. Du gehst sie in
            deinem Tempo — der Pfad merkt sich, wo du stehst.
          </p>
        </div>

        {/* ─── HAUPT-GRID: Pfad links, Side-Panel rechts ─── */}
        <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
          {/* Linke Spalte: Winding-Path im Glass-Frame */}
          <section className="glass-strong rounded-2xl p-6">
            <div className="mb-4 flex items-center gap-5 text-[11px] font-display tracking-brand uppercase text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <span
                  className="inline-block h-2 w-2 rounded-full"
                  style={{ backgroundColor: "var(--sage)" }}
                />
                Blatt = Modul abgeschlossen
              </span>
              <span className="inline-flex items-center gap-2">
                <span
                  className="inline-block h-2 w-2 rounded-full"
                  style={{ backgroundColor: "var(--mauve)" }}
                />
                Blüte = 3 / 3 Ziele gelebt
              </span>
            </div>
            <WindingPathJourney />
          </section>

          {/* Rechte Spalte: 3 Glass-Cards */}
          <aside className="flex flex-col gap-4">
            {/* Tagesimpuls */}
            <div className="glass rounded-2xl p-5">
              <p
                className="text-[10px] font-display font-semibold tracking-brand uppercase"
                style={{ color: "var(--mauve)" }}
              >
                · Tagesimpuls
              </p>
              <p className="mt-3 text-sm leading-relaxed text-foreground/85">{IMPULSE}</p>
            </div>

            {/* Fortschritt */}
            <div className="glass rounded-2xl p-5">
              <div className="flex items-baseline justify-between">
                <p
                  className="text-[10px] font-display font-semibold tracking-brand uppercase"
                  style={{ color: "var(--mauve)" }}
                >
                  Fortschritt
                </p>
                <p className="text-xs font-semibold text-foreground/70">
                  {done} / {total}
                </p>
              </div>
              <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/60">
                <div
                  className="h-full rounded-full transition-all"
                  style={{
                    width: `${total ? (done / total) * 100 : 0}%`,
                    backgroundColor: "var(--sage)",
                  }}
                />
              </div>
              <div className="mt-3 flex items-center gap-4 text-[11px] text-muted-foreground">
                <span className="inline-flex items-center gap-1.5">
                  <Leaf className="h-3.5 w-3.5" style={{ color: "var(--sage)" }} />
                  {done} Blätter
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Flower2 className="h-3.5 w-3.5" style={{ color: "var(--mauve)" }} />
                  0 Blüten
                </span>
              </div>
            </div>

            {/* Pfad-Auswahl (falls noch nicht getroffen) */}
            {!pathMode && (
              <div className="glass rounded-2xl p-5">
                <p
                  className="text-[10px] font-display font-semibold tracking-brand uppercase"
                  style={{ color: "var(--mauve)" }}
                >
                  Wo stehst du gerade?
                </p>
                <p className="mt-2 text-xs leading-relaxed text-foreground/80">
                  Wähle deinen Einstieg – das steuert, was wir dir als nächsten
                  Schritt vorschlagen. Du kannst jederzeit wechseln.
                </p>
                <div className="mt-3 grid gap-2">
                  <button
                    type="button"
                    onClick={() => pickPath("akut")}
                    className="flex items-start gap-3 rounded-xl border border-[var(--color-sos)]/25 bg-white/70 p-3 text-left transition hover:bg-white"
                  >
                    <LifeBuoy className="mt-0.5 h-4 w-4 flex-shrink-0 text-[var(--color-sos)]" />
                    <div>
                      <p className="text-[12px] font-bold text-bordeaux">
                        In akuter Not
                      </p>
                      <p className="text-[11px] leading-snug text-graphite/70">
                        Starte mit SOS · Stabilisierung zuerst.
                      </p>
                    </div>
                  </button>
                  <button
                    type="button"
                    onClick={() => pickPath("klarheit")}
                    className="flex items-start gap-3 rounded-xl border border-sage/30 bg-white/70 p-3 text-left transition hover:bg-white"
                  >
                    <Compass className="mt-0.5 h-4 w-4 flex-shrink-0 text-sage" />
                    <div>
                      <p className="text-[12px] font-bold text-bordeaux">
                        Verstehen & aufarbeiten
                      </p>
                      <p className="text-[11px] leading-snug text-graphite/70">
                        Starte mit Trauma-Bonding. SOS bleibt über den
                        Herz-Button erreichbar.
                      </p>
                    </div>
                  </button>
                </div>
                <Link
                  to="/routing"
                  className="mt-3 inline-block text-[11px] font-semibold text-bordeaux underline-offset-2 hover:underline"
                >
                  Mehr erfahren →
                </Link>
              </div>
            )}

            {/* Weiter mit */}
            {nextModule && (
              <Link
                to="/modul/$slug"
                params={{ slug: nextModule.slug }}
                className="group block rounded-2xl p-5 text-white transition-transform hover:-translate-y-[1px]"
                style={{ backgroundColor: "var(--terracotta)" }}
              >
                <p className="text-[10px] font-display font-semibold tracking-brand uppercase text-white/80">
                  Weiter mit
                </p>
                <div className="mt-2 flex items-center justify-between gap-3">
                  <p className="font-display text-sm font-bold">
                    {nextModule.number === "0" ? "SOS" : `Modul ${nextModule.number}`} · {nextModule.title}
                  </p>
                  <ArrowRight className="h-4 w-4 flex-shrink-0 transition-transform group-hover:translate-x-1" />
                </div>
                {pathMode === "klarheit" && (
                  <p className="mt-2 flex items-start gap-1.5 text-[11px] text-white/85">
                    <Heart className="mt-0.5 h-3 w-3 flex-shrink-0" fill="currentColor" />
                    <span>SOS jederzeit über den Herz-Button rechts unten.</span>
                  </p>
                )}
                {pathMode === "akut" && nextModule.slug === "sos-soforthilfe" && (
                  <p className="mt-2 text-[11px] text-white/85">
                    Erst stabilisieren – Theorie greift nicht im Sturm.
                  </p>
                )}
              </Link>
            )}

            {pathMode && (
              <button
                type="button"
                onClick={() => {
                  writePathMode(pathMode === "akut" ? "klarheit" : "akut");
                  setPathMode(pathMode === "akut" ? "klarheit" : "akut");
                }}
                className="text-[11px] text-graphite/60 underline-offset-2 hover:underline"
              >
                Pfad wechseln (aktuell: {pathMode === "akut" ? "In akuter Not" : "Verstehen & aufarbeiten"})
              </button>
            )}
          </aside>
        </div>


        {/* ─── ALLE MODULE ─── */}
        <section className="mt-10">
          <h2
            className="mb-4 text-[12px] font-display font-semibold tracking-brand uppercase"
            style={{ color: "var(--bordeaux)" }}
          >
            Alle Module
          </h2>
          <div className="grid gap-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            {allModules.map((m) => {
              const isDone = doneSlugs.has(m.slug);
              return (
                <Link
                  key={m.slug}
                  to="/modul/$slug"
                  params={{ slug: m.slug }}
                  className="glass group relative rounded-2xl p-4 transition-all hover:-translate-y-[2px]"
                >
                  <div className="flex items-start justify-between gap-2">
                    <p
                      className="text-[10px] font-display font-semibold tracking-brand uppercase"
                      style={{ color: "var(--mauve)" }}
                    >
                      Modul {m.number}
                    </p>
                    <span
                      className="grid h-4 w-4 place-items-center rounded-full border"
                      style={{
                        borderColor: isDone ? "var(--sage)" : "var(--mauve)",
                        backgroundColor: isDone ? "var(--sage)" : "transparent",
                      }}
                    />
                  </div>
                  <p
                    className="mt-3 font-display text-sm font-extrabold leading-tight tracking-brand uppercase"
                    style={{ color: "var(--bordeaux)" }}
                  >
                    {m.title}
                  </p>
                  <div className="mt-3 h-0.5 w-full rounded-full bg-white/70" />
                </Link>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
}
