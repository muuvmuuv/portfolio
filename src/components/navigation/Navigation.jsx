import React, { useState, useEffect } from 'react'

import DesktopNavigation from './DesktopNavigation'
import MobileNavigation from './MobileNavigation'
import { useResize, getBoundingRect } from '../../hooks/use-window'

const Navigation = () => {
  const [isMobile, setMobile] = useState(false)

  const setState = ({ width }) => {
    if (width < 992) {
      setMobile(true)
    } else {
      setMobile(false)
    }
  }

  useResize((bound) => {
    setState(bound)
  })

  useEffect(() => {
    setState(getBoundingRect())
  }, [])

  return isMobile ? <MobileNavigation /> : <DesktopNavigation />
}

export default Navigation
