import React from 'react'
import { ContextProviderComponent } from '../context'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import Header from './Header'

const Layout = ({ children }) => (
  <ContextProviderComponent>
    <HelmetProvider>
      <Helmet>
        <meta name="name" content="content" />
      </Helmet>
      <Header></Header>
      <main>{children}</main>
    </HelmetProvider>
  </ContextProviderComponent>
)

export default Layout
