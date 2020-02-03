import dayjs from 'dayjs'
import moment from 'moment'

/**
 * Update current location hash.
 *
 * @param {string} newHash a hash value
 */
export function updateLocationHash(newHash) {
  if (window.history.pushState) {
    window.history.pushState(null, null, `#${newHash}`)
  } else {
    window.location.hash = newHash
  }
}

/**
 * Returns a random date between start and end.
 *
 * @param {dayjs.Dayjs} start from where to start
 * @param {dayjs.Dayjs} end to end
 *
 * @returns {dayjs.Dayjs} random date
 */
export function getRandomDate(start = dayjs().subtract(1, 'year'), end = dayjs()) {
  return dayjs(+start + Math.random() * (end - start))
}

/**
 * Get documents real height.
 *
 * @returns {number} the documents real height
 */
export function getDocumentHeight() {
  const body = document.body
  const html = document.documentElement

  let height = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    html.clientHeight,
    html.scrollHeight,
    html.offsetHeight
  )

  return height
}

/**
 * Scroll to a HTML element by target.
 *
 * @param {HTMLElement} target HTML element to scroll to
 *
 * @returns {number} Y position of target element
 */
export function scrollToElement(target) {
  const offset = 50

  const scrollY = window.scrollY || window.pageYOffset
  const headerHeight = document.getElementById('header').offsetHeight
  const elementPosition = target.getBoundingClientRect().top + scrollY
  const offsetPosition = Math.round(elementPosition - headerHeight - offset)

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  })

  return offsetPosition
}

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 *
 * @see https://stackoverflow.com/a/1527820/4628787
 *
 * @param {number} min
 * @param {number} max
 *
 * @returns {number} random number
 */
export function getRandomArbitrary(min = 0, max = 999) {
  return Math.random() * (max - min) + min
}

/**
 * Returns a random integer between min (inclusive) and max (inclusive).
 * The value is no lower than min (or the next integer greater than min
 * if min isn't an integer) and no greater than max (or the next integer
 * lower than max if max isn't an integer).
 *
 * @note Using Math.round() will give you a non-uniform distribution!
 *
 * @see https://stackoverflow.com/a/1527820/4628787
 *
 * @param {number} min
 * @param {number} max
 *
 * @returns {number} random number
 */
export function getRandomInt(min = 0, max = 999) {
  min = Math.ceil(min)
  max = Math.floor(max)

  return Math.floor(Math.random() * (max - min + 1)) + min
}

/**
 * Returns empty HTML escaped spaces.
 *
 * @param {number} n how many times to repeat
 *
 * @returns {string} whitespace whitespace whitesp...
 */
export function s(n = 1) {
  return '&nbsp;'.repeat(n)
}

/**
 * Get elapsed time of a date.
 *
 * @param {string} start iso date string
 * @param {string} end iso date string
 *
 * @returns {object} object containing all time relevant information
 */
export function getElapsedTime(start, end = new Date()) {
  // TODO: replace with https://github.com/iamkun/dayjs/issues/564
  start = new moment(start)
  end = new moment(end)

  const duration = moment.duration(end.diff(start))

  const out = {
    years: duration.years(),
    months: duration.months(),
    days: duration.days(),
    hours: duration.hours(),
    minutes: duration.minutes(),
    seconds: duration.seconds(),
  }

  return out
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
 * Capitalize first letter of a string.
 *
 * @param {string} string string to capitalize first letter
 *
 * @returns {string} the string
 */
export function capitalizeString(string) {
  return string.charAt(0).toUpperCase() + string.slice(1)
}
