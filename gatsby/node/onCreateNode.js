const { bold, dim } = require('kleur')
const { createFilePath } = require('gatsby-source-filesystem')

const { isProd, isDev } = require('../../utils/environment')
const { stringSlugify } = require('../../utils/helper')

module.exports = async ({ node, getNode, actions }) => {
  const { createNodeField, createNode } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent)
    const source = fileNode.sourceInstanceName

    if (isDev) {
      console.log()
      console.log(dim('Creating node'))
      console.log(bold(fileNode.relativePath))
      console.log(fileNode)
    }

    let frontmatterDefault = {
      published: true,
      categories: [],
      tags: [],
    }

    switch (source) {
      case 'projects':
        frontmatterDefault = {
          ...frontmatterDefault,
          status: 'wip',
          website: '',
          team: [],
          roles: [],
        }
        break
      case 'package':
        return
    }

    node.frontmatter = { ...frontmatterDefault, ...node.frontmatter }

    if (node.frontmatter.published === false && isProd) {
      return // skip this unpublished trash only in production
    }

    if (isDev) {
      console.log(node.frontmatter)
    }

    let slug = node.frontmatter.slug
    if (!slug) {
      slug = createFilePath({ node, getNode })
    }
    slug = stringSlugify(slug)

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
