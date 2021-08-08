import PropType from "prop-types"
import React from "react"

import SEO from "../components/SEO"

const Page = ({ children, frontmatter: { title, description } }) => {
  return (
    <>
      <SEO pageTitle={title} pageDescription={description} pageName="default" />

      {/* <HeroPage title={title} subtitle={subtitle} /> */}

      {/* <Article>{this.props.children}</Article> */}
      {title}
      {description}
      <article>{children}</article>
    </>
  )
}

Page.propTypes = {
  children: PropType.node.isRequired,
  frontmatter: {
    title: PropType.string,
    description: PropType.string,
  },
}

export default Page
