import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth-context";

/**
 * Bonus-Unlock-Logik
 * --------------------------------------------------
 * Bonus-Kapitel D / E / F sind hinter einem Code gesperrt.
 * Der Code `UNBOND-COMPLETE-2025` schaltet alle drei frei.
 * Spezifische Codes (z. B. `UNBOND-BONUS-D-2025`) schalten einzelne Kapitel frei.
 *
 * Persistenz:
 *   - Eingeloggt: in `module_progress.exercise_state.unlock = true` für jeden freigeschalteten Slug
 *   - Anonym: in `localStorage` unter `unbond-bonus-unlocks`
 *
 * Vorschau-Modus: Story + Diagnose sind sichtbar, nur Übungen + Transformationsziele sind hinter Lock.
 */

const STORAGE_KEY = "unbond-bonus-unlocks";

const UNLOCK_CODES: Record<string, string[]> = {
  "UNBOND-COMPLETE-2025": ["bonus-d", "bonus-e", "bonus-f"],
  "UNBOND-BONUS-D-2025": ["bonus-d"],
  "UNBOND-BONUS-E-2025": ["bonus-e"],
  "UNBOND-BONUS-F-2025": ["bonus-f"],
};

function readLocal(): string[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeLocal(slugs: string[]) {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(slugs));
    window.dispatchEvent(new CustomEvent("unbond-bonus-unlocked"));
  } catch {
    /* noop */
  }
}

export function useBonusUnlock(slug: string) {
  const { user } = useAuth();
  const [unlocked, setUnlocked] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;
    const load = async () => {
      // Lokal lesen — gilt für beide Modi (Cache + anonyme Nutzer)
      const local = readLocal();
      if (local.includes(slug)) {
        if (!cancelled) {
          setUnlocked(true);
          setLoaded(true);
        }
        return;
      }
      if (!user) {
        if (!cancelled) setLoaded(true);
        return;
      }
      // Eingeloggt: prüfe DB-Eintrag
      const { data } = await supabase
        .from("module_progress")
        .select("exercise_state")
        .eq("user_id", user.id)
        .eq("module_slug", slug)
        .maybeSingle();
      const state = (data?.exercise_state as Record<string, unknown> | null) ?? {};
      const isUnlocked = state.__unlock === true;
      if (!cancelled) {
        if (isUnlocked) {
          // In localStorage spiegeln, damit Reads schneller sind
          const next = Array.from(new Set([...readLocal(), slug]));
          writeLocal(next);
          setUnlocked(true);
        }
        setLoaded(true);
      }
    };
    load();

    const onStorage = () => {
      const local = readLocal();
      setUnlocked(local.includes(slug));
    };
    window.addEventListener("unbond-bonus-unlocked", onStorage);
    window.addEventListener("storage", onStorage);
    return () => {
      cancelled = true;
      window.removeEventListener("unbond-bonus-unlocked", onStorage);
      window.removeEventListener("storage", onStorage);
    };
  }, [user, slug]);

  const redeemCode = async (code: string): Promise<boolean> => {
    setError(null);
    const normalized = code.trim().toUpperCase();
    const slugs = UNLOCK_CODES[normalized];
    if (!slugs) {
      setError("Code nicht gültig.");
      return false;
    }
    if (!slugs.includes(slug)) {
      setError("Dieser Code schaltet ein anderes Kapitel frei.");
      return false;
    }
    // Lokal speichern (alle vom Code abgedeckten Slugs)
    const merged = Array.from(new Set([...readLocal(), ...slugs]));
    writeLocal(merged);
    setUnlocked(true);

    // Falls eingeloggt: in DB persistieren (für jedes freigeschaltete Kapitel)
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
        /* lokaler State bleibt — DB-Sync wird beim nächsten Login nachgeholt */
      }
    }
    return true;
  };

  return { unlocked, loaded, redeemCode, error };
}
