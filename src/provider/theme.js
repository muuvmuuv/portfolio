import React, { createContext } from 'react'
import Storage from '../storage'
import { prefersDarkAppearance, DETECT_COLOR_SCHEME_DARK } from '../utils/accessibility'

export const Mode = {
  DARK: 'dark',
  LIGHT: 'light',
  HC: 'hc',
  AUTO: 'auto',
}

export const modes = [Mode.DARK, Mode.LIGHT, Mode.AUTO]

const defaultState = {
  mode: '', // different modes
  theme: '', // actual theme for CSS
  scheme: '', // preferred color scheme
  setTheme: () => {}, // set theme by name
  toggle: () => {}, // toggle the mode and theme
}

const ThemeContext = createContext(defaultState)
const ThemeConsumer = ThemeContext.Consumer

class ThemeProvider extends React.Component {
  // https://www.gatsbyjs.org/blog/2019-01-31-using-react-context-api-with-gatsby/#creating-the-context-file-in-a-new-gatsby-project

  state = {
    mode: Mode.DARK,
    theme: Mode.DARK,

    // prefers-color-scheme media query list
    mqlColorScheme: null,
  }

  componentDidMount() {
    Storage.getItem('mode').then((mode) => {
      if (modes.includes(mode)) {
        if (mode === Mode.AUTO) {
          const theme = this.getPreferredTheme()
          this.setState({ mode, theme })
          this.enableAutoSwitch()
        } else {
          this.setState({ mode, theme: mode })
        }
      }
    })
  }

  listenOn = ({ matches, media }) => {
    switch (media) {
      case DETECT_COLOR_SCHEME_DARK:
        if (matches) {
          this.setState({ theme: Mode.DARK })
        } else {
          this.setState({ theme: Mode.LIGHT })
        }
        break

      default:
        break
    }
  }

  enableAutoSwitch = () => {
    const mqlColorScheme = window.matchMedia(DETECT_COLOR_SCHEME_DARK)
    mqlColorScheme.addEventListener('change', this.listenOn)

    this.setState({
      mqlColorScheme,
    })
  }

  disableAutoSwitch = () => {
    if (this.state.mqlColorScheme) {
      this.state.mqlColorScheme.removeEventListener('change', this.listenOn)
      this.setState({ pcsListener: null })
    }
  }

  getPreferredTheme = () => {
    const darkMode = prefersDarkAppearance()
    if (darkMode) {
      return Mode.DARK
    } else {
      return Mode.LIGHT
    }
  }

  setTheme = (theme) => {
    this.disableAutoSwitch()
    let mode = this.state.mode
    if (mode !== Mode.AUTO) {
      mode = theme
    }
    this.setState({ mode, theme })
  }

  toggle = () => {
    this.disableAutoSwitch()
    const current = modes.findIndex((m) => m === this.state.mode)
    const index = current + 1 >= modes.length ? 0 : current + 1
    let newTheme = modes[index]

    if (newTheme === Mode.AUTO) {
      newTheme = this.getPreferredTheme()
      Storage.setItem('mode', Mode.AUTO)
      this.setState({
        mode: Mode.AUTO,
        theme: newTheme,
      })
      this.enableAutoSwitch()
    } else {
      Storage.setItem('mode', newTheme)
      this.setState({
        mode: newTheme,
        theme: newTheme,
      })
    }
  }

  render() {
    const { children } = this.props
    const { mode, theme } = this.state

    return (
      <ThemeContext.Provider
        value={{ mode, theme, setTheme: this.setTheme, toggle: this.toggle }}
      >
        {children}
      </ThemeContext.Provider>
    )
  }
}

export { ThemeProvider, ThemeConsumer, ThemeContext }
