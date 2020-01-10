import React from 'react'
import dayjs from 'dayjs'

import DataType from './DataType'

const Time = ({ date, format = 'L' }) => {
  console.log(date)

  if (!date) {
    return <DataType tooltip="Not set" type="null"></DataType>
  }

  const parsedDate = dayjs(date)
  if (!parsedDate.isValid()) {
    console.error('Date is not valid', date, parsedDate)
  }

  const niceDate = parsedDate.format(format)
  const dateTime = parsedDate.format()

  return <time dateTime={dateTime}>{niceDate}</time>
}

export default Time
