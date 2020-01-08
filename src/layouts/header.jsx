import React from 'react'

import Logo from '../components/Logo'
import Navigation from '../components/Navigation'
import Breadcrumb from '../components/Breadcrumb'

class Header extends React.PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      sticky: false,
    }

    this.handleScroll = this.handleScroll.bind(this)
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  // TODO: test this with SSR
  handleScroll(event) {
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
      </header>
    )
  }
}

export default Header
