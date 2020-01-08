import React, { useContext } from 'react'
import { Breadcrumb as BreadcrumbPlugin } from 'gatsby-plugin-breadcrumb'

import { History } from '../store'

// TODO: https://github.com/sbardian/gatsby-plugin-breadcrumb/issues/42
const Breadcrumb = () => {
  const { location, crumbLabel, crumbs } = useContext(History.State)
  console.log({ location, crumbLabel, crumbs })

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
