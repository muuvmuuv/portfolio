import React from 'react'
// import Img from 'gatsby-image'

const Quote = ({ children, user }) => {
  return (
    <div className="quote">
      <p>{children}</p>
      <footer>{user.name}</footer>
    </div>
  )
}

export default Quote
