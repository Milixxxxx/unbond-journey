import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useAuth } from "@/lib/auth-context";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "sonner";
import {
  ChevronLeft,
  Download,
  LogOut,
  Trash2,
  User as UserIcon,
  ShieldCheck,
  AlertTriangle,
} from "lucide-react";

export const Route = createFileRoute("/einstellungen")({
  component: SettingsPage,
  head: () => ({
    meta: [{ title: "Einstellungen · UNBOND" }],
  }),
});

function SettingsPage() {
  const { user, loading, signOut } = useAuth();
  const [displayName, setDisplayName] = useState("");
  const [saving, setSaving] = useState(false);
  const [exporting, setExporting] = useState(false);
  const [deleting, setDeleting] = useState(false);
  const [confirmDel, setConfirmDel] = useState(false);

  useEffect(() => {
    if (!user) return;
    (async () => {
      const { data } = await supabase
        .from("profiles")
        .select("display_name")
        .eq("id", user.id)
        .maybeSingle();
      setDisplayName(data?.display_name ?? "");
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

  const saveName = async () => {
    setSaving(true);
    const { error } = await supabase
      .from("profiles")
      .update({ display_name: displayName.trim() || null })
      .eq("id", user.id);
    setSaving(false);
    if (error) toast.error("Konnte nicht speichern: " + error.message);
    else toast.success("Anzeigename gespeichert");
  };

  const exportData = async () => {
    setExporting(true);
    try {
      const [{ data: profile }, { data: progress }, { data: journal }] = await Promise.all([
        supabase.from("profiles").select("*").eq("id", user.id).maybeSingle(),
        supabase.from("module_progress").select("*").eq("user_id", user.id),
        supabase.from("journal_entries").select("*").eq("user_id", user.id),
      ]);
      const payload = {
        exported_at: new Date().toISOString(),
        user: { id: user.id, email: user.email },
        profile,
        module_progress: progress,
        journal_entries: journal,
      };
      const blob = new Blob([JSON.stringify(payload, null, 2)], { type: "application/json" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = `unbond-export-${new Date().toISOString().slice(0, 10)}.json`;
      a.click();
      URL.revokeObjectURL(url);
      toast.success("Datenexport heruntergeladen");
    } catch (e) {
      toast.error("Export fehlgeschlagen");
    } finally {
      setExporting(false);
    }
  };

  const deleteAllData = async () => {
    setDeleting(true);
    try {
      // Delete progress + journal; profile cascade not set up so leave intact.
      await Promise.all([
        supabase.from("module_progress").delete().eq("user_id", user.id),
        supabase.from("journal_entries").delete().eq("user_id", user.id),
      ]);
      await supabase
        .from("profiles")
        .update({
          toxicometer_score: null,
          toxicometer_completed_at: null,
          relationship_status: null,
        })
        .eq("id", user.id);
      toast.success("Alle Fortschrittsdaten gelöscht");
      setConfirmDel(false);
    } catch (e) {
      toast.error("Löschung fehlgeschlagen");
    } finally {
      setDeleting(false);
    }
  };

  return (
    <main className="min-h-screen pb-24">
      <header className="border-b border-border/40 bg-cream/50 backdrop-blur">
        <div className="mx-auto flex max-w-2xl items-center gap-3 px-4 py-3">
          <Link
            to="/dashboard"
            aria-label="Zurück"
            className="grid h-9 w-9 flex-shrink-0 place-items-center rounded-full text-bordeaux hover:bg-bordeaux/10"
          >
            <ChevronLeft className="h-5 w-5" />
          </Link>
          <div>
            <p className="text-[11px] font-medium uppercase tracking-wider text-mauve">Konto</p>
            <h1 className="font-display text-lg font-bold text-bordeaux md:text-xl">Einstellungen</h1>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-2xl space-y-6 px-4 py-6">
        {/* Profil */}
        <section className="glass-card-strong p-5 animate-fade-in">
          <div className="mb-3 flex items-center gap-2 text-mauve">
            <UserIcon className="h-4 w-4" />
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em]">Profil</h2>
          </div>
          <p className="text-xs text-graphite/65">{user.email}</p>
          <label className="mt-4 block">
            <span className="mb-1.5 block text-sm font-semibold text-bordeaux">Anzeigename</span>
            <input
              type="text"
              value={displayName}
              onChange={(e) => setDisplayName(e.target.value)}
              placeholder="Wie sollen wir dich nennen?"
              className="w-full rounded-lg border-2 border-sage/40 bg-white/85 p-3 text-sm outline-none transition focus:border-sage"
            />
          </label>
          <button
            onClick={saveName}
            disabled={saving}
            className="mt-3 rounded-full bg-bordeaux px-5 py-2 text-sm font-semibold text-white disabled:opacity-50"
          >
            {saving ? "Speichert…" : "Speichern"}
          </button>
        </section>

        {/* Datenexport */}
        <section className="glass-card p-5 animate-fade-in">
          <div className="mb-3 flex items-center gap-2 text-sage">
            <ShieldCheck className="h-4 w-4" />
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em]">Deine Daten (DSGVO)</h2>
          </div>
          <p className="text-sm text-graphite/80">
            Lade jederzeit eine vollständige Kopie deines Profils, deines Fortschritts und deiner
            Tagebuch-Einträge als JSON herunter.
          </p>
          <button
            onClick={exportData}
            disabled={exporting}
            className="mt-3 inline-flex items-center gap-2 rounded-full border-2 border-sage bg-white px-5 py-2 text-sm font-semibold text-sage hover:bg-sage hover:text-white disabled:opacity-50"
          >
            <Download className="h-4 w-4" />
            {exporting ? "Bereite vor…" : "Daten als JSON exportieren"}
          </button>
        </section>

        {/* Logout */}
        <section className="glass-card p-5 animate-fade-in">
          <button
            onClick={() => signOut()}
            className="inline-flex items-center gap-2 text-sm font-semibold text-bordeaux hover:underline"
          >
            <LogOut className="h-4 w-4" />
            Abmelden
          </button>
        </section>

        {/* Gefahrenzone */}
        <section className="rounded-xl border border-destructive/30 bg-destructive/5 p-5 animate-fade-in">
          <div className="mb-2 flex items-center gap-2 text-destructive">
            <AlertTriangle className="h-4 w-4" />
            <h2 className="text-xs font-semibold uppercase tracking-[0.18em]">Gefahrenzone</h2>
          </div>
          <p className="text-sm text-graphite/85">
            Lösche deinen gesamten Fortschritt, alle Reflexionen und Tagebuch-Einträge. Diese Aktion
            kann nicht rückgängig gemacht werden.
          </p>
          {!confirmDel ? (
            <button
              onClick={() => setConfirmDel(true)}
              className="mt-3 inline-flex items-center gap-2 rounded-full border-2 border-destructive bg-white px-5 py-2 text-sm font-semibold text-destructive hover:bg-destructive hover:text-white"
            >
              <Trash2 className="h-4 w-4" />
              Alle Fortschrittsdaten löschen
            </button>
          ) : (
            <div className="mt-3 space-y-2">
              <p className="text-sm font-semibold text-destructive">
                Bist du sicher? Diese Aktion ist endgültig.
              </p>
              <div className="flex gap-2">
                <button
                  onClick={deleteAllData}
                  disabled={deleting}
                  className="rounded-full bg-destructive px-5 py-2 text-sm font-semibold text-white disabled:opacity-50"
                >
                  {deleting ? "Lösche…" : "Ja, endgültig löschen"}
                </button>
                <button
                  onClick={() => setConfirmDel(false)}
                  className="rounded-full border border-graphite/30 bg-white px-5 py-2 text-sm font-semibold text-graphite"
                >
                  Abbrechen
                </button>
              </div>
            </div>
          )}
        </section>

        <p className="text-center text-xs text-graphite/55">
          <Link to="/datenschutz" className="underline">
            Datenschutzerklärung
          </Link>
        </p>
      </div>
    </main>
  );
}
