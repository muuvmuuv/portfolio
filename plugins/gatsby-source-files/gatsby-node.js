const fs = require('fs')
const { createFileNode } = require('gatsby-source-filesystem/create-file-node')

exports.sourceNodes = ({ actions, reporter, createNodeId }, pluginOptions) => {
  const { createNode } = actions

  const createAndProcessNode = (path) => {
    const fileNodePromise = createFileNode(path, createNodeId, pluginOptions).then(
      (fileNode) => {
        fileNode.internal.type = 'SingleFile'
        createNode(fileNode)
        return null
      }
    )
    return fileNodePromise
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
