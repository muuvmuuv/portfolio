import React from 'react'
import { Helmet } from 'react-helmet-async'
import { graphql } from 'gatsby'
import Link from '@components/Link'
import SEO from '@components/SEO'
import { isDev } from '@app/environment'

import Backdrop from '@components/Backdrop'

class Page extends React.Component {
  render() {
    const { Img01, Img02, Img04 } = this.props.data

    if (isDev) {
      console.group('Index')
      console.log(this)
      console.log(Img01)
      console.groupEnd()
    }

    return (
      <>
        <SEO />
        <Helmet
          bodyAttributes={{
            page: 'index',
            class: 'header-fixed header-click-through',
          }}
        />

        <div className="showcase">
          <Link className="item" to="/projects">
            <Backdrop img={Img01.childImageSharp.fluid}></Backdrop>
            <div className="content">Projects</div>
          </Link>
          <Link className="item" to="/photography">
            <Backdrop img={Img02.childImageSharp.fluid}></Backdrop>
            <div className="content">Photography</div>
          </Link>
          <Link className="item" to="/writings">
            <Backdrop img={Img04.childImageSharp.fluid}></Backdrop>
            <div className="content">Writings</div>
          </Link>
        </div>
      </>
    )
  }
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
