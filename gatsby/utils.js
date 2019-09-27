const pkg = require('../package.json')
const { parsed } = require('dotenv').config()
const metadata = require('../metadata')

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
 * Return current version, but only minor, major, patches will always be zero.
 *
 * @param {boolean} dots Remove dots from version
 */
module.exports.getPkgVersion = (dots = true) => {
  let parsed = pkg.version.replace(/\.(?:.(?!\.))+$/, '.0')
  if (!dots) {
    parsed = parsed.replace(/\./g, '')
  }
  return parsed
}

/**
 * Assign env data to metadata.
 */
module.exports.getSiteMetadata = () => {
  return {
    ...metadata,
    ...{
      siteUrl: parsed.SITE_URL,
    },
  }
}
