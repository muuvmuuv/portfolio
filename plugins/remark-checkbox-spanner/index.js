const visit = require('unist-util-visit')

module.exports = ({ markdownAST }, pluginOptions) => {
  const isCheckBox = (node) =>
    node.type === 'listItem' && typeof node.checked === 'boolean'

  visit(markdownAST, isCheckBox, (node) => {
    const paragraph = node.children[0].children
    paragraph.unshift({ type: 'html', value: '<span>' })
    paragraph.push({ type: 'html', value: '</span>' })
  })

  return markdownAST
}
