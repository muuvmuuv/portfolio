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
 * Return the app major and minor without patch version.
 */
module.exports.getVersion = () => {
  const version = require('../package.json').version
  return version
}

/**
 * Return the app major and minor without patch version.
 */
module.exports.versionMajorMinor = () => {
  let version = this.getVersion()
  const major = require('semver/functions/major')(version)
  const minor = require('semver/functions/minor')(version)
  if (!major || !minor) {
    throw new Error('Major and minor could not be parsed!')
  }
  version = `${major}.${minor}`
  return version
}

/**
 * Remove trainling slash from URI.
 */
module.exports.removeTrailingSlash = (path) => {
  return path === `/` ? path : path.replace(/\/$/, '')
}
