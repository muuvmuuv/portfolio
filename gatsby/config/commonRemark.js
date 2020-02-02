// https://www.gatsbyjs.org/docs/mdx/plugins/

module.exports = [
  {
    resolve: 'gatsby-remark-images',
    options: {
      maxWidth: 1200, // src/styles/_variables.scss
      backgroundColor: 'transparent',
      linkImagesToOriginal: true,
      quality: 75,
      withWebp: true,
      showCaptions: true,
    },
  },
  {
    resolve: 'gatsby-remark-emoji',
    options: {
      emojiConversion: 'shortnameToUnicode',
    },
  },
]
