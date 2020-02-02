const fs = require('fs')
const path = require('path')
const { createFileNode } = require('gatsby-source-filesystem/create-file-node')

module.exports.sourceNodes = async (
  { actions, reporter, createNodeId },
  pluginOptions
) => {
  const { createNode } = actions

  const createAndProcessNode = async (filepath) => {
    pluginOptions.path = path.dirname(filepath)
    const fileNode = await createFileNode(filepath, createNodeId, pluginOptions)
    fileNode.internal.type = 'SingleFile'
    createNode(fileNode)
  }

  if (!pluginOptions.files) {
    reporter.panic(`
You haven't selected files to source for \`gatsby-source-files\`. Please choose
files you want to source before using this plugin.
    `)
  }

  const waitForFiles = pluginOptions.files.map((file) => {
    if (!fs.existsSync(file)) {
      reporter.panic(`
The file passed to \`gatsby-source-files\` does not exist on your file system:
${file}
      `)
    }
    return createAndProcessNode(file)
  })

  return Promise.all(waitForFiles)
}
