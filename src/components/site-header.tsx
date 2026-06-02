import { Link } from "@tanstack/react-router";

/**
 * Reduzierter Site-Header im ZIP-Design-Look:
 * Transparente Pille mit nur drei Top-Level-Links (Dashboard · Über · Profil),
 * mittig zentriert, ohne Logo-Wortmarke und ohne Aktions-Button.
 */
export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-center px-6 py-4">
        <nav className="flex items-center gap-8">
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/einleitung">Über</NavLink>
          <NavLink to="/einstellungen">Profil</NavLink>
        </nav>
      </div>
    </header>
  );
}

function NavLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <Link
      to={to}
      className="text-[11px] font-display font-semibold tracking-brand uppercase text-muted-foreground transition-colors hover:text-foreground"
      activeProps={{ style: { color: "var(--bordeaux)" } }}
    >
      {children}
    </Link>
  );
}
