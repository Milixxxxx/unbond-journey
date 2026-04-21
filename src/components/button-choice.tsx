import { useEffect, useMemo, useState } from "react";
import { Check } from "lucide-react";
import { useModuleProgress } from "@/lib/auth-context" /* placeholder removed */;
import { useModuleProgress as _useModuleProgress } from "@/hooks/use-module-progress";
import { cn } from "@/lib/utils";

export interface ChoiceOption<V extends string | number = string> {
  value: V;
  label: string;
  description?: string;
}

interface BaseProps<V extends string | number> {
  /** Modul-Slug für Persistence */
  moduleSlug: string;
  /** Eindeutiger Key innerhalb des Moduls (z.B. "trigger-intensity") */
  storageKey: string;
  options: ChoiceOption<V>[];
  label?: string;
  helper?: string;
  className?: string;
}

interface SingleProps<V extends string | number> extends BaseProps<V> {
  multi?: false;
  defaultValue?: V;
  onChange?: (value: V | null) => void;
}

interface MultiProps<V extends string | number> extends BaseProps<V> {
  multi: true;
  defaultValue?: V[];
  onChange?: (value: V[]) => void;
}

type ButtonChoiceProps<V extends string | number> =
  | SingleProps<V>
  | MultiProps<V>;

/**
 * ButtonChoice: Slider-Ersatz. Single- oder Multi-Select Button-Group.
 * Persistiert automatisch via useModuleProgress (Supabase + LocalStorage).
 */
export function ButtonChoice<V extends string | number = string>(
  props: ButtonChoiceProps<V>,
) {
  const { moduleSlug, storageKey, options, label, helper, className } = props;
  const { exerciseState, setExercise, loaded } = useModuleProgress(moduleSlug);

  const stored = exerciseState[storageKey];
  const isMulti = props.multi === true;

  const current = useMemo(() => {
    if (isMulti) {
      if (Array.isArray(stored)) return stored as V[];
      return (props as MultiProps<V>).defaultValue ?? [];
    }
    if (stored !== undefined && stored !== null) return stored as V;
    return (props as SingleProps<V>).defaultValue ?? null;
  }, [stored, isMulti, props]);

  const isActive = (val: V) => {
    if (isMulti) return (current as V[]).includes(val);
    return current === val;
  };

  const handleClick = (val: V) => {
    if (isMulti) {
      const arr = current as V[];
      const next = arr.includes(val)
        ? arr.filter((v) => v !== val)
        : [...arr, val];
      setExercise(storageKey, next);
      (props as MultiProps<V>).onChange?.(next);
    } else {
      const next = current === val ? null : val;
      setExercise(storageKey, next);
      (props as SingleProps<V>).onChange?.(next);
    }
  };

  return (
    <div className={cn("space-y-2", className)}>
      {label && (
        <label className="block text-sm font-medium text-foreground">
          {label}
        </label>
      )}
      {helper && (
        <p className="text-xs text-muted-foreground">{helper}</p>
      )}
      <div
        role={isMulti ? "group" : "radiogroup"}
        className="flex flex-wrap gap-2"
        aria-disabled={!loaded}
      >
        {options.map((opt) => (
          <button
            key={String(opt.value)}
            type="button"
            role={isMulti ? "checkbox" : "radio"}
            aria-checked={isActive(opt.value)}
            data-active={isActive(opt.value)}
            onClick={() => handleClick(opt.value)}
            className="choice-btn text-sm"
            title={opt.description}
          >
            {opt.label}
          </button>
        ))}
      </div>
    </div>
  );
}
