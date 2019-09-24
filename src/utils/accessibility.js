/**
 * The browser user prefers to have reduced motion!
 */
export function prefersReducedMotion() {
  return (
    'matchMedia' in window &&
    window.matchMedia('(prefers-reduced-motion)').matches
  )
}
