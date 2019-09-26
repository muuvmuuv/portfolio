const pkg = require('../package.json')

/**
 * Return current version, but only minor, major, patches will always be zero.
 *
 * @param {boolean} dots Remove dots from version
 */
function getNewVersion(dots = true) {
  let version = pkg.version.replace(/\.(?:.(?!\.))+$/, '.0')
  if (!dots) {
    version = version.replace(/\./g, '')
  }
  return version
}

module.exports = { getNewVersion }
