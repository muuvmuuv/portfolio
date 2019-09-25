const pkg = require('./package.json')
const { isProd } = require('./gatsby/utils')
const dayjs = require('dayjs')
const UTC = require('dayjs/plugin/utc')
const LocalizedFormat = require('dayjs/plugin/localizedFormat')

require('./src/styles/app.scss')
require('dayjs/locale/de')

exports.onInitialClientRender = () => {
  setDefaultTime()

  if (isProd) {
    printCorporateMessage()
  }
}

function setDefaultTime() {
  dayjs.extend(LocalizedFormat)
  dayjs.extend(UTC)
  dayjs.locale('en')

  if (window.isDev) {
    console.log('Preferred language:', window.navigator.language)
  }
}

function printCorporateMessage() {
  const colorPrimary = '#00e2a1'
  const colorDark = '#1f242e'

  const styleShared = `
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    line-height: 1.8;
  `
  const styleBold = styleShared + 'font-weight: 700;'
  const styleBadge = `
    padding: 0px 8px;
    margin-bottom: 10px;
    margin-top: 10px;
    font-size: 12px;
    color: #FFFFFF;
  `
  const styleName =
    styleShared +
    styleBadge +
    `
    background: ${colorPrimary};
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
  `
  const styleVersion =
    styleShared +
    styleBadge +
    `
    background: ${colorDark};
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
  `

  console.log(`%cMarvin/Design%cv${pkg.version}`, styleName, styleVersion)
  console.log(
    `%c
Welcome fellow %cdeveloper%c!  🎉
I'm happy to see you here. If you want to have look on my code
and the architecture, my portfolio is available on GitHub:
https://github.com/muuvmuuv/portfolio 🔒
    `,
    styleShared,
    styleBold,
    styleShared
  )
}
