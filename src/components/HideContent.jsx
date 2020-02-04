import React, { useState, useEffect } from 'react'

const HideContent = ({ text }) => {
  const [content, setContent] = useState(null)

  useEffect(() => {
    let encoded = window.btoa(text)
    encoded = encoded.split('').map((v, i) => (i % 6 === 0 ? `${v}-` : v))
    setContent(encoded)
  }, [text])

  const decryptContent = () => {
    setContent(text)
  }

  /* eslint-disable jsx-a11y/no-static-element-interactions */
  return (
    <span
      className="hidden-content tooltip"
      onKeyPress={decryptContent}
      onClick={decryptContent}
      aria-label="Click to reveal"
      data-position="top"
    >
      {content}
    </span>
  )
}

export default HideContent
