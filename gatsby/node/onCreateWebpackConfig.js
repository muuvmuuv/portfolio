const path = require('path')
const { IgnorePlugin } = require('webpack')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')

const { getVersion } = require('../../utils/version')
const { activeEnv, reportsPath } = require('../../utils/environment')

module.exports = ({ stage, actions, plugins }) => {
  const { setWebpackConfig } = actions

  setWebpackConfig({
    plugins: [
      plugins.define({
        'process.env': {
          GATSBY_APP_VERSION: JSON.stringify(getVersion()),
          GATSBY_ACTIVE_ENV: JSON.stringify(activeEnv),
        },
      }),
    ],
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

  if (stage === 'develop') {
    setWebpackConfig({
      plugins: [
        new BundleAnalyzerPlugin({
          openAnalyzer: false,
        }),
      ],
      resolve: {
        alias: {
          // BUG: https://github.com/gatsbyjs/gatsby/issues/11934
          'react-dom': '@hot-loader/react-dom',
        },
      },
    })
  }

  if (stage === 'build-javascript') {
    setWebpackConfig({
      plugins: [
        new BundleAnalyzerPlugin({
          analyzerMode: 'static',
          reportFilename: path.resolve(reportsPath, 'treemap.html'),
          defaultSizes: 'gzip',
          generateStatsFile: true,
          statsFilename: path.resolve(reportsPath, 'bundle.json'),
        }),
        new IgnorePlugin({
          resourceRegExp: /^react-axe$/,
        }),
      ],
    })
  }
}
