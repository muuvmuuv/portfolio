/**
 * Customize the default `html.js`.
 *
 * @see https://www.gatsbyjs.org/docs/custom-html/
 * @file .cache/default-html.js
 */

import React from 'react'
import PropTypes from 'prop-types'
import dayjs from 'dayjs'

export default function HTML(props) {
  const thisYear = dayjs().get('y')

  return (
    <html lang="en" theme="dark" {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        {/*TODO: Show beautiful message here*/}
        <noscript key="noscript" id="gatsby-noscript">
          I mean... we have {thisYear}, please enable your JavaScript!
        </noscript>
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
