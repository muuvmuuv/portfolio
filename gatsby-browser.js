/**
 * Gatsby's Browser APIs
 *
 * @see https://www.gatsbyjs.org/docs/browser-apis/
 */

require('./src/styles/app.scss') // main styling

const React = require('react')
const ReactDOM = require('react-dom')

const { isDev } = require('./utils/environment')
const printCorporateMessage = require('./gatsby/browser/corporateMessage')
const setDefaultTime = require('./gatsby/browser/defaultTime')

// module.exports.wrapPageElement = require('./gatsby/wrapPageElement')
module.exports.wrapRootElement = require('./gatsby/wrapRootElement')

module.exports.onClientEntry = () => {
  setDefaultTime()
}

module.exports.onInitialClientRender = () => {
  if (isDev) {
    // https://github.com/dequelabs/react-axe
    import('react-axe').then(({ default: reactAxe }) => {
      reactAxe(React, ReactDOM, 1000)
    })
  } else {
    printCorporateMessage()
  }
}

module.exports.onServiceWorkerUpdateReady = () => {
  console.info('NEW VERSION AVAILABLE')
  // window.location.reload()
  // TODO: show modal here or in sw.js?
}
