import React, { useState, useEffect } from 'react'

import DesktopNavigation from './DesktopNavigation'
import MobileNavigation from './MobileNavigation'
import { useResize, getBoundingRect } from '../../hooks/use-window'

const Navigation = () => {
  const windowResize = useResize()
  const [isMobile, setMobile] = useState(false)

  const setState = ({ width }) => {
    if (width < 992) {
      setMobile(true)
    } else {
      setMobile(false)
    }
  }

  useEffect(() => {
    setState(getBoundingRect())

    const sub = windowResize.subscribe((bound) => {
      setState(bound)
    })

    return () => {
      sub.unsubscribe()
    }
  }, [])

  return isMobile ? <MobileNavigation /> : <DesktopNavigation />
}

export default Navigation
