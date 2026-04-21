import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Lock, Sparkles, ArrowRight, KeyRound, Check } from "lucide-react";

const STORAGE_KEY = "unbond-bonus-unlocks";

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

/**
 * BonusGateway · Erscheint am Ende von Modul 10.
 *
 * Zeigt zwei Varianten je nach Freischalt-Status:
 *   - GESPERRT (Core-Käuferin): CTA-Block "Du willst tiefer? → Bonus-Paket"
 *     mit Button zur /unlock-Seite. Kintsugi-Schlussgeste bleibt OBEN
 *     (in Modul 10 selbst), das ist das Core-Finale.
 *   - ENTSPERRT (Complete-Käuferin): Übergangs-Brücke "Deine Reise geht weiter"
 *     mit direktem Link zu Bonus D. Die finale Kintsugi-Apotheose folgt erst
 *     NACH Bonus F (siehe bonus-f.tsx).
 */
export function BonusGateway() {
  const [unlocked, setUnlocked] = useState<string[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setUnlocked(readUnlocks());
    const onChange = () => setUnlocked(readUnlocks());
    window.addEventListener("unbond-bonus-unlocked", onChange);
    window.addEventListener("storage", onChange);
    return () => {
      window.removeEventListener("unbond-bonus-unlocked", onChange);
      window.removeEventListener("storage", onChange);
    };
  }, []);

  if (!mounted) return null;

  const hasAllBonus =
    unlocked.includes("bonus-d") &&
    unlocked.includes("bonus-e") &&
    unlocked.includes("bonus-f");

  if (hasAllBonus) {
    // Complete-Variante: Übergangs-Brücke zu Bonus D
    return (
      <section
        className="relative overflow-hidden rounded-2xl border-2 border-sage/40 bg-gradient-to-br from-cream via-white to-sage/10 p-6 shadow-soft sm:p-8"
        style={{ borderLeft: "5px solid var(--color-sage)" }}
      >
        <div className="flex items-center gap-2">
          <div className="grid h-9 w-9 place-items-center rounded-full bg-sage/15 text-sage">
            <Sparkles className="h-4 w-4" />
          </div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-sage">
            Übergang · Complete-Pfad
          </p>
        </div>

        <h3 className="mt-4 font-display text-xl font-bold leading-tight text-bordeaux sm:text-2xl">
          Deine Reise geht noch ein Stück weiter.
        </h3>

        <p className="mt-3 max-w-xl text-sm leading-relaxed text-graphite/85">
          Du hast die 10 Hauptkapitel abgeschlossen — das ist das Fundament.
          Jetzt folgen drei vertiefende Kapitel, die nicht jede Leserin braucht,
          aber für viele <strong>den Unterschied machen</strong>: wenn Behörden
          gegen dich instrumentalisiert werden, wenn du verstehen willst,{" "}
          <em>warum</em> du an sie geraten bist, und wenn die Trauer trotz
          allem bleibt. Erst nach Bonus F kommt die finale Kintsugi-Seite.
        </p>

        <Link
          to="/modul/$slug"
          params={{ slug: "bonus-d" }}
          className="mt-5 inline-flex items-center gap-2 rounded-full bg-bordeaux px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
        >
          Weiter zu Bonus D
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    );
  }

  // Core-Variante: CTA "Bonus-Paket freischalten"
  return (
    <section
      className="relative overflow-hidden rounded-2xl border-2 border-bordeaux/30 bg-gradient-to-br from-cream via-white/85 to-mauve/15 p-6 shadow-soft sm:p-8"
      style={{ borderLeft: "5px solid var(--color-bordeaux)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full opacity-[0.10]"
        style={{
          background:
            "radial-gradient(circle, var(--color-bordeaux) 0%, transparent 70%)",
        }}
      />

      <div className="flex items-center gap-2">
        <div className="grid h-9 w-9 place-items-center rounded-full bg-bordeaux/12 text-bordeaux">
          <Lock className="h-4 w-4" />
        </div>
        <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-mauve">
          Du hast das Core-Buch abgeschlossen
        </p>
      </div>

      <h3 className="mt-4 font-display text-xl font-bold leading-tight text-bordeaux sm:text-2xl">
        Drei vertiefende Bonus-Kapitel warten auf dich.
      </h3>

      <p className="mt-3 max-w-xl text-sm leading-relaxed text-graphite/85">
        Wenn du Story und Diagnose schon angesehen hast, weißt du, was dich
        erwartet. Die <strong>Übungen, Vorlagen und Transformationsziele</strong>{" "}
        zu allen drei Kapiteln werden mit dem UNBOND-Complete-Code freigeschaltet.
      </p>

      <ul className="mt-4 space-y-2 text-sm text-graphite/85">
        <li className="flex items-start gap-2">
          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-sage" />
          <span>
            <strong>Bonus D</strong> · Wenn Behörden zur Waffe werden — Litigation
            Abuse, DARVO, Beweissicherung, Vorlagen, queere Rechtsressourcen.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-sage" />
          <span>
            <strong>Bonus E</strong> · Das Warum hinter dem Warum — Schema-Therapie
            (Young) und IFS-Parts (Schwartz) als Tiefenschicht.
          </span>
        </li>
        <li className="flex items-start gap-2">
          <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-sage" />
          <span>
            <strong>Bonus F</strong> · Ankommen in der Trauer — Disenfranchised
            Grief, 5 Verlustebenen, finale Kintsugi-Apotheose.
          </span>
        </li>
      </ul>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
        <Link
          to="/unlock"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-bordeaux px-5 py-2.5 text-sm font-semibold text-white transition hover:opacity-90"
        >
          <KeyRound className="h-4 w-4" />
          Code einlösen
        </Link>
        <Link
          to="/modul/$slug"
          params={{ slug: "bonus-d" }}
          className="text-sm font-semibold text-bordeaux underline-offset-4 hover:underline"
        >
          Vorschau ansehen →
        </Link>
      </div>

      <p className="mt-4 text-[11px] leading-relaxed text-graphite/60">
        Hinweis: Das Bonus-Paket wird gerade vorbereitet. Sobald der Verkauf
        startet, erhältst du den Code per E-Mail nach dem Kauf.
      </p>
    </section>
  );
}
