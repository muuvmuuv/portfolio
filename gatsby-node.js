/**
 * Gatsby's Node APIs
 *
 * @see https://www.gatsbyjs.org/docs/node-apis/
 */

const onCreateWebpackConfig = require('./gatsby/node/onCreateWebpackConfig')
const onCreateNode = require('./gatsby/node/onCreateNode')
const createPages = require('./gatsby/node/createPages')

module.exports = { onCreateWebpackConfig, onCreateNode, createPages }
