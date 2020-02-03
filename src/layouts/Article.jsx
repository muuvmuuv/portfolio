import React from 'react'

import { scrollToElement } from '../utils/helper'
import { updateLocationHash, getDocumentHeight } from '../utils/helper'
import { prefersReducedMotion } from '../utils/accessibility'
import { isDev } from '../../utils/environment'
import Lightbox from '../scripts/lightbox'
import { MDXRenderer } from 'gatsby-plugin-mdx'

class Article extends React.Component {
  scrollElements = []

  componentDidMount() {
    Lightbox.init()

    if (!prefersReducedMotion()) {
      // TODO: can this be a component?
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
    const props = {
      id: 'article',
      className: 'container container--small',
      itemScope: '',
      itemType: 'https://schema.org/Article',
      itemRef: 'hero',
    }

    if (isDev && this.props.toc) {
      console.log(this.props.toc)
    }
    const toc = ''
    // const toc = this.props.toc && (
    //   <div
    //     role="navigation"
    //     className="toc"
    //     dangerouslySetInnerHTML={{ __html: this.props.toc }}
    //   />
    // )

    return (
      <article {...props}>
        <header>{toc}</header>

        {this.props.mdx ? (
          <MDXRenderer slug={this.props.slug}>{this.props.mdx}</MDXRenderer>
        ) : (
          this.props.children
        )}

        <footer>{/* EMPTY */}</footer>
      </article>
    )
  }
}

export default Article
