import React from 'react'

const Label = ({ text, type, className }) => {
  return <span className={`label label--${type.toLowerCase()} ${className}`}>{text}</span>
}

export default Label
