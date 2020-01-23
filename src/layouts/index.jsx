import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'
import { MDXProvider } from '@mdx-js/react'

import { ThemeContext } from '../store/theme'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from '../components/ScrollToTop'
import mdxElements from '../components/MDXElements'

export default ({ children }) => {
  const { theme } = useContext(ThemeContext)

  return (
    <>
      <Helmet htmlAttributes={{ theme }} />
      <MDXProvider components={mdxElements}>
        <Header></Header>
        <main>{children}</main>
        <Footer></Footer>
      </MDXProvider>
      <ScrollToTop />
    </>
  )
}
