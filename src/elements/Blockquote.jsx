import React from 'react'

import { ContainerSmall } from '../components/Container'

const Blockquote = (props) => (
  <ContainerSmall>
    <blockquote {...props}>
      <p>{props.children.props.children}</p>
    </blockquote>
  </ContainerSmall>
)

export { Blockquote }
