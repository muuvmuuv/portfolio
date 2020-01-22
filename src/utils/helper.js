import dayjs from 'dayjs'

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
export function getRandomDate(
  start = dayjs().subtract(1, 'year'),
  end = dayjs()
) {
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
