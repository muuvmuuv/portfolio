import React, { useState, useEffect, createRef } from 'react'

const HideContent = ({ text }) => {
  const [content, setContent] = useState(null)
  const myRef = createRef()

  useEffect(() => {
    let encoded = window.btoa(text)
    // encoded = encoded.split('')
    // encoded = encoded.map((v, i) => (i % 6 === 0 ? `${v}-` : v))
    // encoded = encoded.join('')
    setContent(encoded)
  }, [text])

  const decryptContent = () => {
    myRef.current.classList.add('revealed')
    setContent(text)
  }

  /* eslint-disable jsx-a11y/no-static-element-interactions */
  return (
    <span
      className="hidden-content"
      onKeyPress={decryptContent}
      onClick={decryptContent}
      aria-label="Click to reveal"
      ref={myRef}
    >
      {content}
    </span>
  )
}

export default HideContent
