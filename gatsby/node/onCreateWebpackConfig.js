const { getVersion } = require('../../utils/version')
const { isProd } = require('../../utils/environment')

module.exports = async ({ actions, plugins }) => {
  const { setWebpackConfig } = actions

  await setWebpackConfig({
    devtool: isProd ? false : 'cheap-module-source-map',
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
