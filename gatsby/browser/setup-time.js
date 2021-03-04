const dayjs = require("dayjs")
const LocalizedFormat = require("dayjs/plugin/localizedFormat")

const { isDevelopment } = require("../../utils/environment")

require("dayjs/locale/de")

module.exports.setupTime = () => {
  dayjs.extend(LocalizedFormat)

  dayjs.locale("de")

  if (isDevelopment) {
    console.log("Datetime:", dayjs().format("LLLL"))
  }
}
