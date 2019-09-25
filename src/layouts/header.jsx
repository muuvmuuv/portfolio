import React from 'react'

import Logo from '../components/Logo'
import Navigation from '../components/Navigation'

class Header extends React.Component {
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

  handleScroll(event) {
    this.setState({
      sticky: window.pageYOffset > 0,
    })
  }

  render() {
    return (
      <header id="header" className={this.state.sticky ? 'sticky' : ''}>
        <Logo></Logo>
        <Navigation></Navigation>
      </header>
    )
  }
}

export default Header
