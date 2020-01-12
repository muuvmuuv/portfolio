import { useStaticQuery, graphql } from 'gatsby'

export const useFooterLinks = () => {
  const results = useStaticQuery(
    graphql`
      query FooterLinks {
        site {
          siteMetadata {
            footerLinks {
              name
              link
            }
          }
        }
      }
    `
  )

  return results.site.siteMetadata.footerLinks
}
