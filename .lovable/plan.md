

# Modul 02 · Strukturtreue Übernahme des Rohinhalts

Der Rohtext für „Schritt 03 · Die Rosa-Brille abnehmen" wird **1:1** in das Master-Blueprint-Gerüst aus Modul 01 überführt. Inhalte werden **wortgleich** übernommen, nur Hülle und Pattern-Sprache werden vereinheitlicht.

## 1 · Wichtige Klärung vorab

Du sagst „Schritt 2", der Rohtext heißt aber durchgehend **„Schritt 03 · Die Rosa-Brille abnehmen"**. Das passt zur App-Logik: in `lib/modules.ts` ist `modul-02` bereits = „Die Rosa-Brille abnehmen". Wir behalten **die App-Slug `modul-02`** bei (URL bleibt `/modul/modul-02`), zeigen aber im Header und im ChapterIntro den Original-Titel **„Schritt 03 · Die Rosa-Brille abnehmen"** wie in der Quelle. Keine Renumbering-Umstellung in der Modul-Liste.

## 2 · Zielstruktur (vollständige Section-Reihenfolge)

```text
<article className="space-y-7">

ChapterIntro
  Title: „Die Rosa-Brille abnehmen"
  Keywords: Kognitive Dissonanz · Gaslighting · Negative Reappraisal · Hoovering
  Intro-Sätze: 1:1 aus Quelle („Solange dein Gehirn die Beziehung idealisiert…")

SectionBlock kind="story" eyebrow="Story · Das Gaslighting-Log"
  title="Wenn die Schuppen von den Augen fallen"
  StoryPortrait (Platzhalter-Frame, bis Bild geliefert wird)
  Reveal-gestaffelte Absätze:
    · Der Hoovering-Brief (Volltext 1:1)
    · Sandras Nachricht als Blockquote
    · Marys Wolf-im-Schafspelz-Spalten (Maske vs. Fakten) als 2-Spalten-Grid
    · Auflösung („Mary atmet tief aus … Illusion ist endlich gebrochen.")

SectionBlock kind="story" eyebrow="Marys Gaslighting-Log · Drei Einträge"
  3 Eintrags-Karten 1:1 (Partnertattoo / Geburtstag / Blockade)
  jeweils Felder: Situation · Was ich gefühlt habe · Was die Fakten sagen
  abschließend Caption-Absatz „Abb.: Gaslighting erkennen und entmachten…"

SectionBlock kind="diagnose" eyebrow="Diagnose · Kognitive Dissonanz & Spielautomat-Effekt"
  title="Was in deinem Kopf passiert"
  TextCollapse: 4 Original-Absätze (Festinger · Skinner · Fisher · Weaponized Virtue)
  Caption: „Abb.: Der neurobiologische Sucht-Loop…"

SectionBlock kind="diagnose" eyebrow="Die drei Botenstoffe der Falle"
  FlipCard-Grid (3-spaltig md, 1-spaltig mobil):
    Dopamin · Oxytocin · Cortisol  (Front: Name · Back: Original-Text)
  Quellen-Zeile als Caption (Skinner 1938 · Fisher 2005/2010 · Berridge & Robinson 1998)

SectionBlock kind="diagnose" eyebrow="Der 4-Phasen-Zyklus der toxischen Bindung"
  4er-Grid (Lucide-Icons statt Emojis):
    Idealisierung (Heart) · Abwertung (CloudRain) · Discard (Scissors) · Hoovering (Anchor)
  CalloutBold „Das Muster erkennen…"
  Caption: „Abb.: Der 4-Phasen-Zyklus…"

SectionBlock kind="loesung" eyebrow="Lösung · Negative Reappraisal & Realitäts-Anker"
  TextCollapse: 2 Original-Absätze (Langeslag/Sanchez · fMRT-Studien)
  CalloutBold mit Quelle (Langeslag 2018 · Nader 2000)

InfoGraphicBlock (Platzhalter „Rekonsolidierungs-Kreislauf")

SectionBlock kind="uebung" eyebrow="Übung 1a · Dein persönliches Gaslighting-Log"
  Intro 1:1 + StackedCards
    slug={SLUG} storageKey="gaslighting_log"
    cards: 3 Default-Einträge × 4 Felder (Was passiert? · Was sie sagte? · Wie gefühlt? · Fakten)
    add-button „+ Weiteren Eintrag hinzufügen"

SectionBlock kind="uebung" eyebrow="Übung 1b · 4-Spalten-Realitäts-Check"
  Intro 1:1 + StackedCards
    slug={SLUG} storageKey="realitaets_check"
    columns: Romantisierte Version · Emotionale Wirkung · Faktische Realität · Neue Bewertung
  CalloutBold „Negative Reappraisal bedeutet nicht…"

SectionBlock kind="loesung" eyebrow="Lösung · Negative Reappraisal in der Praxis"
  Originaltext + interner Verweis „→ 21-Tage-Challenge unten"

SectionBlock kind="uebung" eyebrow="Übung 1c · Phasen-Mapper"
  PillCloud × 4 Buckets (Idealisierung · Abwertung · Discard · Hoovering)
  slug={SLUG} storageKey="phasen_mapper"

SectionBlock kind="uebung" eyebrow="Übung 2 · 21-Tage-Challenge: Negative Reappraisal"
  TwentyOneDayChallenge slug={SLUG} storageKey="reappraisal_21"
  Intro 1:1 (30–40% Reduktion etc.)

SectionBlock kind="uebung" eyebrow="Übung 3 · Podest-Analyse & Brief"
  2 Original-Absätze als Lead
  Reflection3Step slug={SLUG} storageKey="podest_brief"
    Step 1: Idealisiert – was ich ihr zuschrieb
    Step 2: Real – was sie tatsächlich zeigte
    Step 3: Brief ans idealisierte Bild

SectionBlock kind="uebung" eyebrow="Übung 4 · Hoover-Mail Decoder"
  CalloutBold „Hinweis: Selbsthilfeübung, keine Diagnose…"
  Lead 1:1
  HooverDecoder slug={SLUG}  (existierende Komponente + Edge-Function unverändert)
  CollapsibleBox „Datenschutzhinweis – KI-Analyse" (bereits vorhanden)
  FlipCard-Grid „Die 5 häufigsten Hoovering-Taktiken" (5 Karten ohne Emojis)

DeepDiveIntro
  └ SectionBlock kind="deep-dive" eyebrow="Deep Dive · Wissenschaft der kognitiven Neubewertung"
     Accordion: 4 Studien (Langeslag/Sanchez · Festinger · Fisher · Ristock)

──── Unterkapitel 3.5 · Gaslighting-Notbremse ────

SectionBlock kind="story" eyebrow="Story · Mary · Die Erklärungsschleife"
  title="„Das habe ich nie gesagt."
  Reveal-Absätze 1:1

SectionBlock kind="diagnose" eyebrow="Diagnose · Die Erklärungsschleife"
  3 Original-Absätze (Robin Stern 2007 · neurologischer Effekt)

SectionBlock kind="loesung" eyebrow="Lösung · Die 3-Schritt-Notbremse"
  3 nummerierte Schritte (NICHT erklären · Notieren · Innerer Stopp-Satz) als 3-Karten-Grid

SectionBlock kind="uebung" eyebrow="Übung · Wahrnehmungs-Anker · Tägliches Realitätsprotokoll"
  Reflection3Step slug={SLUG} storageKey="wahrnehmungs_anker"
  Crisis-Hinweis-Box (warning-style) mit Telefonseelsorge

──── Unterkapitel 3.6 · Der Doppelstandard ────

SectionBlock kind="story" eyebrow="Story · Mary · Der Vergleich, der brennt"
  title="Das Urlaubsfoto"
  Reveal-Absätze 1:1

SectionBlock kind="diagnose" eyebrow="Diagnose · Doppelstandard als Kontrollmuster"
  3 Original-Absätze (Durvasula 2019)

SectionBlock kind="uebung" eyebrow="Übung · Die 3-Spalten-Wahrheit"
  Reflection3Step slug={SLUG} storageKey="drei_spalten_wahrheit"
  Spalte A · Spalte B · Spalte C

──── Unterkapitel 3.7 · Radical Acceptance ────

SectionBlock kind="story" eyebrow="Story · Mary · Loslassen beginnt innen"
  title="Der Brief, den Sandra nie schreiben wird"
  Reveal-Absätze 1:1

SectionBlock kind="diagnose" eyebrow="Psychoedukation · Radical Acceptance"
  Lead-Absatz (DBT/Linehan 1993 · Durvasula)
  2-Spalten-Grid „Akzeptanz bedeutet NICHT" / „Akzeptanz bedeutet"
  CalloutBold Durvasula-Zitat

SectionBlock kind="uebung" eyebrow="Übung · Acceptance-Protokoll (21 Tage)"
  Reflection3Step slug={SLUG} storageKey="acceptance_protokoll"
  Crisis-Hinweis-Box mit Telefonseelsorge

MeditationCard
  Title: „Gedankenkarussell stoppen – Einschlaf-Hypnose & Meditation"
  Source: ChakraTunes / Raphael Kempermann
  YouTube-Link 1:1

SectionBlock kind="checkliste" bare
  ChecklistGoals slug={SLUG} mit 5 Original-Zielen 1:1

</article>
```

