import React from 'react'
import { Helmet } from 'react-helmet-async'
import { useStaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby'
import { ContextConsumer } from '../context'
import SEO from '../components/SEO'

import Backdrop from '../components/Backdrop'

const Page = () => {
  const results = useStaticQuery(graphql`
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
  `)

  console.log(results)

  return (
    <ContextConsumer>
      {({ data, set }) => (
        <>
          <SEO />
          <Helmet bodyAttributes={{ page: 'index', class: 'header-fixed' }} />

          <div className="showcase">
            <Link className="item" to="/projects">
              <Backdrop img={results.Img01.childImageSharp.fluid}></Backdrop>
              <div className="content">Projects</div>
            </Link>
            <Link className="item" to="/photography">
              <Backdrop img={results.Img02.childImageSharp.fluid}></Backdrop>
              <div className="content">Photography</div>
            </Link>
            <Link className="item" to="/writings">
              <Backdrop img={results.Img04.childImageSharp.fluid}></Backdrop>
              <div className="content">Writings</div>
            </Link>
          </div>
        </>
      )}
    </ContextConsumer>
  )
}

export default Page
