const pkg = require('../package.json')

/**
 * Get env info.
 */
const activeEnv =
  process.env.GATSBY_ACTIVE_ENV || process.env.NODE_ENV || 'development'
const isDev = activeEnv === 'development'
const isProd = activeEnv === 'production'

/**
 * Slugify a string.
 */
const slugify = (text, separator) => {
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
 * Print a image to the console.
 */
const consoleImage = (src, scale = 50) => {
  const img = new Image()

  img.onload = function() {
    const width = Math.floor((this.width / 100) * scale)
    const height = Math.floor((this.height / 100) * scale)
    const style = `
      font-size: 1px;
      padding: ${height}px ${width}px;
      background: url(${src}) no-repeat;
      background-size: contain;
    `
    console.log('%c ', style)
  }

  img.src = src
}

/**
 * Return current version, but only minor, major, patches will always be zero.
 *
 * @param {boolean} dots Remove dots from version
 */
const getPkgVersion = (dots = true) => {
  let version = pkg.version.replace(/\.(?:.(?!\.))+$/, '.0')
  if (!dots) {
    version = version.replace(/\./g, '')
  }
  return version
}

module.exports = {
  getPkgVersion,
  activeEnv,
  isDev,
  isProd,
  slugify,
  consoleImage,
}
