const dayjs = require('dayjs')
const UTC = require('dayjs/plugin/utc')
const LocalizedFormat = require('dayjs/plugin/localizedFormat')
const { isDev } = require('../environment.js')

require('dayjs/locale/de')

module.exports = () => {
  dayjs.extend(LocalizedFormat)
  dayjs.extend(UTC)
  dayjs.locale('en')

  if (isDev) {
    console.log('Preferred language:', window.navigator.language)
  }
}
