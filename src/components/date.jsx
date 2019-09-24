import React from 'react'
import dayjs from 'dayjs'

const Date = ({ date, format = 'DD.MM.YYYY' }) => {
  if (!date) {
    return (
      <span
        className="mono color--orange tooltip cursor-help"
        aria-label="Not set"
        role="tooltip"
        data-position="bottom"
      >
        null
      </span>
    )
  }

  date = new window.Date(date)
  // BUG: https://github.com/iamkun/dayjs/issues/593
  // console.log(dayjs(date).format())
  // console.log(dayjs(date).format('LL'))
  // console.log(dayjs(date).format('D. M YYYY'))

  const niceDate = dayjs(date).format(format)
  const dateTime = dayjs(date).format()

  return <time dateTime={dateTime}>{niceDate}</time>
}

export default Date
