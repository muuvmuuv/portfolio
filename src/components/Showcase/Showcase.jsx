import classNames from "classnames"
import PropType from "prop-types"
import React from "react"

import { showcase } from "./Showcase.module.scss"

const Showcase = ({ children }) => <div className={classNames(showcase)}>{children}</div>

Showcase.propTypes = {
  children: PropType.node.isRequired,
}

export { Showcase }
