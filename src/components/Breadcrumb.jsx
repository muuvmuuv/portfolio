import React from 'react'
import { Breadcrumb as BreadcrumbPlugin } from 'gatsby-plugin-breadcrumb'

const Breadcrumb = ({ data: { location, crumbs } }) => {
  // TODO: https://github.com/sbardian/gatsby-plugin-breadcrumb/issues/42
  return <BreadcrumbPlugin crumbs={crumbs} crumbLabel={location.name} />
}

export default Breadcrumb
