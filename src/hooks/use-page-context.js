import { useStaticQuery, graphql } from 'gatsby'

export const usePageContext = name => {
  const results = useStaticQuery(
    graphql`
      query SitePageMetaData {
        sitePage(path: { regex: "/.*NAME_HERE$/" }) {
          path
          context {
            breadcrumb {
              crumbs {
                pathname
                crumbLabel
              }
            }
          }
        }
      }
    `
  )

  return results.sitePage.context
}
