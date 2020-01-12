import React from 'react'
import { Link } from 'gatsby'

import { useSiteData } from '../hooks/use-site-data'
import LogoComponent from '../images/logo.svg'

const Logo = () => {
  const sitedata = useSiteData()

  return (
    <div className="logo">
      <Link href="/">
        <LogoComponent alt={`Logo of ${sitedata.title}`} />
      </Link>
    </div>
  )
}

export default Logo
