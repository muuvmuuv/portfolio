import React from 'react'

import DataType from './DataType'

const Language = ({ code }) => {
  switch (code) {
    case 'de':
      return (
        <span className="lang" aria-label="German" role="img" inLanguage="de-DE">
          🇩🇪
        </span>
      )
    case 'en':
      return (
        <span className="lang" aria-label="English" role="img" inLanguage="en-GB">
          🇬🇧
        </span>
      )
    default:
      return <DataType type="null" tooltip="Country code unknown"></DataType>
  }
}

export default Language
