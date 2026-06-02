import { Link, useLocation } from "@tanstack/react-router";

/**
 * Site-Header im ZIP-Design-System-Look:
 * Schwebende Glass-Pille mit Margins, Montserrat-uppercase Logo,
 * Terracotta-Start-Pill als Primär-Action.
 */
export function SiteHeader() {
  const { pathname } = useLocation();
  const onDashboard = pathname === "/dashboard";

  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="glass mx-3 mt-3 flex items-center justify-between gap-3 px-4 py-3 sm:mx-6 sm:px-6">
        <Link to="/dashboard" className="flex items-baseline gap-2">
          <span
            className="font-display text-xl font-extrabold tracking-brand uppercase"
            style={{ color: "var(--bordeaux)" }}
          >
            UNBOND
          </span>
          <span className="hidden text-[10px] tracking-brand uppercase text-muted-foreground sm:inline">
            Breaking Chains
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          <NavLink to="/dashboard">Reise</NavLink>
          <NavLink to="/journal">Journal</NavLink>
          <NavLink to="/glossar">Glossar</NavLink>
          <NavLink to="/einstellungen">Einstellungen</NavLink>
        </nav>

        {!onDashboard && (
          <Link
            to="/dashboard"
            className="rounded-full px-4 py-2 text-xs font-display tracking-brand uppercase font-bold text-white transition-transform hover:scale-105"
            style={{ backgroundColor: "var(--terracotta)" }}
          >
            Dashboard
          </Link>
        )}
      </div>
    </header>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="rounded-full px-3 py-1.5 text-[11px] font-display tracking-brand uppercase font-semibold text-muted-foreground transition-colors hover:bg-white/60 hover:text-foreground"
      activeProps={{
        className:
          "rounded-full px-3 py-1.5 text-[11px] font-display tracking-brand uppercase font-semibold bg-white/70",
        style: { color: "var(--bordeaux)" },
      }}
    >
      {children}
    </Link>
  );
}
