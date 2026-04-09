# Design System Document: The Breathable Classroom

https://stitch.withgoogle.com/projects/2814533510809853845

## 1. Overview & Creative North Star: "Effortless Fluency"
The Creative North Star for this design system is **Effortless Fluency**. In the context of language learning, friction is the enemy of retention. While most educational apps rely on heavy gamification and rigid, boxed-in grids, this system breaks the "template" look by treating the interface as a living, breathing canvas.

We achieve a high-end editorial feel through **intentional asymmetry** and **tonal depth**. Instead of trapping content in boxes, we let it float. By utilizing moderate whitespace and high-contrast typography scales, we create a "Digital Sanctuary" where the student feels invited, not pressured. The layout should feel like a premium lifestyle magazine: airy, sophisticated, and human-centric.

---

## 2. Colors: Tonal Atmosphere
The palette is rooted in a sophisticated "Soft Blue" (`primary`) and grounded by "Earthy Slates" (`secondary`). This isn't about flat color; it's about atmosphere.
The `color_mode` for this system is **dark**.

### The "No-Line" Rule
**Explicit Instruction:** Designers are prohibited from using 1px solid borders for sectioning. Boundaries must be defined solely through background color shifts or subtle tonal transitions. For example, a card sitting on the `surface` background should be defined by `surface-container-low`, not an outline.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers—like stacked sheets of fine vellum paper.
*   **Base:** `surface` (#1a1c1e)
*   **Secondary Sections:** `surface-container-low` (#212529)
*   **Prominent Modules:** `surface-container-highest` (#32363b)
*   **Active Interaction Areas:** `surface-container-lowest` (#131517) for maximum lift.

### The "Glass & Gradient" Rule
To escape the "out-of-the-box" Material feel, use **Glassmorphism** for floating elements (e.g., navigation bars or progress overlays). Apply a `backdrop-blur` of 20px to a 70% opaque `surface` color.
*   **Signature Textures:** Use subtle linear gradients for Hero CTAs, transitioning from `primary` (#9bc7e2) to `primary-container` (#1f4660) at a 135-degree angle. This adds "soul" and visual depth.

---

## 3. Typography: Editorial Clarity
We utilize **Plus Jakarta Sans** for its modern, geometric, yet friendly personality. The scale is intentionally dramatic to create a clear information hierarchy.

*   **Display (lg/md/sm):** Reserved for "Aha!" moments—level completions or major milestones. Use `on-surface` with tight letter-spacing (-0.02em).
*   **Headline (lg/md/sm):** Used for lesson titles. These should have ample "leading" (line-height) to ensure the UI feels lightweight.
*   **Body (lg/md):** Your workhorse. Ensure `body-lg` is used for the actual foreign language text being learned to give it "weight" and importance.
*   **Label (md/sm):** Use `on-surface-variant` (#a0a4a9) for meta-information. These should be all-caps with +0.05em letter-spacing to feel "designed."

---

## 4. Elevation & Depth: Tonal Layering
Traditional structural lines are replaced by **Tonal Layering**. We communicate "up" and "down" through color, not just shadow.

*   **The Layering Principle:** Place a `surface-container-lowest` card on a `surface-container-low` section. The contrast creates a soft, natural lift that feels premium and integrated.
*   **Ambient Shadows:** If a floating effect is required (e.g., a "Word Bank" chip being dragged), use an extra-diffused shadow: `box-shadow: 0 12px 40px rgba(44, 51, 57, 0.06);`. The shadow color is a tinted version of `on-surface`, never pure black.
*   **The "Ghost Border" Fallback:** If a border is required for accessibility, use the `outline-variant` token at **20% opacity**. 100% opaque borders are strictly forbidden.
*   **Glassmorphism:** Use semi-transparent `surface` containers for floating feedback cards (e.g., "Correct!" or "Try Again") to allow the lesson content to softly bleed through the background.

---

## 5. Components: The Learning Toolkit

### Buttons
*   **Primary:** Uses the "Signature Gradient" (Primary to Primary-Container). Roundedness: `full`.
*   **Secondary:** `surface-container-high` background with `on-primary-container` text. No border.
*   **Tertiary:** Transparent background with `primary` text. Use for "Skip" or "Back" actions.

### Interactive Chips (Word Selectors)
*   **State - Idle:** `surface-container-lowest`. Soft `md` (1.5rem) rounded corners.
*   **State - Selected:** `primary-container` with a `ghost border` of the `primary` color.

### Input Fields
*   **Styling:** Forgo the traditional "box" for a `surface-container-low` pill-shaped field.
*   **Focus:** Transition background to `surface-container-lowest` and add a subtle `primary` glow (4px blur).

### Progress Indicators
*   Avoid thin, clinical lines. Use a thick (12dp) rounded track in `surface-container-highest` with a `primary` fill.

### Cards & Lists
*   **Strict Rule:** No divider lines. Separate list items using `1.5rem` (md) vertical whitespace or by alternating between `surface` and `surface-container-low` backgrounds.

### Specialized Component: The "Focus Sheet"
A large-format card using `xl` (3rem) rounded corners that slides up from the bottom, covering 90% of the screen. Used for immersive reading exercises to block out all navigation and UI noise.

---

## 6. Do’s and Don’ts

### Do
*   **Do** use asymmetrical margins. If a headline is left-aligned, let the body text have a wider left indent to create a "path" for the eye.
*   **Do** use `display-lg` for single-character or single-word focus.
*   **Do** prioritize `surface-container` shifts over shadows for 90% of the UI.

### Don't
*   **Don't** use 1px dividers to separate lesson modules. Use whitespace.
*   **Don't** use pure black (#000000). Use `on-surface` (#e2e2e6) for a softer, premium feel.
*   **Don't** use "Alert Red" for errors. Use the sophisticated `error` (#ffb4ab) and `error-container` (#93000a) tokens to keep the user feeling encouraged rather than punished.
*   **Don't** cram the screen. If a lesson has 10 steps, show one step at a time with generous padding.