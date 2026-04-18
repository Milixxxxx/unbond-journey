import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useAuth } from "@/lib/auth-context";
import { supabase } from "@/integrations/supabase/client";
import { ChevronLeft, BookHeart, FileText } from "lucide-react";
import { getModule } from "@/lib/modules";

export const Route = createFileRoute("/journal")({
  component: JournalPage,
  head: () => ({
    meta: [{ title: "Mein Journal · UNBOND" }],
  }),
});

type Entry = {
  id: string;
  created_at: string;
  entry_type: string;
  module_slug: string;
  payload: Record<string, unknown>;
};

type ProgressRow = {
  module_slug: string;
  exercise_state: Record<string, unknown>;
  updated_at: string;
};

function JournalPage() {
  const { user, loading } = useAuth();
  const [entries, setEntries] = useState<Entry[]>([]);
  const [progress, setProgress] = useState<ProgressRow[]>([]);
  const [loadedData, setLoadedData] = useState(false);

  useEffect(() => {
    if (!user) return;
    (async () => {
      const [{ data: j }, { data: p }] = await Promise.all([
        supabase
          .from("journal_entries")
          .select("id,created_at,entry_type,module_slug,payload")
          .eq("user_id", user.id)
          .order("created_at", { ascending: false }),
        supabase
          .from("module_progress")
          .select("module_slug,exercise_state,updated_at")
          .eq("user_id", user.id)
          .order("updated_at", { ascending: false }),
      ]);
      setEntries((j as Entry[]) ?? []);
      setProgress((p as ProgressRow[]) ?? []);
      setLoadedData(true);
    })();
  }, [user]);

  if (loading) {
    return (
      <div className="grid min-h-screen place-items-center text-sm text-muted-foreground">Lädt…</div>
    );
  }
  if (!user) {
    return (
      <div className="grid min-h-screen place-items-center px-4">
        <div className="glass-card max-w-sm p-6 text-center">
          <h2 className="font-display text-xl font-bold text-bordeaux">Bitte melde dich an</h2>
          <Link
            to="/auth"
            className="mt-4 inline-block rounded-full bg-bordeaux px-6 py-2.5 text-sm font-semibold text-white"
          >
            Zum Login
          </Link>
        </div>
      </div>
    );
  }

  // Reflexionen aus exercise_state extrahieren (Text-Felder)
  const reflections: Array<{ slug: string; key: string; value: string; updated: string }> = [];
  for (const row of progress) {
    const state = row.exercise_state ?? {};
    for (const [key, val] of Object.entries(state)) {
      if (typeof val === "string" && val.trim().length > 8) {
        reflections.push({ slug: row.module_slug, key, value: val, updated: row.updated_at });
      }
    }
  }

  return (
    <main className="min-h-screen pb-24">
      <header className="border-b border-border/40 bg-cream/50 backdrop-blur">
        <div className="mx-auto flex max-w-3xl items-center gap-3 px-4 py-3">
          <Link
            to="/dashboard"
            aria-label="Zurück"
            className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full text-bordeaux hover:bg-bordeaux/10"
          >
            <ChevronLeft className="h-5 w-5" />
          </Link>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-wider text-mauve">Sammlung</p>
            <h1 className="font-display text-lg font-bold text-bordeaux md:text-xl">Mein Journal</h1>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-3xl space-y-6 px-4 py-6">
        {!loadedData && <p className="text-sm text-muted-foreground">Lade deine Einträge…</p>}

        {loadedData && reflections.length === 0 && entries.length === 0 && (
          <div className="glass-card-strong p-8 text-center animate-fade-in">
            <BookHeart className="mx-auto h-10 w-10 text-mauve/60" />
            <h2 className="mt-3 font-display text-lg font-bold text-bordeaux">
              Noch keine Einträge
            </h2>
            <p className="mt-1 text-sm text-graphite/70">
              Sobald du Reflexionsübungen ausfüllst, sammeln sich deine Worte hier.
            </p>
            <Link
              to="/dashboard"
              className="mt-4 inline-block rounded-full bg-bordeaux px-5 py-2 text-sm font-semibold text-white"
            >
              Zum Dashboard
            </Link>
          </div>
        )}

        {reflections.length > 0 && (
          <section className="space-y-3 animate-fade-in">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-mauve">
              Reflexionen ({reflections.length})
            </h2>
            <ul className="space-y-3">
              {reflections.map((r, i) => {
                const m = getModule(r.slug);
                return (
                  <li key={i} className="glass-card p-4">
                    <div className="flex items-center justify-between gap-2 text-[11px]">
                      <span className="rounded-full bg-mauve/15 px-2 py-0.5 font-semibold uppercase tracking-wider text-mauve">
                        {m?.title ?? r.slug}
                      </span>
                      <time className="text-graphite/50">
                        {new Date(r.updated).toLocaleDateString("de-DE")}
                      </time>
                    </div>
                    <p className="mt-2 text-xs font-semibold text-bordeaux">
                      {prettyKey(r.key)}
                    </p>
                    <p className="mt-1 whitespace-pre-wrap text-sm leading-relaxed text-graphite/85">
                      {r.value}
                    </p>
                  </li>
                );
              })}
            </ul>
          </section>
        )}

        {entries.length > 0 && (
          <section className="space-y-3 animate-fade-in">
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em] text-sage">
              Tagebuch · Nervensystem-Check ({entries.length})
            </h2>
            <ul className="space-y-2">
              {entries.map((e) => (
                <li key={e.id} className="flex items-center gap-3 rounded-xl bg-white/65 p-3">
                  <FileText className="h-4 w-4 text-sage" />
                  <div className="flex-1">
                    <p className="text-xs font-semibold text-bordeaux">{e.entry_type}</p>
                    <p className="text-[11px] text-graphite/55">
                      {new Date(e.created_at).toLocaleString("de-DE")}
                    </p>
                  </div>
                  <pre className="text-[11px] text-graphite/65">
                    {Object.entries(e.payload)
                      .map(([k, v]) => `${k}:${v}`)
                      .join(" · ")}
                  </pre>
                </li>
              ))}
            </ul>
          </section>
        )}
      </div>
    </main>
  );
}

function prettyKey(key: string) {
  return key
    .replace(/_/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase());
}
