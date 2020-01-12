import React, { useContext } from 'react'
import { Helmet } from 'react-helmet-async'

import { Theme } from '../store'

/**
 * Global site wrapper.
 */
const Layout = ({ children }) => {
  const themeState = useContext(Theme.State)

  return (
    <>
      <Helmet
        htmlAttributes={{
          theme: themeState.theme,
        }}
      />

      {children}
    </>
  )
}

export default Layout
