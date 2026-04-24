

# Master-Template Modul 01 → Blueprint für Modul 02

## 1 · Extrahiertes 6-Elemente-Gerüst (Modul 01)

```text
<article className="space-y-7">
  ① ChapterIntro            ← Titel + Keyword-Pills + 2–3 Sätze
  ② SectionBlock kind="story"     ← Mary&Sandra-Szene + StoryPortrait + Reveal
  ③ SectionBlock kind="diagnose"  ← Wissenschaft + Accordion + FlipCards
  ④ SectionBlock kind="loesung"   ← Lead-Sentence + TextCollapse + CalloutBold
     InfoGraphicBlock              ← Bild mit Tap-to-Zoom
     DeepDiveIntro > SectionBlock kind="deep-dive"  ← 3 Studien-FlipCards
  ⑤ SectionBlock kind="uebung"  ×3  ← ButtonChoice / StackedCards / Reflection3Step / PillCloud
     MeditationCard (optional)
  ⑥ SectionBlock kind="checkliste" bare  ← ChecklistGoals (5 Ziele · 3-of-5 = Bloom)
</article>
```

### Verbindliche Bausteine (nur diese, keine eigenen `Section`-Wrapper)
| Baustein | Zweck | Quelle |
|---|---|---|
| `ChapterIntro` | Kopf jedes Kapitels | `@/components/chapter-intro` |
| `SectionBlock kind="…"` | Einziger Section-Wrapper, Farbe per `kind` | `@/components/section-block` |
| `StoryPortrait` | Bild im Story-Block, Desktop float-left | `@/components/story-portrait` |
| `InfoGraphicBlock` | Infografik nach Lösung, Lightbox | `@/components/infographic-block` |
| `TextCollapse` | Lange Texte, `preview={1} threshold={2-3}` | `@/components/text-collapse` |
| `Reveal` | Scroll-Fade pro Absatz, gestaffelt `delay` | `@/components/reveal` |
| `GlossarTerm` | Glossar-Hover | `@/components/glossar-term` |
| `CalloutBold` | Wissenschafts-Zitat-Box | `@/components/exercise` |
| `FlipCard` | Tap-Karten mit Front/Back | `@/components/exercise` |
| `DeepDiveIntro` | Optional-aufklappbare Wissenschaft | `@/components/deep-dive-intro` |
| `ButtonChoice` · `StackedCards` · `Reflection3Step` · `PillCloud` | Übungen mit Auto-Save | `@/components/exercise` |
| `MeditationCard` | YouTube-Begleitung | `@/components/exercise` |
| `ChecklistGoals` | 5 Transformationsziele | `@/components/checklist-goals` |
| `Accordion` | Diagnose-Studien | `@/components/ui/accordion` |

### Design-System-Regeln (1:1 aus Modul 01)
- **Farb-Mapping über `kind`** — niemals Inline-Farben für Section-Hülle.
  - `story` → Bordeaux/Cream-Glass (story-box)
  - `diagnose` → Sage-grün (diagnose-box)
  - `loesung` → Terracotta (loesung-box)
  - `uebung` → Terracotta (uebung-box)
  - `deep-dive` → Sage (science-box)
  - `checkliste` → Mauve (progress-box)
- **Article-Wrapper**: `<article className="space-y-7">`
- **Keine Emojis** in Labels (🎰 🧊 💊 etc. raus — gilt auch für Modul 02 Phasen-Karten)
- **Typografie max. 3 Stufen**: Headline `text-lg sm:text-xl md:text-2xl` · Body `text-sm sm:text-[15px]` · Caption `text-[11px]/uppercase tracking-wider`

### Micro-Interaktionen
- `<Reveal delay={120/240/360}>` — gestaffelte Fade-Ins für Story-Absätze
- `<FlipCard>` — Tap-to-Flip, 5er-Grid auf md, 2er auf Mobile
- `<TextCollapse preview={1} threshold={2}>` — verhindert Textwüsten
- Perspektiv-Switch (optional, nur wenn 2+ Voices) — Pill-Buttons mit `aria-pressed` und `dim()`-Helper
- Auto-Save via `moduleSlug`/`slug` Prop (debounced Supabase + LocalStorage)

### Persistence-Konvention
- **Constant am Datei-Anfang**: `const SLUG = "modul-02";`
- Alle Übungen erhalten `slug={SLUG}` (oder `moduleSlug={SLUG}`) als Prop.
- `storageKey` ist **pro Übung eindeutig** (z. B. `gaslighting_log`, `realitaets_check`, `podest_brief`, `21_tage`).
- Speicher-Schlüssel werden automatisch zu `module_progress[user, "modul-02"].exercise_state[storageKey]` (Supabase) bzw. `unbond-progress:modul-02` (LocalStorage). **Keine zusätzliche Anpassung nötig** — der Hook `useModuleProgress(slug)` macht das automatisch, sofern `slug` korrekt übergeben wird.
- ChecklistGoals-IDs `g1…g5` sind pro Modul isoliert (Schlüssel = slug+goal-id).

