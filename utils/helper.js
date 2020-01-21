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
 * Remove trainling slash from URI.
 */
module.exports.removeTrailingSlash = (path) => {
  return path === `/` ? path : path.replace(/\/$/, '')
}
