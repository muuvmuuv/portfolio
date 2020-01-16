import React, { useEffect, useContext } from 'react'
import { Helmet } from 'react-helmet-async'

import SEO from '../components/SEO'
import { History } from '../store'

const Page = ({ pageContext: { breadcrumb } }) => {
  const pageName = 'Error'
  const historyDispatch = useContext(History.Dispatch)

  useEffect(() => {
    historyDispatch({
      location: breadcrumb.location,
      crumbLabel: pageName,
      crumbs: breadcrumb.crumbs,
    })
  })

  return (
    <>
      <SEO title={pageName} />
      <Helmet bodyAttributes={{ page: pageName.toLowerCase() }} />

      <h1>ERROR</h1>
    </>
  )
}

export default Page
