import React from 'react'

const Placeholder = ({ children, className = '' }) => (
  <div className={`placeholder ${className}`}>
    <span>{children}</span>
  </div>
)

export default Placeholder
