import React from 'react'
import { useSiteMetadata } from '@hooks/use-site-metadata'
import Link from './Link'

const Breadcrumb = ({ location: { pathname } }) => {
  const siteMetadata = useSiteMetadata()

  const fragments = pathname.split('/')
  fragments.shift()
  fragments.pop()

  const menuLinks = siteMetadata.menuLinks

  const path = menuLinks.filter(({ name, external }) => {
    if (external) return false // ignore
    const menuIndex = fragments.indexOf(name.toLowerCase())
    if (menuIndex > -1) {
      return menuLinks[menuIndex]
    }
    return false
  })

  return true ? (
    <div id="breadcrumb">
      <span className="breadcrumb__divider" key="BCB">
        /{' '}
      </span>
      {path.map(({ name, link }, index) => (
        <span key={`BCI${index}`}>
          <Link to={link} className="breadcrumb__link">
            {name}
          </Link>
          <span className="breadcrumb__divider">
            {index < path.length ? ' / ' : null}
          </span>
        </span>
      ))}
      <span className="breadcrumb__active" key="BCA">
        TEST
      </span>
    </div>
  ) : null
}

export default Breadcrumb
