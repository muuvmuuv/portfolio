import React, { useState } from 'react'
import { animateScroll } from 'react-scroll'

import Icon from './Icon'
import { useScrollPosition } from '../hooks/use-scroll-position'

const ScrollToTop = () => {
  const [visible, setVisibility] = useState(false)

  useScrollPosition(({ currPos }) => {
    if (currPos.y < -600) {
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
      <Icon name="arrow-top" />
    </div>
  )
}

export default ScrollToTop
