const fs = require('fs')
const visit = require('unist-util-visit')

const tagTypes = {
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

const remarkTypes = {
  images: {
    type: 'html',
    value: 'gatsby-resp-image-figure',
  },
  prismjs: {
    type: 'html',
    value: 'gatsby-highlight',
  },
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max))
}

function getTypeByAlias(alias) {
  return Object.keys(tagTypes).find(t => tagTypes[t].indexOf(alias) > -1)
}

module.exports = (component, pluginOptions) => {
  const { markdownAST } = component
  const { types, tags, remark } = pluginOptions

  /**
   * Loop through the top level nodes in
   * root to prevent duplicated/nested
   * classes, e.g. for paragraphs.
   */
  const children = markdownAST.children.map(node => {
    /**
     * Search for definite node types.
     */
    if (types) {
      const typeNames = Object.keys(types)
      typeNames.forEach(name => {
        if (node.type === name) {
          if (!node.data) node.data = {}
          node.data.hProperties = { className: types[name] }
        }
      })
    }

    /**
     * Search for node types by an alias (tag).
     */
    if (tags) {
      const tagNames = Object.keys(tags)
      tagNames.forEach(name => {
        const tagType = getTypeByAlias(name) // e.g. `heading`
        console.log(tagType)

        if (node.type === tagType) {
          if (!node.data) node.data = {}
          switch (tagType) {
            case 'heading':
              const depth = Number(name[1])
              if (node.depth === depth) {
                node.data.hProperties = { className: tags[name] }
              }
              break
            case 'thematicBreak':
              console.log(node)
              node = {
                type: 'paragraph',
                data: {
                  hName: 'div',
                  hProperties: { className: tags[name] },
                },
                position: node.position,
                children: node,
              }
              delete node.children.position

              break

            default:
              node.data.hProperties = { className: tags[name] }
              break
          }
        }
      })
    }

    return node
  })

  /**
   * Build new AST tree.
   */
  const newMAST = {
    type: 'root',
    children,
  }

  /**
   * Search globally in AST because the most time
   * those plugin generated stuff is inside a
   * paragraph node.
   */
  if (remark) {
    const remarkNames = Object.keys(remark)
    remarkNames.forEach(name => {
      const remarkNode = remarkTypes[name]
      visit(newMAST, remarkNode.type, node => {
        if (node.value.includes(remarkNode.value)) {
          node.value = `<div class="${remark[name]}">${node.value}</div>`
        }
      })
    })
  }

  // const id = getRandomInt(99999)
  // fs.writeFile(
  //   `./tmp/md-ast-${id}.json`,
  //   JSON.stringify(markdownAST, null, 2),
  //   () => {
  //     console.log('DONE:', id)
  //   }
  // )
  // fs.writeFile(
  //   `./tmp/md-ast-${id}-new.json`,
  //   JSON.stringify(newMAST, null, 2),
  //   () => {
  //     console.log('NEW:', id)
  //   }
  // )

  return newMAST
}
