import React, { useState } from 'react'
import { globalHistory } from '@reach/router'

import { useMenuLinks } from '../hooks/use-menu-links'
import Link from './Link'
import Icon from './Icon'
import { useEffect } from 'react'

const Navigation = () => {
  const [open, setOpen] = useState(false)

  const menuLinks = useMenuLinks()

  useEffect(() => {
    const unsubscribe = globalHistory.listen(({ action }) => {
      if (action === 'PUSH') {
        setOpen(false)
      }
    })

    return () => unsubscribe()
  })

  const toggleNav = () => {
    setOpen(!open)
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
      <div className="overlay"></div>
      <div className="wrapper">
        <nav>
          <ul>
            {menuLinks.map(({ name, link, external }, index) => (
              <li key={index}>
                {external ? (
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
      </div>
    </div>
  )
}

export default Navigation
