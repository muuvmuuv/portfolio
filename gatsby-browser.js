/**
 * Gatsby's Browser APIs
 *
 * @see https://www.gatsbyjs.org/docs/browser-apis/
 */

const printCorporateMessage = require('./gatsby/browser/corporateMessage')
const setDefaultTime = require('./gatsby/browser/defaultTime')

require('./src/styles/app.scss') // main styling

// module.exports.wrapPageElement = require('./gatsby/wrapPageElement')
module.exports.wrapRootElement = require('./gatsby/wrapRootElement')

module.exports.onClientEntry = () => {
  setDefaultTime()
}

module.exports.onInitialClientRender = () => {
  printCorporateMessage()
}

module.exports.onServiceWorkerUpdateReady = () => {
  console.info('NEW VERSION AVAILABLE')
  // window.location.reload()
}
