import { MDXRenderer } from "gatsby-plugin-mdx"
import React from "react"

const Article = ({ children, mdx, slug }) => {
  const properties = {
    id: "article",
    className: "container container--small",
    itemScope: "",
    itemType: "https://schema.org/Article",
    itemRef: "hero",
  }

  // console.log(props.toc)
  // const toc = props.toc && (
  //   <div
  //     role="navigation"
  //     className="toc"
  //     dangerouslySetInnerHTML={{ __html: props.toc }}
  //   />
  // )

  return (
    <article {...properties}>
      {/* {toc && <header>{toc}</header>} */}
      {mdx ? <MDXRenderer slug={slug}>{mdx}</MDXRenderer> : children}
      {/* <footer>EMPTY</footer> */}
    </article>
  )
}

export default Article
