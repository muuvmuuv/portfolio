import React, { useState, useEffect } from 'react'

const HideContent = ({ text }) => {
  const [content, setContent] = useState(null)

  useEffect(() => {
    setContent(window.btoa(text))
  }, [text])

  const decryptContent = () => {
    setContent(text)
  }

  return (
    <button
      className="hidden-content tooltip inline reset"
      onKeyPress={decryptContent}
      onClick={decryptContent}
      aria-label="Click to reveal"
      data-position="top"
    >
      {content}
    </button>
  )
}

export default HideContent