## 3 · Persistence-Konvention (1:1 wie Modul 01)

```ts
const SLUG = "modul-02";
```
Übungs-Storage-Keys (modul-isoliert via `useModuleProgress(SLUG)`):
- `gaslighting_log`
- `realitaets_check`
- `phasen_mapper`
- `reappraisal_21`
- `podest_brief`
- `hoover_decoder` (bereits intern in Komponente)
- `wahrnehmungs_anker`
- `drei_spalten_wahrheit`
- `acceptance_protokoll`

ChecklistGoals-IDs `g1…g5` automatisch unter `modul-02`-Scope.

## 4 · Design-System-Treue

- **Farb-Mapping** ausschließlich über `kind`-Prop (story=Bordeaux/Cream · diagnose=Sage · loesung=Terracotta · uebung=Terracotta · deep-dive=Sage · checkliste=Mauve)
- **Keine Emojis in UI-Labels**: 🌹 🔍 ✉️ 🔄 ⚠️ 💛 🌑 🪝 🎭 🔄 💧 🕊 ⚖️ → ersetzt durch Lucide-Icons (Heart, CloudRain, Scissors, Anchor, Mask, RefreshCw, Droplet, Dove, Scale)
- Emojis im **Fließtext** der Quelle (z. B. „💾 Wird automatisch gespeichert") werden zum dezenten Save-Indicator-Pattern (Lucide `Save` + Caption) — Inhalt bleibt identisch
- **Typografie-Stufen**: Headline / Body / Caption — keine vierte Stufe
- **`<Reveal delay>`**: 120/240/360 ms gestaffelt für Story-Absätze
- **`TextCollapse`**: `preview={1} threshold={2}` für Diagnose-Wisstexte
- Article-Wrapper: `<article className="space-y-7">`

## 5 · Was im Refactor NICHT passiert

- Keine Inhaltskürzungen, kein Umformulieren, keine erfundenen Sätze
- Keine neuen Komponenten gebaut — nur bestehende Bausteine genutzt
- HooverDecoder-Edge-Function (`supabase/functions/hoover-decoder/index.ts`) bleibt unangetastet
- Module 01, 03–10 nicht angefasst
- Kein Renumbering der Modul-Liste (`modul-02` bleibt URL und Slug)
- Keine neuen Routen, keine neuen Migrations
- Keine Bilder ersetzt — Platzhalter-Frames bis du die Assets lieferst

## 6 · Bilder-Bedarf (vom User nachzuliefern, optional)

- Story-Portrait Mary „Hoovering-Brief" (Handy am Küchentisch)
- Infografik „Negative Reappraisal · Rekonsolidierungs-Kreislauf"
- Optional: Story-Portraits für 3.5 / 3.6 / 3.7

Bis dahin werden die bestehenden dezenten Frames genutzt — kein Layout-Bruch.

## 7 · Memory-Update (nach Build)

- `mary-sandra-canon.md` ergänzen um die 4 neuen Mary-Szenen aus Modul 02 (Hoovering-Brief, Erklärungsschleife, Urlaubsfoto, Brief-den-Sandra-nie-schreiben-wird) — Wortlaut 1:1
- `modules/modul-02-stable.md` als Snapshot-Eintrag (analog zu modul-01-stable.md)

