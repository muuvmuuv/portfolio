import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import logo from '@images/logo-white.svg'

const Logo = () => {
  const data = useStaticQuery(query)

  return (
    <div id="logo">
      <a href="/">
        <img src={logo} alt={data.site.siteMetadata.title} />
      </a>
    </div>
  )
}

const query = graphql`
  query SiteMetaQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`

export default Logo
