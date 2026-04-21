import { useState } from "react";
import { Lock, KeyRound, ShieldCheck } from "lucide-react";
import { useBonusUnlock } from "@/hooks/use-bonus-unlock";

/**
 * BonusLock · Vorschau-Wrapper für Bonus-Kapitel.
 *
 * Story + Diagnose werden außerhalb dieses Wrappers gerendert (immer sichtbar).
 * Übungen + Transformationsziele werden als `children` übergeben und nur
 * gezeigt, wenn der Code eingelöst wurde.
 *
 * Im gesperrten Zustand sieht die Nutzerin einen sanften Teaser mit Code-Eingabe
 * und einem Hinweis auf das spätere Bonus-Paket.
 */
export function BonusLock({
  slug,
  bonusLabel,
  children,
}: {
  slug: string;
  bonusLabel: string; // z. B. "Bonus D"
  children: React.ReactNode;
}) {
  const { unlocked, loaded, redeemCode, error } = useBonusUnlock(slug);
  const [code, setCode] = useState("");
  const [busy, setBusy] = useState(false);

  if (!loaded) return null;
  if (unlocked) return <>{children}</>;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!code.trim()) return;
    setBusy(true);
    await redeemCode(code);
    setBusy(false);
  };

  return (
    <div
      className="relative overflow-hidden rounded-2xl border border-bordeaux/25 bg-gradient-to-br from-cream via-white/80 to-mauve/10 p-6 shadow-soft sm:p-8"
      style={{ borderLeft: "5px solid var(--color-bordeaux)" }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full opacity-[0.10]"
        style={{
          background:
            "radial-gradient(circle, var(--color-bordeaux) 0%, transparent 70%)",
        }}
      />

      <div className="flex items-center gap-3">
        <div className="grid h-11 w-11 place-items-center rounded-full bg-bordeaux/10 text-bordeaux">
          <Lock className="h-5 w-5" />
        </div>
        <div>
          <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-mauve">
            Vorschau-Modus
          </p>
          <h3 className="font-display text-lg font-bold text-bordeaux">
            Übungen & Transformationsziele sind Teil des {bonusLabel}-Pakets
          </h3>
        </div>
      </div>

      <p className="mt-4 max-w-xl text-sm leading-relaxed text-graphite/85">
        Du hast Story und Diagnose vollständig gelesen — das ist die Vorschau.
        Die interaktiven Übungen, die Transformationsziele und der Badge sind im
        UNBOND-Bonus-Paket enthalten. Wenn du bereits einen Freischalt-Code hast,
        kannst du ihn jetzt eingeben.
      </p>

      <form onSubmit={submit} className="mt-5 space-y-3">
        <label className="block">
          <span className="text-xs font-semibold uppercase tracking-wider text-bordeaux">
            Freischalt-Code
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
                className="w-full rounded-md border border-bordeaux/20 bg-white/85 py-2.5 pl-10 pr-3 font-mono text-sm uppercase tracking-wider text-graphite outline-none transition focus:border-bordeaux/60 focus:ring-2 focus:ring-bordeaux/15"
              />
            </div>
            <button
              type="submit"
              disabled={busy || !code.trim()}
              className="inline-flex items-center justify-center gap-1.5 rounded-md bg-bordeaux px-4 py-2.5 text-sm font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-40"
            >
              <ShieldCheck className="h-4 w-4" />
              Freischalten
            </button>
          </div>
        </label>
        {error && (
          <p className="text-xs font-semibold text-bordeaux">{error}</p>
        )}
      </form>

      <div className="mt-5 rounded-lg border border-mauve/20 bg-white/65 p-3 text-xs leading-relaxed text-graphite/75">
        <strong className="text-bordeaux">Hinweis:</strong>{" "}
        Das Bonus-Paket (D · E · F) wird gerade vorbereitet. Sobald der Verkauf
        startet, erhältst du den Code per E-Mail nach dem Kauf. In der Zwischenzeit
        ist die Vorschau bereits vollständig zugänglich.
      </div>
    </div>
  );
}
