import React from 'react'
import Helmet from 'react-helmet'
import { ContextConsumer } from '../context'
import SEO from '../components/SEO'

const Page = () => (
  <ContextConsumer>
    {({ data, set }) => (
      <>
        <SEO title="ERROR" />
        <Helmet bodyAttributes={{ page: 'error' }} />

        <h1>ERROR</h1>
      </>
    )}
  </ContextConsumer>
)

export default Page
