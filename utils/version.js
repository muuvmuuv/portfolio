const appVersion = require('../package.json').version

/**
 * Return the app version.
 */
module.exports.getVersion = () => {
  return appVersion
}

/**
 * Transform a version.
 *
 * @param {string} version a valid semver version
 * @param {string[]} parts select which parts to return
 * @param {boolean} noDots remove the dots
 */
module.exports.transformVersion = (
  version,
  parts = ['major', 'minor', 'patch'],
  includeDots = true
) => {
  const versionParts = parts.map((part) =>
    require(`semver/functions/${part}`)(version)
  )

  if (includeDots) {
    return versionParts.join('.')
  } else {
    return versionParts.join('')
  }
}
