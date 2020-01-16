/**
 * Gatsby's Browser APIs
 *
 * @see https://www.gatsbyjs.org/docs/browser-apis/
 */

// const { isDev } = require('./gatsby/environment')
const printCorporateMessage = require('./gatsby/browser/corporateMessage')
const setDefaultTime = require('./gatsby/browser/defaultTime')

require('./src/styles/app.scss')

exports.wrapRootElement = require('./gatsby/wrapRootElement')
// exports.wrapPageElement = require('./gatsby/wrapPageElement')

exports.onClientEntry = () => {
  setDefaultTime()
}

exports.onInitialClientRender = () => {
  printCorporateMessage()
}

// exports.onRouteUpdate = ({ location }) => {
//   const path = location.pathname + location.search + location.hash
//   console.info('Track pageview of:', path)
// }
