const visit = require('unist-util-visit')

const typesAliasses = {
  heading: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
  paragraph: ['p'],
  image: ['img'],
  link: ['a'],
  blockquote: ['blockquote'],
  break: ['br'],
  code: ['pre'],
  inlineCode: ['code'],
  thematicBreak: ['hr'],
  delete: ['del'],
  emphasis: ['em'],
  list: ['ul', 'ol'],
  strong: ['strong', 'b'],
  table: ['table'],
  tableCell: ['td', 'th'],
  tableRow: ['tr'],
}

const remarkPluginOptions = {
  images: {
    type: 'html',
    value: 'gatsby-resp-image-figure',
  },
  prismjs: {
    type: 'html',
    value: 'gatsby-highlight',
  },
}

function getTypeByAlias(alias) {
  return Object.keys(typesAliasses).find(
    type => typesAliasses[type].indexOf(alias) > -1
  )
}

module.exports = ({ markdownAST }, pluginOptions) => {
  const rootClasses = pluginOptions.root
  const tagClasses = pluginOptions.tag
  const remarkClasses = pluginOptions.remark

  /**
   * Loop through the top level nodes in
   * root to prevent duplicated/nested
   * classes, e.g. for paragraphs.
   */
  markdownAST.children.forEach((node, i) => {
    if (
      node.type === 'html' ||
      (node.children && node.children[0].type === 'html')
    ) {
      // skip plugin generated and inline HTML
      return
    }

    /**
     * Search for definite node root types.
     */
    if (rootClasses) {
      const typeNames = Object.keys(rootClasses)
      typeNames.forEach(name => {
        if (node.type === name) {
          node = {
            type: 'div',
            data: {
              hProperties: {
                className: rootClasses[name],
              },
            },
            children: [node],
          }
        }
      })
    }

    // override linked object node
    markdownAST.children[i] = node
  })

  /**
   * Search for each node types by an alias (tag) globally.
   */
  if (tagClasses) {
    const tags = Object.keys(tagClasses)
    tags.forEach(name => {
      const tagType = getTypeByAlias(name) /** @return {string} e.g. heading */

      switch (tagType) {
        case 'heading':
          const depth = Number(name[1]) // get depth from tag name `h1`[1]
          const isHDepth = node =>
            node.type === 'heading' && node.depth === depth
          visit(markdownAST, isHDepth, node => {
            if (!node.data) node.data = {}
            node.data.hProperties = { className: tagClasses[name] }
          })
          break

        default:
          visit(markdownAST, tagType, node => {
            if (!node.data) node.data = {}
            node.data.hProperties = { className: tagClasses[name] }
          })
          break
      }
    })
  }

  /**
   * Search globally in AST because the most time
   * those plugin generated stuff is inside a
   * paragraph node.
   */
  if (remarkClasses) {
    const plgNames = Object.keys(remarkClasses)
    plgNames.forEach(name => {
      if (Object.keys(remarkPluginOptions).indexOf(name) > -1) {
        const { type, value } = remarkPluginOptions[name]

        switch (type) {
          case 'html':
            visit(markdownAST, 'html', node => {
              if (node.value.includes(value)) {
                node.value = `<div class="${remarkClasses[name]}">${node.value}</div>`
              }
            })
            break

          default:
            // noop
            break
        }
      }
    })
  }

  return markdownAST
}
