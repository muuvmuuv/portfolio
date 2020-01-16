import React from 'react'

import { ContainerSmall } from '../components/Container'

const Paragraph = (props) => (
  <ContainerSmall>
    <p {...props} />
  </ContainerSmall>
)

export { Paragraph }
