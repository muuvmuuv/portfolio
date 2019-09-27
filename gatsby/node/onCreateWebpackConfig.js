module.exports = ({ actions }) => {
  const { setWebpackConfig } = actions
  setWebpackConfig({
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
