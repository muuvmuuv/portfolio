import React from 'react'
import { useState } from 'react'

/* eslint-disable jsx-a11y/no-interactive-element-to-noninteractive-role */

const HideContent = ({ text }) => {
  const [state, setState] = useState(btoa(text))

  const decryptContent = () => {
    setState(text)
  }

  return (
    <button
      className="tooltip inline reset"
      onKeyPress={decryptContent}
      onClick={decryptContent}
      aria-label="Click to reveal"
      data-position="top"
      role="log"
      style={{
        cursor: 'default',
        userSelect: 'all',
      }}
    >
      {state}
    </button>
  )
}

export default HideContent
