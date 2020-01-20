/**
 * Slugify a string.
 */
module.exports.slugify = (text, separator) => {
  text = text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[·/_,:;']/g, '-') // Replace unwanted characters with -
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/&/g, '-and-') // Replace & with 'and'
    .replace(/[^\w-]+/g, '') // Remove all non-word chars
    .replace(/-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text

  if (separator && separator !== '-') {
    text = text.replace(/-/g, separator)
  }

  return text
}

/**
 * Return the app version.
 *
 * @param {boolean} version select which version to return
 * @param {boolean} noDots remove the dots
 */
module.exports.getVersion = (
  version = ['major', 'minor', 'patch'],
  includeDots = true
) => {
  const pkgVersion = require('../package.json').version

  if (includeDots) return pkgVersion

  return version
    .map((v) => require(`semver/functions/${v}`)(pkgVersion))
    .join('')
}

/**
 * Remove trainling slash from URI.
 */
module.exports.removeTrailingSlash = (path) => {
  return path === `/` ? path : path.replace(/\/$/, '')
}
