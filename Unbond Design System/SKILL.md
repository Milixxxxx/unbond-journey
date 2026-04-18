---
name: unbond-design
description: Use this skill to generate well-branded interfaces and assets for UNBOND — a German trauma-informed digital healing program for WLW/lesbian women recovering from toxic relationships. Contains essential design guidelines, colors, type, fonts, icon set, and UI kit components (landing page, ebook reader, no-contact coach) for prototyping and production design.
user-invocable: true
---

# UNBOND Design Skill

Read the `README.md` file within this skill first — it documents content fundamentals, visual foundations, iconography and the full file index.

**At a glance:**
- Cream surface (`#F4EDE4`) + bordeaux CTAs (`#6B3E44`) + sage accent (`#7A9E8A`). Dark mode swaps to forest (`#1a2420`) + glassmorphism.
- Montserrat (display) + Lato (body); Poppins substitutes on the dark landing.
- German, `du`-form, trauma-sensitive, names the body. No emoji hearts. Compare: *"Das ist Neurobiologie, kein persönliches Versagen."*
- Three product surfaces, three UI kits: `ui_kits/landing/` · `ui_kits/ebook/` · `ui_kits/no-contact-coach/`.
- Tokens live in `colors_and_type.css`. Icons + illustrations + logo in `assets/`.

If creating **visual artifacts** (slides, mocks, throwaway prototypes), copy the assets out of `assets/` and reference tokens from `colors_and_type.css`. Use `preview/` cards as reference for every component.

If working on **production code**, read the UI kit READMEs — they cite the exact source files in `code_final/` so you can trace anything back.

If the user invokes this skill without guidance, ask them what they want to build (marketing page · reader · coach tool · slide deck), confirm the audience is WLW/lesbian in German context (or whether to translate), then act as an expert designer who outputs HTML artifacts or production code.
