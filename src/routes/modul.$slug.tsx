import { createFileRoute, useParams, Link } from "@tanstack/react-router";
import { getModule } from "@/lib/modules";
import { ModuleTopBar } from "@/components/module-top-bar";
import { ModuleBottomBar } from "@/components/module-bottom-bar";
import { CrisisBanner } from "@/components/crisis-banner";
import { Kapitel0 } from "@/modules/kapitel-0";
import { Modul01 } from "@/modules/modul-01";
import { ModuleStub } from "@/modules/module-stub";

export const Route = createFileRoute("/modul/$slug")({
  component: ModulePage,
  head: ({ params }) => ({
    meta: [{ title: `${params.slug} · UNBOND` }],
  }),
  notFoundComponent: () => (
    <div className="grid min-h-screen place-items-center px-4">
      <div className="glass-card max-w-sm p-6 text-center">
        <h2 className="font-display text-xl font-bold text-bordeaux">Modul nicht gefunden</h2>
        <Link to="/dashboard" className="mt-4 inline-block text-sm text-bordeaux underline">
          Zum Dashboard
        </Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="grid min-h-screen place-items-center px-4">
      <div className="glass-card max-w-sm p-6 text-center">
        <h2 className="font-display text-lg font-bold text-bordeaux">Etwas ist schiefgelaufen</h2>
        <p className="mt-2 text-xs text-muted-foreground">{error.message}</p>
        <Link to="/dashboard" className="mt-4 inline-block text-sm text-bordeaux underline">
          Zum Dashboard
        </Link>
      </div>
    </div>
  ),
});

function ModulePage() {
  const { slug } = useParams({ from: "/modul/$slug" });
  const meta = getModule(slug);

  if (!meta) {
    return (
      <div className="grid min-h-screen place-items-center px-4">
        <p className="text-sm text-muted-foreground">Modul nicht gefunden.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-safe">
      <ModuleTopBar
        badge={meta.number === "0" ? "Kapitel 0 · Fundament" : `Schritt ${meta.number}`}
        title={meta.title}
      />

      <div className="mx-auto max-w-3xl px-4 py-6">
        <CrisisBanner />

        <div className="mt-6">
          {meta.slug === "kapitel-0" ? (
            <Kapitel0 />
          ) : meta.slug === "modul-01" ? (
            <Modul01 />
          ) : (
            <ModuleStub meta={meta} />
          )}
        </div>
      </div>

      <ModuleBottomBar slug={slug} />
    </div>
  );
}
