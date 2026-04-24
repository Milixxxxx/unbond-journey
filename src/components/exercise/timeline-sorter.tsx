import { GripVertical, RotateCcw, CheckCircle2 } from "lucide-react";
import { useMemo, useState } from "react";
import { useModuleProgress } from "@/hooks/use-module-progress";
import { ExerciseFrame, type ExerciseAccent } from "./exercise-frame";

type TimelineItem = { id: string; label: string; hint?: string };

function arrayMove<T>(arr: T[], from: number, to: number) {
  const next = [...arr];
  const [item] = next.splice(from, 1);
  next.splice(to, 0, item);
  return next;
}

export function TimelineSorter({
  slug,
  storageKey,
  title,
  subtitle,
  meta,
  accent = "mauve",
  items,
  correctOrder,
}: {
  slug: string;
  storageKey: string;
  title: string;
  subtitle?: string;
  meta?: string;
  accent?: ExerciseAccent;
  items: TimelineItem[];
  correctOrder: string[];
}) {
  const { exerciseState, setExercise, loaded } = useModuleProgress(slug);
  const initialOrder = useMemo(() => items.map((item) => item.id), [items]);
  const savedOrder = exerciseState[storageKey] as string[] | undefined;
  const [dragId, setDragId] = useState<string | null>(null);

  if (!loaded) return null;

  const currentOrder =
    savedOrder && savedOrder.length === items.length ? savedOrder : initialOrder;

  const orderedItems = currentOrder
    .map((id) => items.find((item) => item.id === id))
    .filter((item): item is TimelineItem => Boolean(item));

  const solved = currentOrder.join("|") === correctOrder.join("|");

  const moveItem = (fromId: string, toId: string) => {
    const fromIndex = currentOrder.indexOf(fromId);
    const toIndex = currentOrder.indexOf(toId);
    if (fromIndex < 0 || toIndex < 0 || fromIndex === toIndex) return;
    setExercise(storageKey, arrayMove(currentOrder, fromIndex, toIndex));
  };

  return (
    <ExerciseFrame title={title} subtitle={subtitle} meta={meta} accent={accent}>
      <div className="flex items-center justify-between gap-3 rounded-2xl bg-white/60 px-3 py-2 shadow-glass">
        <p className="text-xs text-graphite/70">
          Ziehe die Karten in die Reihenfolge, in der sich Manipulation typischerweise aufbaut.
        </p>
        <button
          type="button"
          onClick={() => setExercise(storageKey, initialOrder)}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-[color:var(--color-mauve)]/20 bg-white/85 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.14em] text-[color:var(--color-mauve)] transition hover:bg-white"
        >
          <RotateCcw className="h-3 w-3" />
          Reset
        </button>
      </div>

      <div className="space-y-2.5">
        {orderedItems.map((item, index) => (
          <div
            key={item.id}
            draggable
            onDragStart={() => setDragId(item.id)}
            onDragOver={(e) => e.preventDefault()}
            onDrop={() => {
              if (dragId) moveItem(dragId, item.id);
              setDragId(null);
            }}
            onDragEnd={() => setDragId(null)}
            className="flex items-start gap-3 rounded-2xl border border-[color:var(--color-mauve)]/15 bg-white/82 p-3 shadow-glass transition hover:border-[color:var(--color-mauve)]/35"
          >
            <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-[color:var(--color-mauve)]/12 text-[11px] font-semibold text-[color:var(--color-mauve)]">
              {index + 1}
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold text-bordeaux">{item.label}</p>
              {item.hint && <p className="mt-1 text-xs leading-relaxed text-graphite/68">{item.hint}</p>}
            </div>
            <GripVertical className="mt-1 h-4 w-4 shrink-0 text-graphite/35" />
          </div>
        ))}
      </div>

      <div className="rounded-2xl bg-white/60 px-3 py-2 shadow-glass">
        {solved ? (
          <p className="flex items-center gap-2 text-sm font-medium text-[color:var(--color-sage)]">
            <CheckCircle2 className="h-4 w-4" />
            Genau so wird aus Verunsicherung ein sich wiederholender Bindungs-Loop.
          </p>
        ) : (
          <p className="text-xs text-graphite/68">
            Tipp: Erst kommt die Idealisierung, dann kippt die Realität Schritt für Schritt gegen dich.
          </p>
        )}
      </div>
    </ExerciseFrame>
  );
}