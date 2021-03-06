import React, { useEffect } from 'react'
import { animateScroll } from 'react-scroll'
import { useSpring, animated } from '@react-spring/web'

import Icon from './Icon'
import { useScroll } from '../hooks/use-window'

const ScrollToTop = () => {
  const windowScroll = useScroll()
  const [animation, setStyle] = useSpring(() => ({
    config: { duration: 180 },
    opacity: 0,
  }))

  useEffect(() => {
    const subscription = windowScroll.subscribe(({ top }) => {
      if (top > 400) {
        setStyle({
          opacity: 1,
        })
      } else {
        setStyle({
          opacity: 0,
        })
      }
    })

    return () => subscription.unsubscribe()
  })

  const scrollToTop = () => {
    animateScroll.scrollToTop({
      smooth: true,
      duration: 200,
    })
  }

  return (
    <animated.div className="scroll-to-top" role="complementary" style={animation}>
      <button
        aria-label="Scroll back to top"
        onKeyPress={scrollToTop}
        onClick={scrollToTop}
      >
        <Icon name="arrow-up" />
      </button>
    </animated.div>
  )
}

export default ScrollToTop
