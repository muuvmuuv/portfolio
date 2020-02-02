import { useStaticQuery, graphql } from 'gatsby'

export const usePackageJson = () => {
  const results = useStaticQuery(
    graphql`
      query PackageJSON {
        packageJson {
          allDependencies {
            name
            version
          }
          allDevDependencies {
            name
            version
          }
        }
      }
    `
  )

  return results.packageJson
}
