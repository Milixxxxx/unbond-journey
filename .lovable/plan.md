

# Modul 02 · Radikale Interaktivierung — Plan

**Leitregel:** Modul 02 (Rosa-Brille / Gaslighting / Hoovering) wird zum **interaktiven Coaching-Tool**, nicht zur Lese-Seite. Mary&Sandra-Story-Texte bleiben **wortgleich 1:1** (Kanon-Regel + neue User-Anweisung). Alle anderen Textwüsten >4 Sätze werden in Mikro-Tools verwandelt.

---

## 1 · Was bleibt unverändert (Kanon)

- **Mary-&-Sandra-Story „Hoovering-Brief"** (Sechs Monate nach dem Ghosting …) — bleibt 1:1, nur Scroll-Reveal-Inszenierung.
- **Mary-Story „Die Erklärungsschleife"** (22 Uhr, „Das habe ich nie gesagt") — bleibt 1:1.
- **Mary-Story „Das Urlaubsfoto"** (Doppelstandard) — bleibt 1:1.
- **Mary-Story „Der Brief, den Sandra nie schreiben wird"** (Radical Acceptance) — bleibt 1:1.
- **Marys Gaslighting-Log · Drei Einträge** (Partnertattoo / Geburtstag / Blockade) — bleibt 1:1, nur als Reveal-Karten.

→ **Kein Perspektiv-Switcher** in diesen Story-Boxen (per User-Anweisung explizit verboten für Modul 02).

---

## 2 · Komponenten-Inventar (vorhanden — wiederverwenden)

| Bereits vorhanden | Verwendung im Refactor |
|---|---|
| `SectionBlock kind="…"` | Einziger Section-Wrapper |
| `Reveal` | Scroll-Fade für Story |
| `FlipCard` | Studien-Zitate · Botenstoffe · Hoovering-Taktiken |
| `InfoGraphicBlock` | Tap-to-Zoom für die zwei Infografiken |
| `Accordion` | Theorie-Accordions (Festinger · Skinner · Fisher · Ristock) |
| `SliderDiscrete` | Toxikometer 0–10 |
| `StackedCards` | Gaslighting-Log + Realitäts-Check |
| `PillCloud` | Phasen-Mapper · Werte-Matrix |
| `Reflection3Step` | Podest-Brief · Wahrnehmungs-Anker · 3-Spalten-Wahrheit · Acceptance-Protokoll |
| `TwentyOneDayChallenge` | 21-Tage Negative Reappraisal |
| `HooverDecoder` | KI-Analyse (unverändert) |
| `MeditationCard` | Begleit-Meditation |
| `ChecklistGoals` | Transformationsziele 5er + 3-of-5-Logik |
| `Tabs` (`ui/tabs`) | Spielautomat-Effekt-Tabs · 4-Phasen-Zyklus-Tabs |

**Neu zu bauen (3 Mikro-Komponenten):**

1. **`InfographicHotspots`** (`src/components/infographic-hotspots.tsx`)
   - Wrapt `<InfoGraphicBlock>` und legt absolut positionierte Klick-Punkte über die Grafik.
   - Klick → Glassmorphism-Popover mit Erklärung.
   - Props: `src`, `alt`, `caption`, `hotspots: { x:%, y:%, label, body }[]`.

2. **`TimelineSorter`** (`src/components/exercise/timeline-sorter.tsx`)
   - Drag-and-Drop-Liste (HTML5 native, keine zusätzliche Lib) zum Sortieren von Gaslighting-Ereignissen in chronologische Reihenfolge.
   - Zeigt Erfolg, wenn Reihenfolge stimmt.
   - Persistiert via `useModuleProgress(slug)` unter `storageKey`.

