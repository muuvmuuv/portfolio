const path = require('path')
const { bgYellow } = require('kleur')
const { removeTrailingSlash } = require('../utils')

module.exports = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allMarkdownRemark(filter: { fields: { slug: { ne: null } } }) {
        edges {
          node {
            frontmatter {
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

  result.data.allMarkdownRemark.edges.forEach(({ node }) => {
    console.log()
    console.log(`(${node.fields.source}) Creating page...`)
    console.log(JSON.stringify(node.fields, null, 2))
    console.log(JSON.stringify(node.frontmatter, null, 2))
    console.log()

    if (!node.frontmatter.published) {
      console.log(
        bgYellow().black('This page is not published:'),
        node.fields.slug
      )
      return
    }

    function capitalizeString(string) {
      return string.charAt(0).toUpperCase() + string.slice(1)
    }

    const templateName = capitalizeString(node.fields.source)
    const slug = removeTrailingSlash(node.fields.slug)

    return createPage({
      path: slug,
      component: path.resolve(`./src/templates/${templateName}Single.jsx`),
      context: {
        slug,
      },
    })
  })
}
