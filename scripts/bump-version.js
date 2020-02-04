const fs = require('fs')
const path = require('path')
const { Plugin } = require('release-it')
const { transformVersion } = require('../utils/version')

class BumpVersion extends Plugin {
  bump(version) {
    console.log(version)

    return this.createDirectoryTree(version)
  }

  createDirectoryTree(version) {
    return new Promise((resolve) => {
      const dirName = transformVersion(version, ['major', 'minor'])

      fs.mkdir(
        path.resolve(__dirname, '../reports', `v${dirName}.0`),
        { recursive: true },
        (err) => {
          if (err) {
            throw new Error(err.message)
          }
          resolve()
        }
      )
    })
  }
}

module.exports = BumpVersion
