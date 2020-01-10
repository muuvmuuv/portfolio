import React, { useContext } from 'react'

import { Theme } from '../store'
import { modes } from '../store/theme'

/**
 * @link https://codepen.io/muuvmuuv/pen/jOEzYLa?editors=0110
 */
const ThemeSwitch = () => {
  const themeState = useContext(Theme.State)

  const current = modes.findIndex((m) => m === themeState.mode)
  const index = current + 1 >= modes.length ? 0 : current + 1
  const nextMode = modes[index]

  function toggleTheme(event) {
    const element = event.target
    element.classList.add('animating')
    themeState.toggle()
  }

  function onAnimationEnd(event) {
    const element = event.target
    element.classList.remove('animating')
  }

  return (
    <button
      id="theme-switch"
      onKeyPress={toggleTheme}
      onClick={toggleTheme}
      mode={themeState.mode}
      theme={themeState.theme}
      onAnimationEnd={onAnimationEnd}
      aria-label={`Switch to ${nextMode} appearance`}
      title={`Switch to ${nextMode} appearance`}
    ></button>
  )
}

export default ThemeSwitch
