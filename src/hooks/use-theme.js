import { useContext } from 'react'

import { ThemeContext } from '../provider/theme'

function useTheme() {
  const { mode, theme, scheme, setTheme, toggle } = useContext(ThemeContext)

  return { mode, theme, scheme, setTheme, toggle }
}

export { useTheme }
