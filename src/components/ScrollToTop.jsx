import React, { useState } from 'react'
import { animateScroll } from 'react-scroll'

import Icon from './Icon'
import { useScroll } from '../hooks/use-window'

const ScrollToTop = () => {
  const [visible, setVisibility] = useState(false)

  useScroll(({ top }) => {
    if (top > 600) {
      setVisibility(true)
    } else {
      setVisibility(false)
    }
  })

  const scrollToTop = () => {
    animateScroll.scrollToTop({
      smooth: true,
      duration: 200,
    })
  }

  return (
    <div
      aria-label="Scroll back to top"
      className={`scroll-to-top ${visible ? 'show' : 'hide'}`}
      onKeyPress={scrollToTop}
      onClick={scrollToTop}
      tabIndex="0"
      role="button"
    >
      <Icon name="arrow-up" />
    </div>
  )
}

export default ScrollToTop
