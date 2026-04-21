import { useState } from "react";
import { Sparkles, Shield } from "lucide-react";
import { ExerciseFrame } from "./exercise-frame";

type Card = {
  vorwurf: string;
  emoji: string;
  taktik: string;
  gegen: string; // sachliche Gegenstrategie
  formulierung: string; // konkreter Beispielsatz
};

const CARDS: Card[] = [
  {
    vorwurf: "„Du bist psychisch instabil."",
    emoji: "🎭",
    taktik: "Pathologisierung",
    gegen:
      "Keine Diagnose ohne Befund. Verweise auf bestehende ärztliche/therapeutische Atteste, falls vorhanden — oder schweige zu dieser Behauptung und lass deine Anwältin antworten.",
    formulierung:
      "„Die Einschätzung der psychischen Verfassung obliegt approbierten Fachpersonen. Eine entsprechende fachärztliche Stellungnahme kann auf Anforderung vorgelegt werden."",
  },
  {
    vorwurf: "„Du entfremdest die Kinder."",
    emoji: "👶",
    taktik: "PAS-Vorwurf (Parental Alienation)",
    gegen:
      "Dokumentiere alle Übergaben, Kontaktversuche, Ablehnungen DURCH die Kinder. Lass die Kinder nicht instrumentalisieren. Anwältin einschalten — der PAS-Vorwurf ist juristisch hoch problematisch.",
    formulierung:
      "„Die Kontaktgestaltung erfolgt im Einvernehmen mit dem Kindeswohl. Eine lückenlose Übergabe-Dokumentation liegt vor und kann auf Anforderung vorgelegt werden."",
  },
  {
    vorwurf: "„Du hast mich angegriffen / geschlagen."",
    emoji: "⚠️",
    taktik: "Reactive-Abuse-Vorwurf",
    gegen:
      "Nie zugeben, nie verharmlosen, nie ausweichen. Verweise auf das laufende Verfahren und schweige inhaltlich. KEINE direkte Antwort an die Person — alles über die Anwältin.",
    formulierung:
      "„Ich werde mich zu den erhobenen Vorwürfen ausschließlich über meine anwaltliche Vertretung äußern. Direkte Kontaktaufnahmen werden nicht beantwortet."",
  },
  {
    vorwurf: "„Du bist eine schlechte Mutter."",
    emoji: "💔",
    taktik: "Charakter-Angriff",
    gegen:
      "Nicht verteidigen — das ist die Falle. Sammle Beweise für deine Mutterschaft (Schule, Kinderarzt, Vereine) und übergib sie nur an Behörden, nie an die Ex.",
    formulierung:
      "„Bezugsperson-Beziehungen zu den Kindern sind durch Schule, Kinderarzt und Freizeitkontakte dokumentiert. Entsprechende Belege werden im Verfahren vorgelegt."",
  },
  {
    vorwurf: "„Du trinkst / nimmst Drogen."",
    emoji: "🍷",
    taktik: "Sucht-Verleumdung",
    gegen:
      "Bei haltlosen Behauptungen: ein freiwilliger negativer Test (Hausarzt, ca. 50 €) entwaffnet sofort. Falls wahr: Sofort therapeutische Hilfe + Anwältin.",
    formulierung:
      "„Ein aktueller, freiwillig veranlasster Drogen-/Alkoholbefund kann auf Anforderung vorgelegt werden. Weitere Stellungnahmen erfolgen ausschließlich über meine anwaltliche Vertretung."",
  },
  {
    vorwurf: "„Du verheimlichst Geld / Vermögen."",
    emoji: "💰",
    taktik: "Finanz-Verleumdung",
    gegen:
      "Lückenlose Konto-Dokumentation der letzten 12 Monate bereithalten. Steuererklärungen ordnen. Niemals an die Ex direkt — nur an Anwältin/Gericht.",
    formulierung:
      "„Eine vollständige Vermögensaufstellung samt Belegen wird auf gerichtliche Anforderung vorgelegt. Außergerichtliche Herausgabe erfolgt nicht."",
  },
];

