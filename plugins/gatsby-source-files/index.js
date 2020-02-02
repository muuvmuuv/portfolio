const fs = require(`fs-extra`) // use promise

function loadNodeContent(fileNode) {
  return fs.readFile(fileNode.absolutePath, `utf-8`)
}

exports.loadNodeContent = loadNodeContent
