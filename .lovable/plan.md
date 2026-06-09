Ich habe beide Uploads jetzt vollständig gelesen (`Scchritt_01.txt`, 116 Z. — und `Schritt_2_SOS.html`, 1127 Z., relevant: SCHRITT-1-Block Z. 343–542). Plan in zwei Schritten:

---

## Schritt A · Knowledge-Datei aktualisieren

Datei: `.lovable/memory/design/chapter-element-order.md` — komplett überschreiben mit der neuen, verbindlichen Reihenfolge:

1. **Kapitelthema / Name** (Hero mit Schritt-Nummer + Titel)
2. **Einleitende Sätze** — Schwerpunkte des Kapitels in 2–3 Sätzen
3. **Mary & Sandra Story** — **Bild links, Text umfließend** (Grid 200px / 1fr). Vor der Story KEIN anderes Bild im Kapitel.
4. **Diagnose / Problem** — Accent Sage `#2D4F3C`, 6px-Border links
5. **Lösung / Konzept** — Accent Terracotta `#C4836E`, 6px-Border links
6. **Wissenschaftlicher Deep Dive** — collapsible „Wenn du tiefer verstehen willst …", Quellenangaben mit Autor + Jahr
7. **Infografik** (falls vorhanden) — Grafik 80 % Seitenbreite, zentriert; erklärender Text DARUNTER (nicht daneben)
8. **Mindestens 3 interaktive Übungen** — jede mit kurzem Warum-Text; bevorzugt aktive Komponenten (Timer, Slider, Pills, Reflection) statt nur Textareas. Accent Gold `#D4A574`, 6px-Border links
9. **Begleitende Meditation** — `MeditationCard` mit YouTube-Link, Quelle, Dauer
10. **Transformationsziele** (3 Stück, an Winding-Path gekoppelt) — Accent Mauve `#9B7FA4`, 6px-Border links

Zusätzlich in der Knowledge-Datei festhalten:
- Reihenfolge ist verbindlich für alle Module 01–10 + Bonus D/E/F
- Inhalte werden vom User geliefert — nichts erfinden, bei Lücken nachfragen
- Die 3 Transformationsziele dürfen NIE umsortiert oder ersetzt werden (Kopplung an `useJourneyProgress`)

Die alte Memory `mem://index.md` muss nicht angepasst werden — sie verweist bereits auf diese Datei.

---

## Schritt B · Vergleichstabelle für Kapitel SOS (Schritt 01)

Quellen für den Vergleich:
- **Code aktuell**: `src/modules/sos-soforthilfe.tsx` (478 Z.)
- **Upload 1**: `Scchritt_01.txt` (Fragment ab Story)
- **Upload 2**: `Schritt_2_SOS.html` Z. 343–542 (SCHRITT-1-Block)

| # | Pflicht-Element | Im Code (`sos-soforthilfe.tsx`) | In den Uploads zusätzlich | Empfehlung |
|---|---|---|---|---|
| 1 | Kapitelthema/Name | ✓ „Schritt 01 · SOS: Akute Stabilisierung" | identisch | OK |
| 2 | Einleitende Sätze | ✓ 2 Absätze in `ChapterIntro` | Upload2 zusätzlich: 3 Quick-Tool-Karten direkt unter Hero (SOS-rot / Atmung / Merke 90 Sek) | **Hinzufügen** — kompakte Quick-Tool-Trio gibt sofort handlungsfähiges Notfall-Triple |
| 3 | Story mit Bild links, Text umfließend | ✓ Grid 200px/1fr, `ZoomableImage`, Drop-Cap-Style fehlt | Upload2: `story-dropcap` (ersten Absatz mit Drop-Cap) | **Hinzufügen** — Drop-Cap-Klasse für ersten Story-Absatz |
| 4 | Diagnose / Problem | ✓ Amygdala-Hijacking, vollständig | identisch | OK |
| 5 | Lösung / Konzept | ✓ TIPP-Erklärung + 4 `TippCard`s | identisch | OK |
| 6 | Wissenschaftlicher Deep Dive | ✓ 90-Sek-Regel in `DeepDiveIntro` collapsible | identisch | OK |
| 7 | Infografik (80 % breit, Text drunter) | ✗ **fehlt** — TIPP-Bild nicht eingebunden | Upload1/2: `assets/TIPP_1774948999615.png` (75 % breit, Bildunterschrift, Quellenangabe) | **Hinzufügen** — TIPP-Infografik als `InfographicImage` + Caption + Quelle |
| 8a | Übung 1 · TIPP-Notfallplan | ✓ `Reflection3Step` + 1 `ReflectionField` | identisch | OK |
| 8b | Übung 1b · 4-7-8 Atem-Timer (Breath-Pacer) | ✗ **fehlt** | Upload2 Z. 426–445: animierter SVG-Atem-Ring mit Start-Button, Zyklus-Zähler | **Hinzufügen** — `BreathPacer`-Komponente existiert bereits (`src/components/exercise/breath-pacer.tsx`) → einfügen |
| 8c | Übung 1c · Drang-Intensität Slider (vor/nach) | ✗ **fehlt** | Upload2 Z. 447–462: Slider 0–10 mit Vorher/Nachher-Vergleich | **Hinzufügen** — `SliderDiscrete` oder `TapScale` mit Vorher-/Nachher-Erfassung |
| 8d | Übung 2 · Urge Surfing | ✓ `UrgeSurfWave` + `Reflection3Step` | identisch (Upload nur textuell) | OK — Code ist reicher |
| 8e | Übung 3 · STOPP-Technik | ✓ `PillCloud` mit 10 Ersatzhandlungen + Reflection | identisch | OK — Code ist reicher |
| 8f | Übung 4 · High-Load Distraction | ✓ `HighLoadDistraction`-Komponente | identisch | OK |
| 9 | Meditation | ✓ `MeditationCard` ChakraTunes | identisch | OK |
| 10 | Transformationsziele | ✓ 5 Ziele in `ChecklistGoals` | Upload nennt 5 — Memory schreibt 3 vor (Winding-Path) | **Klären**: aktueller Code hat 5, Winding-Path erwartet 3 — Diskrepanz prüfen |
| Bonus | Notfall-Kontaktliste (A/B/C) | ✓ 3 `ReflectionInput` + Telefonseelsorge-Hinweis | nicht im Upload | OK — Code-Plus, behalten |
| Bonus | Tägliches Nervensystem-Tracking | ✓ `DailyTracker` | nicht im Upload | OK — Code-Plus, behalten |

### Zusammenfassung Lücken
Drei **fehlende** Pflichtelemente im SOS-Modul:
1. **Quick-Tool-Trio** unter dem Hero (3 Mini-Karten)
2. **TIPP-Infografik** (Bild + Caption + Quelle)
3. **Atem-Timer 4-7-8** (`BreathPacer`) + **Drang-Slider** vor/nach

### Ein offener Klärungspunkt
- **Transformationsziele 3 vs. 5**: Memory schreibt 3 pro Kapitel vor (Winding-Path-Kopplung), Code und Upload haben 5. → in Schritt C (separater Turn) entscheiden.

---

## Was passiert nicht in diesem Plan
- Keine Code-Änderung am SOS-Modul jetzt — erst nach deiner Freigabe der Tabelle.
- Andere Kapitel werden später Schritt für Schritt analog geprüft (M01, M02 …).
- Die Datei-↔-Schritt-Off-by-one-Regel bleibt unverändert.
