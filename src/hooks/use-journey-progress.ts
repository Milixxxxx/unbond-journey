import { useEffect, useState, useCallback } from "react";
import { JOURNEY_CHAPTERS } from "@/lib/journey-goals";

/**
 * Persistente Speicherung der drei Transformationsziele pro Kapitel
 * für den Winding-Path-Journey auf dem Dashboard.
 *
 * Speicherort (v1): localStorage unter `unbond-journey:v1`.
 * Shape: { [chapterSlug]: [boolean, boolean, boolean] }
 *
 * Synchronisation über `storage`-Events und ein internes
 * `unbond-journey-updated` CustomEvent, damit mehrere Mountpoints
 * (z.B. Path + Detail-Panel) reaktiv bleiben.
 */

const STORAGE_KEY = "unbond-journey:v1";
const EVENT = "unbond-journey-updated";

export type GoalsByChapter = Record<string, [boolean, boolean, boolean]>;

function emptyState(): GoalsByChapter {
  const out: GoalsByChapter = {};
  for (const c of JOURNEY_CHAPTERS) out[c.slug] = [false, false, false];
  return out;
}

function readFromStorage(): GoalsByChapter {
  if (typeof window === "undefined") return emptyState();
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyState();
    const parsed = JSON.parse(raw) as Record<string, boolean[]>;
    const base = emptyState();
    for (const slug of Object.keys(parsed)) {
      const arr = parsed[slug];
      if (Array.isArray(arr) && arr.length === 3) {
        base[slug] = [!!arr[0], !!arr[1], !!arr[2]];
      }
    }
    return base;
  } catch {
    return emptyState();
  }
}

export function useJourneyProgress() {
  const [goals, setGoals] = useState<GoalsByChapter>(() => emptyState());
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setGoals(readFromStorage());
    setLoaded(true);
    const refresh = () => setGoals(readFromStorage());
    window.addEventListener(EVENT, refresh);
    window.addEventListener("storage", refresh);
    return () => {
      window.removeEventListener(EVENT, refresh);
      window.removeEventListener("storage", refresh);
    };
  }, []);

  const toggleGoal = useCallback((chapterSlug: string, goalIndex: 0 | 1 | 2) => {
    setGoals((prev) => {
      const current = prev[chapterSlug] ?? [false, false, false];
      const next: [boolean, boolean, boolean] = [...current] as [
        boolean,
        boolean,
        boolean,
      ];
      next[goalIndex] = !next[goalIndex];
      const merged = { ...prev, [chapterSlug]: next };
      try {
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(merged));
        window.dispatchEvent(new CustomEvent(EVENT));
      } catch {
        // ignore
      }
      return merged;
    });
  }, []);

  return { goals, toggleGoal, loaded };
}
