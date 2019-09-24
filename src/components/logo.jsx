import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import logo from '../images/logo-white.svg'

const Logo = () => {
  const data = useStaticQuery(graphql`
    query SiteMetaQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div id="logo">
      <a href="/">
        <img src={logo} alt={data.site.siteMetadata.title} />
      </a>
    </div>
  )
}

export default Logo
