import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth-context";

const STORAGE_KEY = "unbond-progress:modul-03";
const TARGET_DAYS = 90;

/**
 * Liest das Startdatum des 90-Tage-Detox-Kontrakts (Modul 03, Übung 4)
 * aus exerciseState["nc_kontrakt_start"] und berechnet vergangene Tage.
 *
 * Funktioniert sowohl für eingeloggte Nutzerinnen (Supabase) als auch
 * für anonyme (localStorage). Lauscht auf "unbond-progress-updated"
 * Custom-Events, damit der Counter sich live nach Vertrags-Unterschrift
 * aktualisiert – ohne Re-Render-Trigger im aufrufenden Component.
 */
export function useDetoxCounter() {
  const { user } = useAuth();
  const [startDate, setStartDate] = useState<string | null>(null);
  const [loaded, setLoaded] = useState(false);

  const fetchStart = async () => {
    // 1) Anonym: aus localStorage
    if (!user) {
      try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw) as { exerciseState?: Record<string, any> };
          const s = parsed.exerciseState?.nc_kontrakt_start;
          setStartDate(typeof s === "string" && s ? s : null);
        } else {
          setStartDate(null);
        }
      } catch {
        setStartDate(null);
      }
      setLoaded(true);
      return;
    }

    // 2) Eingeloggt: aus DB
    const { data } = await supabase
      .from("module_progress")
      .select("exercise_state")
      .eq("user_id", user.id)
      .eq("module_slug", "modul-03")
      .maybeSingle();
    const ex = (data?.exercise_state as Record<string, any> | undefined) ?? {};
    const s = ex.nc_kontrakt_start;
    setStartDate(typeof s === "string" && s ? s : null);
    setLoaded(true);
  };

  useEffect(() => {
    fetchStart();
    const handler = () => fetchStart();
    window.addEventListener("unbond-progress-updated", handler);
    return () => window.removeEventListener("unbond-progress-updated", handler);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user]);

  if (!loaded || !startDate) {
    return { active: false as const, day: 0, target: TARGET_DAYS, loaded };
  }

  const start = new Date(startDate);
  const now = new Date();
  // Sanity: nur akzeptieren wenn das Datum heute oder früher ist
  if (Number.isNaN(start.getTime())) {
    return { active: false as const, day: 0, target: TARGET_DAYS, loaded };
  }
  const diffMs = now.getTime() - start.getTime();
  const day = Math.max(0, Math.floor(diffMs / 86_400_000)) + 1; // Tag 1 ist Tag des Vertrags
  const cappedDay = Math.min(day, TARGET_DAYS);

  return {
    active: true as const,
    day: cappedDay,
    target: TARGET_DAYS,
    loaded,
    startDate,
  };
}
