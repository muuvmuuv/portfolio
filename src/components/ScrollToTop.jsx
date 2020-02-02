import React from 'react'
import throttle from 'lodash/throttle'

import Icon from './Icon'

export default class ScrollToTop extends React.Component {
  state = {
    marker: 400,
    visible: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', throttle(this.handleScroll, 400))
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  }

  handleScroll = () => {
    if (document.documentElement.scrollTop >= this.state.marker) {
      this.setState({
        visible: true,
      })
    } else {
      this.setState({
        visible: false,
      })
    }
  }

  scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  render() {
    return (
      <div
        aria-label="Scroll back to top"
        className={`scroll-to-top ${this.state.visible ? 'show' : 'hide'}`}
        onKeyPress={this.scrollToTop}
        onClick={this.scrollToTop}
        tabIndex="0"
        role="button"
      >
        <Icon name="arrow-top" />
      </div>
    )
  }
}
