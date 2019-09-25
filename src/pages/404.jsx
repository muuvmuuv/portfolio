import React from 'react'
import Helmet from 'react-helmet'

import { ContextConsumer } from '../context'

const PageError = props => (
  <ContextConsumer>
    {({ data, set }) => {
      console.log(data)
      console.log(props)

      return (
        <>
          <Helmet bodyAttributes={{ page: 'error' }}></Helmet>

          <h1>ERROR</h1>
        </>
      )
    }}
  </ContextConsumer>
)

export default PageError
