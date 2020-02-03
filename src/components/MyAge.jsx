import React, { useState, useEffect } from 'react'
import dayjs from 'dayjs'

import { getElapsedTime } from '../utils/helper'

const MyAge = () => {
  const dob = dayjs('1996-06-13 10:20:00')
  const dobI18N = dob.format('LLLL')
  const dobISO = dob.format('YYYY-MM-DD')
  const age = getElapsedTime(dobISO).years

  const getAgeString = () => {
    const { years, months, days, hours, minutes, seconds } = getElapsedTime(dobISO)
    return `
Born at ${dobI18N}; ${years} years, ${months} months, ${days} days,
${hours} hours, ${minutes} minutes and ${seconds} seconds ago
    `
  }

  const [state, setState] = useState(getAgeString())

  useEffect(() => {
    const id = setInterval(() => {
      setState(getAgeString())
    }, 1000)
    return () => clearInterval(id)
  })

  return (
    <i aria-label={state} data-position="top" className="tooltip my-age">
      {age} years old
    </i>
  )
}

export default MyAge
