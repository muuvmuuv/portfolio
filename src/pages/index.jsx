import { graphql } from "gatsby"
import PropType from "prop-types"
import React from "react"

import SEO from "../components/SEO"
import { Showcase } from "../components/Showcase/Showcase"
import { ShowcaseItem } from "../components/Showcase/ShowcaseItem"

const IndexPage = ({ data }) => (
  <>
    <SEO />
    <h1 hidden>Marvin Heilemann</h1>
    <Showcase>
      <ShowcaseItem href="/projects" key="projects" image={data.Img01} alt="Projects">
        <h2>Projects</h2>
        <h3>Basement dweller first</h3>
      </ShowcaseItem>
      <ShowcaseItem
        href="/photography"
        key="photography"
        image={data.Img02}
        alt="Photography"
      >
        <h2>Photography</h2>
        <h3>All around the world</h3>
      </ShowcaseItem>
      <ShowcaseItem href="/writings" key="writings" image={data.Img03} alt="Writings">
        <h2>Writings</h2>
        <h3>To keep my mind free</h3>
      </ShowcaseItem>
    </Showcase>
  </>
)

IndexPage.propTypes = {
  data: PropType.any,
}

export const indexPageQuery = graphql`
  fragment Showcase on File {
    childImageSharp {
      gatsbyImageData(
        layout: FULL_WIDTH
        breakpoints: [576, 768, 992]
        formats: [AUTO, WEBP, AVIF]
      )
    }
  }
  {
    Img01: file(name: { eq: "showcase-01" }) {
      ...Showcase
    }
    Img02: file(name: { eq: "showcase-02" }) {
      ...Showcase
    }
    Img03: file(name: { eq: "showcase-03" }) {
      ...Showcase
    }
  }
`

export default IndexPage
