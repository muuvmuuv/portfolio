import React from 'react'

import DataType from './DataType'

const TimeToRead = ({ time }) => {
  if (!time) {
    return <DataType tooltip="Not set" type="null"></DataType>
  }

  return (
    <span className="ttr" itemProp="timeRequired" content={`PT${time}M`}>
      ~{time}m
    </span>
  )
}

export default TimeToRead
