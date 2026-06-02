import { Link } from "@tanstack/react-router";
import { ChevronLeft } from "lucide-react";
import { DetoxBadge } from "@/components/detox-badge";

/**
 * Modul-Topbar im ZIP-Design-Look:
 * Schwebende Glass-Pille statt voller Bordeaux-Bar.
 */
export function ModuleTopBar({
  badge,
  title,
}: {
  badge: string;
  title: string;
}) {
  return (
    <header className="sticky top-0 z-30 w-full">
      <div className="glass mx-3 mt-3 flex items-center gap-3 px-3 py-2.5 sm:mx-6 sm:px-5">
        <Link
          to="/dashboard"
          aria-label="Zurück zum Pfad"
          className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full text-muted-foreground transition hover:bg-white/60"
          style={{ color: "var(--bordeaux)" }}
        >
          <ChevronLeft className="h-5 w-5" />
        </Link>
        <div className="min-w-0 flex-1">
          <p
            className="text-[10px] font-display tracking-brand uppercase font-semibold"
            style={{ color: "var(--mauve)" }}
          >
            {badge}
          </p>
          <h1
            className="truncate font-display text-sm font-extrabold tracking-brand uppercase md:text-base"
            style={{ color: "var(--bordeaux)" }}
          >
            {title}
          </h1>
        </div>
        <DetoxBadge />
      </div>
    </header>
  );
}
