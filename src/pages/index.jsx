import React from 'react'
import { graphql } from 'gatsby'

import { HistoryConsumer } from '../store/history'
import Head from '../components/Head'
import Link from '../components/Link'
import Backdrop from '../components/Backdrop'

class Page extends React.Component {
  state = {
    pageName: 'Index',
  }

  componentDidMount() {
    const { breadcrumb } = this.props.pageContext

    this.props.history.update({
      location: breadcrumb.location,
      crumbLabel: this.state.pageName,
      crumbs: breadcrumb.crumbs,
    })
  }

  render() {
    const { Img01, Img02, Img03 } = this.props.data

    return (
      <>
        <Head
          pageTitle={null}
          pageName={this.state.pageName}
          bodyClasses="header-float header-click-through"
        />

        <h1 hidden>Marvin Heilemann</h1>

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
            <Backdrop img={Img03.childImageSharp.fluid}></Backdrop>
            <div className="content">
              <h2>Writings</h2>
              <h3>.....</h3>
            </div>
          </Link>
        </div>
      </>
    )
  }
}

export default React.forwardRef((props, ref) => (
  <HistoryConsumer>
    {(history) => <Page {...props} ref={ref} history={history} />}
  </HistoryConsumer>
))

export const query = graphql`
  fragment FluidResponsiveFrag on File {
    childImageSharp {
      fluid(
        maxWidth: 1200
        traceSVG: {
          color: "#272c36"
          turnPolicy: TURNPOLICY_MAJORITY
          blackOnWhite: true
        }
        srcSetBreakpoints: [576, 768, 992]
      ) {
        ...GatsbyImageSharpFluid_withWebp_tracedSVG
      }
    }
  }
  query ShowcaseImages {
    Img01: file(name: { eq: "01" }) {
      ...FluidResponsiveFrag
    }
    Img02: file(name: { eq: "02" }) {
      ...FluidResponsiveFrag
    }
    Img03: file(name: { eq: "03" }) {
      ...FluidResponsiveFrag
    }
  }
`
