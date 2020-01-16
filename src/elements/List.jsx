import React from 'react'

import { ContainerSmall } from '../components/Container'

const UnorderedList = (props) => (
  <ContainerSmall>
    <ul {...props} />
  </ContainerSmall>
)

const OrderedList = (props) => (
  <ContainerSmall>
    <ol {...props} />
  </ContainerSmall>
)

const ListElement = (props) => <li {...props} />

export { UnorderedList, OrderedList, ListElement }
