/**
 * Medium inspired lightbox plugin.
 *
 * @author Marvin Heilemann
 * @license MIT
 *
 * @package https://github.com/davidecalignano/MediumLightbox
 * @author Davide Calignano
 */

import VanillaClickOutside from 'vanilla-click-outside'

const Lightbox = {
  isZoomed: false,
  margin: 0,

  init() {
    this.elements = document.querySelectorAll(
      '#article .gatsby-resp-image-link'
    )

    if (this.elements && this.elements.length > 0) {
      this.elements.forEach(el => {
        el.addEventListener('click', e => this.zoom(e, el))
      })
    }
  },

  destroy() {
    window.removeEventListener('scroll', this.zoomOut)
    document.removeEventListener('click', this.clickOutside)

    if (this.elements && this.elements.length > 0) {
      this.elements.forEach(el => {
        el.removeEventListener('click', this.zoom)
      })
    }
  },

  createOverlay() {
    this.overlay = document.createElement('div')
    this.overlay.classList = 'overlay'
    document.documentElement.appendChild(this.overlay)
  },

  removeOverlay() {
    document.documentElement.removeChild(this.overlay)
  },

  zoomIn() {
    this.isZoomed = true

    const parent = this.target.parentElement
    const clientRect = this.target.getBoundingClientRect()
    const clientHeight = Math.round(clientRect.height)
    const clientWidth = Math.round(clientRect.width)
    const clientX = clientRect.x
    const clientY = parent.offsetTop - document.documentElement.scrollTop
    const maxWidth = document.documentElement.clientWidth
    const maxHeight = document.documentElement.clientHeight
    const scrollbarWidth = 0 // TODO: is this needed? (test on common browser across different platforms)

    /**
     * Get the current picture source image natural width.
     */
    const naturalWidth = this.zoomImg.naturalWidth
    const naturalHeight = this.zoomImg.naturalHeight

    /**
     * Calculate X position and Y position of scaled image.
     */
    const newX = Math.round(
      (maxWidth - scrollbarWidth) / 2 - clientX - clientWidth / 2
    )
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

    this.createOverlay()

    this.zoomImg.style.transition = 'var(--transition-fast)' // override plugin
    this.zoomImg.style.transform = `scale(${scale})`
    this.target.style.zIndex = 21
    this.target.style.transform = `translate(${newX}px,${newY}px)`
  },

  zoomOut() {
    Lightbox.isZoomed = false

    Lightbox.removeOverlay()

    Lightbox.zoomImg.style.transform = `scale(1)`
    Lightbox.target.style.zIndex = 'auto'
    Lightbox.target.style.transform = `translate(0,0)`

    window.removeEventListener('scroll', Lightbox.zoomOut)
    document.removeEventListener('click', Lightbox.clickOutside)

    Lightbox.zoomImg = null
    Lightbox.target = null
  },

  zoom(event, element) {
    event.preventDefault()
    this.target = element
    this.zoomImg = element.querySelector('picture img')
    window.addEventListener('scroll', this.zoomOut)

    if (!Lightbox.isZoomed) {
      this.zoomIn()

      this.clickOutside = VanillaClickOutside(
        element,
        state => {
          if (state) {
            this.zoomOut()
          }
        },
        { removeListener: false }
      )
    } else {
      this.zoomOut()
    }
  },
}

export default Lightbox
