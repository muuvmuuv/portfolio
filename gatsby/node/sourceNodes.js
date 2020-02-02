const fs = require('fs')
const path = require('path')

const toUpperCase = ([first, ...rest]) => [first.toUpperCase(), ...rest].join('')

module.exports = async ({ actions, createContentDigest, store }) => {
  const { directory } = store.getState().program

  const raw = fs.readFileSync(path.join(directory, 'package.json'))
  const content = JSON.parse(raw)

  ;['dependencies', 'devDependencies'].forEach((field) => {
    const newFieldName = 'all' + toUpperCase(field)
    content[newFieldName] = Object.keys(content[field]).map((key) => ({
      name: key,
      version: content[field][key],
    }))
  })

  actions.createNode({
    ...content,
    id: 'package-json',
    internal: {
      contentDigest: createContentDigest(content),
      type: 'PackageJson',
    },
  })
}
