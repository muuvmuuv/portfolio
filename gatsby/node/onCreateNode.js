const { createFilePath } = require('gatsby-source-filesystem')
const { slugify } = require('../utils')

module.exports = async ({ node, getNode, actions }) => {
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

    let slug = node.frontmatter.slug
    if (!slug) {
      slug = createFilePath({ node, getNode })
    }
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
