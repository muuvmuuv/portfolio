import { useRef, useState, useEffect } from 'react'

function useMeasure() {
  const ref = useRef()
  const [bounds, set] = useState({ left: 0, top: 0, width: 0, height: 0 })
  const [ro] = useState(() => new ResizeObserver(([entry]) => set(entry.contentRect)))
  useEffect(() => (ro.observe(ref.current), ro.disconnect), [])
  return [{ ref }, bounds]
}

function useClientRect() {
  const ref = useRef()
  const [bounds, set] = useState({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  })
  useEffect(() => {
    set(ref.current.getBoundingClientRect())
  }, [])
  return [{ ref }, bounds]
}

export { useMeasure, useClientRect }