/**
 * BehoerdenBingo · Übung Bonus D · Klickkarten mit typischen Vorwürfen + sachliche Strategie.
 * Rein clientseitig — keine API-Kosten. Spielerisch entdramatisierend.
 */
export function BehoerdenBingo() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  const [seen, setSeen] = useState<Set<number>>(new Set());

  const handleClick = (i: number) => {
    if (openIdx === i) {
      setOpenIdx(null);
      return;
    }
    setOpenIdx(i);
    setSeen((prev) => new Set(prev).add(i));
  };

  const allSeen = seen.size === CARDS.length;

  return (
    <ExerciseFrame
      title="Übung 6 · Behörden-Bingo"
      subtitle="Die häufigsten Vorwürfe in behördlichen Verfahren — und wie du jeden davon sachlich, ohne Drama, juristisch sauber kontern kannst. Klick durch alle 6 Karten."
      meta={`🎯 Karten · ${seen.size}/${CARDS.length} entdeckt`}
      accent="bordeaux"
    >
      <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
        {CARDS.map((card, i) => {
          const isOpen = openIdx === i;
          const wasSeen = seen.has(i);
          return (
            <button
              key={i}
              type="button"
              onClick={() => handleClick(i)}
              className={`relative flex flex-col items-start gap-1.5 rounded-xl border-2 p-3 text-left transition-all ${
                isOpen
                  ? "border-bordeaux bg-bordeaux text-white shadow-soft"
                  : wasSeen
                    ? "border-sage/60 bg-sage/10 hover:border-sage"
                    : "border-bordeaux/25 bg-white/70 hover:border-bordeaux/60 hover:bg-bordeaux/5"
              }`}
            >
              {wasSeen && !isOpen && (
                <Sparkles className="absolute right-2 top-2 h-3 w-3 text-sage" />
              )}
              <span className="text-2xl">{card.emoji}</span>
              <span
                className={`text-xs font-semibold leading-snug ${
                  isOpen ? "text-white" : "text-graphite"
                }`}
              >
                {card.vorwurf}
              </span>
              <span
                className={`text-[10px] font-bold uppercase tracking-wider ${
                  isOpen ? "text-cream/70" : "text-bordeaux/60"
                }`}
              >
                {card.taktik}
              </span>
            </button>
          );
        })}
      </div>

      {openIdx !== null && (
        <div className="space-y-3 rounded-xl border-2 border-sage bg-sage/10 p-4 animate-fade-in">
          <p className="flex items-center gap-1.5 font-display text-[10px] font-bold uppercase tracking-[0.18em] text-sage">
            <Shield className="h-3 w-3" />
            Sachliche Gegenstrategie
          </p>
          <p className="text-sm leading-relaxed text-graphite">
            {CARDS[openIdx].gegen}
          </p>
          <div className="rounded-lg bg-white/85 p-3">
            <p className="mb-1 text-[10px] font-bold uppercase tracking-wider text-bordeaux">
              Beispiel-Formulierung (für Anwältin / Behörde)
            </p>
            <p className="text-sm italic leading-relaxed text-graphite">
              {CARDS[openIdx].formulierung}
            </p>
          </div>
        </div>
      )}

      {allSeen && (
        <div className="rounded-xl bg-gradient-to-br from-sage to-bordeaux p-4 text-white animate-fade-in">
          <p className="font-display text-sm font-bold">
            🏆 Du hast alle 6 Vorwürfe entdeckt.
          </p>
          <p className="mt-1 text-xs opacity-90">
            Die Strategie ist immer dieselbe: Nicht emotional reagieren. Über die
            Anwältin antworten. Dokumentation bereithalten. Das nimmt deiner Ex
            die wichtigste Waffe — deine Reaktivität.
          </p>
        </div>
      )}
    </ExerciseFrame>
  );
}
