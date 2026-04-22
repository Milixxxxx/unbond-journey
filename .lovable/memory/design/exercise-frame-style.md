---
name: ExerciseFrame & Reflection Style (Premium / Apple-like)
description: Verbindlicher Stil für ExerciseFrame, Reflection3Step und alle übrigen Übungs-Container — KEIN linker Akzentstreifen mehr (wirkt altmodisch). Stattdessen Aura, Hairline und Akzent-Pille.
type: design
---

# Exercise-Container Stil — Apple-like / Calm Luxury

**Gilt für ALLE Module ab Modul 01.**

## Verboten (altmodisch)
- Linker Akzent-Balken (`borderLeft: 4-5px solid accent`) — komplett raus aus ExerciseFrame und allen Übungs-Containern.
- Harte 2-3px farbige Borders um Inputs.
- Vertikale Trennlinien zwischen Schritt-Indikatoren in Reflection3Step.

## Gewünscht (Apple-like)
- `rounded-3xl`, `bg-white/70`, `backdrop-blur-xl`.
- 1px Hairline-Border in akzent-getöntem `color-mix`.
- Mehrlagiger Schatten: inset hellight + akzent-getönter Soft-Shadow.
- Akzent-Pille oben links als Modus-Marker (z. B. „ACT", „Practice", „Somatic", „Reflexion").
- Dezente farbige Aura (`radial-gradient` blur) als Hintergrund-Akzent.
- Inputs: `rounded-2xl`, `border border-graphite/10`, sanfter Focus-Ring (`shadow-[0_0_0_4px_…]`).
- Step-Indikatoren: weiche Kreise auf cremeweißem Hintergrund mit Hairline + inset-Highlight, KEINE verbindenden Linien.

## Story-Regel
- Story-Box bleibt im silbrig-grauen Glass-Look (für SW-Bilder Mary/Sandra).

## Kapitel-Anfang
- KEIN Notrufabsatz / CrisisBanner mehr am Anfang jedes Kapitels — nur in `/willkommen` und über den SOS-Floating-Button erreichbar.
