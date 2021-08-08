import dayjs from "dayjs"
import advanced from "dayjs/plugin/advancedFormat"
import duration from "dayjs/plugin/duration"
import localized from "dayjs/plugin/localizedFormat"
import relative from "dayjs/plugin/relativeTime"

import { isDevelopment } from "../../src/utils/environment"

import "dayjs/locale/de"

export const onClientEntry = () => {
  dayjs.extend(advanced)
  dayjs.extend(duration)
  dayjs.extend(localized)
  dayjs.extend(relative)

  dayjs.locale("de")

  if (isDevelopment) {
    console.log("Datetime:", dayjs().format("LLLL"))
  }
}
