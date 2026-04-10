# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Flash is an Expo/React Native language learning app. All source code lives in `src/` — run all commands from that directory.

## Commands

```bash
cd src

npm start          # Start Expo dev server
npm run ios        # Run on iOS simulator
npm run android    # Run on Android emulator
npm run web        # Run in browser
npm run lint       # ESLint
```

There is no test suite configured yet.

## Architecture

**Routing:** Expo Router with file-based routing under `src/app/`. The `(tabs)/` group holds the bottom tab screens. Platform-specific files use `.ios.tsx` / `.web.ts` suffixes — Expo automatically selects the right one.

**Theming:** Dark mode is primary. `src/constants/theme.ts` defines all color and font tokens. Components consume theme via the `useThemeColor` hook (`src/hooks/use-theme-color.ts`). Web has its own `use-color-scheme.web.ts` to avoid SSR hydration mismatches.

**Path aliases:** `@/` maps to `src/` root (e.g., `@/components/themed-text`).

**New Architecture + React Compiler** are both enabled in `app.json`. Avoid patterns incompatible with these (e.g., direct ref mutations in render).

## Design

For any design-related questions, consult `design/DESIGN.md` — it is the source of truth for the design system, color tokens, typography, component rules, and do's/don'ts.
