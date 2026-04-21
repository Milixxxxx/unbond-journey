import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { KeyRound, ShieldCheck, Lock, Check, ArrowLeft, Sparkles } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth-context";

export const Route = createFileRoute("/unlock")({
  component: UnlockPage,
  head: () => ({
    meta: [
      { title: "Bonus-Code einlösen · UNBOND" },
      {
        name: "description",
        content:
          "Löse hier deinen UNBOND-Complete-Code ein und schalte alle drei Bonus-Kapitel frei.",
      },
    ],
  }),
});

const STORAGE_KEY = "unbond-bonus-unlocks";

const UNLOCK_CODES: Record<string, string[]> = {
  "UNBOND-COMPLETE-2025": ["bonus-d", "bonus-e", "bonus-f"],
  "UNBOND-BONUS-D-2025": ["bonus-d"],
  "UNBOND-BONUS-E-2025": ["bonus-e"],
  "UNBOND-BONUS-F-2025": ["bonus-f"],
};

const BONUS_INFO = [
  {
    slug: "bonus-d",
    label: "Bonus D",
    title: "Wenn Behörden zur Waffe werden",
    blurb: "Litigation Abuse, DARVO, Beweissicherung, Vorlagen, queere Ressourcen.",
  },
  {
    slug: "bonus-e",
    label: "Bonus E",
    title: "Das Warum hinter dem Warum",
    blurb: "Schema-Therapie (Young), IFS-Parts (Schwartz), Tiefenschichten.",
  },
  {
    slug: "bonus-f",
    label: "Bonus F",
    title: "Ankommen in der Trauer",
    blurb: "Disenfranchised Grief, 5 Verlustebenen, finale Kintsugi-Apotheose.",
  },
];

function readUnlocks(): string[] {
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

function writeUnlocks(slugs: string[]) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(slugs));
    window.dispatchEvent(new CustomEvent("unbond-bonus-unlocked"));
  } catch {
    /* noop */
  }
}

