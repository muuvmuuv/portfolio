import React from 'react'
import Img from 'gatsby-image'

const Backdrop = ({ img, alt }) => {
  return (
    <div className="backdrop">
      <Img
        className="img"
        fluid={img}
        objectFit="cover"
        objectPosition="center top"
        alt={alt || 'No alternative text'}
      />
    </div>
  )
}

export default Backdrop
