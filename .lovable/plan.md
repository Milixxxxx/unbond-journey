
Der User liefert konkreten Buchinhalt (Einleitung, wissenschaftlicher Aufbau, 4-Phasen-Modell, Mary&Sandra-Vorstellung, Toxicometer-Test, Kapitel 0 "Fundament", Modul 01 "SOS"). Frage: Kann das übernommen werden in anderer Aufmachung? → Ja, das ist Gold für Schritt 1+2.

Strategie: Statt Modul 01 "trocken" mit Demo-Texten zu bauen, nehme ich diese realen Inhalte als Referenz für die Beispielseiten. Außerdem ergänzen sich die Inhalte perfekt mit dem Plan – der User liefert sogar selbst die 6-Elemente-Logik nochmal bestätigt, plus zusätzliche Bausteine die ich einbauen sollte:
- Toxicometer (25-Fragen-Test als Onboarding-Routing)
- Routing-Frage "Beziehung beendet vs. noch drin" 
- Kapitel 0 "Fundament" (Vor-Modul)
- 4-Phasen-Heilungsweg (Visualisierung im Dashboard!)
- Krisen-Banner global
- Glossar-Tooltips inline

Das erweitert den ursprünglichen Plan sinnvoll. Ich präsentiere die Erweiterung kompakt.

---

## Erweiterter Plan: Inhalte aus deinem Manuskript einarbeiten

Ja — die Inhalte passen perfekt und ich übernehme sie in völlig neuer, interaktiver Aufmachung. Ich erweitere den Schritt-1+2-Plan an folgenden Stellen:

### Was zusätzlich in die App-Hülle wandert

**1. Onboarding-Flow (vor dem Dashboard)**
- Begrüßung → Routing-Frage „Beziehung beendet?" / „Noch drin?" → optional Toxicometer (25 Fragen, Step-by-Step, ein Frage pro Screen, Skala 0–5, Progress-Bar) → Auswertungs-Screen mit Ergebnis-Gauge → Empfehlung „Starte mit Kapitel 0" oder „Starte mit Modul X"
- Ergebnis & Routing werden in `profiles` gespeichert, beeinflussen Dashboard-Reihenfolge

**2. Dashboard-Erweiterung**
- Vertikaler Pfad bekommt **vier Phasen-Sektionen** statt nur 10 lose Module:
  - Phase 1: Akutstabilisierung (Kapitel 0, Modul 01, 02)
  - Phase 2: Kognitive Entzauberung (03, 04)
  - Phase 3: Emotionsregulation (05, 06)
  - Phase 4: Identitätsrekonstruktion (07–10)
- „Kapitel 0 — Fundament" wird als eigene Station vor Modul 01 dargestellt
- Toxicometer-Score + Phase-Status sichtbar im Dashboard-Header

**3. Globale Komponenten**
- **Krisen-Banner** (immer sichtbar in Modulen): Hilfetelefon 0800 116 016 + Telefonseelsorge 0800 111 0 111
- **Floating SOS-Button** (Bordeaux/Terracotta) → öffnet Modal mit Atemkreis + Notfall-Nummern
- **Glossar-Tooltips**: Inline-Komponente `<GlossarTerm term="..." definition="...">` für Begriffe wie Trauma-Bonding, Polyvagal, Negative Reappraisal, etc. — Hover/Tap zeigt Definition

### Was die Inhalte für Schritt 2 konkret bedeuten

Statt Modul 01 mit Lorem-Ipsum baue ich es **mit deinen echten Inhalten** als Referenzimplementierung:

**Einleitungs-Seite** (`/willkommen` oder integriert in Onboarding):
- „Was ist UNBOND" — 4 Intro-Items als Glass-Cards (Wissenschaftlich, Queer&inklusiv, Daten lokal, Wichtiger Hinweis)
- 6-Elemente-Aufbau als animierte Schritt-für-Schritt-Erklärung
- 5 Säulen als interaktives Karussell/Grid (CBT, ACT, Polyvagal, DBT, Detached Mindfulness)
- Mary&Sandra-Vorstellung mit Bild-Platzhalter (zoombar)

**Kapitel 0 — Fundament:**
- Story (Mary, 3:14 Uhr Kontaktabbruch) als animiertes Erzählmodul
- Diagnose-Box (Sage-Green) mit Glossar-Tooltips
- Lösung
- 2 Übungen mit Auto-Save:
  - Nervensystem-Check (3 Slider: Schlaf / Anspannung / Drang) mit History-Chart
  - Notfall-Kontaktliste (3 Felder: A Wärme / B Struktur / C Professionell)
- Deep Dive (kollabierbar)

**Modul 01 — SOS:**
- Story (Mary, 3 Uhr Küchenboden) animiert
- Diagnose: Amygdala-Hijacking
- Lösung: TIPP-Protokoll als interaktive 4-Schritt-Karte (T·I·P·P)
- 4 Übungen (du lieferst 4 — ich nehme die 4 statt der ursprünglich geplanten 3, weil sie alle stark sind):
  1. **TIPP-Notfallplan** — 4 Reflexionsfelder, Auto-Save
  2. **Urge Surfing** — animierte Wellen-Visualisierung + 2 Reflexionsfelder
  3. **STOPP-Technik** — Liste „10 Ersatzhandlungen" mit Add/Remove
  4. **High-Load Distraction** — interaktiver 20-Min-Timer + 3 simultane Aufgaben mit Tap-to-track
- Deep Dive: 90-Sekunden-Regel (kollabierbar)
- Begleitende Meditation als Audio-Card mit YouTube-Link
- Checkliste: 5 Transformationsziele, Badge-Animation bei ≥3/5

### Doppelungen, die ich auflöse

- **Story-Szene 3:14 Uhr (Einleitung) vs. 3 Uhr Küchenboden (Modul 01)** sind sehr ähnlich — ich behalte beide, aber differenziere visuell: Einleitung = „Was passiert biologisch?", Modul 01 = „Wie reagiere ich?"
- **Krisen-Banner** wird einmal als globale Komponente gebaut, nicht pro Modul wiederholt
- **Glossar-Begriffe** (Trauma-Bonding, intermittierende Verstärkung, Amygdala etc.) leben in einer zentralen `glossar.ts` Datei → Tooltips überall konsistent + spätere Glossar-Seite generiert sich daraus automatisch

### Was ich noch von dir brauche (nicht jetzt, später)

- Bilder von Mary & Sandra (für jetzt Platzhalter mit Lupe-Icon)
- Toxicometer-Fragen (25 Stück) — falls du sie schon hast, gerne, sonst Platzhalter-Fragen
- Hintergrundbild für Fixed-Background

### Reihenfolge der Umsetzung

1. Design-System & globale Layouts (Bottom-Bar, SOS-Button, Krisen-Banner, Glassmorphism, Glossar-Komponente)
2. Auth (Magic-Link, EU-Trust)
3. Onboarding (Routing-Frage + Toxicometer-Stub mit 5 Demo-Fragen)
4. Dashboard mit 4-Phasen-Pfad
5. Einleitungsseite mit deinen Inhalten
6. Kapitel 0 voll spielbar
7. Modul 01 voll spielbar (alle 4 Übungen interaktiv)
8. Module 02–10 als „locked" Stationen mit Titel-Platzhaltern

Ergebnis: Du kannst die App durchklicken vom Login bis zur Badge-Animation — und siehst genau, wie du später Inhalte für Module 02–10 kapitelweise „injizieren" kannst.

Soll ich so loslegen?
