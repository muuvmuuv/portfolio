const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { bgYellow } = require('kleur')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const query = graphql(`
    {
      allMarkdownRemark(
        filter: { fields: { slug: { ne: null } } }
        sort: { fields: [fields___started, fields___ended], order: ASC }
      ) {
        edges {
          node {
            frontmatter {
              published
            }
            fields {
              slug
              started
              ended
            }
          }
        }
      }
    }
  `)

  return query.then(({ data: { allMarkdownRemark }, errors }) => {
    if (errors || !allMarkdownRemark) {
      return Promise.reject(errors)
    }

    allMarkdownRemark.edges.forEach(({ node }) => {
      console.log()
      console.log('Creating page for...')
      console.log(node.fields.slug)
      console.log(node.fields)
      console.log(node.frontmatter)
      console.log()

      if (!node.frontmatter.published) {
        console.log(
          bgYellow().black('This page is not published:'),
          node.fields.slug
        )
        return
      }

      return createPage({
        path: node.fields.slug,
        component: path.resolve('./src/templates/PortfolioSingle.jsx'),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          slug: node.fields.slug,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, getNode, actions }) => {
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

    const slug = createFilePath({ node, getNode })
    const fileNode = getNode(node.parent)
    const source = fileNode.sourceInstanceName

    console.log(node.frontmatter)

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
    createNodeField({
      node,
      name: 'source',
      value: source,
    })
    createNodeField({
      node,
      name: 'started',
      value: node.frontmatter.started,
    })
    createNodeField({
      node,
      name: 'ended',
      value: node.frontmatter.ended,
    })
  }
}
