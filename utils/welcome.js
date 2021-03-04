const { yellow, blue } = require("kleur")

const { activeEnvironment, isAudit } = require("./environment")
const { getVersion } = require("./version")

const welcome = () => {
  console.log(`
   __  __                  _           _______  _       _ _        _ 
  |  \\/  |                (_)         / /  __ \\(_)     (_) |      | |
  | \\  / | __ _ _ ____   ___ _ __    / /| |  | |_  __ _ _| |_ __ _| |
  | |\\/| |/ _\` | '__\\ \\ / / | '_ \\  / / | |  | | |/ _\` | | __/ _\` | |
  | |  | | (_| | |   \\ V /| | | | |/ /  | |__| | | (_| | | || (_| | |
  |_|  |_|\\__,_|_|    \\_/ |_|_| |_/_/   |_____/|_|\\__, |_|\\__\\__,_|_|
                                                   __/ |             
  Copyright by Marvin Heilemann (muuvmuuv)        |___/              
  `)
  console.log(`  Version: ${blue(getVersion())}`)
  console.log(`  Environ: ${yellow(activeEnvironment)}`)
  console.log(`  Testing: ${yellow(isAudit)}`)
  console.log()
}

module.exports = welcome

if (require.main === module) {
  welcome()
}
