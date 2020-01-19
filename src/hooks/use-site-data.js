import { useStaticQuery, graphql } from 'gatsby'

export const useSiteData = () => {
  const results = useStaticQuery(
    graphql`
      query SiteData {
        site {
          siteMetadata {
            siteTitle
            siteTitleShort
            siteDescription
            siteAuthor
            siteKeywords
            siteUrl
          }
        }
      }
    `
  )

  return results.site.siteMetadata
}
