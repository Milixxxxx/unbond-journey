import { Link } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";

export function ModuleTopBar({
  badge,
  title,
}: {
  badge: string;
  title: string;
}) {
  return (
    <header className="border-b border-border/40 bg-cream/50 backdrop-blur">
      <div className="mx-auto flex max-w-3xl items-center gap-3 px-4 py-3">
        <Link
          to="/dashboard"
          aria-label="Zurück zum Dashboard"
          className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full text-bordeaux hover:bg-bordeaux/10"
        >
          <ChevronLeft className="h-5 w-5" />
        </Link>
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-medium uppercase tracking-wider text-mauve">{badge}</p>
          <h1 className="truncate font-display text-base font-bold text-bordeaux md:text-lg">
            {title}
          </h1>
        </div>
      </div>
    </header>
  );
}
