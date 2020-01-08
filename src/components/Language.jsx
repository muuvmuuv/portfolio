import React from 'react'

const Language = ({ lang }) => {
  switch (lang) {
    case 'de':
      return (
        <span className="lang" aria-label="German" role="img">
          🇩🇪
        </span>
      )
    case 'en':
      return (
        <span className="lang" aria-label="English" role="img">
          🇺🇸
        </span>
      )
    default:
      return <span className="status">Unknown language `{lang}`</span>
  }
}

export default Language
