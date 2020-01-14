import React, { useEffect, useContext } from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet-async'

import { isDev } from '../environment'
import SEO from '../components/SEO'
import { History } from '../store'

const Page = ({ pageContext: { breadcrumb } }) => {
  const pageName = 'Photography'
  const historyDispatch = useContext(History.Dispatch)

  useEffect(() => {
    historyDispatch({
      location: breadcrumb.location,
      crumbLabel: pageName,
      crumbs: breadcrumb.crumbs,
    })
  })

  if (isDev) {
    console.group(pageName)
    // console.log(items)
    console.log(breadcrumb)
    console.groupEnd()
  }

  return (
    <>
      <SEO title={pageName} />
      <Helmet
        bodyAttributes={{
          page: pageName.toLowerCase(),
          class: 'home',
        }}
      />

      <h1 className="headline">{pageName}</h1>

      <div className="gallery">content will come soon</div>
    </>
  )
}

// export const pageQuery = graphql``

export default Page
