import React from 'react'

import DataType from './DataType'

const TimeToRead = ({ time }) => {
  if (!time) {
    return <DataType tooltip="Not set" type="null"></DataType>
  }

  return <span className="ttr">~{time}m</span>
}

export default TimeToRead
