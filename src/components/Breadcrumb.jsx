import React, { useContext } from 'react'
import { Link } from 'gatsby'
import { GlobalContext } from '@app/context'
import { useSiteMetadata } from '@hooks/use-site-metadata'

const Breadcrumb = ({ location: { pathname } }) => {
  const siteMetadata = useSiteMetadata()
  const [state] = useContext(GlobalContext)

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

  return state.title ? (
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
        {state.title}
      </span>
    </div>
  ) : null
}

export default Breadcrumb
