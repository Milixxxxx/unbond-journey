---
name: Modul 01 Fallback v1
description: Stabiler Referenz-Stand von Modul 01 nach Content-Lock + Micro-Interaction Refactor — vor Apple-like Premium-Polish. Wenn der UX-Feinschliff zu viel wird, hierhin zurückkehren.
type: reference
---

# Modul 01 — Fallback Snapshot

**Status vor Premium-Polish:** Modul 01 enthält wortgetreuen Content (Diagnose + Lösung), 10 Warnsignale als FlipCards, 3 Übungen mit ButtonChoice, Deep Dive mit 3 Studien-FlipCards, Checkliste mit 5 Zielen + Badge bei 3/5.

**Struktur (verpflichtend):**
1. STORY (silbrig-grauer Glass-Container, Perspektiv-Switch Mary/Sandra/Beide)
2. DIAGNOSE (Sage, TextCollapse für lange Texte)
3. 10 WARNSIGNALE (FlipCards, Bordeaux-Akzent)
4. LÖSUNG (Terracotta, ACT-Defusion + Dopamin-Reset)
5. DEEP DIVE (Sage, 3 Studien als FlipCards)
6. ÜBUNGEN (genau 3, ButtonChoice Single + ergänzende Komponenten)
7. CHECKLISTE (Mauve, 5 Ziele, Badge bei 3/5)

**Komponenten-Vertrag:**
- ALLE Sections via `<SectionBlock kind="…">` (kein direktes CSS)
- Lange Texte (>5 Sätze) → `<TextCollapse>`
- Slider verboten → nur `<ButtonChoice>` (single oder multi)
- Fortschritt persistent via `useModuleProgress`

**Wenn Polish-Iterationen scheitern:**
1. Reset `src/modules/modul-01.tsx` auf den hier dokumentierten Stand (Content + Struktur)
2. CSS-Tokens unverändert lassen (silbrig-graue story-box, brand colors)
3. Erst danach Polish neu versuchen — kleinere Schritte
