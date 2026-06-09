import { Link } from "@tanstack/react-router";

/**
 * Statische Navigationsleiste in Salbeigrün.
 * Volldeckend, damit nichts mehr durchscrollt und überlappt.
 */
export function SiteHeader() {
  return (
    <header
      className="sticky top-0 z-40 w-full border-b border-sage/30"
      style={{ backgroundColor: "var(--sage)" }}
    >
      <div className="mx-auto flex max-w-[1400px] flex-wrap items-center justify-center gap-x-8 gap-y-2 px-6 py-3">
        <nav className="flex flex-wrap items-center justify-center gap-x-7 gap-y-2">
          <NavLink to="/dashboard">Dashboard</NavLink>
          <NavLink to="/inhalt">Inhalt</NavLink>
          <NavLink to="/vorwort">Vorwort</NavLink>
          <NavLink to="/einleitung">Einleitung &amp; Marys Story</NavLink>
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
      className="text-[11px] font-display font-semibold tracking-brand uppercase text-white/85 transition-colors hover:text-white"
      activeProps={{ style: { color: "#ffffff", textShadow: "0 1px 0 rgba(0,0,0,0.15)" } }}
    >
      {children}
    </Link>
  );
}
