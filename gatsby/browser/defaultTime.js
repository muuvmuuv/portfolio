const dayjs = require('dayjs')
const UTC = require('dayjs/plugin/utc')
const LocalizedFormat = require('dayjs/plugin/localizedFormat')

const { isDev } = require('../environment.js')
const { getLocale } = require('../../src/utils/locale')

// include locale for each language (manually!)
require('dayjs/locale/de')

module.exports = () => {
  const locale = getLocale()

  dayjs.extend(LocalizedFormat)
  dayjs.extend(UTC)

  dayjs.locale(locale)

  if (isDev) {
    console.log('Datetime:', dayjs().format('LLLL'))
  }
}
