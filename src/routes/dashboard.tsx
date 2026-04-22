import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState } from "react";
import { MODULES, PHASES, isBonus, type Phase } from "@/lib/modules";
import {
  CheckCircle2,
  BookHeart,
  Settings,
  Sparkles,
  Lock,
  KeyRound,
  ShieldCheck,
  Heart,
  AlertCircle,
  ScrollText,
  Feather,
  ListTree,
  BookOpen,
  Compass,
} from "lucide-react";
import { HealingTree } from "@/components/healing-tree";

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
      { title: "Dein sicherer Hafen · UNBOND" },
      {
        name: "description",
        content:
          "Dein persönliches Dashboard – Healing-Tree, Reading-Flow und alle Module von UNBOND.",
      },
    ],
  }),
});

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
  const [bonusUnlocks, setBonusUnlocks] = useState<string[]>([]);
  const [greeting, setGreeting] = useState<string>(NEUTRAL_GREETING);

  useEffect(() => {
    setGreeting(computeGreeting());
    setBonusUnlocks(readBonusUnlocks());
    const onUnlock = () => setBonusUnlocks(readBonusUnlocks());
    window.addEventListener("unbond-bonus-unlocked", onUnlock);
    window.addEventListener("storage", onUnlock);
    return () => {
      window.removeEventListener("unbond-bonus-unlocked", onUnlock);
      window.removeEventListener("storage", onUnlock);
    };
  }, []);

  const mainModules = useMemo(
    () => MODULES.filter((m) => m.available && !isBonus(m.slug)),
    [],
  );
  const bonusModules = useMemo(
    () => MODULES.filter((m) => m.available && isBonus(m.slug)),
    [],
  );

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
  // Demo-State: zwei Blätter, eine Blüte (für visuelle Wirkung in Phase 1).
  // Später wird das durch echte Progress-Daten ersetzt.
  const leafSlugs = earnedSlugs.length > 0 ? earnedSlugs : ["modul-01", "modul-02"];
  const bloomSlugs = earnedSlugs.length > 0 ? earnedSlugs.slice(0, 1) : ["modul-01"];

  const phases: Phase[] = [1, 2, 3, 4];

  return (
    <main className="min-h-screen pb-24">
      {/* ─── HERO · Sicherer Hafen ─── */}
      <section className="relative overflow-hidden bg-gradient-to-b from-graphite via-graphite to-[var(--color-background)] text-cream">
        <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-bordeaux/30 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-sage/20 blur-[120px]" />

        <div className="relative mx-auto max-w-2xl px-4 pt-20 pb-12">
          {/* Top-rechts Quick-Actions */}
          <div className="absolute right-4 top-6 flex items-center gap-1">
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
              · Dein sicherer Hafen ·
            </p>
            <h1 className="mt-3 font-display text-4xl font-light leading-[1.1] tracking-tight text-cream md:text-5xl">
              {greeting}
              <span className="text-sage-soft">.</span>
            </h1>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/75">
              Du musst heute nichts schaffen, nur da sein. Atme.
            </p>
          </div>

          {/* Mood-Routing */}
          <div className="mt-7 grid gap-3 sm:grid-cols-2 animate-fade-in">
            <p className="sm:col-span-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-cream/60">
              Wie fühlst du dich heute?
            </p>
            <Link
              to="/modul/$slug"
              params={{ slug: "sos-soforthilfe" }}
              className="group flex items-center gap-3 rounded-xl border border-warning/30 bg-warning/10 p-4 transition-all duration-300 hover:bg-warning/15 hover:-translate-y-[1px]"
            >
              <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full bg-warning/25 text-warning">
                <AlertCircle className="h-5 w-5" />
              </span>
              <div className="text-left">
                <p className="font-display text-sm font-semibold text-cream">Panik</p>
                <p className="text-[12px] text-cream/65">SOS-Notfallkoffer öffnen</p>
              </div>
            </Link>
            <Link
              to="/modul/$slug"
              params={{ slug: "modul-01" }}
              className="group flex items-center gap-3 rounded-xl border border-sage/30 bg-sage/10 p-4 transition-all duration-300 hover:bg-sage/15 hover:-translate-y-[1px]"
            >
              <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-full bg-sage/25 text-sage-soft">
                <Heart className="h-5 w-5" />
              </span>
              <div className="text-left">
                <p className="font-display text-sm font-semibold text-cream">Sehnsucht</p>
                <p className="text-[12px] text-cream/65">Modul 01 · Trauma-Bonding verstehen</p>
              </div>
            </Link>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-2xl px-4">
        {/* ─── HEALING TREE ─── */}
        <section className="-mt-4 animate-fade-in">
          <div className="rounded-2xl border border-border/50 bg-white/75 p-6 shadow-soft">
            <div className="text-center">
              <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-mauve">
                · Dein Healing-Tree ·
              </p>
              <h2 className="mt-2 font-display text-xl font-semibold text-bordeaux">
                {leafSlugs.length === 0
                  ? "Dein Baum wartet auf das erste Blatt"
                  : `${leafSlugs.length} ${leafSlugs.length === 1 ? "Schritt" : "Schritte"} gemeistert`}
              </h2>
              <p className="mx-auto mt-1.5 max-w-xs text-[12px] leading-snug text-graphite/65">
                Jedes abgeschlossene Modul wird zu einem Blatt. Drei von fünf Zielen
                erreichen → Blüte.
              </p>
            </div>
            <div className="mt-4">
              <HealingTree leafSlugs={leafSlugs} bloomSlugs={bloomSlugs} />
            </div>
          </div>
        </section>

        {/* ─── BEVOR ES LOSGEHT · Reading-Flow ─── */}
        <section className="mt-8 animate-fade-in">
          <header className="mb-3 flex items-baseline justify-between">
            <h2 className="font-display text-base font-semibold tracking-tight text-mauve">
              Bevor es losgeht
            </h2>
            <p className="text-[11px] text-graphite/55">5 ruhige Texte, kein Druck</p>
          </header>
          <div className="grid gap-2 sm:grid-cols-2">
            <ReadingCard
              to="/vorwort"
              icon={<Feather className="h-4 w-4" />}
              title="Vorwort"
              sub="Ein Brief von Milena"
            />
            <ReadingCard
              to="/poem"
              icon={<ScrollText className="h-4 w-4" />}
              title="Am Anfang war das Gefühl"
              sub="Marys Geschichte"
            />
            <ReadingCard
              to="/inhalt"
              icon={<ListTree className="h-4 w-4" />}
              title="Inhaltsverzeichnis"
              sub="Dein Programm im Überblick"
            />
            <ReadingCard
              to="/einleitung"
              icon={<BookOpen className="h-4 w-4" />}
              title="Einleitung"
              sub="Wissenschaftlicher Aufbau"
            />
            <ReadingCard
              to="/routing"
              icon={<Compass className="h-4 w-4" />}
              title="Wo stehst du?"
              sub="Self-Select für deinen Einstieg"
              wide
            />
          </div>
        </section>

        {/* ─── PHASEN-PFAD ─── */}
        <section className="mt-10 animate-fade-in">
          <header className="mb-3">
            <h2 className="font-display text-base font-semibold tracking-tight text-mauve">
              Deine 10 Schritte
            </h2>
            <p className="text-[11px] text-graphite/55">In vier Phasen, ruhig hintereinander.</p>
          </header>

          <div className="relative">
            <div className="absolute left-7 top-3 bottom-3 w-0.5 bg-gradient-to-b from-bordeaux/25 via-sage/25 to-mauve/25" />
            {phases.map((p) => {
              const phaseModules = MODULES.filter((m) => m.phase === p && !isBonus(m.slug));
              if (phaseModules.length === 0) return null;
              return (
                <section key={p} className="relative mb-6">
                  <div className="mb-2 ml-16">
                    <h3 className="font-display text-sm font-semibold tracking-tight text-mauve">
                      {PHASES[p].title}
                    </h3>
                    <p className="text-[11px] text-graphite/55">{PHASES[p].description}</p>
                  </div>
                  <ul className="space-y-2.5">
                    {phaseModules.map((m) => (
                      <li key={m.slug} className="relative">
                        <Station
                          number={m.number}
                          title={m.title}
                          subtitle={m.subtitle}
                          done={doneSlugs.has(m.slug)}
                          slug={m.slug}
                        />
                      </li>
                    ))}
                  </ul>
                </section>
              );
            })}
          </div>
        </section>

        {/* ─── BONUS ─── */}
        <BonusSection modules={bonusModules} unlocks={bonusUnlocks} />

        {/* ─── TRUST-BADGE ─── */}
        <section className="mt-10 rounded-2xl border border-sage/25 bg-sage/8 p-5 animate-fade-in">
          <div className="flex items-start gap-3">
            <span className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full bg-sage/20 text-sage">
              <ShieldCheck className="h-4 w-4" />
            </span>
            <div>
              <p className="font-display text-sm font-semibold text-bordeaux">
                Daten-Safe · EU-Server Frankfurt
              </p>
              <p className="mt-1 text-[12px] leading-relaxed text-graphite/75">
                Deine Einträge werden lokal in deinem Browser gespeichert und – nach Login –
                verschlüsselt auf EU-Servern in Frankfurt synchronisiert. So findest du deine
                Reise auf jedem Gerät wieder.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

function ReadingCard({
  to,
  icon,
  title,
  sub,
  wide,
}: {
  to: "/vorwort" | "/poem" | "/inhalt" | "/einleitung" | "/routing";
  icon: React.ReactNode;
  title: string;
  sub: string;
  wide?: boolean;
}) {
  return (
    <Link
      to={to}
      className={`group flex items-start gap-3 rounded-xl border border-border/50 bg-white/70 p-3.5 transition-all duration-300 hover:bg-white hover:-translate-y-[1px] hover:shadow-soft ${
        wide ? "sm:col-span-2" : ""
      }`}
    >
      <span className="mt-0.5 grid h-8 w-8 flex-shrink-0 place-items-center rounded-full bg-mauve/15 text-mauve transition group-hover:bg-mauve group-hover:text-white">
        {icon}
      </span>
      <div className="min-w-0 flex-1">
        <p className="font-display text-sm font-semibold leading-tight text-bordeaux">{title}</p>
        <p className="mt-0.5 text-[11.5px] text-graphite/65">{sub}</p>
      </div>
    </Link>
  );
}

function Station({
  number,
  title,
  subtitle,
  done,
  slug,
}: {
  number: string;
  title: string;
  subtitle: string;
  done: boolean;
  slug: string;
}) {
  return (
    <Link to="/modul/$slug" params={{ slug }} className="flex items-center gap-3">
      <div
        className={`relative z-10 grid h-14 w-14 flex-shrink-0 place-items-center rounded-full border-4 font-display font-bold transition-all duration-300 ${
          done
            ? "border-sage bg-sage text-white"
            : "border-mauve bg-white text-bordeaux"
        }`}
      >
        {done ? <CheckCircle2 className="h-6 w-6" /> : number}
      </div>
      <div className="flex-1 rounded-xl border border-border/60 bg-white/75 p-3 transition hover:bg-white hover:shadow-soft">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-display text-base font-semibold leading-tight text-bordeaux">
            {title}
          </h3>
          {done && (
            <span className="rounded-full bg-sage/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-sage">
              erledigt
            </span>
          )}
        </div>
        <p className="mt-0.5 line-clamp-2 text-xs text-graphite/70">{subtitle}</p>
      </div>
    </Link>
  );
}

function BonusSection({
  modules,
  unlocks,
}: {
  modules: typeof MODULES;
  unlocks: string[];
}) {
  if (modules.length === 0) return null;
  const allUnlocked = modules.every((m) => unlocks.includes(m.slug));

  return (
    <section className="relative mt-10 mb-6 animate-fade-in">
      <div className="mb-4 flex items-center gap-3">
        <span className="h-px flex-1 bg-bordeaux/15" />
        <span className="text-[10px] font-semibold uppercase tracking-[0.32em] text-bordeaux">
          · Bonus-Kapitel ·
        </span>
        <span className="h-px flex-1 bg-bordeaux/15" />
      </div>
      <div className="rounded-2xl border-2 border-bordeaux/15 bg-gradient-to-br from-bordeaux/5 via-mauve/5 to-transparent p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h2 className="font-display text-base font-semibold tracking-tight text-bordeaux">
              Vertiefung · D · E · F
            </h2>
            <p className="mt-1 text-xs text-graphite/70">
              {allUnlocked
                ? "Alle drei Bonus-Kapitel sind freigeschaltet."
                : "Vorschau frei zugänglich · Übungen mit dem UNBOND-Complete-Code."}
            </p>
          </div>
          {!allUnlocked && (
            <Link
              to="/unlock"
              className="inline-flex items-center gap-1.5 rounded-full bg-bordeaux px-3 py-1.5 text-[11px] font-semibold text-white transition hover:opacity-90"
            >
              <KeyRound className="h-3.5 w-3.5" />
              Code
            </Link>
          )}
        </div>
        <ul className="mt-4 space-y-2">
          {modules.map((m) => {
            const isUnlocked = unlocks.includes(m.slug);
            return (
              <li key={m.slug}>
                <Link
                  to="/modul/$slug"
                  params={{ slug: m.slug }}
                  className="group flex items-center gap-3 rounded-xl border border-bordeaux/15 bg-white/80 p-3 transition hover:bg-white hover:shadow-soft"
                >
                  <div
                    className={`grid h-12 w-12 flex-shrink-0 place-items-center rounded-full font-display text-base font-bold ${
                      isUnlocked
                        ? "bg-sage text-white"
                        : "border-2 border-bordeaux/30 bg-white text-bordeaux"
                    }`}
                  >
                    {isUnlocked ? <Sparkles className="h-5 w-5" /> : m.number}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-sm font-semibold leading-tight text-bordeaux">
                      {m.title}
                    </h3>
                    <div className="mt-0.5 flex items-center gap-2">
                      <span
                        className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
                          isUnlocked
                            ? "bg-sage/20 text-sage"
                            : "inline-flex items-center gap-1 bg-bordeaux/10 text-bordeaux"
                        }`}
                      >
                        {isUnlocked ? (
                          "frei"
                        ) : (
                          <>
                            <Lock className="h-2.5 w-2.5" />
                            Vorschau
                          </>
                        )}
                      </span>
                      <p className="line-clamp-1 text-[11px] text-graphite/65">{m.subtitle}</p>
                    </div>
                  </div>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
