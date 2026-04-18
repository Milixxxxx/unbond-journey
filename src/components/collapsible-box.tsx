import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function CollapsibleBox({
  title,
  icon,
  children,
  defaultOpen = false,
}: {
  title: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="science-box">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between gap-3 text-left"
      >
        <h4 className="flex items-center gap-2 font-display text-base font-bold text-bordeaux">
          {icon}
          {title}
        </h4>
        <ChevronDown
          className={`h-4 w-4 text-bordeaux transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <div className="mt-3 space-y-3 text-sm leading-relaxed">{children}</div>}
    </div>
  );
}
