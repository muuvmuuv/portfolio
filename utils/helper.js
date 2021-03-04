/**
 * Slugify a string.
 *
 * @param {string} text to slugify
 * @param {string} separator a separator if needed
 *
 * @returns {string}
 */
module.exports.stringSlugify = (text, separator) => {
  text = text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[',/:;_·]/g, "-") // Replace unwanted characters with -
    .replace(/\s+/g, "-") // Replace spaces with -
    .replace(/&/g, "-and-") // Replace & with 'and'
    .replace(/[^\w-]+/g, "") // Remove all non-word chars
    .replace(/-+/g, "-") // Replace multiple - with single -
    .replace(/^-+/, "") // Trim - from start of text
    .replace(/-+$/, "") // Trim - from end of text

  if (separator && separator !== "-") {
    text = text.replace(/-/g, separator)
  }

  return text
}

/**
 * Remove trainling slash from URI.
 *
 * @param {string} path the URI
 *
 * @returns {string}
 */
module.exports.removeTrailingSlash = (path) => {
  return path === `/` ? path : path.replace(/\/$/, "")
}

/**
 * Capitalize a string.
 *
 * @param {string} string
 *
 * @returns {string} capitalized string
 */
module.exports.stringCapitalize = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
