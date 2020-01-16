const dayjs = require('dayjs')
const UTC = require('dayjs/plugin/utc')
const LocalizedFormat = require('dayjs/plugin/localizedFormat')

const { isDev } = require('../environment.js')

const availableLanguages = ['en', 'de']

// include locale for each available language
require('dayjs/locale/de')

const localeHelper = (lang) => {
  const locale = availableLanguages.find((locale) => {
    if (locale === lang) {
      return true
    }
    const regex = new RegExp(`${locale}-.*`)
    return regex.test(lang)
  })
  return locale ? locale : availableLanguages[0]
}

module.exports = () => {
  const lang = window.navigator.language
  const locale = localeHelper(lang)

  dayjs.extend(LocalizedFormat)
  dayjs.extend(UTC)
  dayjs.locale(locale)

  if (isDev) {
    console.log('Preferred language:', lang, locale)
  }
}
