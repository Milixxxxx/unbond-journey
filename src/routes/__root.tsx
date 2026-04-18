import { Outlet, createRootRouteWithContext, HeadContent, Scripts, Link, useLocation } from "@tanstack/react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";
import appCss from "../styles.css?url";
import { AuthProvider } from "@/lib/auth-context";
import { SosFloatingButton } from "@/components/sos-floating-button";
import { SiteHeader } from "@/components/site-header";

interface RouterContext {
  queryClient: QueryClient;
}

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="glass-card max-w-md text-center p-10">
        <h1 className="text-7xl font-bold text-bordeaux">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Diese Seite gibt es nicht</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Vielleicht hat sich der Link verändert. Geh zurück zum Dashboard.
        </p>
        <div className="mt-6">
          <Link
            to="/dashboard"
            className="inline-flex items-center justify-center rounded-md bg-bordeaux px-5 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
          >
            Zum Dashboard
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<RouterContext>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1, viewport-fit=cover" },
      { name: "theme-color", content: "#6B3E44" },
      { title: "UNBOND – Breaking Chains" },
      {
        name: "description",
        content:
          "Interaktives 10-Modul-Programm für lesbische und queere Frauen, die sich aus toxischen Beziehungen lösen. DSGVO-konform, EU-Hosting.",
      },
      { name: "author", content: "UNBOND" },
      { property: "og:title", content: "UNBOND – Breaking Chains" },
      {
        property: "og:description",
        content: "Dein Safe Space, um dich aus toxischen Bindungen zu befreien.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,500;9..144,600;9..144,700;9..144,800&family=Inter:wght@400;500;600;700&family=Montserrat:wght@600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AppShell />
        <SosFloatingButton />
        <Toaster position="top-center" richColors />
      </AuthProvider>
    </QueryClientProvider>
  );
}

function AppShell() {
  const { pathname } = useLocation();
  // Modul-Routen haben ihre eigene Top-Bar; dort blenden wir den globalen Header aus.
  const hideHeader = pathname.startsWith("/modul/");
  return (
    <>
      {!hideHeader && <SiteHeader />}
      <Outlet />
    </>
  );
}
