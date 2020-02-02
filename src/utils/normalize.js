/**
 * Normalize a long string.
 *
 * @param {string} input the text to normalize
 * @param {object|null} options options
 *
 * @option options
 * @param {boolean} removeTrailing = true,
 * @param {boolean} leftTrim = true,
 * @param {boolean} rightTrim = true,
 * @param {boolean} removeInitialLineFeed = true,
 * @param {boolean} tabsToSpaces = true,
 * @param {number} indent = 2,
 *
 * @returns {string} normalized string
 */
export function normalize(
  input,
  { removeTrailing, leftTrim, rightTrim, removeInitialLineFeed, tabsToSpaces, indent } = {
    removeTrailing: true,
    leftTrim: true,
    rightTrim: true,
    removeInitialLineFeed: true,
    tabsToSpaces: true,
    indent: 2,
  }
) {
  let output = input

  if (removeTrailing) {
    output = output.replace(/\s*?$/gm, '')
  }

  if (leftTrim) {
    output = output.replace(/^\s+/, '')
  }

  if (rightTrim) {
    output = output.replace(/\s+$/, '')
  }

  if (removeInitialLineFeed) {
    output = output.replace(/^(?:\r?\n|\r)/, '')
  }

  if (tabsToSpaces) {
    output = output.replace(/\t/g, new Array(++indent).join(' '))
  }

  return output
}
