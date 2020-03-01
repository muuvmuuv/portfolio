const { getVersion } = require('../../utils/version')
const { activeEnv } = require('../../utils/environment')

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
