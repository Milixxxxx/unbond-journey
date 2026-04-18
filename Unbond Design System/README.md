# UNBOND — Design System

> **UNBOND — Breaking Chains.** A trauma-sensitive digital program helping lesbian and WLW women recognise and recover from toxic relationships, gaslighting, narcissistic abuse, and trauma bonding. German-language.

---

## What is Unbond?

Unbond is a three-surface product ecosystem:

| Surface | Purpose | Source of truth |
|---|---|---|
| **Landing page** (`unbond.de`) | Marketing + the *ToxiCometer* quiz (15 questions → toxicity profile of ex-partner) | `code_final/LANDINGPAGE/index.html` |
| **Breaking Chains e‑book / course** | 10-module self-paced recovery program, narrated through protagonist "Mary & Sandra" | `code_final/Onbond_Github/Unbond_ebook_claude_index_hybrid.html`, `modul1.html`, `modul2.html` |
| **No-Contact Coach (webapp)** | AI-powered pattern analyser — user describes a situation, gets "Muster · Wirkung · Schritt" breakdown | `Antigravity/onbond/webapps/no-contact-coach/` |

A sister brand, **Healing Hearts**, is the author/coach entity (Milena) that produces Unbond. Its wordmark appears in the ebook.

---

## Audience & Promise

- Lesbian women / WLW in or recovering from toxic same-sex relationships
- Trauma-informed: language assumes the reader may be *in crisis* (3:47am panic scenario is the reference point)
- Scientific backbone: Polyvagal Theory (Porges), Helen Fisher, IFS, CFT, DBT skills
- Queer-specific dynamics: U-Hauling, Trauma Bonding through merging, small-community impression management, weaponized queerness

---

## Sources inspected (read-only, via File System Access)

- `code_final/brand.txt` — canonical brand guide (colors, type, rationale — in German)
- `code_final/LANDINGPAGE/` — production marketing site, multiple `index_v17_*` iterations
- `code_final/Onbond_Github/` — ebook source, module pages, `brand.txt` dup, `Elemente_KApitel.docx`
- `code_final/ebook_assets/` — 100+ illustrations, infographic PNGs, author photos
- `Antigravity/onbond/webapps/no-contact-coach/` — React + Tailwind + Gemini coach app
- `Antigravity/onbond/maryundsandra.txt` — canonical narrative for Module 1–10
- `code_final/UNBOND – Breaking Chains · Complete Edition.pdf` — complete ebook
- `uploads/brand.txt` — the brand guide, uploaded

---

## Index (this folder)

```
README.md                — this file
SKILL.md                 — Agent-Skill shim so this folder is portable
colors_and_type.css      — design tokens (CSS vars) + base element styles
preview/                 — design-system preview cards (registered)
assets/                  — logos, illustrations, raw icon SVGs
  assets/icons/          — SVG icon set
ui_kits/
  landing/               — landing page recreation (Poppins + dark glass)
  ebook/                 — ebook reader recreation (Montserrat/Lato + cream)
  coach/                 — no-contact-coach recreation (Tailwind + glass)
```

---

## CONTENT FUNDAMENTALS

### Voice & tone

Unbond addresses one reader at a time, in the **informal "du"** (never "Sie"). The voice is:

- **Warm but clinical** — empathetic validation paired with scientific explanation. *"Du kämpfst nicht gegen die große Liebe. Du kämpfst gegen eine einfache Synapse."*
- **Names the body** — physiology before psychology. *"Dein Herz hämmert", "Dein Nervensystem schreit nach Kontakt"*.
- **Anti-shame** — reframes behaviours (hysterical messages, obsessive checking) as biological necessity, not personal failure. Key phrase: *"Das ist Neurobiologie, kein persönliches Versagen."*
- **Direct, short sentences for crisis copy**; long, flowing paragraphs for ebook narrative.
- **Cites research out loud** — "Dr. Stephen Porges", "Dr. Helen Fisher", "Dr. Jill Bolte Taylor" appear by name as authority anchors.

