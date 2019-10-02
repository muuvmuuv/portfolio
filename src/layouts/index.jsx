import React from 'react'
import { GlobalProvider } from '@app/context'
import { HelmetProvider } from 'react-helmet-async'

import Header from './Header'

const App = ({ children, location }) => (
  <GlobalProvider>
    <HelmetProvider>
      <Header location={location}></Header>
      <main>{children}</main>
    </HelmetProvider>
  </GlobalProvider>
)

export default App
