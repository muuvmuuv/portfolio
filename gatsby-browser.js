/**
 * Gatsby's Browser APIs
 *
 * @see https://www.gatsbyjs.org/docs/browser-apis/
 */

const { isProd, isDev } = require('./utils/environment')
const { getLocale, getLanguage } = require('./src/utils/locale')

const printCorporateMessage = require('./gatsby/browser/corporateMessage')
const setDefaultTime = require('./gatsby/browser/defaultTime')

require('./src/styles/app.scss')

// module.exports.wrapPageElement = require('./gatsby/wrapPageElement')
module.exports.wrapRootElement = require('./gatsby/wrapRootElement')

module.exports.onClientEntry = () => {
  setDefaultTime()

  if (isDev) {
    // TODO: if i18n, move it there
    console.log('Language:', getLanguage(), getLocale())
  }
}

module.exports.onInitialClientRender = () => {
  if (isProd) {
    printCorporateMessage()
  }
}

// exports.onRouteUpdate = ({ location }) => {
//   const path = location.pathname + location.search + location.hash
//   console.info('Track pageview of:', path)
// }
