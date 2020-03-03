import React, { useState, useRef, useEffect } from 'react'

import { useOverlay } from '../hooks/use-overlay'

const Lightbox = ({ children, style: globalStyle }) => {
  const elementRef = useRef(null)
  const [visible, setVisibility] = useState(false)
  const overlay = useOverlay()

  const zoomIn = () => {
    const element = elementRef.current
    const wrapper = element.querySelector('.resp-image-wrapper')
    const image = element.querySelector('picture img')

    const clientRect = element.getBoundingClientRect()
    const clientHeight = Math.round(clientRect.height)
    const clientWidth = Math.round(clientRect.width)
    const clientX = clientRect.x
    const clientY = element.offsetTop - document.documentElement.scrollTop
    const maxWidth = document.documentElement.clientWidth
    const maxHeight = document.documentElement.clientHeight

    // Adjust
    const scrollbarWidth = 0
    const margin = 50

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
        scale = (maxWidth - margin) / clientWidth
      } else if (clientHeight === clientWidth && maxHeight < maxWidth) {
        // case 2: square image and screen w > h
        scale = (maxHeight - margin) / clientHeight
      } else if (clientHeight > clientWidth) {
        // case 3: rectangular image h > w
        scale = (maxHeight - margin) / clientHeight
        if (scale * clientWidth > maxWidth) {
          // case 3b: rectangular image h > w but zoomed image is too big
          scale = (maxWidth - margin) / clientWidth
        }
      } else if (clientHeight < clientWidth) {
        // case 4: rectangular image w > h
        scale = (maxWidth - margin) / clientWidth
        if (scale * clientHeight > maxHeight) {
          // case 4b: rectangular image w > h but zoomed image is too big
          scale = (maxHeight - margin) / clientHeight
        }
      }
    }
    if (scale * clientWidth > naturalWidth) {
      scale = naturalWidth / clientWidth
    }

    // TODO: reduced motion => no animation
    // TODO: use react spring
    element.style.height = `${clientHeight}px`
    element.style.zIndex = 21
    wrapper.style.position = 'absolute'
    wrapper.style.height = `${clientHeight}px`
    wrapper.style.width = `${clientWidth}px`
    wrapper.style.transform = `translate(${newX}px,${newY}px)`
    image.style.transform = `scale(${scale})`
  }

  const zoomOut = () => {
    const element = elementRef.current
    const wrapper = element.querySelector('.resp-image-wrapper')
    const image = element.querySelector('picture img')

    image.style.transform = `scale(1)`
    wrapper.style.transform = `translate(0,0)`
    wrapper.style.height = `auto`
    wrapper.style.width = `auto`
    wrapper.style.position = 'relative'
    element.style.height = `auto`

    setTimeout(() => {
      element.style.zIndex = 'auto'
    }, 200)
  }

  const open = () => {
    setVisibility(true)
    zoomIn()
    overlay.show()
    window.addEventListener('scroll', handleScroll)
  }

  const close = () => {
    setVisibility(false)
    window.removeEventListener('scroll', handleScroll)
    overlay.hide()
    zoomOut()
  }

  const handleScroll = () => {
    close()
  }

  const onClick = ($event) => {
    $event.preventDefault()

    if (visible) {
      close()
    } else {
      open()
      overlay.onClick(() => {
        close()
      })
    }
  }

  useEffect(() => {
    return () => {
      overlay.hide() // if something breaks hide the overlay
    }
  }, [elementRef])

  const wrapper = children[1].props // yes, this is the link now
  const link = wrapper.children[1].props // yes, this is the wrapper now
  const figcaption = children[3].props // just the figcaption

  return (
    <figure className="lightbox" style={globalStyle}>
      <div
        className="resp-image-link"
        style={wrapper.style}
        data-src={link.href}
        onClick={onClick}
        onKeyPress={onClick}
        role="presentation"
        rel="lightbox"
        ref={elementRef}
      >
        <div className="resp-image-wrapper">{link.children}</div>
      </div>
      <figcaption className="resp-image-figcaption">{figcaption.children}</figcaption>
    </figure>
  )
}

export default Lightbox
