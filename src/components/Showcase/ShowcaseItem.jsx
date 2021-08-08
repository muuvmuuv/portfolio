import { Link } from "gatsby"
import PropType from "prop-types"
import React from "react"

import { Backdrop } from "../Backdrop/Backdrop"
import { content, item } from "./ShowcaseItem.module.scss"

const ShowcaseItem = ({ children, href, image, alt }) => (
  <Link className={item} to={href}>
    <Backdrop image={image} alt={alt}></Backdrop>
    <div className={content}>{children}</div>
  </Link>
)

ShowcaseItem.propTypes = {
  children: PropType.node.isRequired,
  href: PropType.string.isRequired,
  image: PropType.object.isRequired,
  alt: PropType.string.isRequired,
}

export { ShowcaseItem }
