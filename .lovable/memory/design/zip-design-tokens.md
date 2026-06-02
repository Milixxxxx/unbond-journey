---
name: ZIP-Design-System (Healing-Tree-Projekt)
description: Übernommene Design-Foundation aus dem Unbond_Healing_Tree-Projekt — Tokens, Fonts, Glass-Utilities, Body-Gradient, Headlines-Stil. Definiert den visuellen Look der App.
type: design
---

# ZIP-Design-System · Übernommen aus Unbond_Healing_Tree.zip

Visuelle Sprache der App. Inhalte und Modul-Struktur bleiben unabhängig davon.

## Fonts
- **Display**: Montserrat 400/500/600/700/800 — uppercase, letter-spacing 0.04em
- **Body**: Lato 400/700/900, line-height 1.8
- Geladen via Google Fonts in `src/routes/__root.tsx`.

## Brand-Tokens (oklch in `src/styles.css`)
- `--bordeaux` Story & Emotion
- `--sage` Wissenschaft, Diagnose, abgeschlossen
- `--mauve` Heilung, Transformation
- `--terracotta` Aktive Übungen, Primary-CTAs
- `--orange-soft` SOS-Hinweise
- `--cream` Background-Basis

## Globale Regeln
- Body-Background: fixed atmospheric Gradient (Mauve 15/10 → Sage 85/20 → Mauve 50/100 → linearer 160°-Cream-Verlauf). Set in `@layer base body`.
- Headlines `h1..h6`: Montserrat 800, uppercase, 0.04em tracking, line-height 1.2, Farbe `--bordeaux`.

## Utilities
- `.glass` — 60% white, blur 10px, 12px radius, weicher Bordeaux-Shadow
- `.glass-strong` — 75% white, blur 14px
- `.tracking-brand` — 0.04em (Brand-spec)
- Bestehende `.glass-card` / `.glass-card-strong` bleiben für Komponenten erhalten.

## Komponenten im ZIP-Look
- `src/components/site-header.tsx` — sticky Glass-Pille mit Margins, Pill-Nav
- `src/components/module-top-bar.tsx` — Glass-Pille statt voller Bordeaux-Bar

## Was NICHT angefasst wurde
- Module (`src/modules/*.tsx`), Exercises, Backend, Auth, Routen
- Winding-Path-Journey bleibt das Dashboard-Hauptvisual
- Hiesige Zusatz-Tokens (`--graphite`, `--warning`, `--sage-soft`, `--bordeaux-soft`, `--sandstone`, `--sos`) bleiben verfügbar
