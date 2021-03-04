import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { MDXProvider } from '@mdx-js/react'
import { globalHistory } from '@reach/router'
import { scroller } from 'react-scroll'

import { activeEnv } from '../utils/environment'
import { useTheme } from '../hooks/use-theme'
import Header from './Header'
import Footer from './Footer'
import ScrollToTop from '../components/ScrollToTop'
import mdxElements from '../components/MDXElements'

const Index = ({ children }) => {
  const { theme } = useTheme()

  useEffect(() => {
    const hash = globalHistory.location.hash
    if (hash) {
      setTimeout(() => {
        scroller.scrollTo(hash.substr(1), {
          offset: -30,
          duration: 200,
          smooth: true,
        })
      }, 300)
    }
  }, [globalHistory.location.hash])

  return (
    <>
      <Helmet htmlAttributes={{ theme }}>
        <meta name="environment" content={activeEnv} />
      </Helmet>
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

export default Index
