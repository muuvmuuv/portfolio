import React, { useContext } from 'react'
import { Breadcrumb as BreadcrumbPlugin } from 'gatsby-plugin-breadcrumb'

import { HistoryContext } from '../provider/history'

const Breadcrumb = () => {
  const { location, crumbLabel, crumbs } = useContext(HistoryContext)

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
