import React from 'react'

import { scrollToElement } from '../utils/animate'
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
      const offsetPosition = scrollToElement(target)

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

    const props = {
      id: 'article',
      className: 'container container--small',
      itemScope: '',
      itemType: 'https://schema.org/Article',
      itemRef: 'hero',
    }

    let children = this.props.children || false
    let html = this.props.html || fallbackContent

    return (
      <>
        {children ? (
          <article {...props}>{children}</article>
        ) : (
          <article
            {...props}
            dangerouslySetInnerHTML={{
              __html: html,
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
