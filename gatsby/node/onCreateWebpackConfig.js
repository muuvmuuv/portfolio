const { getVersion } = require('../../utils/version')

module.exports = ({ actions, plugins }) => {
  const { setWebpackConfig } = actions

  setWebpackConfig({
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
