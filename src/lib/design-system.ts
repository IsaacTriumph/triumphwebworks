/**
 * Visual system constants for Triumph Web Works.
 * These mirror the Tailwind theme tokens in globals.css and exist so that
 * JS-driven graphics (Lucide icons, GSAP tweens, Recharts in Phase 2) stay
 * consistent with the CSS design system instead of drifting per-component.
 */

/** Stroke width for all line-based graphics (icons, chart lines). */
export const STROKE_WIDTH = 1.5;

/** Corner radius scale, in px. Cards/buttons/containers use one of these only. */
export const RADIUS = {
  sm: 4,
  md: 8,
  lg: 16,
} as const;

/** Standard GSAP easing for all custom/illustrative animation. */
export const EASE = "power2.out";

/**
 * The same power2.out curve as a plain (t) => t function, for animation
 * systems that don't understand GSAP's named eases (e.g. Recharts).
 */
export const power2Out = (t: number) => 1 - (1 - t) * (1 - t);

/** Animation durations, in seconds. */
export const DURATION = {
  /** Icons, micro-interactions. */
  fast: 0.3,
  /** Scroll-triggered reveals (range: 0.8–1.2s). */
  slow: 1.0,
} as const;

/**
 * JS-accessible copies of the CSS color tokens (globals.css is the source of
 * truth). Needed anywhere a hex string is required directly, e.g. Recharts
 * fill/stroke props or GSAP color tweens.
 */
export const COLORS = {
  background: "#2B323C",
  surface: "#333C47",
  foreground: "#ffffff",
  muted: "#D6E4EC",
  cta: "#A84B30",
  kicker: "#C15A3D",
  accent: "#BCE2E7",
  warning: "#A13544",
  success: "#4EC0C6",
} as const;
