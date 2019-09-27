/**
 * Gatsby's Browser APIs
 *
 * @see https://www.gatsbyjs.org/docs/browser-apis/
 */

const { isProd, isDev } = require('./gatsby/environment')

const printCorporateMessage = require('./gatsby/browser/corporateMessage')
const setDefaultTime = require('./gatsby/browser/defaultTime')

require('./src/styles/app.scss')

exports.onRouteUpdate = ({ location }) => {
  const path = location.pathname + location.search + location.hash

  if (isDev) {
    console.info('Track pageview of:', path)
  }
}

exports.onInitialClientRender = () => {
  setDefaultTime()

  if (isProd) {
    printCorporateMessage()
  }
}
