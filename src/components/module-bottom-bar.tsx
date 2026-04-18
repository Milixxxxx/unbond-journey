import { Link, useNavigate } from "@tanstack/react-router";
import { ChevronLeft, ChevronRight, LayoutGrid, BookOpen } from "lucide-react";
import { getNeighbors, MODULES } from "@/lib/modules";

export function ModuleBottomBar({ slug }: { slug: string }) {
  const availableModules = MODULES.filter((module) => module.available);
  const availableIdx = availableModules.findIndex((module) => module.slug === slug);
  const { prev, next } = getNeighbors(slug);
  const navigate = useNavigate();

  const currentPrev = availableIdx >= 0 ? availableModules[availableIdx - 1] : prev;
  const currentNext = availableIdx >= 0 ? availableModules[availableIdx + 1] : next;
  const modulePosition = availableIdx >= 0 ? availableIdx + 1 : MODULES.findIndex((m) => m.slug === slug) + 1;
  const progress = availableModules.length
    ? (modulePosition / availableModules.length) * 100
    : 0;

  return (
    <nav
      className="fixed inset-x-0 bottom-0 z-30 border-t border-border/60"
      style={{
        background: "color-mix(in oklab, white 88%, transparent)",
        backdropFilter: "blur(18px) saturate(160%)",
        paddingBottom: "env(safe-area-inset-bottom, 0)",
      }}
    >
      <div className="mx-auto flex max-w-3xl items-center gap-2 px-3 py-2.5">
        <button
          onClick={() => currentPrev && navigate({ to: "/modul/$slug", params: { slug: currentPrev.slug } })}
          disabled={!currentPrev}
          aria-label="Vorheriges Modul"
          className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-full text-bordeaux transition hover:bg-bordeaux/10 disabled:opacity-30"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>

        <Link
          to="/dashboard"
          className="flex flex-1 flex-col items-center justify-center gap-1 px-2"
          aria-label="Zum Dashboard"
        >
          <div className="flex items-center gap-1.5 text-[11px] font-medium text-graphite">
            <LayoutGrid className="h-3 w-3" />
             <span>{modulePosition} von {availableModules.length || MODULES.length}</span>
          </div>
          <div className="h-1.5 w-full max-w-[180px] overflow-hidden rounded-full bg-sage/15">
            <div
              className="h-full rounded-full bg-gradient-to-r from-[var(--color-sage)] to-[var(--color-mauve)] transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
        </Link>

        <Link
          to="/glossar"
          aria-label="Glossar öffnen"
          className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-full text-bordeaux transition hover:bg-bordeaux/10"
        >
          <BookOpen className="h-5 w-5" />
        </Link>

        <button
          onClick={() => currentNext && navigate({ to: "/modul/$slug", params: { slug: currentNext.slug } })}
          disabled={!currentNext}
          aria-label="Nächstes Modul"
          className="grid h-11 w-11 flex-shrink-0 place-items-center rounded-full bg-bordeaux text-white transition hover:opacity-90 disabled:opacity-30"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </nav>
  );
}
