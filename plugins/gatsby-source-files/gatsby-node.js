const fs = require('fs')
const path = require('path')
const { createFileNode } = require('gatsby-source-filesystem/create-file-node')

module.exports.sourceNodes = async (
  { actions, reporter, createNodeId },
  pluginOptions
) => {
  const { createNode } = actions

  async function* walkDirectory(dir) {
    const inner = await fs.readdirSync(dir, { withFileTypes: true })
    for (const pathname of inner) {
      const res = path.resolve(dir, pathname.name)
      if (pathname.isDirectory()) {
        yield* walkDirectory(res)
      } else {
        yield path.parse(res)
      }
    }
  }

  const createAndProcessNode = async (filepath) => {
    pluginOptions.path = path.dirname(filepath)
    const fileNode = await createFileNode(filepath, createNodeId, pluginOptions)
    fileNode.internal.type = 'SingleFile'
    createNode(fileNode)
  }

  const processDirectory = async (dir) => {
    const promisses = []

    for await (const f of walkDirectory(dir)) {
      const fileextension = f.ext.replace('.', '')
      if (pluginOptions.extensions.includes(fileextension)) {
        promisses.push(createAndProcessNode(path.format(f)))
      }
    }

    return Promise.all(promisses)
  }

  if (!pluginOptions.files) {
    reporter.panic(`
You haven't selected files to source for \`gatsby-source-files\`. Please choose
files you want to source before using this plugin.
    `)
  }

  const promisses = pluginOptions.files.map((pathname) => {
    if (!fs.existsSync(pathname)) {
      reporter.panic(`
The file passed to \`gatsby-source-files\` does not exist on your file system:
${pathname}
      `)
    }

    if (fs.lstatSync(pathname).isDirectory()) {
      return processDirectory(pathname)
    }

    return createAndProcessNode(pathname)
  })

  return Promise.all(promisses)
}
