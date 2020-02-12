import React, { useState, useEffect } from 'react'
import { globalHistory } from '@reach/router'

import { useMenuLinks } from '../hooks/use-menu-links'
import { useOverlay } from '../hooks/use-overlay'
import Link from './Link'
import Icon from './Icon'
import ThemeSwitch from './ThemeSwitch'

const Navigation = () => {
  const [open, setOpen] = useState(false)
  const { hide, show } = useOverlay()

  const menuLinks = useMenuLinks()

  useEffect(() => {
    const unsubscribe = globalHistory.listen(({ action }) => {
      if (action === 'PUSH') {
        setOpen(false)
        hide()
      }
    })

    return () => unsubscribe()
  })

  const toggleNav = () => {
    setOpen(!open)
    if (!open) {
      show()
    } else {
      hide()
    }
  }

  return (
    <div id="navigation" className={open ? 'open' : ''}>
      <button
        className="trigger"
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
      <nav>
        <ul>
          {menuLinks.map(({ name, link }, index) => (
            <li key={index}>
              {link.contains('http') ? (
                <a
                  href={link}
                  rel="noopener noreferrer"
                  target="_blank"
                  className="nav-link"
                >
                  {name}
                  <Icon name="arrow-top-right" />
                </a>
              ) : (
                <Link to={link} className="nav-link" activeClassName="active">
                  {name}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>
      <ThemeSwitch />
    </div>
  )
}

export default Navigation
