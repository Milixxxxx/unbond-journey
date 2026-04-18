import { Trophy } from "lucide-react";
import { useModuleProgress } from "@/hooks/use-module-progress";

type Goal = { id: string; text: string };

export function ChecklistGoals({
  slug,
  goals,
}: {
  slug: string;
  goals: Goal[];
}) {
  const { checklistState, toggleChecklist, badgeEarned, checkedCount, loaded } = useModuleProgress(slug);

  if (!loaded) return null;

  return (
    <div className="loesung-box">
      <h3 className="font-display text-lg font-bold text-bordeaux">
        Transformationsziele
      </h3>
      <p className="mt-1 text-xs text-graphite/70">
        Mindestens 3 von 5 sollten zutreffen, um den Badge zu erreichen.
      </p>

      <ul className="mt-4 space-y-2">
        {goals.map((g) => {
          const checked = !!checklistState[g.id];
          return (
            <li key={g.id}>
              <label className="flex cursor-pointer items-start gap-3 rounded-lg bg-white/65 p-3 transition hover:bg-white">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggleChecklist(g.id)}
                  className="mt-0.5 h-5 w-5 cursor-pointer accent-[var(--color-bordeaux)]"
                />
                <span
                  className={`text-sm ${checked ? "text-graphite/60 line-through" : "text-graphite"}`}
                >
                  {g.text}
                </span>
              </label>
            </li>
          );
        })}
      </ul>

      <div className="mt-4 flex items-center justify-between gap-3 rounded-lg bg-white/55 px-3 py-2">
        <span className="text-xs font-medium text-graphite/70">
          {checkedCount} von {goals.length} erreicht
        </span>
        {badgeEarned && (
          <span className="flex items-center gap-1.5 rounded-full bg-gradient-to-r from-[var(--color-mauve)] to-[var(--color-bordeaux)] px-3 py-1 text-xs font-semibold text-white animate-badge-pop">
            <Trophy className="h-3.5 w-3.5" />
            Badge erreicht!
          </span>
        )}
      </div>
    </div>
  );
}
