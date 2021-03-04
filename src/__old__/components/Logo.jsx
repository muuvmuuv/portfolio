import React from 'react'
import { Link as NativeLink } from 'gatsby'

import { useSiteData } from '../hooks/use-site-data'
import LogoSVG from '../images/logo.svg'

const Logo = () => {
  const { siteTitle } = useSiteData()

  return (
    <div className="logo">
      <NativeLink to="/" aria-label={`Logo of ${siteTitle}`}>
        <LogoSVG alt={`Logo of ${siteTitle}`} />
      </NativeLink>
    </div>
  )
}

export default Logo
