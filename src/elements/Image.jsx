import React from 'react'

import Lightbox from '../components/Lightbox'

/* eslint-disable jsx-a11y/alt-text */
const Image = (props) => <img {...props} />

// since `gatsby-remark-images` uses figures, this is the right way
const Figure = (props) => <Lightbox {...props} />

export { Image, Figure }
