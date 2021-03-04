import React from "react"

import Layout from "../layouts/Layout"

export const Index = () => {
  return (
    <Layout>
      {/* <Head
          pageTitle={null}
          pageName={this.state.pageName}
          bodyClasses="header-float header-click-through"
        /> */}
      <h1 hidden>Marvin Heilemann</h1>
      HI
      {/* <div className="showcase">
          <NativeLink className="item" to="/projects" key="projects">
            <Backdrop img={Img01.childImageSharp.fluid}></Backdrop>
            <div className="content">
              <h2>Projects</h2>
              <h3>Basement dweller first</h3>
            </div>
          </NativeLink>
          <NativeLink className="item" to="/photography" key="photography">
            <Backdrop img={Img02.childImageSharp.fluid}></Backdrop>
            <div className="content">
              <h2>Photography</h2>
              <h3>All around the world</h3>
            </div>
          </NativeLink>
          <NativeLink className="item" to="/writings" key="writings">
            <Backdrop img={Img03.childImageSharp.fluid}></Backdrop>
            <div className="content">
              <h2>Writings</h2>
              <h3>.....</h3>
            </div>
          </NativeLink>
        </div> */}
    </Layout>
  )
}

// export const query = graphql`
//   fragment FluidResponsiveFrag on File {
//     childImageSharp {
//       fluid(maxWidth: 1200, srcSetBreakpoints: [576, 768, 992]) {
//         ...GatsbyImageSharpFluid_withWebp
//       }
//     }
//   }
//   query ShowcaseImages {
//     Img01: file(name: { eq: "01" }) {
//       ...FluidResponsiveFrag
//     }
//     Img02: file(name: { eq: "02" }) {
//       ...FluidResponsiveFrag
//     }
//     Img03: file(name: { eq: "03" }) {
//       ...FluidResponsiveFrag
//     }
//   }
// `
