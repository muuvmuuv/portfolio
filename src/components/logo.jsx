import React from 'react'

import { useSiteData } from '../hooks/use-site-data'
import LogoSVG from '../images/logo.svg'
import Link from '../components/Link'

const Logo = () => {
  const { siteTitle } = useSiteData()

  return (
    <div className="logo">
      <Link to="/" aria-label={`Logo of ${siteTitle}`}>
        <LogoSVG alt={`Logo of ${siteTitle}`} />
      </Link>
    </div>
  )
}

export default Logo
