import { useStaticQuery, graphql } from 'gatsby'

export const useSiteMetadata = () => {
  const results = useStaticQuery(
    graphql`
      query SiteMetaData {
        site {
          siteMetadata {
            title
            author
            description
            siteUrl
            keywords
            menuLinks {
              name
              link
              external
            }
          }
        }
      }
    `
  )

  return results.site.siteMetadata
}
