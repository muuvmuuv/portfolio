import React from 'react'

const Quote = ({ children, user }) => (
  <div className="quote">
    <p>{children}</p>
    <footer>{user.name}</footer>
  </div>
)

export default Quote
