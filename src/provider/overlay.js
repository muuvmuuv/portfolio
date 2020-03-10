import React, { createContext, useState, useRef } from 'react'
import { useSpring, animated } from '@react-spring/web'

const OverlayContext = createContext()
const OverlayConsumer = OverlayContext.Consumer

function OverlayProvider({ children }) {
  const elementRef = useRef()
  const [events, on] = useState({
    click: () => {},
  })

  const [styles, set, stop] = useSpring(() => ({
    config: {
      duration: 80,
    },
    display: 'none',
    opacity: 0,
  }))

  const show = () => {
    stop()
    set({
      from: { display: 'none', opacity: 0 },
      to: [{ display: 'block' }, { opacity: 1 }],
    })
    return elementRef
  }
  const hide = () => {
    stop()
    set({
      from: { display: 'block', opacity: 1 },
      to: [{ opacity: 0 }, { display: 'none' }],
    })
  }

  // BUG: Try to use Portal, to overcome jumping to top

  return (
    <OverlayContext.Provider value={{ show, hide, on }}>
      <animated.div
        id="overlay"
        style={styles}
        ref={elementRef}
        onClick={(event) => events.click(event)}
        role="presentation"
      ></animated.div>

      {children}
    </OverlayContext.Provider>
  )
}

export { OverlayProvider, OverlayConsumer, OverlayContext }
