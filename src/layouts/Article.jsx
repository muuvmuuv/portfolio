import React, { useEffect } from 'react'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { globalHistory } from '@reach/router'
import { scroller } from 'react-scroll'

const Article = ({ children, mdx, slug }) => {
  const props = {
    id: 'article',
    className: 'container container--small',
    itemScope: '',
    itemType: 'https://schema.org/Article',
    itemRef: 'hero',
  }

  useEffect(() => {
    const hash = globalHistory.location.hash
    if (hash) {
      setTimeout(() => {
        scroller.scrollTo(hash.substr(1), {
          offset: -50,
          duration: 200,
          smooth: true,
        })
      }, 300)
    }
  })

  // console.log(props.toc)
  // const toc = props.toc && (
  //   <div
  //     role="navigation"
  //     className="toc"
  //     dangerouslySetInnerHTML={{ __html: props.toc }}
  //   />
  // )

  return (
    <article {...props}>
      {/* {toc && <header>{toc}</header>} */}
      {mdx ? <MDXRenderer slug={slug}>{mdx}</MDXRenderer> : children}
      {/* <footer>EMPTY</footer> */}
    </article>
  )
}

export default Article
