import { useMemo, useState, ReactNode, Children, isValidElement } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface TextCollapseProps {
  /** Plain text variant – wird automatisch in Sätze gesplittet. */
  text?: string;
  /** Children-Variante: erste N Kinder bleiben sichtbar, Rest wird geklappt. */
  children?: ReactNode;
  /** Anzahl der sichtbaren Sätze/Elemente vor dem Toggle (Default 2). */
  preview?: number;
  /** Schwellenwert: ab wieviel Sätzen darf geklappt werden (Default 5). */
  threshold?: number;
  /** Schwellenwert für Children-Modus (Default 2). */
  childThreshold?: number;
  className?: string;
  moreLabel?: string;
  lessLabel?: string;
}

function splitSentences(input: string): string[] {
  const parts = input
    .replace(/\s+/g, " ")
    .trim()
    .split(/(?<=[.!?…])\s+(?=[A-ZÄÖÜ„"„'])/);
  return parts.filter(Boolean);
}

/**
 * TextCollapse: ab Schwellenwert wird Inhalt automatisch geklappt.
 * Erste `preview` Sätze (oder Kinder) bleiben sichtbar, Rest hinter Toggle.
 */
export function TextCollapse({
  text,
  children,
  preview = 2,
  threshold = 5,
  childThreshold = 2,
  className,
  moreLabel = "Weiterlesen",
  lessLabel = "Einklappen",
}: TextCollapseProps) {
  const [open, setOpen] = useState(false);

  // Text-Modus
  const sentences = useMemo(() => (text ? splitSentences(text) : []), [text]);

  if (text) {
    if (sentences.length <= threshold) {
      return <p className={cn("leading-relaxed", className)}>{text}</p>;
    }
    const head = sentences.slice(0, preview).join(" ");
    const tail = sentences.slice(preview).join(" ");
    return (
      <div className={cn("space-y-2", className)}>
        <p className="leading-relaxed">
          {head}
          {!open && <span className="text-muted-foreground"> …</span>}
        </p>
        {open && <p className="leading-relaxed animate-fade-in">{tail}</p>}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center gap-1 text-sm font-medium text-[color:var(--color-terracotta)] hover:underline"
          aria-expanded={open}
        >
          {open ? lessLabel : moreLabel}
          <ChevronDown
            className={cn("h-4 w-4 transition-transform", open && "rotate-180")}
          />
        </button>
      </div>
    );
  }

  // Children-Modus
  const arr = Children.toArray(children).filter(
    (c) => isValidElement(c) || (typeof c === "string" && c.trim().length > 0),
  );
  if (arr.length <= childThreshold) {
    return <div className={cn("space-y-3", className)}>{arr}</div>;
  }
  const head = arr.slice(0, preview);
  const tail = arr.slice(preview);
  return (
    <div className={cn("space-y-3", className)}>
      {head}
      {open && <div className="space-y-3 animate-fade-in">{tail}</div>}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="inline-flex items-center gap-1 text-sm font-medium text-[color:var(--color-terracotta)] hover:underline"
        aria-expanded={open}
      >
        {open ? lessLabel : moreLabel}
        <ChevronDown
          className={cn("h-4 w-4 transition-transform", open && "rotate-180")}
        />
      </button>
    </div>
  );
}
