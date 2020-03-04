import React, { useEffect, useState } from 'react'
import { globalHistory } from '@reach/router'
import { useSpring, animated, config } from '@react-spring/web'

import { useMenuLinks } from '../../hooks/use-menu-links'
import { useClientRect } from '../../hooks/use-measure'
import { useResize } from '../../hooks/use-window'
import MenuLinks from './MenuLinks'

const Navigation = () => {
  const [visible, setVisibility] = useState(false)
  const menuLinks = useMenuLinks()
  const [bind, { width, height }] = useClientRect()

  const [navStyles, updateNavStyles, stopNavAnimation] = useSpring(() => ({
    config: config.stiff,
  }))

  const closeNav = () => {
    setVisibility(false)
    stopNavAnimation()
    updateNavStyles({
      from: {
        visibility: 'visible',
        opacity: 1,
        width: Math.round(width),
        height: Math.round(height),
      },
      to: [
        {
          opacity: 0,
          width: 0,
          height: 0,
        },
        { visibility: 'hidden' },
      ],
    })
  }

  const openNav = () => {
    setVisibility(true)
    stopNavAnimation()
    updateNavStyles({
      from: {
        visibility: 'hidden',
        opacity: 0,
        width: 0,
        height: 0,
      },
      to: [
        { visibility: 'visible' },
        {
          opacity: 1,
          width: Math.round(width),
          height: Math.round(height),
        },
      ],
    })
  }

  const toggleNav = () => {
    if (visible) {
      closeNav()
    } else {
      openNav()
    }
  }

  useResize(() => {
    if (visible) {
      closeNav()
    }
  })

  useEffect(() => {
    const unsubscribe = globalHistory.listen(({ action }) => {
      if (action === 'PUSH') {
        closeNav()
      }
    })

    return () => unsubscribe()
  })

  return (
    <div id="navigation" className="mobile">
      <button
        className={`toggle ${visible ? 'open' : ''}`}
        onClick={toggleNav}
        onKeyPress={toggleNav}
        title="Open Navigation"
      >
        <div className="hl hl1">
          <div className="hli hli1"></div>
        </div>
        <div className="hl hl2">
          <div className="hli hli2"></div>
        </div>
        <div className="hl hc1">
          <div className="hli hci1"></div>
        </div>
        <div className="hl hc2">
          <div className="hli hci2"></div>
        </div>
      </button>
      <animated.nav style={navStyles} {...bind} role="navigation">
        <MenuLinks links={menuLinks} />
      </animated.nav>
    </div>
  )
}

export default Navigation
