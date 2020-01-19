import React, { useContext } from 'react'

import { ThemeContext, modes } from '../store/theme'

const ThemeSwitch = () => {
  const { mode, toggle, theme } = useContext(ThemeContext)

  const current = modes.findIndex((m) => m === mode)
  const index = current + 1 >= modes.length ? 0 : current + 1
  const nextMode = modes[index]

  function toggleTheme(event) {
    const element = event.target
    element.classList.add('animating')
    toggle()
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
      mode={mode}
      theme={theme}
      onAnimationEnd={onAnimationEnd}
      aria-label={`Switch to ${nextMode} appearance`}
      title={`Switch to ${nextMode} appearance`}
    ></button>
  )
}

export default ThemeSwitch
