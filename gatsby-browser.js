/**
 * Gatsby's Browser APIs
 *
 * @see https://www.gatsbyjs.org/docs/browser-apis/
 */

const { isDev } = require('./utils/environment')
const { getLocale, getLanguage } = require('./src/utils/locale')

const printCorporateMessage = require('./gatsby/browser/corporateMessage')
const setDefaultTime = require('./gatsby/browser/defaultTime')

require('./src/styles/app.scss') // main styling

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
  printCorporateMessage()
}

module.exports.onServiceWorkerUpdateReady = () => {
  console.info('NEW VERSION AVAILABLE')
  // window.location.reload()
}
