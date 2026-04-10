# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Flash is a cross-platform language learning app (iOS, Android, Web) built with Expo + React Native + TypeScript. The project is in early-stage development.

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
**Routing:** File-based via Expo Router — `@/*` path alias maps to `src/`

New React Architecture, Typed Routes, and React Compiler experiments are all enabled in `app.json`.

Navigation uses `@react-navigation/bottom-tabs` and `@react-navigation/native` (installed, not yet wired up).

Animation stack: React Native Reanimated 4 + Gesture Handler + Worklets.
