const { createFilePath } = require("gatsby-source-filesystem")
const { bold, dim } = require("kleur")

const { isProd, isDev } = require("../../utils/environment")
const { stringSlugify } = require("../../utils/helper")

module.exports = async ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if ([`MarkdownRemark`, `Mdx`].includes(node.internal.type)) {
    const fileNode = getNode(node.parent)
    const source = fileNode.sourceInstanceName

    if (isDev) {
      console.log()
      console.log(dim(`Creating ${source} node`))
      console.log(bold(fileNode.relativePath))
      console.log(fileNode)
    }

    if (node.frontmatter.published === false && isProd) {
      return // skip this unpublished stuff only in production
    }

    let parent // set parent if the source is a children of another source
    let slug = node.frontmatter.slug || undefined
    if (!slug) {
      slug = createFilePath({ node, getNode })
    }
    slug = stringSlugify(slug)

    let defaults = {
      published: true,
    }

    switch (source) {
      case "projects":
        defaults = {
          ...defaults,
          categories: [],
          tags: [],
          status: "wip",
          website: "",
          team: [],
          roles: [],
        }
        node.frontmatter = { ...defaults, ...node.frontmatter }
        break

      case "writings":
        defaults = {
          ...defaults,
          categories: [],
          tags: [],
        }
        break

      case "education":
        parent = "about"
        defaults = {
          ...defaults,
          qualifications: [],
        }
        node.frontmatter = { ...defaults, ...node.frontmatter }
        break

      case "experience":
        parent = "about"
        defaults = {
          ...defaults,
          responsibilities: [],
        }
        node.frontmatter = { ...defaults, ...node.frontmatter }
        break
    }

    if (isDev) {
      console.log(node.frontmatter)
    }

    createNodeField({
      node,
      name: "slug",
      value: parent ? `/${parent}/${source}/${slug}` : `/${source}/${slug}`,
    })
    createNodeField({
      node,
      name: "source",
      value: source,
    })
  }
}