### Casing

- Headlines in **UPPERCASE** with wide letter-spacing (`letter-spacing: 3-4px`). E.g. `BREAKING CHAINS`, `DIE DIAGNOSE`, `MODUL 2`.
- Section labels in ALLCAPS with tracking — feels like a textbook, not a blog.
- Body copy in normal sentence case.
- German nouns capitalised per convention.

### Glossary (on-brand terms)

`Trauma-Bonding` · `Intermittierende Verstärkung` · `Hoovering` · `Gaslighting` · `No Contact` · `Urge Surfing` · `Grey Rock` · `Reactive Abuse` · `Weaponized Virtue` · `Wolf im Schafspelz` · `Rosa Brille` · `SOS-Bisamratte` · `Breaking Chains` · `ToxiCometer` · `U-Hauling`

### Examples from product copy

- Badge: `ERKENNEN · VERSTEHEN · LÖSEN`
- Hero promise: *"Speziell für lesbische Frauen und WLW: 15 Fragen, 2 Minuten, 1 psychologisches Profil deiner Ex-Partnerin."*
- CTA: `JETZT ANALYSIEREN` · `ÜBUNG STARTEN` · `TEST JETZT STARTEN`
- Storage notice label: `DATENSCHUTZ-HINWEIS`
- Coach tagline: `BREAKING CHAINS. FINDING PEACE.`

### Emoji & symbols

**Sparse use of emoji.** The landing and coach do **not** use emoji. The ebook occasionally uses `→` arrows and `•` bullets. Module numbering uses **Roman-style uppercase numerals** ("MODUL 02") or labelled badges ("Schritt 01"). No flags, no hearts-with-sparkles. Emoji would break the clinical-warm tone.

---

## VISUAL FOUNDATIONS

### Two-mode surface system

Unbond runs on two distinct surfaces — understanding which mode you're in dictates every downstream choice.

| Mode | Used on | Background | Text | Cards |
|---|---|---|---|---|
| **Light / Cream** | Ebook reader, exercise forms, workbooks | `#F4EDE4` warm cream with soft shadows | `#4A4E52` graphite on cream | opaque white `rgba(255,255,255,0.6-0.85)` |
| **Dark / Forest** | Landing hero, coach app, marketing | full-bleed forest photo + `160deg` gradient overlay `rgba(10,22,15,0.5)` | `#F4EDE4` cream on dark | glass: `rgba(15,20,45,0.45)` + `backdrop-filter: blur(18px)` |

The **hero-bg.png** (a moody forest/mist photograph) is the signature background image — fixed, cover, sits under a 40–60% dark-green gradient overlay.

### Colour system

Primary: **Sage Green** `#7A9E8A` (calm) · **Mauve** `#9B7FA4` (gentle strength) · **Cream** `#F4EDE4` (clarity)
Secondary: **Bordeaux** `#6B3E44` (depth, CTAs) · **Terracotta** `#C4836E` (warmth, progress) · **Graphite** `#4A4E52` (body text)
Neutrals: **Sandstone** `#E8DED4` · **Stone** `#D3CDC7` · **Dark-green** `#2D4F3C`
Signal: **SOS-Red** `#C74B4B` (only for emergency) · **Success** `#5A8A6F` · **Warning** `#D4A574`

All combos with cream background are WCAG AA+; graphite on cream is AAA (9.12:1).

### Typography

- **Headlines: Montserrat** (400/600/700/800) — geometric, modern, "professional without sterile"
- **Body: Lato** (300/400/700) — humanist, optimised for screen legibility
- **Alternate display: Poppins** — used on landing for a softer, rounder hero feel (600/700/800)
- **Rule:** max 2 families in a single surface. Never add a third.
- **Line-height: 1.6 minimum, 1.8 for long-form** (trauma-sensitive; reduces visual overload)

### Spacing & layout

