import { createFileRoute, useParams, Link } from "@tanstack/react-router";
import { getModule } from "@/lib/modules";
import { ModuleTopBar } from "@/components/module-top-bar";
import { ModuleBottomBar } from "@/components/module-bottom-bar";
import { CrisisBanner } from "@/components/crisis-banner";
import { SosSoforthilfe } from "@/modules/sos-soforthilfe";
import { Modul01 } from "@/modules/modul-01";
import { Modul02 } from "@/modules/modul-02";
import { Modul03 } from "@/modules/modul-03";
import { Modul04 } from "@/modules/modul-04";
import { Modul05 } from "@/modules/modul-05";
import { Modul06 } from "@/modules/modul-06";
import { Modul07 } from "@/modules/modul-07";
import { Modul08 } from "@/modules/modul-08";
import { Modul09 } from "@/modules/modul-09";
import { Modul10 } from "@/modules/modul-10";
import { BonusD } from "@/modules/bonus-d";
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

  if (!meta.available) {
    return (
      <div className="min-h-screen pb-safe">
        <ModuleTopBar
          badge={`Schritt ${meta.number} · In Vorbereitung`}
          title={meta.title}
        />

        <div className="mx-auto max-w-3xl px-4 py-6">
          <CrisisBanner />

          <div className="mt-6 rounded-2xl border border-mauve/20 bg-white/80 p-6 shadow-soft">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-mauve">
              Kapitelweise Freigabe
            </p>
            <h2 className="mt-2 font-display text-xl font-bold text-bordeaux">
              Dieses Kapitel ist noch nicht umgesetzt.
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-graphite/75">
              Wir arbeiten ab jetzt wieder kapitelweise. Erst wenn ein Kapitel von dir freigegeben ist,
              wird das nächste ausgearbeitet.
            </p>
            <Link
              to="/dashboard"
              className="mt-5 inline-flex rounded-full bg-bordeaux px-4 py-2 text-sm font-semibold text-white transition hover:opacity-90"
            >
              Zurück zur Kapitelübersicht
            </Link>
          </div>
        </div>

        <ModuleBottomBar slug={slug} />
      </div>
    );
  }

  return (
    <div className="min-h-screen pb-safe">
      <ModuleTopBar
        badge={meta.number === "0" ? "SOS · Freebee" : `Schritt ${meta.number}`}
        title={meta.title}
      />

      <div className="mx-auto max-w-3xl px-4 py-6">
        <CrisisBanner />

        <div className="mt-6">
          {meta.slug === "sos-soforthilfe" ? (
            <SosSoforthilfe />
          ) : meta.slug === "modul-01" ? (
            <Modul01 />
          ) : meta.slug === "modul-02" ? (
            <Modul02 />
          ) : meta.slug === "modul-03" ? (
            <Modul03 />
          ) : meta.slug === "modul-04" ? (
            <Modul04 />
          ) : meta.slug === "modul-05" ? (
            <Modul05 />
          ) : meta.slug === "modul-06" ? (
            <Modul06 />
          ) : meta.slug === "modul-07" ? (
            <Modul07 />
          ) : meta.slug === "modul-08" ? (
            <Modul08 />
          ) : meta.slug === "modul-09" ? (
            <Modul09 />
          ) : meta.slug === "modul-10" ? (
            <Modul10 />
          ) : meta.slug === "bonus-d" ? (
            <BonusD />
          ) : (
            <ModuleStub meta={meta} />
          )}
        </div>
      </div>

      <ModuleBottomBar slug={slug} />
    </div>
  );
}
