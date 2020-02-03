import { useStaticQuery, graphql } from 'gatsby'

export const usePackageJson = () => {
  const results = useStaticQuery(
    graphql`
      query PackageJSON {
        sitePlugin(name: { eq: "default-site-plugin" }) {
          packageJson {
            dependencies {
              name
              version
            }
            devDependencies {
              name
              version
            }
          }
        }
      }
    `
  )

  return results.sitePlugin.packageJson
}
