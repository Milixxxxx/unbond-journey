import { useEffect, useRef, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/lib/auth-context";

// Reactive hook für Modul-Fortschritt: liest beim Mount, debounced beim Schreiben.
export function useModuleProgress(slug: string) {
  const { user } = useAuth();
  const [exerciseState, setExerciseState] = useState<Record<string, any>>({});
  const [checklistState, setChecklistState] = useState<Record<string, boolean>>({});
  const [badgeEarned, setBadgeEarned] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const saveTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (!user) {
      setLoaded(true);
      return;
    }
    (async () => {
      const { data } = await supabase
        .from("module_progress")
        .select("exercise_state,checklist_state,badge_earned")
        .eq("user_id", user.id)
        .eq("module_slug", slug)
        .maybeSingle();
      if (data) {
        setExerciseState((data.exercise_state as Record<string, any>) || {});
        setChecklistState((data.checklist_state as Record<string, boolean>) || {});
        setBadgeEarned(data.badge_earned ?? false);
      }
      setLoaded(true);
    })();
  }, [user, slug]);

  const persist = (
    nextExercise: Record<string, any>,
    nextChecklist: Record<string, boolean>,
    nextBadge: boolean,
  ) => {
    if (!user) return;
    if (saveTimer.current) clearTimeout(saveTimer.current);
    saveTimer.current = setTimeout(async () => {
      await supabase.from("module_progress").upsert(
        {
          user_id: user.id,
          module_slug: slug,
          exercise_state: nextExercise,
          checklist_state: nextChecklist,
          badge_earned: nextBadge,
          completed_at: nextBadge ? new Date().toISOString() : null,
        },
        { onConflict: "user_id,module_slug" },
      );
    }, 600);
  };

  const setExercise = (key: string, value: any) => {
    const next = { ...exerciseState, [key]: value };
    setExerciseState(next);
    persist(next, checklistState, badgeEarned);
  };

  const toggleChecklist = (key: string) => {
    const next = { ...checklistState, [key]: !checklistState[key] };
    setChecklistState(next);
    const count = Object.values(next).filter(Boolean).length;
    const newBadge = count >= 3;
    if (newBadge !== badgeEarned) setBadgeEarned(newBadge);
    persist(exerciseState, next, newBadge);
  };

  const checkedCount = Object.values(checklistState).filter(Boolean).length;

  return {
    exerciseState,
    checklistState,
    badgeEarned,
    checkedCount,
    setExercise,
    toggleChecklist,
    loaded,
  };
}
