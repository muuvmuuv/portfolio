import { GatsbyImage, getImage } from "gatsby-plugin-image"
import PropType from "prop-types"
import React from "react"

import { backdrop, image as imageStyle } from "./Backdrop.module.scss"

const Backdrop = ({ image, alt }) => {
  image = getImage(image)

  return (
    <div className={backdrop}>
      <GatsbyImage className={imageStyle} image={image} alt={alt} />
    </div>
  )
}

Backdrop.propTypes = {
  image: PropType.any.isRequired,
  alt: PropType.string,
}

export { Backdrop }
