import React from 'react'

import { useMenuLinks } from '../../hooks/use-menu-links'
import MenuLinks from './MenuLinks'

const DesktopNavigation = () => {
  const menuLinks = useMenuLinks()

  return (
    <div id="navigation" className="desktop">
      <nav role="navigation">
        <MenuLinks links={menuLinks} />
      </nav>
    </div>
  )
}

export default DesktopNavigation
