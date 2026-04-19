import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { MODULES, PHASES, type Phase } from "@/lib/modules";
import { CheckCircle2, BookHeart, Settings, Construction, Star } from "lucide-react";
import butterflyPattern from "@/assets/butterfly-pattern.png";

export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
  head: () => ({
    meta: [{ title: "Deine Reise · UNBOND" }],
  }),
});

// Tageszeit-abhängige Begrüßung — clientseitig berechnet, um Hydration-Mismatch zu vermeiden
const NEUTRAL_GREETING = "Schön, dass du da bist";
function computeGreeting() {
  const h = new Date().getHours();
  if (h < 5) return "Du bist wach";
  if (h < 11) return "Guten Morgen";
  if (h < 14) return "Schön, dass du da bist";
  if (h < 18) return "Schön, dich zu sehen";
  if (h < 22) return "Guten Abend";
  return "Du bist nicht allein";
}

function Dashboard() {
  const [earnedSlugs, setEarnedSlugs] = useState<string[]>([]);
  const [greeting, setGreeting] = useState<string>(NEUTRAL_GREETING);
  useEffect(() => {
    setGreeting(computeGreeting());
  }, []);
  const totalAvailable = MODULES.filter((m) => m.available).length;
  const availableModules = useMemo(() => MODULES.filter((m) => m.available), []);

  useEffect(() => {
    const readProgress = () => {
      const earned = availableModules
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
  }, [availableModules]);

  const doneSlugs = new Set<string>(earnedSlugs);
  const completedCount = earnedSlugs.length;
  const progressPct = totalAvailable ? Math.round((completedCount / totalAvailable) * 100) : 0;

  const phases: Phase[] = [1, 2, 3, 4];
  const firstName: string | undefined = undefined;

  return (
    <main className="min-h-screen pb-24">
      {/* ===================== CINEMATIC HERO ===================== */}
      <section className="relative -mt-[64px] overflow-hidden bg-graphite text-cream">
        {/* Schmetterlings-Pattern, sehr dezent */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07] mix-blend-screen"
          style={{
            backgroundImage: `url(${butterflyPattern})`,
            backgroundSize: "1100px auto",
            backgroundPosition: "center",
          }}
        />
        {/* Bordeaux-Glow oben links, Sage-Glow unten rechts */}
        <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-bordeaux/40 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-sage/25 blur-[120px]" />
        {/* Sanfter unterer Verlauf zur Cream-Fläche */}
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[var(--color-background)]" />

        <div className="relative mx-auto max-w-2xl px-4 pt-28 pb-16">
          {/* Action-Icons oben rechts */}
          <div className="absolute right-4 top-24 flex items-center gap-1">
            <Link
              to="/journal"
              aria-label="Mein Journal"
              className="grid h-9 w-9 place-items-center rounded-full text-cream/60 transition hover:bg-white/10 hover:text-cream"
            >
              <BookHeart className="h-4 w-4" />
            </Link>
            <Link
              to="/einstellungen"
              aria-label="Einstellungen"
              className="grid h-9 w-9 place-items-center rounded-full text-cream/60 transition hover:bg-white/10 hover:text-cream"
            >
              <Settings className="h-4 w-4" />
            </Link>
          </div>

          <div className="animate-fade-in">
            <p className="text-[10px] font-semibold uppercase tracking-[0.32em] text-sage">
              · Deine Reise ·
            </p>
            <h1 className="mt-3 font-display text-4xl font-light leading-[1.1] tracking-tight text-cream md:text-5xl">
              {greeting}
              {firstName && (
                <>
                  ,<br />
                  <span className="font-semibold italic text-sage-soft">{firstName}</span>
                </>
              )}
              {!firstName && <span className="text-sage-soft">.</span>}
            </h1>
            <p className="mt-5 max-w-md text-sm leading-relaxed text-cream/75 md:text-base">
              Atme. Du musst heute nichts schaffen, nur da sein. Alle Inhalte sind gerade frei zugänglich — wir kümmern uns später wieder um den Login.
            </p>
          </div>

          {/* Fortschritts-Ring, groß und zentriert unten */}
          <div className="mt-10 flex items-center gap-5 animate-fade-in">
            <ProgressRing percent={progressPct} />
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-sage/80">Healing-Pfad</p>
              <p className="font-display text-xl font-semibold text-cream">
                {completedCount}<span className="text-cream/50"> / {totalAvailable}</span>
              </p>
              <p className="text-xs text-cream/60">Schritte gemeistert</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== HELLE ARBEITSFLÄCHE ===================== */}
      <div className="mx-auto max-w-2xl px-4 pt-2">
          <div className="mb-6 rounded-2xl border border-bordeaux/20 bg-gradient-to-r from-bordeaux/10 via-mauve/5 to-transparent p-5">
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-mauve">
            Freier Zugang
          </p>
          <p className="mt-1.5 font-display text-base font-semibold leading-snug text-bordeaux">
            Du kannst jetzt direkt durch alle Kapitel gehen.
          </p>
          <p className="mt-1.5 text-xs text-graphite/75">
              Gerade sind nur die freigegebenen Testkapitel offen. Weitere Kapitel folgen erst nach deiner Freigabe.
          </p>
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-white/70 px-3 py-1.5 text-xs font-semibold text-bordeaux">
              <Star className="h-3.5 w-3.5 fill-current" />
              {completedCount} Sternchen gesammelt
            </div>
        </div>

        {/* Vertikaler Pfad mit Phasen */}
        <div className="relative mt-2">
          <div className="absolute left-7 top-3 bottom-3 w-0.5 bg-gradient-to-b from-bordeaux/30 via-sage/30 to-mauve/30" />

          {phases.map((p) => {
            const phaseModules = MODULES.filter((m) => m.phase === p);
            return (
              <section key={p} className="relative mb-7">
                <div className="mb-3 ml-16">
                  <h2 className="font-display text-base font-semibold tracking-tight text-mauve">
                    {PHASES[p].title}
                  </h2>
                  <p className="text-xs text-graphite/60">{PHASES[p].description}</p>
                </div>
                <ul className="space-y-3">
                  {phaseModules.map((m) => {
                    const done = doneSlugs.has(m.slug);
                    const isStub = !!m.stubBlurb;
                    return (
                      <li key={m.slug} className="relative">
                        <Station
                          number={m.number}
                          title={m.title}
                          subtitle={m.subtitle}
                          done={done}
                           isStub={isStub}
                           available={m.available}
                          slug={m.slug}
                        />
                      </li>
                    );
                  })}
                </ul>
              </section>
            );
          })}
        </div>
      </div>
    </main>
  );
}

