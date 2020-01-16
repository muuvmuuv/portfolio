import React from 'react'

import { ContainerSmall } from '../components/Container'

const PreformattedCode = (props) => (
  <ContainerSmall>
    <pre {...props} />
  </ContainerSmall>
)

const InlineCode = (props) => <code {...props} />

export { PreformattedCode, InlineCode }
