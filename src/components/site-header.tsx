import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";

/**
 * Cinematic Site-Header — transparent-dunkel, mit subtilem Backdrop-Blur.
 * Fühlt sich an wie ein Atemzug über der Seite, nicht wie eine Wand.
 * Wird auf allen App-Seiten ausser den Vollscreen-Modul-Routen gezeigt.
 */
export function SiteHeader() {
  const { pathname } = useLocation();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onDashboard = pathname === "/dashboard";

  return (
    <header
      className={`sticky top-0 z-30 transition-all duration-300 ${
        scrolled || !onDashboard
          ? "border-b border-white/10 bg-graphite/85 backdrop-blur-md supports-[backdrop-filter]:bg-graphite/70"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3.5">
        <Link to="/dashboard" className="group flex items-baseline gap-2">
          <span className="font-display text-lg font-extrabold tracking-tight text-cream transition group-hover:text-sage-soft">
            UN<span className="text-sage">BOND</span>
          </span>
          <span className="hidden text-[9px] font-semibold uppercase tracking-[0.28em] text-cream/55 sm:inline">
            Breaking Chains
          </span>
        </Link>

        <nav className="flex items-center gap-1 text-xs font-medium">
          <HeaderLink to="/dashboard">Reise</HeaderLink>
          <HeaderLink to="/journal">Journal</HeaderLink>
          <HeaderLink to="/glossar">Glossar</HeaderLink>
          <HeaderLink to="/einstellungen">Einstellungen</HeaderLink>
        </nav>
      </div>
    </header>
  );
}

function HeaderLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="rounded-full px-3 py-1.5 text-cream/70 transition hover:bg-white/10 hover:text-cream"
      activeProps={{ className: "bg-white/15 text-cream" }}
    >
      {children}
    </Link>
  );
}
