import React from 'react'
import { Helmet } from 'react-helmet-async'
import SEO from '../components/SEO'

const Page = () => (
  <>
    <SEO title="ERROR" />
    <Helmet bodyAttributes={{ page: 'error' }} />

    <h1>ERROR</h1>
  </>
)

export default Page
