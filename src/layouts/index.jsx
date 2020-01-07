import React from 'react'
import { HelmetProvider } from 'react-helmet-async'

import { Store } from '@store'

import Header from './Header'

const App = ({ location, pageContext, children }) => {
  console.log(location)
  pageContext.breadcrumb.location = location

  return (
    <Store>
      <HelmetProvider>
        <Header breadcrumb={pageContext.breadcrumb}></Header>
        <main>{children}</main>
      </HelmetProvider>
    </Store>
  )
}

export default App
