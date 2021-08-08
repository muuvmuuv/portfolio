import PropType from "prop-types"
import React from "react"

const Layout = ({ children }) => {
  return <>{children}</>
}

Layout.propTypes = {
  children: PropType.node.isRequired,
}

export default Layout
