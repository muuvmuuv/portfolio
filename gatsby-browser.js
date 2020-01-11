/**
 * Gatsby's Browser APIs
 *
 * @see https://www.gatsbyjs.org/docs/browser-apis/
 */

const React = require('react')
const { MDXProvider } = require('@mdx-js/react')

const { isProd, isDev } = require('./gatsby/environment')

const printCorporateMessage = require('./gatsby/browser/corporateMessage')
const setDefaultTime = require('./gatsby/browser/defaultTime')
const mdxCustomComponents = require('./gatsby/browser/mdxCustomComponents')

require('./src/styles/app.scss')

exports.onClientEntry = () => {
  setDefaultTime()
}

exports.onInitialClientRender = () => {
  if (isProd) {
    printCorporateMessage()
  }
}

exports.onRouteUpdate = ({ location }) => {
  const path = location.pathname + location.search + location.hash

  if (isDev) {
    console.info('Track pageview of:', path)
  }
}

exports.wrapRootElement = ({ element }) => (
  <MDXProvider components={mdxCustomComponents.components}>
    {element}
  </MDXProvider>
)
