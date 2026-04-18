import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useAuth } from "@/lib/auth-context";
import { supabase } from "@/integrations/supabase/client";
import { MODULES, PHASES, type Phase } from "@/lib/modules";
import { CheckCircle2, LogOut, Sparkles, BookHeart, Settings, Construction } from "lucide-react";
import butterflyPattern from "@/assets/butterfly-pattern.png";

export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
  head: () => ({
    meta: [{ title: "Deine Reise · UNBOND" }],
  }),
});

type ProgressRow = {
  module_slug: string;
  badge_earned: boolean;
  completed_at: string | null;
};

type Profile = {
  display_name: string | null;
  toxicometer_score: number | null;
  toxicometer_level: string | null;
  acquisition_source: string | null;
  relationship_status: string | null;
};

// Mapping: ToxiCometer-Stufe → empfohlenes Einstiegs-Modul
const LEVEL_RECOMMENDATION: Record<string, { slug: string; label: string; tone: string }> = {
  critical: { slug: "modul-01", label: "Modul 01 · SOS — fang hier an, atme zuerst", tone: "Dein Test zeigt: gerade ist viel." },
  high: { slug: "modul-01", label: "Modul 01 · SOS — wir starten mit Stabilisierung", tone: "Dein Test zeigt hohe Belastung." },
  moderate: { slug: "kapitel-0", label: "Kapitel 0 · Fundament — verstehen, was passiert", tone: "Dein Test zeigt mittlere Belastung." },
  low: { slug: "kapitel-0", label: "Kapitel 0 · Fundament — als ruhiger Einstieg", tone: "Dein Test zeigt: du hast schon viel Klarheit." },
};

// Tageszeit-abhängige Begrüßung — kleine warme Geste
function getGreeting() {
  const h = new Date().getHours();
  if (h < 5) return "Du bist wach";
  if (h < 11) return "Guten Morgen";
  if (h < 14) return "Schön, dass du da bist";
  if (h < 18) return "Schön, dich zu sehen";
  if (h < 22) return "Guten Abend";
  return "Du bist nicht allein";
}

function Dashboard() {
  const { user, loading, signOut } = useAuth();
  const [progress, setProgress] = useState<ProgressRow[]>([]);
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    if (!loading && !user) return;
    if (!user) return;
    (async () => {
      const [{ data: prog }, { data: prof }] = await Promise.all([
        supabase.from("module_progress").select("module_slug,badge_earned,completed_at").eq("user_id", user.id),
        supabase
          .from("profiles")
          .select("display_name,toxicometer_score,toxicometer_level,acquisition_source,relationship_status")
          .eq("id", user.id)
          .maybeSingle(),
      ]);
      setProgress(prog ?? []);
      setProfile(prof ?? null);
    })();
  }, [user, loading]);

  if (loading) {
    return (
      <div className="grid min-h-screen place-items-center text-sm text-muted-foreground">
        Einen Moment…
      </div>
    );
  }

  if (!user) {
    return (
      <div className="grid min-h-screen place-items-center px-4">
        <div className="glass-card max-w-sm p-6 text-center">
          <h2 className="font-display text-2xl font-bold text-bordeaux">Schön, dass du hier bist</h2>
          <p className="mt-2 text-sm text-graphite/75">
            Melde dich an — dein Fortschritt wird sicher in Frankfurt gespeichert.
          </p>
          <Link
            to="/auth"
            className="mt-4 inline-block bg-bordeaux px-6 py-2.5 text-sm font-semibold text-white shadow-elegant transition hover:opacity-90"
          >
            Zum Login
          </Link>
        </div>
      </div>
    );
  }

  const doneSlugs = new Set(progress.filter((p) => p.badge_earned || p.completed_at).map((p) => p.module_slug));
  const completedCount = doneSlugs.size;
  const totalAvailable = MODULES.filter((m) => m.available).length;
  const progressPct = Math.round((completedCount / totalAvailable) * 100);

  const phases: Phase[] = [1, 2, 3, 4];
  const greeting = getGreeting();
  const firstName = profile?.display_name?.split(" ")[0];

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
            <button
              onClick={() => signOut()}
              aria-label="Abmelden"
              className="grid h-9 w-9 place-items-center rounded-full text-cream/60 transition hover:bg-white/10 hover:text-cream"
            >
              <LogOut className="h-4 w-4" />
            </button>
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
              Atme. Du musst heute nichts schaffen, nur da sein.
              {completedCount > 0 && ` Du hast schon ${completedCount} Schritt${completedCount > 1 ? "e" : ""} hinter dir — das zählt.`}
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
        {/* Personalisierte Empfehlung aus Toxicometer-Test (Brevo-Funnel) */}
        {profile?.toxicometer_level &&
          LEVEL_RECOMMENDATION[profile.toxicometer_level] &&
          completedCount === 0 && (
            <Link
              to="/modul/$slug"
              params={{ slug: LEVEL_RECOMMENDATION[profile.toxicometer_level].slug }}
              className="mb-6 block rounded-2xl border border-bordeaux/20 bg-gradient-to-r from-bordeaux/10 via-mauve/5 to-transparent p-5 transition hover:from-bordeaux/15 hover:shadow-soft"
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-mauve">
                Aus deinem Test
              </p>
              <p className="mt-1.5 font-display text-base font-semibold leading-snug text-bordeaux">
                {LEVEL_RECOMMENDATION[profile.toxicometer_level].tone}
              </p>
              <p className="mt-1.5 text-xs text-graphite/75">
                Empfehlung: {LEVEL_RECOMMENDATION[profile.toxicometer_level].label} →
              </p>
            </Link>
          )}

{/* Toxicometer-Test wird ausschließlich auf der Landingpage gemacht. 
            Ergebnis kommt via Brevo-Mail-Link (?source=toxicometer&level=...) ins Profil. */}

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
  slug,
}: {
  number: string;
  title: string;
  subtitle: string;
  done: boolean;
  isStub: boolean;
  slug: string;
}) {
  return (
    <Link to="/modul/$slug" params={{ slug }} className="flex items-center gap-3">
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
