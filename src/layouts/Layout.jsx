import PropType from "prop-types"
import React from "react"

const Layout = ({ children }) => {
  return (
    <div id="layout">
      HI
      {children}
    </div>
  )
}

Layout.propTypes = {
  children: PropType.node.isRequired,
}

export default Layout