/** Großer SVG-Fortschrittsring mit Sage→Bordeaux-Gradient und sanftem Pulse. */
function ProgressRing({ percent }: { percent: number }) {
  const size = 88;
  const stroke = 6;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percent / 100) * circumference;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="-rotate-90">
        <defs>
          <linearGradient id="ring-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.78 0.035 155)" />
            <stop offset="100%" stopColor="oklch(0.55 0.06 14)" />
          </linearGradient>
        </defs>
        {/* Track */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="oklch(1 0 0 / 0.12)"
          strokeWidth={stroke}
        />
        {/* Progress */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="url(#ring-grad)"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          style={{ transition: "stroke-dashoffset 1.2s cubic-bezier(0.16, 1, 0.3, 1)" }}
        />
      </svg>
      <div className="absolute inset-0 grid place-items-center">
        <span className="font-display text-base font-semibold text-cream">{percent}%</span>
      </div>
    </div>
  );
}

function Station({
  number,
  title,
  subtitle,
  done,
  isStub,
  available,
  slug,
}: {
  number: string;
  title: string;
  subtitle: string;
  done: boolean;
  isStub: boolean;
  available: boolean;
  slug: string;
}) {
  return (
    <Link
      to="/modul/$slug"
      params={{ slug }}
      className={`flex items-center gap-3 ${!available ? "opacity-80" : ""}`}
    >
      <div
        className={`relative z-10 grid h-14 w-14 flex-shrink-0 place-items-center rounded-full border-4 font-display font-bold ${
          done
            ? "border-sage bg-sage text-white"
            : isStub
              ? "border-mauve/40 bg-white/80 text-mauve"
              : "border-mauve bg-white text-bordeaux animate-pulse-soft"
        }`}
      >
        {done ? (
          <CheckCircle2 className="h-6 w-6" />
        ) : isStub ? (
          <Construction className="h-4 w-4" />
        ) : (
          number
        )}
      </div>
      <div className="flex-1 rounded-xl border border-border/60 bg-white/75 p-3 transition hover:bg-white hover:shadow-soft">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-display text-base font-semibold leading-tight text-bordeaux">{title}</h3>
          {done ? (
            <span className="rounded-full bg-sage/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-sage">
              erledigt
            </span>
          ) : !available ? (
            <span className="rounded-full bg-muted px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
              wartet auf Freigabe
            </span>
          ) : isStub ? (
            <span className="rounded-full bg-mauve/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-mauve">
              Vorschau
            </span>
          ) : null}
        </div>
        <p className="mt-0.5 line-clamp-2 text-xs text-graphite/70">{subtitle}</p>
      </div>
    </Link>
  );
}
