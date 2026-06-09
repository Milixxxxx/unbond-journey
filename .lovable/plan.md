# Schritt 01 · SOS — Soll/Ist-Abgleich

## Was die zwei Uploads enthalten

**Schritt_01_final.html** (138 Zeilen, „Final"-Variante, Content-only Fragment)
Hero · Krisen-Banner · Story „Mary 3:14 Uhr" · Diagnose Amygdala-Hijacking · Lösung TIPP-Protokoll + TIPP-Bild · Übung 1 TIPP-Notfallplan (4 Textareas) · Übung 2 Urge-Surfing (2 Textareas) · Übung 3 STOPP-Technik (1 Textarea) · Übung 4 High-Load-Distraction (Anleitung statisch) · Deep Dive 90-Sekunden-Regel · Meditation YouTube · 5 Transformationsziele.

**Schritt_01_claude.html** (1127 Zeilen, „Mega"-Variante mit eigenem CSS/JS)
= alles aus „final" + zwei zusätzliche Mikro-Tools:
- **Übung 1b · Paced Breathing 4-7-8 Timer** (animierter SVG-Ring, Start-Button, Atemzug-Zähler)
- **Übung 1c · Drang-Intensitäts-Slider 0–10** (vor/nach dem Atem-Timer messen, persistent gespeichert)

Inhaltlich (Story, Diagnose, Lösung, Deep Dive, Meditation, Ziele) sind beide Varianten identisch — claude bringt nur die zwei zusätzlichen interaktiven Werkzeuge.

## Aktueller Stand: `src/modules/sos-soforthilfe.tsx`

Bereits implementiert (mit Komponenten aus dem Design-System):
ChapterIntro · CrisisBanner · Story (mit TextCollapse) · Diagnose · Lösung mit 4 TIPP-Karten · Ü1 TIPP-Notfallplan (Reflection3Step + Field) · Ü2 Urge-Surfing (UrgeSurfWave-Komponente + 3-Step-Reflexion) · Ü3 STOPP (CollapsibleBox + PillCloud Ersatzhandlungen + Reflexion) · Ü4 High-Load-Distraction (eigene Komponente) · Deep Dive 90-Sek · MeditationCard · zusätzlich DailyTracker („Selbst-Monitoring") · Notfall-Kontaktliste A/B/C · ChecklistGoals (5 Ziele).

## Gemeinsamkeiten / Unterschiede (tabellarisch)

| Bereich | final.html | claude.html | App (sos-soforthilfe.tsx) | Status & Konzept |
|---|---|---|---|---|
| Hero + Intro | ✓ | ✓ | ✓ ChapterIntro | **identisch** — nichts zu tun |
| Krisen-Banner | ✓ | ✓ | ✓ CrisisBanner | **identisch** |
| Story „3:14 Uhr" | Volltext | Volltext | Volltext + TextCollapse | **identisch** (Wortlaut 1:1, Reveal-Darstellung) |
| Diagnose Amygdala-Hijacking | 3 Absätze | 3 Absätze | 3 Absätze + GlossarTerm | **identisch +** Tooltip-Erweiterung |
| Lösung TIPP-Protokoll | Text + Infografik-Bild | Text + Infografik-Bild | 4 TIPP-Karten (Snowflake/Activity/Wind/Pause) | **App stärker** — Karten ersetzen statisches Bild interaktiv. *Konzept: optional zusätzlich Hotspot-Infografik des Original-Bilds (`infographic-hotspots`) als visueller Anker.* |
| Ü1 TIPP-Notfallplan | 4 Textareas | 4 Textareas | Reflection3Step + Field, autosave | **identisch** |
| **Ü1b Paced Breathing 4-7-8 Timer** | — | ✓ animierter Ring + Start/Stop + Atem-Zähler | **fehlt** | **NEU bauen:** `BreathPacer`-Komponente existiert bereits → in Ü1 direkt unter den Textareas einsetzen, accent=bordeaux, Modus 4-7-8, Zykluszähler, optional Vibration. |
| **Ü1c Drang-Intensitäts-Slider 0–10** | — | ✓ Slider + Anzeige + Persistenz | **fehlt** | **NEU bauen:** kleine Komponente `IntensitätsMessungVorNach` (oder bestehende `SliderDiscrete` 2× nutzen) — zwei Slider „vor / nach Atem-Timer", Delta wird automatisch berechnet & farblich (sage bei ≥−2) hervorgehoben, persistiert per `useModuleProgress`. |
| Ü2 Urge-Surfing | 2 Textareas | 2 Textareas | UrgeSurfWave-Animation + 3-Step-Reflexion | **App stärker** (interaktive Welle) |
| Ü3 STOPP-Technik | 1 Textarea | 1 Textarea | CollapsibleBox + PillCloud (10 Ersatzhandlungen) + Reflexion | **App stärker** |
| Ü4 High-Load-Distraction | statisch | statisch | eigene HighLoadDistraction-Komponente | **App stärker** |
| Deep Dive 90-Sek | ✓ | ✓ | ✓ in DeepDiveIntro | **identisch** |
| Meditation YouTube | ✓ Link | ✓ Link | MeditationCard mit eingebettetem Player | **App stärker** |
| Selbst-Monitoring (Tracker) | — | — | DailyTracker | **App-Plus aus Fundament.txt** — bleibt |
| Notfall-Kontaktliste A/B/C | — | — | 3 ReflectionInputs + Fallback-Hinweis | **App-Plus** — bleibt |
| 5 Transformationsziele | ✓ | ✓ | ChecklistGoals (gleicher Wortlaut) | **identisch** |

**Fazit:** Inhaltlich ist Schritt 01 zu ~95 % deckungsgleich. Es fehlen genau **zwei Mikro-Tools** aus der claude-Variante (4-7-8-Atem-Timer und Drang-Intensitäts-Slider vor/nach).

## Mini-Konzept für die zwei fehlenden Übungen (Interaktivitäts-Doktrin konform)

### Ü1b · 4-7-8 Atem-Timer
- Position: direkt unterhalb des TIPP-Notfallplans (visuell als **Übung 1b**, sage-akzentuierter Rahmen, damit sie sich vom bordeaux-Plan abhebt).
- Komponente: bestehende `BreathPacer` mit Preset `{ in: 4, hold: 7, out: 8, cycles: 4 }`.
- Interaktion: großer Start-Button → SVG-Ring atmet sichtbar mit, Phase-Label wechselt („Einatmen 4 · Halten 7 · Ausatmen 8"), Zykluszähler unten, am Ende Mikro-Feedback („4 Atemzüge — dein Vagus ist aktiviert").
- Persistenz: letzter Lauf wird gespeichert (Datum + Zykluszahl), Streak-Badge nach 3 Tagen.

### Ü1c · Drang-Intensität vor/nach
- Position: direkt **unter** Ü1b — narrativ verkoppelt („Miss vor dem Atem-Timer und danach erneut").
- Komponente: schlanker Wrapper um zwei `SliderDiscrete` (0–10), darunter ein „Delta"-Chip:
  - Δ ≥ −1 → grauer Hinweis „Versuch's nochmal — gib dem Vagus 2 Minuten."
  - Δ ≤ −2 → sage-Karte „Spürbarer Drop — genau das ist Selbstwirksamkeit."
- Persistenz: Verlauf der Δ-Werte in `useModuleProgress` → später optional Mini-Chart im Dashboard.

### Globale Wirkung
- Mit Ü1b + Ü1c wird das TIPP-Protokoll vom Wissens-Block zum **erlebten** Werkzeug — passend zur Interaction-Doctrine („echte Nutzerhandlungen statt Deko-Karten").
- Die 5 Transformationsziele bleiben unverändert (kein Refactor des Checklisten-Standes nötig).

## Vorschlag fürs Vorgehen (nach deiner Freigabe)
1. `BreathPacer`-Komponente prüfen, fehlende Props (Phase-Labels, cycles-Callback) ergänzen.
2. Neue Komponente `intensity-pre-post.tsx` (zwei Slider + Delta-Feedback) im `exercise/`-Ordner.
3. Beide unter Ü1 in `sos-soforthilfe.tsx` einhängen — keine anderen Sections anfassen.
4. Visueller QA-Check via Preview.

Sag Bescheid, ob ich genau so umsetzen soll oder du an einer Stelle anders priorisierst.
