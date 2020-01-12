import React, { useEffect, useContext } from 'react'
import { MDXProvider } from '@mdx-js/react'
import { Helmet } from 'react-helmet-async'

import { isDev } from '../environment'
import SEO from '../components/SEO'
import { History } from '../store'
import HeroPage from '../components/HeroPage'
import Article from '../layouts/Article'

import Blockquote from '../shortcodes/Blockquote'
const mdxShortcodes = { Blockquote }

/**
 * Wrapper for MDX pages.
 */
const Page = ({
  // use props here because don't know how to do it in another way
  props: {
    children,
    pageContext: { breadcrumb },
  },
  name,
}) => {
  const pageName = name || 'Undefined'
  const historyDispatch = useContext(History.Dispatch)

  useEffect(() => {
    historyDispatch({
      location: breadcrumb.location,
      crumbLabel: pageName,
      crumbs: breadcrumb.crumbs,
    })
  })

  if (isDev) {
    console.group(pageName)
    console.log(name)
    console.log(breadcrumb)
    console.groupEnd()
  }

  return (
    <MDXProvider components={mdxShortcodes}>
      <SEO title={pageName} />
      <Helmet
        bodyAttributes={{
          page: pageName.toLowerCase(),
          class: `page header-fixed hero-small`,
        }}
      />

      <HeroPage title={pageName} />

      <Article>{children}</Article>
    </MDXProvider>
  )
}

export default Page
