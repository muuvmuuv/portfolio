import React, { useContext, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { graphql } from 'gatsby'

import { isDev } from '../environment'
import Link from '../components/Link'
import SEO from '../components/SEO'
import Backdrop from '../components/Backdrop'
import { History } from '../store'

const Page = ({
  pageContext: { breadcrumb },
  data: { Img01, Img02, Img04 },
}) => {
  const pageName = 'Index'
  const historyDispatch = useContext(History.Dispatch)

  useEffect(() => {
    historyDispatch({
      location: breadcrumb.location,
      crumbLabel: pageName,
      crumbs: breadcrumb.crumbs,
    })
  })

  if (isDev) {
    console.group(pageName)
    console.log(Img01)
    console.groupEnd()
  }

  return (
    <>
      <SEO />
      <Helmet
        bodyAttributes={{
          page: pageName.toLowerCase(),
          class: 'header-fixed header-click-through',
        }}
      />

      <div className="showcase">
        <Link className="item" to="/projects" key="projects">
          <Backdrop img={Img01.childImageSharp.fluid}></Backdrop>
          <div className="content">
            <h2>Projects</h2>
            <h3>Basement dweller first</h3>
          </div>
        </Link>
        <Link className="item" to="/photography" key="photography">
          <Backdrop img={Img02.childImageSharp.fluid}></Backdrop>
          <div className="content">
            <h2>Photography</h2>
            <h3>All around the world</h3>
          </div>
        </Link>
        <Link className="item" to="/writings" key="writings">
          <Backdrop img={Img04.childImageSharp.fluid}></Backdrop>
          <div className="content">
            <h2>Writings</h2>
            <h3>.....</h3>
          </div>
        </Link>
      </div>
    </>
  )
}

export const pageQuery = graphql`
  query ShowcaseImages {
    Img01: file(name: { eq: "01" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Img02: file(name: { eq: "02" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
    Img04: file(name: { eq: "04" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default Page
