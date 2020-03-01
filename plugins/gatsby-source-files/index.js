const fs = require(`fs`).promises

function loadNodeContent(fileNode) {
  return fs.readFile(fileNode.absolutePath, `utf-8`)
}

exports.loadNodeContent = loadNodeContent
