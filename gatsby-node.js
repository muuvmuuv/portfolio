/**
 * Gatsby's Node APIs
 *
 * @see https://www.gatsbyjs.org/docs/node-apis/
 */

// ✨ Welcome ✨
require("./utils/welcome")()

module.exports.onCreateWebpackConfig = require("./gatsby/node/on-create-webpack")
module.exports.onCreateNode = require("./gatsby/node/on-create-node")
module.exports.createPages = require("./gatsby/node/create-pages")
