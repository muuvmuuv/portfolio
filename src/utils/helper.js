import dayjs from "dayjs"

/**
 * Update current location hash.
 *
 * @param {string} newHash the new hash
 */
export function updateLocationHash(newHash) {
  if (window.history.pushState) {
    // eslint-disable-next-line unicorn/no-null
    window.history.pushState(null, null, `#${newHash}`)
  } else {
    window.location.hash = newHash
  }
}

/**
 * Get elapsed time between two dates.
 *
 * @param {string} start date string
 * @param {string} end date string
 *
 * @returns {object} object containing all time relevant information
 */
export function getElapsedTime(start, end) {
  start = dayjs(start)
  end = dayjs(end)

  const duration = dayjs.duration(end.diff(start))

  return duration
}

/**
 * Slugify a string.
 *
 * @param {string} text to slugify
 * @param {string} separator a separator if needed
 *
 * @returns {string}
 */
export function stringSlugify(text, separator) {
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
 * Truncate a string from the middle.
 *
 * @param {string} str string to truncate
 * @param {number} maxLength string max length
 * @param {string} separator set a separator
 */
export function stringTruncateMiddle(string, maxLength = 50, separator = "...") {
  if (string.length < maxLength) {
    return string
  }

  const length = string.length
  const charsToShow = maxLength - separator.length
  const frontChars = Math.ceil(charsToShow / 2)
  const backChars = Math.floor(charsToShow / 2)

  return (
    string.slice(0, Math.max(0, frontChars)) +
    separator +
    string.slice(length - backChars)
  )
}

/**
 * Turn an array to an object by key/value.
 *
 * @param {any[]} array
 * @param {string} key
 * @param {string} value
 *
 * @returns {object}
 */
export function arrayToObject(array, key, value) {
  const result = []
  for (const item of array) {
    result[item[key]] = item[value]
  }
  return result
}
