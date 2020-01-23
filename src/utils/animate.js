/**
 * Scroll to a HTML element by target.
 *
 * @param {HTMLElement} target HTML element to scroll to
 *
 * @returns {number} Y position of target element
 */
export function scrollToElement(target) {
  const offset = 50

  const scrollY = window.scrollY || window.pageYOffset
  const headerHeight = document.getElementById('header').offsetHeight
  const elementPosition = target.getBoundingClientRect().top + scrollY
  const offsetPosition = Math.round(elementPosition - headerHeight - offset)

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  })

  return offsetPosition
}
