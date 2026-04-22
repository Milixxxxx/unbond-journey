# Memory: index.md
Updated: today

# Project Memory

## Core
Single source of truth for ALL book content: user-uploads://UNBOND_Final_02-2.html (7105 lines). Ignore all other versions (UNBOND_Final_v6.html, bonusE_updated.html, Gaslighting Decoder.html, LANDINGPAGE, SCHRITT_4_FINAL.html, etc.) — they are outdated drafts.
Never restructure, rename, reorder, or delete chapters without explicit user approval. Stick closely to the book's existing structure and content. Interactivity/gimmicks are welcome additions.
**RULE NR. 1**: Mary-&-Sandra-Story-Texte werden NIE verändert, gekürzt oder paraphrasiert. Wortlaut ist sakrosankt. Siehe mem://content/mary-sandra-canon.
When asking the user a question, always offer 3 concrete options.
Chapter structure (verified from UNBOND_Final_02-2.html): 01 SOS · 02 Trauma-Bonding · 03 Rosa-Brille abnehmen · 04 No Contact als Neurobiologie · 05 Trigger entmachten · 06 Körper zuerst · 07 Suchtmuster brechen · 08 WLW-Dynamiken · 09 Bindungsmuster & Inneres Kind · 10 Identität, Zukunft & Abschluss · Bonus D Behörden als Waffe · Bonus E Das Warum hinter dem Warum · Bonus F Ankommen in der Trauer.
**Icons**: Nur Lucide-Outline-Icons. Keine bunten Emojis in funktionalen UI-Elementen. Siehe mem://design/icon-style.
**Bilder in Story-Boxen**: `<StoryPortrait>` (src/components/story-portrait.tsx). Float-Layout mit Textumfluss auf Desktop, voller Breite auf Mobile. Innerhalb `<SectionBlock kind="story">`, immer am Anfang des Children-Bereichs + Clearfix-Div am Ende.
**Infografiken**: `<InfoGraphicBlock>` (src/components/infographic-block.tsx). Tap-to-Zoom-Lightbox, responsive, Cream-Frame. Standardposition: NACH dem Lösungsteil.

## Memories
- [Mary-Sandra-Kanon](mem://content/mary-sandra-canon) — Wortlaut der Story-Texte (read-only)
- [Icon Style](mem://design/icon-style) — Lucide-only, keine Emojis
- [ExerciseFrame Style](mem://design/exercise-frame-style) — keine Akzentbalken
- [Micro-Feedback](mem://design/micro-feedback) — Vibe-Check-Patterns
- [Modul 01 Stable](mem://modules/modul-01-stable) — Lesbarkeits-Snapshot
- [Modul 01 Fallback](mem://modules/modul-01-fallback) — Notfall-Wiederherstellung
- [Phase 2 Briefing](mem://phase2-briefing) — Roadmap
