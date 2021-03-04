import React from 'react'
import Img from 'gatsby-image'

const Backdrop = ({ img, alt }) =>
  img && (
    <div className="backdrop">
      <Img
        className="img"
        fluid={img}
        objectFit="cover"
        objectPosition="center top"
        loading="eager"
        alt={alt}
      />
    </div>
  )

export default Backdrop
