## Phase A · Analyse aus drei Perspektiven

### 1) Was ich an Quellen gesichtet habe
- `UNBOND_Final_02-2.html` (Kanon, 7105 Zeilen)
- `Schritt_2.txt` (Kurzfassung mit 10 Warnsignalen, Goals, ACT-Defusion)
- `schritt-2.Traumabonding.html` (volle interaktive Vorlage: Warnsignal-Radar mit Pill-Cloud + 3 Textareas, Rationalisierungs-FlipCards mit Reframes, Jackpot-Wheel SVG + 3×3-Grid, 4-7-8-Atem, Deep Dive)
- `mary-sandra-canon.md` — Mary&Sandra-Story bleibt **unverändert**
- Bilder: `info-toxliebe.png` (Anatomie der toxischen Liebe), `info-zyklus-tox.png` (Spielautomaten-Kreislauf)
- Vorhandene Interaktiv-Bausteine: 44 Komponenten in `src/components/exercise/` (siehe Übersicht weiter unten)

### 2) Perspektive Betroffene (Mary)
Die *eine* Frage, die alles trägt: **„Warum liebe ich sie, obwohl sie mir nachweislich schadet?"**
Daraus zerlegt:
- Warum verschwindet mein Verstand, wenn sie schreibt?
- Warum ist der „gute Moment" wertvoller als 100 schlechte?
- Warum schäme ich mich für meine Sehnsucht?
- Warum hilft kein Vorsatz „nie wieder"?
- Was unterscheidet Liebe von Sucht — körperlich, nicht moralisch?
- Wie komme ich raus, ohne mich selbst zu verraten?

### 3) Perspektive Therapeut/Coach — Diagnose & Lösung

**a) Diagnose (Ursache)** — strukturiert nach Infografik *Wenn Bindung zur Sucht wird*:
1. **Intermittierende Verstärkung** (Skinner) — Unvorhersehbarkeit konditioniert stärker als Konstanz.
2. **VTA / Nucleus accumbens** (Fisher) — Liebe = Kokainpfad. Bei Trauma-Bonding hyperreaktiv.
3. **Dopamin-Sensitivierung** (Nestler) — schon Micro-Cues (Profil, Lied, Geruch) lösen Craving aus.
4. **Cortisol-Bindung** (Dutton & Painter) — Bindung entsteht *wegen*, nicht trotz des Schmerzes.
5. **Präfrontaler Shutdown** — im Craving fällt die Logik biochemisch aus → keine Willensfrage.

**b) Lösung (Konzept)** — strukturiert nach Infografik *Anatomie des toxischen Kreislaufs* (4 Phasen):
1. **Kälte erkennen** → benennen statt aushalten
2. **Sehnsucht entkoppeln** → ACT-Defusion: „Da ist der Gedanke …"
3. **Jackpot entlarven** → als Konditionierungs-Trigger, nicht als „Beweis der Liebe"
4. **Dopamin-Reset** → Null-Exposition gegenüber Micro-Cues (Profil, Songs, Orte)

---

## Phase B · Roter Faden des neuen Kapitels

Ein einziger Erzählbogen, alles baut aufeinander auf:

```text
HERO  →  HOOK „Warum liebe ich sie?"  →  STORY Mary  →  DIAGNOSE (Infografik 1 als Hotspot)
   →  ÜBUNG 1+2 (Selbst-Diagnose)  →  KREISLAUF (Infografik 2 interaktiv)
   →  ÜBUNG 3+4 (Kreislauf am eigenen Fall)  →  LÖSUNG (ACT + Dopamin-Reset)
   →  ÜBUNG 5+6 (Defusion + Reset-Plan)  →  GOALS  →  WEITER
```

