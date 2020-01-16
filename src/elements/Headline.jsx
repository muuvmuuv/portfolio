import React from 'react'

import { ContainerSmall } from '../components/Container'

/* eslint-disable jsx-a11y/heading-has-content */

const Headline1 = (props) => (
  <ContainerSmall>
    <h1 {...props} />
  </ContainerSmall>
)

const Headline2 = (props) => (
  <ContainerSmall>
    <h2 {...props} />
  </ContainerSmall>
)

const Headline3 = (props) => (
  <ContainerSmall>
    <h3 {...props} />
  </ContainerSmall>
)

const Headline4 = (props) => (
  <ContainerSmall>
    <h4 {...props} />
  </ContainerSmall>
)

const Headline5 = (props) => (
  <ContainerSmall>
    <h5 {...props} />
  </ContainerSmall>
)

const Headline6 = (props) => (
  <ContainerSmall>
    <h6 {...props} />
  </ContainerSmall>
)

/* eslint-enable */

export { Headline1, Headline2, Headline3, Headline4, Headline5, Headline6 }
