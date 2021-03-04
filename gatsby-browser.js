/**
 * Gatsby's Browser APIs
 *
 * @see https://www.gatsbyjs.org/docs/browser-apis/
 */

require("./src/styles/app.scss") // main styling

const { printBrowserWelcome } = require("./gatsby/browser/corporate-message")
const { setupTime } = require("./gatsby/browser/setup-time")

module.exports.onClientEntry = () => {
  setupTime()
}

module.exports.onInitialClientRender = () => {
  printBrowserWelcome()
}
