---
name: Micro-Feedback System (Premium / Apple-like / Calm Luxury)
description: UX-Polish-Regeln, die ab jetzt auf ALLE Module angewendet werden — Micro-Feedback, Story-Atem, Deep-Dive-Einleitung, Diagnose-Accordions. Brand bleibt unverändert.
type: design
---

# Premium Micro-Feedback System

**Vibe:** Ruhig, sanft, hochwertig. Apple-like Calm Luxury. Brandfarben unverändert.

## 1 · ButtonChoice Feedback
- Bei jeder Auswahl: sanfter Highlight-Wechsel (200ms), kurzer Confirm-Pulse-Glow (Box-Shadow scale).
- Aria-pressed/data-active treibt CSS — kein Layout-Shift.
- Klasse: `.choice-btn[data-active="true"]` mit `animation: choice-confirm 0.45s ease-out` beim Activate.

## 2 · Checklist Feedback
- Beim Anhaken: Checkbox kurz aufleuchten (`box-shadow` mauve glow, 600ms).
- Label fadet sanft (`transition: all 0.4s`) in `line-through` Zustand.
- Klasse: `.check-item input:checked + …` triggert pulse-soft.

## 3 · Deep-Dive Einleitung
- VOR jedem `<SectionBlock kind="deep-dive">` eine kleine, optionale Einleitung:
  *„Wenn du tiefer verstehen willst …"* mit ChevronDown-Icon, kursiv, Sage-Akzent.
- Komponente: `<DeepDiveIntro>` — rein dekorativ, kein Pflicht-Element (FernUSG-konform).

## 4 · Story-Vibe (Atmosphärischer Puls)
- `.story-box` bekommt einen sehr dezenten Background-Glow (radial-gradient mit `breath` animation, 8s).
- Mary-Perspektive: regular weight + leichte Einrückung.
- Sandra-Perspektive: light weight (300) + größerer Zeilenabstand → wirkt distanzierter.

## 5 · Narrative Scroll-Reveals
- Story-Absätze faden beim Scrollen ein (`opacity 0 → 1`).
- Realisiert via `IntersectionObserver` Hook `useReveal()` — `data-reveal="true"` Klasse triggert `.reveal-on-scroll`.

## 6 · Diagnose-Accordion
- Lange Erklärungen in Diagnose werden in sanft öffnende Accordions gepackt.
- Nutze shadcn `<Accordion>` (radix) mit `data-state` Animationen.
- Trigger-Stil: minimalistisch, mit "+" / "−" rechts.

## Implementierungs-Reihenfolge pro Modul
1. ButtonChoice/Checkbox feedback (CSS-only)
2. Story Atem-Glow + Scroll-Reveal
3. Deep-Dive-Intro vor jeder Deep-Dive Section
4. Diagnose-Accordion bei langen Texten

**Wichtig:** KEINE neuen Brand-Farben. KEINE neuen Groß-Komponenten. Nur Polish.
