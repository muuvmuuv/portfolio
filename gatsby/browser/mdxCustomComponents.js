const React = require('react')

const Container = ({ children }) => <div className="container">{children}</div>
const ContainerSmall = ({ children }) => (
  <div className="container container--small">{children}</div>
)

/*
eslint-disable
  jsx-a11y/heading-has-content,
  jsx-a11y/anchor-has-content,
  jsx-a11y/alt-text
*/
const Paragraph = (props) => (
  <ContainerSmall>
    <p {...props} />
  </ContainerSmall>
)
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
const ThematicBreak = (props) => (
  <ContainerSmall>
    <br {...props} />
  </ContainerSmall>
)
const Blockquote = (props) => (
  <ContainerSmall>
    <blockquote {...props} />
  </ContainerSmall>
)
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
const Table = (props) => (
  <ContainerSmall>
    <table {...props} />
  </ContainerSmall>
)
const TableRow = (props) => <tr {...props} />
const TableCell = (props) => <td {...props} />
const PreformattedCode = (props) => (
  <ContainerSmall>
    <pre {...props} />
  </ContainerSmall>
)
const InlineCode = (props) => <code {...props} />
const Emphasized = (props) => <em {...props} />
const Strong = (props) => <strong {...props} />
const Delete = (props) => <del {...props} />
const Hairline = (props) => (
  <ContainerSmall>
    <hr {...props} />
  </ContainerSmall>
)
const Link = (props) => <a {...props} />
const Image = (props) => <img {...props} />
/* eslint-enable */

const components = {
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
  // inlineCode: DDDDDD, // ??????
  hr: Hairline,
  a: Link,
  img: Image,
}

exports.components = components
