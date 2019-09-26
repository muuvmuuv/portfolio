import React from 'react'
import dayjs from 'dayjs'

import { isDev } from '../environment'
import DataType from './DataType'

const Time = ({ date, format = 'L' }) => {
  if (!date) {
    return <DataType tooltip="Not set" type="null"></DataType>
  }

  date = new Date(date)
  if (isDev) {
    console.log(date)
  }
  const niceDate = dayjs(date).format(format)
  const dateTime = dayjs(date).format()

  return <time dateTime={dateTime}>{niceDate}</time>
}

export default Time