- Generous — sections `padding: 60–80px 0`, content boxes `padding: 40–50px`, form inputs `padding: 12–16px`.
- Max content width ~1100px on landing, ~1100px on ebook.
- 4-px base unit, but the system leans toward multiples of 8 and 16.

### Borders, corners, cards

- Cards: radius `12px`, shadow `0 10px 50px rgba(0,0,0,0.15)`, border `1px solid rgba(100, 160, 120, 0.2)`.
- Exercise boxes: radius `12–16px`, **6px left-border accent** in sage-green / warning / terracotta to signal type (exercise / reflection / warning). This is on-brand — the landing and ebook both use it **systemically** (not decoratively).
- Story boxes: radius `20px`, 8px left border in mauve or sage.
- Buttons: radius `8px`, never pill unless it's a badge.
- Badges: radius `4px` for tags, `20px` (pill) for module badges.

### Shadows

Three tiers:
- `sh-sm` — soft lift on cream cards, `0 4px 15px rgba(0,0,0,0.05)`
- `sh-md` — mid cards, `0 8px 30px rgba(0,0,0,0.12)`
- `sh-xl` — hero / glass cards on dark, `0 10px 50px rgba(0,0,0,0.4)`
Sage-green glow is used on CTA hover: `0 8px 25px rgba(122, 158, 138, 0.4)`.

### Backgrounds

- **Full-bleed photographic backgrounds** (the moody forest hero) are a signature — never a pattern, never a repeating texture.
- **Fixed** `background-attachment: fixed` so the hero stays put as content scrolls.
- Dark overlay always sits above the image (never raw).
- Cream surfaces sit on top as opaque or near-opaque cards, creating a "lit paper on a dark forest floor" feel.
- Gradient usage is **subtle** — linear gradients between two primary colours (sage → dark-green, bordeaux → dark-bordeaux) only for CTAs and badges. Never bluish-purple AI-slop gradients.

### Motion

- Transitions: `0.3–0.7s` with `cubic-bezier(0.16, 1, 0.3, 1)` (smooth ease-out) or `(0.4, 0, 0.2, 1)` (material soft).
- Hover on CTAs: `translateY(-3px)` lift + shadow intensifies.
- Flip cards (landing problem grid): 0.7s flip with 3d preserve-transform.
- Fade-in on scroll: `opacity 0 → 1, translateY(40px → 0)`, 1.2s.
- **No bouncy springs, no wobbles.** The tone is calm; motion mirrors that.

### Hover & press states

- Hover: lift 2–3px, shadow intensifies, sometimes a subtle background brightening.
- Active/press: `scale(0.98)` on large CTAs; no scale on small links.
- Links: underline appears on hover, never blinking.
- Focus ring: `ring-[15px] ring-unbond-purple/10 border-unbond-purple` (coach) or `outline: 2px solid var(--sage-green); outline-offset: 2px;` (generic).

### Transparency & blur

- Glass (on dark): `rgba(15,20,45,0.45)` + `blur(18px)` + border `rgba(122, 158, 200, 0.18)`
- Content boxes (on cream): `rgba(255,255,255,0.6)` + `blur(10px)`
- Exercise boxes: `rgba(255,250,230,0.85)` + `blur(10px)` — warm paper feel
- Used **only where there's an image or colour behind** — never as decoration on flat colour.

### Imagery vibe

