import dayjs from 'dayjs'

/**
 * Update current location hash.
 */
export function updateLocationHash(newHash) {
  if (window.history.pushState) {
    window.history.pushState(null, null, `#${newHash}`)
  } else {
    window.location.hash = newHash
  }
}

/**
 * Returns a random date between start and end
 */
export function getRandomDate(
  start = dayjs().subtract(1, 'year'),
  end = dayjs()
) {
  return dayjs(+start + Math.random() * (end - start))
}

/**
 * Returns a random number between min (inclusive) and max (exclusive)
 *
 * @see https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
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
 * @see https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
 */
export function getRandomInt(min = 0, max = 999) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

export function s(n = 1) {
  return '&nbsp;'.repeat(n)
}
