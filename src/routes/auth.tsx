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
          to="/dashboard"
          className="mb-6 inline-flex items-center gap-1 text-sm text-bordeaux hover:underline"
        >
          <ArrowLeft className="h-4 w-4" />
          Direkt zu den Inhalten
        </Link>

        <div className="glass-card-strong p-7">
          <div className="flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-mauve">
            <Sparkles className="h-3.5 w-3.5" />
            Login pausiert
          </div>
          <h1 className="mt-3 font-display text-3xl font-semibold leading-tight text-bordeaux">
            Die Inhalte sind jetzt offen
          </h1>
          <p className="mt-3 text-sm leading-relaxed text-graphite/75">
            Ich habe den Login vorübergehend aus dem Weg genommen, damit du ohne Schleife direkt weiterlesen kannst.
          </p>

          <Link
            to="/dashboard"
            className="mt-5 inline-flex w-full items-center justify-center bg-bordeaux py-3 text-sm font-semibold uppercase tracking-wider text-white shadow-elegant transition hover:opacity-90"
          >
            Jetzt Inhalte öffnen
          </Link>

          <div className="mt-6 flex items-start gap-2 rounded-lg bg-sage/10 p-3 text-xs text-graphite/80">
            <Shield className="mt-0.5 h-4 w-4 flex-shrink-0 text-sage" />
            <p>
              Der Login kommt später sauber zurück. Für jetzt ist der Fokus nur: sofortiger Zugang ohne Hürde.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
