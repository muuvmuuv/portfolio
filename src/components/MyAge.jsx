import React, { useState, useEffect } from 'react'

import { getElapsedTime } from '../utils/helper'

const MyAge = () => {
  const [state, setState] = useState(null)

  const age = getElapsedTime('1996-06-13').years

  useEffect(() => {
    const id = setInterval(() => {
      const { years, months, days, hours, minutes, seconds } = getElapsedTime(
        '1996-06-13'
      )
      const ageString = `${years} years, ${months} months, ${days} days, ${hours} hours, ${minutes} minutes and ${seconds} seconds`
      setState(ageString)
    }, 1000)

    return () => clearInterval(id)
  })

  return (
    <i aria-label={state} data-position="top" className="tooltip">
      {age} years old
    </i>
  )
}

export default MyAge
