# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Flash is a cross-platform language learning app (iOS, Android, Web) built with Expo + React Native + TypeScript. The project is in early-stage development — the `src/app/` directory currently contains only scaffold boilerplate.

## Commands

All commands run from `src/`:

```bash
npm start          # Launch Expo dev server (interactive)
npm run android    # Start with Android emulator
npm run ios        # Start with iOS simulator
npm run web        # Start web preview
npm run lint       # Run ESLint (Expo preset)
```

No test runner is configured yet.

## Architecture

**Root layout:** `src/app/_layout.tsx` (Expo Router Stack)  
**Home screen:** `src/app/index.tsx`  
**Routing:** File-based via Expo Router with typed routes enabled (`@/*` path alias maps to `src/`)

New React Architecture, Typed Routes, and React Compiler experiments are all enabled in `app.json`.

Navigation uses `@react-navigation/bottom-tabs` and `@react-navigation/native` (installed, not yet wired up).

Animation stack: React Native Reanimated 4 + Gesture Handler + Worklets.

## Design System — "The Breathable Classroom"

The full spec lives in [design/DESIGN.md](design/DESIGN.md). Key rules that affect code:

**Color mode:** Dark only. Base surface hierarchy:
- `surface` = `#1a1c1e` (base)
- `surface-container-low` = `#212529`
- `surface-container-highest` = `#32363b`
- `surface-container-lowest` = `#131517` (maximum lift)
- `primary` = `#9bc7e2`, `primary-container` = `#1f4660`

**Typography:** Plus Jakarta Sans. Use `body-lg` for foreign language text, `on-surface-variant` (`#a0a4a9`) for labels (all-caps, +0.05em tracking).

**Strict rules to enforce in code:**
- No 1px solid borders. Use background color shifts (`surface-container-*` tokens) for sectioning.
- No pure black (`#000000`). Use `on-surface` (`#e2e2e6`).
- No error red — use `error` (`#ffb4ab`) / `error-container` (`#93000a`).
- Glassmorphism for floating elements: `backdrop-blur` 20px, 70% opaque surface color.
- Hero CTAs use linear gradient from `primary` → `primary-container` at 135°.
- Progress bars: 12dp thick, rounded, `surface-container-highest` track.
- Cards/lists: no divider lines — use 1.5rem vertical whitespace or alternating surface levels.
- "Focus Sheet" component: `xl` (3rem) border-radius, slides up covering 90% of screen.

If a border is required for accessibility: use `outline-variant` at 20% opacity only.
