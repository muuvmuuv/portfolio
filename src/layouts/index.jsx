import React from 'react'
import { ContextProviderComponent } from '../context'
import { HelmetProvider } from 'react-helmet-async'

import Header from './Header'

const Layout = ({ children }) => (
  <ContextProviderComponent>
    <HelmetProvider>
      <Header></Header>
      <main>{children}</main>
    </HelmetProvider>
  </ContextProviderComponent>
)

export default Layout
