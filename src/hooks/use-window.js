import { useLayoutEffect } from 'react'
import debounce from 'lodash/debounce'

const isBrowser = typeof window !== `undefined`

function getBoundingRect() {
  if (!isBrowser) return { left: 0, top: 0, width: 0, height: 0 }

  return {
    left: window.scrollX,
    top: window.scrollY,
    width: window.innerWidth,
    height: window.innerHeight,
  }
}

function handler(event, effect, wait) {
  const handleScroll = debounce(() => {
    effect(getBoundingRect())
  }, wait)

  window.addEventListener(event, handleScroll)

  return () => window.removeEventListener(event, handleScroll)
}

function useScroll(effect, wait = 250) {
  useLayoutEffect(() => handler('scroll', effect, wait))
}

function useResize(effect, wait = 100) {
  useLayoutEffect(() => handler('resize', effect, wait))
}

export { getBoundingRect, useScroll, useResize }
