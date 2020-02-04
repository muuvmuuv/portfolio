const path = require('path')
const { getVersion } = require('../../utils/version')
const { isProd } = require('../../utils/environment')

// BUG: https://github.com/webpack/webpack/issues/5087
// BUG: https://github.com/Js-Brecht/gatsby-plugin-pnpm/issues/1
const nodePath = (process.env.NODE_PATH &&
  process.env.NODE_PATH.split(path.delimiter)) || [path.join(__dirname, 'node_modules')]

module.exports = async ({ actions, plugins }) => {
  const { setWebpackConfig } = actions

  await setWebpackConfig({
    devtool: isProd ? false : 'cheap-module-source-map',
    resolveLoader: {
      modules: nodePath,
    },
    plugins: [
      plugins.define({
        'process.env': {
          GATSBY_APP_VERSION: JSON.stringify(getVersion()),
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
}
