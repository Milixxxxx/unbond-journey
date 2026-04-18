import { Link } from "@tanstack/react-router";
import { useAuth } from "@/lib/auth-context";

/**
 * Globaler dunkler Site-Header — visueller Anker zur Landingpage unbond.de.
 * Wird auf allen App-Seiten ausser den Vollscreen-Modul-Routen gezeigt.
 */
export function SiteHeader() {
  const { user } = useAuth();
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-bordeaux/95 text-cream backdrop-blur supports-[backdrop-filter]:bg-bordeaux/85">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3">
        <Link to={user ? "/dashboard" : "/"} className="flex items-baseline gap-2">
          <span className="font-display text-base font-extrabold tracking-tight">UNBOND</span>
          <span className="hidden text-[10px] font-semibold uppercase tracking-[0.22em] text-cream/70 sm:inline">
            Breaking Chains
          </span>
        </Link>

        <nav className="flex items-center gap-1 text-xs font-medium">
          {user ? (
            <>
              <HeaderLink to="/dashboard">Dashboard</HeaderLink>
              <HeaderLink to="/journal">Journal</HeaderLink>
              <HeaderLink to="/glossar">Glossar</HeaderLink>
            </>
          ) : (
            <>
              <HeaderLink to="/willkommen">Über</HeaderLink>
              <HeaderLink to="/glossar">Glossar</HeaderLink>
              <Link
                to="/auth"
                className="ml-1 rounded-full bg-cream px-3 py-1.5 text-[11px] font-semibold text-bordeaux transition hover:bg-white"
              >
                Anmelden
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}

function HeaderLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="rounded-full px-3 py-1.5 text-cream/80 transition hover:bg-white/10 hover:text-cream"
      activeProps={{ className: "bg-white/15 text-cream" }}
    >
      {children}
    </Link>
  );
}
