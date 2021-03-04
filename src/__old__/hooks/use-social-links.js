import { useStaticQuery, graphql } from 'gatsby'

export const useSocialLinks = () => {
  const results = useStaticQuery(
    graphql`
      query SocialLinks {
        site {
          siteMetadata {
            social {
              name
              icon
              user
              link
            }
          }
        }
      }
    `
  )

  return results.site.siteMetadata.social
}