function UnlockPage() {
  const { user } = useAuth();
  const [code, setCode] = useState("");
  const [busy, setBusy] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [unlocked, setUnlocked] = useState<string[]>([]);

  useEffect(() => {
    setUnlocked(readUnlocks());
    const onChange = () => setUnlocked(readUnlocks());
    window.addEventListener("unbond-bonus-unlocked", onChange);
    window.addEventListener("storage", onChange);
    return () => {
      window.removeEventListener("unbond-bonus-unlocked", onChange);
      window.removeEventListener("storage", onChange);
    };
  }, []);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);
    if (!code.trim()) return;
    setBusy(true);

    const normalized = code.trim().toUpperCase();
    const slugs = UNLOCK_CODES[normalized];
    if (!slugs) {
      setError("Dieser Code ist nicht gültig. Prüfe Schreibweise und Bindestriche.");
      setBusy(false);
      return;
    }

    const merged = Array.from(new Set([...readUnlocks(), ...slugs]));
    writeUnlocks(merged);
    setUnlocked(merged);

    if (user) {
      try {
        await Promise.all(
          slugs.map((s) =>
            supabase.from("module_progress").upsert(
              {
                user_id: user.id,
                module_slug: s,
                exercise_state: { __unlock: true },
              },
              { onConflict: "user_id,module_slug" },
            ),
          ),
        );
      } catch {
        /* lokal bleibt erhalten */
      }
    }

    setSuccess(
      slugs.length === 3
        ? "🎉 Alle drei Bonus-Kapitel sind jetzt für dich freigeschaltet."
        : `✓ ${slugs.length === 1 ? "Ein Bonus-Kapitel" : `${slugs.length} Bonus-Kapitel`} freigeschaltet.`,
    );
    setCode("");
    setBusy(false);
  };

  const allUnlocked = unlocked.length >= 3;

  return (
    <main className="min-h-screen pb-24">
      {/* Hero */}
      <section className="relative overflow-hidden bg-graphite text-cream">
        <div className="pointer-events-none absolute -top-32 -left-20 h-80 w-80 rounded-full bg-bordeaux/40 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-32 -right-20 h-72 w-72 rounded-full bg-sage/25 blur-[120px]" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-b from-transparent to-[var(--color-background)]" />

        <div className="relative mx-auto max-w-2xl px-4 pt-20 pb-14">
          <Link
            to="/dashboard"
            className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-cream/70 transition hover:text-cream"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Zurück
          </Link>
          <p className="mt-6 text-[10px] font-semibold uppercase tracking-[0.32em] text-sage">
            · Bonus freischalten ·
          </p>
          <h1 className="mt-3 font-display text-3xl font-light leading-[1.1] tracking-tight text-cream md:text-4xl">
            Du hast einen Code?
            <br />
            <span className="font-semibold italic text-sage-soft">Hier einlösen.</span>
          </h1>
          <p className="mt-4 max-w-md text-sm leading-relaxed text-cream/75">
            Mit dem UNBOND-Complete-Code schaltest du <strong>alle drei Bonus-Kapitel</strong>{" "}
            (D, E, F) auf einmal frei. Du musst den Code nur einmal hier eingeben.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-2xl px-4 pt-2">
        {/* Code-Eingabe */}
        <section
          className="rounded-2xl border-2 border-bordeaux/25 bg-white/85 p-6 shadow-soft sm:p-7"
          style={{ borderLeft: "5px solid var(--color-bordeaux)" }}
        >
          <div className="flex items-center gap-2">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-bordeaux/12 text-bordeaux">
              <KeyRound className="h-5 w-5" />
            </div>
            <div>
              <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-mauve">
                Schritt 1
              </p>
              <h2 className="font-display text-lg font-bold text-bordeaux">
                Code eingeben
              </h2>
            </div>
          </div>

          <form onSubmit={submit} className="mt-5 space-y-3">
            <label className="block">
              <span className="text-xs font-semibold uppercase tracking-wider text-bordeaux">
                Dein Freischalt-Code
              </span>
              <div className="mt-1.5 flex flex-col gap-2 sm:flex-row">
                <div className="relative flex-1">
                  <KeyRound className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-bordeaux/60" />
                  <input
                    type="text"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="UNBOND-COMPLETE-2025"
                    autoCapitalize="characters"
                    spellCheck={false}
                    autoComplete="off"
                    className="w-full rounded-md border border-bordeaux/20 bg-white py-3 pl-10 pr-3 font-mono text-sm uppercase tracking-wider text-graphite outline-none transition focus:border-bordeaux/60 focus:ring-2 focus:ring-bordeaux/15"
                  />
                </div>
                <button
                  type="submit"
                  disabled={busy || !code.trim()}
                  className="inline-flex items-center justify-center gap-1.5 rounded-md bg-bordeaux px-5 py-3 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
                >
                  <ShieldCheck className="h-4 w-4" />
                  Freischalten
                </button>
              </div>
            </label>
            {error && (
              <p className="rounded-md bg-bordeaux/10 px-3 py-2 text-xs font-semibold text-bordeaux">
                {error}
              </p>
            )}
            {success && (
              <p className="rounded-md bg-sage/15 px-3 py-2 text-xs font-semibold text-sage">
                {success}
              </p>
            )}
          </form>

          {!user && (
            <p className="mt-4 rounded-md border border-mauve/20 bg-mauve/5 p-3 text-[11px] leading-relaxed text-graphite/75">
              <strong className="text-mauve">Tipp:</strong> Der Code wird in deinem
              Browser gespeichert. Wenn du dich{" "}
              <Link to="/auth" className="font-semibold text-bordeaux underline">
                anmeldest
              </Link>
              , bleibt die Freischaltung auch beim Geräte-Wechsel erhalten.
            </p>
          )}
        </section>

        {/* Status der drei Bonus-Kapitel */}
        <section className="mt-6">
          <h2 className="mb-3 px-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-mauve">
            Schritt 2 · Status deiner Bonus-Kapitel
          </h2>
          <ul className="space-y-2">
            {BONUS_INFO.map((b) => {
              const isUnlocked = unlocked.includes(b.slug);
              return (
                <li key={b.slug}>
                  <Link
                    to="/modul/$slug"
                    params={{ slug: b.slug }}
                    className={`flex items-start gap-3 rounded-xl border p-4 transition hover:bg-white ${
                      isUnlocked
                        ? "border-sage/40 bg-sage/5"
                        : "border-bordeaux/15 bg-white/70"
                    }`}
                  >
                    <div
                      className={`grid h-10 w-10 flex-shrink-0 place-items-center rounded-full ${
                        isUnlocked
                          ? "bg-sage text-white"
                          : "bg-bordeaux/10 text-bordeaux"
                      }`}
                    >
                      {isUnlocked ? (
                        <Check className="h-5 w-5" />
                      ) : (
                        <Lock className="h-4 w-4" />
                      )}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between gap-2">
                        <p className="font-display text-sm font-semibold text-bordeaux">
                          {b.label} · {b.title}
                        </p>
                        <span
                          className={`rounded-full px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${
                            isUnlocked
                              ? "bg-sage/20 text-sage"
                              : "bg-mauve/15 text-mauve"
                          }`}
                        >
                          {isUnlocked ? "frei" : "Vorschau"}
                        </span>
                      </div>
                      <p className="mt-1 text-xs leading-relaxed text-graphite/70">
                        {b.blurb}
                      </p>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ul>

          {allUnlocked && (
            <div className="mt-5 rounded-xl border-2 border-sage/40 bg-sage/10 p-4 text-center">
              <Sparkles className="mx-auto h-5 w-5 text-sage" />
              <p className="mt-2 font-display text-sm font-semibold text-bordeaux">
                Alle drei Bonus-Kapitel sind freigeschaltet.
              </p>
              <Link
                to="/modul/$slug"
                params={{ slug: "bonus-d" }}
                className="mt-3 inline-flex items-center gap-1.5 text-xs font-semibold text-bordeaux underline-offset-4 hover:underline"
              >
                Mit Bonus D starten →
              </Link>
            </div>
          )}
        </section>

        {/* Hinweis-Box */}
        <section className="mt-6 rounded-xl border border-mauve/20 bg-white/70 p-4 text-xs leading-relaxed text-graphite/75">
          <p>
            <strong className="text-bordeaux">Noch keinen Code?</strong> Der
            UNBOND-Complete-Code ist Teil des Complete-Pakets und wird per
            E-Mail nach dem Kauf zugestellt. Solange das Bonus-Paket vorbereitet
            wird, kannst du die <strong>Vorschau</strong> (Story und Diagnose)
            aller drei Kapitel bereits frei lesen.
          </p>
        </section>
      </div>
    </main>
  );
}
