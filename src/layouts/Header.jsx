import React from "react"

import Breadcrumb from "../components/Breadcrumb"
import Logo from "../components/Logo"
import Navigation from "../components/navigation/Navigation"
import ThemeSwitch from "../components/ThemeSwitch"

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
