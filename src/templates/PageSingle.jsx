import React, { useEffect, useContext } from 'react'
import { Helmet } from 'react-helmet-async'

import { History } from '../store'
import Article from '../layouts/Article'
import SEO from '../components/SEO'
import HeroPage from '../components/HeroPage'

/**
 * Wrapper for MDX pages.
 */
const Page = ({
  children,
  pageContext: {
    breadcrumb,
    frontmatter: { title, subtitle },
  },
}) => {
  const historyDispatch = useContext(History.Dispatch)

  useEffect(() => {
    historyDispatch({
      location: breadcrumb.location,
      crumbLabel: title,
      crumbs: breadcrumb.crumbs,
    })
  })

  return (
    <>
      <SEO title={title} />
      <Helmet
        bodyAttributes={{
          page: title.toLowerCase(),
          class: `page header-fixed hero-small`,
        }}
      />

      <HeroPage title={title} subtitle={subtitle} />

      <Article>{children}</Article>
    </>
  )
}

export default Page
