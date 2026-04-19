import { Link } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";
import { DetoxBadge } from "@/components/detox-badge";

export function ModuleTopBar({
  badge,
  title,
}: {
  badge: string;
  title: string;
}) {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-bordeaux/95 text-cream backdrop-blur supports-[backdrop-filter]:bg-bordeaux/85">
      <div className="mx-auto flex max-w-3xl items-center gap-3 px-4 py-3">
        <Link
          to="/dashboard"
          aria-label="Zurück zum Dashboard"
          className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full text-cream/85 hover:bg-white/10"
        >
          <ChevronLeft className="h-5 w-5" />
        </Link>
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-cream/65">{badge}</p>
          <h1 className="truncate font-display text-base font-bold text-cream md:text-lg">
            {title}
          </h1>
        </div>
        <DetoxBadge />
      </div>
    </header>
  );
}
