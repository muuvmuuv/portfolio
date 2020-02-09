import { Paragraph } from '../elements/Paragraph'
import {
  Headline1,
  Headline2,
  Headline3,
  Headline4,
  Headline5,
  Headline6,
} from '../elements/Headline'
import { ThematicBreak, Hairline } from '../elements/Break'
import { Blockquote } from '../elements/Blockquote'
import { UnorderedList, OrderedList, ListElement } from '../elements/List'
import { Table, TableRow, TableCell } from '../elements/Table'
import { PreformattedCode, InlineCode } from '../elements/Code'
import { Emphasized, Strong, Delete } from '../elements/Text'
import { Link } from '../elements/Link'
import { Image, Figure } from '../elements/Image'
import { Sup } from '../elements/Sup'
import { Div } from '../elements/Div'

import Quote from './Quote'

export default {
  // Override build in elements
  p: Paragraph,
  h1: Headline1,
  h2: Headline2,
  h3: Headline3,
  h4: Headline4,
  h5: Headline5,
  h6: Headline6,
  thematicBreak: ThematicBreak,
  blockquote: Blockquote,
  ul: UnorderedList,
  ol: OrderedList,
  li: ListElement,
  table: Table,
  tr: TableRow,
  td: TableCell,
  pre: PreformattedCode,
  code: InlineCode,
  em: Emphasized,
  strong: Strong,
  delete: Delete,
  hr: Hairline,
  a: Link,
  img: Image,
  figure: Figure,
  sup: Sup,
  div: Div,

  // Custom Shortcodes
  Quote,
}
