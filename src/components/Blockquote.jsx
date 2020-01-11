import React from 'react'
// import Img from 'gatsby-image'

const Blockquote = ({ children, user }) => {
  return (
    <blockquote>
      <p>{children}</p>
      <footer>{user.name}</footer>
    </blockquote>
  )
}

export default Blockquote
