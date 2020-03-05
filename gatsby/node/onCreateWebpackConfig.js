const path = require('path')
const { IgnorePlugin } = require('webpack')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const { getVersion } = require('../../utils/version')
const { activeEnv, reportsPath, isAudit } = require('../../utils/environment')

module.exports = ({ stage, actions, plugins }) => {
  const { setWebpackConfig } = actions

  const webpackPlugins = [
    plugins.define({
      'process.env': {
        GATSBY_APP_VERSION: JSON.stringify(getVersion()),
        GATSBY_ACTIVE_ENV: JSON.stringify(activeEnv),
      },
    }),
  ]

  if (stage === 'develop') {
    webpackPlugins.push(
      new BundleAnalyzerPlugin({
        openAnalyzer: false,
      })
    )

    // BUG: https://github.com/gatsbyjs/gatsby/issues/11934
    setWebpackConfig({
      resolve: {
        alias: {
          'react-dom': '@hot-loader/react-dom',
        },
      },
    })
  }

  if (stage === 'build-javascript') {
    webpackPlugins.push(
      new IgnorePlugin({
        resourceRegExp: /^react-axe$/,
      })
    )

    if (isAudit) {
      new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        reportFilename: path.resolve(reportsPath, 'treemap.html'),
        defaultSizes: 'gzip',
      })
    }
  }

  setWebpackConfig({
    plugins: webpackPlugins,
    module: {
      rules: [
        {
          // txt files and files with no extension
          test: /^([^.]+)$|(\.txt)$/i,
          use: 'raw-loader',
        },
      ],
    },
  })
}
