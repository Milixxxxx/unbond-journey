import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { useAuth } from "@/lib/auth-context";
import { supabase } from "@/integrations/supabase/client";
import { ArrowLeft, Mail, Shield, Sparkles } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const SearchSchema = z.object({
  source: z.string().optional(),
  level: z.string().optional(),
});

export const Route = createFileRoute("/auth")({
  component: AuthPage,
  validateSearch: (s) => SearchSchema.parse(s),
  head: () => ({
    meta: [
      { title: "Anmelden · UNBOND" },
      { name: "description", content: "Magic-Link-Login. Passwortlos und sicher." },
    ],
  }),
});

function AuthPage() {
  const { signInWithEmail, session, user } = useAuth();
  const search = Route.useSearch();
  const [email, setEmail] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const navigate = useNavigate();

  // Source-Tracking aus Brevo-Mail-CTA: ?source=toxicometer&level=high
  // Beim ersten Login auf das Profil schreiben, damit das Dashboard personalisiert begrüßen kann.
  useEffect(() => {
    if (!user) return;
    const source = search.source;
    const level = search.level;
    if (!source && !level) return;
    void supabase
      .from("profiles")
      .update({
        ...(source ? { acquisition_source: source } : {}),
        ...(level ? { toxicometer_level: level } : {}),
      })
      .eq("id", user.id);
  }, [user, search.source, search.level]);

  if (session) {
    navigate({ to: "/dashboard" });
    return null;
  }

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSending(true);
    const { error } = await signInWithEmail(email);
    setSending(false);
    if (error) {
      toast.error("Fehler: " + error.message);
    } else {
      setSent(true);
      toast.success("Magic-Link versendet – schau in dein Postfach.");
    }
  };

  return (
    <main className="grid min-h-screen place-items-center px-4 py-10">
      <div className="w-full max-w-md">
        <Link
          to="/"
          className="mb-6 inline-flex items-center gap-1 text-sm text-bordeaux hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Zurück
        </Link>

        <div className="glass-card-strong p-7">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-mauve">
            <Sparkles className="h-3.5 w-3.5" />
            Passwortlos · Magic-Link
          </div>
          <h1 className="mt-2 font-display text-2xl font-extrabold text-bordeaux">
            {sent ? "Schau in dein Postfach" : "Willkommen zurück"}
          </h1>
          <p className="mt-2 text-sm text-graphite/75">
            {sent
              ? "Wir haben dir einen Login-Link an deine E-Mail geschickt. Klicke ihn an, um fortzufahren."
              : "Gib deine E-Mail ein – wir senden dir einen sicheren Login-Link. Kein Passwort nötig."}
          </p>

          {!sent && (
            <form onSubmit={submit} className="mt-5 space-y-3">
              <label className="block">
                <span className="sr-only">E-Mail</span>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-graphite/50" />
                  <input
                    type="email"
                    required
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="deine@email.de"
                    className="w-full rounded-lg border-2 border-sage/40 bg-white/80 py-3 pl-10 pr-3 text-sm outline-none focus:border-sage"
                  />
                </div>
              </label>
              <button
                type="submit"
                disabled={sending}
                className="w-full rounded-lg bg-bordeaux py-3 text-sm font-semibold text-white shadow-elegant transition hover:opacity-90 disabled:opacity-60"
              >
                {sending ? "Wird gesendet…" : "Login-Link senden"}
              </button>
            </form>
          )}

          <div className="mt-6 flex items-start gap-2 rounded-lg bg-sage/10 p-3 text-xs text-graphite/80">
            <Shield className="mt-0.5 h-4 w-4 flex-shrink-0 text-sage" />
            <p>
              <strong>🇪🇺 Daten in Frankfurt</strong> · DSGVO · Keine Tracker. Deine E-Mail wird ausschließlich
              für deinen Login verwendet.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
