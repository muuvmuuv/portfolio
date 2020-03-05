const visit = require('unist-util-visit')
const normalize = require('normalize-url')

module.exports = ({ markdownAST }, normalizeUrlOptions) => {
  const defaultOptions = {
    forceHttps: true,
    stripWWW: false,
    removeQueryParameters: [],
    sortQueryParameters: false,
  }
  const options = { ...defaultOptions, ...normalizeUrlOptions }

  const visitor = (node) => {
    if (!node.url.startsWith('#') && !node.url.startsWith('/')) {
      node.url = normalize(node.url, options)
    }
  }

  visit(markdownAST, 'link', visitor)

  return markdownAST
}
