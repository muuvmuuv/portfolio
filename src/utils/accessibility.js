/**
 * The browser user prefers to have reduced motion.
 */
export const DETECT_REDUCED_MOTION = '(prefers-reduced-motion)'
export function prefersReducedMotion() {
  return window.matchMedia(DETECT_REDUCED_MOTION).matches
}

/**
 * User prefers to have a dark appearance.
 */
export const DETECT_COLOR_SCHEME_DARK = '(prefers-color-scheme: dark)'
export function prefersDarkAppearance() {
  return window.matchMedia(DETECT_COLOR_SCHEME_DARK).matches
}

/**
 * User prefers to have a light appearance.
 */
export const DETECT_COLOR_SCHEME_LIGHT = '(prefers-color-scheme: light)'
export function prefersLightAppearance() {
  return window.matchMedia(DETECT_COLOR_SCHEME_LIGHT).matches
}

/**
 * User prefers to have high contrasts.
 *
 * @deprecated https://developer.mozilla.org/en-US/docs/Web/CSS/@media/-ms-high-contrast
 */
export const DETECT_HIGH_CONTRAST = '(-ms-high-contrast: active)'
export function prefersHighContrast() {
  return window.matchMedia(DETECT_HIGH_CONTRAST).matches
}
