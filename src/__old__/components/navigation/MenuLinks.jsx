import React from 'react'

import { Link } from '../../elements/Link'

const MenuLink = ({ link: { name, link, children } }) => (
  <li className={children && 'has-childs'}>
    <Link
      href={link}
      className="nav-link"
      activeClassName="active"
      partiallyActive={true}
      noStyling={true}
    >
      {name}
    </Link>
    {children && <MenuLinks links={children} />}
  </li>
)

const MenuLinks = ({ links }) => (
  <ul>
    {links.map((link, index) => (
      <MenuLink key={index} link={link} />
    ))}
  </ul>
)

export default MenuLinks
