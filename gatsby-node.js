const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { bgYellow } = require('kleur')
const { slugify } = require('./gatsby/utils')

exports.onCreateNode = async ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const nodeFrontmatterDefault = {
      published: true,
    }

    node.frontmatter = Object.assign(
      {},
      nodeFrontmatterDefault,
      node.frontmatter
    )

    const fileNode = getNode(node.parent)
    const source = fileNode.sourceInstanceName

    let slug = createFilePath({ node, getNode })
    slug = slugify(slug)

    createNodeField({
      node,
      name: 'slug',
      value: `/${source}/${slug}`,
    })
    createNodeField({
      node,
      name: 'source',
      value: source,
    })
  }
}

exports.createPages = async ({ graphql, actions }) => {
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

    return createPage({
      path: node.fields.slug,
      component: path.resolve(`./src/templates/${templateName}Single.jsx`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
}
