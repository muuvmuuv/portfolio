export const languages = ['en', 'de']

export function getLanguage() {
  return window.navigator.language
}

export function getLocale() {
  const language = getLanguage()
  const locale = languages.find((locale) => {
    if (locale === language) {
      return true
    }
    const regex = new RegExp(`${locale}-.*`)
    return regex.test(language)
  })
  return locale ? locale : languages[0]
}
