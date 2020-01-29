import React, { useContext } from 'react'
import { animated, useTransition, config } from '@react-spring/web'

import { ThemeContext, modes, Mode } from '../store/theme'
import { Light, Dark, AutoLight, AutoDark } from './ThemeIcons'

const ThemeSwitch = () => {
  const { mode, toggle, theme } = useContext(ThemeContext)

  const current = modes.findIndex((m) => m === mode)
  const index = current + 1 >= modes.length ? 0 : current + 1
  const nextMode = modes[index]

  function toggleTheme() {
    toggle()
  }

  let svgIcon = ''
  switch (mode) {
    case Mode.LIGHT:
      svgIcon = Light
      break
    case Mode.DARK:
      svgIcon = Dark
      break
    case Mode.AUTO:
      if (theme === Mode.LIGHT) {
        svgIcon = AutoLight
      } else {
        svgIcon = AutoDark
      }
      break
  }

  const transitions = useTransition(svgIcon, null, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: config.stiff,
  })

  return (
    <button
      id="theme-switch"
      onKeyPress={toggleTheme}
      onClick={toggleTheme}
      mode={mode}
      theme={theme}
      aria-label={`Switch to ${nextMode} appearance`}
      title={`Switch to ${nextMode} appearance`}
    >
      {transitions.map(({ item: SVGElement, props, key }) => (
        <animated.svg style={{ ...props }} key={key} viewBox="0 0 64 64">
          <SVGElement />
        </animated.svg>
      ))}
    </button>
  )
}

export default ThemeSwitch
