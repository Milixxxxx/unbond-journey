---
name: Icon-Stil — feine Linien-Icons (Lucide), KEINE bunten Emojis
description: Verbindlich für alle Module/Komponenten. Bunte/kindliche Emojis (💣 🌡️ 🧠 🔗 ⚠️ 💡 …) sind in UI-Akzenten verboten. Verwende Lucide-Icons im Outline-Stil.
type: design
---

# Icon-Stil

## Verboten
- Bunte/kindliche Emojis als UI-Akzent in Eyebrows, FlipCards, Pills, Badges, Meta-Zeilen.
- Bsp. raus: 💣 🌡️ 🌀 🤐 ⚔️ 🏝️ 🪞 🧲 🪫 🕯️ 🐦 🧠 🔗 ⚠️ 💡

## Gewünscht
- **Lucide-react Outline-Icons**, `strokeWidth={1.75}`, `currentColor`, kompakt (`h-3.5 w-3.5` … `h-5 w-5`).
- Farbe immer aus dem UNBOND-Token-System (`var(--color-bordeaux)`, `var(--color-sage)`, `var(--color-graphite)` …).
- Im Fließtext (Mary&Sandra, Definitionen) sind Emojis ohnehin nicht erwünscht.

## Standard-Mapping (Modul 01 als Referenz)
- Lovebombing → `Bomb` · Hot/Cold → `Thermometer` · Gaslighting → `Waves`
- Schweige-Strafe → `MessageSquareOff` · Weaponized Virtue → `Swords`
- Isolation → `TreePalm` · Schuldumkehr → `RefreshCw` · Hoovering → `Magnet`
- Selbstwert-Erosion → `BatteryLow` · Hoffnungssucht → `Flame`
- Skinner → `Bird` · Fisher (fMRT) → `Brain` · Dutton & Painter → `Link2`
- Eyebrow „Warnung" → `AlertTriangle` · „Lösung" → `Lightbulb`

## FlipCard-API
- `icon: LucideIcon` ist der bevorzugte Prop. `emoji?: string` bleibt deprecated nur für Legacy.

## Hochgeladene SVG-Library
- `src/assets/icons/*.svg` (anchor, brain, chain-broken, heart, hummingbird, lightbulb, shield, sos, sprout, tag) — bei Bedarf als Inline-SVG oder per `?react`-Import einsetzen, sonst Lucide-Äquivalent bevorzugen.
