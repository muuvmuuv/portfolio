import React from "react"

import Layout from "../../src/layouts/Layout"

export const wrapRootElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)