Jede Übung kommt **mit Setup-Satz** („Warum jetzt diese Übung?"), damit nichts unvermittelt erscheint.

---

## Phase C · Interaktivitäts-Inventar (was steht zur Verfügung)

Bevor ich neue Übungen vorschlage, das Repertoire, das wir ohne Neubau nutzen können:

| Pattern | Komponente | Beispielnutzen |
|---|---|---|
| Tag-Cloud Multi-Select | `pill-cloud.tsx` | Warnsignale anklicken |
| FlipCard 2-seitig | `flip-card.tsx` | Rationalisierung ↔ Reframe |
| Slider mit Auswertung | `tap-scale.tsx`, `slider-discrete.tsx`, `likert-scale.tsx` | Sucht-Selbstcheck |
| Sortier-Timeline | `timeline-sorter.tsx` | Kreislauf-Phasen ordnen |
| Hotspot-Bild | `infographic-hotspots.tsx` | Infografik klickbar |
| Reflection 3-Step | `reflection-3-step.tsx` | strukturierte Eingabe |
| Stacked Cards | `stacked-cards.tsx` | Schritt-für-Schritt durchblättern |
| Szenen-Map | `scene-map.tsx` | Jackpot-Momente verorten |
| Atem-Pacer | `breath-pacer.tsx` | 4-7-8 (existiert, KEIN Doppelnutz hier) |
| If-Then-Plan | `if-then-trigger-plan.tsx` | Reset-Pakt |

Neu zu bauen wäre nur: das **Spielautomaten-Wheel** als interaktives SVG (4 Phasen klickbar + eigene Einträge).

---

## Phase D · Vorschlag: 6 neue Übungen mit rotem Faden

Jede Übung hat: **Aufhänger (warum jetzt)** · **Mechanik** · **Output**.

### Übung 1 — „Warum kann ich nicht weg?" Selbst-Check
- **Aufhänger:** Direkt nach dem Story-Block, als Antwort auf die Hook-Frage.
- **Mechanik:** 8 Likert-Aussagen („Ich denke an sie, sobald ich allein bin", „Ein gutes Wort von ihr wiegt eine Woche Kälte auf" …) → Skala 0–4.
- **Output:** Score-Balken + Einordnung („Das ist kein Charakter, das ist Konditionierung").
- **Basiert auf:** `likert-scale.tsx` (vorhanden).

### Übung 2 — Warnsignal-Radar mit Resonanz-Score
- **Aufhänger:** „Bevor wir den Kreislauf öffnen, brauchst du Worte für das, was war."
- **Mechanik:** Pill-Cloud mit 10 Warnsignalen → live Counter + Mikro-Feedback („6 von 10 — kein Zufall, ein Muster"). Danach 3 freie Textfelder „in eigenen Worten".
- **Output:** Persönliches Warnsignal-Profil, lokal gespeichert.
- **Basiert auf:** `pill-cloud.tsx` + `reflection-3-step.tsx`.

### Übung 3 — Kreislauf-Sortierer (Anatomie des toxischen Kreislaufs)
- **Aufhänger:** Direkte Brücke zur Infografik „Anatomie des Kreislaufs": „Sortiere die Phasen so, wie du sie erlebt hast — die richtige Reihenfolge zeigt sich automatisch."
- **Mechanik:** 4 Karten (Kälte · Sehnsucht · Jackpot · Dopamin-Crash) werden vom Nutzer in eine Schleife gezogen; nach dem Ablegen klappt die korrekte Reihenfolge mit Erklärung auf.
- **Output:** „Aha"-Moment + Vorlage für Übung 4.
- **Basiert auf:** `timeline-sorter.tsx` (anpassen auf 4-Phasen-Kreis).

### Übung 4 — Mein Spielautomaten-Protokoll (3 echte Jackpots)
- **Aufhänger:** „Jetzt setzen wir dich an deinen Spielautomaten."
- **Mechanik:** Interaktives SVG-Wheel (4 Knoten leuchten beim Klick) + 3 Einträge mit je 3 Feldern: *Kälte davor · Jackpot · Wirkung auf mich*. Abschluss-Reflexion: „Was erkennst du in deinem Muster?"
- **Output:** Persönlicher Suchtzyklus dokumentiert.
- **Basiert auf:** **neu zu bauender** `JackpotWheel`-Component (SVG, Brand-Tokens) + bestehender ReflectionField.

### Übung 5 — Rationalisierungen entlarven (ACT-Defusion)
- **Aufhänger:** „Jeder Süchtige hat innere Anwältinnen. Lass uns deine kennenlernen."
- **Mechanik:** FlipCards: Vorderseite = Rationalisierung („Niemand versteht mich so wie sie"), Rückseite = ACT-Defusion-Reframe („Da ist der Gedanke 'niemand versteht mich' — er gehört zum Entzug, nicht zur Wahrheit"). Anklicken markiert „kenne ich". Freitextfeld für eigene.
- **Output:** Markierte eigene Anwältinnen + Reframe-Skript.
- **Basiert auf:** `flip-card.tsx`. **Reframe-Texte schreibe ich, du gibst sie frei, bevor sie live gehen.**

### Übung 6 — Mein Dopamin-Reset-Pakt (If-Then-Plan)
- **Aufhänger:** „Wissen reicht nicht — dein Gehirn braucht ein Protokoll."
- **Mechanik:** 5 If-Then-Zeilen: „**Wenn** Profil anschauen-Drang → **dann** Handy 20 Min weglegen + 4-7-8 Atem", etc. Mit Toggle pro Cue (Profil · Songs · Orte · gemeinsame Freunde · Geruch).
- **Output:** Persönlicher Notfall-Pakt, druckbar/speicherbar.
- **Basiert auf:** `if-then-trigger-plan.tsx`.

### Was rausfliegt
- „Welches Signal hat dich am meisten getroffen?" — unvermittelt, ersatzlos.
- Statischer Visualisierungs-Block oben — wandert in die Diagnose-Hotspots.
- 4-7-8-Atem als Übung 4 — gehört in SOS, hier nur als Mini-CTA im Reset-Pakt.

---

## Phase E · Technische Umsetzung (wenn du freigibst)

Geänderte Dateien:
- `src/modules/modul-01.tsx` — komplette Re-Komposition (Hero → Hook → Story → Diagnose mit Hotspots → 6 Übungen → Lösung → Goals)
- Neu: `src/components/exercise/jackpot-wheel.tsx` (SVG, Brand-Tokens)
- Neu: `src/components/exercise/cycle-sorter.tsx` (4-Phasen-Schleifen-Sortierer) — falls `timeline-sorter` nicht passt
- Neu: `src/components/exercise/why-cant-i-leave.tsx` (Likert-Wrapper mit Score-Balken)

Vorhandenes bleibt unverändert.

---

## Was ich von dir brauche, bevor ich anfange

1. **Freigabe für die 6-Übungs-Struktur** (oder Änderungswünsche an einzelnen Übungen).
2. **Reframe-Texte (Übung 5):** Soll ich sie vorab im Chat zur Korrektur liefern, oder direkt einbauen und du korrigierst live?
3. **Umgang mit dem bestehenden Modul 02:** komplett ersetzen, oder Schritt-für-Schritt umbauen mit jeweils Zwischenfreigabe?
