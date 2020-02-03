const fs = require('fs')
const path = require('path')
const { bold, dim } = require('kleur')

const { isDev } = require('../../utils/environment')
const { removeTrailingSlash, stringCapitalize } = require('../../utils/helper')

module.exports = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  const {
    data: { allMdx },
  } = await graphql(`
    {
      allMdx(filter: { fields: { slug: { ne: null } } }) {
        edges {
          node {
            frontmatter {
              title
              published
            }
            fields {
              slug
              source
            }
          }
        }
      }
    }
  `)

  allMdx.edges.forEach(({ node }) => {
    if (isDev) {
      console.log()
      console.log(dim(`Creating page`))
      console.log(bold(node.frontmatter.title))
      console.log(JSON.stringify(node.fields, null, 2))
      console.log(JSON.stringify(node.frontmatter, null, 2))
      console.log()
    }

    const templateName = stringCapitalize(node.fields.source)
    const templatePath = path.resolve(`./src/templates/${templateName}Single.jsx`)
    const slug = removeTrailingSlash(node.fields.slug)

    if (!fs.existsSync(templatePath)) {
      reporter.info(`No template exist for: ${templateName}`)
      return
    }

    return createPage({
      path: slug,
      component: path.resolve(`./src/templates/${templateName}Single.jsx`),
      context: {
        slug,
      },
    })
  })
}
