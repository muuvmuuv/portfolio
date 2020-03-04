import React from 'react'

import Logo from '../components/Logo'
import Breadcrumb from '../components/Breadcrumb'
import Navigation from '../components/navigation/Navigation'
import ThemeSwitch from '../components/ThemeSwitch'

class Header extends React.PureComponent {
  render() {
    return (
      <header id="header" role="banner">
        <Logo />
        <Breadcrumb />
        <Navigation />
        <ThemeSwitch />
      </header>
    )
  }
}

export default Header
