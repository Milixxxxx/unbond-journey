# Text-Pass: Seriös, präzise, buchnah

## Ziel
Alle aktuell sichtbaren Texte werden gegen die Master-Datei `UNBOND_Final_02-2.html` (7105 Zeilen) abgeglichen. Umgangssprache raus, „gefühlte" Behauptungen raus, exklusiver Buchton rein — aber ohne Fachjargon-Wand. Ganze Sätze, Keywords aus dem Buch.

## Tonalitäts-Regeln (gelten überall)
- Keine Umgangssprache, keine Floskeln ("aus den Fingern gesogen", "krass", "voll", "irgendwie").
- Keine reißerischen Behauptungen ohne Bezug. Wo Studien/Modelle gemeint sind: kurz benennen (z. B. „DBT", „polyvagale Theorie", „Bolte Taylor"), nicht erklären.
- Fachbegriffe nur, wenn das Buch sie selbst nutzt — dann einmal kurz auf Deutsch eingeordnet.
- „Du"-Form, ruhig, klar, traumasensibel. Aktive, kurze Hauptsätze. Keine Marketing-Sprache.
- Headlines: Substantiv-getrieben, max. 6 Wörter. Body: 2–4 Sätze pro Absatz.

## Scope (was angefasst wird)

1. **Rahmen / Chrome**
   - `src/components/site-header.tsx` (Labels)
   - `src/components/module-top-bar.tsx`, `module-bottom-bar.tsx`
   - `src/components/crisis-banner.tsx`, `sos-floating-button.tsx`
   - `src/components/chapter-intro.tsx`, `deep-dive-intro.tsx`, `section-block.tsx` Standard-Eyebrows

2. **Dashboard & Vorlauf-Routen**
   - `src/routes/dashboard.tsx` — Eyebrow, H1, Tagesimpuls-Karte, Fortschritt, „Weiter mit"-CTA, beide unteren Hinweis-Karten („Deine Daten bleiben bei dir", „Wichtiger Hinweis")
   - `src/routes/willkommen.tsx`, `vorwort.tsx`, `poem.tsx`, `inhalt.tsx`, `einleitung.tsx`
   - `src/components/winding-path-journey.tsx` — Subline „Atme. Geh in deinem Tempo.", Erläuterungstext, Knoten-Labels
   - `src/lib/journey-goals.ts` — Ziel-Formulierungen (3 pro Kapitel) gegen Buchkapitel-Überschriften prüfen

3. **Schritt 01 (SOS)** — `src/modules/sos-soforthilfe.tsx`
   - ChapterIntro, Story (Mary), Diagnose-Texte (Amygdala-Hijack), TIPP-Block, Übungs-Subtitles, Deep-Dive (90-Sek-Regel), Checkliste

4. **Schritt 02 (Trauma-Bonding)** — `src/modules/modul-01.tsx`
   - ChapterIntro, Story, FlipCard-Studien (Fisher, Earp, Carnes, Langeslag, Grant), QuickToolsTrio-Untertitel, Übungs-Beschriftungen, Checkliste

## Vorgehen
- Ich lese die Master-Datei kapitelweise (SOS-Block + Trauma-Bonding-Block + Vorlauf-Block) und ziehe die tragenden Keywords/Definitionen heraus.
- Pro Datei: ein Edit-Batch mit Sprach-Pass — keine Struktur-Änderungen, keine neuen Komponenten, keine entfernten Übungen.
- Memory-Regel „nie Kapitel umsortieren" bleibt unangetastet.

## Lieferung
- Zwei Commits-Schritte, damit du gegenlesen kannst:
  1. Rahmen + Dashboard + Vorlauf
  2. Schritt 01 + Schritt 02
- Danach kurze Liste der bewussten Wortwahl-Entscheidungen, falls du etwas zurückdrehen willst.

## Was NICHT passiert
- Keine neuen Inhalte, keine neuen Kapitel, kein Re-Theming, keine Layout-Änderungen.
- Bilder, Routen, Komponenten-Logik bleiben unberührt.
- Module 03–10 + Bonus D/E/F sind noch nicht live ausgearbeitet — die werden weiterhin kapitelweise mit dir freigegeben.