3. **`ToxicometerScale`** (`src/components/exercise/toxicometer-scale.tsx`)
   - Erweiterung von `SliderDiscrete`: Skala 1–10, Farbverlauf Sage→Mauve→Terracotta, Live-Label („stabil" / „grenzwertig" / „toxisch").
   - Persistenz wie SliderDiscrete.

**Sticky-Progress-Bar** und **Konfetti-Pop bei 3-of-5**: bewusst NICHT in diesem Schritt — gehört auf Modul-Top-Bar-Ebene (globaler Refactor), nicht ins Modul-File. Wird als Memory-Eintrag für späteren globalen Pass markiert.

---

## 3 · Section-für-Section · Was wird zu was

### ✦ ChapterIntro
- Bleibt strukturell gleich. Title `Schritt 03 · Die Rosa-Brille abnehmen`, 4 Keywords, 2 Intro-Absätze.

### ① STORY · Der Hoovering-Brief
- **Bleibt 1:1** (Kanon).
- Inszenierung: Scroll-Reveals 0/120/240/360 ms.
- 2-Spalten-Grid „Maske vs. Fakten" bleibt.
- **Optional:** sanfte Puls-Animation (CSS keyframes, `@keyframes glassPulse`) auf der story-box — als CSS-Utility-Klasse `story-box--pulse`, opt-in.

### ① STORY · Marys Gaslighting-Log · 3 Einträge
- **Text bleibt 1:1**.
- Wird zu **`<TimelineSorter>`** ergänzt: Direkt darunter eine Mini-Übung „Sortiere diese 5 Gaslighting-Sätze in die Reihenfolge, in der sie typischerweise auftreten" (Idealisierung → erste Abwertung → Realitätsleugnung → Pity Play → Hoovering).
- **Was ersetzt wird:** Nichts vom Originaltext. Die Übung kommt **additiv** dazu.

### ② DIAGNOSE · Kognitive Dissonanz & Spielautomat-Effekt
- **Aktuell:** 4 Diagnose-Absätze in `TextCollapse`.
- **Neu:** Wird zu **`<Tabs>`** mit 4 Reitern:
  - **Tab 1 · Festinger** — kurzer Satz + Beispiel-Box
  - **Tab 2 · Skinner** — Spielautomat-Erklärung + Mini-Visual (Münze fällt)
  - **Tab 3 · Fisher** — fMRT-Faktenkarte + Quote
  - **Tab 4 · Weaponized Virtue** — WLW-spezifische Box
- Jeder Tab maximal 3 Sätze + 1 visuelles Element.

### ② DIAGNOSE · Trauma-Bonding-Infografik (NEU)
- **`<InfoGraphicBlock>`** mit der hochgeladenen Trauma-Bonding-Grafik.
- Caption (2–3 Sätze): „Der neurobiologische Sucht-Loop — Trauma-Bonding entsteht durch intermittierende Verstärkung: unvorhersehbare Wechsel zwischen Schmerz und Belohnung binden stärker als konstante Liebe. Cortisol-Stress + Dopamin-Erlösung erzeugen ein Sucht-Muster, das nur durch radikale Trennung aller Reize (No Contact) durchbrochen werden kann. Echte Liebe gibt Sicherheit — Trauma-Bonding aktiviert dieselben Belohnungszentren wie Kokainsucht."
- **Konsequenz:** Da die Grafik die Inhalte der drei Botenstoffe + Spielautomat + No-Contact-Notwendigkeit erklärt, wird der Text der `Botenstoffe-FlipCards` von je 3-4 Sätzen auf je **1 Satz Teaser + 2 Sätze Back** gekürzt (keine inhaltliche Streichung — die Tiefe steht in der Grafik).

### ② DIAGNOSE · Die drei Botenstoffe
- **Bleibt als FlipCard-Grid** (Tap-Interaktion ist hier richtig).
- Texte gestrafft, weil Grafik darüber die Quintessenz visualisiert.

### ② DIAGNOSE · Der 4-Phasen-Zyklus
- **Aktuell:** 4-Karten-Grid statisch.
- **Neu:** Wird zu **`<Tabs>` mit 4 Phasen-Reitern**, plus darunter `<CalloutBold>` „Das Muster erkennen…".
- Jeder Tab zeigt: Icon · Phasen-Name · 2 Sätze · 1 typisches Sandra-Zitat in `<blockquote>`.

### ③ LÖSUNG · Negative Reappraisal
- **Aktuell:** 2 lange `TextCollapse`-Absätze.
- **Neu:** 
  - 1 Lead-Satz (bleibt)
  - **`<Accordion>`** mit 3 Items: „Was ist Reappraisal?" · „Wie funktioniert Rekonsolidierung?" · „Warum 21 Tage?"
  - `<CalloutBold kind="science">` mit Langeslag-Quelle bleibt.

### ③ LÖSUNG · Gaslighting-Infografik (NEU)
- **`<InfoGraphicBlock>`** mit der hochgeladenen Gaslighting-Grafik („Vertrau deiner Wahrnehmung").
- Caption (2–3 Sätze): „Gaslighting erkennen — Manipulation ersetzt deine Realität durch Deutungen anderer; die Gegenstrategie heißt: Daten statt Diskussion. Schreibe Fakten sofort auf (Wahrnehmungs-Anker), um dich vor späterer Verunsicherung zu schützen. Reactive Abuse ist Notwehr — deine verzweifelte Reaktion auf Provokation ist kein Beweis dafür, dass du das Problem bist."
- **Konsequenz:** Kürzt den Wiederholungstext im Diagnose-Block 3.5 (Erklärungsschleife) — siehe unten.

### ⑤ ÜBUNGEN (Mindestens 3 mit echter Nutzerhandlung — wir haben deutlich mehr)

| # | Übung | Komponente | Persistence-Key |
|---|---|---|---|
| 1 | **Toxikometer · Wie idealisiere ich noch?** *(NEU)* | `<ToxicometerScale>` | `toxikometer_idealisierung` |
| 2 | **Gaslighting-Log · 3 Einträge** | `<StackedCards>` | `gaslighting_log` |
| 3 | **4-Spalten-Realitäts-Check** | `<StackedCards>` | `realitaets_check` |
| 4 | **Phasen-Mapper · Werte-Matrix-Style** | `<PillCloud>` × 4 Buckets | `phasen_mapper_*` |
| 5 | **21-Tage-Challenge · Negative Reappraisal** | `<TwentyOneDayChallenge>` | `reappraisal_21` |
| 6 | **Podest-Analyse & Brief** | `<Reflection3Step>` | `podest_brief` |
| 7 | **Hoover-Mail Decoder** (KI) | `<HooverDecoder>` | `hoover_decoder` |
| 8 | **Wahrnehmungs-Anker · Tägliches Realitätsprotokoll** | `<Reflection3Step>` | `wahrnehmungs_anker` |
| 9 | **3-Spalten-Wahrheit (Doppelstandard)** | `<Reflection3Step>` | `drei_spalten_wahrheit` |
| 10 | **Acceptance-Protokoll (21 Tage)** | `<Reflection3Step>` + Tag-Counter | `acceptance_protokoll` |

**Alle synchronisieren** über `useModuleProgress("modul-02")` → Supabase `module_progress` + LocalStorage `unbond-progress:modul-02`.

### Hoover-Decoder · 5 Hoovering-Taktiken
- Bleibt FlipCard-Grid 5 Karten — Lucide-Icons, keine Emojis.

### ⑥ DEEP DIVE
- Bleibt Accordion mit 4 Studien (Langeslag · Festinger · Fisher · Ristock).
- **Erweiterung:** Zusätzliche **Studien-FlipCard-Reihe** (3 Karten) als visueller Auflockerer vor dem Accordion: Front = Erkenntnis, Back = Methodik+Quelle.

### Unterkapitel 3.5 · Gaslighting-Notbremse
- Mary-Story bleibt 1:1.
- Diagnose-Block (Robin Stern + ACC-Effekt) wird zu **`<Accordion>` mit 2 Items** statt `TextCollapse`.
- Lösung „3-Schritt-Notbremse" bleibt als 3-Karten-Grid.
- Übung: `<Reflection3Step>` Wahrnehmungs-Anker.
- **Crisis-Hinweis-Box** bleibt (warning-style + Telefonnummer).

### Unterkapitel 3.6 · Doppelstandard
- Mary-Story „Urlaubsfoto" bleibt 1:1.
- Diagnose Durvasula → **`<Accordion>` 3 Items** (Was ist Doppelstandard? · Warum es dich trifft · Was Forschung sagt).
- Übung „3-Spalten-Wahrheit" via `<Reflection3Step>`.

### Unterkapitel 3.7 · Radical Acceptance
- Mary-Story „Brief Sandra nie schreiben wird" bleibt 1:1.
- Psychoedukation: 2-Spalten-Grid „Akzeptanz bedeutet NICHT/Akzeptanz bedeutet" bleibt (visuell schon gut).
- `<CalloutBold>` Durvasula-Zitat bleibt.
- Übung „Acceptance-Protokoll" via `<Reflection3Step>` + Tag-Zähler 1–21.
- Crisis-Hinweis bleibt.

### MeditationCard
- Bleibt unverändert (YouTube-Link).

### ⑦ CHECKLISTE
- `<ChecklistGoals slug="modul-02">` mit 5 Original-Zielen.
- 3-of-5 → Badge-Pop (bereits in Komponente vorhanden).

---

## 4 · Klare Markierung · Was ist NEU interaktiv?

| Element | Status |
|---|---|
| Trauma-Bonding-Infografik mit Caption (Modul 02 Diagnose) | **NEU** |
| Gaslighting-Infografik mit Caption (Modul 02 Lösung) | **NEU** |
| Toxikometer-Slider „Wie idealisiere ich noch?" | **NEU Komponente** |
| Spielautomat-Effekt als 4-Tab-Layout | **NEU Pattern** (Tabs statt TextCollapse) |
| 4-Phasen-Zyklus als Tab-Layout | **NEU Pattern** |
| Negative Reappraisal als Accordion | **NEU Pattern** (Accordion statt TextCollapse) |
| Studien-FlipCard-Reihe im Deep Dive | **NEU Pattern** (additive 3 Karten) |
| Diagnose 3.5/3.6 als Accordion | **NEU Pattern** |
| Timeline-Sortierer für Gaslighting-Sätze | **NEU Komponente** |
| Hotspot-Layer auf Trauma-Bonding-Grafik | **NEU Komponente** (4 Hotspots: Spielautomat / No-Contact / Cocktail / Chemie) |

---

## 5 · Bewusst NICHT übernommen aus Modul 1 / Vorlage

| Element | Begründung |
|---|---|
| **Perspektiv-Switcher Mary/Sandra** | Per User-Anweisung in Modul 02 explizit verboten — Storys hier sind Lehrszenen, kein Dialog-Wechsel. |
| **Sticky-Progress-Bar** | Gehört auf Top-Bar-Ebene (`module-top-bar.tsx`), nicht ins Modul-File. Wird als separater Task notiert. |
| **Konfetti bei Badge-Pop** | `ChecklistGoals` hat bereits `animate-badge-pop` — Konfetti wäre Overkill für ein Heilungs-Tool, das emotional nicht jubeln soll. Bleibt zurückhaltend (User-Memory: „Apple-like minimal"). |
| **Werte-Matrix als eigene Übung** | Modul 02 ist Gaslighting/Idealisierung — Werte-Matrix passt thematisch zu Modul 09/10 (Identität). Bewusst nicht hier. |
| **Urge-Surfing-Welle** | Gehört in SOS / Modul 04 (Trigger), nicht hier. |
| **Bonus-Mary-Storys neu erfinden** | Anweisung war: Story 1:1 lassen. |

---

## 6 · Persistence-Konvention

```ts
const SLUG = "modul-02";
```
Alle neuen Übungen erhalten `slug={SLUG}` und unique `storageKey`. `useModuleProgress(SLUG)` synchronisiert automatisch mit Supabase `module_progress` (vorhandene RLS) + LocalStorage `unbond-progress:modul-02`. Tab-Auswahl und Accordion-Open-State sind UI-State, **nicht** persistiert (bewusst — sonst springt UI bei Wiederbesuch).

---

## 7 · Memory-Update (am Ende dieses Refactors)

- **Neuer Eintrag** `mem://design/interaction-doctrine.md`: „UNBOND ist ein interaktives Coaching-Tool. Textblöcke >4 Sätze MÜSSEN in Tabs/Accordion/FlipCard/Slider verwandelt werden. Statische Listen → interaktive Komponenten."
- **Update** `mary-sandra-canon.md`: Ergänzung um die 4 Modul-02-Mary-Szenen (Hoovering-Brief / Erklärungsschleife / Urlaubsfoto / Brief Sandra nie schreiben wird) — Wortlaut 1:1 als Schutz vor späteren ungewollten Änderungen.
- **Update** `index.md`: Neue Core-Regel „Mikro-Interaktion vor Lesen — siehe interaction-doctrine".
- **Neuer Eintrag** `mem://modules/modul-02-stable.md`: Snapshot.
- **TODO-Notiz** für späteren globalen Refactor: Sticky-Progress-Bar in `module-top-bar.tsx` einbauen.

---

## 8 · Was ich JETZT bauen werde (Reihenfolge im nächsten Schritt)

1. **3 neue Komponenten**:
   - `src/components/infographic-hotspots.tsx`
   - `src/components/exercise/timeline-sorter.tsx`
   - `src/components/exercise/toxicometer-scale.tsx`
   - + Export im `exercise/index.ts`
2. **2 Bilder** aus User-Uploads in `src/assets/infographics/` kopieren:
   - `gaslighting-erkennen.png`
   - `trauma-bonding-sucht-loop.png` (falls anders als bestehende `trauma-bonding-kreislauf.png`)
3. **Refactor** `src/modules/modul-02.tsx`:
   - Tabs für Spielautomat-Effekt + 4-Phasen-Zyklus
   - Accordion für Negative Reappraisal + Notbremse-Diagnose + Doppelstandard-Diagnose
   - InfoGraphicBlock × 2 mit Caption
   - InfographicHotspots auf Trauma-Bonding (4 Hotspots)
   - TimelineSorter additiv nach Gaslighting-Log-Story
   - ToxicometerScale als Übung 0
   - Studien-FlipCards im Deep Dive
4. **Optional Refactor** `src/modules/modul-01.tsx`: bestehenden `traumaBondingInfografik`-Block ggf. ergänzen mit `InfographicHotspots` (nur falls die Grafik dort wirklich identisch ist) — falls anders, neuer Hotspot-Layer auf Modul 02.
5. **Memory-Updates** wie oben.

**Nicht angefasst:** `HooverDecoder`-Edge-Function, andere Module, Routen, Migrationen.

