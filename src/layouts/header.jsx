import React from 'react'

import Logo from '../components/Logo'
import Breadcrumb from '../components/Breadcrumb'
import Navigation from '../components/Navigation'
import ThemeSwitch from '../components/ThemeSwitch'

class Header extends React.PureComponent {
  state = {
    sticky: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  // TODO: test this with SSR
  handleScroll = (event) => {
    const isFixed = document.body.classList.contains('header-fixed')
    if (!isFixed) return

    this.setState({
      sticky: window.pageYOffset > 0,
    })
  }

  render() {
    return (
      <header id="header" className={this.state.sticky ? 'sticky' : ''}>
        <Logo />
        <Breadcrumb />
        <Navigation />
        <ThemeSwitch />
      </header>
    )
  }
}

export default Header
