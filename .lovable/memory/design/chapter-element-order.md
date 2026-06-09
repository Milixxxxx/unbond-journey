---
name: Kapitel-Elementordnung & Accent-Farben
description: Verbindliche Reihenfolge aller Kapitelelemente (Hero → Story → Diagnose → Lösung → Deep Dive → Infografik → Übungen → Meditation → Transformationsziele) inkl. Accent-Farben, Layoutregeln und Mindestanforderungen.
type: design
---

# Verbindliche Reihenfolge der Kapitelelemente

Gilt für ALLE Module (SOS / 01–10 / Bonus D, E, F). Diese Reihenfolge darf NICHT umsortiert werden.

| # | Element | Regel / Layout | Accent | Border-Stripe |
|---|---|---|---|---|
| 1 | **Kapitelthema / Name** | Hero mit Schritt-Nummer + Titel + 1-Satz-Leitmotiv | — | — |
| 2 | **Einleitende Sätze** | 2–3 Sätze: Schwerpunkte des Kapitels. Direkt unter Hero. | — | — |
| 3 | **Mary & Sandra Story (mit Bild)** | **Bild LINKS, Text umfließend** (Grid 200px / 1fr oder `float-left`). Erster Absatz mit Drop-Cap. **VOR der Story darf KEIN anderes Bild im Kapitel stehen.** | — | — |
| 4 | **Diagnose / Problem** | Was passiert neurobiologisch / psychologisch? | Sage `#2D4F3C` / `var(--sage)` | 6px links |
| 5 | **Lösung / Konzept** | Evidenzbasiertes Modell, Quellen mit Autor+Jahr | Terracotta `#C4836E` / `var(--terracotta)` | 6px links |
| 6 | **Wissenschaftlicher Deep Dive** | Collapsible „Wenn du tiefer verstehen willst …". Optional zu öffnen, Quellen Pflicht. | dunkles Sage / Graphite | 6px links |
| 7 | **Infografik (falls vorhanden)** | Grafik **80 % Seitenbreite, zentriert**. Erklärender Text + Caption + Quelle **DARUNTER**, nicht daneben. | — | — |
| 8 | **Mindestens 3 interaktive Übungen** | Jede Übung mit kurzem Warum-Text. **Aktive Komponenten bevorzugen** (Breath-Pacer, Slider, PillCloud, UrgeSurfWave, Timer …) — nicht nur Textareas. Speicherung modulbezogen via `useModuleProgress`. | Warmes Gold `#D4A574` | 6px links |
| 9 | **Begleitende Meditation** | `MeditationCard` mit YouTube-Link, Quelle, Dauer | Mauve / dark | — |
| 10 | **Transformationsziele** | **Genau 3 Stück**, an `useJourneyProgress` / Winding-Path gekoppelt. Wortlaut darf NIE geändert, umsortiert oder ersetzt werden. | Mauve `#9B7FA4` / `var(--mauve)` | 6px links |

## Kartenstil pro Element
- Linke 6px-Border-Stripe in der Element-Farbe
- Label oben in Uppercase, letter-spacing 2px
- Body Lato 16/1.8, ruhige Typografie
- Quellenangaben in `text-xs italic text-graphite/65`

## Story-Bild-Regel (Element 3)
- Bild kommt **immer aus dem Buch / vom User** — niemals erfinden
- Layout: Bild links (≈200 px), Text rechts umfließend
- Bildunterschrift in `figcaption`-Stil, klein, kursiv
- Erster Absatz mit Drop-Cap (`story-dropcap`)
- **Vor der Story KEIN anderes Kapitelbild** — Story ist das visuelle Erstkontakt-Element

## Übungs-Regel (Element 8)
- Mindestens 3 Übungen, mehr ist erlaubt (SOS = 4 Übungen)
- Jede Übung soll möglichst **interaktiv** sein (Timer, Slider, Tap-Scale, Reveal, PillCloud, Sortier-Komponenten)
- Reine Reflexions-Textareas nur in Kombination mit aktiven Elementen
- Persistenz IMMER über `useModuleProgress(slug)` — niemals globale localStorage-Keys

## Optionale Zusatzelemente (modulabhängig)
- Quick-Tool-Trio direkt unter Hero (3 kompakte Notfall-Karten) — empfohlen bei SOS-/Krisen-Kapiteln
- Notfall-Kontaktliste (A Wärme / B Struktur / C Professionell)
- Tägliches Selbst-Monitoring (`DailyTracker`)
- Glossar-Begriffe via `GlossarTerm`-Wrapper
- 10-Warnsignale-Grid o. ä. didaktische Listen

## Verboten
- Reihenfolge der 10 Hauptelemente ändern
- Farb-Zuordnung der Stripes ändern
- Inhalte erfinden, wenn der User keine geliefert hat → **nachfragen**
- Die 3 Transformationsziele umsortieren, ersetzen oder zurücksetzen
- Bild VOR der Story platzieren

## Inhaltliche Quelle
Single source of truth: `user-uploads://UNBOND_Final_02-2.html`. Alle anderen HTML-Versionen sind veraltete Drafts. Bei Lücken oder Widersprüchen: beim User nachfragen, niemals selbst ergänzen.
