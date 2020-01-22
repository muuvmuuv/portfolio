import React from 'react'

import Logo from '../components/Logo'
import Breadcrumb from '../components/Breadcrumb'
import Navigation from '../components/Navigation'
import ThemeSwitch from '../components/ThemeSwitch'

class Header extends React.PureComponent {
  render() {
    return (
      <header id="header">
        <Logo />
        <Breadcrumb />
        <Navigation />
        <ThemeSwitch />
      </header>
    )
  }
}

export default Header
