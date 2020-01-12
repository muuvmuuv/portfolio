import { useStaticQuery, graphql } from 'gatsby'

export const useSocialLinks = () => {
  const results = useStaticQuery(
    graphql`
      query SocialLinks {
        site {
          siteMetadata {
            socialLinks {
              name
              icon
              link
            }
          }
        }
      }
    `
  )

  return results.site.siteMetadata.socialLinks
}
