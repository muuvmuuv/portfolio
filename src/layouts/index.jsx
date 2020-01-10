import React from 'react'
import { HelmetProvider } from 'react-helmet-async'

import { Store } from '../store'
import Header from './Header'
import Layout from './Layout'

const App = ({ children }) => (
  <Store>
    <HelmetProvider>
      <Layout>
        <Header></Header>
        <main>{children}</main>
      </Layout>
    </HelmetProvider>
  </Store>
)

export default App
