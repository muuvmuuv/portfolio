import { updateLocationHash } from './helper'

export function scrollTo(target) {
  const offset = 50

  target.classList.remove('seeMe')
  const scrollY = window.scrollY || window.pageYOffset
  const headerHeight = document.getElementById('header').offsetHeight
  const elementPosition = target.getBoundingClientRect().top + scrollY
  const offsetPosition = Math.round(elementPosition - headerHeight - offset)

  window.addEventListener('scroll', function onScrollEvent() {
    if (
      window.scrollY === offsetPosition || // reached element
      window.scrollY === document.body.scrollHeight - window.innerHeight || // reached document end
      window.scrollY === 0 // reached document start
    ) {
      window.removeEventListener('scroll', onScrollEvent)
      target.classList.add('seeMe')
      updateLocationHash(target.id)
    }
  })

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  })
}
