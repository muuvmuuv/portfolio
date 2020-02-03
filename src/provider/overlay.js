import React, { createContext, useState, useRef } from 'react'

const OverlayContext = createContext(false)
const OverlayConsumer = OverlayContext.Consumer

function OverlayProvider({ children }) {
  const elementRef = useRef()
  const [visible, setVisibility] = useState(false)

  const show = () => {
    setVisibility(true)
    return elementRef
  }
  const hide = () => {
    setVisibility(false)
  }

  // TODO: add animation and make transition a global constant

  return (
    <OverlayContext.Provider value={{ show, hide }}>
      <div
        id="overlay"
        ref={elementRef}
        style={{ display: visible ? 'block' : 'none' }}
      ></div>

      {children}
    </OverlayContext.Provider>
  )
}

export { OverlayProvider, OverlayConsumer, OverlayContext }
