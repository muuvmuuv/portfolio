const path = require("path")

const { BundleAnalyzerPlugin } = require("webpack-bundle-analyzer")

const { activeEnv, reportsPath, isAudit } = require("../../utils/environment")
const { getVersion } = require("../../utils/version")

module.exports = ({ actions, plugins }) => {
  const { setWebpackConfig } = actions

  const webpackPlugins = [
    plugins.define({
      "process.env": {
        GATSBY_APP_VERSION: JSON.stringify(getVersion()),
        GATSBY_ACTIVE_ENV: JSON.stringify(activeEnv),
      },
    }),
  ]

  if (isAudit) {
    webpackPlugins.push(
      new BundleAnalyzerPlugin({
        analyzerMode: "static",
        reportFilename: path.resolve(reportsPath, "treemap.html"),
        defaultSizes: "gzip",
      })
    )
  }

  setWebpackConfig({
    plugins: webpackPlugins,
    module: {
      rules: [
        {
          // txt files and files with no extension
          test: /^([^.]+)$|(\.txt)$/i,
          use: "raw-loader",
        },
      ],
    },
  })
}
