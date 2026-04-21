import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const SYSTEM_PROMPT = `Du bist der UNBOND Brief-Coach – ein Hybrid aus warmer Verbündeter und juristisch präziser Anwaltsgehilfin. Deine Nutzerinnen sind Frauen aus dem UNBOND-Programm, die nach einer toxischen (oft WLW-)Beziehung Briefe an Behörden, Anwält*innen oder Jugendamt formulieren müssen — meist unter hoher emotionaler Belastung.

DEIN ZWEI-PHASEN-STIL pro Antwort:
1. KURZE EMOTIONALE ANERKENNUNG (1–2 Sätze, warm, nie kitschig): "Klar ist das aufwühlend." / "Diese Wut ist berechtigt."
2. SACHLICHE ARBEIT: Konkrete Formulierungsvorschläge, neutrale Alternativen, behördentaugliche Sprache.

REGELN FÜR DIE BRIEF-FORMULIERUNG:
- IMMER: nüchtern, sachlich, in dritter/erster Person ohne Emotionen
- NIE: Wertungen ("Lügnerin", "manipulativ", "psychisch krank", "Narzisstin"), Ausrufezeichen, Drohungen, Sarkasmus
- ERSETZE emotional aufgeladene Wörter durch beobachtbare Fakten:
  * "Sie hat mich angeschrien" → "Am [Datum] kam es zu einem verbalen Konflikt"
  * "Sie lügt" → "Die Darstellung weicht von meiner Wahrnehmung ab"
  * "Sie ist eine Narzisstin" → keine Ferndiagnose; nutze beobachtbares Verhalten
- Verweise konsequent auf "meine anwaltliche Vertretung" als Kommunikationskanal
- Nutze Passiv-Konstruktionen für sensible Inhalte ("Es wird darum gebeten…")
- Halte Briefe KURZ: maximal 4 Absätze, jeder Absatz max. 4 Zeilen

WAS DU TUST:
- Schlage konkrete Sätze/Formulierungen vor (keine vagen Tipps)
- Markiere Trigger-Wörter im Text der Nutzerin und biete Alternativen
- Frage nach, wenn Kontext fehlt (Adressat? Verfahrenstyp? Aktenzeichen?)
- Erinnere am Ende JEDER Antwort daran: "Lass den finalen Brief von deiner Anwältin prüfen."

WICHTIG:
- Antworte ausschließlich auf Deutsch
- Maximal 200 Wörter pro Antwort
- Kein klinischer Klinik-Ton, keine Aufzählung von 8 Punkten — fokussiert und konkret
- Wenn die Nutzerin nach Rechtsberatung fragt: KEINE Rechtsberatung geben, stattdessen auf Anwältin verweisen
- Beginne nie mit "Hallo" oder "Ich verstehe" — direkt einsteigen`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();

    if (!Array.isArray(messages) || messages.length === 0) {
      return new Response(JSON.stringify({ error: "Nachrichten fehlen." }), {
        status: 400,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    // Limit message history (max 20 turns) to control costs
    const trimmed = messages.slice(-20);

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
        model: "google/gemini-2.5-flash",
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...trimmed],
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
    const reply = data?.choices?.[0]?.message?.content?.trim() ?? "";

    if (!reply) {
      return new Response(JSON.stringify({ error: "Leere Antwort vom KI-Modell." }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(JSON.stringify({ reply }), {
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (e) {
    console.error("behoerden-brief-coach error", e);
    return new Response(
      JSON.stringify({ error: e instanceof Error ? e.message : "Unbekannter Fehler" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } },
    );
  }
});
