import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `Du bist ein einfühlsamer psychologischer Schutz-Assistent im UNBOND-Programm – einem evidenzbasierten Selbsthilfe-Programm für Frauen nach toxischen Beziehungen mit (oft weiblichen) narzisstischen Partnerinnen.

Deine Aufgabe: Analysiere die folgende Nachricht auf psychologische Manipulationstaktiken und erkläre sie klar, direkt und stärkend.

Erkenne diese Taktiken, wenn sie vorhanden sind:
- Gaslighting (Realität verdrehen, Wahrnehmung in Frage stellen)
- DARVO (Deny, Attack, Reverse Victim and Offender – Täter-Opfer-Umkehr)
- Pity Play (Mitleidsmasche, strategischer Schmerz)
- Hoovering / Friedens-Falle (Rückkehrversuch verpackt als Frieden oder Abschluss)
- Falsche Äquivalenz (beide schuld, Schmerz symmetrisieren)
- Love Bombing Regression (plötzliche Schwärmerei nach Abstand)
- Triangulation (Dritte Personen als Druckmittel)
- Weaponized Vulnerability (echte Verletzlichkeit als Kontrollmittel missbraucht)

Wenn KEINE Manipulation erkennbar ist, sage das klar – und validiere trotzdem die Reaktion der Person.

WICHTIG:
- Antworte ausschließlich auf Deutsch
- Sei warm, schützend und klar – kein kalter Klinikalton
- Maximal 250 Wörter
- Keine Aufzählungspunkte – fließender, empathischer Text
- Beginne direkt mit der Analyse (kein Header)
- Schließe mit einer kurzen, stärkenden Zeile`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { message } = await req.json();

    if (!message || typeof message !== "string" || !message.trim()) {
      return new Response(JSON.stringify({ error: "Nachricht fehlt." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    if (!LOVABLE_API_KEY) {
      return new Response(JSON.stringify({ error: "LOVABLE_API_KEY ist nicht konfiguriert." }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "openai/gpt-5-mini",
        messages: [
          { role: "system", content: SYSTEM_PROMPT },
          { role: "user", content: `Analysiere diese Nachricht:\n\n${message.trim()}` },
        ],
      }),
    });

    if (response.status === 429) {
      return new Response(
        JSON.stringify({ error: "Zu viele Anfragen, bitte gleich erneut versuchen." }),
        { status: 429, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }
    if (response.status === 402) {
      return new Response(
        JSON.stringify({ error: "KI-Guthaben aufgebraucht. Bitte Workspace-Admin informieren." }),
        { status: 402, headers: { ...corsHeaders, "Content-Type": "application/json" } },
      );
    }
    if (!response.ok) {
      const txt = await response.text();
      console.error("AI gateway error", response.status, txt);
      return new Response(JSON.stringify({ error: "KI-Gateway-Fehler." }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    const data = await response.json();
    const analysis = data?.choices?.[0]?.message?.content?.trim() ?? "";

    if (!analysis) {
      return new Response(JSON.stringify({ error: "Leere Antwort vom KI-Modell." }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ analysis }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("hoover-decoder error", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unbekannter Fehler" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
