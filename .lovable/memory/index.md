# Memory: index.md
Updated: today

# Project Memory

## Core
Single source of truth for ALL book content: user-uploads://UNBOND_Final_02-2.html (7105 lines). Ignore all other versions (UNBOND_Final_v6.html, bonusE_updated.html, Gaslighting Decoder.html, LANDINGPAGE, SCHRITT_4_FINAL.html, etc.) — they are outdated drafts.
Never restructure, rename, reorder, or delete chapters without explicit user approval. Stick closely to the book's existing structure and content. Interactivity/gimmicks are welcome additions.
**RULE NR. 1**: Mary-&-Sandra-Story-Texte werden NIE verändert, gekürzt oder paraphrasiert. Wortlaut ist sakrosankt. Siehe mem://content/mary-sandra-canon.
When asking the user a question, always offer 3 concrete options.
Chapter structure (Stand: gerenamed 06/2026 per Screenshot): 01 SOS: Stabilisierung · 02 Trauma-Bonding · 03 Rosa-Brille · 04 No Contact · 05 Trigger entmachten · 06 Körper zuerst · 07 Suchtmuster brechen · 08 WLW-Kontext · 09 Bindungsmuster · 10 Identität & Abschluss · Bonus D Behörden · Bonus E Warum · Bonus F Trauer. Off-by-one Datei-Mapping bleibt: Schritt 01 = sos-soforthilfe.tsx, Schritt 02 = modul-01.tsx, …, Schritt 10 = modul-09.tsx. (modul-10.tsx ist deprecated / nicht in MODULES-Liste.) "00 Fundament" und "✦ Abschluss & Tools" aus dem Template wurden bewusst NICHT übernommen.
**Icons**: Nur Lucide-Outline-Icons. Keine bunten Emojis in funktionalen UI-Elementen. Siehe mem://design/icon-style.
**Bilder in Story-Boxen**: `<StoryPortrait>` (src/components/story-portrait.tsx). Float-Layout mit Textumfluss auf Desktop, voller Breite auf Mobile. Innerhalb `<SectionBlock kind="story">`, immer am Anfang des Children-Bereichs + Clearfix-Div am Ende.
**Mary-&-Sandra-Bilder**: IMMER `float-left` neben dem dazugehörigen Textabschnitt (mit Textumfluss rechts), nie volle Breite, nie zentriert. **Genau EIN Mary-&-Sandra-Bild pro Geschichte/Seite** — nicht mehrere stapeln. Mobile fällt auf Block-Layout zurück.
**Infografiken**: `<InfoGraphicBlock>` / `<InfographicImage>` (src/components/infographic-block.tsx · src/components/infographic-image.tsx). Tap-to-Zoom-Lightbox, Cream-Frame. NIE volle Spaltenbreite — max-w 80%, mx-auto. Standardposition: NACH dem Lösungsteil.
Mikro-Interaktion vor Lesen: Textblöcke über 4 Sätze in interaktive Muster übersetzen. Siehe mem://design/interaction-doctrine.
Dashboard-Hauptvisual ist der Winding-Path-Journey (NICHT der Healing-Tree). 10 Kapitel, je 3 Transformationsziele, alle 3 nötig zum Aufleuchten. Checkbox-Stand NIE zurücksetzen.
**Design-Foundation (ZIP)**: Montserrat 800 uppercase + Lato 1.8. Brand-Tokens bordeaux/sage/mauve/terracotta/orange-soft/cream. Glass-Utilities `.glass` (60%) + `.glass-strong` (75%). Body hat fixed atmospheric Mauve→Sage→Cream-Gradient. Headlines global uppercase + 0.04em tracking. Siehe mem://design/zip-design-tokens.

## Memories
- [Mary-Sandra-Kanon](mem://content/mary-sandra-canon) — Wortlaut der Story-Texte (read-only)
- [Icon Style](mem://design/icon-style) — Lucide-only, keine Emojis
- [ExerciseFrame Style](mem://design/exercise-frame-style) — keine Akzentbalken
- [Micro-Feedback](mem://design/micro-feedback) — Vibe-Check-Patterns
- [Modul 01 Stable](mem://modules/modul-01-stable) — Lesbarkeits-Snapshot
- [Modul 01 Fallback](mem://modules/modul-01-fallback) — Notfall-Wiederherstellung
- [Phase 2 Briefing](mem://phase2-briefing) — Roadmap
- [Interaction Doctrine](mem://design/interaction-doctrine) — Interaktive Regeln statt Textwüsten
- [Modul 02 Stable](mem://modules/modul-02-stable) — Referenz für interaktive Diagnose-/Übungsdichte
- [Winding-Path-Journey](mem://features/winding-path-journey) — Dashboard-Pfad mit 10 Knoten, 3 Goals/Kapitel
- [ZIP-Design-Tokens](mem://design/zip-design-tokens) — Übernommene Design-Foundation (Fonts, Tokens, Glass-Utilities, Body-Gradient)
- [Kapitel-Elementordnung](mem://design/chapter-element-order) — Verbindliche Reihenfolge Diagnose→Lösung→Übungen→Transformationsziele + Accent-Farben
