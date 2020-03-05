import { useStaticQuery, graphql } from 'gatsby'

import { arrayToObject } from '../utils/helper.js'

const usePackageJson = () => {
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

const addPackagesLink = (dependencies) => {
  const linkedDependencies = {}

  for (const packageName in dependencies) {
    const url = `https://www.npmjs.com/package/${encodeURIComponent(packageName)}`
    const keyAsLink = `![${packageName}](${url})`
    linkedDependencies[keyAsLink] = dependencies[packageName]
  }

  return linkedDependencies
}

const usePackages = () => {
  const pkg = usePackageJson()

  const dependencies = addPackagesLink(arrayToObject(pkg.dependencies, 'name', 'version'))
  const devDependencies = addPackagesLink(
    arrayToObject(pkg.dependencies, 'name', 'version')
  )

  return JSON.stringify(
    {
      dependencies,
      devDependencies,
    },
    null,
    2
  )
}

export { usePackageJson, usePackages }
