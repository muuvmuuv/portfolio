import React, { useContext } from 'react'
import { Breadcrumb as BreadcrumbPlugin } from 'gatsby-plugin-breadcrumb'

import { History } from '../store'

const Breadcrumb = () => {
  const { location, crumbLabel, crumbs } = useContext(History.State)

  return (
    <BreadcrumbPlugin
      crumbs={crumbs}
      crumbSeparator="/"
      crumbLabel={crumbLabel}
      disableLinks={['/', location]}
    />
  )
}

export default Breadcrumb
