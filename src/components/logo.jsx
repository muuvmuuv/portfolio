import React from 'react'

import { useSiteData } from '../hooks/use-site-data'
import LogoComponent from '../images/logo.svg'
import Link from '../components/Link'

const Logo = () => {
  const sitedata = useSiteData()

  return (
    <div className="logo">
      <Link to="/">
        <LogoComponent alt={`Logo of ${sitedata.title}`} />
      </Link>
    </div>
  )
}

export default Logo
