const { bold, dim } = require('kleur')
const { createFilePath } = require('gatsby-source-filesystem')

const { isProd, isDev } = require('../../utils/environment')
const { stringSlugify } = require('../../utils/helper')

module.exports = async ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'MarkdownRemark') {
    const fileNode = getNode(node.parent)
    const source = fileNode.sourceInstanceName

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
    }

    node.frontmatter = { ...frontmatterDefault, ...node.frontmatter }

    if (node.frontmatter.published === false && isProd) {
      return // skip this unpublished trash only in production
    }

    if (isDev) {
      console.log()
      console.log(dim('Creating node'))
      console.log(bold(node.frontmatter.title))
      console.log(fileNode)
      console.log(node.frontmatter)
      console.log()
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
