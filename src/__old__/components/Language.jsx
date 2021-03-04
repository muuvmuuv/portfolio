import React from 'react'

import DataType from './DataType'

const Language = ({ code }) => {
  switch (code) {
    case 'de':
      return (
        <span className="lang" aria-label="German" role="img">
          🇩🇪
        </span>
      )
    case 'en':
      return (
        <span className="lang" aria-label="English" role="img">
          🇬🇧
        </span>
      )
    default:
      return <DataType type="null" tooltip="Country code unknown"></DataType>
  }
}

export default Language
