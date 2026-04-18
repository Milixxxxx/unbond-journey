import { useState, ReactNode } from "react";
import { GLOSSAR } from "@/lib/glossar";

export function GlossarTerm({
  termKey,
  children,
}: {
  termKey: keyof typeof GLOSSAR;
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const entry = GLOSSAR[termKey];
  if (!entry) return <>{children}</>;

  return (
    <span className="relative inline">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        onMouseEnter={() => setOpen(true)}
        onMouseLeave={() => setOpen(false)}
        className="cursor-help border-b-2 border-dotted border-mauve font-medium text-bordeaux"
      >
        {children}
      </button>
      {open && (
        <span
          role="tooltip"
          className="absolute left-1/2 top-full z-30 mt-2 w-64 -translate-x-1/2 rounded-lg bg-graphite px-3 py-2 text-xs font-normal leading-snug text-cream shadow-elegant"
        >
          <strong className="block text-mauve">{entry.term}</strong>
          {entry.short}
        </span>
      )}
    </span>
  );
}
