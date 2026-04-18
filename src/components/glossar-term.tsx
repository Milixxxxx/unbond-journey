import { useState, ReactNode } from "react";
import { X } from "lucide-react";
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
    <span
      className="relative inline"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="cursor-help border-b-2 border-dotted border-mauve font-medium text-bordeaux"
      >
        {children}
      </button>
      {open && (
        <>
          <button
            type="button"
            aria-label="Glossar-Hinweis schließen"
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-40 md:hidden"
          />
          <span
            role="tooltip"
            className="fixed inset-x-4 bottom-4 z-50 rounded-2xl bg-graphite px-4 py-3 text-sm font-normal leading-snug text-cream shadow-elegant md:absolute md:inset-auto md:left-1/2 md:top-full md:mt-2 md:w-64 md:-translate-x-1/2 md:rounded-lg md:px-3 md:py-2 md:text-xs"
          >
            <span className="mb-1 flex items-start justify-between gap-2">
              <strong className="block text-mauve">{entry.term}</strong>
              <button
                type="button"
                aria-label="Glossar-Hinweis schließen"
                onClick={() => setOpen(false)}
                className="grid h-6 w-6 place-items-center rounded-full text-cream/60 transition hover:bg-white/10 hover:text-cream md:hidden"
              >
                <X className="h-3.5 w-3.5" />
              </button>
            </span>
            {entry.short}
          </span>
        </>
      )}
    </span>
  );
}
