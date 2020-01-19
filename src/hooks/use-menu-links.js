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
              external
            }
          }
        }
      }
    `
  )

  return results.site.siteMetadata.menu
}
