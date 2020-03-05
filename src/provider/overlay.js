import React, { createContext, useState, useRef } from 'react'

const OverlayContext = createContext()
const OverlayConsumer = OverlayContext.Consumer

function OverlayProvider({ children }) {
  const elementRef = useRef()
  const [visible, setVisibility] = useState(false)
  const [events, on] = useState({
    click: () => {},
  })

  const show = () => {
    setVisibility(true)
    return elementRef
  }
  const hide = () => {
    setVisibility(false)
  }

  // TODO: use react spring
  // - expose on animation start and end

  return (
    <OverlayContext.Provider value={{ show, hide, on }}>
      <div
        id="overlay"
        ref={elementRef}
        style={{ display: visible ? 'block' : 'none' }}
        onClick={(event) => events.click(event)}
        role="presentation"
      ></div>

      {children}
    </OverlayContext.Provider>
  )
}

export { OverlayProvider, OverlayConsumer, OverlayContext }
