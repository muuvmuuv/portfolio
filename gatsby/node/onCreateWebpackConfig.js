const { getVersion } = require('../../utils/version')

module.exports = ({ stage, actions, plugins }) => {
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

  if (stage.startsWith('develop')) {
    setWebpackConfig({
      resolve: {
        alias: {
          'react-dom': '@hot-loader/react-dom',
        },
      },
    })
  }
}
