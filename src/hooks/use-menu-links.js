import { useStaticQuery, graphql } from 'gatsby'

export const useMenuLinks = () => {
  const results = useStaticQuery(
    graphql`
      query MenuLinks {
        site {
          siteMetadata {
            menu {
              name
              link
            }
          }
        }
      }
    `
  )

  return results.site.siteMetadata.menu
}
