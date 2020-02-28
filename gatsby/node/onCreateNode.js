const { bold, dim } = require('kleur')
const { createFilePath } = require('gatsby-source-filesystem')

const { isProd, isDev } = require('../../utils/environment')
const { stringSlugify } = require('../../utils/helper')

module.exports = async ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if ([`MarkdownRemark`, `Mdx`].includes(node.internal.type)) {
    const fileNode = getNode(node.parent)
    const source = fileNode.sourceInstanceName

    if (isDev) {
      console.log()
      console.log(dim(`Creating ${source} node`))
      console.log(bold(fileNode.relativePath))
      console.log(node.frontmatter)
      console.log(fileNode)
    }

    if (node.frontmatter.published === false && isProd) {
      return // skip this unpublished stuff only in production
    }

    let slug = node.frontmatter.slug || undefined
    if (!slug) {
      slug = createFilePath({ node, getNode })
    }
    slug = stringSlugify(slug)

    let defaults = {
      published: true,
    }

    switch (source) {
      case 'projects':
        defaults = {
          ...defaults,
          categories: [],
          tags: [],
          status: 'wip',
          website: '',
          team: [],
          roles: [],
        }
        node.frontmatter = { ...defaults, ...node.frontmatter }
        break
      case 'writings':
        defaults = {
          ...defaults,
          categories: [],
          tags: [],
        }
        node.frontmatter = { ...defaults, ...node.frontmatter }
        break
    }

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
