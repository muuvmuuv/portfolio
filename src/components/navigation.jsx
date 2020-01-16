import React, { useContext } from 'react'

import { Nav } from '../store'
import { useMenuLinks } from '../hooks/use-menu-links'
import Link from './Link'
import Icon from './Icon'

const Navigation = () => {
  const menuLinks = useMenuLinks()
  const navState = useContext(Nav.State)
  const navDispatch = useContext(Nav.Dispatch)

  const toggleNav = () => {
    navDispatch(!navState.open)
  }

  return (
    <div id="navigation" className={navState.open ? 'open' : ''}>
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
                    <Icon name="link" textOnly={true} />
                  </a>
                ) : (
                  <Link to={link} className="nav-link">
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
