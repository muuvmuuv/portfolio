import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { MDXProvider } from '@mdx-js/react'

import { ThemeContext } from '../provider/theme'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from '../components/ScrollToTop'
import mdxElements from '../components/MDXElements'

export default ({ children }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <>
      <Helmet htmlAttributes={{ theme }} />
      <Header></Header>
      <MDXProvider components={mdxElements}>
        <main role="main" id="main">
          {children}
        </main>
      </MDXProvider>
      <Footer></Footer>
      <ScrollToTop />
    </>
  )
}
