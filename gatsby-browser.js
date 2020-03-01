/**
 * Gatsby's Browser APIs
 *
 * @see https://www.gatsbyjs.org/docs/browser-apis/
 */

require('./src/styles/app.scss') // main styling

const { activeEnv, isProd } = require('./utils/environment')
const printCorporateMessage = require('./gatsby/browser/corporateMessage')
const setDefaultTime = require('./gatsby/browser/defaultTime')

// module.exports.wrapPageElement = require('./gatsby/wrapPageElement')
module.exports.wrapRootElement = require('./gatsby/wrapRootElement')

module.exports.onClientEntry = () => {
  setDefaultTime()
  console.info(`Environment: %c${activeEnv}`, 'color: blue;')
}

module.exports.onInitialClientRender = () => {
  if (isProd) {
    printCorporateMessage()
  }
}

module.exports.onServiceWorkerUpdateReady = () => {
  console.info('NEW VERSION AVAILABLE')
  // window.location.reload()
}