- Warm, slightly desaturated, **painterly** — illustrations feel hand-coloured, not photographic-realistic.
- Palette of imagery matches the brand: sage, cream, terracotta, mauve. Figures often sit in soft natural light.
- Some AI-generated illustrations (freepik / whisk-branded) depict WLW scenarios.
- Symbolic objects recur: **kintsugi vase** (healing scars), **butterfly** (transformation), **chains breaking**, **hummingbird** (author Milena's recovery sigil), **slot machine** (intermittent reinforcement).
- No stock-photo faces smiling at camera.

### Fixed elements

- Landing: fixed top nav (transparent until scroll, then glass).
- Ebook reader: fixed hamburger (top-left), fixed bottom nav bar with prev / next / current, fixed progress bar (3px gradient sage→mauve).
- Coach: fixed photo background + vignette overlay.

### Layout conventions

- Section rhythm: EYEBROW (sage uppercase tiny) → H2 (bordeaux, sage underline) → body → callout box → exercise box.
- Text alignment: left in UI; body text sometimes **justified** in ebook long-form (legacy print feel).
- Exercise boxes are interactive: `<textarea>`, `<input>` with label, save-to-localStorage indicator in dark-green `✓ Gespeichert`.

---

## ICONOGRAPHY

### Inventory & approach

- **Stroke-based SVG** is the dominant icon style (2px stroke, rounded joins, 24×24 grid — Heroicons/Feather family). Lives in `Antigravity/onbond/webapps/no-contact-coach/components/icons/` and is copied into `assets/icons/`.
- **Bespoke brand mark: the Hummingbird** (`HummingbirdLogo.tsx`) — asymmetric, hand-drawn, 2.5px stroke. Always appears in cream (`#EAE2D1`) over dark.
- **Wordmark: UNBOND** (`assets/unbond-wordmark.png` / `.svg`) — Montserrat 800, heavy tracking.
- **Sister brand mark: Healing Hearts** (`assets/healing-hearts-logo.png`) — a cursive handwritten wordmark, used only in the ebook byline.
- **Illustrations (PNG, painterly)** — not icons per se, but recurring motifs: `illustration-spielautomat.png` (slot machine for Module 2), `illustration-polyvagal.png`, `illustration-bindung.png`, `illustration-kintsugi.jpg`, `illustration-butterfly.jpg`. Copy them in; do not redraw.

### Usage rules

- **Icons are always line-only** on Unbond surfaces. No filled glyphs, no colour-inside-shapes.
- Icon colour follows context: sage on cream bg, cream on dark bg, bordeaux for emphasis.
- **Size:** 16px (inline), 20–24px (button/label), 48–64px (feature callout), 192px (hero hummingbird).
- **Emoji:** not used. Decorative unicode (•, →, —) is fine.

### CDN fallback (for new icons not in the codebase)

Use **Lucide** (`https://unpkg.com/lucide-static/icons/<name>.svg`) — matches the 2px Feather stroke style used by the coach app. Flag any substitution.

### Font files

Montserrat, Lato, Poppins — all served from Google Fonts (no local TTFs needed, and none were provided in the codebase). `colors_and_type.css` imports them directly.

---

## Caveats / substitutions

- **No original font files** were provided in the codebase. Google Fonts is the source. If the client needs offline / self-hosted fonts, request the licensed files.

---

## File index

```
README.md                    ← you are here
SKILL.md                     ← Agent-Skill entrypoint (mirrors this README)
colors_and_type.css          ← CSS variables: colours, type scale, semantic tokens
assets/                      ← logos, hummingbird, illustrations (PNG), icons/ (SVG)
preview/                     ← Design-system cards (15) — typography, colour, spacing, components, brand
ui_kits/
  landing/                   ← Marketing page recreation (hero · flip cards · ToxiCometer · FAQ)
  ebook/                     ← 10-module course reader (TOC sidebar + module pane with callouts)
  no-contact-coach/          ← Crisis dashboard (journal · urge timer · decoder · SOS button)
```

Open any `ui_kits/<surface>/index.html` directly in a browser — each kit is self-contained and pulls its own styles + Babel-transpiled JSX.
- **No Figma access** was provided — all design context is derived from the production HTML + React codebase.
- **Icon set is partial** — I've lifted every icon that exists in the coach app into `assets/icons/` as raw SVG. If the product needs more, link Lucide from CDN and flag.
- The ebook uses inline `<style>` rather than a shared stylesheet — recreations here extract and systematise.
- German is the product language; the design system preserves all German copy verbatim.
