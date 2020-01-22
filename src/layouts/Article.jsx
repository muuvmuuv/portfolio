import React from 'react'

import { scrollTo } from '../utils/animate'
import { updateLocationHash, getDocumentHeight } from '../utils/helper'
import { prefersReducedMotion } from '../utils/accessibility'
import Lightbox from '../scripts/lightbox'

class Article extends React.Component {
  scrollElements = []

  componentDidMount() {
    Lightbox.init()

    // TODO: put article blocks into separate components
    if (!prefersReducedMotion()) {
      this.scrollElements = document.querySelectorAll(
        '.footnote-backref, .footnote-ref, .toc a'
      )
      this.scrollElements.forEach((ref) => {
        ref.addEventListener('click', this.handleClick)
      })
    }
  }

  componentWillUnmount() {
    Lightbox.destroy()

    if (this.scrollElements.length > 0) {
      this.scrollElements.forEach((ref) => {
        ref.removeEventListener('click', this.handleClick)
      })
    }
  }

  handleClick = (event) => {
    event.preventDefault()
    const target = document.getElementById(event.target.hash.substr(1))
    if (target) {
      const offsetPosition = scrollTo(target)

      // highlight target element when reached
      function onScrollEvent() {
        if (
          window.scrollY === offsetPosition || // reached element
          window.scrollY === getDocumentHeight() - window.innerHeight || // reached document end
          window.scrollY === 0 // reached document start
        ) {
          removeListeners()
          updateLocationHash(target.id)

          target.classList.add('highlight')
          setTimeout(() => {
            target.classList.remove('highlight')
          }, 2400)
        }
      }

      // remove event listeners when user interrupts `scrollTo` function
      function detectScrollInterrupt() {
        removeListeners()
      }

      function removeListeners() {
        window.removeEventListener('scroll', onScrollEvent)
        window.removeEventListener('wheel', detectScrollInterrupt)
        window.removeEventListener('keyup', detectScrollInterrupt)
      }

      window.addEventListener('scroll', onScrollEvent)
      window.addEventListener('wheel', detectScrollInterrupt)
      window.addEventListener('keyup', detectScrollInterrupt)
    }
  }

  render() {
    const fallbackContent = (
      <div className="container text-center">
        <h3>Sorry, more info will come soon!</h3>
      </div>
    )

    return (
      <>
        {this.props.children ? (
          <article id="article">{this.props.children}</article>
        ) : (
          <article
            id="article"
            dangerouslySetInnerHTML={{
              __html: this.props.html || fallbackContent,
            }}
          />
        )}
        {this.props.toc && (
          <div
            role="navigation"
            className="toc"
            dangerouslySetInnerHTML={{ __html: this.props.toc }}
          />
        )}
      </>
    )
  }
}

export default Article
