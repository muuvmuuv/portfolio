import React from 'react'

import { ContainerSmall } from '../components/Container'

const Table = (props) => (
  <ContainerSmall>
    <table {...props} />
  </ContainerSmall>
)

const TableRow = (props) => <tr {...props} />

const TableCell = (props) => <td {...props} />

export { Table, TableRow, TableCell }
