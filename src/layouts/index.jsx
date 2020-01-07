import React from 'react'
import { HelmetProvider } from 'react-helmet-async'

import { Store } from '@store'

import Header from './Header'

const App = ({ children }) => (
  <Store>
    <HelmetProvider>
      <Header></Header>
      <main>{children}</main>
    </HelmetProvider>
  </Store>
)

export default App
