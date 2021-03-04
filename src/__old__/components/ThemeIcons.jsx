import React from 'react'

import LightSVG from '../images/theme/light.svg'
import DarkSVG from '../images/theme/dark.svg'
import AutoLightSVG from '../images/theme/auto-light.svg'
import AutoDarkSVG from '../images/theme/auto-dark.svg'
import HighContrastSVG from '../images/theme/hc.svg'

export const Light = () => (
  <path
    id="icon-light"
    fill="var(--color-light)"
    fillRule="evenodd"
    d={LightSVG().props.children.props.d}
  />
)

export const Dark = () => (
  <path
    id="icon-dark"
    fill="var(--color-dark)"
    fillRule="evenodd"
    d={DarkSVG().props.children.props.d}
  />
)

export const AutoLight = () => (
  <path
    id="icon-auto-light"
    fill="var(--color-light)"
    fillRule="evenodd"
    d={AutoLightSVG().props.children.props.d}
  />
)

export const AutoDark = () => (
  <path
    id="icon-auto-dark"
    fill="var(--color-dark)"
    fillRule="evenodd"
    d={AutoDarkSVG().props.children.props.d}
  />
)

export const HighContrast = () => (
  <path
    id="icon-high-contrast"
    fill="var(--color-06)"
    fillRule="evenodd"
    d={HighContrastSVG().props.children.props.d}
  />
)
