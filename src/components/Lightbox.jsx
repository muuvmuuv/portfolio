import React, { createRef } from 'react'

import { OverlayContext } from '../provider/overlay'

// TODO: expose lightbox state so other component could eventually hide the lightbox
class Lightbox extends React.Component {
  static contextType = OverlayContext

  state = {
    open: false,
  }

  constructor(props) {
    super(props)

    this.elementRef = createRef(null)
  }

  zoomIn = () => {
    const element = this.elementRef.current
    const link = element.querySelector('.gatsby-resp-image-link')
    const image = element.querySelector('picture img')

    const clientRect = element.getBoundingClientRect()
    const clientHeight = Math.round(clientRect.height)
    const clientWidth = Math.round(clientRect.width)
    const clientX = clientRect.x
    const clientY = element.offsetTop - document.documentElement.scrollTop
    const maxWidth = document.documentElement.clientWidth
    const maxHeight = document.documentElement.clientHeight
    const scrollbarWidth = 0 // TODO: is this needed? (test on common browser across different platforms)

    // Get the current picture source image natural width.
    const naturalWidth = image.naturalWidth
    const naturalHeight = image.naturalHeight

    // Calculate X position and Y position of scaled image.
    const newX = Math.round((maxWidth - scrollbarWidth) / 2 - clientX - clientWidth / 2)
    const newY = Math.round(clientY * -1 + (maxHeight - clientHeight) / 2)

    /**
     * Calculate the scale based on max viewport and natural size.
     */
    let scale = 1
    if (naturalHeight > clientHeight) {
      if (clientHeight === clientWidth && maxHeight > maxWidth) {
        // case 1: square image and screen h > w
        scale = (maxWidth - this.margin) / clientWidth
      } else if (clientHeight === clientWidth && maxHeight < maxWidth) {
        // case 2: square image and screen w > h
        scale = (maxHeight - this.margin) / clientHeight
      } else if (clientHeight > clientWidth) {
        // case 3: rectangular image h > w
        scale = (maxHeight - this.margin) / clientHeight
        if (scale * clientWidth > maxWidth) {
          // case 3b: rectangular image h > w but zoomed image is too big
          scale = (maxWidth - this.margin) / clientWidth
        }
      } else if (clientHeight < clientWidth) {
        // case 4: rectangular image w > h
        scale = (maxWidth - this.margin) / clientWidth
        if (scale * clientHeight > maxHeight) {
          // case 4b: rectangular image w > h but zoomed image is too big
          scale = (maxHeight - this.margin) / clientHeight
        }
      }
    }
    if (scale * clientWidth > naturalWidth) {
      scale = naturalWidth / clientWidth
    }

    // TODO: reduced motion, no animation
    // TODO: use react animate library here
    element.style.height = `${clientHeight}px`
    link.classList.add('open')
    link.style.height = `${clientHeight}px`
    link.style.width = `${clientWidth}px`
    link.style.transform = `translate(${newX}px,${newY}px)`
    image.style.transform = `scale(${scale})`
  }

  zoomOut = () => {
    const element = this.elementRef.current
    const link = element.querySelector('.gatsby-resp-image-link')
    const image = element.querySelector('picture img')

    image.style.transform = `scale(1)`
    link.style.transform = `translate(0,0)`
    link.style.height = `auto`
    link.style.width = `auto`
    link.classList.remove('open')
    element.style.height = `auto`
  }

  open = () => {
    this.setState({ open: true })
    this.zoomIn()
    this.context.show()
    window.addEventListener('scroll', this.handleScroll)
  }

  close = () => {
    this.setState({ open: false })
    window.removeEventListener('scroll', this.handleScroll)
    this.context.hide()
    this.zoomOut()
  }

  handleScroll = () => {
    this.close()
  }

  onClick = ($event) => {
    $event.preventDefault()

    if (this.state.open) {
      this.close()
    } else {
      this.open()
    }
  }

  render() {
    const { children, style: globalStyle } = this.props

    const wrapper = children[1]
    const figcaption = children[3]

    return (
      <figure className="lightbox gatsby-resp-image-figure" style={globalStyle}>
        <div
          className=" gatsby-resp-image-wrapper"
          style={wrapper.props.style}
          onClick={this.onClick}
          onKeyPress={this.onClick}
          role="presentation"
          ref={this.elementRef}
        >
          {wrapper.props.children}
        </div>
        <figcaption className="gatsby-resp-image-figcaption">
          {figcaption.props.children}
        </figcaption>
      </figure>
    )
  }
}

export default Lightbox
