import React from 'react'

import { scrollTo } from '../utils/animate'
import { prefersReducedMotion } from '../utils/accessibility'
import Lightbox from '../scripts/lightbox'

class Article extends React.Component {
  scrollElements = []

  componentDidMount() {
    Lightbox.init()

    this.scrollElements = document.querySelectorAll(
      '.footnote-backref, .footnote-ref, .toc a'
    )
    this.scrollElements.forEach(ref => {
      ref.addEventListener('click', this.handleClick)
    })
  }

  componentWillUnmount() {
    Lightbox.destroy()

    this.scrollElements.forEach(ref => {
      ref.removeEventListener('click', this.handleClick)
    })
  }

  handleClick(event) {
    if (prefersReducedMotion()) {
      return
    }
    event.preventDefault()
    const target = document.getElementById(event.target.hash.substr(1))
    if (target) {
      scrollTo(target)
    }
  }

  render() {
    const fallbackContent = (
      <div className="container">
        <h3>Sorry, more info will come soon!</h3>
      </div>
    )

    return (
      <>
        <article
          id="article"
          // className="container container--small"
          dangerouslySetInnerHTML={{
            __html: this.props.html || fallbackContent,
          }}
        />
        {this.props.toc ? (
          <div
            role="navigation"
            className="toc"
            dangerouslySetInnerHTML={{ __html: this.props.toc }}
          />
        ) : (
          ''
        )}
      </>
    )
  }
}

export default Article
