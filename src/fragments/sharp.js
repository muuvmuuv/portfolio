import { graphql } from 'gatsby'

export const SharpFragments = () => {
  return graphql`
    fragment FluidResponsiveSet on File {
      childImageSharp {
        fluid(maxWidth: 2100, srcSetBreakpoints: [576, 768, 992, 1200]) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }

    fragment FluidResponsiveSetMedium on File {
      childImageSharp {
        fluid(maxWidth: 1200, srcSetBreakpoints: [576, 768, 992]) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }

    fragment FluidResponsiveSetSmall on File {
      childImageSharp {
        fluid(maxWidth: 992, srcSetBreakpoints: [576, 768]) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
  `
}
