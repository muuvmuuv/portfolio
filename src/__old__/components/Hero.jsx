import React from 'react'

const Hero = ({ size, centered, children }) => {
  let classes = []

  if (size) {
    classes.push(`size-${size}`)
  }

  if (centered) {
    classes.push('content-center')
  }

  return (
    <header id="hero" className={classes.join(' ')}>
      {children}
    </header>
  )
}

export default Hero
