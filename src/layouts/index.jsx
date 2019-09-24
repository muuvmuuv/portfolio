import React from 'react'
import Header from './header'

import '../corporate'

const Layout = ({ children }) => (
  <>
    <Header></Header>
    <main>{children}</main>
  </>
)

export default Layout
