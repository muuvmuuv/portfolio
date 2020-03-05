const { yellow, blue } = require('kleur')
const figlet = require('figlet')

const siteMetadata = require('../metadata')
const { getVersion } = require('./version')
const { activeEnv, isAudit } = require('./environment')

module.exports = () => {
  console.log(
    figlet.textSync(siteMetadata.siteTitle, {
      font: 'Bulbhead',
    })
  )
  console.log()
  console.log(`Version: ${blue(getVersion())}`)
  console.log(`Environ: ${yellow(activeEnv)}`)
  console.log(`Testing: ${yellow(isAudit)}`)
  console.log()
}
