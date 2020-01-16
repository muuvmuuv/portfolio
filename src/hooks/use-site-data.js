import { useStaticQuery, graphql } from 'gatsby'

export const useSiteData = () => {
  const results = useStaticQuery(
    graphql`
      query SiteData {
        site {
          siteMetadata {
            version
            title
            author
            description
            siteUrl
            keywords
          }
        }
      }
    `
  )

  return results.site.siteMetadata
}
