import debounce from 'lodash/debounce'
import { Observable } from 'rxjs'

const isBrowser = typeof window !== `undefined`
const handlers = { scroll: null, resize: null }

function getBoundingRect() {
  if (!isBrowser) return { left: 0, top: 0, width: 0, height: 0 }

  return {
    left: window.scrollX,
    top: window.scrollY,
    width: window.innerWidth,
    height: window.innerHeight,
  }
}

function getHandler(event) {
  if (handlers[event]) {
    return handlers[event]
  }

  const observable = new Observable((observer) => {
    window.addEventListener(
      event,
      debounce(() => {
        observer.next(getBoundingRect())
      }, 20)
    )
  })
  handlers[event] = observable
  return observable
}

function useScroll() {
  return getHandler('scroll')
}

function useResize() {
  return getHandler('resize')
}

export { getBoundingRect, useScroll, useResize }
