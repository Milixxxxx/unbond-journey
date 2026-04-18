import { createFileRoute, Link, redirect } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useAuth } from "@/lib/auth-context";
import { supabase } from "@/integrations/supabase/client";
import { MODULES, PHASES, type Phase } from "@/lib/modules";
import { CheckCircle2, LogOut, Sparkles, Activity, BookOpen, BookHeart, Settings, Construction } from "lucide-react";

export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
  head: () => ({
    meta: [{ title: "Healing Journey · UNBOND" }],
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
  critical: { slug: "modul-01", label: "Modul 01 · SOS — du brauchst zuerst Stabilisierung", tone: "Dein Test zeigte sehr hohe Belastung." },
  high: { slug: "modul-01", label: "Modul 01 · SOS — wir starten mit Stabilisierung", tone: "Dein Test zeigte hohe Belastung." },
  moderate: { slug: "kapitel-0", label: "Kapitel 0 · Fundament — verstehen, was passiert", tone: "Dein Test zeigte mittlere Belastung." },
  low: { slug: "kapitel-0", label: "Kapitel 0 · Fundament — als Einstieg", tone: "Dein Test zeigte niedrige Belastung." },
};

function Dashboard() {
  const { user, loading, signOut } = useAuth();
  const [progress, setProgress] = useState<ProgressRow[]>([]);
  const [profile, setProfile] = useState<Profile | null>(null);

  useEffect(() => {
    if (!loading && !user) {
      // soft redirect via Link below; we render a CTA instead
      return;
    }
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
        Lädt…
      </div>
    );
  }

  if (!user) {
    return (
      <div className="grid min-h-screen place-items-center px-4">
        <div className="glass-card max-w-sm p-6 text-center">
          <h2 className="font-display text-xl font-bold text-bordeaux">Bitte melde dich an</h2>
          <p className="mt-2 text-sm text-graphite/75">
            Dein Fortschritt wird sicher gespeichert und geräteübergreifend synchronisiert.
          </p>
          <Link
            to="/auth"
            className="mt-4 inline-block rounded-full bg-bordeaux px-6 py-2.5 text-sm font-semibold text-white"
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

  const phases: Phase[] = [1, 2, 3, 4];

  return (
    <main className="min-h-screen px-4 py-8 pb-24">
      <div className="mx-auto max-w-2xl">
        {/* Header */}
        <header className="mb-6 flex items-start justify-between gap-3 animate-fade-in">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-mauve">Deine Reise</p>
            <h1 className="font-display text-2xl font-extrabold text-bordeaux md:text-3xl">
              Hallo {profile?.display_name ?? "schön, dass du da bist"}
            </h1>
            <p className="mt-1 text-sm text-graphite/75">
              {completedCount} von {totalAvailable} verfügbaren Schritten gemeistert
            </p>
          </div>
          <div className="flex items-center gap-1">
            <Link
              to="/journal"
              aria-label="Mein Journal"
              className="grid h-9 w-9 place-items-center rounded-full text-graphite/60 hover:bg-black/5"
            >
              <BookHeart className="h-4 w-4" />
            </Link>
            <Link
              to="/einstellungen"
              aria-label="Einstellungen"
              className="grid h-9 w-9 place-items-center rounded-full text-graphite/60 hover:bg-black/5"
            >
              <Settings className="h-4 w-4" />
            </Link>
            <button
              onClick={() => signOut()}
              aria-label="Abmelden"
              className="grid h-9 w-9 place-items-center rounded-full text-graphite/60 hover:bg-black/5"
            >
              <LogOut className="h-4 w-4" />
            </button>
          </div>
        </header>

        {/* Progress strip */}
        <div className="glass-card mb-6 flex items-center gap-3 p-4 animate-fade-in">
          <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[var(--color-sage)] to-[var(--color-mauve)] text-white">
            <Activity className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <div className="flex justify-between text-xs font-medium text-graphite/70">
              <span>Healing-Fortschritt</span>
              <span>{Math.round((completedCount / totalAvailable) * 100)}%</span>
            </div>
            <div className="mt-1 h-2 overflow-hidden rounded-full bg-sage/15">
              <div
                className="h-full rounded-full bg-gradient-to-r from-[var(--color-sage)] to-[var(--color-mauve)] transition-all"
                style={{ width: `${(completedCount / totalAvailable) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {!profile?.toxicometer_score && (
          <Link
            to="/onboarding"
            className="mb-6 flex items-center justify-between gap-3 rounded-xl border-2 border-dashed border-mauve/40 bg-mauve/5 p-4 text-left transition hover:bg-mauve/10"
          >
            <div className="flex items-center gap-3">
              <Sparkles className="h-5 w-5 text-mauve" />
              <div>
                <p className="font-display text-sm font-bold text-bordeaux">Mach den Toxicometer-Test</p>
                <p className="text-xs text-graphite/70">5 Minuten · klärt, wo du anfangen solltest</p>
              </div>
            </div>
            <span className="text-xl text-mauve">→</span>
          </Link>
        )}

        {/* Vertikaler Pfad mit Phasen */}
        <div className="relative">
          {/* Hintergrund-Linie */}
          <div className="absolute left-7 top-3 bottom-3 w-0.5 bg-gradient-to-b from-bordeaux/30 via-sage/30 to-mauve/30" />

          {phases.map((p) => {
            const phaseModules = MODULES.filter((m) => m.phase === p);
            return (
              <section key={p} className="relative mb-7">
                <div className="mb-3 ml-16">
                  <h2 className="font-display text-sm font-bold text-mauve">{PHASES[p].title}</h2>
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
          <h3 className="font-display text-sm font-bold leading-tight text-bordeaux">{title}</h3>
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
