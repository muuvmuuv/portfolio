/**
 * Customize the default `html.js`.
 *
 * @see https://www.gatsbyjs.org/docs/custom-html/
 * @file .cache/default-html.js
 */

import PropTypes from "prop-types"
import React from "react"

export default function HTML(properties) {
  return (
    <html lang="en" theme="dark" {...properties.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no, viewport-fit=cover"
        />
        {properties.headComponents}
      </head>
      <body {...properties.bodyAttributes}>
        {properties.preBodyComponents}
        <div
          key="body"
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: properties.body }}
        />
        {properties.postBodyComponents}
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