## 2 · Bestandsaufnahme Modul 02 (was zu refaktorieren ist)

Modul 02 nutzt **noch nicht** den Master-Blueprint:
- Eigener `<Section icon label>`-Wrapper statt `SectionBlock kind`
- `glass-card-strong` + Inline-Border-Colors statt kind-basiertem Theming
- Emojis in Phasen-Labels (🌹 🔍 ✉️ 🔄 ⚠️)
- Kein `StoryPortrait`, kein `InfoGraphicBlock`, kein `DeepDiveIntro`, keine `FlipCard`, kein `Reveal`, kein `TextCollapse`
- `ChecklistGoals` vorhanden? → wird im Refactor mit 5 Zielen ergänzt
- ❗ Inhalte stehen, dürfen 1:1 übernommen werden — nur Hülle/Pattern wird angepasst

## 3 · Refactor-Plan Modul 02 (nur Strukturangleichung)

```text
<article className="space-y-7">
  ChapterIntro „Kapitel 02 · Die Rosa-Brille abnehmen" (bestehende Keywords beibehalten)

  SectionBlock kind="story" eyebrow="Story · Der Hoovering-Brief"
    └ StoryPortrait (Platzhalter-Frame bis Bild geliefert)
    └ Reveal-gestaffelte Absätze (Mary 6 Monate nach Ghosting)
    └ TextCollapse für Sandras Original-Zitat + Realitäts-Check-Spalten

  SectionBlock kind="diagnose" eyebrow="Diagnose · Kognitive Dissonanz"
    └ Lead + Accordion (Festinger · Skinner · Fisher · Weaponized Virtue)

  SectionBlock kind="diagnose" eyebrow="Marys Gaslighting-Log · 3 Beispiele"
    └ FlipCard-Grid (Front: Situation · Back: Fakten)

  SectionBlock kind="diagnose" eyebrow="Die 3 Botenstoffe der Falle"
    └ FlipCard-Grid 3-spaltig (Dopamin · Cortisol · Oxytocin)

  SectionBlock kind="diagnose" eyebrow="Der 4-Phasen-Zyklus"
    └ 4-Karten-Grid (ohne Emojis, mit Lucide-Icons)

  SectionBlock kind="loesung" eyebrow="Lösung · Negative Reappraisal"
    └ Lead + TextCollapse + CalloutBold (Langeslag & Sanchez)

  InfoGraphicBlock (Platzhalter „Rekonsolidierungs-Kreislauf")

  DeepDiveIntro
    └ SectionBlock kind="deep-dive" — 3 FlipCards (Festinger 1957 · Langeslag 2018 · Nader 2000)

  SectionBlock kind="uebung" eyebrow="Übung 1 · Gaslighting-Log"
    └ StackedCards slug={SLUG} storageKey="gaslighting_log" (3 Einträge × 4 Felder)

  SectionBlock kind="uebung" eyebrow="Übung 2 · 4-Spalten-Realitäts-Check"
    └ StackedCards slug={SLUG} storageKey="realitaets_check"

  SectionBlock kind="uebung" eyebrow="Übung 3 · Podest-Analyse & Brief"
    └ ButtonChoice (Idealisierungs-Intensität)
    └ Reflection3Step slug={SLUG} storageKey="podest_brief"

  SectionBlock kind="uebung" eyebrow="Übung 4 · 21-Tage-Challenge"
    └ TwentyOneDayChallenge slug={SLUG} storageKey="21_tage"

  SectionBlock kind="uebung" eyebrow="Übung 5 · Hoover-Decoder"
    └ HooverDecoder slug={SLUG} (KI-Edge-Function bleibt unverändert)

  MeditationCard (passende YouTube-ID)

  SectionBlock kind="checkliste" bare
    └ ChecklistGoals slug={SLUG} mit 5 Zielen
```

## 4 · Was im Refactor NICHT passiert
- Keine inhaltlichen Texte gekürzt oder neu erfunden — Mary-Story, Gaslighting-Beispiele, Phasen-Beschreibungen, Diagnose-Absätze bleiben **wortgleich**.
- Keine neuen Komponenten gebaut.
- HooverDecoder-Edge-Function nicht angefasst.
- Keine Module 03–10 berührt.
- Kein neues Persistence-Schema — `useModuleProgress("modul-02")` greift bereits korrekt; nur `SLUG`-Konstante muss konsequent genutzt werden.

## 5 · Bereit für Schritt 2

Sobald du mir den Rohinhalt von Schritt 2 lieferst, mappe ich ihn additiv in dieses 6-Elemente-Gerüst — Bordeaux/Sage/Mauve/Terracotta-Farbwelt, dieselben Micro-Interaktionen, identische Persistence-Konvention. Sag Bescheid, wenn ich loslegen soll.

