---
name: Modul 01 — Stabilität-Snapshot (Korrektur-Iteration)
description: Sauberer Stand von Modul 01 nach der Lesbarkeits- & Layout-Korrekturrunde. Falls spätere Iterationen zu unruhig werden, hierhin zurückkehren.
type: feature
---

# Modul 01 — Stabilitäts-Snapshot

Nach der UX-Korrektur-Iteration sind diese Regeln verbindlich für Modul 01 (und Vorlage für 02–10):

## SectionBlock
- Eyebrow: `flex items-start`, Icon `flex-shrink-0`, Span `min-w-0 flex-1 break-words text-[11px]/sm:text-xs uppercase tracking-[0.16em]`. Verhindert Header-Overflow bei langen Eyebrows.
- Title: `text-lg sm:text-xl md:text-2xl`, `break-words`, `hyphens: auto`, `text-bordeaux` als Default (außer Story = cream).
- Body: `text-sm sm:text-[15px]`, `min-w-0`, `space-y-3`.

## FlipCard
- 1:1 Aspect, `p-3` (vorher 2.5), `borderTop: 3px` (vorher 4px).
- Heading & Body: `break-words` + `hyphens: auto`.
- Back: `flex-1 overflow-hidden` statt `line-clamp-7` — passt sich der Höhe an.
- Studien-Backs maximal ~25 Wörter, sonst Overflow auf Mobile.

## Lösungs-Box (Anti-Textwüste-Regel)
- Erste Zeile = Schlüsselsatz in Display-Font, prominent.
- Restliche 4 Absätze in `<TextCollapse preview={1} threshold={2}>`.
- Quellen kompakt im Caption-Stil (`text-xs italic text-graphite/60`).

## Schriftgrößen (max 3 Stufen pro Viewport)
- Body: `text-sm` (sm: `text-[15px]`)
- Caption / Eyebrow: `text-xs` (oder `text-[11px]` für sehr kompakte Mikro-Labels)
- Headline: `text-lg sm:text-xl md:text-2xl` (über SectionBlock h3)
- KEIN `text-base` als 4. Stufe einsetzen — wenn Prominenz nötig, lieber `font-semibold` + Display-Font auf vorhandener Stufe.

## Keine bunten Emojis (Verstärkung der Memory-Regel)
- `meta`-Strings, `label`-Strings, Eyebrows: nie 🎰 🧊 💊 🧠 ⚠️ 💡 etc.
- Wenn Icon nötig: Lucide-Component im Outline-Stil.

## Mary&Sandra-Kanon (REGEL NR. 1)
- Story-Wortlaut wurde NICHT angetastet. Siehe mem://content/mary-sandra-canon.

## Bekannte offene Punkte (für spätere Iterationen, nicht jetzt)
- CalloutBold hat noch `borderLeft: 5px` (linker Akzentbalken). Memory `mem://design/exercise-frame-style` verbietet das nur für ExerciseFrame; CalloutBold ist eine separate Komponente — Refactor optional, wenn der Look später als „altmodisch" empfunden wird.
- Story-Box `border-left: 4px` in styles.css ebenso — gehört zum Story-Container, nicht zum ExerciseFrame; bleibt vorerst.
