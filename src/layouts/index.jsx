import React, { useContext } from 'react'
import { HelmetProvider, Helmet } from 'react-helmet-async'
import { MDXProvider } from '@mdx-js/react'

import { Theme } from '../store'
import Header from './Header'
import Footer from './Footer'

import mdxElements from '../components/MDXElements'

const App = ({ children }) => {
  const themeState = useContext(Theme.State)

  return (
    <HelmetProvider>
      <MDXProvider components={mdxElements}>
        <Helmet
          htmlAttributes={{
            theme: themeState.theme,
          }}
        />

        <Header></Header>
        <main>{children}</main>
        <Footer></Footer>
      </MDXProvider>
    </HelmetProvider>
  )
}

export default App
