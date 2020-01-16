import React from 'react'

import { ContainerSmall } from '../components/Container'

const ThematicBreak = (props) => (
  <ContainerSmall>
    <br {...props} />
  </ContainerSmall>
)

const Hairline = (props) => (
  <ContainerSmall>
    <hr {...props} />
  </ContainerSmall>
)

export { ThematicBreak, Hairline }
